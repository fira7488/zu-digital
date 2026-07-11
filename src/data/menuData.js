// Zu Burger Spot — real menu data (Birr)
// Each category carries one representative food photo.

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const categories = [
  {
    id: "burgers",
    label: "Burger Varieties",
    icon: "🍔",
    image: img("1636907229111-a8ac768fe6c9"),
    tagline: "Flame-grilled, stacked fresh, served hot.",
  },
  {
    id: "sandwiches",
    label: "Sandwich Varieties",
    icon: "🥪",
    image: img("1540713434306-58505cf1b6fc"),
    tagline: "Layered classics, toasted to order.",
  },
  {
    id: "pancakes",
    label: "Pancake Selection",
    icon: "🥞",
    image: img("1523789766234-680896bf4327"),
    tagline: "Soft stacks with sweet, rich toppings.",
  },
  {
    id: "shawarma",
    label: "Shawarma & Burrito",
    icon: "🌯",
    image: img("1529006557810-274b9b2fc783"),
    tagline: "Rolled tight, packed with flavor.",
  },
  {
    id: "fruit",
    label: "Fruit Selection",
    icon: "🍎",
    image: img("1493770348161-369560ae357d"),
    tagline: "Fresh cut, simple and light.",
  },
  {
    id: "juices",
    label: "Fresh Juices & Shakes",
    icon: "🥤",
    image: img("1716956755600-4d32af2b8f87"),
    tagline: "Fruit-forward, blended fresh daily.",
  },
  {
    id: "milkshakes",
    label: "Milkshakes",
    icon: "🥤",
    image: img("1553909489-ec2175ef3f52"),
    tagline: "Thick, creamy, and generously topped.",
  },
  {
    id: "frappe",
    label: "Frappe Varieties",
    icon: "☕",
    image: img("1471922597728-92f81bfe2445"),
    tagline: "Cold-blended coffee, done right.",
  },
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    icon: "🫖",
    image: img("1558160074-4d7d8bdf4256"),
    tagline: "Simple, warm, classic.",
  },
  {
    id: "soft-drinks",
    label: "Soft Drinks",
    icon: "🧃",
    image: img("1527960471264-932f39eb5846"),
    tagline: "Ice-cold and ready to go.",
  },
  {
    id: "extras",
    label: "Extras",
    icon: "🍟",
    image: img("1707773726979-4b87cd1c838a"),
    tagline: "Perfect little add-ons.",
  },
];

