'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/duckhunt_duck.png": "6da38233270f23a95d061d579236ae16",
"assets/assets/images/duckhunt_duck_mirror.png": "66d729a57cc6c974bfeaade16fb03764",
"assets/assets/images/duckhunt_duck_dead.png": "6d62f6a762915b3873f96f68505dfc1e",
"assets/assets/images/duckhunt_background_2.png": "cf31c166e185e4e79410c63cf1859a85",
"assets/assets/images/duckhunt_dog.png": "f709646a6341366262bc80c02d53e8e4",
"assets/NOTICES": "33c0780f689a1225c822e0da73e42b6f",
"assets/AssetManifest.bin.json": "28381568ac4d0cdf3a6658679b79ebf4",
"assets/AssetManifest.bin": "fa88659da1ede43683f9eafc857f456f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "5ac437b6c75ec9b0bf4bcd87948fa708",
"flutter_bootstrap.js": "70385b67397b0140a94b89bb64c1dc0f",
".git/logs/refs/heads/main": "3866c09dc6099445cda2c6b07b90d63b",
".git/logs/refs/remotes/origin/main": "d662aca856662e4bf17a16341997b5be",
".git/logs/HEAD": "8b8c3c5efb34b718ed5540d8fb1a3b83",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/refs/heads/main": "8235ebe564ed5721f51353a6baf1209e",
".git/refs/remotes/origin/main": "8235ebe564ed5721f51353a6baf1209e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "297437af4939065445399e4dc76de9cf",
".git/ORIG_HEAD": "af7265c007f21e49b3aac1eb20280886",
".git/index": "adf99eb03f24258ed84bb5abfb6abdaf",
".git/config": "f518b724843955feb8dee82e5f5d96b2",
".git/objects/e4/1dc2fe63c21cc8a02e4b02b2499370b42d46f0": "df727a87d46c54c8f3fd86ab47348935",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/1e60b962991fb12ac83cf443672a8af6d9d648": "f96dd8be9e1116af59e6584668dbac5d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/e2/fcfddebdc3ef0af8e1ffe7939c6dcabfc57653": "423cadc966582073b6764b6d5b6eb0e0",
".git/objects/62/ec1112492c32c4fb7e8ee234874e2c6e7ad871": "938f04ff69249ea2dafd339f1fb277e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/1e/1452326b5dac37fa129a66d8152556ddc4a32e": "1d3fc8a051520bc45facb096e7b823cf",
".git/objects/10/d73c73656307bf015dfee12592aea1703e52af": "824e22f3560a6db6b3de7e52fd115313",
".git/objects/33/9418af4402fbe5eb50e1730a837da851014ed6": "f1bd72761194d550d0154b25ee096353",
".git/objects/33/01b5d6188cf7c9bbdc1b19ac22da8aff3b3418": "73636f425617db315ec5955bf43eb2bc",
".git/objects/0d/e52122d365efb701558491e98dbf0bd833cb9d": "81a35933c478f6d98fd2c4c790bd4415",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/72/6962b88ecb959a830ebaf7f8ddd5cec72b4977": "95ffc55033ac0497829be7a29caedc9a",
".git/objects/bd/6d6e228f88c01cb8d90c1074004a90820dc43b": "6ed6d63f44163e6b1aa73b6e31506c75",
".git/objects/ff/20191b4724046cc04a65da729990a749512df4": "96c40229121099a58349c0e0a24ca457",
".git/objects/a2/7a1f2c017d196f4487edb56c7664d647848219": "415c95bb14278f801c119617bfb450a4",
".git/objects/fe/07b0fefb0ae6bc97bf66ff4ad834b74e79916b": "587726fe5ffa9c73292c50822e9100e7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/61/5e8fc866324a50942d747ba5391422a33fa3e4": "f7983d911d19d0bbdc2dcafce4451940",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/1159bac3aaa7c00a4704440d4e078b84a2d3dc": "1b7ba7ab08aabc4339bd50ea3160886a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/b9fc276968980dbe2ae4e048e0205f777c63ad": "355873a0b89923953a3c3d6d6b9380c0",
".git/objects/fa/4f6e9fc5fc35ee16ed8ff46e2c57aaab0a71f5": "5c16cd2257dacb9726198e44a75941e5",
".git/objects/45/1f89af707a64e9c8e3df1b6beb8abcbf856aea": "859cccbbac0d9764922ee47dd11f8ef6",
".git/objects/27/7d326b1f54b0248ef988d1ba0613f1beef60fc": "a8445c575132b10904eb95af8cbab788",
".git/objects/4c/a4b74c78bf40357c7b4610919979622ee871fc": "476081eb835b32450fea1b0f1973839e",
".git/objects/17/c61869a212234893ce3d34fcc4c7780eca65db": "c8c38e8c531c7349aec92d97afacdf2b",
".git/objects/5d/48d6554e31be1a8cae1c39ce6474d552da78ec": "afc2cd95bfb0e8a85bcf347dff73e63e",
".git/objects/2a/51a6d743b9587ad5077c13f282395a73141fa0": "0f75ef41c1d5cfc7d1ac005ea1ec35da",
".git/objects/2a/fa44565122a2d30532986244ecec1db8da89c2": "bc59cad8bd125e76821fd28469c7c1a9",
".git/objects/ca/40a4d2b49ca4469c66a30e4a65aaf108601f11": "19e793159d40b2705bce676cc5c5f609",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/52/d99463c1332a07935cf057f8a83efb2768721e": "62c873241f5bceeb50d9a5595f2813ff",
".git/objects/fd/ba0311c12304e8eeb3e6d390c6856a3e1e0e8c": "75932b739708bf04809b1c6030ed9cf4",
".git/objects/32/01a22ff89bb61784b0a3d2eda226384b5adfa3": "86907bbaf441c599e035f338d02de292",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/85/41e57a1cb142cb0fe2138dff741fe1fa3bc5c5": "2b055209687b4fe47d1a0cdc14289fde",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b6/5e819127df10260f8e7d351484a7a28c423fe2": "552a8ab35bfcb5a371666c2083067c64",
".git/objects/5f/df0c5b10df02805b72bef9de8fd6396bf67ee1": "cfa8f1a52776bcfc1b88a4a330a7a0da",
".git/objects/c2/d734c6086277e28aad73e6a2ed0e73b95b06ef": "347cc901e25b5d67e66d0e4e048c4180",
".git/objects/ea/aa04db5c4d838348a1d91162c45b19a9dd1ffc": "9568ae178f3e50d4ef028a82fca6b1a7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/c4/347aeca0ded6ec0c206626b53278b3b497d91c": "dcd095d709edd50f2406481699ca621b",
".git/objects/83/1b3ac630fa705bef33b04a956ec84e3ac9229f": "99e18bc22f606f681148b085376fb481",
".git/objects/b8/0e9b743d3c3a38f342d902808f27f2a049b77a": "37dd93b1f079d7aaa880e76d1090346d",
".git/objects/a6/25ffb8eaf913964f993f44c855628b19cab1ca": "dc17ffb0d5289dac5bf7b14a7e654508",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/8d/6fb34866d0f9a5a7209cd1408b3837ab1c3b30": "0a3471e7f332a2480c5a551e2fa5cf2a",
".git/objects/70/05d4e6265cf6e51e1d7fa9eef715d3d6c94b74": "7d4b1583e4bd869badda155e113f98dd",
".git/objects/70/791cc9725ce50361f16cdf6ee13037d6713c50": "e9353673f4323fd6d09bf47ccd2a9e68",
".git/objects/2f/3df186e3095a20b58e3ec51e6e4fe735d2ccf3": "0458e861112456d65b223aa302c9fa5a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/02/e12bbf1ba235394a9992998c05d58c4276781e": "7bf5ea5ed128a5f2a0486f07981b3111",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d1/bba49d358c68ba6d714cad375caeb1047a977e": "7072c2082b0abac1031f589d7fb7b9f0",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/78/30a1f17577a43254360dbcfc22de159a83a2b7": "d7bc40da18df1f263210b3ae1ad9ca2b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b4/43a476cb1683d62f3902ce8c44055217d3c82b": "f5195ee1c03b849631402c9673bbb09d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/REBASE_HEAD": "af7265c007f21e49b3aac1eb20280886",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"version.json": "58b39e4cb04466d293a23c98338f82b8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"index.html": "d517b9da5761108f2dc8effab54c6ff0",
"/": "d517b9da5761108f2dc8effab54c6ff0",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "fe66e377d1756dd12db086143e4d4e7e",
"main.dart.js": "a1d4f02f3ccbcefa81bd5590696a4800"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
