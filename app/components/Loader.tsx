"use client";

import { motion } from "framer-motion";

const Loader = () => {

  return (
    <motion.div

      initial={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      transition={{ duration: 0.8 }}

      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#0f0f0f]
      "
    >

      <motion.h1

        initial={{
          opacity: 0,
          scale: 0.8,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.8,
        }}

        className="
          text-5xl
          md:text-7xl
          font-bold
          bg-gradient-to-r
          from-purple-400
          to-fuchsia-500
          bg-clip-text
          text-transparent
        "
      >
        Jash
      </motion.h1>

    </motion.div>
  );
};

export default Loader;