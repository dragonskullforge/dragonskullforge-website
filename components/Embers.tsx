import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Ghostface",
    image: "/images/ghostface.jpg",
    description: "3D printed Ghostface mask and knife.",
  },
  {
    title: "Marionette",
    image: "/images/marionette.jpg",
    description: "Five Nights at Freddy's Marionette mask.",
  },
  {
    title: "Star-Lord Blaster",
    image: "/images/starlord.jpg",
    description: "Guardian of the Galaxy blaster replica.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#080808] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="font-heading text-5xl md:text-6xl text-white">
            Featured Creations
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of custom commissions and personal projects,
            all designed, printed and finished by Dragonskull Forge.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-red-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {project.description}
                </p>

                <Link
                  href="/gallery"
                  className="inline-block mt-6 text-red-500 font-semibold hover:text-red-400 transition"
                >
                  View Project →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            href="/gallery"
            className="forge-button inline-block bg-red-700 hover:bg-red-600 rounded-full px-10 py-4 text-lg font-bold text-white transition-all duration-300"
          >
            View Full Gallery
          </Link>

        </div>

      </div>

    </section>
  );
}