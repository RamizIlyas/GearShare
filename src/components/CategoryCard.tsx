// import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  // icon: LucideIcon;
  title: string;
  count: string;
  gradient: string;
  onClick: () => void;
}

export function CategoryCard({
  // icon: Icon,
  title,
  count,
  gradient,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      ></div>
      <div className="relative">
        <div
          className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {/* <Icon className="w-7 h-7 text-white" /> */}
        </div>
        <h3 className="text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{count} items</p>
      </div>
    </button>
  );
}
