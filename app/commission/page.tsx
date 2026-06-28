import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Commission() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-32 px-8">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-6">
            Commission a Build
          </h1>

          <p className="text-xl text-gray-400 text-center mb-14">
            Looking for a custom cosplay prop, helmet, mask or collectible?
            Fill in the form below and I'll get back to you as soon as possible.
          </p>

          <form
            action="https://formspree.io/f/meebzjgq"
            method="POST"
            className="bg-zinc-900 border border-red-900 rounded-2xl p-10 space-y-8"
          >

            <input
              type="hidden"
              name="_subject"
              value="New Dragonskull Forge Commission Request"
            />

            <div>

              <label className="block mb-2 font-semibold">
                Your Name
              </label>

              <input
                type="text"
                name="Name"
                required
                placeholder="John Smith"
                className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-red-600 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="Email"
                required
                placeholder="john@email.com"
                className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-red-600 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold">
                What would you like made?
              </label>

              <select
                name="Project Type"
                className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-red-600 outline-none"
              >
                <option>Helmet</option>
                <option>Mask</option>
                <option>Movie Prop</option>
                <option>Game Prop</option>
                <option>Weapon</option>
                <option>Armour</option>
                <option>Collectible</option>
                <option>Something Else</option>
              </select>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-semibold">
                  Budget
                </label>

                <input
                  type="text"
                  name="Budget"
                  placeholder="£100 - £300"
                  className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-red-600 outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold">
                  Deadline
                </label>

                <input
                  type="date"
                  name="Deadline"
                  className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-red-600 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold">
                Tell me about your project
              </label>

              <textarea
                name="Project Description"
                rows={8}
                required
                placeholder="Tell me everything! Include colours, references, size, materials, inspiration and anything else that will help."
                className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-red-600 outline-none"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-600 transition py-4 rounded-full text-xl font-bold"
            >
              Send Commission Request
            </button>

          </form>

          <div className="mt-20 grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-xl p-6 border border-red-900">

              <h2 className="text-xl font-bold mb-3">
                1. Tell Me Your Idea
              </h2>

              <p className="text-gray-400">
                Fill out the form with as much detail as possible.
              </p>

            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-red-900">

              <h2 className="text-xl font-bold mb-3">
                2. I'll Contact You
              </h2>

              <p className="text-gray-400">
                I'll discuss pricing, timescales and answer any questions.
              </p>

            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-red-900">

              <h2 className="text-xl font-bold mb-3">
                3. Your Build Begins
              </h2>

              <p className="text-gray-400">
                Once everything is agreed, I'll begin creating your commission.
              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}