export interface DestinationRegion {
  id: string;
  title: string;
  slug: string;
  description: string;
  focus: string[];
  coverImage: string;
}

export const DESTINATION_REGIONS: DestinationRegion[] = [
  {
    id: 'reg-cultural-triangle',
    title: 'Cultural Triangle',
    slug: 'cultural-triangle',
    description: 'The ancient heart of Sri Lanka, featuring magnificent ruined cities, sacred temples, and the iconic Sigiriya Rock Fortress.',
    focus: ['Sigiriya', 'Dambulla', 'Ancient Ruins', 'Polonnaruwa', 'Anuradhapura'],
    coverImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'reg-hill-country',
    title: 'Hill Country',
    slug: 'hill-country',
    description: 'Misty mountains, cascading waterfalls, and endless emerald tea estates. Home to some of the world\'s most scenic train rides.',
    focus: ['Nuwara Eliya', 'Ella', 'Tea Plantations', 'Train Rides', 'Horton Plains'],
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'reg-southern-coast',
    title: 'Southern Coast',
    slug: 'southern-coast',
    description: 'Golden beaches, swaying palms, historic forts, and vibrant surf towns line the sun-drenched southern edge of the island.',
    focus: ['Galle Fort', 'Unawatuna', 'Mirissa', 'Whale Watching', 'Tangalle'],
    coverImage: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'reg-wildlife-reserves',
    title: 'Wildlife Reserves',
    slug: 'wildlife-reserves',
    description: 'Untamed wilderness offering world-class safaris where leopards roam freely and massive herds of elephants gather.',
    focus: ['Yala National Park', 'Udawalawe', 'Leopards', 'Elephants', 'Wilpattu'],
    coverImage: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80&w=1200'
  }
];
