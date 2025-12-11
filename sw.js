const CACHE_NAME = 'social-boost-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pricing.html',
  '/contact.html',
  '/styles.css',
  '/manifest.json',
  '/script.js' // Include the new script.js file
];

// Install event: Caches all static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Serves content from cache first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
