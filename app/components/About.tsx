import Reveal from "./Reveal";

const About = () => {

  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <Reveal>

        <div className="max-w-6xl mx-auto">

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-center
              mb-16
            "
          >
            About Me
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-10
            "
          >

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-10
                backdrop-blur-lg
              "
            >

              <h3
                className="
                  text-2xl
                  font-semibold
                  mb-6
                "
              >
                Who I Am
              </h3>

              <p
                className="
                  text-gray-300
                  leading-8
                  text-lg
                "
              >
                I am a Full Stack Developer passionate about
                building modern, responsive, and interactive
                web applications. I enjoy solving real-world
                problems and creating clean user experiences
                using modern web technologies.
              </p>

            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-10
                backdrop-blur-lg
              "
            >

              <h3
                className="
                  text-2xl
                  font-semibold
                  mb-6
                "
              >
                What I Do
              </h3>

              <p
                className="
                  text-gray-300
                  leading-8
                  text-lg
                "
              >
                I build full stack applications using
                Next.js, React, Node.js, Tailwind CSS,
                Socket.IO, and MongoDB. I also enjoy
                problem solving and continuously learning
                modern development practices.
              </p>

            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
};

export default About;