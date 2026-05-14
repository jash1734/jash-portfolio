const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

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
          absolute
          top-[40%]
          left-[40%]
          w-[300px]
          h-[300px]
          bg-violet-500/10
          rounded-full
          blur-3xl
        "
      />
    </div>
  );
};

export default BackgroundGlow;