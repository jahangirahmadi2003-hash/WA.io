// WA.io Service Worker
const CACHE_NAME = 'wa-io-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/responsive.css',
    '/css/animations.css',
    '/js/app.js',
    '/js/wallet.js',
    '/js/mining.js',
    '/js/security.js',
    '/js/pwa.js',
    '/manifest.json'
];

// Install
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }))
        ).then(() => self.clients.claim())
    );
});

// Fetch
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(cached => cached || fetch(e.request))
    );
});
