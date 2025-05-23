// Service Worker for Bhagavad Gita PWA

// Cache name - update this version number whenever you change the cached files
const CACHE_NAME = 'bhagavath-geetha-cache-v2';

// List of files to cache (app shell)
// Ensure these paths are correct relative to your domain root if hosted in /Gita/
const urlsToCache = [
    '/Gita/', // Cache the root of the PWA (index.html)
    '/Gita/index.html',
    '/Gita/manifest.json',
    // Add paths to your icon files relative to /Gita/
    '/Gita/icons/icon-192x192.png',
    '/Gita/icons/icon-512x512.png',
    // Add paths to your background images relative to /Gita/
    '/Gita/images/divine-background.jpeg',
    '/Gita/images/splash-image.jpeg',
    // Note: Tailwind CSS and Google Fonts are external and won't be cached by this simple service worker
    // You could add logic to cache these if needed, but it's more complex.
];

// Install event: Cache core app shell files
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Pre-caching offline page');
                return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' }))); // Use cache: 'reload' to ensure fresh files during install
            })
            .catch(error => {
                console.error('[Service Worker] Pre-caching failed:', error);
                // Even if pre-caching fails, the service worker should still install
            })
    );
});

// Fetch event: Intercept network requests
self.addEventListener('fetch', (event) => {
    console.log(`[Service Worker] Fetching ${event.request.url}`);

    // Strategy: Cache first, then network fallback
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    console.log(`[Service Worker] Serving from cache: ${event.request.url}`);
                    return response;
                }

                // No cache hit - fetch from network
                console.log(`[Service Worker] Fetching from network: ${event.request.url}`);
                return fetch(event.request)
                    .then(networkResponse => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                             // Don't cache invalid responses or cross-origin requests (unless specifically handled)
                             return networkResponse;
                        }

                        // Clone the response because it can only be consumed once
                        const responseToCache = networkResponse.clone();

                        // Cache the fetched response for future offline access
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse; // Return the network response
                    })
                    .catch(error => {
                        // Network request failed (e.g., offline)
                        console.error(`[Service Worker] Fetch failed for ${event.request.url}: ${error}`);
                        // You could return a custom offline page here if needed
                        // For API calls, there's no standard "offline" response to return,
                        // the frontend will handle the fetch error.
                        // For navigation requests, you could return a cached offline page.
                        // For now, just let the fetch error propagate.
                        throw error; // Re-throw the error so the frontend knows it failed
                    });
            })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activate');
    const cacheWhitelist = [CACHE_NAME]; // Only keep the latest cache
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Delete old caches
                        console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Claim clients immediately to control pages on first load
    event.waitUntil(self.clients.claim());
});

