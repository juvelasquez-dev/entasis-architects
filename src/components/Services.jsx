import {
  PencilRuler,
  Building2,
  Compass,
  Trees,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <PencilRuler size={34} />,
      title: "Architectural Design",
      description:
        "Innovative and functional architectural solutions tailored to each client's vision.",
    },
    {
      icon: <Building2 size={34} />,
      title: "Construction & Build",
      description:
        "End-to-end project execution with quality craftsmanship and attention to detail.",
    },
    {
      icon: <Compass size={34} />,
      title: "Planning & Consultancy",
      description:
        "Professional planning, feasibility studies, and technical consultation for every stage.",
    },
    {
      icon: <Trees size={34} />,
      title: "Landscape Design",
      description:
        "Outdoor environments that complement architecture and enhance everyday living.",
    },
  ];

  return (
    <section id="services" className="bg-white py-36">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-500">
          Our Services
        </p>

        <h2 className="max-w-2xl text-5xl font-bold leading-tight">
          Comprehensive architectural
          solutions from concept to completion.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-8 text-black">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;