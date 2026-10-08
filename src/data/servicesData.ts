export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  turnaround: string;
  basePrice: string;
  features: string[];
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'dry-cleaning',
    title: 'Eco Boutique Dry Cleaning',
    subtitle: 'Gentle on fine fabrics, tough on stains',
    badge: 'Signature Service',
    image: '/images/dry_cleaning.jpg',
    turnaround: '24 – 48 Hours',
    basePrice: 'From $7.50 / item',
    features: [
      'Non-toxic, hypoallergenic eco-friendly solvents',
      'Hand inspection for stains, loose buttons & seams',
      'Artisanal hand-pressing and velvet-padded hangers',
      'Safe for cashmere, silk, wool, and structured suits'
    ],
    description: 'Our proprietary gentle eco-clean process revives fabric fibers without the harsh odor or stiffness of traditional chemical cleaning. Hand-finished with crisp lapels and razor-sharp creases.'
  },
  {
    id: 'wash-and-fold',
    title: 'Fluff & Fold Wash Laundry',
    subtitle: 'Daily essentials sorted, washed, and crisp-folded',
    badge: 'Popular for Busy Locals',
    image: '/images/storefront.jpg',
    turnaround: 'Same-Day (by 10 AM)',
    basePrice: '$1.85 / lb (10 lb min)',
    features: [
      'Separated whites, darks, and delicate fabrics',
      'Choice of premium scented or free & clear detergents',
      'Tumble-dried on low heat to prevent fabric shrinkage',
      'Neatly folded, shrink-wrapped or boxed for easy transport'
    ],
    description: 'Reclaim your weekends. Drop off your laundry baskets or schedule a pickup. We return your clothes fresh, soft, and folded with boutique precision ready for your dresser.'
  },
  {
    id: 'tailoring-alterations',
    title: 'Master Tailoring & Alterations',
    subtitle: 'Precision fit by our master tailor',
    badge: 'Boutique Craftsmanship',
    image: '/images/tailoring.jpg',
    turnaround: '2 – 4 Days',
    basePrice: 'From $15.00',
    features: [
      'Pants & jeans hemming with original hem retention',
      'Suit jacket sleeves, tapering & waist suppression',
      'Zipper replacements, button reinforcement & mending',
      'Bridal gowns, evening dresses & bespoke formalwear'
    ],
    description: 'With over 30 years of artisan tailoring experience, our in-house master tailor ensures your wardrobe fits you like it was custom-made on Savile Row.'
  },
  {
    id: 'linens-comforters',
    title: 'Duvets, Comforters & Home Linens',
    subtitle: 'Commercial high-capacity sanitizing wash',
    badge: 'Allergen Removal',
    image: '/images/dry_cleaning.jpg',
    turnaround: '48 Hours',
    basePrice: 'From $28.00 / piece',
    features: [
      'Oversized commercial Dexter drums for even fluffing',
      'Deep dust mite, pollen & allergen eradication',
      'Down feather conditioning to restore loft & warmth',
      'Breathable zippered storage packaging included'
    ],
    description: 'Household washers cannot properly tumble bulky King and Queen comforters. Our commercial wash cycles deep-clean without clumping down filling.'
  },
  {
    id: 'laundromat-dexter',
    title: 'Self-Service Smart Laundromat',
    subtitle: 'Dexter high-efficiency commercial equipment',
    badge: 'Dexter Pay App Ready',
    image: '/images/storefront.jpg',
    turnaround: 'In & Out in 45 Min',
    basePrice: '$3.50 – $7.50 / load',
    features: [
      'High-speed extract washers cut drying time in half',
      'Pay with Dexter Pay mobile app or cash / coin changer',
      'Friendly attendant on duty to assist you',
      'Air-conditioned lounge with free high-speed Wi-Fi'
    ],
    description: 'Need to wash your own clothes quickly? Enjoy our spotless, air-conditioned Rice Village facility with top-tier Dexter commercial machines and contactless app payments.'
  }
];

export interface PricingItem {
  id: string;
  name: string;
  category: 'dry-clean' | 'wash-fold' | 'alterations' | 'household';
  price: number;
  unit: string;
  turnaroundHours: number;
  popular?: boolean;
}

export const pricingCatalog: PricingItem[] = [
  { id: 'shirt-laundered', name: 'Dress Shirt (Laundered & Pressed)', category: 'dry-clean', price: 3.50, unit: 'per shirt', turnaroundHours: 24, popular: true },
  { id: 'suit-2pc', name: '2-Piece Suit (Jacket & Trousers)', category: 'dry-clean', price: 15.50, unit: 'per suit', turnaroundHours: 48, popular: true },
  { id: 'pants-trousers', name: 'Slacks / Trousers / Jeans', category: 'dry-clean', price: 7.50, unit: 'per pair', turnaroundHours: 24, popular: true },
  { id: 'dress-day', name: 'Day Dress / Casual Dress', category: 'dry-clean', price: 12.50, unit: 'per dress', turnaroundHours: 48 },
  { id: 'blazer-jacket', name: 'Blazer / Sport Coat', category: 'dry-clean', price: 9.50, unit: 'per jacket', turnaroundHours: 48 },
  { id: 'blouse-silk', name: 'Silk / Delicate Blouse', category: 'dry-clean', price: 8.50, unit: 'per blouse', turnaroundHours: 48 },
  { id: 'wash-fold-15', name: 'Wash & Fold Laundry Bag (15 lbs)', category: 'wash-fold', price: 27.75, unit: 'per 15 lbs', turnaroundHours: 24, popular: true },
  { id: 'wash-fold-25', name: 'Wash & Fold Family Bag (25 lbs)', category: 'wash-fold', price: 46.25, unit: 'per 25 lbs', turnaroundHours: 24 },
  { id: 'comforter-queen', name: 'Queen / King Comforter or Duvet', category: 'household', price: 32.00, unit: 'per item', turnaroundHours: 48, popular: true },
  { id: 'blanket-wool', name: 'Heavy Blanket or Quilt', category: 'household', price: 24.00, unit: 'per item', turnaroundHours: 48 },
  { id: 'alter-hem', name: 'Pants Hemming / Shortening', category: 'alterations', price: 15.00, unit: 'per item', turnaroundHours: 72, popular: true },
  { id: 'alter-waist', name: 'Waist In / Out Adjustment', category: 'alterations', price: 22.00, unit: 'per item', turnaroundHours: 72 }
];
