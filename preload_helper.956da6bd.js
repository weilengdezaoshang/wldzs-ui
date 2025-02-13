!(function () {
  'use strict';
  var t = '/wldzs-ui'.replace(/([^/])$/, '$1/'),
    e = location.pathname,
    n = e.startsWith(t) && decodeURI('/'.concat(e.slice(t.length)));
  if (n) {
    var a = document,
      c = a.head,
      r = a.createElement.bind(a),
      i = (function (t, e, n) {
        var a,
          c =
            e.r[t] ||
            (null ===
              (a = Object.entries(e.r).find(function (e) {
                var n = e[0];
                return new RegExp(
                  '^'.concat(
                    n.replace(/\/:[^/]+/g, '/[^/]+').replace('/*', '/.+'),
                    '$',
                  ),
                ).test(t);
              })) || void 0 === a
              ? void 0
              : a[1]);
        return null == c
          ? void 0
          : c.map(function (t) {
              var a = e.f[t][1],
                c = e.f[t][0];
              return {
                type: c.split('.').pop(),
                url: ''.concat(n.publicPath).concat(c),
                attrs: [['data-'.concat(e.b), ''.concat(e.p, ':').concat(a)]],
              };
            });
      })(
        n,
        {
          p: 'wldzs-cool-ui',
          b: 'webpack',
          f: [
            [
              'nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css',
              9,
            ],
            ['nm__dumi__dist__client__pages__Demo__index.b7c2679d.async.js', 9],
            ['nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css', 65],
            ['nm__dumi__dist__client__pages__404.a9b10d30.async.js', 65],
            ['189.e8c51481.chunk.css', 189],
            ['189.2fab5864.async.js', 189],
            [
              'nm__dumi__theme-default__layouts__DocLayout__index.53db9650.async.js',
              519,
            ],
            ['Button__index.md.33be0665.chunk.css', 544],
            ['Button__index.md.ebac22bb.async.js', 544],
            ['guide.md.33be0665.chunk.css', 704],
            ['guide.md.0e6a90e9.async.js', 704],
            [
              'dumi__tmp-production__dumi__theme__ContextWrapper.82c02247.async.js',
              923,
            ],
            ['docs__index.md.33be0665.chunk.css', 935],
            ['docs__index.md.0145ae21.async.js', 935],
            ['972.68d230f6.async.js', 972],
          ],
          r: {
            '/*': [2, 3, 4, 5, 6, 11],
            '/': [12, 13, 14, 4, 5, 6, 11],
            '/~demos/:id': [0, 1, 11],
            '/components/button': [7, 8, 14, 4, 5, 6, 11],
            '/components/guide': [9, 10, 14, 4, 5, 6, 11],
          },
        },
        { publicPath: '/wldzs-ui/' },
      );
    null == i ||
      i.forEach(function (t) {
        var e,
          n = t.type,
          a = t.url;
        if ('js' === n) ((e = r('script')).src = a), (e.async = !0);
        else {
          if ('css' !== n) return;
          ((e = r('link')).href = a), (e.rel = 'preload'), (e.as = 'style');
        }
        t.attrs.forEach(function (t) {
          e.setAttribute(t[0], t[1] || '');
        }),
          c.appendChild(e);
      });
  }
})();
