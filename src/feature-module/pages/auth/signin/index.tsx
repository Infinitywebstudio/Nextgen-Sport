import { useState, FormEvent } from "react";
import ImageWithBasePath from "../../../../core/img";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import authService from "../../../../services/auth.service";
import subscriptionService from "../../../../services/subscription.service";
import { useGoogleLogin } from "@react-oauth/google";

type PasswordField = "password";

const GOOGLE_ENABLED = !!import.meta.env.VITE_GOOGLE_CLIENT_ID;

/**
 * Détermine la route post-login en vérifiant l'abonnement.
 * Si free + pas de trial → onboarding. Sinon → dashboard selon rôle.
 */
async function resolvePostLoginRoute(): Promise<string> {
  const defaultRoute = authService.isAdmin()
    ? all_routes.talentDashboard // TODO: remplacer par adminDashboard quand disponible
    : authService.isPrestataire()
      ? all_routes.talentDashboard
      : all_routes.recruteurTalents;

  try {
    const sub = await subscriptionService.getSubscription();
    if (
      sub.success &&
      sub.data &&
      sub.data.plan === "free" &&
      sub.data.status === "none" &&
      !sub.data.trial_used
    ) {
      return all_routes.onboarding;
    }
  } catch {
    // Fallback : si le fetch échoue, aller au dashboard
  }
  return defaultRoute;
}

/* Google login button – only mounted when GOOGLE_ENABLED */
const GoogleLoginBtn = ({
  loading,
  onError,
}: {
  loading: boolean;
  onError: (msg: string) => void;
}) => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setGoogleLoading(true);
      onError("");
      try {
        // Au login Google, on ne force pas de type de compte :
        // le backend identifie l'utilisateur existant ou crée un compte par défaut.
        const existingType = authService.getAccountType();
        const response = await authService.loginWithGoogle(
          tokenResponse.access_token,
          existingType || "client"
        );
        if (response.success) {
          const route = await resolvePostLoginRoute();
          navigate(route);
        } else {
          onError(response.error || "Échec de la connexion Google");
        }
      } catch (err) {
        console.error("Google login error:", err);
        onError("Erreur lors de la connexion avec Google");
      } finally {
        setGoogleLoading(false);
      }
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
      onError("Erreur de connexion Google. Veuillez réessayer.");
    },
  });

  return (
    <>
      <div className="nex-auth-divider">
        <span>ou continuer avec</span>
      </div>
      <button
        type="button"
        className="nex-auth-google"
        onClick={() => googleLogin()}
        disabled={googleLoading || loading}
      >
        {googleLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Connexion Google...
          </>
        ) : (
          <>
            <ImageWithBasePath
              src="assets/img/icons/google-icon.svg"
              alt="Google"
            />
            Continuer avec Google
          </>
        )}
      </button>
    </>
  );
};

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.username || !formData.password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);
    try {
      const response = await authService.login({
        username: formData.username,
        password: formData.password,
      });

      if (response.success) {
        const route = await resolvePostLoginRoute();
        navigate(route);
      } else {
        setError(response.error || "Échec de la connexion");
      }
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nex-auth-page">
      <div className="nex-auth-container">
        <div className="nex-auth-card">
          <h1 className="nex-auth-title">Connexion</h1>
          <p className="nex-auth-subtitle">
            Connectez-vous pour accéder à votre compte
          </p>

          <form onSubmit={handleSubmit}>
            <div className="nex-auth-field">
              <label>Email</label>
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                disabled={loading}
                placeholder="votre@email.com"
              />
            </div>

            <div className="nex-auth-field">
              <label>Mot de passe</label>
              <div className="nex-auth-field__input-wrap">
                <input
                  type={passwordVisibility.password ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Votre mot de passe"
                />
                <span
                  className="nex-auth-field__icon"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  <i
                    className={`ti ${
                      passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                    }`}
                  />
                </span>
              </div>
            </div>

            {error && (
              <div className="nex-auth-error">
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="nex-auth-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Connexion...
                </>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          {GOOGLE_ENABLED && (
            <GoogleLoginBtn
              loading={loading}
              onError={(msg) => setError(msg || null)}
            />
          )}

          <div className="nex-auth-links">
            <p>
              <Link to={all_routes.forgotPassword}>
                Mot de passe oublié ?
              </Link>
            </p>
            <p>
              Pas de compte ?{" "}
              <Link to={all_routes.signUp}>S'inscrire</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
