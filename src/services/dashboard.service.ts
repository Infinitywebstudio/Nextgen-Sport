/**
 * NEXTGEN Dashboard Service
 * Service pour les espaces Talent et Recruteur
 */

import { API_ENDPOINTS, getHeaders } from '../config/api.config';
import authService from './auth.service';

// ============================================================
// Types
// ============================================================

// Talent
export interface TalentStats {
  profile_views: number;
  profile_completion: number;
  follower_count: number;
  opportunities: number;
  matches_played: number;
  goals: number;
  assists: number;
  rating: number;
  minutes_played: number;
}

export interface PortfolioImage {
  id: number;
  url: string;
  thumbnail: string;
  title?: string;
}

export interface ActivityItem {
  id: string;
  type: 'view' | 'message' | 'opportunity' | 'badge';
  title: string;
  description: string;
  time: string;
  created_at?: string;
}

export interface ExperienceItem {
  id: string;
  club: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface TalentProfileData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  sport: string;
  position: string;
  bio: string;
  location: string;
  height: string;
  weight: string;
  preferred_foot: string;
  portfolio_urls: string;
  portfolio_gallery: PortfolioImage[];
  skills: string[];
  avatar_url?: string;
  profile_post_id?: number | null;
}

// Recruteur
export interface VisitedTalent {
  id: number;
  name: string;
  sport: string;
  avatar: string;
  visited_at: string;
}

export interface Conversation {
  id: number;
  participant_name: string;
  participant_avatar: string;
  last_message: string;
  last_message_at: string;
  unread_count: number;
}

export interface Message {
  id: number;
  sender_id: number;
  content: string;
  created_at: string;
}

export interface OpportunityItem {
  id: number;
  recruiter_id: number;
  club: string;
  title: string;
  message: string;
  recruiter_avatar: string;
  status: 'pending';
  created_at: string;
  date: string;
}

export interface TalentRequest {
  id: number;
  recruiter_id: number;
  recruiter_name: string;
  recruiter_avatar: string;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}

export interface RecruteurRequest {
  id: number;
  talent_id: number;
  talent_name: string;
  talent_avatar: string;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}

export interface SubscriptionInfo {
  plan: 'free' | 'starter' | 'pro' | 'premium';
  plan_label: string;
  status: 'active' | 'cancelled' | 'expired';
  price: string | null;
  next_billing: string | null;
}

// Generic API response
interface DashboardResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  status?: number;
}

// ============================================================
// Service
// ============================================================

class DashboardService {

