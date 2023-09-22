'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "51d8c9936d3272862645924f33b868c2",
"index.html": "50e5985c4d7dead900579b2b044fb668",
"/": "50e5985c4d7dead900579b2b044fb668",
"main.dart.js": "c9de9cc22c281516ac98db05791fad47",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "819abc8d72f55bf52203511d1f83be4c",
"assets/AssetManifest.json": "7be78bacfff2346aed3821786a09045a",
"assets/NOTICES": "ddf4034984f001054e6f56d60299dbd9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a2e7dde29a0e2c194fac1425adc7d723",
"assets/fonts/MaterialIcons-Regular.otf": "513feff78e09e16966d9a0224fa6e51d",
"assets/assets/images/rise.png": "4f0aa74897d4c98d1bed40bbb40f483f",
"assets/assets/images/product8.jpg": "663ae823770a463fd79dcc9d4c630a39",
"assets/assets/images/product9.jpg": "2ea1d5a1f03e96fd06be0eb9951d2d75",
"assets/assets/images/cocktail.png": "e5e94330d62744dff9550f72057b073c",
"assets/assets/images/popsicle.png": "ad61a0ff68246a20cbffaf1f8554b400",
"assets/assets/images/shell.png": "d5a5534f322a798ec4956edff314dbff",
"assets/assets/images/chef.png": "05dd97dbf9f9ced9d9dc2d23d9ce1642",
"assets/assets/images/chef1.png": "473ca240ca765c524c1db8e7340ee9d5",
"assets/assets/images/steak.png": "65d9bfa22474a5750306c4506d0b0473",
"assets/assets/images/smiling.png": "fe1f6bd2d6db91ecd28b193a4b3b331b",
"assets/assets/images/Vegetable.png": "ab35724cd0d56c2bd65d3295206fb4d4",
"assets/assets/images/product16.jpg": "95aedf73c3edd7b00eb45d2eb7dd4006",
"assets/assets/images/product14.jpg": "39af9a6ff6e5714cf46a1d5f7916cff2",
"assets/assets/images/product15.jpg": "49e46c3d4fe94f1a4937bff700ffe4dc",
"assets/assets/images/product11.jpg": "f8cfa4417f23a8ce14d9f1c30453b326",
"assets/assets/images/product10.jpg": "1287b63278352eef8635d62763a4ef02",
"assets/assets/images/product12.jpg": "bead06c1cfb3f705718033373ac31c2c",
"assets/assets/images/product13.jpg": "9237b9fe0fe8d97b5ab8c4ca77ac38ce",
"assets/assets/images/product2.jpg": "afd6c70450165602f045929423cf0090",
"assets/assets/images/sushi.png": "a6d989534a189dd5df5a6ac30e111dff",
"assets/assets/images/product3.jpg": "3017e70ee95d632ec1212c03b9f9cd00",
"assets/assets/images/ham-leg.png": "e1f931396796cb033814d91955cb9216",
"assets/assets/images/product1.jpg": "618fa088f4eb6bd08f5a08e1f72a6ac6",
"assets/assets/images/product4.jpg": "a720ca14e16f60c3559dd688c94782f3",
"assets/assets/images/donut.png": "da5a997205b3190aa4af4eb92257f43c",
"assets/assets/images/product5.jpg": "138fd13d6e33a7c893547379b7ee9d7d",
"assets/assets/images/product7.jpg": "af41601c84be7aad0f6d1f2a98d02328",
"assets/assets/images/product6.jpg": "d0f3342bf5f06208f77a206f53956bba",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
