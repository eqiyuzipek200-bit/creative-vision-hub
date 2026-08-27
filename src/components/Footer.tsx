import { ShieldCheck, Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import face1 from "@/assets/cta-face-1.jpg";
import face2 from "@/assets/cta-face-2.jpg";
import face3 from "@/assets/cta-face-3.jpg";
import face4 from "@/assets/cta-face-4.jpg";
import face5 from "@/assets/cta-face-5.jpg";
import face6 from "@/assets/cta-face-6.jpg";

const socials = [
  { Icon: Github, href: "https://github.com/Mostafa-SAID7", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/mostafasamirsaid", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:m.ssaid356@gmail.com", label: "Email" },
  { Icon: Phone, href: "tel:+201067358073", label: "Phone" },
];

/* Portrait ring around the CTA — mirrors the reference composition */
const floaters: { src: string; alt: string; className: string; size: string }[] = [
  { src: face1, alt: "Client portrait", className: "left-[8%] top-[10%]", size: "h-16 w-16 md:h-[4.75rem] md:w-[4.75rem]" },
  { src: face2, alt: "Client portrait", className: "left-[13%] top-[28%]", size: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]" },
  { src: face3, alt: "Client portrait", className: "left-[4%] top-[52%]", size: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]" },
  { src: face4, alt: "Client portrait", className: "right-[8%] top-[12%]", size: "h-16 w-16 md:h-[4.75rem] md:w-[4.75rem]" },
  { src: face5, alt: "Client portrait", className: "right-[13%] top-[34%]", size: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]" },
  { src: face6, alt: "Client portrait", className: "right-[4%] top-[56%]", size: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]" },
];

function Sparkle({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`absolute h-5 w-5 ${className}`}
      fill="currentColor"
    >
      <path d="M12 0c.6 4.9 3.1 8.5 12 12-8.9 3.5-11.4 7.1-12 12-.6-4.9-3.1-8.5-12-12C8.9 8.5 11.4 4.9 12 0Z" />
    </svg>
  );
}


const columns: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Portfolio",
    items: [
      { label: "Work", href: "#work" },
      { label: "Projects", href: "#projects" },
      { label: "Expertise", href: "#expertise" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Expertise",
    items: [
      { label: ".NET 8 Microservices", href: "#skills" },
      { label: "Multi-tenant Platforms", href: "#skills" },
      { label: "Real-time SignalR", href: "#skills" },
      { label: "Clean Architecture & DDD", href: "#skills" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "Profile", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "m.ssaid356@gmail.com", href: "mailto:m.ssaid356@gmail.com" },
      { label: "+20 106 735 8073", href: "tel:+201067358073" },
      { label: "in/mostafasamirsaid", href: "https://linkedin.com/in/mostafasamirsaid" },
      { label: "Mostafa-SAID7", href: "https://github.com/Mostafa-SAID7" },
    ],
  },
];


export function Footer() {
  return (
    <footer id="contact" className="relative pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Single rounded panel: CTA + links, like the reference */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70">
            {/* CTA area */}
            <div className="relative overflow-hidden bg-surface/70 px-6 py-20 text-center md:px-16 md:py-28">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
            />
            {/* Portrait ring + sparkles */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
              {floaters.map((f) => (
                <span
                  key={f.className}
                  className={`absolute ${f.className} ${f.size} overflow-hidden rounded-full border-[3px] border-border-strong/80 bg-background shadow-[0_18px_40px_-16px_rgba(0,0,0,0.75)]`}
                >
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full rounded-full object-cover"
                  />
                </span>
              ))}
              <Sparkle className="left-[29%] top-[13%] rotate-12 text-[#2563eb]" />
              <Sparkle className="left-[12%] top-[44%] h-4 w-4 -rotate-12 text-[#a3e635]" />
              <Sparkle className="right-[29%] top-[18%] h-4 w-4 text-[#2563eb]" />
              <Sparkle className="right-[13%] top-[52%] rotate-6 text-[#a3e635]" />
            </div>

            <p className="mono-label relative text-gold">Available for new work</p>

            <h2 className="relative mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
              Let&apos;s build something{" "}
              <span className="gold-text">customers can trust</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
              Microservices, multi-tenant platforms and real-time financial systems — most
              engagements start within two weeks.
            </p>
            <div className="relative mt-9 flex justify-center">
              <a
                href="mailto:m.ssaid356@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-8 py-3.5 text-sm font-semibold text-primary-foreground gold-glow transition-transform hover:scale-[1.02]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Link columns */}
        <div className="mt-16 grid gap-10 pt-4 md:grid-cols-[1.4fr_repeat(4,1fr)] md:gap-8">

          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <span className="font-display text-lg font-semibold">
                Mostafa <span className="gold-text">Samir</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Senior Full Stack Engineer building secure, scalable banking and fintech systems on
              .NET 8.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mono-label text-muted-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={col.title + item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-foreground/80 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row">
          <span>Tanta, Egypt · Remote · Full-time or contract</span>
          <span>
            © {new Date().getFullYear()} Mostafa Samir — Banking &amp; Fintech Full Stack Engineer
          </span>
        </div>
      </div>
    </footer>
  );
}
