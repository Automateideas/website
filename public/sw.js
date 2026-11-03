/* Automate Ideas PWA service worker
   Network-first for navigation (each page cached under its own URL, with an
   offline fallback to the home page), stale-while-revalidate for same-origin
   assets. Bump CACHE to invalidate everything a previous version stored. */
const CACHE = "automateideas-v2";
const OFFLINE_URL = "/";
const PRECACHE = [
  OFFLINE_URL,
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/maskable-512.png",
  "/logo/DarkLogo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// Store under request.url rather than the Request object: the key is then a
// plain URL, so a navigation response can never be keyed by something else.
function put(url, response) {
  const copy = response.clone();
  return caches
    .open(CACHE)
    .then((cache) => cache.put(url, copy))
    .catch(() => {});
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // API responses are dynamic — never serve them from the cache.
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Only cache real successes. Caching a 404/500 body, or a redirect,
          // would otherwise make that page the offline experience.
          if (response.ok && !response.redirected) {
            put(request.url, response);
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request.url);
          if (cached) return cached;
          const fallback = await caches.match(OFFLINE_URL);
          if (fallback) return fallback;
          return new Response(
            "<!doctype html><meta charset=utf-8><title>Offline</title>" +
              "<h1>You are offline</h1><p>Please reconnect and try again.</p>",
            {
              status: 503,
              headers: { "Content-Type": "text/html; charset=utf-8" },
            }
          );
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        if (response && response.ok) {
          put(request.url, response);
        }
        return response;
      });

      if (cached) {
        // Refresh in the background; a failure here is not user-visible.
        network.catch(() => {});
        return cached;
      }
      return network;
    })
  );
});
