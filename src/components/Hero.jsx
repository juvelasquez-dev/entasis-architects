function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
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

          <button className="mt-10 rounded-md bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;