  private async request<T>(url: string, options: RequestInit = {}): Promise<DashboardResponse<T>> {
    try {
      const response = await fetch(url, {
        ...options,
        headers: getHeaders(true),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          authService.logout();
          return { success: false, error: 'Session expirée', status: 401 };
        }
        return {
          success: false,
          error: data.message || `Erreur ${response.status}`,
          status: response.status,
        };
      }

      return { success: true, data, status: response.status };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur reseau',
      };
    }
  }

  // ----------------------------------------------------------
  // TALENT
  // ----------------------------------------------------------

  async getTalentStats(): Promise<DashboardResponse<TalentStats>> {
    return this.request<TalentStats>(API_ENDPOINTS.DASHBOARD.TALENT_STATS);
  }

  async getTalentProfile(): Promise<DashboardResponse<TalentProfileData>> {
    return this.request<TalentProfileData>(API_ENDPOINTS.DASHBOARD.TALENT_PROFILE);
  }

  async updateTalentProfile(data: Partial<TalentProfileData>): Promise<DashboardResponse<{ success: boolean; message: string }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_PROFILE, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async uploadPortfolioImage(file: File): Promise<DashboardResponse<{ success: boolean; image: PortfolioImage }>> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('nextgen_token');
      const headers: HeadersInit = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(API_ENDPOINTS.DASHBOARD.TALENT_PORTFOLIO, {
        method: 'POST',
        headers,
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        return { success: false, error: data.message || `Erreur ${response.status}`, status: response.status };
      }
      return { success: true, data, status: response.status };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Erreur reseau' };
    }
  }

  async deletePortfolioImage(imageId: number): Promise<DashboardResponse<{ success: boolean }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_PORTFOLIO_DELETE(imageId), {
      method: 'DELETE',
    });
  }

  // ----------------------------------------------------------
  // TALENT - Activity
  // ----------------------------------------------------------

  async getTalentActivity(): Promise<DashboardResponse<ActivityItem[]>> {
    return this.request<ActivityItem[]>(API_ENDPOINTS.DASHBOARD.TALENT_ACTIVITY);
  }

  // ----------------------------------------------------------
  // TALENT - Experience
  // ----------------------------------------------------------

  async getTalentExperience(): Promise<DashboardResponse<ExperienceItem[]>> {
    return this.request<ExperienceItem[]>(API_ENDPOINTS.DASHBOARD.TALENT_EXPERIENCE);
  }

  async addExperience(data: Omit<ExperienceItem, 'id'> & { id?: string }): Promise<DashboardResponse<{ success: boolean; experience: ExperienceItem }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_EXPERIENCE, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteExperience(expId: string): Promise<DashboardResponse<{ success: boolean }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_EXPERIENCE_DELETE(expId), {
      method: 'DELETE',
    });
  }

  // ----------------------------------------------------------
  // TALENT - Opportunities
  // ----------------------------------------------------------

  async getTalentOpportunities(): Promise<DashboardResponse<OpportunityItem[]>> {
    return this.request<OpportunityItem[]>(API_ENDPOINTS.DASHBOARD.TALENT_OPPORTUNITIES);
  }

  async respondToOpportunity(id: number, status: 'accepted' | 'declined'): Promise<DashboardResponse<{ success: boolean; status: string }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_OPPORTUNITY(id), {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // ----------------------------------------------------------
  // TALENT - Conversations
  // ----------------------------------------------------------

  async getTalentConversations(): Promise<DashboardResponse<Conversation[]>> {
    return this.request<Conversation[]>(API_ENDPOINTS.DASHBOARD.TALENT_CONVERSATIONS);
  }

  async getTalentMessages(conversationId: number): Promise<DashboardResponse<Message[]>> {
    return this.request<Message[]>(API_ENDPOINTS.DASHBOARD.TALENT_CONVERSATION(conversationId));
  }

  async sendTalentMessage(conversationId: number, message: string): Promise<DashboardResponse<{ success: boolean; message_id: number }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_CONVERSATION(conversationId), {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }

  // ----------------------------------------------------------
  // TALENT - Requests
  // ----------------------------------------------------------

  async getTalentRequests(status?: string): Promise<DashboardResponse<TalentRequest[]>> {
    const url = status
      ? `${API_ENDPOINTS.DASHBOARD.TALENT_REQUESTS}?status=${status}`
      : API_ENDPOINTS.DASHBOARD.TALENT_REQUESTS;
    return this.request<TalentRequest[]>(url);
  }

  async respondToRequest(requestId: number, status: 'accepted' | 'declined'): Promise<DashboardResponse<{ success: boolean; status: string }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.TALENT_REQUEST(requestId), {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async createRequest(talentId: number, message: string): Promise<DashboardResponse<{ success: boolean; request_id: number }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.RECRUTEUR_REQUEST, {
      method: 'POST',
      body: JSON.stringify({ talent_id: talentId, message }),
    });
  }

  async getRecruteurRequests(): Promise<DashboardResponse<RecruteurRequest[]>> {
    return this.request<RecruteurRequest[]>(API_ENDPOINTS.DASHBOARD.RECRUTEUR_REQUEST);
  }

  // ----------------------------------------------------------
  // RECRUTEUR - Visited
  // ----------------------------------------------------------

  async getVisitedTalents(): Promise<DashboardResponse<VisitedTalent[]>> {
    return this.request<VisitedTalent[]>(API_ENDPOINTS.DASHBOARD.RECRUTEUR_VISITED);
  }

  async recordVisit(talentId: number): Promise<DashboardResponse<{ success: boolean }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.RECRUTEUR_VISIT, {
      method: 'POST',
      body: JSON.stringify({ talent_id: talentId }),
    });
  }

  // ----------------------------------------------------------
  // RECRUTEUR - Conversations
  // ----------------------------------------------------------

  async getConversations(): Promise<DashboardResponse<Conversation[]>> {
    return this.request<Conversation[]>(API_ENDPOINTS.DASHBOARD.CONVERSATIONS);
  }

  async getMessages(conversationId: number): Promise<DashboardResponse<Message[]>> {
    return this.request<Message[]>(API_ENDPOINTS.DASHBOARD.CONVERSATION(conversationId));
  }

  async sendMessage(conversationId: number, message: string): Promise<DashboardResponse<{ success: boolean; message_id: number }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.CONVERSATION(conversationId), {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }

  async startConversation(talentId: number, message: string): Promise<DashboardResponse<{ success: boolean; conversation_id: number; message_id: number }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.CONVERSATIONS, {
      method: 'POST',
      body: JSON.stringify({ talent_id: talentId, message }),
    });
  }

  // ----------------------------------------------------------
  // ACCOUNT (common)
  // ----------------------------------------------------------

  async updateAccountProfile(data: { first_name?: string; last_name?: string; phone?: string }): Promise<DashboardResponse<{ success: boolean; message: string }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.ACCOUNT_PROFILE, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async changePassword(current: string, newPassword: string): Promise<DashboardResponse<{ success: boolean; message: string; token?: string }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.ACCOUNT_PASSWORD, {
      method: 'PUT',
      body: JSON.stringify({ current, new_password: newPassword }),
    });
  }

  async deactivateAccount(): Promise<DashboardResponse<{ success: boolean; message: string }>> {
    return this.request(API_ENDPOINTS.DASHBOARD.ACCOUNT_DEACTIVATE, {
      method: 'DELETE',
    });
  }

  async getSubscription(): Promise<DashboardResponse<SubscriptionInfo>> {
    return this.request<SubscriptionInfo>(API_ENDPOINTS.DASHBOARD.ACCOUNT_SUBSCRIPTION);
  }
}

const dashboardService = new DashboardService();
export default dashboardService;
