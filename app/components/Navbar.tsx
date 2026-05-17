"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <motion.nav

      initial={{ y: -60, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.5 }}

      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/10
        bg-black/30
        backdrop-blur-xl
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        <h1
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-purple-400
            to-fuchsia-500
            bg-clip-text
            text-transparent
          "
        >
          <a href="#hero">
            Jash
          </a>
        </h1>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            text-gray-300
          "
        >
          <a
            href="#about"
            className="hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-purple-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="hover:text-purple-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#education"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Education
          </a>

          <a
            href="#contact"
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            className="
              px-5
              py-2
              rounded-xl
              bg-purple-600
              hover:bg-purple-700
              transition
            "
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-white
            cursor-pointer
          "
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {open && (
        <div
          className="
            md:hidden
            px-6
            pb-6
            flex
            flex-col
            items-end
            gap-5
            text-gray-300
            bg-black/40
            backdrop-blur-xl
          "
        >

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#education"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Education
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            className="
              w-fit
              px-5
              py-2
              rounded-xl
              bg-purple-600
              hover:bg-purple-700
              transition
            "
          >
            Resume
          </a>

        </div>
      )}

    </motion.nav>
  );
};

export default Navbar;