const CACHE_NAME = 'gasofa-pro-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // No hacemos nada, dejamos que la app funcione online
});
