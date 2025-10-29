export interface Service {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  color: string;
  icon: string;
  image: string;

  process: {
    title: string;
    description: string;
  }[];

  features: {
    label: string;
    standard: boolean;
    custom: boolean;
  }[];
}

export const services: Service[] = [
  {
    name: "Web Design",
    slug: "web-design",
    description: "Beautiful, responsive websites that drive results.",
    longDescription:
      "We create websites focused on conversion and brand identity. Our process covers UX, UI, development and deployment.",
    color: "from-blue-500/30 to-blue-700/30",
    icon: "🌐",
    image: "/services/web_design.png",

    process: [
      {
        title: "Sitemap",
        description: "We establish content structure and navigation flow.",
      },
      {
        title: "Wireframes",
        description: "We map out layouts for UX clarity and functionality.",
      },
      {
        title: "Design & Prototype",
        description: "UI design with real interactions before development.",
      },
      {
        title: "Page Integration",
        description: "We convert designs to real pages with animations.",
      },
      {
        title: "Domain Setup",
        description: "We configure hosting, redirects, and SSL.",
      },
      {
        title: "Maintenance & Training",
        description: "We support your team post-launch.",
      },
    ],

    features: [
      { label: "Sitemap", standard: true, custom: true },
      { label: "Wireframes", standard: true, custom: true },
      { label: "Design & prototype", standard: true, custom: true },
      { label: "Page integration", standard: true, custom: true },
      { label: "Custom blocks", standard: false, custom: true },
      { label: "Domain setup", standard: false, custom: true },
      { label: "Maintenance", standard: false, custom: true },
      { label: "Training", standard: true, custom: true },
    ],
  },
  {
    name: "Logo Design",
    slug: "logo-design",
    description: "Create a lasting identity for your brand.",
    longDescription:
      "We build powerful brand visuals through strategy, sketches and scalable logo delivery.",
    color: "from-purple-500/30 to-purple-700/30",
    icon: "✨",
    image: "/services/logo_design.png",

    process: [
      { title: "Brand Discovery", description: "We study your brand values and market fit." },
      { title: "Sketches", description: "We explore concepts and design directions." },
      { title: "Refinement", description: "We polish the icon, colors and details." },
      { title: "Delivery", description: "You receive full brand assets + guidelines." },
    ],

    features: [
      { label: "3 Initial Concepts", standard: true, custom: true },
      { label: "Brand Guidelines", standard: false, custom: true },
      { label: "Unlimited Revisions", standard: false, custom: true },
      { label: "File Formats", standard: true, custom: true },
      { label: "Color Variations", standard: true, custom: true },
    ],
  },
  // {
  //   name: "AD Shooting",
  //   slug: "ad-shooting",
  //   description: "Show your brand through powerful visuals.",
  //   longDescription:
  //     "Our production team creates professional photo and video content designed to sell.",
  //   color: "from-red-500/30 to-red-700/30",
  //   icon: "🎥",
  //   image: "/services/ad_shooting.png",

  //   process: [
  //     { title: "Creative Direction", description: "Campaign ideas & storyboard planning." },
  //     { title: "Production", description: "Shooting with professional gear + crew." },
  //     { title: "Editing", description: "Color grading, sound, motion graphics." },
  //     { title: "Delivery", description: "Ads optimized for each platform." },
  //   ],

  //   features: [
  //     { label: "Full HD Output", standard: true, custom: true },
  //     { label: "Studio Setup", standard: false, custom: true },
  //     { label: "Drone Shoots", standard: false, custom: true },
  //     { label: "Multiple Ad Sizes", standard: true, custom: true },
  //     { label: "Talent Management", standard: false, custom: true },
  //   ],
  // },
  {
    name: "SEO",
    slug: "seo",
    description: "Get discovered & grow visibility organically.",
    longDescription:
      "We optimize websites for search intent, speed and ranking performance.",
    color: "from-green-500/30 to-green-700/30",
    icon: "📈",
    image: "/services/seo.png",

    process: [
      { title: "Audit", description: "Technical SEO + keyword discovery." },
      { title: "On-Page", description: "Optimization of structure, tags & content." },
      { title: "Off-Page", description: "Authority building, backlinks, signals." },
      { title: "Monitoring", description: "Performance tracking & improvements." },
    ],

    features: [
      { label: "Google Indexing", standard: false, custom: true },
      { label: "Keyword Strategy", standard: true, custom: true },
      { label: "Backlinks Campaign", standard: false, custom: true },
      { label: "SEO Reports", standard: true, custom: true },
      { label: "Speed Optimization", standard: true, custom: true },
    ],
  },
  {
    name: "Marketing",
    slug: "marketing",
    description: "Grow faster with data-driven strategies.",
    longDescription:
      "We plan and execute online campaigns that boost engagement and conversions.",
    color: "from-yellow-500/30 to-yellow-700/30",
    icon: "📣",
    image: "/services/marketing.png",

    process: [
      { title: "Research", description: "Market insights and audience targeting." },
      { title: "Campaign Setup", description: "Ads and funnels tailored to goals." },
      { title: "Content Production", description: "Visuals + messaging that converts." },
      { title: "Optimization", description: "Continuous scaling for performance." },
    ],

    features: [
      { label: "Campaign Setup", standard: true, custom: true },
      { label: "Meta Ads", standard: true, custom: true },
      { label: "Google Ads", standard: false, custom: true },
      { label: "Influencer Ads", standard: false, custom: true },
      { label: "Monthly Reports", standard: true, custom: true },
    ],
  },
];
