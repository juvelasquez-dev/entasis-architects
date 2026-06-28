import { X, ChevronLeft, ChevronRight } from "lucide-react";

function ProjectModal({
  open,
  onClose,
  selected,
  setSelected,
  projects,
}) {
  if (!open) return null;

  const project = projects[selected];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 rounded-full bg-white/90 p-2 shadow transition hover:scale-110"
        >
          <X size={22} />
        </button>

        {/* Content */}
        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <img
              src={project.image}
              alt={project.title}
              className="h-full min-h-[500px] w-full object-cover"
            />

            {/* Previous */}
            <button
              onClick={() =>
                setSelected(
                  (selected - 1 + projects.length) % projects.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:scale-110"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setSelected(
                  (selected + 1) % projects.length
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:scale-110"
            >
              <ChevronRight size={22} />
            </button>

          </div>

          {/* Details */}
          <div className="p-10">

            <p className="uppercase tracking-[0.3em] text-gray-500">
              {project.category}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {project.title}
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-6">

              <div>
                <p className="text-sm uppercase text-gray-400">
                  Location
                </p>

                <p className="mt-1 font-medium">
                  {project.location}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase text-gray-400">
                  Project Type
                </p>

                <p className="mt-1 font-medium">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase text-gray-400">
                  Floor Area
                </p>

                <p className="mt-1 font-medium">
                  {project.area}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase text-gray-400">
                  Year
                </p>

                <p className="mt-1 font-medium">
                  {project.year}
                </p>
              </div>

            </div>

            <p className="mt-10 leading-8 text-gray-600">
              {project.description}
            </p>

          </div>

        </div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-4 overflow-x-auto border-t bg-gray-50 p-6">

          {projects.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              onClick={() => setSelected(index)}
              className={`h-28 w-40 cursor-pointer rounded-lg object-cover transition-all duration-300 ${
                selected === index
                  ? "scale-105 ring-4 ring-black"
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