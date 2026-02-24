/**
 * NEXTGEN Subscription Redux Slice
 * State management pour l'abonnement utilisateur
 */

import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import subscriptionService from '../../services/subscription.service';
import type {
  PlanSlug,
  SubscriptionStatus,
  SubscriptionUsage,
  SubscriptionFeatures,
  SubscriptionData,
  PaymentProvider,
} from '../../services/subscription.service';

// Re-export les types pour usage externe
export type { PlanSlug, SubscriptionStatus, SubscriptionUsage, SubscriptionFeatures, PaymentProvider };

// ============================================================
// State
// ============================================================

export interface SubscriptionState {
  plan: PlanSlug;
  planLabel: string;
  status: SubscriptionStatus;
  price: string | null;
  currency: string;
  paymentProvider: PaymentProvider | null;
  trialEnd: string | null;
  currentPeriodEnd: string | null;
  trialUsed: boolean;
  usage: SubscriptionUsage;
  features: SubscriptionFeatures;
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

const initialState: SubscriptionState = {
  plan: 'free',
  planLabel: 'Gratuit',
  status: 'none',
  price: null,
  currency: 'EUR',
  paymentProvider: null,
  trialEnd: null,
  currentPeriodEnd: null,
  trialUsed: false,
  usage: {
    profile_views_used: null,
    profile_views_limit: null,
    videos_used: null,
    videos_limit: null,
  },
  features: {
    video_limit: null,
    profile_views_limit: null,
    advanced_search: false,
    badge: null,
    talent_tier_access: [],
    search_priority: false,
    stats_access: false,
    notifications: false,
    pro_dashboard: false,
    pre_access_24h: false,
  },
  loading: false,
  loaded: false,
  error: null,
};

// ============================================================
// Async Thunks
// ============================================================

export const fetchSubscription = createAsyncThunk(
  'subscription/fetch',
  async (_, { rejectWithValue }) => {
    const response = await subscriptionService.getSubscription();
    if (!response.success || !response.data) {
      return rejectWithValue(response.error || 'Impossible de charger l\'abonnement');
    }
    return response.data;
  },
);

export const activateTrial = createAsyncThunk(
  'subscription/activateTrial',
  async (plan: PlanSlug, { rejectWithValue }) => {
    const response = await subscriptionService.activateTrial(plan);
    if (!response.success || !response.data) {
      return rejectWithValue(response.error || 'Impossible d\'activer l\'essai gratuit');
    }
    return response.data;
  },
);

// ============================================================
// Slice
// ============================================================

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    resetSubscription: () => initialState,
    updateUsage: (state, action: PayloadAction<Partial<SubscriptionUsage>>) => {
      state.usage = { ...state.usage, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchSubscription
      .addCase(fetchSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscription.fulfilled, (state, action: PayloadAction<SubscriptionData>) => {
        state.loading = false;
        state.loaded = true;
        state.plan = action.payload.plan;
        state.planLabel = action.payload.plan_label;
        state.status = action.payload.status;
        state.price = action.payload.price;
        state.currency = action.payload.currency;
        state.paymentProvider = action.payload.payment_provider;
        state.trialEnd = action.payload.trial_end;
        state.currentPeriodEnd = action.payload.current_period_end;
        state.trialUsed = action.payload.trial_used;
        state.usage = action.payload.usage;
        state.features = action.payload.features;
      })
      .addCase(fetchSubscription.rejected, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.error = action.payload as string;
      })
      // activateTrial
      .addCase(activateTrial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(activateTrial.fulfilled, (state, action) => {
        state.loading = false;
        state.plan = action.payload.plan as PlanSlug;
        state.status = action.payload.status as SubscriptionStatus;
        state.trialEnd = action.payload.trial_end;
        state.trialUsed = true;
      })
      .addCase(activateTrial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSubscription, updateUsage } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
