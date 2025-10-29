"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useParams, notFound } from "next/navigation";
import { allProjects } from "../../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const projectIndex = allProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) return notFound();

  const project = allProjects[projectIndex];
  const previous = allProjects[projectIndex - 1];
  const next = allProjects[projectIndex + 1];

  return (
    <main className="text-white bg-black min-h-screen py-26 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 mb-8 hover:text-yellow-300 transition"
        >
          <FaArrowLeft /> All Projects
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>

        <p className="text-yellow-300 font-medium mb-8">
          Delivery: {project.deliveryTime}
        </p>

        {/* Image */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-12 border border-white/10">
          <Image
            fill
            sizes="100vw"
            src={project.image}
            alt={project.title}
            unoptimized={project.image.startsWith("http")}
            className="object-cover"
          />
        </div>

        <p className="text-gray-300 leading-relaxed mb-16">
          {project.description}
        </p>

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-white/10 pt-8">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="inline-flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <FaArrowLeft /> Previous
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 hover:text-yellow-300 transition"
            >
              Next <FaArrowRight />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
