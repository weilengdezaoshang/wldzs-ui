'use strict';
(self.webpackChunkcool_ui = self.webpackChunkcool_ui || []).push([
  [65],
  {
    16166: function (s, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return r;
          },
        });
      var t = e(53683),
        a = e(67294),
        o = function () {
          var u = (0, t.YB)(),
            l = (0, t.bU)();
          return a.createElement(
            'div',
            { className: 'dumi-default-not-found' },
            a.createElement('h1', null, u.formatMessage({ id: '404.title' })),
            a.createElement(
              t.rU,
              { to: 'base' in l ? l.base : '/', replace: !0 },
              u.formatMessage({ id: '404.back' }),
              ' \u2192',
            ),
          );
        },
        r = o;
    },
  },
]);
