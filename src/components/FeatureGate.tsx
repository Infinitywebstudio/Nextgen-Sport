/**
 * FeatureGate Component
 * Conditionne l'affichage d'un contenu selon l'accès à une fonctionnalité du plan
 *
 * Usage :
 *   <FeatureGate feature="advanced_search">
 *     <AdvancedSearchPanel />
 *   </FeatureGate>
 *
 *   <FeatureGate feature="upload_video" blurred>
 *     <VideoUploadSection />
 *   </FeatureGate>
 */

import { type ReactNode } from 'react';
import { useFeatureAccess } from '../hooks/useSubscription';
import UpgradePrompt from './UpgradePrompt';

interface FeatureGateProps {
  feature: string;
  children: ReactNode;
  fallback?: ReactNode;
  showUpgradePrompt?: boolean;
  blurred?: boolean;
}

const FeatureGate = ({
  feature,
  children,
  fallback,
  showUpgradePrompt = true,
  blurred = false,
}: FeatureGateProps) => {
  const { allowed, reason, subscription } = useFeatureAccess(feature);

  if (allowed) return <>{children}</>;

  if (fallback) return <>{fallback}</>;

  if (blurred) {
    return (
      <div className="nex-feature-gate nex-feature-gate--blurred">
        <div className="nex-feature-gate__content">
          {children}
        </div>
        <div className="nex-feature-gate__overlay">
          <UpgradePrompt reason={reason} currentPlan={subscription.plan} />
        </div>
      </div>
    );
  }

  if (showUpgradePrompt) {
    return <UpgradePrompt reason={reason} currentPlan={subscription.plan} />;
  }

  return null;
};

export default FeatureGate;
