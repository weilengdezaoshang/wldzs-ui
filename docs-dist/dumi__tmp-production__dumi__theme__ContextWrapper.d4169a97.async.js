'use strict';
(self.webpackChunkcool_ui = self.webpackChunkcool_ui || []).push([
  [923],
  {
    26520: function (z, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return j;
          },
        });
      var g = e(27424),
        y = e.n(g),
        n = e(67294),
        o = e(53683),
        C = e(38024),
        x = e(64236),
        r = null,
        s = e(90482),
        T = e(85893),
        l = {},
        i = {
          name: 'cool-ui',
          description: 'a simple and useful react ui library',
          version: '0.0.1',
          license: 'MIT',
          authors: ['wldzs'],
        },
        u = 'browser',
        c = void 0,
        d = {
          footer:
            'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: !0 },
          nprogress: !0,
          lastUpdated: !0,
          name: 'cool-ui',
          socialLinks: {
            github: 'https://github.com/weilengdezaoshang/cool-ui',
          },
          nav: {
            'zh-CN': [{ title: '\u7EC4\u4EF6', link: '/' }],
            'en-US': [{ title: 'component', link: '/en/component' }],
          },
        },
        m = !0;
      function j() {
        var E = (0, o.pC)(),
          S = (0, n.useState)(!1),
          v = y()(S, 2),
          f = v[0],
          h = v[1],
          p = (0, n.useRef)(o.m8.location.pathname);
        (0, n.useEffect)(function () {
          return o.m8.listen(function (t) {
            t.location.pathname !== p.current &&
              ((p.current = t.location.pathname),
              document.documentElement.scrollTo(0, 0));
          });
        }, []);
        var k = n.useMemo(
          function () {
            var t = {
              pkg: i,
              historyType: u,
              entryExports: l,
              demos: null,
              components: r,
              locales: s.k,
              loading: f,
              setLoading: h,
              hostname: c,
              themeConfig: d,
              _2_level_nav_available: m,
            };
            return (
              Object.defineProperty(t, 'demos', {
                get: function () {
                  return (
                    (0, C.Kp)(
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
          [i, u, l, r, s.k, f, h, c, d, m],
        );
        return (0, T.jsx)(x.D.Provider, { value: k, children: E });
      }
    },
  },
]);
