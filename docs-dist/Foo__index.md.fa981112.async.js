'use strict';
(self.webpackChunkcool_ui = self.webpackChunkcool_ui || []).push([
  [81],
  {
    43020: function (a, o, _) {
      _.r(o);
      var m = _(72269),
        E = _(93359),
        D = _(61788),
        h = _(19977),
        r = _(78003),
        M = _(24268),
        P = _(96057),
        O = _(18483),
        s = _(53683),
        n = _(80936),
        d = _(67294),
        e = _(85893);
      function i() {
        var t = (0, s.eL)(),
          u = t.texts;
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsxs)('div', {
              className: 'markdown',
              children: [
                (0, e.jsxs)('h1', {
                  id: 'foo',
                  children: [
                    (0, e.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: '-1',
                      href: '#foo',
                      children: (0, e.jsx)('span', {
                        className: 'icon icon-link',
                      }),
                    }),
                    'Foo',
                  ],
                }),
                (0, e.jsx)('p', { children: u[0].value }),
              ],
            }),
            (0, e.jsx)(s.Dl, {
              demo: { id: 'foo-demo-0' },
              previewerProps: {},
            }),
          ],
        });
      }
      function l() {
        return (0, e.jsx)(s.dY, {
          children: (0, e.jsx)(d.Suspense, {
            fallback: (0, e.jsx)(n.Z, {}),
            children: (0, e.jsx)(i, {}),
          }),
        });
      }
      o.default = l;
    },
  },
]);