export const menuItems = [
  // Burger Varieties
  {
    id: "b1",
    name: "Special Burger",
    category: "burgers",
    price: 550,
    description:
      "A signature burger layered with rich toppings and house flavor.",
    featured: true,
  },
  { id: "b2", name: "Normal Burger", category: "burgers", price: 450 },
  { id: "b3", name: "Cheese Burger", category: "burgers", price: 450 },
  { id: "b4", name: "American Burger", category: "burgers", price: 700 },
  { id: "b5", name: "Chicken Burger", category: "burgers", price: 650 },

  // Sandwich Varieties
  {
    id: "s1",
    name: "Special Sandwich",
    category: "sandwiches",
    price: 400,
    description:
      "A loaded, toasted favorite with balanced fillings and crunch.",
    featured: true,
  },
  { id: "s2", name: "Tuna Sandwich", category: "sandwiches", price: 400 },
  { id: "s3", name: "Chicken Sandwich", category: "sandwiches", price: 450 },
  { id: "s4", name: "Vegetable Sandwich", category: "sandwiches", price: 300 },
  { id: "s5", name: "Egg Sandwich", category: "sandwiches", price: 300 },
  { id: "s6", name: "Club Sandwich", category: "sandwiches", price: 450 },

  // Pancake Selection
  {
    id: "p1",
    name: "Special Pancake",
    category: "pancakes",
    price: 350,
    description: "Soft, fluffy stack with a rich sweet finish.",
    featured: true,
  },
  {
    id: "p2",
    name: "Double Chocolate Pancake",
    category: "pancakes",
    price: 300,
  },
  {
    id: "p3",
    name: "Nutella Chocolate Pancake",
    category: "pancakes",
    price: 350,
  },
  { id: "p4", name: "Strawberry Pancake", category: "pancakes", price: 300 },
  {
    id: "p5",
    name: "Honey & Butter Pancake",
    category: "pancakes",
    price: 200,
  },
  {
    id: "p6",
    name: "Banana Chocolate Pancake",
    category: "pancakes",
    price: 250,
  },
  { id: "p7", name: "Caramel Pancake", category: "pancakes", price: 250 },

  // Shawarma & Burrito
  {
    id: "w1",
    name: "Special Shawarma",
    category: "shawarma",
    price: 650,
    description:
      "A hearty rolled wrap packed with flavor and house-made fillings.",
    featured: true,
  },
  { id: "w2", name: "Chicken Shawarma", category: "shawarma", price: 600 },
  { id: "w3", name: "Tuna Shawarma", category: "shawarma", price: 550 },
  { id: "w4", name: "Vegetable Shawarma", category: "shawarma", price: 400 },
  { id: "w5", name: "Special Burrito", category: "shawarma", price: 750 },

  // Fruit Selection
  { id: "f1", name: "Special Fruit Salad", category: "fruit", price: 300 },
  { id: "f2", name: "Normal Fruit Salad", category: "fruit", price: 200 },

  // Fresh Juices & Shakes
  {
    id: "j1",
    name: "Special Juice",
    category: "juices",
    price: 200,
    description: "A vibrant, fresh blend made for a brighter refreshment.",
    featured: true,
  },
  { id: "j2", name: "Mango Juice", category: "juices", price: 200 },
  { id: "j3", name: "Mango Shake", category: "juices", price: 250 },
  { id: "j4", name: "Avocado Juice", category: "juices", price: 180 },
  { id: "j5", name: "Avocado Shake", category: "juices", price: 220 },
  {
    id: "j6",
    name: "Spris Juice (Mixed Layers)",
    category: "juices",
    price: 180,
  },
  { id: "j7", name: "Chocolate Shake", category: "juices", price: 250 },
  { id: "j8", name: "Banana Shake", category: "juices", price: 200 },
  { id: "j9", name: "Papaya Juice", category: "juices", price: 180 },
  { id: "j10", name: "Orange Juice", category: "juices", price: 250 },

  // Milkshakes
  {
    id: "m1",
    name: "Mango Milkshake",
    category: "milkshakes",
    price: 250,
    description: "Creamy, cold, and smooth with a tropical finish.",
    featured: true,
  },
  {
    id: "m2",
    name: "Strawberry Milkshake",
    category: "milkshakes",
    price: 250,
  },
  { id: "m3", name: "Chocolate Milkshake", category: "milkshakes", price: 250 },
  { id: "m4", name: "Vanilla Milkshake", category: "milkshakes", price: 250 },
  {
    id: "m5",
    name: "Peanut Butter Milkshake",
    category: "milkshakes",
    price: 200,
  },

  // Frappe Varieties
  {
    id: "fr1",
    name: "Special Frappe",
    category: "frappe",
    price: 400,
    description: "A chilled blend with rich café flavor and creamy texture.",
    featured: true,
  },
  { id: "fr2", name: "Caramel Frappe", category: "frappe", price: 300 },
  { id: "fr3", name: "Chocolate Frappe", category: "frappe", price: 300 },
  { id: "fr4", name: "Oreo Frappe", category: "frappe", price: 350 },
  { id: "fr5", name: "Strawberry Frappe", category: "frappe", price: 300 },
  { id: "fr6", name: "Cappuccino Frappe", category: "frappe", price: 250 },

  // Hot Drinks
  { id: "h1", name: "Tea", category: "hot-drinks", price: 40 },

  // Soft Drinks
  { id: "d1", name: "Soft Drink", category: "soft-drinks", price: 50 },
  { id: "d2", name: "Water 2L", category: "soft-drinks", price: 60 },
  { id: "d3", name: "Water 1L", category: "soft-drinks", price: 50 },
  { id: "d4", name: "Water 1/2L", category: "soft-drinks", price: 40 },

  // Extras
  { id: "e1", name: "Foil", category: "extras", price: 100 },
  { id: "e2", name: "Chips", category: "extras", price: 150 },
  { id: "e3", name: "Moines", category: "extras", price: 50 },
];
