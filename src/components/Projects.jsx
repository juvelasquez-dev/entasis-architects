import Reveal from "./animations/Reveal";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [openModal, setOpenModal] = useState(false);

  const projects = [
    {
      title: "Modern Residence",
      category: "Residential",
      location: "Legazpi City",
      image: "/images/project1.jpg",
    },
    {
      title: "Contemporary Villa",
      category: "Residential",
      location: "Naga City",
      image: "/images/project2.jpg",
    },
    {
      title: "Commercial Building",
      category: "Commercial",
      location: "Albay",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <Reveal>
      <>
        <section
          id="projects"
          className="bg-gray-50 py-36"
        >
          <div className="mx-auto max-w-7xl px-6">

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-500">
              Featured Projects
            </p>

            <div className="flex items-end justify-between">

              <h2 className="max-w-2xl text-5xl font-bold leading-tight">
                Selected works that
                define our approach.
              </h2>

              {/* View All Button */}
              <button
                onClick={() => setOpenModal(true)}
                className="hidden rounded-md border border-black px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white md:block"
              >
                View All →
              </button>

            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-3">

              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-8">

                    <p className="text-sm uppercase tracking-widest text-gray-500">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {project.location}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      </>
    </Reveal>
  );
}

export default Projects;