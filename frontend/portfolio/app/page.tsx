import Image from "next/image";
import OrbitItem from "./components/OrbitItem";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-12 px-8 py-24 text-left lg:flex-row lg:justify-between animate-appear">
        <div className="max-w-xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60 sm:text-sm">
            Portfolio
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
            Aron
            <span className="block text-white/70">
              <span className="swap-word" aria-label="Creative" tabIndex={0}>
                <span className="swap-letter pos-1 swap-move-c swap-gradient">C</span>
                <span className="swap-letter pos-2 swap-move-r">r</span>
                <span className="swap-letter pos-3 swap-out">e</span>
                <span className="swap-letter pos-4 swap-out">a</span>
                <span className="swap-letter pos-5">t</span>
                <span className="swap-letter pos-6">i</span>
                <span className="swap-letter pos-7">v</span>
                <span className="swap-letter pos-8">e</span>
                <span className="swap-letter pos-2 swap-in">e</span>
                <span className="swap-letter pos-3 swap-in">a</span>
              </span>
              <span className="ml-2">Developer</span>
            </span>
          </h1>
          <p className="text-lg leading-8 text-white/70 sm:text-xl">
            Building clean, purposeful interfaces and memorable digital
            experiences.
          </p>
        </div>
        <div className="pointer-events-none animate-float-y">
          <div className="flex h-[520px] w-[520px] max-w-[78vw] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-red-500 p-0 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="h-full w-full overflow-hidden rounded-full">
              <Image
                src="/aron-bg2.png"
                alt="Aron"
                width={1200}
                height={1800}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>
      <section className="mx-auto w-full max-w-6xl px-8 pb-24">
        <div className="about-orbit">
          <div className="about-center">
            <p className="about-eyebrow">Aron Segovia</p>
            <h2 className="about-title">ABOUT ME</h2>
            <p className="about-text">
              Ideas built fast, built well.
            </p>
          </div>
          <OrbitItem
            label="UI"
            tooltip="Design systems and UI craft."
            className="orbit-1"
          />
          <OrbitItem
            label="Code"
            tooltip="Clean, scalable front-end."
            className="orbit-2"
          />
          <OrbitItem
            label="Motion"
            tooltip="Deliberate micro-animations."
            className="orbit-3"
          />
          <OrbitItem
            label="Audio"
            tooltip="Immersive sound pairings."
            className="orbit-4"
          />
          <OrbitItem
            label="3D"
            tooltip="Depth, lighting, composition."
            className="orbit-5"
          />
          <OrbitItem
            label="Systems"
            tooltip="Reusable patterns and tokens."
            className="orbit-6"
          />
        </div>
      </section>
      <ProjectsSection />
    </div>
  );
}
