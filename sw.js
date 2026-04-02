const CACHE_NAME = 'precio-combustibles-v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Respondemos a las peticiones para que el navegador nos valide como PWA
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("App offline");
        })
    );
});
