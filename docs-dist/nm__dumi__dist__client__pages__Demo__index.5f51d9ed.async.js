'use strict';
(self.webpackChunkcool_ui = self.webpackChunkcool_ui || []).push([
  [9],
  {
    65149: function (L, s, e) {
      e.r(s),
        e.d(s, {
          default: function () {
            return E;
          },
        });
      var o = e(53683),
        n = e(67294),
        D = e(52289),
        g = function () {
          var O = (0, o.UO)(),
            t = O.id,
            a = (0, o.FO)(t),
            R = (0, D.m)({
              id: t,
              component: a.component,
              renderOpts: a.renderOpts,
            }),
            h = R.canvasRef,
            v = a || {},
            m = v.component,
            d = v.renderOpts,
            r = (0, o.kw)(t),
            u = r.node,
            c = r.setSource,
            i = r.error,
            l = r.loading,
            w =
              u ||
              (d != null && d.renderer
                ? (0, n.createElement)('div', { ref: h })
                : m && (0, n.createElement)(m));
          return (
            (0, n.useEffect)(
              function () {
                var f = function (p) {
                  p.data.type === 'dumi.liveDemo.setSource' && c(p.data.value);
                };
                return (
                  window.addEventListener('message', f),
                  function () {
                    return window.removeEventListener('message', f);
                  }
                );
              },
              [c],
            ),
            (0, n.useEffect)(
              function () {
                !l &&
                  (i || u) &&
                  window.postMessage({
                    type: 'dumi.liveDemo.compileDone',
                    value: { err: i },
                  });
              },
              [i, u, l],
            ),
            w
          );
        },
        E = g;
    },
  },
]);
