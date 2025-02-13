!(function () {
  'use strict';
  var t = '/cool-ui'.replace(/([^/])$/, '$1/'),
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
          p: 'cool-ui',
          b: 'webpack',
          f: [
            [
              'nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css',
              9,
            ],
            ['nm__dumi__dist__client__pages__Demo__index.5f51d9ed.async.js', 9],
            ['nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css', 65],
            ['nm__dumi__dist__client__pages__404.c1e9b697.async.js', 65],
            ['Foo__index.md.fa981112.async.js', 81],
            [
              'nm__dumi__theme-default__layouts__DocLayout__index.5c8f0e44.async.js',
              519,
            ],
            ['574.e8c51481.chunk.css', 574],
            ['574.3572b8d8.async.js', 574],
            [
              'dumi__tmp-production__dumi__theme__ContextWrapper.d4169a97.async.js',
              923,
            ],
            ['docs__index.md.2ccfad3d.async.js', 935],
            ['docs__guide.md.099ba960.async.js', 937],
          ],
          r: {
            '/*': [2, 3, 5, 6, 7, 8],
            '/': [9, 5, 6, 7, 8],
            '/guide': [10, 5, 6, 7, 8],
            '/~demos/:id': [0, 1, 8],
            '/components/foo': [4, 5, 6, 7, 8],
          },
        },
        { publicPath: '/cool-ui/' },
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
