import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} />,
  },
  
  {
    name: "React",
    icon: <FaReact size={40} />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs size={40} />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
  },

  {
    name: "Socket.IO",
    icon: <SiSocketdotio size={40} />,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript size={40} />,
  },

  {
  name: "C++",

  icon: (
    <div
      className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
        border
        border-purple-400
        text-purple-400
        font-bold
        text-sm
      "
    >
      C++
    </div>
  ),
},

  {
    name: "Git",
    icon: <FaGitAlt size={40} />,
  },

  {
    name: "GitHub",
    icon: <FaGithub size={40} />,
  },
];

const Skills = () => {

  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            mb-16
          "
        >
          Skills
        </h2>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          {skills.map((skill) => (
            <div

              key={skill.name}

              className="
                group
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-5
                hover:border-purple-500/50
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div
                className="
                  text-purple-400
                  group-hover:scale-110
                  transition
                  duration-300
                "
              >
                {skill.icon}
              </div>

              <p
                className="
                  text-gray-200
                  text-lg
                  font-medium
                "
              >
                {skill.name}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;