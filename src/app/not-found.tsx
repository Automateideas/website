import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      style={{ background: "#fff", color: "#0f0f0e" }}
    >
      <div
        className="mb-4 flex items-center justify-center gap-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span
          className="inline-block rounded-full"
          style={{ width: 8, height: 8, background: "#e8390e" }}
        />
        <span
          className="text-[0.68rem] font-semibold tracking-[0.13em] uppercase"
          style={{ color: "#e8390e" }}
        >
          Error 404
        </span>
      </div>
      <p
        className="mb-2 text-[clamp(4rem,10vw,7rem)] leading-none"
        style={{ fontFamily: "var(--font-display)", color: "#e8390e" }}
      >
        404
      </p>
      <h1
        className="mb-3 text-2xl font-normal tracking-tight sm:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        This page took a coffee break
      </h1>
      <p
        className="mb-8 max-w-md text-[0.95rem] leading-relaxed"
        style={{ color: "#7c7a72", fontFamily: "var(--font-body)" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="px-7 py-3.5 font-semibold text-white transition"
          style={{
            background: "#e8390e",
            borderRadius: 8,
            fontFamily: "var(--font-body)",
            fontSize: 14,
            boxShadow: "0 6px 20px rgba(232,57,14,0.28)",
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/#contact"
          className="px-7 py-3.5 font-semibold transition"
          style={{
            border: "1px solid #d6d2c9",
            color: "#0f0f0e",
            background: "#fff",
            borderRadius: 8,
            fontFamily: "var(--font-body)",
            fontSize: 14,
          }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}