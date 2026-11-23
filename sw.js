const CACHE_NAME = 'vision-therapy-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/static.html',
  '/dynamic.html',
  '/dynamic_boxes.html',
  '/static/3d_box.jpg',
  '/static/box_and_balls.jpg',
  '/static/pool_balls.jpg',
  '/dynamic/clowns-red.png',
  '/dynamic/clowns-green.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});