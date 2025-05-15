// Service Worker for Bhagavad Gita PWA

const CACHE_NAME = 'bhagavath-geetha-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    // Add paths to your icon files
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    // Note: Tailwind CSS and Google Fonts are external and won't be cached by this simple service worker
];

// Install event: Cache core app shell files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event: Serve cached assets when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // No cache hit - fetch from network
                return fetch(event.request);
            })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Delete old caches
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
