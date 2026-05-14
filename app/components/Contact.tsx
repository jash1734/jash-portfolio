import {
  Mail,
  MapPin,
} from "lucide-react";

const Contact = () => {

  return (
    <section
      id="contact"
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
          Contact Me
        </h2>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            md:p-12
            backdrop-blur-lg
          "
        >

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                mb-6
              "
            >
              Let's Work Together
            </h3>

            <p
              className="
                text-gray-400
                leading-8
                text-lg
                mb-10
                max-w-md
              "
            >
              I am open to opportunities,
              collaborations, and interesting
              projects. Feel free to reach out.
            </p>

            <div className="space-y-6">

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    p-4
                    rounded-2xl
                    bg-purple-500/10
                    border
                    border-purple-500/20
                  "
                >
                  <Mail size={22} />
                </div>

                <div>

                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="text-lg">
                    jashdeshani@gmail.com
                  </p>

                </div>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >

              </div>

            </div>

          </div>

          <form className="space-y-6">

            <div>

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-purple-500
                  transition
                "
              />

            </div>

            <div>

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-purple-500
                  transition
                "
              />

            </div>

            <div>

              <textarea
                rows={7}
                placeholder="Your Message"
                className="
                  w-full
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-purple-500
                  transition
                  resize-none
                "
              />

            </div>

            <button
              className="
                w-full
                py-4
                rounded-2xl
                bg-purple-600
                hover:bg-purple-700
                transition
                text-lg
                font-medium
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;