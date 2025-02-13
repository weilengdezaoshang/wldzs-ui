'use strict';
(self.webpackChunkwldzs_cool_ui = self.webpackChunkwldzs_cool_ui || []).push([
  [923],
  {
    26520: function (L, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return T;
          },
        });
      var g = e(5574),
        y = e.n(g),
        n = e(67294),
        o = e(44794),
        z = e(38024),
        x = e(64236),
        s = null,
        r = e(90482),
        C = e(85893),
        l = {},
        i = {
          name: 'wldzs-cool-ui',
          description: 'a simple and useful react ui library',
          version: '0.0.1',
          license: 'MIT',
          authors: ['wldzs'],
        },
        u = 'browser',
        d = void 0,
        c = {
          footer: 'Open-source MIT Licensed | Copyright \xA9 2023-present',
          prefersColor: { default: 'light', switch: !0 },
          nprogress: !0,
          lastUpdated: !0,
          name: 'wldzs-ui',
          socialLinks: {
            github: 'https://github.com/weilengdezaoshang/wldzs-ui',
          },
          nav: {
            'zh-CN': [
              { title: '\u6587\u6863', link: '/' },
              { title: '\u7EC4\u4EF6', link: '/components/guide' },
            ],
            'en-US': [
              { title: 'component', link: '/en/component' },
              { title: 'document', link: '/en/document' },
            ],
          },
          styles: ['.__dumi-default-navbar-logo { height: 24px !important; }'],
          extraBabelPlugins: [['import', { libraryName: 'wldzs-ui' }]],
          metas: [
            {
              name: 'keywords',
              content: '\u4E00\u4E2A\u7B80\u5355\u7684react\u7EC4\u4EF6\u5E93',
            },
            {
              name: 'description',
              content:
                'wldzs-ui - \u4E00\u4E2A\u7B80\u5355\u7684react\u7EC4\u4EF6\u5E93',
            },
          ],
        },
        m = !0;
      function T() {
        var k = (0, o.pC)(),
          w = (0, n.useState)(!1),
          v = y()(w, 2),
          p = v[0],
          f = v[1],
          h = (0, n.useRef)(o.m8.location.pathname);
        (0, n.useEffect)(function () {
          return o.m8.listen(function (t) {
            t.location.pathname !== h.current &&
              ((h.current = t.location.pathname),
              document.documentElement.scrollTo(0, 0));
          });
        }, []);
        var E = n.useMemo(
          function () {
            var t = {
              pkg: i,
              historyType: u,
              entryExports: l,
              demos: null,
              components: s,
              locales: r.k,
              loading: p,
              setLoading: f,
              hostname: d,
              themeConfig: c,
              _2_level_nav_available: m,
            };
            return (
              Object.defineProperty(t, 'demos', {
                get: function () {
                  return (
                    (0, z.Kp)(
                      !1,
                      '`demos` return empty in latest version, please use `useDemo` instead.',
                    ),
                    {}
                  );
                },
              }),
              t
            );
          },
          [i, u, l, s, r.k, p, f, d, c, m],
        );
        return (0, C.jsx)(x.D.Provider, { value: E, children: k });
      }
    },
  },
]);
