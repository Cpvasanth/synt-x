export interface Project {
  slug: string;
  id: number;
  title: string;
  image: string;
  deliveryTime: string;
  tags: string[];
  description: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    slug: "brand-portfolio",
    title: "Brand Portfolio Website",
    image: "/projects/rolex.png",
    deliveryTime: "3 Weeks",
    tags: ["UI/UX", "Next.js", "SEO", "Branding"],
    description:
      "A modern brand-centered website focused on storytelling and conversions.",
  },
  {
    id: 2,
    slug: "e-commerce",
    title: "E-Commerce Platform",
    image: "/projects/ecommerce.png",
    deliveryTime: "6 Weeks",
    tags: ["Shopify", "Payments", "CMS"],
    description:
      "A secure mobile-first e-commerce experience optimized for conversions.",
  },
  {
    id: 3,
    slug: "saas-dashboard",
    title: "SaaS Dashboard UI",
    image: "/projects/saas.png",
    deliveryTime: "4 Weeks",
    tags: ["Dashboard", "API", "Tailwind"],
    description:
      "A dashboard interface with real-time analytics and product performance tracking.",
  },
  {
    id: 4,
    slug: "mobile-banking",
    title: "Mobile Banking App",
    image: "/projects/mobile_banking.png",
    deliveryTime: "8 Weeks",
    tags: ["UI/UX", "API", "Payments"],
    description:
      "A secure and intuitive mobile banking experience built for fintech.",
  },
  {
    id: 5,
    slug: "internal-cms",
    title: "Internal CMS Portal",
    image: "/projects/cms.png",
    deliveryTime: "5 Weeks",
    tags: ["CMS", "Dashboard", "Tailwind"],
    description:
      "A custom internal CMS built to optimize publishing workflows.",
  },
  {
    id: 6,
    slug: "startup-rebranding",
    title: "Startup Rebranding",
    image: "/projects/rebrand.png",
    deliveryTime: "3 Weeks",
    tags: ["Branding", "SEO", "UI/UX"],
    description:
      "Complete visual identity overhaul for a scaling B2B startup.",
  },
];
