export interface SubCategory {
    name: string;
    slug: string;
    children?: SubCategory[];
  }
  
  export interface Category {
    name: string;
    slug: string;
    children?: SubCategory[];
  }
  
 export const categories: Category[] = [
   {
    name: "Fragrance",
    slug: "fragrance",
    children: [
            { name: "Perfumes", slug: "perfumes" },
      { name: "Scented Candles", slug: "scented-candles" },
            { name: "Car Freshener", slug: "car-freshener" },
      { name: "Room Spray", slug: "room-spray" },
      { name: "Incense Sticks", slug: "incense-sticks" },
       { name: "Essential Oils", slug: "essential-oils" },
    ],
  },
  {
    name: "Self-Care",
    slug: "self-care",
    children: [
      {
        name: "Skincare",
        slug: "skincare",
        children: [
          { name: "Facewash", slug: "facewash" },
          { name: "Soap", slug: "soap" },
          { name: "Body Lotion", slug: "body-lotion" },
          { name: "Face Masks", slug: "face-masks" },
          { name: "Scrubs", slug: "scrubs" },
        ],
      },
      {
        name: "Haircare",
        slug: "haircare",
        children: [
          { name: "Hair Oils", slug: "hair-oils" },
          { name: "Shampoo", slug: "shampoo" },
          { name: "Conditioner", slug: "conditioner" },
          { name: "Combs & Brush", slug: "combs-brush" },
          { name: "Hairbands", slug: "hairbands" },
        ],
      },
      {
        name: "Bodycare",
        slug: "bodycare",
        children: [
          { name: "Body Wash", slug: "body-wash" },
          { name: "Bath Soaps", slug: "bath-soaps" },
          { name: "Body Scrub", slug: "body-scrub" },
          { name: "Deodorant", slug: "deodorant" },
          { name: "Hand Wash", slug: "hand-wash" },
        ],
      },
    ],
  },
  {
    name: "Nutrition",
    slug: "nutrition",
    children: [
      { name: "Teas", slug: "teas" },
      { name: "Drinks", slug: "drinks" },
      { name: "Protein Powders", slug: "protein-powders" },
      { name: "Multivitamins", slug: "multivitamins" },
      { name: "Energy Bars", slug: "energy-bars" },
    ],
  },
    {
    name: "Fitness",
    slug: "fitness",
    children: [
      {
        name: "Gym Equipment",
        slug: "gym-equipment",
        children: [
          { name: "Dumbbells", slug: "dumbbells" },
          { name: "Resistance Bands", slug: "resistance-bands" },
          { name: "Kettlebells", slug: "kettlebells" },
          { name: "Push-Up Bars", slug: "push-up-bars" },
          { name: "Jump Ropes", slug: "jump-ropes" },
        ],
      },
      {
        name: "Accessories",
        slug: "accessories",
        children: [
          { name: "Yoga Mats", slug: "yoga-mats" },
          { name: "Water Bottles", slug: "water-bottles" },
          { name: "Gym Bags", slug: "gym-bags" },
          { name: "Towels", slug: "towels" },
          { name: "Fitness Gloves", slug: "fitness-gloves" },
        ],
      },
      {
        name: "Recovery",
        slug: "recovery",
        children: [
          { name: "Foam Rollers", slug: "foam-rollers" },
          { name: "Massage Balls", slug: "massage-balls" },
          { name: "Muscle Relief Balm", slug: "muscle-relief-balm" },
          { name: "Hot & Cold Gel Packs", slug: "hot-cold-gel-packs" },
          { name: "Compression Sleeves", slug: "compression-sleeves" },
        ],
      },
    ],
  },
  {
    name: "Home Essentials",
    slug: "home-essentials",
    children: [
      { name: "Blankets", slug: "blankets" },
      { name: "Plants", slug: "plants" },
      { name: "Mindfulness Books", slug: "mindfulness-books" },
      { name: "Night Lamps", slug: "night-lamps" },
      { name: "Stress Balls", slug: "stress-balls" },
      { name: "Meditation Cushions", slug: "meditation-cushions" },
    ],
  },
];

  