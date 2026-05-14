import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#0f0f0f]
        text-white
        px-6
        py-24
      "
    >
      <div className="max-w-6xl mx-auto">

        <Link
          href="/"
          className="
            inline-block
            mb-10
            text-purple-400
            hover:text-purple-300
            transition
          "
        >
          ← Back to Home
        </Link>

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            mb-12
            bg-white/5
          "
        >
          <Image
  src={project.thumbnail}
  alt={project.title}
   width={1200}
  height={800}
  className="
    w-full
    object-cover
    hover:scale-105
    transition
    duration-700
  "
/>
        </div>

        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            mb-8
          "
        >
          {project.title}
        </h1>

        <p
          className="
            text-gray-300
            text-lg
            leading-8
            mb-12
            max-w-4xl
          "
        >
          {project.longDescription}
        </p>

        <div className="mb-16">

  <h2
    className="
      text-3xl
      font-semibold
      mb-8
    "
  >
    Screenshots
  </h2>

  <div
    className="
      grid
      md:grid-cols-2
      gap-6
    "
  >

    {project.images.map((image) => (
      <div

        key={image}

        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
        "
      >

        <Image
          src={image}
          alt="Project Screenshot"
           width={1200}
          height={800}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition
            duration-500
          "
        />

      </div>
    ))}

  </div>

</div>

        <div className="mb-14">

          <h2
            className="
              text-3xl
              font-semibold
              mb-6
            "
          >
            Features
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            {project.features.map((feature) => (
              <div
                key={feature}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  text-gray-300
                "
              >
                {feature}
              </div>
            ))}
          </div>

        </div>

        <div className="mb-14">

          <h2
            className="
              text-3xl
              font-semibold
              mb-6
            "
          >
            Tech Stack
          </h2>

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-purple-500/10
                  border
                  border-purple-500/20
                  text-purple-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        <div className="flex flex-wrap gap-5">

          <a
            href={project.github}
            target="_blank"
            className="
              px-7
              py-4
              rounded-2xl
              bg-purple-600
              hover:bg-purple-700
              transition
            "
          >
            View GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="
              px-7
              py-4
              rounded-2xl
              border
              border-white/20
              hover:border-purple-500
              transition
            "
          >
            Live Demo
          </a>

        </div>

      </div>
    </main>
  );
}