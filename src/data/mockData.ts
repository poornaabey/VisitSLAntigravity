import { 
  DollarSign, CalendarCheck, Tent, Users,
  Car, Train, Utensils, Info
} from 'lucide-react';

export const MENU_ITEMS = [
  { id: 'destinations', label: 'Destinations', path: '/destinations' },
  { id: 'packages', label: 'Tour Packages', path: '/packages' },
  { id: 'experiences', label: 'Experiences', path: '/experiences' },
  { id: 'culinary', label: 'Culinary', path: '/culinary' },
  { id: 'transfers', label: 'Transfers', path: '/transfers' },
  { id: 'facilities', label: 'Facilities', path: '/facilities' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const DESTINATIONS = [
  { id: 'd-1', name: 'Ella & Hill Country', image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800', tags: 'Tea, Hiking, Trains' },
  { id: 'd-2', name: 'Galle & South Coast', image: 'https://images.unsplash.com/photo-1587313632739-c9a567675f0a?auto=format&fit=crop&q=80&w=800', tags: 'Heritage, Beaches, Surf' },
  { id: 'd-3', name: 'Cultural Triangle', image: 'https://images.unsplash.com/photo-1590924970425-46700c02506e?auto=format&fit=crop&q=80&w=800', tags: 'History, Ruins, Elephants' },
  { id: 'd-4', name: 'Yala National Park', image: 'https://images.unsplash.com/photo-1620302554753-488b39a3f2b1?auto=format&fit=crop&q=80&w=800', tags: 'Leopards, Safari, Eco-camps' }
];

export const PACKAGES = [
  { id: 'p-1', title: 'The Essential Sri Lanka', days: 7, price: 1250, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800', type: 'Guided Tour' },
  { id: 'p-2', title: 'Honeymoon: Tea & Sea', days: 10, price: 2100, image: 'https://images.unsplash.com/photo-1546708770-589ae46dd410?auto=format&fit=crop&q=80&w=800', type: 'Luxury Private' },
  { id: 'p-3', title: 'Wildlife & Nature Explorer', days: 5, price: 950, image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?auto=format&fit=crop&q=80&w=800', type: 'Adventure' }
];

export const SERVICES = [
  { icon: Car, title: 'Private Chauffeurs', desc: 'English-speaking driver-guides.' },
  { icon: Train, title: 'Train Tickets', desc: 'Reserved seats on the Kandy-Ella scenic route.' },
  { icon: Utensils, title: 'Culinary Trails', desc: 'Spice gardens to fine dining.' },
  { icon: Info, title: 'Tourist Facilities', desc: 'Visa help, SIM cards & 24/7 support.' }
];

export const ADMIN_STATS = [
  { label: 'Total Revenue (Mtd)', value: '$42,500', icon: DollarSign, trend: '+12%' },
  { label: 'Active Bookings', value: '184', icon: CalendarCheck, trend: '+5%' },
  { label: 'Live Experiences', value: '42', icon: Tent, trend: '0%' },
  { label: 'New Users', value: '892', icon: Users, trend: '+24%' },
];

export const RECENT_BOOKINGS = [
  { id: 'BK-7829', customer: 'Sarah Jenkins', item: 'Secret Galle Fort Culinary', date: 'Oct 12, 2026', amount: '$240', status: 'Confirmed' },
  { id: 'BK-7830', customer: 'Michael Chen', item: 'The Essential Sri Lanka (7 Days)', date: 'Oct 14, 2026', amount: '$2,500', status: 'Pending' },
  { id: 'BK-7831', customer: 'Emma Watson', item: 'Yala Leopard Safari', date: 'Oct 15, 2026', amount: '$350', status: 'Confirmed' },
  { id: 'BK-7832', customer: 'David Smith', item: 'Ella Train Tickets (1st Class)', date: 'Oct 15, 2026', amount: '$40', status: 'Processing' },
];

export const INVENTORY = [
  { id: 'exp-1', title: 'Secret Galle Fort Culinary Masterclass', category: 'Experience', price: 120, status: 'Active', bookings: 128 },
  { id: 'exp-2', title: 'Off-Grid Leopard Tracking', category: 'Experience', price: 350, status: 'Active', bookings: 84 },
  { id: 'pkg-1', title: 'The Essential Sri Lanka (7 Days)', category: 'Package', price: 1250, status: 'Active', bookings: 45 },
  { id: 'pkg-2', title: 'Honeymoon: Tea & Sea (10 Days)', category: 'Package', price: 2100, status: 'Draft', bookings: 0 },
];
