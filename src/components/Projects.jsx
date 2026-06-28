import Reveal from "./animations/Reveal";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects";

function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(0);

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
                <br />
                define our approach.
              </h2>

              <button
                onClick={() => {
                  setSelected(0);
                  setOpenModal(true);
                }}
                className="group hidden items-center gap-3 md:inline-flex"
              >
                <span className="text-sm font-medium uppercase tracking-[0.25em] text-gray-700 transition-colors duration-300 group-hover:text-black">
                  Explore Portfolio
                </span>

                <div className="relative">
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
              </button>

            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-3">

              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelected(index);
                    setOpenModal(true);
                  }}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

        <ProjectModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          selected={selected}
          setSelected={setSelected}
          projects={projects}
        />

      </>
    </Reveal>
  );
}

export default Projects;