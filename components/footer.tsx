export default function Footer() {
  return (
    <footer className="mt-24 border-t border-red-900 bg-black">

      <div className="max-w-7xl mx-auto px-8 py-12 text-center">

        <img
          src="/images/logo.png"
          alt="Dragonskull Forge"
          className="w-20 mx-auto mb-6 opacity-90"
        />

        <h2 className="text-3xl font-bold text-white">
          Dragonskull Forge
        </h2>

        <p className="mt-3 text-red-500 tracking-widest uppercase">
          Built for Legends
        </p>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Custom 3D printed cosplay props, helmets, collectibles and
          one-off commissions, handcrafted in the UK.
        </p>

        <div className="mt-8 space-y-2 text-gray-400">

          <p>📧 dragonskullforge13@gmail.com</p>

          <p>📷 Instagram: @dragonskullforge</p>

        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6">

          <p className="text-gray-600 text-sm">
            © 2026 Dragonskull Forge. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}