export type Testimonial = {
  name: string;
  description: string;
  rating: number;
  highlights?: string[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya S.",
    description:
      "Glow & Care Face Serum has become a must-have in my routine. My skin feels hydrated and radiant every morning.",
    rating: 5,
  },
  {
    name: "Arjun K.",
    description:
      "Protein Powder Shake and Daily Energy Drink have completely improved my mornings and energy levels.",
    rating: 4,
  },
  {
    name: "Kavya R.",
    description:
      "The Eco Yoga Mat and Adjustable Dumbbells upgraded my home workouts and flexibility.",
    rating: 5,
  },
  {
    name: "David M.",
    description:
      "The Indoor Plant, Desk Lamp, and Stress Ball transformed my home workspace into a calm, cozy space.",
    rating: 4,
  },
];
