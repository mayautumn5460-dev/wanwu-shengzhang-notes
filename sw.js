/* 万物生长 · 离线缓存
   只在 http(s) 下注册；file:// 双击打开时不会走到这里。

   关于 Q：有些静态托管（含本应用发布的平台）要求每个请求都带上入口链接里的
   查询串，否则返回 403。所以发请求时一律拼上 Q，但缓存的 key 保持不带 Q，
   这样「请求用的 URL」和「离线取用的 key」不会跟着链接参数漂移。

   导航请求走「网络优先、拿不到再用缓存」——在线时总是新版，断网时用缓存。
   跨域请求（AI 接口）一律不碰，直接放行。 */
var CACHE = 'wgs-v11';
var Q = self.location.search || '';
var KEY = './index.html';

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(
    fetch(KEY + Q).then(function (res) {
      if (!res || !res.ok) return null;
      return caches.open(CACHE).then(function (c) { return c.put(KEY, res); });
    }).catch(function () {})
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function put(req, res) {
  caches.open(CACHE).then(function (c) { return c.put(req, res); }).catch(function () {});
}

self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var u;
  try { u = new URL(r.url); } catch (err) { return; }
  if (u.origin !== self.location.origin) return;   /* AI 接口等跨域请求：不管 */

  if (r.mode === 'navigate') {
    e.respondWith(
      fetch(r).then(function (res) {
        if (res && res.ok) put(KEY, res.clone());
        return res;
      }).catch(function () {
        return caches.match(KEY);
      })
    );
    return;
  }

  e.respondWith(
    caches.match(r).then(function (hit) {
      return hit || fetch(r).then(function (res) {
        if (res && res.ok) put(r, res.clone());
        return res;
      });
    })
  );
});
