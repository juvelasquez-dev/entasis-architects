import Reveal from "./animations/Reveal";

function Team() {
  const members = [
    {
      name: "Philip Batan",
      role: "Principal Architect",
      image: "/images/team1.jpg",
    },
    {
      name: "Felix Marion Balares",
      role: "Project Architect",
      image: "/images/team2.jpg",
    },
    {
      name: "Jiff",
      role: "Architectural Designer",
      image: "/images/team3.png",
    },
  ];

  return (
    <Reveal>
    <section id="team" className="bg-gray-50 py-36">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-500">
          Our Team
        </p>

        <h2 className="max-w-2xl text-5xl font-bold">
          Meet the people behind
          every successful project.
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold">
                  {member.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Team;