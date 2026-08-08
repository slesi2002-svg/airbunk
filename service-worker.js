const VERSION='airbank-demo-v5-input-centered';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const k of await caches.keys()) await caches.delete(k); await self.clients.claim();})()));
