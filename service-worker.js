let CACHE_NAME = "currency-calculator-cache-v1";
let urlsToCache = [
  "./",
  "./index.html",
  "./curr con.css",
  "./curr con.js",
  "./currency cal icon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});