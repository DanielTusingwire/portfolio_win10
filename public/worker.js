// Network first: visitors always get the latest deploy when online, and the
// last version they saw when offline. Changing CACHE_NAME clears older caches.
var CACHE_NAME = "portfolio-v2";
var urlsToCache = ["/", "/home", "/windows", "/windows10", "/macOS", "/404"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => cache.addAll(urlsToCache))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				Promise.all(
					cacheNames
						.filter((cacheName) => cacheName !== CACHE_NAME)
						.map((cacheName) => caches.delete(cacheName))
				)
			)
			.then(() => self.clients.claim())
	);
});

self.addEventListener("fetch", (event) => {
	var request = event.request;
	var isSameOrigin = new URL(request.url).origin === self.location.origin;

	// Leave form posts and other sites' requests to the browser.
	if (request.method !== "GET" || !isSameOrigin) {
		return;
	}

	event.respondWith(
		fetch(request)
			.then((response) => {
				if (response.ok) {
					var copy = response.clone();
					caches
						.open(CACHE_NAME)
						.then((cache) => cache.put(request, copy));
				}
				return response;
			})
			.catch(() =>
				caches.match(request).then((cached) => {
					if (cached) {
						return cached;
					}
					if (request.mode === "navigate") {
						return caches.match("/");
					}
					return Response.error();
				})
			)
	);
});
