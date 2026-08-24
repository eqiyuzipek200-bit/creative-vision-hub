import { AnimatedChars, Magnetic } from "@/components/motion-text";
import { Parallax } from "@/components/reveal";
import device from "@/assets/healthcare-device.png";

const tags = [
  { label: "EHR & FHIR", color: "bg-brand-teal" },
  { label: "Telehealth", color: "bg-brand-orange" },
  { label: "Cloud & DevOps", color: "bg-brand-sky" },
];

export function ProjectsHero() {
  return (
    <section id="work" className="px-4 pt-10 sm:px-6 lg:pt-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="slide-card rise-in dot-grid relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          {/* Soft drifting colour blobs behind the content */}
          <div
            aria-hidden
            className="drift-blob pointer-events-none absolute -top-24 right-16 size-80 rounded-full bg-brand-teal/20 blur-3xl"
          />
          <div
            aria-hidden
            className="drift-blob pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-brand-sky/25 blur-3xl"
            style={{ animationDelay: "-6s" }}
          />

          <div className="relative grid items-start gap-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
            {/* Left block: Featured + tag bubble */}
            <div className="flex flex-col items-start gap-5 lg:pt-4">
              <AnimatedChars
                text="Featured"
                as="span"
                delay={80}
                stagger={44}
                className="display-lg whitespace-nowrap"
              />
              <Magnetic strength={10}>
                <span className="sticker-in inline-flex flex-col items-start gap-1.5 rounded-full bg-card px-5 py-4 text-sm font-semibold tracking-tight text-foreground edge">
                  {tags.map((tag) => (
                    <span key={tag.label} className="flex items-center gap-2">
                      <span className={`size-1.5 rounded-full ${tag.color}`} />
                      {tag.label}
                    </span>
                  ))}
                </span>
              </Magnetic>
            </div>

            {/* Center-right block: Healthcare + Projects */}
            <div className="flex flex-col items-start lg:items-end lg:justify-start">
              <AnimatedChars
                text="Healthcare"
                as="span"
                delay={280}
                stagger={44}
                className="display-2xl whitespace-nowrap text-brand-teal"
              />
              <AnimatedChars
                text="Projects"
                as="span"
                delay={480}
                stagger={50}
                className="display-2xl whitespace-nowrap"
              />
            </div>

            {/* Device image floats on the right */}
            <div className="relative flex items-center justify-center lg:w-[280px] lg:shrink-0">
              <div
                className="float-slow absolute inset-0 rounded-[2.5rem] bg-brand-teal/15"
                style={{ transform: "translate(1rem, 1rem)" }}
              />
              <Parallax strength={-24}>
                <div className="float-slow relative" style={{ animationDelay: "-1.2s" }}>
                  <img
                    src={device}
                    alt="Retro healthcare monitor illustration representing featured medical software projects"
                    width={512}
                    height={512}
                    loading="eager"
                    className="sticker-in relative w-full max-w-[280px] drop-shadow-[var(--shadow-image)]"
                    style={{ animationDelay: "260ms" }}
                  />
                </div>
              </Parallax>
            </div>
          </div>

          <p className="sd-rise mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            A curated selection of production work building EHR platforms,
            HL7/FHIR interoperability, telehealth, and patient-facing portals.
          </p>
        </div>
      </div>
    </section>
  );
}
