import OrbitItem from "./components/OrbitItem";
import ProjectsSection from "./components/ProjectsSection";
import WhyMeSection from "./components/WhyMeSection";
import ContactSection from "./components/ContactSection";
import { ModelViewer } from "./components/ModelViewer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <main className="hero-layout flex min-h-screen w-full flex-col items-center gap-12 px-8 py-24 text-left lg:flex-row lg:justify-between animate-appear">
        <div className="hero-text hero-text-offset max-w-xl space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60 sm:text-sm">
            Portfolio
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
            Aron
            <span className="block text-white/70">
              <span className="swap-gradient">C</span>reative Developer
            </span>
          </h1>
          <p className="text-lg leading-8 text-white/70 sm:text-xl">
            Building clean, purposeful interfaces and memorable digital
            experiences.
          </p>
        </div>
        <div className="drone-flight">
          <div className="drone-track">
            <div className="drone-shell">
              <ModelViewer
                className="drone-model"
                src="/drone.glb"
                alt="Drone"
                autoplay
                auto-rotate
                disable-zoom
                interaction-prompt="none"
                background-color="transparent"
                skybox-image=""
                environment-image="neutral"
                shadow-intensity="0.2"
                exposure="0.85"
                camera-orbit="35deg 70deg 3.8m"
                min-camera-orbit="auto auto 3.0m"
                max-camera-orbit="auto auto 4.6m"
                field-of-view="45deg"
                camera-target="0m 0m 0m"
                style={{ background: "transparent" }}
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
            tooltip="Academic foundation and growth."
            className="orbit-1"
            image="/mcgill.jpg"
            description="I'm a McGill student studying Computer Engineering, where I'm building strong technical skills and gaining hands-on experience to tackle real-world challenges. Being at McGill gives me access to excellent resources, collaborative opportunities, and a supportive environment to grow as an engineer."
          />
          <OrbitItem
            label="Code"
            tooltip="Clean, scalable front-end."
            className="orbit-2"
          />
          <OrbitItem
            label="Motion"
            tooltip="Physical and mental endurance."
            className="orbit-3"
            image="/marathon.jpeg"
            description="I'm someone who enjoys pushing myself both mentally and physically. Outside of my academic interests, I'm passionate about running: it helps me clear my mind, build resilience, and stay disciplined. I value perseverance and the sense of progress that comes from setting goals and steadily working toward them."
          />
          <OrbitItem
            label="Audio"
            tooltip="Community support and care."
            className="orbit-4"
            image="/rescuer.jpg"
            description="As a Red Cross rescuer, I've had the chance to support people during large events and step in when help is needed. It's an experience that has taught me to stay calm, work as part of a team, and care deeply about others. I'm grateful to be part of something that spreads solidarity and positive impact in the community."
          />
          <OrbitItem
            label="3D"
            tooltip="Innovation and collaboration."
            className="orbit-5"
            video="/hackaton.mp4"
            imagePosition="center top"
            description="I'm always excited to take on new challenges and push myself outside my comfort zone. I've participated in hackathons such as McHacks and UpStart, where my team placed in the top 5. These experiences strengthened my creativity, teamwork, and ability to build impactful solutions under pressure: all while having a great time collaborating with passionate people."
          />
          <OrbitItem
            label="Systems"
            tooltip="Engineering excellence and innovation."
            className="orbit-6"
            image="/MFE.png"
            description="As a member of MFE, I apply strong engineering fundamentals to real-world projects, using structured design processes, numerical tools, and rigorous validation methods. The team's competitive environment pushes me to continuously improve while developing both technical expertise and project management skills, preparing me to contribute meaningfully to innovative and sustainable engineering solutions."
          />
        </div>
      </section>
      <ProjectsSection />
      <WhyMeSection />
      <ContactSection />
    </div>
  );
}
