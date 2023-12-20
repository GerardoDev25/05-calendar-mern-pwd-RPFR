/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  new RegExp(
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
  ),
  new CacheFirst()
);

registerRoute(
  new RegExp(
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'
  ),
  new CacheFirst()
);
