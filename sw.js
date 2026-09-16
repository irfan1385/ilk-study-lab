// ILK Study Lab — service worker
// Shell: cache-first. App bundle (app.html): stale-while-revalidate, so updates land without breaking offline.
var CACHE = "ilk-site-v2";
var SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./app.html"];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(SHELL.map(function(u){ return c.add(u).catch(function(){}); }));
    })
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
  var isApp = e.request.url.indexOf("/app.html") > -1;
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
