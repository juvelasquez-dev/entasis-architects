function About() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto grid max-w-[1500px] items-center gap-20 px-6 md:grid-cols-[0.9fr_1.1fr]">

        <div>
          <p className="mb-4 tracking-[0.3em] text-gray-500 uppercase">
            About Entasis
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Architecture that shapes
            how people live.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            At Entasis Architects, we create spaces that balance
            beauty, functionality, and sustainability.

            Every project begins with understanding the client,
            the site, and the story behind the space.
          </p>

          <button className="mt-10 rounded border border-black px-8 py-4 transition hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>

        <div>
          <img
            src="/images/about.jpg"
            alt="Architecture"
            className="h-[600px] w-full rounded-lg object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default About;