"use client";
import { motion } from "framer-motion";

import {
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {

  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-24
        relative
      "
    >
      <motion.div

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="
          text-center
          max-w-4xl
        "
      >

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            mb-6
          "
        >
          Hi, I'm
          <span
            className="
              block
              bg-gradient-to-r
              from-purple-400
              to-fuchsia-500
              bg-clip-text
              text-transparent
            "
          >
            Jash Deshani
          </span>
        </h1>

        <h2
          className="
            text-2xl
            md:text-4xl
            text-gray-300
            mb-8
          "
        >
          A Full Stack Developer
        </h2>

        <p
          className="
            text-gray-400
            text-lg
            md:text-xl
            leading-8
            mb-10
            max-w-2xl
            mx-auto
          "
        >
          I create responsive, scalable, and interactive web
          applications using Next.js, React, Node.js,
          Tailwind CSS, and modern web technologies.
        </p>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
        >
          <a
            href="#projects"
            className="
              px-8
              py-4
              rounded-2xl
              bg-purple-600
              hover:bg-purple-700
              transition
              text-lg
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              hover:border-purple-500
              transition
              text-lg
            "
          >
            Download Resume
          </a>
        </div>
        <div
  className="
    flex
    items-center
    justify-center
    gap-6
    mt-10
  "
>

  <a
    href="https://github.com/yourusername"
    target="_blank"
    className="
      p-4
      rounded-full
      bg-white/5
      border
      border-white/10
      hover:border-purple-500
      hover:-translate-y-1
      transition
      duration-300
    "
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    className="
      p-4
      rounded-full
      bg-white/5
      border
      border-white/10
      hover:border-purple-500
      hover:-translate-y-1
      transition
      duration-300
    "
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="mailto:yourmail@gmail.com"
    className="
      p-4
      rounded-full
      bg-white/5
      border
      border-white/10
      hover:border-purple-500
      hover:-translate-y-1
      transition
      duration-300
    "
  >
    <Mail size={22} />
  </a>

</div>
      </motion.div>
    </section>
  );
};

export default Hero;