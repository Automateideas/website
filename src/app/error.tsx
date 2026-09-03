"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-6xl font-black text-[--accent]">500</p>
      <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        We&apos;ve hit an unexpected error. Try reloading the page — if the
        problem persists, please get in touch with us.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-[--accent] px-6 py-3 font-semibold text-white transition hover:bg-[--accent2]"
        >
          Try Again
        </button>
        <Link
          href="/#contact"
          className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:bg-muted"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
