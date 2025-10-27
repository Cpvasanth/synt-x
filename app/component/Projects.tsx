'use client';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  image: string;
  deliveryTime: string;
  tags: string[];
  description: string;
  link: string;
}

const tagBorderColors: Record<string, string> = {
  "UI/UX": "border-blue-400 text-blue-300",
  "Next.js": "border-gray-300 text-gray-200",
  "SEO": "border-green-400 text-green-300",
  "Branding": "border-purple-400 text-purple-300",
  "Shopify": "border-pink-400 text-pink-300",
  "Payments": "border-red-400 text-red-300",
  "CMS": "border-yellow-300 text-yellow-200",
  "Dashboard": "border-cyan-300 text-cyan-200",
  "API": "border-orange-400 text-orange-300",
  "Tailwind": "border-teal-300 text-teal-200"
};

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Portfolio Website",
    image: "/projects/rolex.png",
    deliveryTime: "3 Weeks",
    tags: ["UI/UX", "Next.js", "SEO", "Branding"],
    description: "A modern website for a creative brand with a focus on storytelling and conversions.",
    link: "/projects/brand-portfolio"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: "/projects/project2.jpg",
    deliveryTime: "6 Weeks",
    tags: ["Shopify", "Payments", "CMS"],
    description: "Scalable and secure e-commerce experience optimized for mobile shopping.",
    link: "/projects/e-commerce"
  },
  {
    id: 3,
    title: "SaaS Dashboard UI",
    image: "/projects/project3.jpg",
    deliveryTime: "4 Weeks",
    tags: ["Dashboard", "API", "Tailwind"],
    description: "A dynamic SaaS interface for real-time analytics and product performance.",
    link: "/projects/saas-dashboard"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-4/5 py-4 px-8 container mx-auto">
      <div className="flex items-center justify-between mb-16">
      <h2 className="text-4xl lg:text-6xl font-bold mb-12 text-white">
        Latest projects
      </h2>
      <Link href="/projects" className="text-3xl px-5 py-3 rounded-full border-2 border-amber-200 hover:text-gray-300 transition">
       see all projects <MdOutlineArrowOutward className="text-black w-8 inline-block bg-amber-200 rounded-full " />
      </Link>
      </div>




      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1c1c1e] rounded-2xl border border-white/10 hover:border-yellow-300 transition overflow-hidden "
          >
            
            {/* Full width image with no padding */}
            <div className="relative w-full aspect-video overflow-hidden  mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 "
              />
            </div>

            <div className="p-6">

            <h3 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-yellow-300 mb-3 font-medium">
              Delivery: {project.deliveryTime}
            </p>

            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className={`px-3 py-1 text-sm rounded-full border ${tagBorderColors[tag] ?? "border-white/20 text-white"}`}
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-sm mb-6">
              {project.description}
            </p>

            <Link
              href={project.link}
              className="inline-flex items-center gap-2 group font-semibold text-white hover:text-yellow-200 transition"
            >
              <span>Discover</span>

              <span>
                <FaArrowRight
                  className="text-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                />
              </span>

              <MdOutlineArrowOutward
                className="text-lg transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2"
              />
            </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
