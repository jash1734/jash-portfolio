import Reveal from "./Reveal";

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",

    institute: "Shantilal Shah Government Engineering College",

    duration: "2022 - 2025",

    cgpa: "8.04 CGPA",
  },

  {
    degree: "Diploma Engineering in Information Technology",

    institute: "Sir Bhavsinhji Polytechnic Institute",

    duration: "2019 - 2022",

    cgpa: "7.54 CGPA",
  },
];

const Education = () => {

  return (
    <section
      id="education"
      className="py-28 px-6"
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
            Education
          </h2>

          <div className="space-y-8">

            {education.map((item) => (
              <div

                key={item.degree}

                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  backdrop-blur-lg
                  hover:border-purple-500/40
                  hover:bg-white/[0.07]
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
                    gap-5
                  "
                >

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-semibold
                        mb-2
                      "
                    >
                      {item.degree}
                    </h3>

                    <p
                      className="
                        text-purple-400
                      "
                    >
                      {item.institute}
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      flex-col
                      md:items-end
                      gap-2
                    "
                  >

                    <p className="text-gray-400">
                      {item.duration}
                    </p>

                    <div
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        text-purple-300
                        text-sm
                        w-fit
                      "
                    >
                      {item.cgpa}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </Reveal>
    </section>
  );
};

export default Education;