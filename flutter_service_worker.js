'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "51d8c9936d3272862645924f33b868c2",
"index.html": "df1a466d95d7a85ccd94e982f2e44128",
"/": "df1a466d95d7a85ccd94e982f2e44128",
"main.dart.js": "f93b5295f89f59743e0e06c9eb449bef",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "819abc8d72f55bf52203511d1f83be4c",
".git/config": "202033ca7a3b780b6566e74955dbc1ec",
".git/objects/50/fd9e9f0f360a82c69ffe83e6fcc4a349419353": "c01d1010b32cee906f80a4af7a3f9d1b",
".git/objects/03/a42fbc15586ea2e059828674927144ed77b5a1": "ee226ad0cf0147a701a753637e891618",
".git/objects/9e/12299f05542e415db0e0033d959d646328b5b1": "1c323eade865abbda0089f91121108bb",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/35/a826842c06fc92d1d192886039058cdb7dab78": "ca87ece76d7b0273de29b697275bc4f7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/1aea8d87935f1aed616ee4be002388e1d44e43": "4252cd8f1277f2635208e0113f012775",
".git/objects/3d/40cdd71e4bc5c562d9fea5b778f2ce4ffb09ba": "163983b5a48f28b2de8c8a7124063371",
".git/objects/67/5673dd48e6932801a3c78428ab953231ad80fb": "f48f21591d8b7b731d70a51a7bf2750f",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/93/935ffdeedaccf9c90bbe4d14684e55251fba97": "439f82022b72673e62203fb4ef5c153f",
".git/objects/34/9bab0981f6197b4e21508b415ba6f31d44227b": "58aec6db174f965fd45a9ddeb525ebb9",
".git/objects/b5/186724e45629995586295552ea901aaf2bff55": "94468eb0d414f7882c285e8ca84a733d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/fd33bab55ecb7dd596dfda1f8e5541cac1eabb": "ddf0876e8b30f617c23407651846e2d3",
".git/objects/be/d812450c584abedddb1dc21676e0c168962fad": "e84dd99c9747cb8bbb40f66be87c0225",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/1a0fae54962b7ee7c1888d43fb19c324111704": "d8c70f7e50520561eea8053665472c51",
".git/objects/a5/13fb0b0284bde5bba121379bf5ca892e61d83d": "55190d1957e07d8f055d72e0995d2196",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/46e0f56700c754d9a876209bfa671bce33f4e5": "6960c568570a7d0ea0c5b290582256a0",
".git/objects/bc/e7de5287d814629be93c5653f744c3a6b5d3ae": "0ac959a07268157c42067fc03f1c5eda",
".git/objects/e5/0ffb4343e61339312880902ca59a9c860fa344": "77f75f90686bfe4aba81434e5425f364",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c6/368fb4f44be80ff6e4510ea991a88dcf35be3c": "6d6886767bb9367deee1b9d157e4f082",
".git/objects/c6/589520e7f1bfba9f5cef1c730b198a6ab547a1": "da6acd120e1ee7522ff637ce219dbdb0",
".git/objects/18/f319d5c6cedd4e2997362707a6454924d1e7c5": "4535be9e6b6e9c0435a96a6184e8e300",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/42/88c758d021071135aeac4d15a4738d034d5e26": "aa786566e22ba2d439121eed6e563284",
".git/objects/8a/f00d5c06563a17388b61cceecf5c6cf13a127c": "ebedff8de72ef119c2be8d4a4bf3979e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3f8add215e1cc189a83db385aacb42efe8d587": "461e2a2de853b407642a2b31b3e4947f",
".git/objects/19/855d354c9334fe2445fb01f312fbae8a15b486": "a2c4e5420b49ff37788d19f7d02670f9",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/43/3439ae1163830538793d30b2a31bd22e669279": "68e0a465f877d612c297293351391c3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/96/0433b769a11b48ff9b23258dadb90928ff21e7": "0ac1c44c1b01780922aed74dd7923e90",
".git/objects/98/9be697218753dad338ef75362517cb9c8be8d9": "a0d04692c2af1e195abb4c181043f702",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ad87c4441c3780d6e5e3d5107ef1611c621487": "dd2301305e6beaac254e7292b75210bf",
".git/objects/0a/7f09f38d4cbbe19483bfb309600d7a66659934": "5d104e58d33de583dbc34a54f4178fa9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/fea056cb421b6527228753f110dc9bc2b9f135": "ef482f8d3224a0b58cd740cf21368cc5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/5e87f1ec815e625e579d24ed3013e9e5b4953a": "37384812ec4b0dfc6fd326cb039e291f",
".git/objects/e6/783653b589e73513b6ed1f9ce26af8c241c7b4": "f45eecf96da7bca549b1d2ba7affae4d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/d8045c0ddb0eea181bba77ea08118a548298c0": "91b99f601ed99ec6ed3711da2b929a91",
".git/objects/e7/6b5c9ade2923f013ceb0650d9d40031e47ae31": "9c313a5ea02dc773f11733f9c5a8f9bc",
".git/objects/f8/3f0196a8bc76fc86f0940f503c9e51d38454c3": "0a2b87dd82c5f5896271285ef1118402",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/a0c40c1003f149e947e0c67b15d38ae41c445d": "09a8265f09f07f3a7fb4ee02640c631b",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/5f38515be883a9c0a0242165d3db901045cea8": "a35279bcc328619349e1a0b8f34f60b9",
".git/objects/84/0ada125e6ea1348d7b4c9b3fa29a066fabd532": "0a74bf887893b28848229c387b6129ad",
".git/objects/23/6fdac16588766111f7a9fd74ad2b3511f62a38": "c1f690a2388f1b28f67d04a5dab1c2bf",
".git/objects/8d/77ea491c30c54c795e5999914d180df73ae382": "2d7c066aed3d33f86d8c3ff152f8ea5c",
".git/objects/1c/a57fd9489725a6fffb4f41ac0d553b2b03c20a": "0f82d130c71a0e06bec9b064b48dca05",
".git/objects/49/d3e8c28716b8e8adfe3a543cdb60e744c0cced": "f8fec5a06384573c83b05836fc743d87",
".git/objects/40/1b2a35925286c476854fe8b35c82bcd7fb8696": "5adff0accf3ac5537a6f481e7783a26e",
".git/objects/13/8280776a49dacaff2649abea818563a00e1354": "bf3df26f0f19b10205a110d44ad8b813",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5565c9d21005ea1b35d089d0396a1119",
".git/logs/refs/heads/main": "df08e81488451d91a8ce103dade806e7",
".git/logs/refs/remotes/origin/main": "a83266b79d5697a8c1e6be7334bc39d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8987603f6b07a2c5df005cec663e294c",
".git/refs/remotes/origin/main": "8987603f6b07a2c5df005cec663e294c",
".git/index": "4799d95d4232afa8ac46206af5ce80f0",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "edd5cb6719eb446e9ed4ae6fb9d29cc5",
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
