export interface CategoryCardProps {
  id: string;
  name: string;
  serviceCount: number;
  icon: React.ReactNode; // Icône Lucide ou autre
  onClick?: (categoryId: string) => void;
}

export default function CategoryCard({
  id,
  name,
  serviceCount,
  icon,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(id)}
      className="group relative bg-white dark:bg-bg-secondary rounded-2xl p-8 border border-gray-200 dark:border-border transition-all duration-300 hover:bg-black dark:hover:bg-black hover:border-black text-center w-full"
    >
      {/* Icône */}
      <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-bg-tertiary group-hover:bg-[#ff6961]/20 transition-all duration-300">
        <div className="text-gray-700 dark:text-text-primary group-hover:text-[#ff6961] transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Nom de la catégorie */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary group-hover:text-white transition-colors duration-300 mb-2">
        {name}
      </h3>

      {/* Nombre de services */}
      <p className="text-base text-gray-500 dark:text-text-muted group-hover:text-gray-300 transition-colors duration-300">
        {serviceCount} Service{serviceCount > 1 ? 's' : ''}
      </p>
    </button>
  );
}
