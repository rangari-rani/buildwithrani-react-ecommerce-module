export type CategoryTheme = {
  gradient: string;
  tint: string;
  label: string;
  border: string;
  glow: string;
};

export const categoryThemes: Record<string, CategoryTheme> = {
  "Self-Care": {
    gradient: "from-rose-50 to-rose-100",
    tint: "bg-rose-50/70",
    label: "text-rose-600",
    border: "border-rose-200",
    glow: "hover:shadow-rose-200/50",
  },
  "Home Essentials": {
    gradient: "from-amber-50 to-amber-100",
    tint: "bg-amber-50/70",
    label: "text-amber-600",
    border: "border-amber-200",
    glow: "hover:shadow-amber-200/50",
  },
  Fitness: {
    gradient: "from-green-50 to-green-100",
    tint: "bg-green-50/70",
    label: "text-green-600",
    border: "border-green-200",
    glow: "hover:shadow-green-200/50",
  },
  Nutrition: {
    gradient: "from-blue-50 to-blue-100",
    tint: "bg-blue-50/70",
    label: "text-blue-600",
    border: "border-blue-200",
    glow: "hover:shadow-blue-200/50",
  },
  Fragrance: {
    gradient: "from-pink-50 to-pink-100",
    tint: "bg-pink-50/70",
    label: "text-pink-600",
    border: "border-pink-300",
    glow: "hover:shadow-pink-300/60",
  },
};

export const DEFAULT_THEME: CategoryTheme = {
  gradient: "from-gray-50 to-gray-100",
  tint: "bg-gray-50/70",
  label: "text-gray-500",
  border: "border-gray-200",
  glow: "hover:shadow-gray-200/50",
};
