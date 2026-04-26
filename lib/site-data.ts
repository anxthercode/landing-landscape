export type NavigationItem = {
  href: string;
  label: string;
};

export type ProjectPreview = {
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  details: string;
  href: string;
  accent?: 'left' | 'right';
};

export type TrustPoint = {
  title: string;
  description: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: '/gardens', label: 'Gardens' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const siteContact = {
  studioName: 'Greenframe',
  email: 'hello@greenframe.co',
  phone: '+44 (0) 20 7946 0123',
  addressLine1: '12 Architecture Mews',
  addressLine2: 'Kensington, London W8 5TF',
  responseTime: 'We respond to all project enquiries within one business day.',
  hours: 'Mon — Fri: 09:00 — 18:00',
};

export const featuredProjects: ProjectPreview[] = [
  {
    title: 'Lakeside Estate Landscape',
    subtitle: 'Large property · water + planting + circulation',
    image: '/images/project-1.jpg',
    summary:
      'A wider site composition built around water, planting mass, and a clearer sequence of movement across the ground.',
    details:
      'The emphasis is on scale, legibility, and creating a calmer relationship between open land, pathways, and destination points.',
    href: '/gardens',
    accent: 'left',
  },
  {
    title: 'Woodland Drive Approach',
    subtitle: 'Arrival sequence · stone paving + lighting atmosphere',
    image: '/images/project-2.jpg',
    summary:
      'A more atmospheric approach where paving, light, and topography work together to slow the experience of arriving on site.',
    details:
      'Rather than relying on excess planting, the project uses restraint and material character to create depth and presence.',
    href: '/gardens',
    accent: 'right',
  },
];

export const portfolioProjects: ProjectPreview[] = [
  {
    title: 'Circular Stone Court',
    subtitle: 'Private residence · hardscape composition',
    image: '/images/after-1.png',
    summary:
      'A clean forecourt layout anchored by a preserved mature tree and a circular stone insert.',
    details:
      'Stone paving, controlled planting, and clearer arrival lines create a calmer relationship between the house and the landscape.',
    href: '/gardens',
  },
  {
    title: 'Layered Family Garden',
    subtitle: 'Residential garden · terrace + border planting',
    image: '/images/after-2.png',
    summary:
      'A full-garden rebuild with stronger zones for sitting, movement, and long-term planting growth.',
    details:
      'The new layout improves usability from the deck outward while making the perimeter planting feel fuller and more intentional.',
    href: '/gardens',
  },
  {
    title: 'Contemporary Grounds',
    subtitle: 'Multi-unit setting · hardscape + grading',
    image: '/images/about-banner.jpg',
    summary:
      'A large-format paving and grading scheme that gives the surrounding architecture a cleaner, more resolved ground plane.',
    details:
      'The work focuses on durable circulation, transitions, and a quieter landscape language around the building.',
    href: '/gardens',
  },
  {
    title: 'Woodland Approach',
    subtitle: 'Estate landscape · lighting-led arrival',
    image: '/images/project-2.jpg',
    summary:
      'A darker, atmospheric landscape where paving, topography, and lighting work together to guide movement through the site.',
    details:
      'The emphasis is not on excess, but on depth, pacing, and the feeling of being gently led through the garden after dusk.',
    href: '/gardens',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Greenframe transformed our 2-acre estate into something we use every single day. The stone terrace connects perfectly to the lawn, and the lighting means we're still outside at 10pm in summer. It's genuinely changed how we live.",
    author: "Eleanor M.",
    location: "Kensington, London",
    projectType: "Full Estate Redesign",
    rating: 5,
  },
  {
    quote: "We had three quotes before Greenframe. The difference was immediate — they saw problems with drainage and privacy that no one else mentioned. The build took 11 weeks, came in on budget, and the result is stunning.",
    author: "David & Sarah T.",
    location: "Surrey",
    projectType: "Terrace & Lighting",
    rating: 5,
  },
  {
    quote: "Our garden was mostly lawn with a crumbling patio. Now it has three distinct zones — dining terrace, planted borders, and a quiet reading corner. Friends constantly ask who designed it. Worth every penny.",
    author: "James C.",
    location: "Cotswolds",
    projectType: "Garden Rebuild",
    rating: 5,
  },
  {
    quote: "What impressed me most was the aftercare. Six months after completion, they came back to adjust the irrigation and replace two plants that hadn't settled. That level of care is rare and it shows in the result.",
    author: "Amara P.",
    location: "Richmond",
    projectType: "Planting & Care Plan",
    rating: 5,
  },
];
