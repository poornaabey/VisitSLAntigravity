export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  regionIds: string[]; // Can span multiple regions
  duration: number;
  price: number;
  rating: number;
  highlights: string[];
  coverImage: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'tour-essential-loop',
    title: 'The Essential Sri Lanka Loop',
    slug: 'essential-sri-lanka-loop',
    regionIds: ['reg-cultural-triangle', 'reg-hill-country', 'reg-wildlife-reserves', 'reg-southern-coast'],
    duration: 8,
    price: 1450,
    rating: 4.9,
    highlights: [
      'Discover Colombo\'s vibrant streets',
      'Visit the Temple of the Sacred Tooth Relic in Kandy',
      'Take the scenic train ride to Ella',
      'Leopard tracking safari in Yala National Park',
      'Walk the ramparts of historic Galle Fort'
    ],
    coverImage: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tour-cultural-explorer',
    title: 'Cultural Triangle Explorer',
    slug: 'cultural-triangle-explorer',
    regionIds: ['reg-cultural-triangle'],
    duration: 4,
    price: 680,
    rating: 4.7,
    highlights: [
      'Climb the iconic Sigiriya Rock Fortress at sunrise',
      'Explore the ancient Dambulla Cave Temple complex',
      'Cycle through the ruins of Polonnaruwa',
      'Authentic village cooking experience'
    ],
    coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tour-southern-retreat',
    title: 'Southern Coastal Retreat',
    slug: 'southern-coastal-retreat',
    regionIds: ['reg-southern-coast'],
    duration: 5,
    price: 850,
    rating: 4.8,
    highlights: [
      'Relax on the pristine beaches of Tangalle',
      'Whale and dolphin watching cruise from Mirissa',
      'Explore the Dutch colonial architecture in Galle Fort',
      'Learn traditional stilt fishing techniques'
    ],
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tour-leopards-tea',
    title: 'Leopards & Tea Trails',
    slug: 'leopards-and-tea-trails',
    regionIds: ['reg-hill-country', 'reg-wildlife-reserves'],
    duration: 6,
    price: 1120,
    rating: 4.9,
    highlights: [
      'Stay in a converted colonial tea bungalow in Nuwara Eliya',
      'Hike through Horton Plains to World\'s End',
      'Witness herds of elephants at Udawalawe',
      'Exclusive guided leopard safari in Yala'
    ],
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tour-east-coast-escape',
    title: 'East Coast Escape & Ancient Kings',
    slug: 'east-coast-escape',
    regionIds: ['reg-cultural-triangle'], // Adding a distinct flow
    duration: 7,
    price: 1200,
    rating: 4.6,
    highlights: [
      'Marvel at the ancient stupas of Anuradhapura',
      'Relax on the white sands of Trincomalee',
      'Snorkel with reef sharks at Pigeon Island',
      'Visit the Koneswaram Temple at sunset'
    ],
    coverImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tour-ultimate-honeymoon',
    title: 'Luxury Romance & Ayurveda',
    slug: 'luxury-romance-ayurveda',
    regionIds: ['reg-hill-country', 'reg-southern-coast'],
    duration: 10,
    price: 2800,
    rating: 5.0,
    highlights: [
      'Private helicopter transfer to the Hill Country',
      'Couples spa and traditional Ayurvedic wellness retreat',
      'Romantic private dining in a tea plantation',
      'Luxury beachfront villa stay in Weligama'
    ],
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200'
  }
];
