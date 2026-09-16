// ILK Study Lab — service worker
// Caches the site shell (loader/manifest/icon) and the app bundle from the release asset.
// Shell: cache-first. App bundle: stale-while-revalidate so updates arrive without breaking offline.
var CACHE = "ilk-site-v1";
var APP_URLS = [
  "https://github.com/irfan1385/ilk-study-lab/releases/latest/download/app.html",
  "https://github.com/irfan1385/ilk-study-lab/releases/download/v1.0.0/app.html"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return c.addAll(["./", "./index.html", "./manifest.webmanifest", "./icon.svg"]); })
      .catch(function(){})
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(ks){
      return Promise.all(ks.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  var url = e.request.url;
  var isApp = APP_URLS.indexOf(url) > -1;
  e.respondWith(
    caches.match(e.request, {ignoreSearch:true}).then(function(hit){
      if(hit && !isApp) return hit;
      var net = fetch(e.request).then(function(res){
        if(res && res.ok){
          var cp = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, cp); });
        }
        return res;
      }).catch(function(){ return hit; });
      return hit ? hit : net;
    })
  );
});
