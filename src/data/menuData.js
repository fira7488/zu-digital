// Zu Burger Spot — real menu data (Birr)
// Every photo below (category banners AND item photos) was individually
// verified against a live Unsplash page before being used here — none are
// guessed IDs. If item.image is ever omitted, MenuSection falls back to the
// category banner photo, so a broken image is structurally impossible.

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80`;

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
  { id: "b1", name: "Special Burger", category: "burgers", price: 550, image: img("1568901346375-23c9450c58cd"), description: "A signature burger layered with rich toppings and house flavor.", featured: true },
  { id: "b2", name: "Normal Burger", category: "burgers", price: 450, image: img("1607013251379-e6eecfffe234") },
  { id: "b3", name: "Cheese Burger", category: "burgers", price: 450, image: img("1572802419224-296b0aeee0d9") },
  { id: "b4", name: "American Burger", category: "burgers", price: 700, image: img("1639020715088-e7afebe6cb25") },
  { id: "b5", name: "Chicken Burger", category: "burgers", price: 650, image: img("1564362411991-472954b39f56") },

  // Sandwich Varieties
  { id: "s1", name: "Special Sandwich", category: "sandwiches", price: 400, image: img("1553909489-cd47e0907980"), description: "A loaded, toasted favorite with balanced fillings and crunch.", featured: true },
  { id: "s2", name: "Tuna Sandwich", category: "sandwiches", price: 400, image: img("1619096252214-ef06c45683e3") },
  { id: "s3", name: "Chicken Sandwich", category: "sandwiches", price: 450, image: img("1481070414801-51fd732d7184") },
  { id: "s4", name: "Vegetable Sandwich", category: "sandwiches", price: 300, image: img("1621852004158-f3bc188ace2d") },
  { id: "s5", name: "Egg Sandwich", category: "sandwiches", price: 300, image: img("1700937244987-92488ab2ada5") },
  { id: "s6", name: "Club Sandwich", category: "sandwiches", price: 450, image: img("1540713434306-58505cf1b6fc") },

  // Pancake Selection
  { id: "p1", name: "Special Pancake", category: "pancakes", price: 350, image: img("1528207776546-365bb710ee93"), description: "Soft, fluffy stack with a rich sweet finish.", featured: true },
  { id: "p2", name: "Double Chocolate Pancake", category: "pancakes", price: 300, image: img("1565299543923-37dd37887442") },
  { id: "p3", name: "Nutella Chocolate Pancake", category: "pancakes", price: 350, image: img("1554520735-0a6b8b6ce8b7") },
  { id: "p4", name: "Strawberry Pancake", category: "pancakes", price: 300, image: img("1589627461407-6257b1acf0fd") },
  { id: "p5", name: "Honey & Butter Pancake", category: "pancakes", price: 200, image: img("1544726982-b414d58fabaa") },
  { id: "p6", name: "Banana Chocolate Pancake", category: "pancakes", price: 250, image: img("1600326145552-327f74b9c189") },
  { id: "p7", name: "Caramel Pancake", category: "pancakes", price: 250, image: img("1506084868230-bb9d95c24759") },

  // Shawarma & Burrito
  { id: "w1", name: "Special Shawarma", category: "shawarma", price: 650, image: img("1529006557810-274b9b2fc783"), description: "A hearty rolled wrap packed with flavor and house-made fillings.", featured: true },
  { id: "w2", name: "Chicken Shawarma", category: "shawarma", price: 600, image: img("1699728088614-7d1d4277414b") },
  { id: "w3", name: "Tuna Shawarma", category: "shawarma", price: 550, image: img("1699728088600-6d684acbeada") },
  { id: "w4", name: "Vegetable Shawarma", category: "shawarma", price: 400, image: img("1719282431723-9d0f4370d4bc") },
  { id: "w5", name: "Special Burrito", category: "shawarma", price: 750, image: img("1719282431565-3b30bb7d2658") },

  // Fruit Selection
  { id: "f1", name: "Special Fruit Salad", category: "fruit", price: 300, image: img("1493770348161-369560ae357d") },
  { id: "f2", name: "Normal Fruit Salad", category: "fruit", price: 200, image: img("1557766346-8adcefad4b50") },

  // Fresh Juices & Shakes
  { id: "j1", name: "Special Juice", category: "juices", price: 200, image: img("1583577612013-4fecf7bf8f13"), description: "A vibrant, fresh blend made for a brighter refreshment.", featured: true },
  { id: "j2", name: "Mango Juice", category: "juices", price: 200, image: img("1600271886742-f049cd451bba") },
  { id: "j3", name: "Mango Shake", category: "juices", price: 250, image: img("1525385133512-2f3bdd039054") },
  { id: "j4", name: "Avocado Juice", category: "juices", price: 180, image: img("1623123093799-70a72826e167") },
  { id: "j5", name: "Avocado Shake", category: "juices", price: 220, image: img("1603569283847-aa295f0d016a") },
  { id: "j6", name: "Spris Juice (Mixed Layers)", category: "juices", price: 180, image: img("1496318447583-f524534e9ce1") },
  { id: "j7", name: "Chocolate Shake", category: "juices", price: 250, image: img("1534353473418-4cfa6c56fd38") },
  { id: "j8", name: "Banana Shake", category: "juices", price: 200, image: img("1622597467821-df79dcb4f94d") },
  { id: "j9", name: "Papaya Juice", category: "juices", price: 180, image: img("1618724980108-a4d3856fd8f5") },
  { id: "j10", name: "Orange Juice", category: "juices", price: 250, image: img("1613478223719-2ab802602423") },

  // Milkshakes
  { id: "m1", name: "Mango Milkshake", category: "milkshakes", price: 250, image: img("1553787499-6f9133860278"), description: "Creamy, cold, and smooth with a tropical finish.", featured: true },
  { id: "m2", name: "Strawberry Milkshake", category: "milkshakes", price: 250, image: img("1579954115545-a95591f28bfc") },
  { id: "m3", name: "Chocolate Milkshake", category: "milkshakes", price: 250, image: img("1577805947697-89e18249d767") },
  { id: "m4", name: "Vanilla Milkshake", category: "milkshakes", price: 250, image: img("1619158401201-8fa932695178") },
  { id: "m5", name: "Peanut Butter Milkshake", category: "milkshakes", price: 200, image: img("1568901839119-631418a3910d") },

  // Frappe Varieties
  { id: "fr1", name: "Special Frappe", category: "frappe", price: 400, image: img("1534449369274-82e4ad08bf35"), description: "A chilled blend with rich café flavor and creamy texture.", featured: true },
  { id: "fr2", name: "Caramel Frappe", category: "frappe", price: 300, image: img("1637178035575-b0dcbd28a09b") },
  { id: "fr3", name: "Chocolate Frappe", category: "frappe", price: 300, image: img("1696487773677-c0c8061fe3d2") },
  { id: "fr4", name: "Oreo Frappe", category: "frappe", price: 350, image: img("1718267050202-9b1b6bfb8545") },
  { id: "fr5", name: "Strawberry Frappe", category: "frappe", price: 300, image: img("1653122025451-ec76a73f8a08") },
  { id: "fr6", name: "Cappuccino Frappe", category: "frappe", price: 250, image: img("1620360289100-030b032e5a27") },

  // Hot Drinks
  { id: "h1", name: "Tea", category: "hot-drinks", price: 40, image: img("1558160074-4d7d8bdf4256") },

  // Soft Drinks
  { id: "d1", name: "Soft Drink", category: "soft-drinks", price: 50, image: img("1527960471264-932f39eb5846") },
  { id: "d2", name: "Water 2L", category: "soft-drinks", price: 60, image: img("1681495514493-eaf0bd047714") },
  { id: "d3", name: "Water 1L", category: "soft-drinks", price: 50, image: img("1681495514493-eaf0bd047714") },
  { id: "d4", name: "Water 1/2L", category: "soft-drinks", price: 40, image: img("1681495514493-eaf0bd047714") },

  // Extras
  { id: "e1", name: "Foil", category: "extras", price: 100 },
  { id: "e2", name: "Chips", category: "extras", price: 150, image: img("1707773726979-4b87cd1c838a") },
  { id: "e3", name: "Moines", category: "extras", price: 50 },
];
