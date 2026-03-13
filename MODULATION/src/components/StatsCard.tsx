import { LucideIcon } from 'lucide-react';

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

const colorClasses = {
  blue: {
    icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    trend: 'text-blue-600 dark:text-blue-400',
  },
  green: {
    icon: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    trend: 'text-green-600 dark:text-green-400',
  },
  orange: {
    icon: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    trend: 'text-orange-600 dark:text-orange-400',
  },
  red: {
    icon: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    trend: 'text-red-600 dark:text-red-400',
  },
  purple: {
    icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    trend: 'text-purple-600 dark:text-purple-400',
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
  const colorClass = colorClasses[color];

  return (
    <div className="bg-white dark:bg-bg-secondary rounded-lg p-6 shadow-md border border-gray-200 dark:border-border hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        {/* Contenu */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-text-secondary mb-1">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-text-primary mb-2">
            {value}
          </h3>

          {/* Tendance et sous-titre */}
          <div className="flex items-center gap-2">
            {trend && (
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </span>
            )}
            {subtitle && (
              <span className="text-xs text-gray-500 dark:text-text-muted">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Icône */}
        <div className={`p-3 rounded-lg ${colorClass.icon}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
