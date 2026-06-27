import Reveal from "./animations/Reveal";

function Hero() {
  return (
    <Reveal>
    <section
      id="home"
      className="relative h-screen"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
            Designing
            <br />
            Timeless Spaces
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200">
            Entasis Architects creates thoughtful, sustainable, and inspiring
            spaces that blend functionality with exceptional design.
          </p>

          <a
          href="#projects"
          className="mt-6 inline-flex items-center rounded-md bg-white px-8 py-4 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
          >
          View Projects
        </a>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Hero;