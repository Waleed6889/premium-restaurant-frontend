export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'signature' | 'desserts' | 'cocktails';
  dietTags: ('Vegan' | 'Gluten-Free' | 'Chef Special' | 'Nut-Free' | 'Contains Alcohol')[];
  image: string;
  popularityScore: number; // For ranking featured items
  calories?: number;
  pairing?: string; // Wine pairing recommendation
}

export interface Chef {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  signatureDish: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  image: string;
  badge: string;
  code?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  price: number;
  image: string;
  capacity: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: string;
  dietaryNotes?: string;
  status: 'confirmed' | 'pending';
}
