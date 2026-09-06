import Image from "next/image";

export default function Loading() {
  return (
    <main
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      style={{ background: "#fff", color: "#0f0f0e" }}
    >
      <Image
        src="/Logo.png"
        alt="Automate Ideas"
        width={64}
        height={64}
        priority
        className="mb-5 opacity-90"
      />
      <div className="mb-5 h-1 w-24 overflow-hidden rounded-full bg-[#e9e7e1]">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg,#e8390e,#ff6b3d)",
            animation: "ai-load 1.2s ease-in-out infinite",
          }}
        />
      </div>
      <p
        className="text-sm font-semibold tracking-[0.13em] uppercase"
        style={{ fontFamily: "var(--font-body)", color: "#7c7a72" }}
      >
        Loading
      </p>
      <style>{`@keyframes ai-load { 0%{ width: 10%; } 50%{ width: 100%; } 100%{ width: 10%; } }`}</style>
    </main>
  );
}