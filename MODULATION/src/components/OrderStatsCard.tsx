import { LucideIcon } from 'lucide-react';

export interface OrderStatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
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
    <div className="bg-white dark:bg-bg-secondary rounded-lg p-6 shadow-md border border-gray-200 dark:border-border hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        {/* Contenu */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-text-secondary mb-2">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-text-primary">
            {value}
          </h3>
        </div>

        {/* Icône avec couleur personnalisée */}
        <div
          className="p-4 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon size={28} style={{ color: iconColor }} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
