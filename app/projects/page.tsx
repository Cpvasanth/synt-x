"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { allProjects } from "../data/projects";
import FaqSection from "../component/FaqSection";


export default function ProjectsPage() {
  return (
    <main className="text-white bg-black min-h-screen py-24 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              All Projects
            </h1>
            <p className="text-gray-400 mt-2">
              A collection of our team's best work.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/30 px-4 py-3 rounded-full hover:text-yellow-300 hover:border-yellow-300 transition group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition" />
            Back to Home
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-300 transition group"
            >
              <div className="relative aspect-video">
                <Image
                  fill
                  sizes="100vw"
                  src={project.image}
                  alt={project.title}
                  unoptimized={project.image.startsWith("http")}
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-yellow-300 mb-4">
                  {project.deliveryTime}
                </p>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-yellow-300 hover:gap-3 transition-all font-semibold"
                >
                  Discover
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FaqSection />
    </main>
  );
}
