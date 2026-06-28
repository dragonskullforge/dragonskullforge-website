import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-32 px-8">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold mb-6">
            Get In Touch
          </h1>

          <p className="text-gray-400 text-xl mb-12">
            Have an idea for a custom prop or cosplay project?
            I'd love to hear about it.
          </p>

          <div className="bg-zinc-900 border border-red-900 rounded-2xl p-8 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-white">
                Email
              </h2>

              <a
                href="mailto:dragonskullforge13@gmail.com"
                className="text-red-500 hover:text-red-400"
              >
                dragonskullforge13@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Instagram
              </h2>

              <a
                href="https://instagram.com/dragonskullforge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400"
              >
                @dragonskullforge
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Commissions
              </h2>

              <p className="text-gray-300">
                For custom builds, cosplay props, helmets or collectibles,
                please use the Commission page so I can gather all the details
                about your project.
              </p>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}