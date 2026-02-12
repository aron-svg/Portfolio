"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Verdante",
    tagline: "Carbon-aware orchestration",
    description:
      "Verdante is a carbon-aware orchestration and simulation platform that helps teams run compute workloads in a greener, cheaper, and more compliant way. It analyzes global cloud regions, energy grids, and regulatory constraints to recommend the optimal execution strategy for any job.",
    videoSrc: "/verdante.mp4",
    link: {
      label: "Visit site",
      href: "https://verdente-upstart-2026.vercel.app/",
    },
  },
  {
    title: "WeSupply",
    tagline: "AI meal planning",
    description:
      "WeSupply is an AI-powered meal planning app that creates personalized recipes based on your preferences and goals. It guides you through a simple setup, generates custom dishes, and helps you track calories, macros, and progress with visual reports. The platform also keeps your grocery spending in check with budget-aware meal plans, cost breakdowns, and smart shopping lists.",
    videoSrc: "/wesupply.mp4",
    status: "In progress",
  },
  {
    title: "McGill Chess",
    tagline: "Collective play",
    description:
      "McGill Chess is a web application where a community plays chess collectively: spectators vote for the next move, the winning move is applied at the end of a turn timer, then a chess engine responds. Two games run in parallel, and the UI overlays vote statistics directly on the board.",
    videoSrc: "/chess.mp4",
    status: "In progress",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const videos = Array.from(
      sectionRef.current.querySelectorAll<HTMLVideoElement>("video"),
    );

    if (!videos.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise) {
              playPromise.catch(() => {
                video.pause();
              });
            }
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      observer.disconnect();
      videos.forEach((video) => video.pause());
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects-section">
      <div className="projects-header">
        <p className="projects-eyebrow">Projects</p>
        <h2 className="projects-title">Selected Work</h2>
        <p className="projects-intro">
          A snapshot of systems, products, and experiments that blend design, data,
          and behavior-driven UX.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-media">
              <video
                className="project-video"
                src={project.videoSrc}
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="project-body">
              <p className="project-tagline">{project.tagline}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.link.label}
                  </a>
                ) : (
                  <span className="project-status">{project.status}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
