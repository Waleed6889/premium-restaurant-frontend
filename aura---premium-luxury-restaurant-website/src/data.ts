import { MenuItem, Chef, Testimonial, SpecialOffer, EventItem, BlogPost, FAQItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 'starter-1',
    name: 'Pacific Bluefin Crudo',
    description: 'Slices of pristine bluefin tuna with wild blood orange gel, pickled sea fennel, white shoyu, and cold-pressed extra virgin olive oil.',
    price: 29,
    category: 'starters',
    dietTags: ['Gluten-Free', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.8,
    calories: 240,
    pairing: 'Dom Pérignon Vintage 2012'
  },
  {
    id: 'starter-2',
    name: 'Petrossian Caviar & Bone Marrow',
    description: 'Roasted veal marrow bone topped with Royal Ossetra caviar, micro tarragon, charred sourdough, and Maldon sea salt flakes.',
    price: 42,
    category: 'starters',
    dietTags: ['Chef Special'],
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.5,
    calories: 410,
    pairing: 'Belvedere Intense Vodka, neat'
  },
  {
    id: 'starter-3',
    name: 'Heirloom Tomato & Smoked Burrata',
    description: 'Artisanal burrata cold-smoked with applewood, heirloom tomatoes, 25-year aged Modena balsamic, and wild ramp pesto.',
    price: 24,
    category: 'starters',
    dietTags: ['Vegan', 'Gluten-Free', 'Nut-Free'],
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80',
    popularityScore: 8.9,
    calories: 320,
    pairing: 'Sancerre Les Baronnes 2021'
  },
  {
    id: 'starter-4',
    name: 'Chilled Maine Lobster Tail',
    description: 'Butter-poached and chilled Maine lobster tail with saffron-aioli, avocado mousse, and sea salt brioche crisps.',
    price: 36,
    category: 'starters',
    dietTags: ['Nut-Free'],
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.6,
    calories: 290,
    pairing: 'Chablis Grand Cru 2020'
  },

  // MAINS
  {
    id: 'main-1',
    name: 'A5 Miyazaki Wagyu Ribeye',
    description: '3oz of legendary Japanese A5 Miyazaki beef, served with smoked chanterelle mushrooms, white truffle parsnip silk, and natural jus.',
    price: 110,
    category: 'mains',
    dietTags: ['Gluten-Free', 'Chef Special', 'Nut-Free'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.9,
    calories: 680,
    pairing: 'Château Margaux Bordeaux 2015'
  },
  {
    id: 'main-2',
    name: 'Atlantic Chilean Sea Bass',
    description: 'Pan-seared sea bass over black Venere rice, lemongrass-coconut reduction, baby bok choy, and ginger crisp.',
    price: 52,
    category: 'mains',
    dietTags: ['Gluten-Free', 'Nut-Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.4,
    calories: 490,
    pairing: 'Cloudy Bay Sauvignon Blanc 2022'
  },
  {
    id: 'main-3',
    name: 'Dry-Aged Duck à l’Orange',
    description: '14-day dry-aged Pekin duck breast, roasted lavender glaze, caramelized honey orange gastrique, and parsnip purée.',
    price: 48,
    category: 'mains',
    dietTags: ['Nut-Free'],
    image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.1,
    calories: 590,
    pairing: 'Pinot Noir Russian River Valley 2019'
  },
  {
    id: 'main-4',
    name: 'Hand-Rolled Black Truffle Gnocchi',
    description: 'Pillow-soft potato gnocchi tossed in a decadent cream of wild forest mushrooms, fresh shavings of Perigord black truffles, and aged Pecorino Romano.',
    price: 45,
    category: 'mains',
    dietTags: ['Chef Special'],
    image: 'https://images.unsplash.com/photo-1621961475762-2549aa3477f7?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.7,
    calories: 540,
    pairing: 'Barolo DOCG 2017'
  },

  // SIGNATURES
  {
    id: 'signature-1',
    name: 'The Aura Royal Seafood Tower',
    description: 'A lavish two-tier display of cold-water oysters, jumbo tiger prawns, Alaskan King crab legs, Bluefin tuna tartare, and complete house accoutrements.',
    price: 185,
    category: 'signature',
    dietTags: ['Gluten-Free', 'Chef Special', 'Nut-Free'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    popularityScore: 10.0,
    calories: 820,
    pairing: 'Krug Grande Cuvée Brut Champagne'
  },
  {
    id: 'signature-2',
    name: '24k Gold Tomahawk Steak',
    description: '36oz USDA Prime dry-aged Tomahawk ribeye, encased in edible 24-karat gold leaf, served with bone marrow butter and flamed tableside with cognac.',
    price: 240,
    category: 'signature',
    dietTags: ['Gluten-Free', 'Nut-Free', 'Contains Alcohol'],
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.9,
    calories: 1450,
    pairing: 'Penfolds Grange Shiraz 2016'
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Aura Sphère de Chocolat',
    description: 'A dark chocolate sphere melted tableside with warm Madagascar vanilla-bean caramel, revealing espresso mousse and hazelnut dacquoise.',
    price: 22,
    category: 'desserts',
    dietTags: ['Chef Special'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.8,
    calories: 460,
    pairing: 'Taylor Fladgate 20-Year Tawny Port'
  },
  {
    id: 'dessert-2',
    name: 'Saffron & Pear Crème Brûlée',
    description: 'Silky saffron-infused custard, caramelized sugar crust, served with poached Bosc pear slices in red wine syrup.',
    price: 18,
    category: 'desserts',
    dietTags: ['Gluten-Free', 'Nut-Free', 'Contains Alcohol'],
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.2,
    calories: 380,
    pairing: 'Château d’Yquem Sauternes 2018'
  },

  // COCKTAILS
  {
    id: 'cocktail-1',
    name: 'The Amber Aura Old Fashioned',
    description: 'Macallan 12-Year Double Cask, angostura bitters, spiced orange syrup, smoked with organic hickory wood and served over a hand-carved ice sphere.',
    price: 26,
    category: 'cocktails',
    dietTags: ['Vegan', 'Gluten-Free', 'Contains Alcohol'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.9,
    calories: 180,
    pairing: 'Aura Artisanal Truffle Chocolates'
  },
  {
    id: 'cocktail-2',
    name: 'Royal Empress Lavender Gin Sour',
    description: 'Empress 1908 Indigo Gin, fresh organic lemon juice, wild lavender hydrosol, organic egg white, gold leaf garnish.',
    price: 24,
    category: 'cocktails',
    dietTags: ['Gluten-Free', 'Contains Alcohol'],
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    popularityScore: 9.6,
    calories: 160,
    pairing: 'Pacific Bluefin Crudo'
  }
];

export const CHEF_INFO: Chef = {
  name: 'Marcus Vance',
  role: 'Executive Chef / Owner',
  bio: 'Chef Marcus Vance has spent over two decades redefining contemporary American cuisine. Trained in three Michelin-starred institutions across Paris, Tokyo, and New York, his culinary approach seamlessly blends classical French precision with seasonal, local organic ingredients. He believes that every plate should tell a narrative—unifying aroma, texture, and visual brilliance into a singular unforgettable sensation.',
  quote: "Gastronomy is the ultimate expression of hospitality. We do not just serve food; we craft memories that linger on the palate and in the heart.",
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
  signatureDish: 'A5 Miyazaki Wagyu Ribeye & Tableside Flambé Tomahawk'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alexandra Astor',
    role: 'Food & Lifestyle Editor, NY Journal',
    rating: 5,
    comment: 'Aura is an absolute triumph of contemporary fine dining. The A5 Wagyu is otherworldly, but the true highlight is the impeccable attention to detail. Every table feels like a private sanctuary.',
    date: 'May 14, 2026',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Julian Montgomery',
    role: 'Founder, Montgomery Holdings',
    rating: 5,
    comment: 'Hosting our executive board dinner in Aura’s Wine Cellar Room was an absolute success. The wine pairings recommended by the sommelier were masterful. Highly recommend the Seafood Tower.',
    date: 'June 02, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Dr. Evelyn Martinez',
    role: 'Local Gastronomy Enthusiast',
    rating: 5,
    comment: 'The tableside melting chocolate sphere is absolute poetry in motion. The service is incredibly attentive without being intrusive. Aura sets a stellar benchmark for premium hospitality.',
    date: 'June 21, 2026',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'The Grand Cru Tasting Experience',
    description: 'A 7-course curated signature menu by Chef Marcus Vance, including absolute vintage Champagne and Grand Cru wine pairings.',
    validUntil: 'July 31, 2026',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    badge: 'Exclusive Reserve',
    code: 'GRANDCRU7'
  },
  {
    id: 'offer-2',
    title: 'Sunset Champagne & Caviar Hour',
    description: 'Indulge in complimentary Petrossian Caviar service with any purchase of a bottle of Dom Pérignon or Krug Champagne. Monday to Thursday, 5:00 PM – 7:00 PM.',
    validUntil: 'August 15, 2026',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    badge: 'Seasonal Special',
    code: 'GOLDENHOUR'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'Summer White Truffle Gala',
    description: 'An exclusive black-tie gala dinner celebrating the arrival of fresh Alba Summer Truffles. Seven decadent courses with live harp accompaniment.',
    date: 'Thursday, July 16, 2026',
    time: '7:00 PM - 10:30 PM',
    price: 320,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    capacity: 'Limited to 40 Guests'
  },
  {
    id: 'event-2',
    title: 'Napa Valley Masterclass & Tasting',
    description: 'Join head Sommelier Claire Bennett and prominent winemakers for a deep-dive masterclass into Napa Valley’s iconic reserve cabernets, followed by a premium five-course dinner.',
    date: 'Sunday, August 09, 2026',
    time: '4:00 PM - 8:30 PM',
    price: 250,
    image: 'https://images.unsplash.com/photo-1528826722244-d7b86b3e3434?auto=format&fit=crop&w=800&q=80',
    capacity: 'Limited to 25 Guests'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Art of Searing the Perfect Wagyu Ribeye',
    excerpt: 'Explore the high-stakes science and culinary artistry behind perfect temperature regulation, fat rendering, and crust-crush for A5 Miyazaki Wagyu beef.',
    category: 'Chef’s Notebook',
    readTime: '5 min read',
    date: 'June 18, 2026',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    author: 'Chef Marcus Vance'
  },
  {
    id: 'post-2',
    title: 'Demystifying Biodynamic Wine Pairings',
    excerpt: 'Sommelier Claire Bennett explains how solar and lunar biological cycles impact vine root absorption, creating deeper, more expressive flavors in organic pairings.',
    category: 'Wine Cellar',
    readTime: '7 min read',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    author: 'Sommelier Claire Bennett'
  },
  {
    id: 'post-3',
    title: 'The Farm-to-Fork Revolution: Our Local Partnerships',
    excerpt: 'Take a beautiful photo journey behind the scenes to the organic farms of New York State that supply Aura’s daily harvest and grass-fed heritage meats.',
    category: 'Sustainability',
    readTime: '4 min read',
    date: 'April 12, 2026',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    author: 'Elena Vance, Director of Sourcing'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Aura’s reservation policy and dress code?',
    answer: 'Reservations are highly recommended and can be made up to 90 days in advance. To preserve our elegant ambiance, we require business professional or formal attire. Clean-cut jeans paired with blazers are acceptable. Sportswear, tank tops, sandals, and athletic wear are strictly prohibited.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer options for severe allergies or specialized diets?',
    answer: 'Absolutely. Our culinary staff is highly trained in allergen management. Many of our menu options are naturally Gluten-Free or Vegan. Please include any dietary restrictions or severe allergies directly in your booking form so our culinary team can prepare a personalized experience.'
  },
  {
    id: 'faq-3',
    question: 'Is valet parking available at the restaurant?',
    answer: 'Yes, we provide premium white-glove valet parking directly at the entrance on Central Park South. The fee is $25 for dining guests, and complimentary for Aura Club Members and guests staying in our private event rooms.'
  },
  {
    id: 'faq-4',
    question: 'Can I host private events or buy out the entire venue?',
    answer: 'Yes, we offer multiple gorgeous event spaces, including our Private Sommelier Lounge (capacity 16) and the Grand Solarium (capacity 60). Full venue buyout packages are also available. Please submit an inquiry via the Private Events section, and our events director will contact you directly.'
  },
  {
    id: 'faq-5',
    question: 'Is there a corkage fee for bringing personal rare vintages?',
    answer: 'We allow guests to bring their own bottles of wine with a corkage fee of $75 per 750ml bottle, up to a maximum of two bottles per table. We request that the wine brought is not already represented on Aura’s extensive wine card.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'The Grand Dining Room',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    title: 'A5 Wagyu Preparation',
    category: 'Culinary',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    title: 'The Private Sommelier Lounge',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    title: 'The Smoked Amber Old Fashioned',
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    title: 'Artisanal Sourdough & Infused Butters',
    category: 'Culinary',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'Summer Patio Lounge',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1531012278480-fa10659da7b9?auto=format&fit=crop&w=800&q=80'
  }
];
