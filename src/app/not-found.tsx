import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-6xl font-black text-[--accent]">404</p>
      <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[--accent] px-6 py-3 font-semibold text-white transition hover:bg-[--accent2]"
        >
          Back to Home
        </Link>
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
