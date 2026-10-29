// ------------------------------------------------------------
// All the editable content for the Revere Homes site lives here.
// Change a phone number, a sentence or a photo link in this file,
// save, and the page updates. You don't need to touch index.astro
// for everyday text changes.
// ------------------------------------------------------------

export const site = {
  name: 'Revere Homes',
  legalName: 'Revere Homes Ltd.',
  url: 'https://reverehomes.ca',

  // Browser tab title and search-engine description
  title: 'Revere Homes | Custom homes, coach houses & renovations, Fraser Valley',
  description:
    'Custom homes, coach houses and renovations across the Fraser Valley, Metro Vancouver, the Sea-to-Sky and the Sunshine Coast. Book a free 1-hour consultation with Revere Homes in Langley, BC.',

  // Contact details
  phone: '604-655-8403',
  phoneHref: 'tel:16046558403', // keep the leading 1 + digits only
  email: 'info@reverehomes.ca',
  address: {
    street: '21263 18th Ave',
    city: 'Langley',
    region: 'BC',
    country: 'CA',
  },

  // Paste your Formspree form URL here (e.g. 'https://formspree.io/f/abcdwxyz').
  // While this is empty, the form just shows the thank-you message and sends nothing.
  formEndpoint: '',

  // Logo (currently hot-linked from the client's existing website)
  logo: 'https://reverehomes.ca/wp-content/uploads/2025/04/IMG_0910.jpeg',

  // Social sharing image (shown when the link is pasted into Facebook, iMessage, etc.)
  ogImage:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=jpg&q=70&w=1600&auto=format&fit=crop',
};

// Top navigation links
export const nav = [
  { href: '#approach', label: 'Our approach' },
  { href: '#specialties', label: 'Specialties' },
  { href: '#services', label: 'Services' },
  { href: '#journal', label: 'Journal' },
];

// Hero photo (Unsplash placeholder, replace with a real project photo)
export const hero = {
  img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=jpg&q=70&w=1600&auto=format&fit=crop',
  alt: 'Finished custom home exterior',
};

// "Our approach" region list
export const regions = ['Fraser Valley', 'Metro Vancouver', 'Sea-to-Sky', 'Sunshine Coast'];

// "Our specialties" list (click an item to switch the photo and text)
export const specialties = [
  {
    t: 'Coach houses & garden suites',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'Adding a laneway house, garden suite or coach house is easier than ever under BC’s new zoning rules. We’ve worked closely with municipalities from the start, guiding homeowners through the process with clarity. For family or rental income, it’s a smart, flexible way to build for the future.',
  },
  {
    t: 'Square footage optimization',
    img: 'https://images.unsplash.com/photo-1585128792020-803d29415281?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'What if your home’s potential isn’t about size, but how it’s used? We rethink layouts with smart, efficient design that makes every space feel bigger and work better.',
  },
  {
    t: 'ALR living',
    img: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'Building on ALR land means balancing your vision with provincial rules. We specialize in ALR zoning, permits and custom homes across the Fraser Valley and Metro Vancouver, keeping the process smooth and true to the land.',
  },
  {
    t: 'Natural light',
    img: 'https://images.unsplash.com/photo-1598718544285-7180f670198b?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'The right light improves mood and makes rooms feel larger and more welcoming. We design with windows, skylights and open layouts to create warm, energy-efficient spaces.',
  },
  {
    t: 'Precise details',
    img: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'An elegant trim, a well-placed fixture, a custom shelf that fits just right. True craftsmanship lives in these thoughtful touches.',
  },
  {
    t: 'Modern efficiency',
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'High-performance insulation, energy-efficient windows and HVAC systems. A home that’s more comfortable, more sustainable and built for the long term.',
  },
];

// Services cards
export const services = [
  {
    t: 'Custom homes',
    k: 'New builds · ALR',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'A custom home is more than walls and windows. It’s a story about how you live, what you value, and where life is headed.',
  },
  {
    t: 'Renovations',
    k: 'Updates to full transformations',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?fm=jpg&q=70&w=1600&auto=format&fit=crop',
    d: 'From smart updates to full-scale transformations, we create spaces that reflect your style and meet your needs.',
  },
];

// Journal (blog) cards, linking to posts on reverehomes.ca
export const posts = [
  {
    t: 'Rebuild vs renovate in BC: how to decide what’s right for your home',
    d: 'June 2026',
    img: 'https://reverehomes.ca/wp-content/uploads/2026/06/IMG_8709-1-900x600.jpeg',
    href: 'https://reverehomes.ca/?p=757',
  },
  {
    t: 'Turn your BC property into a multi-family investment',
    d: 'August 2025',
    img: 'https://reverehomes.ca/wp-content/uploads/2025/08/ChatGPT-Image-Aug-11-2025-at-03_05_21-PM-900x600.png',
    href: 'https://reverehomes.ca/?p=700',
  },
  {
    t: 'Building on ALR land in BC: what you need to know',
    d: 'April 2025',
    img: 'https://reverehomes.ca/wp-content/uploads/2025/04/abbotsford-farmland.jpg.avif',
    href: 'https://reverehomes.ca/?p=515',
  },
];

// Contact form "I'm thinking about" chips
export const chips = ['Custom home', 'Coach house', 'Renovation', 'ALR build'];
