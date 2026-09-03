export default function Loading() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <div
        className="mb-6 h-12 w-12 animate-spin rounded-full border-4 border-[--border2] border-t-[--accent]"
        aria-hidden="true"
      />
      <p className="text-muted-foreground">Loading…</p>
    </main>
  );
}
