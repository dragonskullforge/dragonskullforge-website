import Image from "next/image";
import Link from "next/link";
import Embers from "./Embers";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden forge-background">
      <Embers />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-6">

        <Image
          src="/images/logo.png"
          alt="Dragonskull Forge"
          width={420}
          height={420}
          priority
          className="float-logo forge-glow"
        />

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-widest text-white">
          CUSTOM 3D PRINTED
        </h1>

        <p className="mt-6 text-red-500 text-xl md:text-2xl tracking-[0.4em] uppercase">
          Props • Cosplay • Collectibles
        </p>

        <p className="mt-8 max-w-3xl text-lg text-gray-300">
          Bringing movies, games and imagination to life through
          high-quality custom 3D printed props, helmets and collectibles.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6">

          <Link
            href="/commission"
            className="bg-red-700 hover:bg-red-600 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            Commission a Build
          </Link>

          <Link
            href="/gallery"
            className="border border-red-700 hover:bg-red-900/20 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            View The Forge
          </Link>

        </div>

        <div className="mt-20 text-gray-500 uppercase tracking-[0.4em] animate-bounce">
          ↓ Scroll
        </div>

      </div>
    </section>
  );
}