// Category images
export const sampleImages: Record<string, string> = {
  fragrance: "/landing-page/fragrance.png",
  skincare: "/landing-page/skincare.png",
  haircare: "/landing-page/haircare.png",
  bodycare: "/landing-page/bodycare.png",
  nutrition: "/landing-page/nutrition.png",
  "gym-equipment": "/landing-page/gym.png",
  accessories: "/landing-page/accessories.png",
  recovery: "/landing-page/recovery.png",
  "home-essentials": "/landing-page/homeessentials.png",
};

// Offer + expiry samples
export const offerSamples = [
  { text: "Flat 5% OFF", value: 5 },
  { text: "Flat 10% OFF", value: 10 },
  { text: "Flat 15% OFF", value: 15 },
  { text: "₹100 OFF", value: 8 },
  { text: "Buy 1 Get 1", value: 12 },
  { text: "20% Cashback", value: 20 },
];

export const expirySamples = [
  { text: "Expires on Oct 22", date: new Date("2025-10-22") },
  { text: "Expires on Oct 30", date: new Date("2025-10-30") },
  { text: "Expires on Nov 5", date: new Date("2025-11-05") },
  { text: "Expires on Nov 15", date: new Date("2025-11-15") },
  { text: "Expires on Dec 1", date: new Date("2025-12-01") },
];

// Utility
export const randomItem = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

// Categories
export const mainCategories = [
  { name: "Fragrance", slug: "fragrance" },
  { name: "Skincare", slug: "skincare" },
  { name: "Haircare", slug: "haircare" },
  { name: "Bodycare", slug: "bodycare" },
  { name: "Nutrition", slug: "nutrition" },
  { name: "Gym Equipment", slug: "gym-equipment" },
  { name: "Accessories", slug: "accessories" },
  { name: "Recovery", slug: "recovery" },
  { name: "Home Essentials", slug: "home-essentials" },
];
