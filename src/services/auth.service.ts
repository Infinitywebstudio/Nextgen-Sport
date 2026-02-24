/**
 * NEXTGEN Authentication Service
 * Gestion de l'authentification JWT
 */

import { API_ENDPOINTS, getHeaders } from '../config/api.config';
import type { ApiResponse } from './wordpress.service';

// Types
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  account_type: 'client' | 'prestataire';
  first_name?: string;
  last_name?: string;
  phone?: string;
}

// Interface pour les données envoyées à WordPress
interface WordPressRegisterData {
  username: string;
  email: string;
  password: string;
  role: 'nextgen_client' | 'nextgen_talent';
  first_name?: string;
  last_name?: string;
}

export interface AuthToken {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  account_type?: string;
  avatar_url?: string;
  [key: string]: unknown;
}

/**
 * Service d'authentification
 */
class AuthService {
  private readonly TOKEN_KEY = 'nextgen_token';
  private readonly USER_KEY = 'nextgen_user';

  /**
   * Connexion utilisateur
   */
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthToken>> {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.TOKEN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Identifiants incorrects',
        };
      }

      const data: AuthToken = await response.json();

      // Sauvegarder le token
      this.saveToken(data.token);

      // Récupérer les infos utilisateur
      await this.fetchUserData();

      return {
        success: true,
        data,
        message: 'Connexion réussie',
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur de connexion',
      };
    }
  }

  /**
   * Inscription utilisateur
   * Transforme les données frontend vers le format WordPress
   */
  async register(userData: RegisterData): Promise<ApiResponse<unknown>> {
    try {
      // Mapper les données frontend vers le format WordPress
      const wpData: WordPressRegisterData = {
        username: userData.email, // Utiliser l'email comme username
        email: userData.email,
        password: userData.password,
        role: userData.account_type === 'prestataire' ? 'nextgen_talent' : 'nextgen_client',
        first_name: userData.first_name,
        last_name: userData.last_name,
      };

      console.log('📤 Envoi inscription vers WordPress:', { ...wpData, password: '***' });

      const response = await fetch(API_ENDPOINTS.NEXTGEN.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wpData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('❌ Erreur inscription WordPress:', data);
        return {
          success: false,
          error: data.message || 'Erreur lors de l\'inscription',
        };
      }

      console.log('✅ Inscription WordPress réussie:', data);

      // Sauvegarder le type de compte pour les redirections
      localStorage.setItem('nextgen_account_type', userData.account_type);

      // Auto-login : utiliser le token renvoyé par l'inscription (évite un 2e appel)
      if (data.token) {
        this.saveToken(data.token);
        await this.fetchUserData();
        console.log('✅ Auto-login via token d\'inscription');
      } else if (data.success) {
        // Fallback : login classique si pas de token dans la réponse
        const loginResult = await this.login({
          username: userData.email,
          password: userData.password,
        });

        if (!loginResult.success) {
          return {
            success: true,
            data,
            message: 'Inscription réussie, mais connexion automatique échouée. Veuillez vous connecter manuellement.',
          };
        }
      }

      return {
        success: true,
        data,
        message: 'Inscription réussie',
      };
    } catch (error) {
      console.error('Register error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur d\'inscription',
      };
    }
  }

  /**
   * Déconnexion
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    window.location.href = '/pages/signin';
  }

  /**
   * Vérifier si l'utilisateur est connecté
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  /**
   * Récupérer le token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Sauvegarder le token
   */
  private saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Récupérer les données utilisateur depuis l'API
   */
  private async fetchUserData(): Promise<void> {
    try {
      const response = await fetch(API_ENDPOINTS.WP.ME, {
        headers: getHeaders(true),
      });

      if (response.ok) {
        const userData = await response.json();
        this.saveUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  /**
   * Sauvegarder les données utilisateur
   */
  public saveUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /**
   * Récupérer les données utilisateur
   */
  getUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;

    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  /**
   * Vérifier la validité du token
   */
  async validateToken(): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.VALIDATE, {
        method: 'POST',
        headers: getHeaders(true),
      });

      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Récupérer le rôle de l'utilisateur
   */
  getUserRole(): string | null {
    const user = this.getUser();
    return user?.role || null;
  }

  /**
   * Récupérer le type de compte
   */
  getAccountType(): 'client' | 'prestataire' | null {
    // D'abord vérifier dans les données utilisateur
    const user = this.getUser();
    if (user?.account_type) {
      return user.account_type as 'client' | 'prestataire';
    }
    // Sinon vérifier le rôle WordPress
    if (user?.roles) {
      const roles = user.roles as string[];
      if (roles.includes('nextgen_talent')) return 'prestataire';
      if (roles.includes('nextgen_client')) return 'client';
    }
    // Fallback sur le localStorage
    const storedType = localStorage.getItem('nextgen_account_type');
    if (storedType === 'client' || storedType === 'prestataire') {
      return storedType;
    }
    return null;
  }

  /**
   * Vérifier si l'utilisateur est un client
   */
  isClient(): boolean {
    return this.getAccountType() === 'client';
  }

  /**
   * Vérifier si l'utilisateur est un prestataire
   */
  isPrestataire(): boolean {
    return this.getAccountType() === 'prestataire';
  }

  /**
   * Vérifier si l'utilisateur est admin
   */
  isAdmin(): boolean {
    const user = this.getUser();
    if (user?.role === 'administrator') return true;
    if (user?.roles) {
      const roles = user.roles as string[];
      return roles.includes('administrator');
    }
    return false;
  }

  /**
   * Connexion/Inscription via Google
   * @param accessToken - Access token Google (depuis useGoogleLogin)
   * @param accountType - Type de compte à créer si nouvel utilisateur
   */
  async loginWithGoogle(accessToken: string, accountType: 'client' | 'prestataire' = 'client'): Promise<ApiResponse<unknown>> {
    try {
      // Récupérer les infos utilisateur via l'API Google avec l'access token
      const googleUserInfo = await this.fetchGoogleUserInfo(accessToken);

      if (!googleUserInfo) {
        return {
          success: false,
          error: 'Impossible de récupérer les informations Google',
        };
      }

      console.log('🔐 Google Auth - Données utilisateur:', {
        email: googleUserInfo.email,
        name: googleUserInfo.name,
        picture: googleUserInfo.picture,
      });

      // Envoyer les infos à WordPress pour authentification/création
      const response = await fetch(API_ENDPOINTS.NEXTGEN.REGISTER + '-google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          google_token: accessToken,
          email: googleUserInfo.email,
          name: googleUserInfo.name,
          first_name: googleUserInfo.given_name,
          last_name: googleUserInfo.family_name,
          picture: googleUserInfo.picture,
          account_type: accountType,
          role: accountType === 'prestataire' ? 'nextgen_talent' : 'nextgen_client',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('❌ Erreur Google Auth WordPress:', data);
        return {
          success: false,
          error: data.message || 'Erreur lors de la connexion Google',
        };
      }

      console.log('✅ Google Auth WordPress réussi:', data);

      // Sauvegarder le token et les données utilisateur
      if (data.token) {
        this.saveToken(data.token);
      }

      localStorage.setItem('nextgen_account_type', accountType);

      if (data.user) {
        this.saveUser(data.user);
      }

      return {
        success: true,
        data,
        message: 'Connexion Google réussie',
      };
    } catch (error) {
      console.error('Google login error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur de connexion Google',
      };
    }
  }

  /**
   * Récupérer les infos utilisateur depuis l'API Google avec un access token
   */
  private async fetchGoogleUserInfo(accessToken: string): Promise<GoogleUserInfo | null> {
    try {
      const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        console.error('Erreur API Google userinfo:', response.status);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur fetch Google userinfo:', error);
      return null;
    }
  }

}

// Interface pour les données Google
interface GoogleUserInfo {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  sub: string; // Google user ID
}

// Export singleton instance
const authService = new AuthService();
export default authService;
