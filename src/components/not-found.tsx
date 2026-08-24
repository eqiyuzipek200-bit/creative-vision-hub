import { Link } from "@tanstack/react-router";

import notFoundImage from "@/assets/not-found.png";
import { AnimatedChars } from "@/components/motion-text";

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-20">
      {/* Drifting decorative blobs */}
      <div
        aria-hidden="true"
        className="drift-blob pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-brand-orange/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-blob pointer-events-none absolute -bottom-28 -left-20 size-96 rounded-full bg-brand-sky/20 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div
        aria-hidden="true"
        className="drift-blob pointer-events-none absolute top-1/3 left-1/4 size-64 rounded-full bg-brand-teal/10 blur-3xl"
        style={{ animationDelay: "-14s" }}
      />

      <div className="relative mx-auto max-w-lg text-center">
        <div className="rise-in" style={{ animationDelay: "80ms" }}>
          <span className="sticker-in mx-auto mb-8 block w-full max-w-[260px]">
            <img
              src={notFoundImage}
              alt="Illustration of a missing patient record, representing a page not found"
              width={260}
              height={260}
              loading="eager"
              className="float-slow"
              style={{ animationDelay: "-2s" }}
            />
          </span>
        </div>

        <div className="font-display text-8xl font-extrabold tracking-tighter text-foreground sm:text-9xl">
          <AnimatedChars text="404" as="span" delay={120} stagger={120} />
        </div>

        <p
          className="rise-in mt-4 text-lg font-semibold tracking-tight text-foreground"
          style={{ animationDelay: "420ms" }}
        >
          Page not found
        </p>

        <p
          className="rise-in mt-3 text-sm leading-relaxed text-muted-foreground"
          style={{ animationDelay: "520ms" }}
        >
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back to the portfolio.
        </p>

        <div
          className="rise-in mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "640ms" }}
        >
          <Link
            to="/"
            className="press sheen inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
          <a
            href="mailto:mostafa.samir@example.com"
            className="press inline-flex items-center justify-center gap-2 edge rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}
