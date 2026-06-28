import Image from "next/image";
import Link from "next/link";
import Embers from "./Embers";

export default function Hero() {
  return (
    <section className="forge-background relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <Embers />

      <div className="relative z-10 text-center max-w-5xl mx-auto">

        <Image
          src="/images/logo.png"
          alt="Dragonskull Forge"
          width={380}
          height={380}
          priority
          className="mx-auto mb-10 float-logo forge-glow"
        />

        <h1 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-[0.25em]">
          Custom 3D Printed
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-red-500 uppercase tracking-[0.35em]">
          Props • Cosplay • Collectibles
        </p>

        <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
          Bringing movies, games and imagination to life through
          high-quality custom 3D printed props, helmets and collectibles.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <Link
            href="/commission"
            className="forge-button rounded-full bg-red-700 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-red-600"
          >
            Commission a Build
          </Link>

          <Link
            href="/gallery"
            className="forge-button rounded-full border border-red-700 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-red-900/20 hover:border-red-500"
          >
            View The Forge
          </Link>

        </div>

        <div className="mt-20 text-gray-500 animate-bounce">

          <p className="uppercase tracking-[0.4em] text-sm">
            Scroll
          </p>

          <p className="text-3xl">
            ↓
          </p>

        </div>

      </div>

    </section>
  );
}