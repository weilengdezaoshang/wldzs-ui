'use strict';
(self.webpackChunkcool_ui = self.webpackChunkcool_ui || []).push([
  [123],
  {
    9747: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return h;
          },
        });
      var d = e(17061),
        o = e.n(d),
        i = e(17156),
        l = e.n(i),
        r = e(67294),
        f = e(76346),
        E = e(93703),
        h = {
          'foo-demo-0': {
            component: r.memo(
              r.lazy(
                l()(
                  o()().mark(function m() {
                    var a, u;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Promise.resolve().then(e.bind(e, 93703))
                            );
                          case 2:
                            return (
                              (a = t.sent),
                              (u = a.Foo),
                              t.abrupt('return', {
                                default: function () {
                                  return r.createElement(u, {
                                    title: 'Hello dumi!',
                                  });
                                },
                              })
                            );
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'foo-demo-0',
              refAtomIds: ['Foo'],
              dependencies: {
                'index.jsx': {
                  type: 'FILE',
                  value: `import { Foo } from 'cool-ui';

export default () => <Foo title="Hello dumi!" />;`,
                },
                'cool-ui': { type: 'NPM', value: '0.0.1' },
              },
              entry: 'index.jsx',
            },
            context: { 'cool-ui': E },
            renderOpts: {
              compile: (function () {
                var m = l()(
                  o()().mark(function u() {
                    var _,
                      t = arguments;
                    return o()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.next = 2), e.e(335).then(e.bind(e, 37335))
                            );
                          case 2:
                            return s.abrupt(
                              'return',
                              (_ = s.sent).default.apply(_, t),
                            );
                          case 3:
                          case 'end':
                            return s.stop();
                        }
                    }, u);
                  }),
                );
                function a() {
                  return m.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
        };
    },
    93703: function (c, n, e) {
      e.r(n),
        e.d(n, {
          Foo: function () {
            return l;
          },
        });
      var d = e(67294),
        o = e(85893),
        i = function (f) {
          return (0, o.jsx)('h4', { children: f.title });
        },
        l = i;
    },
    65304: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return o;
          },
        });
      var d = e(76346);
      const o = [
        { value: 'This is an example component.', paraId: 0, tocIndex: 0 },
      ];
    },
  },
]);
