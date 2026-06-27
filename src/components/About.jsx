import Reveal from "./animations/Reveal";

function About() {
  return (
    <Reveal>
      <section id="about" className="bg-white py-32">
        <div className="mx-auto grid max-w-[1500px] items-center gap-20 px-6 md:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <p className="uppercase tracking-[0.3em] text-gray-500">
              About Entasis
            </p>

            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Architecture that shapes
              <br />
              how people live.
            </h2>

            <p className="max-w-xl text-lg leading-8 text-gray-600">
              At Entasis Architects, we create spaces that balance
              beauty, functionality, and sustainability.
              Every project begins with understanding the client,
              the site, and the story behind the space.
            </p>

            <a
              href="#contact"
              className="inline-flex w-fit items-center rounded-md border border-black px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Learn More
            </a>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/about.jpg"
              alt="Entasis Architects"
              className="h-[650px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default About;