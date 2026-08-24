import { useEffect, type ReactNode } from "react";

import { Link, useRouter } from "@tanstack/react-router";

import errorImage from "@/assets/error.png";
import { AnimatedChars } from "@/components/motion-text";
import { reportLovableError } from "@/lib/lovable-error-reporting";

export function ErrorFallback({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-20">
      {/* Drifting decorative blobs */}
      <div
        aria-hidden="true"
        className="drift-blob pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-brand-red/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-blob pointer-events-none absolute -bottom-28 -left-20 size-96 rounded-full bg-brand-sky/20 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />

      <div className="relative mx-auto max-w-lg text-center">
        <div className="rise-in" style={{ animationDelay: "80ms" }}>
          <span className="sticker-in mx-auto mb-8 block w-full max-w-[260px]">
            <img
              src={errorImage}
              alt="Illustration of a system alert, representing an unexpected error"
              width={260}
              height={260}
              loading="eager"
              className="float-slow"
              style={{ animationDelay: "-2s" }}
            />
          </span>
        </div>

        <div className="font-display text-6xl font-extrabold tracking-tighter text-foreground sm:text-7xl">
          <AnimatedChars text="Oops" as="span" delay={120} stagger={80} />
        </div>

        <p
          className="rise-in mt-4 text-lg font-semibold tracking-tight text-foreground"
          style={{ animationDelay: "420ms" }}
        >
          This page didn’t load
        </p>

        <p
          className="rise-in mt-3 text-sm leading-relaxed text-muted-foreground"
          style={{ animationDelay: "520ms" }}
        >
          Something went wrong on our end. You can try refreshing the page or
          head back home.
        </p>

        {error.message && process.env.NODE_ENV === "development" ? (
          <pre
            className="rise-in mt-6 max-h-32 overflow-auto rounded-2xl bg-muted p-4 text-left text-xs text-muted-foreground"
            style={{ animationDelay: "600ms" }}
          >
            {error.message}
          </pre>
        ) : null}

        <div
          className="rise-in mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "640ms" }}
        >
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="press sheen inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="press inline-flex items-center justify-center gap-2 edge rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
