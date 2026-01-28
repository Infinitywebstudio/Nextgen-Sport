import type { FC } from 'react';

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: FC<{ size?: number }>;  // Lucide icon component
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

const colorStyles = {
  blue: {
    icon: { backgroundColor: '#dbeafe', color: '#2563eb' },
  },
  green: {
    icon: { backgroundColor: '#dcfce7', color: '#16a34a' },
  },
  orange: {
    icon: { backgroundColor: '#ffedd5', color: '#ea580c' },
  },
  red: {
    icon: { backgroundColor: '#fee2e2', color: '#dc2626' },
  },
  purple: {
    icon: { backgroundColor: '#f3e8ff', color: '#9333ea' },
  },
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  subtitle,
  color = 'blue',
}: StatsCardProps) {
  const colorStyle = colorStyles[color];

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      transition: 'box-shadow 0.3s'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Contenu */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '4px' }}>
            {title}
          </p>
          <h3 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            {value}
          </h3>

          {/* Tendance et sous-titre */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {trend && (
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: trend.isPositive ? '#16a34a' : '#dc2626'
              }}>
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </span>
            )}
            {subtitle && (
              <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Icône */}
        <div style={{
          padding: '12px',
          borderRadius: '8px',
          ...colorStyle.icon
        }}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
