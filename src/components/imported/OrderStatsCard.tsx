import type { FC } from 'react';

export interface OrderStatsCardProps {
  title: string;
  value: string | number;
  icon: FC<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>;
  iconColor: string;
  iconBgColor: string;
}

export default function OrderStatsCard({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBgColor,
}: OrderStatsCardProps) {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      transition: 'box-shadow 0.3s'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Contenu */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>
            {title}
          </p>
          <h3 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827' }}>
            {value}
          </h3>
        </div>

        {/* Icône avec couleur personnalisée */}
        <div style={{
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: iconBgColor
        }}>
          <Icon size={28} style={{ color: iconColor }} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
