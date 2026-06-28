import { X, ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../data/projects";
import { useState } from "react";

function ProjectModal({ open, onClose }) {
  const [selected, setSelected] = useState(0);

  if (!open) return null;

  const project = projects[selected];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white">

        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20"
        >
          <X />
        </button>

        <div className="grid lg:grid-cols-2">

          <img
            src={project.image}
            className="h-full min-h-[500px] w-full object-cover"
          />

          <div className="p-10">

            <h2 className="text-4xl font-bold">
              {project.title}
            </h2>

            <div className="mt-8 space-y-3">

              <p><strong>Location:</strong> {project.location}</p>

              <p><strong>Project Type:</strong> {project.type}</p>

              <p><strong>Floor Area:</strong> {project.area}</p>

              <p><strong>Year:</strong> {project.year}</p>

            </div>

            <p className="mt-8 leading-8 text-gray-600">
              {project.description}
            </p>

            <div className="mt-12 flex justify-between">

              <button
                onClick={() =>
                  setSelected((selected - 1 + projects.length) % projects.length)
                }
                className="flex items-center gap-2 rounded border px-6 py-3"
              >
                <ChevronLeft size={18}/>
                Previous
              </button>

              <button
                onClick={() =>
                  setSelected((selected + 1) % projects.length)
                }
                className="flex items-center gap-2 rounded bg-black px-6 py-3 text-white"
              >
                Next
                <ChevronRight size={18}/>
              </button>

            </div>

          </div>

        </div>

        {/* Thumbnail Carousel */}

        <div className="flex gap-4 overflow-x-auto border-t p-6">

          {projects.map((item, index) => (

            <img
              key={item.id}
              src={item.image}
              onClick={() => setSelected(index)}
              className={`h-28 w-40 cursor-pointer rounded-lg object-cover transition
              ${
                selected === index
                  ? "ring-4 ring-black"
                  : "opacity-60 hover:opacity-100"
              }`}
            />

          ))}

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;