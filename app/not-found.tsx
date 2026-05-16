import Link from "next/link";

const NotFound = () => {

  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        bg-[#0f0f0f]
        text-white
        relative
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          top-[-100px]
          left-[-100px]
          w-[400px]
          h-[400px]
          bg-purple-600/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-fuchsia-500/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          text-center
          max-w-2xl
        "
      >

        <h1
          className="
            text-7xl
            md:text-9xl
            font-bold
            bg-gradient-to-r
            from-purple-400
            to-fuchsia-500
            bg-clip-text
            text-transparent
            mb-6
          "
        >
          404
        </h1>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
            mb-6
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            text-gray-400
            text-lg
            leading-8
            mb-10
          "
        >
          The page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="
            inline-block
            px-8
            py-4
            rounded-2xl
            bg-purple-600
            hover:bg-purple-700
            transition
            text-lg
          "
        >
          Back To Home
        </Link>

      </div>

    </main>
  );
};

export default NotFound;