import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/about";
import { Breakdown } from "@/components/breakdown";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProjectsHero } from "@/components/projects-hero";
import { Reveal } from "@/components/reveal";
import { ProjectSlide } from "@/components/project-slide";
import { Services } from "@/components/services";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/data/projects";

const title = "Mostafa Samir — Healthcare Full-Stack Engineer";
const description =
  "Healthcare full-stack engineer building EHR platforms, HL7/FHIR interoperability, telehealth, and patient portals with .NET 8, Angular, React, and Next.js. Based in Tanta, Egypt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <ProjectsHero />

        <section className="px-4 py-8 sm:px-6 lg:py-12">
          <div className="mx-auto max-w-6xl space-y-4">
            {projects.map((project) => (
              <Reveal key={project.slug} variant="tilt">
                <ProjectSlide project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <Hero />
        <About />
        <Breakdown />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
