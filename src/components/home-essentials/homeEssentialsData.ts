export interface HomeCategory {
  name: string;
  description: string;
  bgColor: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    name: "Plants",
    description: "Indoor and outdoor plants",
    bgColor: "bg-green-200",
  },
  {
    name: "Blankets",
    description: "Cozy blankets for all seasons",
    bgColor: "bg-blue-200",
  },
  {
    name: "Night Lamps",
    description: "Ambient lamps for night time",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Mindfulness Books",
    description: "Books to feel fresh",
    bgColor: "bg-purple-200",
  },
];
