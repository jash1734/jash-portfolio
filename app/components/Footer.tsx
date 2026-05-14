const Footer = () => {

  return (
    <footer
      className="
        border-t
        border-white/10
        py-8
        px-6
        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >

        <p className="text-gray-400">
          © 2026 Jash Deshani. All rights reserved.
        </p>

        <p className="text-gray-500 text-sm">
          Built with Next.js & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;