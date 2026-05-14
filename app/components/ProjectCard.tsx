"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    slug: string;
    thumbnail: string;
    tech: string[];
  };
}

const ProjectCard = ({
  project,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          group
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-lg
          hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
          transition
          duration-300
        "
      >
        <div
          className="
            h-56
            overflow-hidden
            relative
          "
        >
          <Image
  src={project.thumbnail}
  alt={project.title}
   width={600}
  height={400}
  className="
    w-full
    h-full
    object-cover
    group-hover:scale-110
    transition
    duration-700
  "
/>

<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/60
    to-transparent
  "
/>
        </div>

        <div className="p-6">
          <h3
            className="
              text-2xl
              font-semibold
              mb-4
            "
          >
            {project.title}
          </h3>

          <p
            className="
              text-gray-400
              leading-7
              mb-6
            "
          >
            {project.description}
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-purple-500/10
                  border
                  border-purple-500/20
                  text-sm
                  text-purple-300
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;