import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

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

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-32 px-8">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">
            The Forge
          </h1>

          <p className="text-xl text-gray-400 text-center mb-16">
            A collection of custom props, helmets, cosplay builds and
            collectibles created by Dragonskull Forge.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <div
                key={project.title}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-red-900 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-400">
                    {project.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}