// sw.js - Service Worker Básico
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Apenas responde ao navegador, permitindo que o site funcione
  e.respondWith(fetch(e.request));
});