'use strict';
(self.webpackChunkwldzs_cool_ui = self.webpackChunkwldzs_cool_ui || []).push([
  [9],
  {
    65149: function (L, i, e) {
      e.r(i),
        e.d(i, {
          default: function () {
            return w;
          },
        });
      var o = e(44794),
        n = e(67294),
        D = e(52289),
        g = function () {
          var E = (0, o.UO)(),
            t = E.id,
            a = (0, o.FO)(t),
            O = (0, D.m)({
              id: t,
              component: a.component,
              renderOpts: a.renderOpts,
            }),
            R = O.canvasRef,
            v = a || {},
            m = v.component,
            d = v.renderOpts,
            r = (0, o.kw)(t),
            s = r.node,
            l = r.setSource,
            u = r.error,
            c = r.loading,
            h =
              s ||
              (d != null && d.renderer
                ? (0, n.createElement)('div', { ref: R })
                : m && (0, n.createElement)(m));
          return (
            (0, n.useEffect)(
              function () {
                var f = function (p) {
                  p.data.type === 'dumi.liveDemo.setSource' && l(p.data.value);
                };
                return (
                  window.addEventListener('message', f),
                  function () {
                    return window.removeEventListener('message', f);
                  }
                );
              },
              [l],
            ),
            (0, n.useEffect)(
              function () {
                !c &&
                  (u || s) &&
                  window.postMessage({
                    type: 'dumi.liveDemo.compileDone',
                    value: { err: u },
                  });
              },
              [u, s, c],
            ),
            h
          );
        },
        w = g;
    },
  },
]);
