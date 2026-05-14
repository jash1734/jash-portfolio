import Reveal from "./Reveal";

const experiences = [
  {
    role: "Software Developer Engineer Intern",

    company: "Meetanshi Technologies",

    duration: "Jan 2025 - Apr 2025",

    description:
      "Worked on application support, debugging issues, monitoring systems, and collaborating with development teams to resolve technical problems.",
  },
];

const Experience = () => {

  return (
    <section
      className="py-24 px-6"
      id="experience"
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
            Experience
          </h2>

          <div className="space-y-8">

            {experiences.map((item) => (
              <div

                key={item.role}

                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  backdrop-blur-lg
                  hover:border-purple-500/40
                  transition
                  duration-300
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-3
                    mb-6
                  "
                >

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-semibold
                      "
                    >
                      {item.role}
                    </h3>

                    <p
                      className="
                        text-purple-400
                        mt-2
                      "
                    >
                      {item.company}
                    </p>

                  </div>

                  <p className="text-gray-400">
                    {item.duration}
                  </p>

                </div>

                <p
                  className="
                    text-gray-300
                    leading-8
                    text-lg
                  "
                >
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Reveal>
    </section>
  );
};

export default Experience;