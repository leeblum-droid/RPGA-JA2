const C='rpga-v3';
const A=[
  './',
  'index.html',
  'app.js',
  'data.js',
  'manifest.json',
  'icon.png'
];

self.addEventListener('install',e=>
  e.waitUntil(
    caches.open(C).then(c=>c.addAll(A))
  )
);

self.addEventListener('fetch',e=>
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  )
);
