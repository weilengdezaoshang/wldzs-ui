!(function () {
  var yl = Object.defineProperty,
    xl = Object.defineProperties;
  var wl = Object.getOwnPropertyDescriptors;
  var Mn = Object.getOwnPropertySymbols;
  var X1 = Object.prototype.hasOwnProperty,
    z1 = Object.prototype.propertyIsEnumerable;
  var Y1 = (Le, I, H) =>
      I in Le
        ? yl(Le, I, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H,
          })
        : (Le[I] = H),
    J1 = (Le, I) => {
      for (var H in I || (I = {})) X1.call(I, H) && Y1(Le, H, I[H]);
      if (Mn) for (var H of Mn(I)) z1.call(I, H) && Y1(Le, H, I[H]);
      return Le;
    },
    Q1 = (Le, I) => xl(Le, wl(I));
  var Ds = (Le, I) => {
    var H = {};
    for (var u in Le) X1.call(Le, u) && I.indexOf(u) < 0 && (H[u] = Le[u]);
    if (Le != null && Mn)
      for (var u of Mn(Le))
        I.indexOf(u) < 0 && z1.call(Le, u) && (H[u] = Le[u]);
    return H;
  };
  (self.webpackChunkcool_ui = self.webpackChunkcool_ui || []).push([
    [335],
    {
      92509: function (Le, I, H) {
        (function (u, e) {
          e(I, H(22208), H(4375), H(83446));
        })(this, function (u, e, Ie, O) {
          'use strict';
          class j {
            constructor({ file: U, sourceRoot: G } = {}) {
              (this._names = new e.SetArray()),
                (this._sources = new e.SetArray()),
                (this._sourcesContent = []),
                (this._mappings = []),
                (this.file = U),
                (this.sourceRoot = G),
                (this._ignoreList = new e.SetArray());
            }
          }
          function r($) {
            return $;
          }
          function w($, U, G, M, pe, ue, re, N) {
            return Ae(!1, $, U, G, M, pe, ue, re, N);
          }
          function ce($, U) {
            return de(!1, $, U);
          }
          const q = ($, U, G, M, pe, ue, re, N) =>
              Ae(!0, $, U, G, M, pe, ue, re, N),
            oe = ($, U) => de(!0, $, U);
          function ie($, U, G) {
            const { _sources: M, _sourcesContent: pe } = $,
              ue = e.put(M, U);
            pe[ue] = G;
          }
          function ye($, U, G = !0) {
            const { _sources: M, _sourcesContent: pe, _ignoreList: ue } = $,
              re = e.put(M, U);
            re === pe.length && (pe[re] = null),
              G ? e.put(ue, re) : e.remove(ue, re);
          }
          function ve($) {
            const {
              _mappings: U,
              _sources: G,
              _sourcesContent: M,
              _names: pe,
              _ignoreList: ue,
            } = $;
            return (
              K(U),
              {
                version: 3,
                file: $.file || void 0,
                names: pe.array,
                sourceRoot: $.sourceRoot || void 0,
                sources: G.array,
                sourcesContent: M,
                mappings: U,
                ignoreList: ue.array,
              }
            );
          }
          function P($) {
            const U = ve($);
            return Object.assign(Object.assign({}, U), {
              mappings: Ie.encode(U.mappings),
            });
          }
          function Se($) {
            const U = new O.TraceMap($),
              G = new j({ file: U.file, sourceRoot: U.sourceRoot });
            return (
              R(G._names, U.names),
              R(G._sources, U.sources),
              (G._sourcesContent =
                U.sourcesContent || U.sources.map(() => null)),
              (G._mappings = O.decodedMappings(U)),
              U.ignoreList && R(G._ignoreList, U.ignoreList),
              G
            );
          }
          function Ce($) {
            const U = [],
              { _mappings: G, _sources: M, _names: pe } = $;
            for (let ue = 0; ue < G.length; ue++) {
              const re = G[ue];
              for (let N = 0; N < re.length; N++) {
                const se = re[N],
                  Ne = { line: ue + 1, column: se[0] };
                let b, S, L;
                se.length !== 1 &&
                  ((b = M.array[se[1]]),
                  (S = { line: se[2] + 1, column: se[3] }),
                  se.length === 5 && (L = pe.array[se[4]])),
                  U.push({ generated: Ne, source: b, original: S, name: L });
              }
            }
            return U;
          }
          function Ae($, U, G, M, pe, ue, re, N, se) {
            const {
                _mappings: Ne,
                _sources: b,
                _sourcesContent: S,
                _names: L,
              } = U,
              D = Fe(Ne, G),
              z = qe(D, M);
            if (!pe) return $ && m(D, z) ? void 0 : Ke(D, z, [M]);
            const ae = e.put(b, pe),
              _ = N ? e.put(L, N) : -1;
            if (
              (ae === S.length && (S[ae] = se != null ? se : null),
              !($ && v(D, z, ae, ue, re, _)))
            )
              return Ke(D, z, N ? [M, ae, ue, re, _] : [M, ae, ue, re]);
          }
          function Fe($, U) {
            for (let G = $.length; G <= U; G++) $[G] = [];
            return $[U];
          }
          function qe($, U) {
            let G = $.length;
            for (let M = G - 1; M >= 0; G = M--) {
              const pe = $[M];
              if (U >= pe[0]) break;
            }
            return G;
          }
          function Ke($, U, G) {
            for (let M = $.length; M > U; M--) $[M] = $[M - 1];
            $[U] = G;
          }
          function K($) {
            const { length: U } = $;
            let G = U;
            for (let M = G - 1; M >= 0 && !($[M].length > 0); G = M, M--);
            G < U && ($.length = G);
          }
          function R($, U) {
            for (let G = 0; G < U.length; G++) e.put($, U[G]);
          }
          function m($, U) {
            return U === 0 ? !0 : $[U - 1].length === 1;
          }
          function v($, U, G, M, pe, ue) {
            if (U === 0) return !1;
            const re = $[U - 1];
            return re.length === 1
              ? !1
              : G === re[1] &&
                  M === re[2] &&
                  pe === re[3] &&
                  ue === (re.length === 5 ? re[4] : -1);
          }
          function de($, U, G) {
            const {
              generated: M,
              source: pe,
              original: ue,
              name: re,
              content: N,
            } = G;
            return pe
              ? Ae(
                  $,
                  U,
                  M.line - 1,
                  M.column,
                  pe,
                  ue.line - 1,
                  ue.column,
                  re,
                  N,
                )
              : Ae($, U, M.line - 1, M.column, null, null, null, null, null);
          }
          (u.GenMapping = j),
            (u.addMapping = ce),
            (u.addSegment = w),
            (u.allMappings = Ce),
            (u.fromMap = Se),
            (u.maybeAddMapping = oe),
            (u.maybeAddSegment = q),
            (u.setIgnore = ye),
            (u.setSourceContent = ie),
            (u.toDecodedMap = ve),
            (u.toEncodedMap = P),
            Object.defineProperty(u, '__esModule', { value: !0 });
        });
      },
      48435: function (Le) {
        (function (I, H) {
          Le.exports = H();
        })(this, function () {
          'use strict';
          const I = /^[\w+.-]+:\/\//,
            H =
              /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
            u =
              /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
          function e(q) {
            return I.test(q);
          }
          function Ie(q) {
            return q.startsWith('//');
          }
          function O(q) {
            return q.startsWith('/');
          }
          function X(q) {
            return q.startsWith('file:');
          }
          function C(q) {
            return /^[.?#]/.test(q);
          }
          function h(q) {
            const oe = H.exec(q);
            return T(
              oe[1],
              oe[2] || '',
              oe[3],
              oe[4] || '',
              oe[5] || '/',
              oe[6] || '',
              oe[7] || '',
            );
          }
          function d(q) {
            const oe = u.exec(q),
              ie = oe[2];
            return T(
              'file:',
              '',
              oe[1] || '',
              '',
              O(ie) ? ie : '/' + ie,
              oe[3] || '',
              oe[4] || '',
            );
          }
          function T(q, oe, ie, ye, ve, P, Se) {
            return {
              scheme: q,
              user: oe,
              host: ie,
              port: ye,
              path: ve,
              query: P,
              hash: Se,
              type: 7,
            };
          }
          function E(q) {
            if (Ie(q)) {
              const ie = h('http:' + q);
              return (ie.scheme = ''), (ie.type = 6), ie;
            }
            if (O(q)) {
              const ie = h('http://foo.com' + q);
              return (ie.scheme = ''), (ie.host = ''), (ie.type = 5), ie;
            }
            if (X(q)) return d(q);
            if (e(q)) return h(q);
            const oe = h('http://foo.com/' + q);
            return (
              (oe.scheme = ''),
              (oe.host = ''),
              (oe.type = q
                ? q.startsWith('?')
                  ? 3
                  : q.startsWith('#')
                  ? 2
                  : 4
                : 1),
              oe
            );
          }
          function j(q) {
            if (q.endsWith('/..')) return q;
            const oe = q.lastIndexOf('/');
            return q.slice(0, oe + 1);
          }
          function r(q, oe) {
            w(oe, oe.type),
              q.path === '/'
                ? (q.path = oe.path)
                : (q.path = j(oe.path) + q.path);
          }
          function w(q, oe) {
            const ie = oe <= 4,
              ye = q.path.split('/');
            let ve = 1,
              P = 0,
              Se = !1;
            for (let Ae = 1; Ae < ye.length; Ae++) {
              const Fe = ye[Ae];
              if (!Fe) {
                Se = !0;
                continue;
              }
              if (((Se = !1), Fe !== '.')) {
                if (Fe === '..') {
                  P ? ((Se = !0), P--, ve--) : ie && (ye[ve++] = Fe);
                  continue;
                }
                (ye[ve++] = Fe), P++;
              }
            }
            let Ce = '';
            for (let Ae = 1; Ae < ve; Ae++) Ce += '/' + ye[Ae];
            (!Ce || (Se && !Ce.endsWith('/..'))) && (Ce += '/'), (q.path = Ce);
          }
          function ce(q, oe) {
            if (!q && !oe) return '';
            const ie = E(q);
            let ye = ie.type;
            if (oe && ye !== 7) {
              const P = E(oe),
                Se = P.type;
              switch (ye) {
                case 1:
                  ie.hash = P.hash;
                case 2:
                  ie.query = P.query;
                case 3:
                case 4:
                  r(ie, P);
                case 5:
                  (ie.user = P.user), (ie.host = P.host), (ie.port = P.port);
                case 6:
                  ie.scheme = P.scheme;
              }
              Se > ye && (ye = Se);
            }
            w(ie, ye);
            const ve = ie.query + ie.hash;
            switch (ye) {
              case 2:
              case 3:
                return ve;
              case 4: {
                const P = ie.path.slice(1);
                return P
                  ? C(oe || q) && !C(P)
                    ? './' + P + ve
                    : P + ve
                  : ve || '.';
              }
              case 5:
                return ie.path + ve;
              default:
                return (
                  ie.scheme + '//' + ie.user + ie.host + ie.port + ie.path + ve
                );
            }
          }
          return ce;
        });
      },
      22208: function (Le, I) {
        (function (H, u) {
          u(I);
        })(this, function (H) {
          'use strict';
          class u {
            constructor() {
              (this._indexes = { __proto__: null }), (this.array = []);
            }
          }
          function e(h) {
            return h;
          }
          function Ie(h, d) {
            return h._indexes[d];
          }
          function O(h, d) {
            const T = Ie(h, d);
            if (T !== void 0) return T;
            const { array: E, _indexes: j } = h,
              r = E.push(d);
            return (j[d] = r - 1);
          }
          function X(h) {
            const { array: d, _indexes: T } = h;
            if (d.length === 0) return;
            const E = d.pop();
            T[E] = void 0;
          }
          function C(h, d) {
            const T = Ie(h, d);
            if (T === void 0) return;
            const { array: E, _indexes: j } = h;
            for (let r = T + 1; r < E.length; r++) {
              const w = E[r];
              (E[r - 1] = w), j[w]--;
            }
            (j[d] = void 0), E.pop();
          }
          (H.SetArray = u),
            (H.get = Ie),
            (H.pop = X),
            (H.put = O),
            (H.remove = C),
            Object.defineProperty(H, '__esModule', { value: !0 });
        });
      },
      4375: function (Le, I, H) {
        var u = H(48764).lW;
        (function (e, Ie) {
          Ie(I);
        })(this, function (e) {
          'use strict';
          const X =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            C = new Uint8Array(64),
            h = new Uint8Array(128);
          for (let K = 0; K < X.length; K++) {
            const R = X.charCodeAt(K);
            (C[K] = R), (h[R] = K);
          }
          function d(K, R) {
            let m = 0,
              v = 0,
              de = 0;
            do {
              const U = K.next();
              (de = h[U]), (m |= (de & 31) << v), (v += 5);
            } while (de & 32);
            const $ = m & 1;
            return (m >>>= 1), $ && (m = -2147483648 | -m), R + m;
          }
          function T(K, R, m) {
            let v = R - m;
            v = v < 0 ? (-v << 1) | 1 : v << 1;
            do {
              let de = v & 31;
              (v >>>= 5), v > 0 && (de |= 32), K.write(C[de]);
            } while (v > 0);
            return R;
          }
          function E(K, R) {
            return K.pos >= R ? !1 : K.peek() !== 44;
          }
          const j = 1024 * 16,
            r =
              typeof TextDecoder != 'undefined'
                ? new TextDecoder()
                : typeof u != 'undefined'
                ? {
                    decode(K) {
                      return u
                        .from(K.buffer, K.byteOffset, K.byteLength)
                        .toString();
                    },
                  }
                : {
                    decode(K) {
                      let R = '';
                      for (let m = 0; m < K.length; m++)
                        R += String.fromCharCode(K[m]);
                      return R;
                    },
                  };
          class w {
            constructor() {
              (this.pos = 0),
                (this.out = ''),
                (this.buffer = new Uint8Array(j));
            }
            write(R) {
              const { buffer: m } = this;
              (m[this.pos++] = R),
                this.pos === j && ((this.out += r.decode(m)), (this.pos = 0));
            }
            flush() {
              const { buffer: R, out: m, pos: v } = this;
              return v > 0 ? m + r.decode(R.subarray(0, v)) : m;
            }
          }
          class ce {
            constructor(R) {
              (this.pos = 0), (this.buffer = R);
            }
            next() {
              return this.buffer.charCodeAt(this.pos++);
            }
            peek() {
              return this.buffer.charCodeAt(this.pos);
            }
            indexOf(R) {
              const { buffer: m, pos: v } = this,
                de = m.indexOf(R, v);
              return de === -1 ? m.length : de;
            }
          }
          const q = [];
          function oe(K) {
            const { length: R } = K,
              m = new ce(K),
              v = [],
              de = [];
            let $ = 0;
            for (; m.pos < R; m.pos++) {
              $ = d(m, $);
              const U = d(m, 0);
              if (!E(m, R)) {
                const N = de.pop();
                (N[2] = $), (N[3] = U);
                continue;
              }
              const G = d(m, 0),
                ue = d(m, 0) & 1 ? [$, U, 0, 0, G, d(m, 0)] : [$, U, 0, 0, G];
              let re = q;
              if (E(m, R)) {
                re = [];
                do {
                  const N = d(m, 0);
                  re.push(N);
                } while (E(m, R));
              }
              (ue.vars = re), v.push(ue), de.push(ue);
            }
            return v;
          }
          function ie(K) {
            const R = new w();
            for (let m = 0; m < K.length; ) m = ye(K, m, R, [0]);
            return R.flush();
          }
          function ye(K, R, m, v) {
            const de = K[R],
              { 0: $, 1: U, 2: G, 3: M, 4: pe, vars: ue } = de;
            R > 0 && m.write(44),
              (v[0] = T(m, $, v[0])),
              T(m, U, 0),
              T(m, pe, 0);
            const re = de.length === 6 ? 1 : 0;
            T(m, re, 0), de.length === 6 && T(m, de[5], 0);
            for (const N of ue) T(m, N, 0);
            for (R++; R < K.length; ) {
              const N = K[R],
                { 0: se, 1: Ne } = N;
              if (se > G || (se === G && Ne >= M)) break;
              R = ye(K, R, m, v);
            }
            return m.write(44), (v[0] = T(m, G, v[0])), T(m, M, 0), R;
          }
          function ve(K) {
            const { length: R } = K,
              m = new ce(K),
              v = [],
              de = [];
            let $ = 0,
              U = 0,
              G = 0,
              M = 0,
              pe = 0,
              ue = 0,
              re = 0,
              N = 0;
            do {
              const se = m.indexOf(';');
              let Ne = 0;
              for (; m.pos < se; m.pos++) {
                if (((Ne = d(m, Ne)), !E(m, se))) {
                  const me = de.pop();
                  (me[2] = $), (me[3] = Ne);
                  continue;
                }
                const b = d(m, 0),
                  S = b & 1,
                  L = b & 2,
                  D = b & 4;
                let z = null,
                  ae = q,
                  _;
                if (S) {
                  const me = d(m, U);
                  (G = d(m, U === me ? G : 0)),
                    (U = me),
                    (_ = [$, Ne, 0, 0, me, G]);
                } else _ = [$, Ne, 0, 0];
                if (((_.isScope = !!D), L)) {
                  const me = M,
                    Re = pe;
                  M = d(m, M);
                  const Q = me === M;
                  (pe = d(m, Q ? pe : 0)),
                    (ue = d(m, Q && Re === pe ? ue : 0)),
                    (z = [M, pe, ue]);
                }
                if (((_.callsite = z), E(m, se))) {
                  ae = [];
                  do {
                    (re = $), (N = Ne);
                    const me = d(m, 0);
                    let Re;
                    if (me < -1) {
                      Re = [[d(m, 0)]];
                      for (let Q = -1; Q > me; Q--) {
                        const te = re;
                        (re = d(m, re)), (N = d(m, re === te ? N : 0));
                        const x = d(m, 0);
                        Re.push([x, re, N]);
                      }
                    } else Re = [[me]];
                    ae.push(Re);
                  } while (E(m, se));
                }
                (_.bindings = ae), v.push(_), de.push(_);
              }
              $++, (m.pos = se + 1);
            } while (m.pos < R);
            return v;
          }
          function P(K) {
            if (K.length === 0) return '';
            const R = new w();
            for (let m = 0; m < K.length; )
              m = Se(K, m, R, [0, 0, 0, 0, 0, 0, 0]);
            return R.flush();
          }
          function Se(K, R, m, v) {
            const de = K[R],
              {
                0: $,
                1: U,
                2: G,
                3: M,
                isScope: pe,
                callsite: ue,
                bindings: re,
              } = de;
            v[0] < $
              ? (Ce(m, v[0], $), (v[0] = $), (v[1] = 0))
              : R > 0 && m.write(44),
              (v[1] = T(m, de[1], v[1]));
            const N = (de.length === 6 ? 1 : 0) | (ue ? 2 : 0) | (pe ? 4 : 0);
            if ((T(m, N, 0), de.length === 6)) {
              const { 4: se, 5: Ne } = de;
              se !== v[2] && (v[3] = 0),
                (v[2] = T(m, se, v[2])),
                (v[3] = T(m, Ne, v[3]));
            }
            if (ue) {
              const { 0: se, 1: Ne, 2: b } = de.callsite;
              se !== v[4]
                ? ((v[5] = 0), (v[6] = 0))
                : Ne !== v[5] && (v[6] = 0),
                (v[4] = T(m, se, v[4])),
                (v[5] = T(m, Ne, v[5])),
                (v[6] = T(m, b, v[6]));
            }
            if (re)
              for (const se of re) {
                se.length > 1 && T(m, -se.length, 0);
                const Ne = se[0][0];
                T(m, Ne, 0);
                let b = $,
                  S = U;
                for (let L = 1; L < se.length; L++) {
                  const D = se[L];
                  (b = T(m, D[1], b)), (S = T(m, D[2], S)), T(m, D[0], 0);
                }
              }
            for (R++; R < K.length; ) {
              const se = K[R],
                { 0: Ne, 1: b } = se;
              if (Ne > G || (Ne === G && b >= M)) break;
              R = Se(K, R, m, v);
            }
            return (
              v[0] < G ? (Ce(m, v[0], G), (v[0] = G), (v[1] = 0)) : m.write(44),
              (v[1] = T(m, M, v[1])),
              R
            );
          }
          function Ce(K, R, m) {
            do K.write(59);
            while (++R < m);
          }
          function Ae(K) {
            const { length: R } = K,
              m = new ce(K),
              v = [];
            let de = 0,
              $ = 0,
              U = 0,
              G = 0,
              M = 0;
            do {
              const pe = m.indexOf(';'),
                ue = [];
              let re = !0,
                N = 0;
              for (de = 0; m.pos < pe; ) {
                let se;
                (de = d(m, de)),
                  de < N && (re = !1),
                  (N = de),
                  E(m, pe)
                    ? (($ = d(m, $)),
                      (U = d(m, U)),
                      (G = d(m, G)),
                      E(m, pe)
                        ? ((M = d(m, M)), (se = [de, $, U, G, M]))
                        : (se = [de, $, U, G]))
                    : (se = [de]),
                  ue.push(se),
                  m.pos++;
              }
              re || Fe(ue), v.push(ue), (m.pos = pe + 1);
            } while (m.pos <= R);
            return v;
          }
          function Fe(K) {
            K.sort(qe);
          }
          function qe(K, R) {
            return K[0] - R[0];
          }
          function Ke(K) {
            const R = new w();
            let m = 0,
              v = 0,
              de = 0,
              $ = 0;
            for (let U = 0; U < K.length; U++) {
              const G = K[U];
              if ((U > 0 && R.write(59), G.length === 0)) continue;
              let M = 0;
              for (let pe = 0; pe < G.length; pe++) {
                const ue = G[pe];
                pe > 0 && R.write(44),
                  (M = T(R, ue[0], M)),
                  ue.length !== 1 &&
                    ((m = T(R, ue[1], m)),
                    (v = T(R, ue[2], v)),
                    (de = T(R, ue[3], de)),
                    ue.length !== 4 && ($ = T(R, ue[4], $)));
              }
            }
            return R.flush();
          }
          (e.decode = Ae),
            (e.decodeGeneratedRanges = ve),
            (e.decodeOriginalScopes = oe),
            (e.encode = Ke),
            (e.encodeGeneratedRanges = P),
            (e.encodeOriginalScopes = ie),
            Object.defineProperty(e, '__esModule', { value: !0 });
        });
      },
      83446: function (Le, I, H) {
        (function (u, e) {
          e(I, H(4375), H(48435));
        })(this, function (u, e, Ie) {
          'use strict';
          function O(l, p) {
            return p && !p.endsWith('/') && (p += '/'), Ie(l, p);
          }
          function X(l) {
            if (!l) return '';
            const p = l.lastIndexOf('/');
            return l.slice(0, p + 1);
          }
          const C = 0,
            h = 1,
            d = 2,
            T = 3,
            E = 4,
            j = 1,
            r = 2;
          function w(l, p) {
            const g = ce(l, 0);
            if (g === l.length) return l;
            p || (l = l.slice());
            for (let y = g; y < l.length; y = ce(l, y + 1)) l[y] = oe(l[y], p);
            return l;
          }
          function ce(l, p) {
            for (let g = p; g < l.length; g++) if (!q(l[g])) return g;
            return l.length;
          }
          function q(l) {
            for (let p = 1; p < l.length; p++)
              if (l[p][C] < l[p - 1][C]) return !1;
            return !0;
          }
          function oe(l, p) {
            return p || (l = l.slice()), l.sort(ie);
          }
          function ie(l, p) {
            return l[C] - p[C];
          }
          let ye = !1;
          function ve(l, p, g, y) {
            for (; g <= y; ) {
              const Y = g + ((y - g) >> 1),
                W = l[Y][C] - p;
              if (W === 0) return (ye = !0), Y;
              W < 0 ? (g = Y + 1) : (y = Y - 1);
            }
            return (ye = !1), g - 1;
          }
          function P(l, p, g) {
            for (let y = g + 1; y < l.length && l[y][C] === p; g = y++);
            return g;
          }
          function Se(l, p, g) {
            for (let y = g - 1; y >= 0 && l[y][C] === p; g = y--);
            return g;
          }
          function Ce() {
            return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
          }
          function Ae(l, p, g, y) {
            const { lastKey: Y, lastNeedle: W, lastIndex: he } = g;
            let Ee = 0,
              le = l.length - 1;
            if (y === Y) {
              if (p === W) return (ye = he !== -1 && l[he][C] === p), he;
              p >= W ? (Ee = he === -1 ? 0 : he) : (le = he);
            }
            return (
              (g.lastKey = y),
              (g.lastNeedle = p),
              (g.lastIndex = ve(l, p, Ee, le))
            );
          }
          function Fe(l, p) {
            const g = p.map(Ke);
            for (let y = 0; y < l.length; y++) {
              const Y = l[y];
              for (let W = 0; W < Y.length; W++) {
                const he = Y[W];
                if (he.length === 1) continue;
                const Ee = he[h],
                  le = he[d],
                  J = he[T],
                  Ge = g[Ee],
                  je = Ge[le] || (Ge[le] = []),
                  Ue = p[Ee];
                let ze = P(je, J, Ae(je, J, Ue, le));
                (Ue.lastIndex = ++ze), qe(je, ze, [J, y, he[C]]);
              }
            }
            return g;
          }
          function qe(l, p, g) {
            for (let y = l.length; y > p; y--) l[y] = l[y - 1];
            l[p] = g;
          }
          function Ke() {
            return { __proto__: null };
          }
          const K = function (l, p) {
            const g = R(l);
            if (!('sections' in g)) return new ue(g, p);
            const y = [],
              Y = [],
              W = [],
              he = [],
              Ee = [];
            m(g, p, y, Y, W, he, Ee, 0, 0, 1 / 0, 1 / 0);
            const le = {
              version: 3,
              file: g.file,
              names: he,
              sources: Y,
              sourcesContent: W,
              mappings: y,
              ignoreList: Ee,
            };
            return me(le);
          };
          function R(l) {
            return typeof l == 'string' ? JSON.parse(l) : l;
          }
          function m(l, p, g, y, Y, W, he, Ee, le, J, Ge) {
            const { sections: je } = l;
            for (let Ue = 0; Ue < je.length; Ue++) {
              const { map: ze, offset: at } = je[Ue];
              let gt = J,
                bt = Ge;
              if (Ue + 1 < je.length) {
                const _t = je[Ue + 1].offset;
                (gt = Math.min(J, Ee + _t.line)),
                  gt === J
                    ? (bt = Math.min(Ge, le + _t.column))
                    : gt < J && (bt = le + _t.column);
              }
              v(ze, p, g, y, Y, W, he, Ee + at.line, le + at.column, gt, bt);
            }
          }
          function v(l, p, g, y, Y, W, he, Ee, le, J, Ge) {
            const je = R(l);
            if ('sections' in je) return m(...arguments);
            const Ue = new ue(je, p),
              ze = y.length,
              at = W.length,
              gt = se(Ue),
              { resolvedSources: bt, sourcesContent: _t, ignoreList: qt } = Ue;
            if ((de(y, bt), de(W, Ue.names), _t)) de(Y, _t);
            else for (let nt = 0; nt < bt.length; nt++) Y.push(null);
            if (qt) for (let nt = 0; nt < qt.length; nt++) he.push(qt[nt] + ze);
            for (let nt = 0; nt < gt.length; nt++) {
              const Xt = Ee + nt;
              if (Xt > J) return;
              const zt = $(g, Xt),
                Pe = nt === 0 ? le : 0,
                hn = gt[nt];
              for (let Nt = 0; Nt < hn.length; Nt++) {
                const yt = hn[Nt],
                  Rt = Pe + yt[C];
                if (Xt === J && Rt >= Ge) return;
                if (yt.length === 1) {
                  zt.push([Rt]);
                  continue;
                }
                const pn = ze + yt[h],
                  mn = yt[d],
                  dn = yt[T];
                zt.push(
                  yt.length === 4
                    ? [Rt, pn, mn, dn]
                    : [Rt, pn, mn, dn, at + yt[E]],
                );
              }
            }
          }
          function de(l, p) {
            for (let g = 0; g < p.length; g++) l.push(p[g]);
          }
          function $(l, p) {
            for (let g = l.length; g <= p; g++) l[g] = [];
            return l[p];
          }
          const U = '`line` must be greater than 0 (lines start at line 1)',
            G =
              '`column` must be greater than or equal to 0 (columns start at column 0)',
            M = -1,
            pe = 1;
          class ue {
            constructor(p, g) {
              const y = typeof p == 'string';
              if (!y && p._decodedMemo) return p;
              const Y = y ? JSON.parse(p) : p,
                {
                  version: W,
                  file: he,
                  names: Ee,
                  sourceRoot: le,
                  sources: J,
                  sourcesContent: Ge,
                } = Y;
              (this.version = W),
                (this.file = he),
                (this.names = Ee || []),
                (this.sourceRoot = le),
                (this.sources = J),
                (this.sourcesContent = Ge),
                (this.ignoreList =
                  Y.ignoreList || Y.x_google_ignoreList || void 0);
              const je = O(le || '', X(g));
              this.resolvedSources = J.map((ze) => O(ze || '', je));
              const { mappings: Ue } = Y;
              typeof Ue == 'string'
                ? ((this._encoded = Ue), (this._decoded = void 0))
                : ((this._encoded = void 0), (this._decoded = w(Ue, y))),
                (this._decodedMemo = Ce()),
                (this._bySources = void 0),
                (this._bySourceMemos = void 0);
            }
          }
          function re(l) {
            return l;
          }
          function N(l) {
            var p, g;
            return (p = (g = l)._encoded) !== null && p !== void 0
              ? p
              : (g._encoded = e.encode(l._decoded));
          }
          function se(l) {
            var p;
            return (p = l)._decoded || (p._decoded = e.decode(l._encoded));
          }
          function Ne(l, p, g) {
            const y = se(l);
            if (p >= y.length) return null;
            const Y = y[p],
              W = o(Y, l._decodedMemo, p, g, pe);
            return W === -1 ? null : Y[W];
          }
          function b(l, p) {
            let { line: g, column: y, bias: Y } = p;
            if ((g--, g < 0)) throw new Error(U);
            if (y < 0) throw new Error(G);
            const W = se(l);
            if (g >= W.length) return x(null, null, null, null);
            const he = W[g],
              Ee = o(he, l._decodedMemo, g, y, Y || pe);
            if (Ee === -1) return x(null, null, null, null);
            const le = he[Ee];
            if (le.length === 1) return x(null, null, null, null);
            const { names: J, resolvedSources: Ge } = l;
            return x(
              Ge[le[h]],
              le[d] + 1,
              le[T],
              le.length === 5 ? J[le[E]] : null,
            );
          }
          function S(l, p) {
            const { source: g, line: y, column: Y, bias: W } = p;
            return a(l, g, y, Y, W || pe, !1);
          }
          function L(l, p) {
            const { source: g, line: y, column: Y, bias: W } = p;
            return a(l, g, y, Y, W || M, !0);
          }
          function D(l, p) {
            const g = se(l),
              { names: y, resolvedSources: Y } = l;
            for (let W = 0; W < g.length; W++) {
              const he = g[W];
              for (let Ee = 0; Ee < he.length; Ee++) {
                const le = he[Ee],
                  J = W + 1,
                  Ge = le[0];
                let je = null,
                  Ue = null,
                  ze = null,
                  at = null;
                le.length !== 1 &&
                  ((je = Y[le[1]]), (Ue = le[2] + 1), (ze = le[3])),
                  le.length === 5 && (at = y[le[4]]),
                  p({
                    generatedLine: J,
                    generatedColumn: Ge,
                    source: je,
                    originalLine: Ue,
                    originalColumn: ze,
                    name: at,
                  });
              }
            }
          }
          function z(l, p) {
            const { sources: g, resolvedSources: y } = l;
            let Y = g.indexOf(p);
            return Y === -1 && (Y = y.indexOf(p)), Y;
          }
          function ae(l, p) {
            const { sourcesContent: g } = l;
            if (g == null) return null;
            const y = z(l, p);
            return y === -1 ? null : g[y];
          }
          function _(l, p) {
            const { ignoreList: g } = l;
            if (g == null) return !1;
            const y = z(l, p);
            return y === -1 ? !1 : g.includes(y);
          }
          function me(l, p) {
            const g = new ue(te(l, []), p);
            return (g._decoded = l.mappings), g;
          }
          function Re(l) {
            return te(l, se(l));
          }
          function Q(l) {
            return te(l, N(l));
          }
          function te(l, p) {
            return {
              version: l.version,
              file: l.file,
              names: l.names,
              sourceRoot: l.sourceRoot,
              sources: l.sources,
              sourcesContent: l.sourcesContent,
              mappings: p,
              ignoreList: l.ignoreList || l.x_google_ignoreList,
            };
          }
          function x(l, p, g, y) {
            return { source: l, line: p, column: g, name: y };
          }
          function Oe(l, p) {
            return { line: l, column: p };
          }
          function o(l, p, g, y, Y) {
            let W = Ae(l, y, p, g);
            return (
              ye ? (W = (Y === M ? P : Se)(l, y, W)) : Y === M && W++,
              W === -1 || W === l.length ? -1 : W
            );
          }
          function i(l, p, g, y, Y) {
            let W = o(l, p, g, y, pe);
            if ((!ye && Y === M && W++, W === -1 || W === l.length)) return [];
            const he = ye ? y : l[W][C];
            ye || (W = Se(l, he, W));
            const Ee = P(l, he, W),
              le = [];
            for (; W <= Ee; W++) {
              const J = l[W];
              le.push(Oe(J[j] + 1, J[r]));
            }
            return le;
          }
          function a(l, p, g, y, Y, W) {
            var he;
            if ((g--, g < 0)) throw new Error(U);
            if (y < 0) throw new Error(G);
            const { sources: Ee, resolvedSources: le } = l;
            let J = Ee.indexOf(p);
            if ((J === -1 && (J = le.indexOf(p)), J === -1))
              return W ? [] : Oe(null, null);
            const je = ((he = l)._bySources ||
              (he._bySources = Fe(se(l), (l._bySourceMemos = Ee.map(Ce)))))[J][
              g
            ];
            if (je == null) return W ? [] : Oe(null, null);
            const Ue = l._bySourceMemos[J];
            if (W) return i(je, Ue, g, y, Y);
            const ze = o(je, Ue, g, y, Y);
            if (ze === -1) return Oe(null, null);
            const at = je[ze];
            return Oe(at[j] + 1, at[r]);
          }
          (u.AnyMap = K),
            (u.GREATEST_LOWER_BOUND = pe),
            (u.LEAST_UPPER_BOUND = M),
            (u.TraceMap = ue),
            (u.allGeneratedPositionsFor = L),
            (u.decodedMap = Re),
            (u.decodedMappings = se),
            (u.eachMapping = D),
            (u.encodedMap = Q),
            (u.encodedMappings = N),
            (u.generatedPositionFor = S),
            (u.isIgnored = _),
            (u.originalPositionFor = b),
            (u.presortedDecodedMap = me),
            (u.sourceContentFor = ae),
            (u.traceSegment = Ne);
        });
      },
      37335: function (Le, I, H) {
        'use strict';
        H.r(I),
          H.d(I, {
            default: function () {
              return nl;
            },
          });
        var u;
        (function (t) {
          t[(t.NONE = 0)] = 'NONE';
          const s = 1;
          t[(t._abstract = s)] = '_abstract';
          const c = s + 1;
          t[(t._accessor = c)] = '_accessor';
          const f = c + 1;
          t[(t._as = f)] = '_as';
          const k = f + 1;
          t[(t._assert = k)] = '_assert';
          const A = k + 1;
          t[(t._asserts = A)] = '_asserts';
          const B = A + 1;
          t[(t._async = B)] = '_async';
          const ee = B + 1;
          t[(t._await = ee)] = '_await';
          const fe = ee + 1;
          t[(t._checks = fe)] = '_checks';
          const be = fe + 1;
          t[(t._constructor = be)] = '_constructor';
          const ge = be + 1;
          t[(t._declare = ge)] = '_declare';
          const ne = ge + 1;
          t[(t._enum = ne)] = '_enum';
          const we = ne + 1;
          t[(t._exports = we)] = '_exports';
          const De = we + 1;
          t[(t._from = De)] = '_from';
          const Ze = De + 1;
          t[(t._get = Ze)] = '_get';
          const He = Ze + 1;
          t[(t._global = He)] = '_global';
          const et = He + 1;
          t[(t._implements = et)] = '_implements';
          const Je = et + 1;
          t[(t._infer = Je)] = '_infer';
          const lt = Je + 1;
          t[(t._interface = lt)] = '_interface';
          const Qe = lt + 1;
          t[(t._is = Qe)] = '_is';
          const vt = Qe + 1;
          t[(t._keyof = vt)] = '_keyof';
          const wt = vt + 1;
          t[(t._mixins = wt)] = '_mixins';
          const Ct = wt + 1;
          t[(t._module = Ct)] = '_module';
          const mt = Ct + 1;
          t[(t._namespace = mt)] = '_namespace';
          const dt = mt + 1;
          t[(t._of = dt)] = '_of';
          const kt = dt + 1;
          t[(t._opaque = kt)] = '_opaque';
          const It = kt + 1;
          t[(t._out = It)] = '_out';
          const Z = It + 1;
          t[(t._override = Z)] = '_override';
          const F = Z + 1;
          t[(t._private = F)] = '_private';
          const V = F + 1;
          t[(t._protected = V)] = '_protected';
          const ke = V + 1;
          t[(t._proto = ke)] = '_proto';
          const Te = ke + 1;
          t[(t._public = Te)] = '_public';
          const _e = Te + 1;
          t[(t._readonly = _e)] = '_readonly';
          const Be = _e + 1;
          t[(t._require = Be)] = '_require';
          const Ve = Be + 1;
          t[(t._satisfies = Ve)] = '_satisfies';
          const We = Ve + 1;
          t[(t._set = We)] = '_set';
          const st = We + 1;
          t[(t._static = st)] = '_static';
          const tt = st + 1;
          t[(t._symbol = tt)] = '_symbol';
          const ot = tt + 1;
          t[(t._type = ot)] = '_type';
          const Yt = ot + 1;
          t[(t._unique = Yt)] = '_unique';
          const fn = Yt + 1;
          t[(t._using = fn)] = '_using';
        })(u || (u = {}));
        var e;
        (function (t) {
          t[(t.PRECEDENCE_MASK = 15)] = 'PRECEDENCE_MASK';
          const s = 16;
          t[(t.IS_KEYWORD = s)] = 'IS_KEYWORD';
          const c = 32;
          t[(t.IS_ASSIGN = c)] = 'IS_ASSIGN';
          const f = 64;
          t[(t.IS_RIGHT_ASSOCIATIVE = f)] = 'IS_RIGHT_ASSOCIATIVE';
          const k = 128;
          t[(t.IS_PREFIX = k)] = 'IS_PREFIX';
          const A = 256;
          t[(t.IS_POSTFIX = A)] = 'IS_POSTFIX';
          const B = 512;
          t[(t.IS_EXPRESSION_START = B)] = 'IS_EXPRESSION_START';
          const ee = 512;
          t[(t.num = ee)] = 'num';
          const fe = 1536;
          t[(t.bigint = fe)] = 'bigint';
          const be = 2560;
          t[(t.decimal = be)] = 'decimal';
          const ge = 3584;
          t[(t.regexp = ge)] = 'regexp';
          const ne = 4608;
          t[(t.string = ne)] = 'string';
          const we = 5632;
          t[(t.name = we)] = 'name';
          const De = 6144;
          t[(t.eof = De)] = 'eof';
          const Ze = 7680;
          t[(t.bracketL = Ze)] = 'bracketL';
          const He = 8192;
          t[(t.bracketR = He)] = 'bracketR';
          const et = 9728;
          t[(t.braceL = et)] = 'braceL';
          const Je = 10752;
          t[(t.braceBarL = Je)] = 'braceBarL';
          const lt = 11264;
          t[(t.braceR = lt)] = 'braceR';
          const Qe = 12288;
          t[(t.braceBarR = Qe)] = 'braceBarR';
          const vt = 13824;
          t[(t.parenL = vt)] = 'parenL';
          const wt = 14336;
          t[(t.parenR = wt)] = 'parenR';
          const Ct = 15360;
          t[(t.comma = Ct)] = 'comma';
          const mt = 16384;
          t[(t.semi = mt)] = 'semi';
          const dt = 17408;
          t[(t.colon = dt)] = 'colon';
          const kt = 18432;
          t[(t.doubleColon = kt)] = 'doubleColon';
          const It = 19456;
          t[(t.dot = It)] = 'dot';
          const Z = 20480;
          t[(t.question = Z)] = 'question';
          const F = 21504;
          t[(t.questionDot = F)] = 'questionDot';
          const V = 22528;
          t[(t.arrow = V)] = 'arrow';
          const ke = 23552;
          t[(t.template = ke)] = 'template';
          const Te = 24576;
          t[(t.ellipsis = Te)] = 'ellipsis';
          const _e = 25600;
          t[(t.backQuote = _e)] = 'backQuote';
          const Be = 27136;
          t[(t.dollarBraceL = Be)] = 'dollarBraceL';
          const Ve = 27648;
          t[(t.at = Ve)] = 'at';
          const We = 29184;
          t[(t.hash = We)] = 'hash';
          const st = 29728;
          t[(t.eq = st)] = 'eq';
          const tt = 30752;
          t[(t.assign = tt)] = 'assign';
          const ot = 32640;
          t[(t.preIncDec = ot)] = 'preIncDec';
          const Yt = 33664;
          t[(t.postIncDec = Yt)] = 'postIncDec';
          const fn = 34432;
          t[(t.bang = fn)] = 'bang';
          const Er = 35456;
          t[(t.tilde = Er)] = 'tilde';
          const Ar = 35841;
          t[(t.pipeline = Ar)] = 'pipeline';
          const Sr = 36866;
          t[(t.nullishCoalescing = Sr)] = 'nullishCoalescing';
          const vr = 37890;
          t[(t.logicalOR = vr)] = 'logicalOR';
          const Cr = 38915;
          t[(t.logicalAND = Cr)] = 'logicalAND';
          const Nr = 39940;
          t[(t.bitwiseOR = Nr)] = 'bitwiseOR';
          const Rr = 40965;
          t[(t.bitwiseXOR = Rr)] = 'bitwiseXOR';
          const Pr = 41990;
          t[(t.bitwiseAND = Pr)] = 'bitwiseAND';
          const Lr = 43015;
          t[(t.equality = Lr)] = 'equality';
          const Dr = 44040;
          t[(t.lessThan = Dr)] = 'lessThan';
          const Fr = 45064;
          t[(t.greaterThan = Fr)] = 'greaterThan';
          const Or = 46088;
          t[(t.relationalOrEqual = Or)] = 'relationalOrEqual';
          const Mr = 47113;
          t[(t.bitShiftL = Mr)] = 'bitShiftL';
          const Br = 48137;
          t[(t.bitShiftR = Br)] = 'bitShiftR';
          const jr = 49802;
          t[(t.plus = jr)] = 'plus';
          const qr = 50826;
          t[(t.minus = qr)] = 'minus';
          const Ur = 51723;
          t[(t.modulo = Ur)] = 'modulo';
          const $r = 52235;
          t[(t.star = $r)] = 'star';
          const Vr = 53259;
          t[(t.slash = Vr)] = 'slash';
          const Wr = 54348;
          t[(t.exponent = Wr)] = 'exponent';
          const Hr = 55296;
          t[(t.jsxName = Hr)] = 'jsxName';
          const Gr = 56320;
          t[(t.jsxText = Gr)] = 'jsxText';
          const Yr = 57344;
          t[(t.jsxEmptyText = Yr)] = 'jsxEmptyText';
          const Xr = 58880;
          t[(t.jsxTagStart = Xr)] = 'jsxTagStart';
          const zr = 59392;
          t[(t.jsxTagEnd = zr)] = 'jsxTagEnd';
          const Jr = 60928;
          t[(t.typeParameterStart = Jr)] = 'typeParameterStart';
          const Qr = 61440;
          t[(t.nonNullAssertion = Qr)] = 'nonNullAssertion';
          const Zr = 62480;
          t[(t._break = Zr)] = '_break';
          const Kr = 63504;
          t[(t._case = Kr)] = '_case';
          const es = 64528;
          t[(t._catch = es)] = '_catch';
          const ts = 65552;
          t[(t._continue = ts)] = '_continue';
          const ns = 66576;
          t[(t._debugger = ns)] = '_debugger';
          const rs = 67600;
          t[(t._default = rs)] = '_default';
          const ss = 68624;
          t[(t._do = ss)] = '_do';
          const os = 69648;
          t[(t._else = os)] = '_else';
          const is = 70672;
          t[(t._finally = is)] = '_finally';
          const as = 71696;
          t[(t._for = as)] = '_for';
          const cs = 73232;
          t[(t._function = cs)] = '_function';
          const ls = 73744;
          t[(t._if = ls)] = '_if';
          const us = 74768;
          t[(t._return = us)] = '_return';
          const fs = 75792;
          t[(t._switch = fs)] = '_switch';
          const hs = 77456;
          t[(t._throw = hs)] = '_throw';
          const ps = 77840;
          t[(t._try = ps)] = '_try';
          const ms = 78864;
          t[(t._var = ms)] = '_var';
          const ds = 79888;
          t[(t._let = ds)] = '_let';
          const ks = 80912;
          t[(t._const = ks)] = '_const';
          const gs = 81936;
          t[(t._while = gs)] = '_while';
          const _s = 82960;
          t[(t._with = _s)] = '_with';
          const ys = 84496;
          t[(t._new = ys)] = '_new';
          const xs = 85520;
          t[(t._this = xs)] = '_this';
          const ws = 86544;
          t[(t._super = ws)] = '_super';
          const Is = 87568;
          t[(t._class = Is)] = '_class';
          const bs = 88080;
          t[(t._extends = bs)] = '_extends';
          const Ts = 89104;
          t[(t._export = Ts)] = '_export';
          const Es = 90640;
          t[(t._import = Es)] = '_import';
          const As = 91664;
          t[(t._yield = As)] = '_yield';
          const Ss = 92688;
          t[(t._null = Ss)] = '_null';
          const vs = 93712;
          t[(t._true = vs)] = '_true';
          const Cs = 94736;
          t[(t._false = Cs)] = '_false';
          const Ns = 95256;
          t[(t._in = Ns)] = '_in';
          const Rs = 96280;
          t[(t._instanceof = Rs)] = '_instanceof';
          const Ps = 97936;
          t[(t._typeof = Ps)] = '_typeof';
          const Ls = 98960;
          t[(t._void = Ls)] = '_void';
          const rl = 99984;
          t[(t._delete = rl)] = '_delete';
          const sl = 100880;
          t[(t._async = sl)] = '_async';
          const ol = 101904;
          t[(t._get = ol)] = '_get';
          const il = 102928;
          t[(t._set = il)] = '_set';
          const al = 103952;
          t[(t._declare = al)] = '_declare';
          const cl = 104976;
          t[(t._readonly = cl)] = '_readonly';
          const ll = 106e3;
          t[(t._abstract = ll)] = '_abstract';
          const ul = 107024;
          t[(t._static = ul)] = '_static';
          const fl = 107536;
          t[(t._public = fl)] = '_public';
          const hl = 108560;
          t[(t._private = hl)] = '_private';
          const pl = 109584;
          t[(t._protected = pl)] = '_protected';
          const ml = 110608;
          t[(t._override = ml)] = '_override';
          const dl = 112144;
          t[(t._as = dl)] = '_as';
          const kl = 113168;
          t[(t._enum = kl)] = '_enum';
          const gl = 114192;
          t[(t._type = gl)] = '_type';
          const _l = 115216;
          t[(t._implements = _l)] = '_implements';
        })(e || (e = {}));
        function Ie(t) {
          switch (t) {
            case e.num:
              return 'num';
            case e.bigint:
              return 'bigint';
            case e.decimal:
              return 'decimal';
            case e.regexp:
              return 'regexp';
            case e.string:
              return 'string';
            case e.name:
              return 'name';
            case e.eof:
              return 'eof';
            case e.bracketL:
              return '[';
            case e.bracketR:
              return ']';
            case e.braceL:
              return '{';
            case e.braceBarL:
              return '{|';
            case e.braceR:
              return '}';
            case e.braceBarR:
              return '|}';
            case e.parenL:
              return '(';
            case e.parenR:
              return ')';
            case e.comma:
              return ',';
            case e.semi:
              return ';';
            case e.colon:
              return ':';
            case e.doubleColon:
              return '::';
            case e.dot:
              return '.';
            case e.question:
              return '?';
            case e.questionDot:
              return '?.';
            case e.arrow:
              return '=>';
            case e.template:
              return 'template';
            case e.ellipsis:
              return '...';
            case e.backQuote:
              return '`';
            case e.dollarBraceL:
              return '${';
            case e.at:
              return '@';
            case e.hash:
              return '#';
            case e.eq:
              return '=';
            case e.assign:
              return '_=';
            case e.preIncDec:
              return '++/--';
            case e.postIncDec:
              return '++/--';
            case e.bang:
              return '!';
            case e.tilde:
              return '~';
            case e.pipeline:
              return '|>';
            case e.nullishCoalescing:
              return '??';
            case e.logicalOR:
              return '||';
            case e.logicalAND:
              return '&&';
            case e.bitwiseOR:
              return '|';
            case e.bitwiseXOR:
              return '^';
            case e.bitwiseAND:
              return '&';
            case e.equality:
              return '==/!=';
            case e.lessThan:
              return '<';
            case e.greaterThan:
              return '>';
            case e.relationalOrEqual:
              return '<=/>=';
            case e.bitShiftL:
              return '<<';
            case e.bitShiftR:
              return '>>/>>>';
            case e.plus:
              return '+';
            case e.minus:
              return '-';
            case e.modulo:
              return '%';
            case e.star:
              return '*';
            case e.slash:
              return '/';
            case e.exponent:
              return '**';
            case e.jsxName:
              return 'jsxName';
            case e.jsxText:
              return 'jsxText';
            case e.jsxEmptyText:
              return 'jsxEmptyText';
            case e.jsxTagStart:
              return 'jsxTagStart';
            case e.jsxTagEnd:
              return 'jsxTagEnd';
            case e.typeParameterStart:
              return 'typeParameterStart';
            case e.nonNullAssertion:
              return 'nonNullAssertion';
            case e._break:
              return 'break';
            case e._case:
              return 'case';
            case e._catch:
              return 'catch';
            case e._continue:
              return 'continue';
            case e._debugger:
              return 'debugger';
            case e._default:
              return 'default';
            case e._do:
              return 'do';
            case e._else:
              return 'else';
            case e._finally:
              return 'finally';
            case e._for:
              return 'for';
            case e._function:
              return 'function';
            case e._if:
              return 'if';
            case e._return:
              return 'return';
            case e._switch:
              return 'switch';
            case e._throw:
              return 'throw';
            case e._try:
              return 'try';
            case e._var:
              return 'var';
            case e._let:
              return 'let';
            case e._const:
              return 'const';
            case e._while:
              return 'while';
            case e._with:
              return 'with';
            case e._new:
              return 'new';
            case e._this:
              return 'this';
            case e._super:
              return 'super';
            case e._class:
              return 'class';
            case e._extends:
              return 'extends';
            case e._export:
              return 'export';
            case e._import:
              return 'import';
            case e._yield:
              return 'yield';
            case e._null:
              return 'null';
            case e._true:
              return 'true';
            case e._false:
              return 'false';
            case e._in:
              return 'in';
            case e._instanceof:
              return 'instanceof';
            case e._typeof:
              return 'typeof';
            case e._void:
              return 'void';
            case e._delete:
              return 'delete';
            case e._async:
              return 'async';
            case e._get:
              return 'get';
            case e._set:
              return 'set';
            case e._declare:
              return 'declare';
            case e._readonly:
              return 'readonly';
            case e._abstract:
              return 'abstract';
            case e._static:
              return 'static';
            case e._public:
              return 'public';
            case e._private:
              return 'private';
            case e._protected:
              return 'protected';
            case e._override:
              return 'override';
            case e._as:
              return 'as';
            case e._enum:
              return 'enum';
            case e._type:
              return 'type';
            case e._implements:
              return 'implements';
            default:
              return '';
          }
        }
        class O {
          constructor(n, s, c) {
            (this.startTokenIndex = n),
              (this.endTokenIndex = s),
              (this.isFunctionScope = c);
          }
        }
        class X {
          constructor(n, s, c, f, k, A, B, ee, fe, be, ge, ne, we) {
            (this.potentialArrowAt = n),
              (this.noAnonFunctionType = s),
              (this.inDisallowConditionalTypesContext = c),
              (this.tokensLength = f),
              (this.scopesLength = k),
              (this.pos = A),
              (this.type = B),
              (this.contextualKeyword = ee),
              (this.start = fe),
              (this.end = be),
              (this.isType = ge),
              (this.scopeDepth = ne),
              (this.error = we);
          }
        }
        class C {
          constructor() {
            C.prototype.__init.call(this),
              C.prototype.__init2.call(this),
              C.prototype.__init3.call(this),
              C.prototype.__init4.call(this),
              C.prototype.__init5.call(this),
              C.prototype.__init6.call(this),
              C.prototype.__init7.call(this),
              C.prototype.__init8.call(this),
              C.prototype.__init9.call(this),
              C.prototype.__init10.call(this),
              C.prototype.__init11.call(this),
              C.prototype.__init12.call(this),
              C.prototype.__init13.call(this);
          }
          __init() {
            this.potentialArrowAt = -1;
          }
          __init2() {
            this.noAnonFunctionType = !1;
          }
          __init3() {
            this.inDisallowConditionalTypesContext = !1;
          }
          __init4() {
            this.tokens = [];
          }
          __init5() {
            this.scopes = [];
          }
          __init6() {
            this.pos = 0;
          }
          __init7() {
            this.type = e.eof;
          }
          __init8() {
            this.contextualKeyword = u.NONE;
          }
          __init9() {
            this.start = 0;
          }
          __init10() {
            this.end = 0;
          }
          __init11() {
            this.isType = !1;
          }
          __init12() {
            this.scopeDepth = 0;
          }
          __init13() {
            this.error = null;
          }
          snapshot() {
            return new X(
              this.potentialArrowAt,
              this.noAnonFunctionType,
              this.inDisallowConditionalTypesContext,
              this.tokens.length,
              this.scopes.length,
              this.pos,
              this.type,
              this.contextualKeyword,
              this.start,
              this.end,
              this.isType,
              this.scopeDepth,
              this.error,
            );
          }
          restoreFromSnapshot(n) {
            (this.potentialArrowAt = n.potentialArrowAt),
              (this.noAnonFunctionType = n.noAnonFunctionType),
              (this.inDisallowConditionalTypesContext =
                n.inDisallowConditionalTypesContext),
              (this.tokens.length = n.tokensLength),
              (this.scopes.length = n.scopesLength),
              (this.pos = n.pos),
              (this.type = n.type),
              (this.contextualKeyword = n.contextualKeyword),
              (this.start = n.start),
              (this.end = n.end),
              (this.isType = n.isType),
              (this.scopeDepth = n.scopeDepth),
              (this.error = n.error);
          }
        }
        var h;
        (function (t) {
          t[(t.backSpace = 8)] = 'backSpace';
          const s = 10;
          t[(t.lineFeed = s)] = 'lineFeed';
          const c = 9;
          t[(t.tab = c)] = 'tab';
          const f = 13;
          t[(t.carriageReturn = f)] = 'carriageReturn';
          const k = 14;
          t[(t.shiftOut = k)] = 'shiftOut';
          const A = 32;
          t[(t.space = A)] = 'space';
          const B = 33;
          t[(t.exclamationMark = B)] = 'exclamationMark';
          const ee = 34;
          t[(t.quotationMark = ee)] = 'quotationMark';
          const fe = 35;
          t[(t.numberSign = fe)] = 'numberSign';
          const be = 36;
          t[(t.dollarSign = be)] = 'dollarSign';
          const ge = 37;
          t[(t.percentSign = ge)] = 'percentSign';
          const ne = 38;
          t[(t.ampersand = ne)] = 'ampersand';
          const we = 39;
          t[(t.apostrophe = we)] = 'apostrophe';
          const De = 40;
          t[(t.leftParenthesis = De)] = 'leftParenthesis';
          const Ze = 41;
          t[(t.rightParenthesis = Ze)] = 'rightParenthesis';
          const He = 42;
          t[(t.asterisk = He)] = 'asterisk';
          const et = 43;
          t[(t.plusSign = et)] = 'plusSign';
          const Je = 44;
          t[(t.comma = Je)] = 'comma';
          const lt = 45;
          t[(t.dash = lt)] = 'dash';
          const Qe = 46;
          t[(t.dot = Qe)] = 'dot';
          const vt = 47;
          t[(t.slash = vt)] = 'slash';
          const wt = 48;
          t[(t.digit0 = wt)] = 'digit0';
          const Ct = 49;
          t[(t.digit1 = Ct)] = 'digit1';
          const mt = 50;
          t[(t.digit2 = mt)] = 'digit2';
          const dt = 51;
          t[(t.digit3 = dt)] = 'digit3';
          const kt = 52;
          t[(t.digit4 = kt)] = 'digit4';
          const It = 53;
          t[(t.digit5 = It)] = 'digit5';
          const Z = 54;
          t[(t.digit6 = Z)] = 'digit6';
          const F = 55;
          t[(t.digit7 = F)] = 'digit7';
          const V = 56;
          t[(t.digit8 = V)] = 'digit8';
          const ke = 57;
          t[(t.digit9 = ke)] = 'digit9';
          const Te = 58;
          t[(t.colon = Te)] = 'colon';
          const _e = 59;
          t[(t.semicolon = _e)] = 'semicolon';
          const Be = 60;
          t[(t.lessThan = Be)] = 'lessThan';
          const Ve = 61;
          t[(t.equalsTo = Ve)] = 'equalsTo';
          const We = 62;
          t[(t.greaterThan = We)] = 'greaterThan';
          const st = 63;
          t[(t.questionMark = st)] = 'questionMark';
          const tt = 64;
          t[(t.atSign = tt)] = 'atSign';
          const ot = 65;
          t[(t.uppercaseA = ot)] = 'uppercaseA';
          const Yt = 66;
          t[(t.uppercaseB = Yt)] = 'uppercaseB';
          const fn = 67;
          t[(t.uppercaseC = fn)] = 'uppercaseC';
          const Er = 68;
          t[(t.uppercaseD = Er)] = 'uppercaseD';
          const Ar = 69;
          t[(t.uppercaseE = Ar)] = 'uppercaseE';
          const Sr = 70;
          t[(t.uppercaseF = Sr)] = 'uppercaseF';
          const vr = 71;
          t[(t.uppercaseG = vr)] = 'uppercaseG';
          const Cr = 72;
          t[(t.uppercaseH = Cr)] = 'uppercaseH';
          const Nr = 73;
          t[(t.uppercaseI = Nr)] = 'uppercaseI';
          const Rr = 74;
          t[(t.uppercaseJ = Rr)] = 'uppercaseJ';
          const Pr = 75;
          t[(t.uppercaseK = Pr)] = 'uppercaseK';
          const Lr = 76;
          t[(t.uppercaseL = Lr)] = 'uppercaseL';
          const Dr = 77;
          t[(t.uppercaseM = Dr)] = 'uppercaseM';
          const Fr = 78;
          t[(t.uppercaseN = Fr)] = 'uppercaseN';
          const Or = 79;
          t[(t.uppercaseO = Or)] = 'uppercaseO';
          const Mr = 80;
          t[(t.uppercaseP = Mr)] = 'uppercaseP';
          const Br = 81;
          t[(t.uppercaseQ = Br)] = 'uppercaseQ';
          const jr = 82;
          t[(t.uppercaseR = jr)] = 'uppercaseR';
          const qr = 83;
          t[(t.uppercaseS = qr)] = 'uppercaseS';
          const Ur = 84;
          t[(t.uppercaseT = Ur)] = 'uppercaseT';
          const $r = 85;
          t[(t.uppercaseU = $r)] = 'uppercaseU';
          const Vr = 86;
          t[(t.uppercaseV = Vr)] = 'uppercaseV';
          const Wr = 87;
          t[(t.uppercaseW = Wr)] = 'uppercaseW';
          const Hr = 88;
          t[(t.uppercaseX = Hr)] = 'uppercaseX';
          const Gr = 89;
          t[(t.uppercaseY = Gr)] = 'uppercaseY';
          const Yr = 90;
          t[(t.uppercaseZ = Yr)] = 'uppercaseZ';
          const Xr = 91;
          t[(t.leftSquareBracket = Xr)] = 'leftSquareBracket';
          const zr = 92;
          t[(t.backslash = zr)] = 'backslash';
          const Jr = 93;
          t[(t.rightSquareBracket = Jr)] = 'rightSquareBracket';
          const Qr = 94;
          t[(t.caret = Qr)] = 'caret';
          const Zr = 95;
          t[(t.underscore = Zr)] = 'underscore';
          const Kr = 96;
          t[(t.graveAccent = Kr)] = 'graveAccent';
          const es = 97;
          t[(t.lowercaseA = es)] = 'lowercaseA';
          const ts = 98;
          t[(t.lowercaseB = ts)] = 'lowercaseB';
          const ns = 99;
          t[(t.lowercaseC = ns)] = 'lowercaseC';
          const rs = 100;
          t[(t.lowercaseD = rs)] = 'lowercaseD';
          const ss = 101;
          t[(t.lowercaseE = ss)] = 'lowercaseE';
          const os = 102;
          t[(t.lowercaseF = os)] = 'lowercaseF';
          const is = 103;
          t[(t.lowercaseG = is)] = 'lowercaseG';
          const as = 104;
          t[(t.lowercaseH = as)] = 'lowercaseH';
          const cs = 105;
          t[(t.lowercaseI = cs)] = 'lowercaseI';
          const ls = 106;
          t[(t.lowercaseJ = ls)] = 'lowercaseJ';
          const us = 107;
          t[(t.lowercaseK = us)] = 'lowercaseK';
          const fs = 108;
          t[(t.lowercaseL = fs)] = 'lowercaseL';
          const hs = 109;
          t[(t.lowercaseM = hs)] = 'lowercaseM';
          const ps = 110;
          t[(t.lowercaseN = ps)] = 'lowercaseN';
          const ms = 111;
          t[(t.lowercaseO = ms)] = 'lowercaseO';
          const ds = 112;
          t[(t.lowercaseP = ds)] = 'lowercaseP';
          const ks = 113;
          t[(t.lowercaseQ = ks)] = 'lowercaseQ';
          const gs = 114;
          t[(t.lowercaseR = gs)] = 'lowercaseR';
          const _s = 115;
          t[(t.lowercaseS = _s)] = 'lowercaseS';
          const ys = 116;
          t[(t.lowercaseT = ys)] = 'lowercaseT';
          const xs = 117;
          t[(t.lowercaseU = xs)] = 'lowercaseU';
          const ws = 118;
          t[(t.lowercaseV = ws)] = 'lowercaseV';
          const Is = 119;
          t[(t.lowercaseW = Is)] = 'lowercaseW';
          const bs = 120;
          t[(t.lowercaseX = bs)] = 'lowercaseX';
          const Ts = 121;
          t[(t.lowercaseY = Ts)] = 'lowercaseY';
          const Es = 122;
          t[(t.lowercaseZ = Es)] = 'lowercaseZ';
          const As = 123;
          t[(t.leftCurlyBrace = As)] = 'leftCurlyBrace';
          const Ss = 124;
          t[(t.verticalBar = Ss)] = 'verticalBar';
          const vs = 125;
          t[(t.rightCurlyBrace = vs)] = 'rightCurlyBrace';
          const Cs = 126;
          t[(t.tilde = Cs)] = 'tilde';
          const Ns = 160;
          t[(t.nonBreakingSpace = Ns)] = 'nonBreakingSpace';
          const Rs = 5760;
          t[(t.oghamSpaceMark = Rs)] = 'oghamSpaceMark';
          const Ps = 8232;
          t[(t.lineSeparator = Ps)] = 'lineSeparator';
          const Ls = 8233;
          t[(t.paragraphSeparator = Ls)] = 'paragraphSeparator';
        })(h || (h = {}));
        function d(t) {
          return (
            (t >= h.digit0 && t <= h.digit9) ||
            (t >= h.lowercaseA && t <= h.lowercaseF) ||
            (t >= h.uppercaseA && t <= h.uppercaseF)
          );
        }
        let T, E, j, r, w, ce;
        function q() {
          return ce++;
        }
        function oe(t) {
          if ('pos' in t) {
            const n = ye(t.pos);
            (t.message += ` (${n.line}:${n.column})`), (t.loc = n);
          }
          return t;
        }
        class ie {
          constructor(n, s) {
            (this.line = n), (this.column = s);
          }
        }
        function ye(t) {
          let n = 1,
            s = 1;
          for (let c = 0; c < t; c++)
            w.charCodeAt(c) === h.lineFeed ? (n++, (s = 1)) : s++;
          return new ie(n, s);
        }
        function ve(t, n, s, c) {
          (w = t), (r = new C()), (ce = 1), (T = n), (E = s), (j = c);
        }
        function P(t) {
          return r.contextualKeyword === t;
        }
        function Se(t) {
          const n = l();
          return n.type === e.name && n.contextualKeyword === t;
        }
        function Ce(t) {
          return r.contextualKeyword === t && x(e.name);
        }
        function Ae(t) {
          Ce(t) || v();
        }
        function Fe() {
          return o(e.eof) || o(e.braceR) || qe();
        }
        function qe() {
          const t = r.tokens[r.tokens.length - 1],
            n = t ? t.end : 0;
          for (let s = n; s < r.start; s++) {
            const c = w.charCodeAt(s);
            if (
              c === h.lineFeed ||
              c === h.carriageReturn ||
              c === 8232 ||
              c === 8233
            )
              return !0;
          }
          return !1;
        }
        function Ke() {
          const t = p();
          for (let n = r.end; n < t; n++) {
            const s = w.charCodeAt(n);
            if (
              s === h.lineFeed ||
              s === h.carriageReturn ||
              s === 8232 ||
              s === 8233
            )
              return !0;
          }
          return !1;
        }
        function K() {
          return x(e.semi) || Fe();
        }
        function R() {
          K() || v('Unexpected token, expected ";"');
        }
        function m(t) {
          x(t) || v(`Unexpected token, expected "${Ie(t)}"`);
        }
        function v(t = 'Unexpected token', n = r.start) {
          if (r.error) return;
          const s = new SyntaxError(t);
          (s.pos = n), (r.error = s), (r.pos = w.length), J(e.eof);
        }
        const de = [
            9,
            11,
            12,
            h.space,
            h.nonBreakingSpace,
            h.oghamSpaceMark,
            8192,
            8193,
            8194,
            8195,
            8196,
            8197,
            8198,
            8199,
            8200,
            8201,
            8202,
            8239,
            8287,
            12288,
            65279,
          ],
          $ = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
          U = new Uint8Array(65536);
        for (const t of de) U[t] = 1;
        function G(t) {
          if (t < 48) return t === 36;
          if (t < 58) return !0;
          if (t < 65) return !1;
          if (t < 91) return !0;
          if (t < 97) return t === 95;
          if (t < 123) return !0;
          if (t < 128) return !1;
          throw new Error('Should not be called with non-ASCII char code.');
        }
        const M = new Uint8Array(65536);
        for (let t = 0; t < 128; t++) M[t] = G(t) ? 1 : 0;
        for (let t = 128; t < 65536; t++) M[t] = 1;
        for (const t of de) M[t] = 0;
        (M[8232] = 0), (M[8233] = 0);
        const pe = M.slice();
        for (let t = h.digit0; t <= h.digit9; t++) pe[t] = 0;
        const ue = new Int32Array([
          -1,
          27,
          783,
          918,
          1755,
          2376,
          2862,
          3483,
          -1,
          3699,
          -1,
          4617,
          4752,
          4833,
          5130,
          5508,
          5940,
          -1,
          6480,
          6939,
          7749,
          8181,
          8451,
          8613,
          -1,
          8829,
          -1,
          -1,
          -1,
          54,
          243,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          432,
          -1,
          -1,
          -1,
          675,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          81,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          108,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          135,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          162,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          189,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          216,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._abstract << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          270,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          297,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          324,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          351,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          378,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          405,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._accessor << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._as << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          459,
          -1,
          -1,
          -1,
          -1,
          -1,
          594,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          486,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          513,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          540,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._assert << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          567,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._asserts << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          621,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          648,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._async << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          702,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          729,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          756,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._await << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          810,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          837,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          864,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          891,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._break << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          945,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1107,
          -1,
          -1,
          -1,
          1242,
          -1,
          -1,
          1350,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          972,
          1026,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          999,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._case << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1053,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1080,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._catch << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1134,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1161,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1188,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1215,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._checks << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1269,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1296,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1323,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._class << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1377,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1404,
          1620,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1431,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._const << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1458,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1485,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1512,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1539,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1566,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1593,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._constructor << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1647,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1674,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1701,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1728,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._continue << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1782,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2349,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1809,
          1971,
          -1,
          -1,
          2106,
          -1,
          -1,
          -1,
          -1,
          -1,
          2241,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1836,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1863,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1890,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1917,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1944,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._debugger << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1998,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2025,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2052,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2079,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._declare << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2133,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2160,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2187,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2214,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._default << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2268,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2295,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2322,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._delete << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._do << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2403,
          -1,
          2484,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2565,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2430,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2457,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._else << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2511,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2538,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._enum << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2592,
          -1,
          -1,
          -1,
          2727,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2619,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2646,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2673,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._export << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2700,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._exports << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2754,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2781,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2808,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2835,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._extends << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2889,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2997,
          -1,
          -1,
          -1,
          -1,
          -1,
          3159,
          -1,
          -1,
          3213,
          -1,
          -1,
          3294,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2916,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2943,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2970,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._false << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3024,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3051,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3078,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3105,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3132,
          -1,
          (e._finally << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3186,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._for << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3240,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3267,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._from << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3321,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3348,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3375,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3402,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3429,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3456,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._function << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3510,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3564,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3537,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._get << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3591,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3618,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3645,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3672,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._global << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3726,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3753,
          4077,
          -1,
          -1,
          -1,
          -1,
          4590,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._if << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3780,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3807,
          -1,
          -1,
          3996,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3834,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3861,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3888,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3915,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3942,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3969,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._implements << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4023,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4050,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._import << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._in << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4104,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4185,
          4401,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4131,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4158,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._infer << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4212,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4239,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4266,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4293,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4320,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4347,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4374,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._instanceof << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4428,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4455,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4482,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4509,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4536,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4563,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._interface << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._is << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4644,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4671,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4698,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4725,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._keyof << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4779,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4806,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._let << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4860,
          -1,
          -1,
          -1,
          -1,
          -1,
          4995,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4887,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4914,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4941,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4968,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._mixins << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5022,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5049,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5076,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5103,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._module << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5157,
          -1,
          -1,
          -1,
          5373,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5427,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5184,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5211,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5238,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5265,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5292,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5319,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5346,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._namespace << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5400,
          -1,
          -1,
          -1,
          (e._new << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5454,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5481,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._null << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5535,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5562,
          -1,
          -1,
          -1,
          -1,
          5697,
          5751,
          -1,
          -1,
          -1,
          -1,
          u._of << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5589,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5616,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5643,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5670,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._opaque << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5724,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._out << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5778,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5805,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5832,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5859,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5886,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5913,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._override << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5967,
          -1,
          -1,
          6345,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5994,
          -1,
          -1,
          -1,
          -1,
          -1,
          6129,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6021,
          -1,
          -1,
          -1,
          -1,
          -1,
          6048,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6075,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6102,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._private << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6156,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6183,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6318,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6210,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6237,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6264,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6291,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._protected << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._proto << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6372,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6399,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6426,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6453,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._public << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6507,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6534,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6696,
          -1,
          -1,
          6831,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6561,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6588,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6615,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6642,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6669,
          -1,
          u._readonly << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6723,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6750,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6777,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6804,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._require << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6858,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6885,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6912,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._return << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6966,
          -1,
          -1,
          -1,
          7182,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7236,
          7371,
          -1,
          7479,
          -1,
          7614,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6993,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7020,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7047,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7074,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7101,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7128,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7155,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._satisfies << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7209,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._set << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7263,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7290,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7317,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7344,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._static << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7398,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7425,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7452,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._super << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7506,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7533,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7560,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7587,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._switch << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7641,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7668,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7695,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7722,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._symbol << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7776,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7938,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8046,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7803,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7857,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7830,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._this << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7884,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7911,
          -1,
          -1,
          -1,
          (e._throw << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7965,
          -1,
          -1,
          -1,
          8019,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7992,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._true << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._try << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8073,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8100,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._type << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8127,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8154,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._typeof << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8208,
          -1,
          -1,
          -1,
          -1,
          8343,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8235,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8262,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8289,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8316,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._unique << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8370,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8397,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8424,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._using << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8478,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8532,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8505,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._var << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8559,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8586,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._void << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8640,
          8748,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8667,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8694,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8721,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._while << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8775,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8802,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._with << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8856,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8883,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8910,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8937,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._yield << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ]);
        function re() {
          let t = 0,
            n = 0,
            s = r.pos;
          for (
            ;
            s < w.length &&
            ((n = w.charCodeAt(s)), !(n < h.lowercaseA || n > h.lowercaseZ));

          ) {
            const f = ue[t + (n - h.lowercaseA) + 1];
            if (f === -1) break;
            (t = f), s++;
          }
          const c = ue[t];
          if (c > -1 && !M[n]) {
            (r.pos = s), c & 1 ? J(c >>> 1) : J(e.name, c >>> 1);
            return;
          }
          for (; s < w.length; ) {
            const f = w.charCodeAt(s);
            if (M[f]) s++;
            else if (f === h.backslash) {
              if (((s += 2), w.charCodeAt(s) === h.leftCurlyBrace)) {
                for (; s < w.length && w.charCodeAt(s) !== h.rightCurlyBrace; )
                  s++;
                s++;
              }
            } else if (f === h.atSign && w.charCodeAt(s + 1) === h.atSign)
              s += 2;
            else break;
          }
          (r.pos = s), J(e.name);
        }
        var N;
        (function (t) {
          t[(t.Access = 0)] = 'Access';
          const s = 1;
          t[(t.ExportAccess = s)] = 'ExportAccess';
          const c = s + 1;
          t[(t.TopLevelDeclaration = c)] = 'TopLevelDeclaration';
          const f = c + 1;
          t[(t.FunctionScopedDeclaration = f)] = 'FunctionScopedDeclaration';
          const k = f + 1;
          t[(t.BlockScopedDeclaration = k)] = 'BlockScopedDeclaration';
          const A = k + 1;
          t[(t.ObjectShorthandTopLevelDeclaration = A)] =
            'ObjectShorthandTopLevelDeclaration';
          const B = A + 1;
          t[(t.ObjectShorthandFunctionScopedDeclaration = B)] =
            'ObjectShorthandFunctionScopedDeclaration';
          const ee = B + 1;
          t[(t.ObjectShorthandBlockScopedDeclaration = ee)] =
            'ObjectShorthandBlockScopedDeclaration';
          const fe = ee + 1;
          t[(t.ObjectShorthand = fe)] = 'ObjectShorthand';
          const be = fe + 1;
          t[(t.ImportDeclaration = be)] = 'ImportDeclaration';
          const ge = be + 1;
          t[(t.ObjectKey = ge)] = 'ObjectKey';
          const ne = ge + 1;
          t[(t.ImportAccess = ne)] = 'ImportAccess';
        })(N || (N = {}));
        var se;
        (function (t) {
          t[(t.NoChildren = 0)] = 'NoChildren';
          const s = 1;
          t[(t.OneChild = s)] = 'OneChild';
          const c = s + 1;
          t[(t.StaticChildren = c)] = 'StaticChildren';
          const f = c + 1;
          t[(t.KeyAfterPropSpread = f)] = 'KeyAfterPropSpread';
        })(se || (se = {}));
        function Ne(t) {
          const n = t.identifierRole;
          return (
            n === N.TopLevelDeclaration ||
            n === N.FunctionScopedDeclaration ||
            n === N.BlockScopedDeclaration ||
            n === N.ObjectShorthandTopLevelDeclaration ||
            n === N.ObjectShorthandFunctionScopedDeclaration ||
            n === N.ObjectShorthandBlockScopedDeclaration
          );
        }
        function b(t) {
          const n = t.identifierRole;
          return (
            n === N.FunctionScopedDeclaration ||
            n === N.BlockScopedDeclaration ||
            n === N.ObjectShorthandFunctionScopedDeclaration ||
            n === N.ObjectShorthandBlockScopedDeclaration
          );
        }
        function S(t) {
          const n = t.identifierRole;
          return (
            n === N.TopLevelDeclaration ||
            n === N.ObjectShorthandTopLevelDeclaration ||
            n === N.ImportDeclaration
          );
        }
        function L(t) {
          const n = t.identifierRole;
          return (
            n === N.TopLevelDeclaration ||
            n === N.BlockScopedDeclaration ||
            n === N.ObjectShorthandTopLevelDeclaration ||
            n === N.ObjectShorthandBlockScopedDeclaration
          );
        }
        function D(t) {
          const n = t.identifierRole;
          return (
            n === N.FunctionScopedDeclaration ||
            n === N.ObjectShorthandFunctionScopedDeclaration
          );
        }
        function z(t) {
          return (
            t.identifierRole === N.ObjectShorthandTopLevelDeclaration ||
            t.identifierRole === N.ObjectShorthandBlockScopedDeclaration ||
            t.identifierRole === N.ObjectShorthandFunctionScopedDeclaration
          );
        }
        class ae {
          constructor() {
            (this.type = r.type),
              (this.contextualKeyword = r.contextualKeyword),
              (this.start = r.start),
              (this.end = r.end),
              (this.scopeDepth = r.scopeDepth),
              (this.isType = r.isType),
              (this.identifierRole = null),
              (this.jsxRole = null),
              (this.shadowsGlobal = !1),
              (this.isAsyncOperation = !1),
              (this.contextId = null),
              (this.rhsEndIndex = null),
              (this.isExpression = !1),
              (this.numNullishCoalesceStarts = 0),
              (this.numNullishCoalesceEnds = 0),
              (this.isOptionalChainStart = !1),
              (this.isOptionalChainEnd = !1),
              (this.subscriptStartIndex = null),
              (this.nullishStartIndex = null);
          }
        }
        function _() {
          r.tokens.push(new ae()), Y();
        }
        function me() {
          r.tokens.push(new ae()), (r.start = r.pos), mn();
        }
        function Re() {
          r.type === e.assign && --r.pos, hn();
        }
        function Q(t) {
          for (let s = r.tokens.length - t; s < r.tokens.length; s++)
            r.tokens[s].isType = !0;
          const n = r.isType;
          return (r.isType = !0), n;
        }
        function te(t) {
          r.isType = t;
        }
        function x(t) {
          return o(t) ? (_(), !0) : !1;
        }
        function Oe(t) {
          const n = r.isType;
          (r.isType = !0), x(t), (r.isType = n);
        }
        function o(t) {
          return r.type === t;
        }
        function i() {
          const t = r.snapshot();
          _();
          const n = r.type;
          return r.restoreFromSnapshot(t), n;
        }
        class a {
          constructor(n, s) {
            (this.type = n), (this.contextualKeyword = s);
          }
        }
        function l() {
          const t = r.snapshot();
          _();
          const n = r.type,
            s = r.contextualKeyword;
          return r.restoreFromSnapshot(t), new a(n, s);
        }
        function p() {
          return g(r.pos);
        }
        function g(t) {
          $.lastIndex = t;
          const n = $.exec(w);
          return t + n[0].length;
        }
        function y() {
          return w.charCodeAt(p());
        }
        function Y() {
          if ((le(), (r.start = r.pos), r.pos >= w.length)) {
            const t = r.tokens;
            t.length >= 2 &&
              t[t.length - 1].start >= w.length &&
              t[t.length - 2].start >= w.length &&
              v('Unexpectedly reached the end of input.'),
              J(e.eof);
            return;
          }
          W(w.charCodeAt(r.pos));
        }
        function W(t) {
          pe[t] ||
          t === h.backslash ||
          (t === h.atSign && w.charCodeAt(r.pos + 1) === h.atSign)
            ? re()
            : zt(t);
        }
        function he() {
          for (
            ;
            w.charCodeAt(r.pos) !== h.asterisk ||
            w.charCodeAt(r.pos + 1) !== h.slash;

          )
            if ((r.pos++, r.pos > w.length)) {
              v('Unterminated comment', r.pos - 2);
              return;
            }
          r.pos += 2;
        }
        function Ee(t) {
          let n = w.charCodeAt((r.pos += t));
          if (r.pos < w.length)
            for (
              ;
              n !== h.lineFeed &&
              n !== h.carriageReturn &&
              n !== h.lineSeparator &&
              n !== h.paragraphSeparator &&
              ++r.pos < w.length;

            )
              n = w.charCodeAt(r.pos);
        }
        function le() {
          for (; r.pos < w.length; ) {
            const t = w.charCodeAt(r.pos);
            switch (t) {
              case h.carriageReturn:
                w.charCodeAt(r.pos + 1) === h.lineFeed && ++r.pos;
              case h.lineFeed:
              case h.lineSeparator:
              case h.paragraphSeparator:
                ++r.pos;
                break;
              case h.slash:
                switch (w.charCodeAt(r.pos + 1)) {
                  case h.asterisk:
                    (r.pos += 2), he();
                    break;
                  case h.slash:
                    Ee(2);
                    break;
                  default:
                    return;
                }
                break;
              default:
                if (U[t]) ++r.pos;
                else return;
            }
          }
        }
        function J(t, n = u.NONE) {
          (r.end = r.pos), (r.type = t), (r.contextualKeyword = n);
        }
        function Ge() {
          const t = w.charCodeAt(r.pos + 1);
          if (t >= h.digit0 && t <= h.digit9) {
            Rt(!0);
            return;
          }
          t === h.dot && w.charCodeAt(r.pos + 2) === h.dot
            ? ((r.pos += 3), J(e.ellipsis))
            : (++r.pos, J(e.dot));
        }
        function je() {
          w.charCodeAt(r.pos + 1) === h.equalsTo
            ? Pe(e.assign, 2)
            : Pe(e.slash, 1);
        }
        function Ue(t) {
          let n = t === h.asterisk ? e.star : e.modulo,
            s = 1,
            c = w.charCodeAt(r.pos + 1);
          t === h.asterisk &&
            c === h.asterisk &&
            (s++, (c = w.charCodeAt(r.pos + 2)), (n = e.exponent)),
            c === h.equalsTo &&
              w.charCodeAt(r.pos + 2) !== h.greaterThan &&
              (s++, (n = e.assign)),
            Pe(n, s);
        }
        function ze(t) {
          const n = w.charCodeAt(r.pos + 1);
          if (n === t) {
            w.charCodeAt(r.pos + 2) === h.equalsTo
              ? Pe(e.assign, 3)
              : Pe(t === h.verticalBar ? e.logicalOR : e.logicalAND, 2);
            return;
          }
          if (t === h.verticalBar) {
            if (n === h.greaterThan) {
              Pe(e.pipeline, 2);
              return;
            } else if (n === h.rightCurlyBrace && j) {
              Pe(e.braceBarR, 2);
              return;
            }
          }
          if (n === h.equalsTo) {
            Pe(e.assign, 2);
            return;
          }
          Pe(t === h.verticalBar ? e.bitwiseOR : e.bitwiseAND, 1);
        }
        function at() {
          w.charCodeAt(r.pos + 1) === h.equalsTo
            ? Pe(e.assign, 2)
            : Pe(e.bitwiseXOR, 1);
        }
        function gt(t) {
          const n = w.charCodeAt(r.pos + 1);
          if (n === t) {
            Pe(e.preIncDec, 2);
            return;
          }
          n === h.equalsTo
            ? Pe(e.assign, 2)
            : t === h.plusSign
            ? Pe(e.plus, 1)
            : Pe(e.minus, 1);
        }
        function bt() {
          const t = w.charCodeAt(r.pos + 1);
          if (t === h.lessThan) {
            if (w.charCodeAt(r.pos + 2) === h.equalsTo) {
              Pe(e.assign, 3);
              return;
            }
            r.isType ? Pe(e.lessThan, 1) : Pe(e.bitShiftL, 2);
            return;
          }
          t === h.equalsTo ? Pe(e.relationalOrEqual, 2) : Pe(e.lessThan, 1);
        }
        function _t() {
          if (r.isType) {
            Pe(e.greaterThan, 1);
            return;
          }
          const t = w.charCodeAt(r.pos + 1);
          if (t === h.greaterThan) {
            const n = w.charCodeAt(r.pos + 2) === h.greaterThan ? 3 : 2;
            if (w.charCodeAt(r.pos + n) === h.equalsTo) {
              Pe(e.assign, n + 1);
              return;
            }
            Pe(e.bitShiftR, n);
            return;
          }
          t === h.equalsTo ? Pe(e.relationalOrEqual, 2) : Pe(e.greaterThan, 1);
        }
        function qt() {
          r.type === e.greaterThan && ((r.pos -= 1), _t());
        }
        function nt(t) {
          const n = w.charCodeAt(r.pos + 1);
          if (n === h.equalsTo) {
            Pe(e.equality, w.charCodeAt(r.pos + 2) === h.equalsTo ? 3 : 2);
            return;
          }
          if (t === h.equalsTo && n === h.greaterThan) {
            (r.pos += 2), J(e.arrow);
            return;
          }
          Pe(t === h.equalsTo ? e.eq : e.bang, 1);
        }
        function Xt() {
          const t = w.charCodeAt(r.pos + 1),
            n = w.charCodeAt(r.pos + 2);
          t === h.questionMark && !(j && r.isType)
            ? n === h.equalsTo
              ? Pe(e.assign, 3)
              : Pe(e.nullishCoalescing, 2)
            : t === h.dot && !(n >= h.digit0 && n <= h.digit9)
            ? ((r.pos += 2), J(e.questionDot))
            : (++r.pos, J(e.question));
        }
        function zt(t) {
          switch (t) {
            case h.numberSign:
              ++r.pos, J(e.hash);
              return;
            case h.dot:
              Ge();
              return;
            case h.leftParenthesis:
              ++r.pos, J(e.parenL);
              return;
            case h.rightParenthesis:
              ++r.pos, J(e.parenR);
              return;
            case h.semicolon:
              ++r.pos, J(e.semi);
              return;
            case h.comma:
              ++r.pos, J(e.comma);
              return;
            case h.leftSquareBracket:
              ++r.pos, J(e.bracketL);
              return;
            case h.rightSquareBracket:
              ++r.pos, J(e.bracketR);
              return;
            case h.leftCurlyBrace:
              j && w.charCodeAt(r.pos + 1) === h.verticalBar
                ? Pe(e.braceBarL, 2)
                : (++r.pos, J(e.braceL));
              return;
            case h.rightCurlyBrace:
              ++r.pos, J(e.braceR);
              return;
            case h.colon:
              w.charCodeAt(r.pos + 1) === h.colon
                ? Pe(e.doubleColon, 2)
                : (++r.pos, J(e.colon));
              return;
            case h.questionMark:
              Xt();
              return;
            case h.atSign:
              ++r.pos, J(e.at);
              return;
            case h.graveAccent:
              ++r.pos, J(e.backQuote);
              return;
            case h.digit0: {
              const n = w.charCodeAt(r.pos + 1);
              if (
                n === h.lowercaseX ||
                n === h.uppercaseX ||
                n === h.lowercaseO ||
                n === h.uppercaseO ||
                n === h.lowercaseB ||
                n === h.uppercaseB
              ) {
                yt();
                return;
              }
            }
            case h.digit1:
            case h.digit2:
            case h.digit3:
            case h.digit4:
            case h.digit5:
            case h.digit6:
            case h.digit7:
            case h.digit8:
            case h.digit9:
              Rt(!1);
              return;
            case h.quotationMark:
            case h.apostrophe:
              pn(t);
              return;
            case h.slash:
              je();
              return;
            case h.percentSign:
            case h.asterisk:
              Ue(t);
              return;
            case h.verticalBar:
            case h.ampersand:
              ze(t);
              return;
            case h.caret:
              at();
              return;
            case h.plusSign:
            case h.dash:
              gt(t);
              return;
            case h.lessThan:
              bt();
              return;
            case h.greaterThan:
              _t();
              return;
            case h.equalsTo:
            case h.exclamationMark:
              nt(t);
              return;
            case h.tilde:
              Pe(e.tilde, 1);
              return;
            default:
              break;
          }
          v(`Unexpected character '${String.fromCharCode(t)}'`, r.pos);
        }
        function Pe(t, n) {
          (r.pos += n), J(t);
        }
        function hn() {
          const t = r.pos;
          let n = !1,
            s = !1;
          for (;;) {
            if (r.pos >= w.length) {
              v('Unterminated regular expression', t);
              return;
            }
            const c = w.charCodeAt(r.pos);
            if (n) n = !1;
            else {
              if (c === h.leftSquareBracket) s = !0;
              else if (c === h.rightSquareBracket && s) s = !1;
              else if (c === h.slash && !s) break;
              n = c === h.backslash;
            }
            ++r.pos;
          }
          ++r.pos, dn(), J(e.regexp);
        }
        function Nt() {
          for (;;) {
            const t = w.charCodeAt(r.pos);
            if ((t >= h.digit0 && t <= h.digit9) || t === h.underscore) r.pos++;
            else break;
          }
        }
        function yt() {
          for (r.pos += 2; ; ) {
            const n = w.charCodeAt(r.pos);
            if (
              (n >= h.digit0 && n <= h.digit9) ||
              (n >= h.lowercaseA && n <= h.lowercaseF) ||
              (n >= h.uppercaseA && n <= h.uppercaseF) ||
              n === h.underscore
            )
              r.pos++;
            else break;
          }
          w.charCodeAt(r.pos) === h.lowercaseN
            ? (++r.pos, J(e.bigint))
            : J(e.num);
        }
        function Rt(t) {
          let n = !1,
            s = !1;
          t || Nt();
          let c = w.charCodeAt(r.pos);
          if (
            (c === h.dot && (++r.pos, Nt(), (c = w.charCodeAt(r.pos))),
            (c === h.uppercaseE || c === h.lowercaseE) &&
              ((c = w.charCodeAt(++r.pos)),
              (c === h.plusSign || c === h.dash) && ++r.pos,
              Nt(),
              (c = w.charCodeAt(r.pos))),
            c === h.lowercaseN
              ? (++r.pos, (n = !0))
              : c === h.lowercaseM && (++r.pos, (s = !0)),
            n)
          ) {
            J(e.bigint);
            return;
          }
          if (s) {
            J(e.decimal);
            return;
          }
          J(e.num);
        }
        function pn(t) {
          for (r.pos++; ; ) {
            if (r.pos >= w.length) {
              v('Unterminated string constant');
              return;
            }
            const n = w.charCodeAt(r.pos);
            if (n === h.backslash) r.pos++;
            else if (n === t) break;
            r.pos++;
          }
          r.pos++, J(e.string);
        }
        function mn() {
          for (;;) {
            if (r.pos >= w.length) {
              v('Unterminated template');
              return;
            }
            const t = w.charCodeAt(r.pos);
            if (
              t === h.graveAccent ||
              (t === h.dollarSign &&
                w.charCodeAt(r.pos + 1) === h.leftCurlyBrace)
            ) {
              if (r.pos === r.start && o(e.template))
                if (t === h.dollarSign) {
                  (r.pos += 2), J(e.dollarBraceL);
                  return;
                } else {
                  ++r.pos, J(e.backQuote);
                  return;
                }
              J(e.template);
              return;
            }
            t === h.backslash && r.pos++, r.pos++;
          }
        }
        function dn() {
          for (; r.pos < w.length; ) {
            const t = w.charCodeAt(r.pos);
            if (M[t]) r.pos++;
            else if (t === h.backslash) {
              if (((r.pos += 2), w.charCodeAt(r.pos) === h.leftCurlyBrace)) {
                for (
                  ;
                  r.pos < w.length && w.charCodeAt(r.pos) !== h.rightCurlyBrace;

                )
                  r.pos++;
                r.pos++;
              }
            } else break;
          }
        }
        function Jt(t, n = t.currentIndex()) {
          let s = n + 1;
          if (kn(t, s)) {
            const c = t.identifierNameAtIndex(n);
            return { isType: !1, leftName: c, rightName: c, endIndex: s };
          }
          if ((s++, kn(t, s)))
            return { isType: !0, leftName: null, rightName: null, endIndex: s };
          if ((s++, kn(t, s)))
            return {
              isType: !1,
              leftName: t.identifierNameAtIndex(n),
              rightName: t.identifierNameAtIndex(n + 2),
              endIndex: s,
            };
          if ((s++, kn(t, s)))
            return { isType: !0, leftName: null, rightName: null, endIndex: s };
          throw new Error(`Unexpected import/export specifier at ${n}`);
        }
        function kn(t, n) {
          const s = t.tokens[n];
          return s.type === e.braceR || s.type === e.comma;
        }
        var Z1 = new Map([
          ['quot', '"'],
          ['amp', '&'],
          ['apos', "'"],
          ['lt', '<'],
          ['gt', '>'],
          ['nbsp', '\xA0'],
          ['iexcl', '\xA1'],
          ['cent', '\xA2'],
          ['pound', '\xA3'],
          ['curren', '\xA4'],
          ['yen', '\xA5'],
          ['brvbar', '\xA6'],
          ['sect', '\xA7'],
          ['uml', '\xA8'],
          ['copy', '\xA9'],
          ['ordf', '\xAA'],
          ['laquo', '\xAB'],
          ['not', '\xAC'],
          ['shy', '\xAD'],
          ['reg', '\xAE'],
          ['macr', '\xAF'],
          ['deg', '\xB0'],
          ['plusmn', '\xB1'],
          ['sup2', '\xB2'],
          ['sup3', '\xB3'],
          ['acute', '\xB4'],
          ['micro', '\xB5'],
          ['para', '\xB6'],
          ['middot', '\xB7'],
          ['cedil', '\xB8'],
          ['sup1', '\xB9'],
          ['ordm', '\xBA'],
          ['raquo', '\xBB'],
          ['frac14', '\xBC'],
          ['frac12', '\xBD'],
          ['frac34', '\xBE'],
          ['iquest', '\xBF'],
          ['Agrave', '\xC0'],
          ['Aacute', '\xC1'],
          ['Acirc', '\xC2'],
          ['Atilde', '\xC3'],
          ['Auml', '\xC4'],
          ['Aring', '\xC5'],
          ['AElig', '\xC6'],
          ['Ccedil', '\xC7'],
          ['Egrave', '\xC8'],
          ['Eacute', '\xC9'],
          ['Ecirc', '\xCA'],
          ['Euml', '\xCB'],
          ['Igrave', '\xCC'],
          ['Iacute', '\xCD'],
          ['Icirc', '\xCE'],
          ['Iuml', '\xCF'],
          ['ETH', '\xD0'],
          ['Ntilde', '\xD1'],
          ['Ograve', '\xD2'],
          ['Oacute', '\xD3'],
          ['Ocirc', '\xD4'],
          ['Otilde', '\xD5'],
          ['Ouml', '\xD6'],
          ['times', '\xD7'],
          ['Oslash', '\xD8'],
          ['Ugrave', '\xD9'],
          ['Uacute', '\xDA'],
          ['Ucirc', '\xDB'],
          ['Uuml', '\xDC'],
          ['Yacute', '\xDD'],
          ['THORN', '\xDE'],
          ['szlig', '\xDF'],
          ['agrave', '\xE0'],
          ['aacute', '\xE1'],
          ['acirc', '\xE2'],
          ['atilde', '\xE3'],
          ['auml', '\xE4'],
          ['aring', '\xE5'],
          ['aelig', '\xE6'],
          ['ccedil', '\xE7'],
          ['egrave', '\xE8'],
          ['eacute', '\xE9'],
          ['ecirc', '\xEA'],
          ['euml', '\xEB'],
          ['igrave', '\xEC'],
          ['iacute', '\xED'],
          ['icirc', '\xEE'],
          ['iuml', '\xEF'],
          ['eth', '\xF0'],
          ['ntilde', '\xF1'],
          ['ograve', '\xF2'],
          ['oacute', '\xF3'],
          ['ocirc', '\xF4'],
          ['otilde', '\xF5'],
          ['ouml', '\xF6'],
          ['divide', '\xF7'],
          ['oslash', '\xF8'],
          ['ugrave', '\xF9'],
          ['uacute', '\xFA'],
          ['ucirc', '\xFB'],
          ['uuml', '\xFC'],
          ['yacute', '\xFD'],
          ['thorn', '\xFE'],
          ['yuml', '\xFF'],
          ['OElig', '\u0152'],
          ['oelig', '\u0153'],
          ['Scaron', '\u0160'],
          ['scaron', '\u0161'],
          ['Yuml', '\u0178'],
          ['fnof', '\u0192'],
          ['circ', '\u02C6'],
          ['tilde', '\u02DC'],
          ['Alpha', '\u0391'],
          ['Beta', '\u0392'],
          ['Gamma', '\u0393'],
          ['Delta', '\u0394'],
          ['Epsilon', '\u0395'],
          ['Zeta', '\u0396'],
          ['Eta', '\u0397'],
          ['Theta', '\u0398'],
          ['Iota', '\u0399'],
          ['Kappa', '\u039A'],
          ['Lambda', '\u039B'],
          ['Mu', '\u039C'],
          ['Nu', '\u039D'],
          ['Xi', '\u039E'],
          ['Omicron', '\u039F'],
          ['Pi', '\u03A0'],
          ['Rho', '\u03A1'],
          ['Sigma', '\u03A3'],
          ['Tau', '\u03A4'],
          ['Upsilon', '\u03A5'],
          ['Phi', '\u03A6'],
          ['Chi', '\u03A7'],
          ['Psi', '\u03A8'],
          ['Omega', '\u03A9'],
          ['alpha', '\u03B1'],
          ['beta', '\u03B2'],
          ['gamma', '\u03B3'],
          ['delta', '\u03B4'],
          ['epsilon', '\u03B5'],
          ['zeta', '\u03B6'],
          ['eta', '\u03B7'],
          ['theta', '\u03B8'],
          ['iota', '\u03B9'],
          ['kappa', '\u03BA'],
          ['lambda', '\u03BB'],
          ['mu', '\u03BC'],
          ['nu', '\u03BD'],
          ['xi', '\u03BE'],
          ['omicron', '\u03BF'],
          ['pi', '\u03C0'],
          ['rho', '\u03C1'],
          ['sigmaf', '\u03C2'],
          ['sigma', '\u03C3'],
          ['tau', '\u03C4'],
          ['upsilon', '\u03C5'],
          ['phi', '\u03C6'],
          ['chi', '\u03C7'],
          ['psi', '\u03C8'],
          ['omega', '\u03C9'],
          ['thetasym', '\u03D1'],
          ['upsih', '\u03D2'],
          ['piv', '\u03D6'],
          ['ensp', '\u2002'],
          ['emsp', '\u2003'],
          ['thinsp', '\u2009'],
          ['zwnj', '\u200C'],
          ['zwj', '\u200D'],
          ['lrm', '\u200E'],
          ['rlm', '\u200F'],
          ['ndash', '\u2013'],
          ['mdash', '\u2014'],
          ['lsquo', '\u2018'],
          ['rsquo', '\u2019'],
          ['sbquo', '\u201A'],
          ['ldquo', '\u201C'],
          ['rdquo', '\u201D'],
          ['bdquo', '\u201E'],
          ['dagger', '\u2020'],
          ['Dagger', '\u2021'],
          ['bull', '\u2022'],
          ['hellip', '\u2026'],
          ['permil', '\u2030'],
          ['prime', '\u2032'],
          ['Prime', '\u2033'],
          ['lsaquo', '\u2039'],
          ['rsaquo', '\u203A'],
          ['oline', '\u203E'],
          ['frasl', '\u2044'],
          ['euro', '\u20AC'],
          ['image', '\u2111'],
          ['weierp', '\u2118'],
          ['real', '\u211C'],
          ['trade', '\u2122'],
          ['alefsym', '\u2135'],
          ['larr', '\u2190'],
          ['uarr', '\u2191'],
          ['rarr', '\u2192'],
          ['darr', '\u2193'],
          ['harr', '\u2194'],
          ['crarr', '\u21B5'],
          ['lArr', '\u21D0'],
          ['uArr', '\u21D1'],
          ['rArr', '\u21D2'],
          ['dArr', '\u21D3'],
          ['hArr', '\u21D4'],
          ['forall', '\u2200'],
          ['part', '\u2202'],
          ['exist', '\u2203'],
          ['empty', '\u2205'],
          ['nabla', '\u2207'],
          ['isin', '\u2208'],
          ['notin', '\u2209'],
          ['ni', '\u220B'],
          ['prod', '\u220F'],
          ['sum', '\u2211'],
          ['minus', '\u2212'],
          ['lowast', '\u2217'],
          ['radic', '\u221A'],
          ['prop', '\u221D'],
          ['infin', '\u221E'],
          ['ang', '\u2220'],
          ['and', '\u2227'],
          ['or', '\u2228'],
          ['cap', '\u2229'],
          ['cup', '\u222A'],
          ['int', '\u222B'],
          ['there4', '\u2234'],
          ['sim', '\u223C'],
          ['cong', '\u2245'],
          ['asymp', '\u2248'],
          ['ne', '\u2260'],
          ['equiv', '\u2261'],
          ['le', '\u2264'],
          ['ge', '\u2265'],
          ['sub', '\u2282'],
          ['sup', '\u2283'],
          ['nsub', '\u2284'],
          ['sube', '\u2286'],
          ['supe', '\u2287'],
          ['oplus', '\u2295'],
          ['otimes', '\u2297'],
          ['perp', '\u22A5'],
          ['sdot', '\u22C5'],
          ['lceil', '\u2308'],
          ['rceil', '\u2309'],
          ['lfloor', '\u230A'],
          ['rfloor', '\u230B'],
          ['lang', '\u2329'],
          ['rang', '\u232A'],
          ['loz', '\u25CA'],
          ['spades', '\u2660'],
          ['clubs', '\u2663'],
          ['hearts', '\u2665'],
          ['diams', '\u2666'],
        ]);
        function Fs(t) {
          const [n, s] = Os(t.jsxPragma || 'React.createElement'),
            [c, f] = Os(t.jsxFragmentPragma || 'React.Fragment');
          return { base: n, suffix: s, fragmentBase: c, fragmentSuffix: f };
        }
        function Os(t) {
          let n = t.indexOf('.');
          return n === -1 && (n = t.length), [t.slice(0, n), t.slice(n)];
        }
        class ut {
          getPrefixCode() {
            return '';
          }
          getHoistedCode() {
            return '';
          }
          getSuffixCode() {
            return '';
          }
        }
        class Pt extends ut {
          __init() {
            this.lastLineNumber = 1;
          }
          __init2() {
            this.lastIndex = 0;
          }
          __init3() {
            this.filenameVarName = null;
          }
          __init4() {
            this.esmAutomaticImportNameResolutions = {};
          }
          __init5() {
            this.cjsAutomaticModuleNameResolutions = {};
          }
          constructor(n, s, c, f, k) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.importProcessor = c),
              (this.nameManager = f),
              (this.options = k),
              Pt.prototype.__init.call(this),
              Pt.prototype.__init2.call(this),
              Pt.prototype.__init3.call(this),
              Pt.prototype.__init4.call(this),
              Pt.prototype.__init5.call(this),
              (this.jsxPragmaInfo = Fs(k)),
              (this.isAutomaticRuntime = k.jsxRuntime === 'automatic'),
              (this.jsxImportSource = k.jsxImportSource || 'react');
          }
          process() {
            return this.tokens.matches1(e.jsxTagStart)
              ? (this.processJSXTag(), !0)
              : !1;
          }
          getPrefixCode() {
            let n = '';
            if (
              (this.filenameVarName &&
                (n += `const ${this.filenameVarName} = ${JSON.stringify(
                  this.options.filePath || '',
                )};`),
              this.isAutomaticRuntime)
            )
              if (this.importProcessor)
                for (const [c, f] of Object.entries(
                  this.cjsAutomaticModuleNameResolutions,
                ))
                  n += `var ${f} = require("${c}");`;
              else {
                const s = this.esmAutomaticImportNameResolutions,
                  { createElement: c } = s,
                  f = Ds(s, ['createElement']);
                c &&
                  (n += `import {createElement as ${c}} from "${this.jsxImportSource}";`);
                const k = Object.entries(f)
                  .map(([A, B]) => `${A} as ${B}`)
                  .join(', ');
                if (k) {
                  const A =
                    this.jsxImportSource +
                    (this.options.production
                      ? '/jsx-runtime'
                      : '/jsx-dev-runtime');
                  n += `import {${k}} from "${A}";`;
                }
              }
            return n;
          }
          processJSXTag() {
            const { jsxRole: n, start: s } = this.tokens.currentToken(),
              c = this.options.production
                ? null
                : this.getElementLocationCode(s);
            this.isAutomaticRuntime && n !== se.KeyAfterPropSpread
              ? this.transformTagToJSXFunc(c, n)
              : this.transformTagToCreateElement(c);
          }
          getElementLocationCode(n) {
            return `lineNumber: ${this.getLineNumberForIndex(n)}`;
          }
          getLineNumberForIndex(n) {
            const s = this.tokens.code;
            for (; this.lastIndex < n && this.lastIndex < s.length; )
              s[this.lastIndex] ===
                `
` && this.lastLineNumber++,
                this.lastIndex++;
            return this.lastLineNumber;
          }
          transformTagToJSXFunc(n, s) {
            const c = s === se.StaticChildren;
            this.tokens.replaceToken(this.getJSXFuncInvocationCode(c));
            let f = null;
            if (this.tokens.matches1(e.jsxTagEnd))
              this.tokens.replaceToken(`${this.getFragmentCode()}, {`),
                this.processAutomaticChildrenAndEndProps(s);
            else {
              if (
                (this.processTagIntro(),
                this.tokens.appendCode(', {'),
                (f = this.processProps(!0)),
                this.tokens.matches2(e.slash, e.jsxTagEnd))
              )
                this.tokens.appendCode('}');
              else if (this.tokens.matches1(e.jsxTagEnd))
                this.tokens.removeToken(),
                  this.processAutomaticChildrenAndEndProps(s);
              else
                throw new Error(
                  'Expected either /> or > at the end of the tag.',
                );
              f && this.tokens.appendCode(`, ${f}`);
            }
            for (
              this.options.production ||
                (f === null && this.tokens.appendCode(', void 0'),
                this.tokens.appendCode(
                  `, ${c}, ${this.getDevSource(n)}, this`,
                )),
                this.tokens.removeInitialToken();
              !this.tokens.matches1(e.jsxTagEnd);

            )
              this.tokens.removeToken();
            this.tokens.replaceToken(')');
          }
          transformTagToCreateElement(n) {
            if (
              (this.tokens.replaceToken(this.getCreateElementInvocationCode()),
              this.tokens.matches1(e.jsxTagEnd))
            )
              this.tokens.replaceToken(`${this.getFragmentCode()}, null`),
                this.processChildren(!0);
            else if (
              (this.processTagIntro(),
              this.processPropsObjectWithDevInfo(n),
              !this.tokens.matches2(e.slash, e.jsxTagEnd))
            )
              if (this.tokens.matches1(e.jsxTagEnd))
                this.tokens.removeToken(), this.processChildren(!0);
              else
                throw new Error(
                  'Expected either /> or > at the end of the tag.',
                );
            for (
              this.tokens.removeInitialToken();
              !this.tokens.matches1(e.jsxTagEnd);

            )
              this.tokens.removeToken();
            this.tokens.replaceToken(')');
          }
          getJSXFuncInvocationCode(n) {
            return this.options.production
              ? n
                ? this.claimAutoImportedFuncInvocation('jsxs', '/jsx-runtime')
                : this.claimAutoImportedFuncInvocation('jsx', '/jsx-runtime')
              : this.claimAutoImportedFuncInvocation(
                  'jsxDEV',
                  '/jsx-dev-runtime',
                );
          }
          getCreateElementInvocationCode() {
            if (this.isAutomaticRuntime)
              return this.claimAutoImportedFuncInvocation('createElement', '');
            {
              const { jsxPragmaInfo: n } = this;
              return `${
                (this.importProcessor &&
                  this.importProcessor.getIdentifierReplacement(n.base)) ||
                n.base
              }${n.suffix}(`;
            }
          }
          getFragmentCode() {
            if (this.isAutomaticRuntime)
              return this.claimAutoImportedName(
                'Fragment',
                this.options.production ? '/jsx-runtime' : '/jsx-dev-runtime',
              );
            {
              const { jsxPragmaInfo: n } = this;
              return (
                ((this.importProcessor &&
                  this.importProcessor.getIdentifierReplacement(
                    n.fragmentBase,
                  )) ||
                  n.fragmentBase) + n.fragmentSuffix
              );
            }
          }
          claimAutoImportedFuncInvocation(n, s) {
            const c = this.claimAutoImportedName(n, s);
            return this.importProcessor ? `${c}.call(void 0, ` : `${c}(`;
          }
          claimAutoImportedName(n, s) {
            if (this.importProcessor) {
              const c = this.jsxImportSource + s;
              return (
                this.cjsAutomaticModuleNameResolutions[c] ||
                  (this.cjsAutomaticModuleNameResolutions[c] =
                    this.importProcessor.getFreeIdentifierForPath(c)),
                `${this.cjsAutomaticModuleNameResolutions[c]}.${n}`
              );
            } else
              return (
                this.esmAutomaticImportNameResolutions[n] ||
                  (this.esmAutomaticImportNameResolutions[n] =
                    this.nameManager.claimFreeName(`_${n}`)),
                this.esmAutomaticImportNameResolutions[n]
              );
          }
          processTagIntro() {
            let n = this.tokens.currentIndex() + 1;
            for (
              ;
              this.tokens.tokens[n].isType ||
              (!this.tokens.matches2AtIndex(n - 1, e.jsxName, e.jsxName) &&
                !this.tokens.matches2AtIndex(n - 1, e.greaterThan, e.jsxName) &&
                !this.tokens.matches1AtIndex(n, e.braceL) &&
                !this.tokens.matches1AtIndex(n, e.jsxTagEnd) &&
                !this.tokens.matches2AtIndex(n, e.slash, e.jsxTagEnd));

            )
              n++;
            if (n === this.tokens.currentIndex() + 1) {
              const s = this.tokens.identifierName();
              Ms(s) && this.tokens.replaceToken(`'${s}'`);
            }
            for (; this.tokens.currentIndex() < n; )
              this.rootTransformer.processToken();
          }
          processPropsObjectWithDevInfo(n) {
            const s = this.options.production
              ? ''
              : `__self: this, __source: ${this.getDevSource(n)}`;
            if (
              !this.tokens.matches1(e.jsxName) &&
              !this.tokens.matches1(e.braceL)
            ) {
              s
                ? this.tokens.appendCode(`, {${s}}`)
                : this.tokens.appendCode(', null');
              return;
            }
            this.tokens.appendCode(', {'),
              this.processProps(!1),
              s
                ? this.tokens.appendCode(` ${s}}`)
                : this.tokens.appendCode('}');
          }
          processProps(n) {
            let s = null;
            for (;;) {
              if (this.tokens.matches2(e.jsxName, e.eq)) {
                const c = this.tokens.identifierName();
                if (n && c === 'key') {
                  s !== null && this.tokens.appendCode(s.replace(/[^\n]/g, '')),
                    this.tokens.removeToken(),
                    this.tokens.removeToken();
                  const f = this.tokens.snapshot();
                  this.processPropValue(),
                    (s =
                      this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(f));
                  continue;
                } else
                  this.processPropName(c),
                    this.tokens.replaceToken(': '),
                    this.processPropValue();
              } else if (this.tokens.matches1(e.jsxName)) {
                const c = this.tokens.identifierName();
                this.processPropName(c), this.tokens.appendCode(': true');
              } else if (this.tokens.matches1(e.braceL))
                this.tokens.replaceToken(''),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.replaceToken('');
              else break;
              this.tokens.appendCode(',');
            }
            return s;
          }
          processPropName(n) {
            n.includes('-')
              ? this.tokens.replaceToken(`'${n}'`)
              : this.tokens.copyToken();
          }
          processPropValue() {
            this.tokens.matches1(e.braceL)
              ? (this.tokens.replaceToken(''),
                this.rootTransformer.processBalancedCode(),
                this.tokens.replaceToken(''))
              : this.tokens.matches1(e.jsxTagStart)
              ? this.processJSXTag()
              : this.processStringPropValue();
          }
          processStringPropValue() {
            const n = this.tokens.currentToken(),
              s = this.tokens.code.slice(n.start + 1, n.end - 1),
              c = Bs(s),
              f = eo(s);
            this.tokens.replaceToken(f + c);
          }
          processAutomaticChildrenAndEndProps(n) {
            n === se.StaticChildren
              ? (this.tokens.appendCode(' children: ['),
                this.processChildren(!1),
                this.tokens.appendCode(']}'))
              : (n === se.OneChild && this.tokens.appendCode(' children: '),
                this.processChildren(!1),
                this.tokens.appendCode('}'));
          }
          processChildren(n) {
            let s = n;
            for (;;) {
              if (this.tokens.matches2(e.jsxTagStart, e.slash)) return;
              let c = !1;
              if (this.tokens.matches1(e.braceL))
                this.tokens.matches2(e.braceL, e.braceR)
                  ? (this.tokens.replaceToken(''), this.tokens.replaceToken(''))
                  : (this.tokens.replaceToken(s ? ', ' : ''),
                    this.rootTransformer.processBalancedCode(),
                    this.tokens.replaceToken(''),
                    (c = !0));
              else if (this.tokens.matches1(e.jsxTagStart))
                this.tokens.appendCode(s ? ', ' : ''),
                  this.processJSXTag(),
                  (c = !0);
              else if (
                this.tokens.matches1(e.jsxText) ||
                this.tokens.matches1(e.jsxEmptyText)
              )
                c = this.processChildTextElement(s);
              else
                throw new Error(
                  'Unexpected token when processing JSX children.',
                );
              c && (s = !0);
            }
          }
          processChildTextElement(n) {
            const s = this.tokens.currentToken(),
              c = this.tokens.code.slice(s.start, s.end),
              f = Bs(c),
              k = K1(c);
            return k === '""'
              ? (this.tokens.replaceToken(f), !1)
              : (this.tokens.replaceToken(`${n ? ', ' : ''}${k}${f}`), !0);
          }
          getDevSource(n) {
            return `{fileName: ${this.getFilenameVarName()}, ${n}}`;
          }
          getFilenameVarName() {
            return (
              this.filenameVarName ||
                (this.filenameVarName =
                  this.nameManager.claimFreeName('_jsxFileName')),
              this.filenameVarName
            );
          }
        }
        function Ms(t) {
          const n = t.charCodeAt(0);
          return n >= h.lowercaseA && n <= h.lowercaseZ;
        }
        function K1(t) {
          let n = '',
            s = '',
            c = !1,
            f = !1;
          for (let k = 0; k < t.length; k++) {
            const A = t[k];
            if (A === ' ' || A === '	' || A === '\r') c || (s += A);
            else if (
              A ===
              `
`
            )
              (s = ''), (c = !0);
            else {
              if ((f && c && (n += ' '), (n += s), (s = ''), A === '&')) {
                const { entity: B, newI: ee } = js(t, k + 1);
                (k = ee - 1), (n += B);
              } else n += A;
              (f = !0), (c = !1);
            }
          }
          return c || (n += s), JSON.stringify(n);
        }
        function Bs(t) {
          let n = 0,
            s = 0;
          for (const c of t)
            c ===
            `
`
              ? (n++, (s = 0))
              : c === ' ' && s++;
          return (
            `
`.repeat(n) + ' '.repeat(s)
          );
        }
        function eo(t) {
          let n = '';
          for (let s = 0; s < t.length; s++) {
            const c = t[s];
            if (
              c ===
              `
`
            )
              if (/\s/.test(t[s + 1]))
                for (n += ' '; s < t.length && /\s/.test(t[s + 1]); ) s++;
              else
                n += `
`;
            else if (c === '&') {
              const { entity: f, newI: k } = js(t, s + 1);
              (n += f), (s = k - 1);
            } else n += c;
          }
          return JSON.stringify(n);
        }
        function js(t, n) {
          let s = '',
            c = 0,
            f,
            k = n;
          if (t[k] === '#') {
            let A = 10;
            k++;
            let B;
            if (t[k] === 'x')
              for (A = 16, k++, B = k; k < t.length && no(t.charCodeAt(k)); )
                k++;
            else for (B = k; k < t.length && to(t.charCodeAt(k)); ) k++;
            if (t[k] === ';') {
              const ee = t.slice(B, k);
              ee && (k++, (f = String.fromCodePoint(parseInt(ee, A))));
            }
          } else
            for (; k < t.length && c++ < 10; ) {
              const A = t[k];
              if ((k++, A === ';')) {
                f = Z1.get(s);
                break;
              }
              s += A;
            }
          return f ? { entity: f, newI: k } : { entity: '&', newI: n };
        }
        function to(t) {
          return t >= h.digit0 && t <= h.digit9;
        }
        function no(t) {
          return (
            (t >= h.digit0 && t <= h.digit9) ||
            (t >= h.lowercaseA && t <= h.lowercaseF) ||
            (t >= h.uppercaseA && t <= h.uppercaseF)
          );
        }
        function qs(t, n) {
          const s = Fs(n),
            c = new Set();
          for (let f = 0; f < t.tokens.length; f++) {
            const k = t.tokens[f];
            if (
              (k.type === e.name &&
                !k.isType &&
                (k.identifierRole === N.Access ||
                  k.identifierRole === N.ObjectShorthand ||
                  k.identifierRole === N.ExportAccess) &&
                !k.shadowsGlobal &&
                c.add(t.identifierNameForToken(k)),
              k.type === e.jsxTagStart && c.add(s.base),
              k.type === e.jsxTagStart &&
                f + 1 < t.tokens.length &&
                t.tokens[f + 1].type === e.jsxTagEnd &&
                (c.add(s.base), c.add(s.fragmentBase)),
              k.type === e.jsxName && k.identifierRole === N.Access)
            ) {
              const A = t.identifierNameForToken(k);
              (!Ms(A) || t.tokens[f + 1].type === e.dot) &&
                c.add(t.identifierNameForToken(k));
            }
          }
          return c;
        }
        class Lt {
          __init() {
            this.nonTypeIdentifiers = new Set();
          }
          __init2() {
            this.importInfoByPath = new Map();
          }
          __init3() {
            this.importsToReplace = new Map();
          }
          __init4() {
            this.identifierReplacements = new Map();
          }
          __init5() {
            this.exportBindingsByLocalName = new Map();
          }
          constructor(n, s, c, f, k, A, B) {
            (this.nameManager = n),
              (this.tokens = s),
              (this.enableLegacyTypeScriptModuleInterop = c),
              (this.options = f),
              (this.isTypeScriptTransformEnabled = k),
              (this.keepUnusedImports = A),
              (this.helperManager = B),
              Lt.prototype.__init.call(this),
              Lt.prototype.__init2.call(this),
              Lt.prototype.__init3.call(this),
              Lt.prototype.__init4.call(this),
              Lt.prototype.__init5.call(this);
          }
          preprocessTokens() {
            for (let n = 0; n < this.tokens.tokens.length; n++)
              this.tokens.matches1AtIndex(n, e._import) &&
                !this.tokens.matches3AtIndex(n, e._import, e.name, e.eq) &&
                this.preprocessImportAtIndex(n),
                this.tokens.matches1AtIndex(n, e._export) &&
                  !this.tokens.matches2AtIndex(n, e._export, e.eq) &&
                  this.preprocessExportAtIndex(n);
            this.generateImportReplacements();
          }
          pruneTypeOnlyImports() {
            this.nonTypeIdentifiers = qs(this.tokens, this.options);
            for (const [n, s] of this.importInfoByPath.entries()) {
              if (
                s.hasBareImport ||
                s.hasStarExport ||
                s.exportStarNames.length > 0 ||
                s.namedExports.length > 0
              )
                continue;
              [
                ...s.defaultNames,
                ...s.wildcardNames,
                ...s.namedImports.map(({ localName: f }) => f),
              ].every((f) => this.shouldAutomaticallyElideImportedName(f)) &&
                this.importsToReplace.set(n, '');
            }
          }
          shouldAutomaticallyElideImportedName(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              !this.nonTypeIdentifiers.has(n)
            );
          }
          generateImportReplacements() {
            for (const [n, s] of this.importInfoByPath.entries()) {
              const {
                defaultNames: c,
                wildcardNames: f,
                namedImports: k,
                namedExports: A,
                exportStarNames: B,
                hasStarExport: ee,
              } = s;
              if (
                c.length === 0 &&
                f.length === 0 &&
                k.length === 0 &&
                A.length === 0 &&
                B.length === 0 &&
                !ee
              ) {
                this.importsToReplace.set(n, `require('${n}');`);
                continue;
              }
              const fe = this.getFreeIdentifierForPath(n);
              let be;
              this.enableLegacyTypeScriptModuleInterop
                ? (be = fe)
                : (be = f.length > 0 ? f[0] : this.getFreeIdentifierForPath(n));
              let ge = `var ${fe} = require('${n}');`;
              if (f.length > 0)
                for (const ne of f) {
                  const we = this.enableLegacyTypeScriptModuleInterop
                    ? fe
                    : `${this.helperManager.getHelperName(
                        'interopRequireWildcard',
                      )}(${fe})`;
                  ge += ` var ${ne} = ${we};`;
                }
              else
                B.length > 0 && be !== fe
                  ? (ge += ` var ${be} = ${this.helperManager.getHelperName(
                      'interopRequireWildcard',
                    )}(${fe});`)
                  : c.length > 0 &&
                    be !== fe &&
                    (ge += ` var ${be} = ${this.helperManager.getHelperName(
                      'interopRequireDefault',
                    )}(${fe});`);
              for (const { importedName: ne, localName: we } of A)
                ge += ` ${this.helperManager.getHelperName(
                  'createNamedExportFrom',
                )}(${fe}, '${we}', '${ne}');`;
              for (const ne of B) ge += ` exports.${ne} = ${be};`;
              ee &&
                (ge += ` ${this.helperManager.getHelperName(
                  'createStarExport',
                )}(${fe});`),
                this.importsToReplace.set(n, ge);
              for (const ne of c)
                this.identifierReplacements.set(ne, `${be}.default`);
              for (const { importedName: ne, localName: we } of k)
                this.identifierReplacements.set(we, `${fe}.${ne}`);
            }
          }
          getFreeIdentifierForPath(n) {
            const s = n.split('/'),
              f = s[s.length - 1].replace(/\W/g, '');
            return this.nameManager.claimFreeName(`_${f}`);
          }
          preprocessImportAtIndex(n) {
            const s = [],
              c = [],
              f = [];
            if (
              (n++,
              ((this.tokens.matchesContextualAtIndex(n, u._type) ||
                this.tokens.matches1AtIndex(n, e._typeof)) &&
                !this.tokens.matches1AtIndex(n + 1, e.comma) &&
                !this.tokens.matchesContextualAtIndex(n + 1, u._from)) ||
                this.tokens.matches1AtIndex(n, e.parenL))
            )
              return;
            if (
              (this.tokens.matches1AtIndex(n, e.name) &&
                (s.push(this.tokens.identifierNameAtIndex(n)),
                n++,
                this.tokens.matches1AtIndex(n, e.comma) && n++),
              this.tokens.matches1AtIndex(n, e.star) &&
                ((n += 2), c.push(this.tokens.identifierNameAtIndex(n)), n++),
              this.tokens.matches1AtIndex(n, e.braceL))
            ) {
              const B = this.getNamedImports(n + 1);
              n = B.newIndex;
              for (const ee of B.namedImports)
                ee.importedName === 'default'
                  ? s.push(ee.localName)
                  : f.push(ee);
            }
            if (
              (this.tokens.matchesContextualAtIndex(n, u._from) && n++,
              !this.tokens.matches1AtIndex(n, e.string))
            )
              throw new Error(
                'Expected string token at the end of import statement.',
              );
            const k = this.tokens.stringValueAtIndex(n),
              A = this.getImportInfo(k);
            A.defaultNames.push(...s),
              A.wildcardNames.push(...c),
              A.namedImports.push(...f),
              s.length === 0 &&
                c.length === 0 &&
                f.length === 0 &&
                (A.hasBareImport = !0);
          }
          preprocessExportAtIndex(n) {
            if (
              this.tokens.matches2AtIndex(n, e._export, e._var) ||
              this.tokens.matches2AtIndex(n, e._export, e._let) ||
              this.tokens.matches2AtIndex(n, e._export, e._const)
            )
              this.preprocessVarExportAtIndex(n);
            else if (
              this.tokens.matches2AtIndex(n, e._export, e._function) ||
              this.tokens.matches2AtIndex(n, e._export, e._class)
            ) {
              const s = this.tokens.identifierNameAtIndex(n + 2);
              this.addExportBinding(s, s);
            } else if (
              this.tokens.matches3AtIndex(n, e._export, e.name, e._function)
            ) {
              const s = this.tokens.identifierNameAtIndex(n + 3);
              this.addExportBinding(s, s);
            } else
              this.tokens.matches2AtIndex(n, e._export, e.braceL)
                ? this.preprocessNamedExportAtIndex(n)
                : this.tokens.matches2AtIndex(n, e._export, e.star) &&
                  this.preprocessExportStarAtIndex(n);
          }
          preprocessVarExportAtIndex(n) {
            let s = 0;
            for (let c = n + 2; ; c++)
              if (
                this.tokens.matches1AtIndex(c, e.braceL) ||
                this.tokens.matches1AtIndex(c, e.dollarBraceL) ||
                this.tokens.matches1AtIndex(c, e.bracketL)
              )
                s++;
              else if (
                this.tokens.matches1AtIndex(c, e.braceR) ||
                this.tokens.matches1AtIndex(c, e.bracketR)
              )
                s--;
              else {
                if (s === 0 && !this.tokens.matches1AtIndex(c, e.name)) break;
                if (this.tokens.matches1AtIndex(1, e.eq)) {
                  const f = this.tokens.currentToken().rhsEndIndex;
                  if (f == null)
                    throw new Error('Expected = token with an end index.');
                  c = f - 1;
                } else {
                  const f = this.tokens.tokens[c];
                  if (Ne(f)) {
                    const k = this.tokens.identifierNameAtIndex(c);
                    this.identifierReplacements.set(k, `exports.${k}`);
                  }
                }
              }
          }
          preprocessNamedExportAtIndex(n) {
            n += 2;
            const { newIndex: s, namedImports: c } = this.getNamedImports(n);
            if (((n = s), this.tokens.matchesContextualAtIndex(n, u._from)))
              n++;
            else {
              for (const { importedName: A, localName: B } of c)
                this.addExportBinding(A, B);
              return;
            }
            if (!this.tokens.matches1AtIndex(n, e.string))
              throw new Error(
                'Expected string token at the end of import statement.',
              );
            const f = this.tokens.stringValueAtIndex(n);
            this.getImportInfo(f).namedExports.push(...c);
          }
          preprocessExportStarAtIndex(n) {
            let s = null;
            if (
              (this.tokens.matches3AtIndex(n, e._export, e.star, e._as)
                ? ((n += 3),
                  (s = this.tokens.identifierNameAtIndex(n)),
                  (n += 2))
                : (n += 3),
              !this.tokens.matches1AtIndex(n, e.string))
            )
              throw new Error(
                'Expected string token at the end of star export statement.',
              );
            const c = this.tokens.stringValueAtIndex(n),
              f = this.getImportInfo(c);
            s !== null ? f.exportStarNames.push(s) : (f.hasStarExport = !0);
          }
          getNamedImports(n) {
            const s = [];
            for (;;) {
              if (this.tokens.matches1AtIndex(n, e.braceR)) {
                n++;
                break;
              }
              const c = Jt(this.tokens, n);
              if (
                ((n = c.endIndex),
                c.isType ||
                  s.push({ importedName: c.leftName, localName: c.rightName }),
                this.tokens.matches2AtIndex(n, e.comma, e.braceR))
              ) {
                n += 2;
                break;
              } else if (this.tokens.matches1AtIndex(n, e.braceR)) {
                n++;
                break;
              } else if (this.tokens.matches1AtIndex(n, e.comma)) n++;
              else
                throw new Error(
                  `Unexpected token: ${JSON.stringify(this.tokens.tokens[n])}`,
                );
            }
            return { newIndex: n, namedImports: s };
          }
          getImportInfo(n) {
            const s = this.importInfoByPath.get(n);
            if (s) return s;
            const c = {
              defaultNames: [],
              wildcardNames: [],
              namedImports: [],
              namedExports: [],
              hasBareImport: !1,
              exportStarNames: [],
              hasStarExport: !1,
            };
            return this.importInfoByPath.set(n, c), c;
          }
          addExportBinding(n, s) {
            this.exportBindingsByLocalName.has(n) ||
              this.exportBindingsByLocalName.set(n, []),
              this.exportBindingsByLocalName.get(n).push(s);
          }
          claimImportCode(n) {
            const s = this.importsToReplace.get(n);
            return this.importsToReplace.set(n, ''), s || '';
          }
          getIdentifierReplacement(n) {
            return this.identifierReplacements.get(n) || null;
          }
          resolveExportBinding(n) {
            const s = this.exportBindingsByLocalName.get(n);
            return !s || s.length === 0
              ? null
              : s.map((c) => `exports.${c}`).join(' = ');
          }
          getGlobalNames() {
            return new Set([
              ...this.identifierReplacements.keys(),
              ...this.exportBindingsByLocalName.keys(),
            ]);
          }
        }
        var Qt = H(92509);
        function ro({ code: t, mappings: n }, s, c, f, k) {
          const A = so(f, k),
            B = new Qt.GenMapping({ file: c.compiledFilename });
          let ee = 0,
            fe = n[0];
          for (; fe === void 0 && ee < n.length - 1; ) ee++, (fe = n[ee]);
          let be = 0,
            ge = 0;
          fe !== ge && (0, Qt.maybeAddSegment)(B, be, 0, s, be, 0);
          for (let He = 0; He < t.length; He++) {
            if (He === fe) {
              const et = fe - ge,
                Je = A[ee];
              for (
                (0, Qt.maybeAddSegment)(B, be, et, s, be, Je);
                (fe === He || fe === void 0) && ee < n.length - 1;

              )
                ee++, (fe = n[ee]);
            }
            t.charCodeAt(He) === h.lineFeed &&
              (be++,
              (ge = He + 1),
              fe !== ge && (0, Qt.maybeAddSegment)(B, be, 0, s, be, 0));
          }
          const Ze = (0, Qt.toEncodedMap)(B),
            { sourceRoot: ne, sourcesContent: we } = Ze;
          return Ds(Ze, ['sourceRoot', 'sourcesContent']);
        }
        function so(t, n) {
          const s = new Array(n.length);
          let c = 0,
            f = n[c].start,
            k = 0;
          for (let A = 0; A < t.length; A++)
            A === f && ((s[c] = f - k), c++, (f = n[c].start)),
              t.charCodeAt(A) === h.lineFeed && (k = A + 1);
          return s;
        }
        const oo = {
          require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
          interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
          interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
          createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
          createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
          nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
          asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
          optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
          asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
          optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
          asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
        };
        class gn {
          __init() {
            this.helperNames = {};
          }
          __init2() {
            this.createRequireName = null;
          }
          constructor(n) {
            (this.nameManager = n),
              gn.prototype.__init.call(this),
              gn.prototype.__init2.call(this);
          }
          getHelperName(n) {
            let s = this.helperNames[n];
            return (
              s ||
              ((s = this.nameManager.claimFreeName(`_${n}`)),
              (this.helperNames[n] = s),
              s)
            );
          }
          emitHelpers() {
            let n = '';
            this.helperNames.optionalChainDelete &&
              this.getHelperName('optionalChain'),
              this.helperNames.asyncOptionalChainDelete &&
                this.getHelperName('asyncOptionalChain');
            for (const [s, c] of Object.entries(oo)) {
              const f = this.helperNames[s];
              let k = c;
              s === 'optionalChainDelete'
                ? (k = k.replace(
                    'OPTIONAL_CHAIN_NAME',
                    this.helperNames.optionalChain,
                  ))
                : s === 'asyncOptionalChainDelete'
                ? (k = k.replace(
                    'ASYNC_OPTIONAL_CHAIN_NAME',
                    this.helperNames.asyncOptionalChain,
                  ))
                : s === 'require' &&
                  (this.createRequireName === null &&
                    (this.createRequireName =
                      this.nameManager.claimFreeName('_createRequire')),
                  (k = k.replace(
                    /CREATE_REQUIRE_NAME/g,
                    this.createRequireName,
                  ))),
                f &&
                  ((n += ' '),
                  (n += k.replace(s, f).replace(/\s+/g, ' ').trim()));
            }
            return n;
          }
        }
        function Us(t, n, s) {
          io(t, s) && ao(t, n, s);
        }
        function io(t, n) {
          for (const s of t.tokens)
            if (
              s.type === e.name &&
              !s.isType &&
              b(s) &&
              n.has(t.identifierNameForToken(s))
            )
              return !0;
          return !1;
        }
        function ao(t, n, s) {
          const c = [];
          let f = n.length - 1;
          for (let k = t.tokens.length - 1; ; k--) {
            for (; c.length > 0 && c[c.length - 1].startTokenIndex === k + 1; )
              c.pop();
            for (; f >= 0 && n[f].endTokenIndex === k + 1; ) c.push(n[f]), f--;
            if (k < 0) break;
            const A = t.tokens[k],
              B = t.identifierNameForToken(A);
            if (c.length > 1 && !A.isType && A.type === e.name && s.has(B)) {
              if (L(A)) $s(c[c.length - 1], t, B);
              else if (D(A)) {
                let ee = c.length - 1;
                for (; ee > 0 && !c[ee].isFunctionScope; ) ee--;
                if (ee < 0)
                  throw new Error('Did not find parent function scope.');
                $s(c[ee], t, B);
              }
            }
          }
          if (c.length > 0)
            throw new Error(
              'Expected empty scope stack after processing file.',
            );
        }
        function $s(t, n, s) {
          for (let c = t.startTokenIndex; c < t.endTokenIndex; c++) {
            const f = n.tokens[c];
            (f.type === e.name || f.type === e.jsxName) &&
              n.identifierNameForToken(f) === s &&
              (f.shadowsGlobal = !0);
          }
        }
        function co(t, n) {
          const s = [];
          for (const c of n)
            c.type === e.name && s.push(t.slice(c.start, c.end));
          return s;
        }
        class Bn {
          __init() {
            this.usedNames = new Set();
          }
          constructor(n, s) {
            Bn.prototype.__init.call(this),
              (this.usedNames = new Set(co(n, s)));
          }
          claimFreeName(n) {
            const s = this.findFreeName(n);
            return this.usedNames.add(s), s;
          }
          findFreeName(n) {
            if (!this.usedNames.has(n)) return n;
            let s = 2;
            for (; this.usedNames.has(n + String(s)); ) s++;
            return n + String(s);
          }
        }
        var Me = H(61477);
        const lo = Me.union(
            Me.lit('jsx'),
            Me.lit('typescript'),
            Me.lit('flow'),
            Me.lit('imports'),
            Me.lit('react-hot-loader'),
            Me.lit('jest'),
          ),
          uo = Me.iface([], { compiledFilename: 'string' }),
          fo = Me.iface([], {
            transforms: Me.array('Transform'),
            disableESTransforms: Me.opt('boolean'),
            jsxRuntime: Me.opt(
              Me.union(
                Me.lit('classic'),
                Me.lit('automatic'),
                Me.lit('preserve'),
              ),
            ),
            production: Me.opt('boolean'),
            jsxImportSource: Me.opt('string'),
            jsxPragma: Me.opt('string'),
            jsxFragmentPragma: Me.opt('string'),
            keepUnusedImports: Me.opt('boolean'),
            preserveDynamicImport: Me.opt('boolean'),
            injectCreateRequireForImportRequire: Me.opt('boolean'),
            enableLegacyTypeScriptModuleInterop: Me.opt('boolean'),
            enableLegacyBabel5ModuleInterop: Me.opt('boolean'),
            sourceMapOptions: Me.opt('SourceMapOptions'),
            filePath: Me.opt('string'),
          });
        var ho = { Transform: lo, SourceMapOptions: uo, Options: fo };
        const { Options: po } = (0, Me.createCheckers)(ho);
        function mo(t) {
          po.strictCheck(t);
        }
        function Vs() {
          _(), Xe(!1);
        }
        function Ws(t) {
          _(), yn(t);
        }
        function Tt(t) {
          xe(), jn(t);
        }
        function _n() {
          xe(),
            (r.tokens[r.tokens.length - 1].identifierRole =
              N.ImportDeclaration);
        }
        function jn(t) {
          let n;
          r.scopeDepth === 0
            ? (n = N.TopLevelDeclaration)
            : t
            ? (n = N.BlockScopedDeclaration)
            : (n = N.FunctionScopedDeclaration),
            (r.tokens[r.tokens.length - 1].identifierRole = n);
        }
        function yn(t) {
          switch (r.type) {
            case e._this: {
              const n = Q(0);
              _(), te(n);
              return;
            }
            case e._yield:
            case e.name: {
              (r.type = e.name), Tt(t);
              return;
            }
            case e.bracketL: {
              _(), qn(e.bracketR, t, !0);
              return;
            }
            case e.braceL:
              sr(!0, t);
              return;
            default:
              v();
          }
        }
        function qn(t, n, s = !1, c = !1, f = 0) {
          let k = !0,
            A = !1;
          const B = r.tokens.length;
          for (; !x(t) && !r.error; )
            if (
              (k
                ? (k = !1)
                : (m(e.comma),
                  (r.tokens[r.tokens.length - 1].contextId = f),
                  !A &&
                    r.tokens[B].isType &&
                    ((r.tokens[r.tokens.length - 1].isType = !0), (A = !0))),
              !(s && o(e.comma)))
            ) {
              if (x(t)) break;
              if (o(e.ellipsis)) {
                Ws(n), Hs(), x(e.comma), m(t);
                break;
              } else ko(c, n);
            }
        }
        function ko(t, n) {
          t &&
            $n([u._public, u._protected, u._private, u._readonly, u._override]),
            xn(n),
            Hs(),
            xn(n, !0);
        }
        function Hs() {
          j ? Da() : E && Ti();
        }
        function xn(t, n = !1) {
          if ((n || yn(t), !x(e.eq))) return;
          const s = r.tokens.length - 1;
          Xe(), (r.tokens[s].rhsEndIndex = r.tokens.length);
        }
        function Un() {
          return o(e.name);
        }
        function go() {
          return (
            o(e.name) ||
            !!(r.type & e.IS_KEYWORD) ||
            o(e.string) ||
            o(e.num) ||
            o(e.bigint) ||
            o(e.decimal)
          );
        }
        function Gs() {
          const t = r.snapshot();
          return (
            _(),
            (o(e.bracketL) ||
              o(e.braceL) ||
              o(e.star) ||
              o(e.ellipsis) ||
              o(e.hash) ||
              go()) &&
            !qe()
              ? !0
              : (r.restoreFromSnapshot(t), !1)
          );
        }
        function $n(t) {
          for (; Ys(t) !== null; );
        }
        function Ys(t) {
          if (!o(e.name)) return null;
          const n = r.contextualKeyword;
          if (t.indexOf(n) !== -1 && Gs()) {
            switch (n) {
              case u._readonly:
                r.tokens[r.tokens.length - 1].type = e._readonly;
                break;
              case u._abstract:
                r.tokens[r.tokens.length - 1].type = e._abstract;
                break;
              case u._static:
                r.tokens[r.tokens.length - 1].type = e._static;
                break;
              case u._public:
                r.tokens[r.tokens.length - 1].type = e._public;
                break;
              case u._private:
                r.tokens[r.tokens.length - 1].type = e._private;
                break;
              case u._protected:
                r.tokens[r.tokens.length - 1].type = e._protected;
                break;
              case u._override:
                r.tokens[r.tokens.length - 1].type = e._override;
                break;
              case u._declare:
                r.tokens[r.tokens.length - 1].type = e._declare;
                break;
              default:
                break;
            }
            return n;
          }
          return null;
        }
        function Zt() {
          for (xe(); x(e.dot); ) xe();
        }
        function _o() {
          Zt(), !qe() && o(e.lessThan) && Vt();
        }
        function yo() {
          _(), en();
        }
        function xo() {
          _();
        }
        function wo() {
          m(e._typeof),
            o(e._import) ? Xs() : Zt(),
            !qe() && o(e.lessThan) && Vt();
        }
        function Xs() {
          m(e._import),
            m(e.parenL),
            m(e.string),
            m(e.parenR),
            x(e.dot) && Zt(),
            o(e.lessThan) && Vt();
        }
        function Io() {
          x(e._const);
          const t = x(e._in),
            n = Ce(u._out);
          x(e._const),
            (t || n) && !o(e.name)
              ? (r.tokens[r.tokens.length - 1].type = e.name)
              : xe(),
            x(e._extends) && $e(),
            x(e.eq) && $e();
        }
        function Dt() {
          o(e.lessThan) && wn();
        }
        function wn() {
          const t = Q(0);
          for (
            o(e.lessThan) || o(e.typeParameterStart) ? _() : v();
            !x(e.greaterThan) && !r.error;

          )
            Io(), x(e.comma);
          te(t);
        }
        function Vn(t) {
          const n = t === e.arrow;
          Dt(),
            m(e.parenL),
            r.scopeDepth++,
            bo(!1),
            r.scopeDepth--,
            (n || o(t)) && Kt(t);
        }
        function bo(t) {
          qn(e.parenR, t);
        }
        function In() {
          x(e.comma) || R();
        }
        function zs() {
          Vn(e.colon), In();
        }
        function To() {
          const t = r.snapshot();
          _();
          const n = x(e.name) && o(e.colon);
          return r.restoreFromSnapshot(t), n;
        }
        function Js() {
          if (!(o(e.bracketL) && To())) return !1;
          const t = Q(0);
          return (
            m(e.bracketL), xe(), en(), m(e.bracketR), Ut(), In(), te(t), !0
          );
        }
        function Qs(t) {
          x(e.question),
            !t && (o(e.parenL) || o(e.lessThan))
              ? (Vn(e.colon), In())
              : (Ut(), In());
        }
        function Eo() {
          if (o(e.parenL) || o(e.lessThan)) {
            zs();
            return;
          }
          if (o(e._new)) {
            _(), o(e.parenL) || o(e.lessThan) ? zs() : Qs(!1);
            return;
          }
          const t = !!Ys([u._readonly]);
          Js() || ((P(u._get) || P(u._set)) && Gs(), nn(-1), Qs(t));
        }
        function Ao() {
          Zs();
        }
        function Zs() {
          for (m(e.braceL); !x(e.braceR) && !r.error; ) Eo();
        }
        function So() {
          const t = r.snapshot(),
            n = vo();
          return r.restoreFromSnapshot(t), n;
        }
        function vo() {
          return (
            _(),
            x(e.plus) || x(e.minus)
              ? P(u._readonly)
              : (P(u._readonly) && _(),
                !o(e.bracketL) || (_(), !Un()) ? !1 : (_(), o(e._in)))
          );
        }
        function Co() {
          xe(), m(e._in), $e();
        }
        function No() {
          m(e.braceL),
            o(e.plus) || o(e.minus) ? (_(), Ae(u._readonly)) : Ce(u._readonly),
            m(e.bracketL),
            Co(),
            Ce(u._as) && $e(),
            m(e.bracketR),
            o(e.plus) || o(e.minus) ? (_(), m(e.question)) : x(e.question),
            Wo(),
            R(),
            m(e.braceR);
        }
        function Ro() {
          for (m(e.bracketL); !x(e.bracketR) && !r.error; ) Po(), x(e.comma);
        }
        function Po() {
          x(e.ellipsis) ? $e() : ($e(), x(e.question)), x(e.colon) && $e();
        }
        function Lo() {
          m(e.parenL), $e(), m(e.parenR);
        }
        function Do() {
          for (me(), me(); !o(e.backQuote) && !r.error; )
            m(e.dollarBraceL), $e(), me(), me();
          _();
        }
        var Et;
        (function (t) {
          t[(t.TSFunctionType = 0)] = 'TSFunctionType';
          const s = 1;
          t[(t.TSConstructorType = s)] = 'TSConstructorType';
          const c = s + 1;
          t[(t.TSAbstractConstructorType = c)] = 'TSAbstractConstructorType';
        })(Et || (Et = {}));
        function Wn(t) {
          t === Et.TSAbstractConstructorType && Ae(u._abstract),
            (t === Et.TSConstructorType ||
              t === Et.TSAbstractConstructorType) &&
              m(e._new);
          const n = r.inDisallowConditionalTypesContext;
          (r.inDisallowConditionalTypesContext = !1),
            Vn(e.arrow),
            (r.inDisallowConditionalTypesContext = n);
        }
        function Fo() {
          switch (r.type) {
            case e.name:
              _o();
              return;
            case e._void:
            case e._null:
              _();
              return;
            case e.string:
            case e.num:
            case e.bigint:
            case e.decimal:
            case e._true:
            case e._false:
              Ht();
              return;
            case e.minus:
              _(), Ht();
              return;
            case e._this: {
              xo(), P(u._is) && !qe() && yo();
              return;
            }
            case e._typeof:
              wo();
              return;
            case e._import:
              Xs();
              return;
            case e.braceL:
              So() ? No() : Ao();
              return;
            case e.bracketL:
              Ro();
              return;
            case e.parenL:
              Lo();
              return;
            case e.backQuote:
              Do();
              return;
            default:
              if (r.type & e.IS_KEYWORD) {
                _(), (r.tokens[r.tokens.length - 1].type = e.name);
                return;
              }
              break;
          }
          v();
        }
        function Oo() {
          for (Fo(); !qe() && x(e.bracketL); )
            x(e.bracketR) || ($e(), m(e.bracketR));
        }
        function Mo() {
          if ((Ae(u._infer), xe(), o(e._extends))) {
            const t = r.snapshot();
            m(e._extends);
            const n = r.inDisallowConditionalTypesContext;
            (r.inDisallowConditionalTypesContext = !0),
              $e(),
              (r.inDisallowConditionalTypesContext = n),
              (r.error ||
                (!r.inDisallowConditionalTypesContext && o(e.question))) &&
                r.restoreFromSnapshot(t);
          }
        }
        function Hn() {
          if (P(u._keyof) || P(u._unique) || P(u._readonly)) _(), Hn();
          else if (P(u._infer)) Mo();
          else {
            const t = r.inDisallowConditionalTypesContext;
            (r.inDisallowConditionalTypesContext = !1),
              Oo(),
              (r.inDisallowConditionalTypesContext = t);
          }
        }
        function Ks() {
          if ((x(e.bitwiseAND), Hn(), o(e.bitwiseAND)))
            for (; x(e.bitwiseAND); ) Hn();
        }
        function Bo() {
          if ((x(e.bitwiseOR), Ks(), o(e.bitwiseOR)))
            for (; x(e.bitwiseOR); ) Ks();
        }
        function jo() {
          return o(e.lessThan) ? !0 : o(e.parenL) && Uo();
        }
        function qo() {
          if (o(e.name) || o(e._this)) return _(), !0;
          if (o(e.braceL) || o(e.bracketL)) {
            let t = 1;
            for (_(); t > 0 && !r.error; )
              o(e.braceL) || o(e.bracketL)
                ? t++
                : (o(e.braceR) || o(e.bracketR)) && t--,
                _();
            return !0;
          }
          return !1;
        }
        function Uo() {
          const t = r.snapshot(),
            n = $o();
          return r.restoreFromSnapshot(t), n;
        }
        function $o() {
          return (
            _(),
            !!(
              o(e.parenR) ||
              o(e.ellipsis) ||
              (qo() &&
                (o(e.colon) ||
                  o(e.comma) ||
                  o(e.question) ||
                  o(e.eq) ||
                  (o(e.parenR) && (_(), o(e.arrow)))))
            )
          );
        }
        function Kt(t) {
          const n = Q(0);
          m(t), Ho() || $e(), te(n);
        }
        function Vo() {
          o(e.colon) && Kt(e.colon);
        }
        function Ut() {
          o(e.colon) && en();
        }
        function Wo() {
          x(e.colon) && $e();
        }
        function Ho() {
          const t = r.snapshot();
          return P(u._asserts)
            ? (_(),
              Ce(u._is)
                ? ($e(), !0)
                : Un() || o(e._this)
                ? (_(), Ce(u._is) && $e(), !0)
                : (r.restoreFromSnapshot(t), !1))
            : Un() || o(e._this)
            ? (_(),
              P(u._is) && !qe()
                ? (_(), $e(), !0)
                : (r.restoreFromSnapshot(t), !1))
            : !1;
        }
        function en() {
          const t = Q(0);
          m(e.colon), $e(), te(t);
        }
        function $e() {
          if (
            (e1(),
            r.inDisallowConditionalTypesContext || qe() || !x(e._extends))
          )
            return;
          const t = r.inDisallowConditionalTypesContext;
          (r.inDisallowConditionalTypesContext = !0),
            e1(),
            (r.inDisallowConditionalTypesContext = t),
            m(e.question),
            $e(),
            m(e.colon),
            $e();
        }
        function Go() {
          return P(u._abstract) && i() === e._new;
        }
        function e1() {
          if (jo()) {
            Wn(Et.TSFunctionType);
            return;
          }
          if (o(e._new)) {
            Wn(Et.TSConstructorType);
            return;
          } else if (Go()) {
            Wn(Et.TSAbstractConstructorType);
            return;
          }
          Bo();
        }
        function Yo() {
          const t = Q(1);
          $e(), m(e.greaterThan), te(t), tn();
        }
        function Xo() {
          if (x(e.jsxTagStart)) {
            r.tokens[r.tokens.length - 1].type = e.typeParameterStart;
            const t = Q(1);
            for (; !o(e.greaterThan) && !r.error; ) $e(), x(e.comma);
            ct(), te(t);
          }
        }
        function t1() {
          for (; !o(e.braceL) && !r.error; ) zo(), x(e.comma);
        }
        function zo() {
          Zt(), o(e.lessThan) && Vt();
        }
        function Jo() {
          Tt(!1), Dt(), x(e._extends) && t1(), Zs();
        }
        function Qo() {
          Tt(!1), Dt(), m(e.eq), $e(), R();
        }
        function Zo() {
          if ((o(e.string) ? Ht() : xe(), x(e.eq))) {
            const t = r.tokens.length - 1;
            Xe(), (r.tokens[t].rhsEndIndex = r.tokens.length);
          }
        }
        function Gn() {
          for (Tt(!1), m(e.braceL); !x(e.braceR) && !r.error; )
            Zo(), x(e.comma);
        }
        function Yn() {
          m(e.braceL), Pn(e.braceR);
        }
        function Xn() {
          Tt(!1), x(e.dot) ? Xn() : Yn();
        }
        function n1() {
          P(u._global) ? xe() : o(e.string) ? xt() : v(),
            o(e.braceL) ? Yn() : R();
        }
        function zn() {
          _n(), m(e.eq), ei(), R();
        }
        function Ko() {
          return P(u._require) && i() === e.parenL;
        }
        function ei() {
          Ko() ? ti() : Zt();
        }
        function ti() {
          Ae(u._require), m(e.parenL), o(e.string) || v(), Ht(), m(e.parenR);
        }
        function ni() {
          if (K()) return !1;
          switch (r.type) {
            case e._function: {
              const t = Q(1);
              _();
              const n = r.start;
              return Mt(n, !0), te(t), !0;
            }
            case e._class: {
              const t = Q(1);
              return Bt(!0, !1), te(t), !0;
            }
            case e._const:
              if (o(e._const) && Se(u._enum)) {
                const t = Q(1);
                return (
                  m(e._const),
                  Ae(u._enum),
                  (r.tokens[r.tokens.length - 1].type = e._enum),
                  Gn(),
                  te(t),
                  !0
                );
              }
            case e._var:
            case e._let: {
              const t = Q(1);
              return Rn(r.type !== e._var), te(t), !0;
            }
            case e.name: {
              const t = Q(1),
                n = r.contextualKeyword;
              let s = !1;
              return (
                n === u._global ? (n1(), (s = !0)) : (s = bn(n, !0)), te(t), s
              );
            }
            default:
              return !1;
          }
        }
        function r1() {
          return bn(r.contextualKeyword, !0);
        }
        function ri(t) {
          switch (t) {
            case u._declare: {
              const n = r.tokens.length - 1;
              if (ni()) return (r.tokens[n].type = e._declare), !0;
              break;
            }
            case u._global:
              if (o(e.braceL)) return Yn(), !0;
              break;
            default:
              return bn(t, !1);
          }
          return !1;
        }
        function bn(t, n) {
          switch (t) {
            case u._abstract:
              if ($t(n) && o(e._class))
                return (
                  (r.tokens[r.tokens.length - 1].type = e._abstract),
                  Bt(!0, !1),
                  !0
                );
              break;
            case u._enum:
              if ($t(n) && o(e.name))
                return (r.tokens[r.tokens.length - 1].type = e._enum), Gn(), !0;
              break;
            case u._interface:
              if ($t(n) && o(e.name)) {
                const s = Q(n ? 2 : 1);
                return Jo(), te(s), !0;
              }
              break;
            case u._module:
              if ($t(n)) {
                if (o(e.string)) {
                  const s = Q(n ? 2 : 1);
                  return n1(), te(s), !0;
                } else if (o(e.name)) {
                  const s = Q(n ? 2 : 1);
                  return Xn(), te(s), !0;
                }
              }
              break;
            case u._namespace:
              if ($t(n) && o(e.name)) {
                const s = Q(n ? 2 : 1);
                return Xn(), te(s), !0;
              }
              break;
            case u._type:
              if ($t(n) && o(e.name)) {
                const s = Q(n ? 2 : 1);
                return Qo(), te(s), !0;
              }
              break;
            default:
              break;
          }
          return !1;
        }
        function $t(t) {
          return t ? (_(), !0) : !K();
        }
        function si() {
          const t = r.snapshot();
          return (
            wn(),
            Gt(),
            Vo(),
            m(e.arrow),
            r.error ? (r.restoreFromSnapshot(t), !1) : (sn(!0), !0)
          );
        }
        function Jn() {
          r.type === e.bitShiftL && ((r.pos -= 1), J(e.lessThan)), Vt();
        }
        function Vt() {
          const t = Q(0);
          for (m(e.lessThan); !o(e.greaterThan) && !r.error; ) $e(), x(e.comma);
          t
            ? (m(e.greaterThan), te(t))
            : (te(t),
              qt(),
              m(e.greaterThan),
              (r.tokens[r.tokens.length - 1].isType = !0));
        }
        function s1() {
          if (o(e.name))
            switch (r.contextualKeyword) {
              case u._abstract:
              case u._declare:
              case u._enum:
              case u._interface:
              case u._module:
              case u._namespace:
              case u._type:
                return !0;
              default:
                break;
            }
          return !1;
        }
        function oi(t, n) {
          if ((o(e.colon) && Kt(e.colon), !o(e.braceL) && K())) {
            let s = r.tokens.length - 1;
            for (
              ;
              s >= 0 &&
              (r.tokens[s].start >= t ||
                r.tokens[s].type === e._default ||
                r.tokens[s].type === e._export);

            )
              (r.tokens[s].isType = !0), s--;
            return;
          }
          sn(!1, n);
        }
        function ii(t, n, s) {
          if (!qe() && x(e.bang)) {
            r.tokens[r.tokens.length - 1].type = e.nonNullAssertion;
            return;
          }
          if (o(e.lessThan) || o(e.bitShiftL)) {
            const c = r.snapshot();
            if (!n && h1() && si()) return;
            if (
              (Jn(),
              !n && x(e.parenL)
                ? ((r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
                  At())
                : o(e.backQuote)
                ? rr()
                : (r.type === e.greaterThan ||
                    (r.type !== e.parenL &&
                      r.type & e.IS_EXPRESSION_START &&
                      !qe())) &&
                  v(),
              r.error)
            )
              r.restoreFromSnapshot(c);
            else return;
          } else
            !n &&
              o(e.questionDot) &&
              i() === e.lessThan &&
              (_(),
              (r.tokens[t].isOptionalChainStart = !0),
              (r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
              Vt(),
              m(e.parenL),
              At());
          Kn(t, n, s);
        }
        function ai() {
          if (x(e._import))
            return P(u._type) && i() !== e.eq && Ae(u._type), zn(), !0;
          if (x(e.eq)) return Ye(), R(), !0;
          if (Ce(u._as)) return Ae(u._namespace), xe(), R(), !0;
          if (P(u._type)) {
            const t = i();
            (t === e.braceL || t === e.star) && _();
          }
          return !1;
        }
        function ci() {
          if ((xe(), o(e.comma) || o(e.braceR))) {
            r.tokens[r.tokens.length - 1].identifierRole = N.ImportDeclaration;
            return;
          }
          if ((xe(), o(e.comma) || o(e.braceR))) {
            (r.tokens[r.tokens.length - 1].identifierRole =
              N.ImportDeclaration),
              (r.tokens[r.tokens.length - 2].isType = !0),
              (r.tokens[r.tokens.length - 1].isType = !0);
            return;
          }
          if ((xe(), o(e.comma) || o(e.braceR))) {
            (r.tokens[r.tokens.length - 3].identifierRole = N.ImportAccess),
              (r.tokens[r.tokens.length - 1].identifierRole =
                N.ImportDeclaration);
            return;
          }
          xe(),
            (r.tokens[r.tokens.length - 3].identifierRole = N.ImportAccess),
            (r.tokens[r.tokens.length - 1].identifierRole =
              N.ImportDeclaration),
            (r.tokens[r.tokens.length - 4].isType = !0),
            (r.tokens[r.tokens.length - 3].isType = !0),
            (r.tokens[r.tokens.length - 2].isType = !0),
            (r.tokens[r.tokens.length - 1].isType = !0);
        }
        function li() {
          if ((xe(), o(e.comma) || o(e.braceR))) {
            r.tokens[r.tokens.length - 1].identifierRole = N.ExportAccess;
            return;
          }
          if ((xe(), o(e.comma) || o(e.braceR))) {
            (r.tokens[r.tokens.length - 1].identifierRole = N.ExportAccess),
              (r.tokens[r.tokens.length - 2].isType = !0),
              (r.tokens[r.tokens.length - 1].isType = !0);
            return;
          }
          if ((xe(), o(e.comma) || o(e.braceR))) {
            r.tokens[r.tokens.length - 3].identifierRole = N.ExportAccess;
            return;
          }
          xe(),
            (r.tokens[r.tokens.length - 3].identifierRole = N.ExportAccess),
            (r.tokens[r.tokens.length - 4].isType = !0),
            (r.tokens[r.tokens.length - 3].isType = !0),
            (r.tokens[r.tokens.length - 2].isType = !0),
            (r.tokens[r.tokens.length - 1].isType = !0);
        }
        function ui() {
          if (P(u._abstract) && i() === e._class)
            return (r.type = e._abstract), _(), Bt(!0, !0), !0;
          if (P(u._interface)) {
            const t = Q(2);
            return bn(u._interface, !0), te(t), !0;
          }
          return !1;
        }
        function fi() {
          if (r.type === e._const) {
            const t = l();
            if (t.type === e.name && t.contextualKeyword === u._enum)
              return (
                m(e._const),
                Ae(u._enum),
                (r.tokens[r.tokens.length - 1].type = e._enum),
                Gn(),
                !0
              );
          }
          return !1;
        }
        function hi(t) {
          const n = r.tokens.length;
          $n([u._abstract, u._readonly, u._declare, u._static, u._override]);
          const s = r.tokens.length;
          if (Js()) {
            const f = t ? n - 1 : n;
            for (let k = f; k < s; k++) r.tokens[k].isType = !0;
            return !0;
          }
          return !1;
        }
        function pi(t) {
          ri(t) || R();
        }
        function mi() {
          const t = Ce(u._declare);
          t && (r.tokens[r.tokens.length - 1].type = e._declare);
          let n = !1;
          if (o(e.name))
            if (t) {
              const s = Q(2);
              (n = r1()), te(s);
            } else n = r1();
          if (!n)
            if (t) {
              const s = Q(2);
              it(!0), te(s);
            } else it(!0);
        }
        function di(t) {
          if (
            (t && (o(e.lessThan) || o(e.bitShiftL)) && Jn(), Ce(u._implements))
          ) {
            r.tokens[r.tokens.length - 1].type = e._implements;
            const n = Q(1);
            t1(), te(n);
          }
        }
        function ki() {
          Dt();
        }
        function gi() {
          Dt();
        }
        function _i() {
          const t = Q(0);
          qe() || x(e.bang), Ut(), te(t);
        }
        function yi() {
          o(e.colon) && en();
        }
        function xi(t, n) {
          return T ? wi(t, n) : Ii(t, n);
        }
        function wi(t, n) {
          if (!o(e.lessThan)) return ht(t, n);
          const s = r.snapshot();
          let c = ht(t, n);
          if (r.error) r.restoreFromSnapshot(s);
          else return c;
          return (
            (r.type = e.typeParameterStart), wn(), (c = ht(t, n)), c || v(), c
          );
        }
        function Ii(t, n) {
          if (!o(e.lessThan)) return ht(t, n);
          const s = r.snapshot();
          wn();
          const c = ht(t, n);
          if ((c || v(), r.error)) r.restoreFromSnapshot(s);
          else return c;
          return ht(t, n);
        }
        function bi() {
          if (o(e.colon)) {
            const t = r.snapshot();
            Kt(e.colon),
              Fe() && v(),
              o(e.arrow) || v(),
              r.error && r.restoreFromSnapshot(t);
          }
          return x(e.arrow);
        }
        function Ti() {
          const t = Q(0);
          x(e.question), Ut(), te(t);
        }
        function Ei() {
          (o(e.lessThan) || o(e.bitShiftL)) && Jn(), S1();
        }
        function Ai() {
          let t = !1,
            n = !1;
          for (;;) {
            if (r.pos >= w.length) {
              v('Unterminated JSX contents');
              return;
            }
            const s = w.charCodeAt(r.pos);
            if (s === h.lessThan || s === h.leftCurlyBrace) {
              if (r.pos === r.start) {
                if (s === h.lessThan) {
                  r.pos++, J(e.jsxTagStart);
                  return;
                }
                zt(s);
                return;
              }
              J(t && !n ? e.jsxEmptyText : e.jsxText);
              return;
            }
            s === h.lineFeed
              ? (t = !0)
              : s !== h.space &&
                s !== h.carriageReturn &&
                s !== h.tab &&
                (n = !0),
              r.pos++;
          }
        }
        function Si(t) {
          for (r.pos++; ; ) {
            if (r.pos >= w.length) {
              v('Unterminated string constant');
              return;
            }
            if (w.charCodeAt(r.pos) === t) {
              r.pos++;
              break;
            }
            r.pos++;
          }
          J(e.string);
        }
        function vi() {
          let t;
          do {
            if (r.pos > w.length) {
              v('Unexpectedly reached the end of input.');
              return;
            }
            t = w.charCodeAt(++r.pos);
          } while (M[t] || t === h.dash);
          J(e.jsxName);
        }
        function Qn() {
          ct();
        }
        function o1(t) {
          if ((Qn(), !x(e.colon))) {
            r.tokens[r.tokens.length - 1].identifierRole = t;
            return;
          }
          Qn();
        }
        function i1() {
          const t = r.tokens.length;
          o1(N.Access);
          let n = !1;
          for (; o(e.dot); ) (n = !0), ct(), Qn();
          if (!n) {
            const s = r.tokens[t],
              c = w.charCodeAt(s.start);
            c >= h.lowercaseA && c <= h.lowercaseZ && (s.identifierRole = null);
          }
        }
        function Ci() {
          switch (r.type) {
            case e.braceL:
              _(), Ye(), ct();
              return;
            case e.jsxTagStart:
              c1(), ct();
              return;
            case e.string:
              ct();
              return;
            default:
              v(
                'JSX value should be either an expression or a quoted JSX text',
              );
          }
        }
        function Ni() {
          m(e.ellipsis), Ye();
        }
        function Ri(t) {
          if (o(e.jsxTagEnd)) return !1;
          i1(), E && Xo();
          let n = !1;
          for (; !o(e.slash) && !o(e.jsxTagEnd) && !r.error; ) {
            if (x(e.braceL)) {
              (n = !0), m(e.ellipsis), Xe(), ct();
              continue;
            }
            n &&
              r.end - r.start === 3 &&
              w.charCodeAt(r.start) === h.lowercaseK &&
              w.charCodeAt(r.start + 1) === h.lowercaseE &&
              w.charCodeAt(r.start + 2) === h.lowercaseY &&
              (r.tokens[t].jsxRole = se.KeyAfterPropSpread),
              o1(N.ObjectKey),
              o(e.eq) && (ct(), Ci());
          }
          const s = o(e.slash);
          return s && ct(), s;
        }
        function Pi() {
          o(e.jsxTagEnd) || i1();
        }
        function a1() {
          const t = r.tokens.length - 1;
          r.tokens[t].jsxRole = se.NoChildren;
          let n = 0;
          if (!Ri(t))
            for (Wt(); ; )
              switch (r.type) {
                case e.jsxTagStart:
                  if ((ct(), o(e.slash))) {
                    ct(),
                      Pi(),
                      r.tokens[t].jsxRole !== se.KeyAfterPropSpread &&
                        (n === 1
                          ? (r.tokens[t].jsxRole = se.OneChild)
                          : n > 1 && (r.tokens[t].jsxRole = se.StaticChildren));
                    return;
                  }
                  n++, a1(), Wt();
                  break;
                case e.jsxText:
                  n++, Wt();
                  break;
                case e.jsxEmptyText:
                  Wt();
                  break;
                case e.braceL:
                  _(),
                    o(e.ellipsis)
                      ? (Ni(), Wt(), (n += 2))
                      : (o(e.braceR) || (n++, Ye()), Wt());
                  break;
                default:
                  v();
                  return;
              }
        }
        function c1() {
          ct(), a1();
        }
        function ct() {
          r.tokens.push(new ae()), le(), (r.start = r.pos);
          const t = w.charCodeAt(r.pos);
          if (pe[t]) vi();
          else if (t === h.quotationMark || t === h.apostrophe) Si(t);
          else
            switch ((++r.pos, t)) {
              case h.greaterThan:
                J(e.jsxTagEnd);
                break;
              case h.lessThan:
                J(e.jsxTagStart);
                break;
              case h.slash:
                J(e.slash);
                break;
              case h.equalsTo:
                J(e.eq);
                break;
              case h.leftCurlyBrace:
                J(e.braceL);
                break;
              case h.dot:
                J(e.dot);
                break;
              case h.colon:
                J(e.colon);
                break;
              default:
                v();
            }
        }
        function Wt() {
          r.tokens.push(new ae()), (r.start = r.pos), Ai();
        }
        function Li(t) {
          if (o(e.question)) {
            const n = i();
            if (n === e.colon || n === e.comma || n === e.parenR) return;
          }
          l1(t);
        }
        function Di() {
          Oe(e.question), o(e.colon) && (E ? en() : j && Ot());
        }
        class Fi {
          constructor(n) {
            this.stop = n;
          }
        }
        function Ye(t = !1) {
          if ((Xe(t), o(e.comma))) for (; x(e.comma); ) Xe(t);
        }
        function Xe(t = !1, n = !1) {
          return E ? xi(t, n) : j ? qa(t, n) : ht(t, n);
        }
        function ht(t, n) {
          if (o(e._yield)) return Qi(), !1;
          (o(e.parenL) || o(e.name) || o(e._yield)) &&
            (r.potentialArrowAt = r.start);
          const s = Oi(t);
          return n && nr(), r.type & e.IS_ASSIGN ? (_(), Xe(t), !1) : s;
        }
        function Oi(t) {
          return Bi(t) ? !0 : (Mi(t), !1);
        }
        function Mi(t) {
          E || j ? Li(t) : l1(t);
        }
        function l1(t) {
          x(e.question) && (Xe(), m(e.colon), Xe(t));
        }
        function Bi(t) {
          const n = r.tokens.length;
          return tn() ? !0 : (Tn(n, -1, t), !1);
        }
        function Tn(t, n, s) {
          if (
            E &&
            (e._in & e.PRECEDENCE_MASK) > n &&
            !qe() &&
            (Ce(u._as) || Ce(u._satisfies))
          ) {
            const f = Q(1);
            $e(), te(f), qt(), Tn(t, n, s);
            return;
          }
          const c = r.type & e.PRECEDENCE_MASK;
          if (c > 0 && (!s || !o(e._in)) && c > n) {
            const f = r.type;
            _(),
              f === e.nullishCoalescing &&
                (r.tokens[r.tokens.length - 1].nullishStartIndex = t);
            const k = r.tokens.length;
            tn(),
              Tn(k, f & e.IS_RIGHT_ASSOCIATIVE ? c - 1 : c, s),
              f === e.nullishCoalescing &&
                (r.tokens[t].numNullishCoalesceStarts++,
                r.tokens[r.tokens.length - 1].numNullishCoalesceEnds++),
              Tn(t, n, s);
          }
        }
        function tn() {
          if (E && !T && x(e.lessThan)) return Yo(), !1;
          if (P(u._module) && y() === h.leftCurlyBrace && !Ke())
            return Zi(), !1;
          if (r.type & e.IS_PREFIX) return _(), tn(), !1;
          if (u1()) return !0;
          for (; r.type & e.IS_POSTFIX && !Fe(); )
            r.type === e.preIncDec && (r.type = e.postIncDec), _();
          return !1;
        }
        function u1() {
          const t = r.tokens.length;
          return xt()
            ? !0
            : (Zn(t),
              r.tokens.length > t &&
                r.tokens[t].isOptionalChainStart &&
                (r.tokens[r.tokens.length - 1].isOptionalChainEnd = !0),
              !1);
        }
        function Zn(t, n = !1) {
          j ? $a(t, n) : f1(t, n);
        }
        function f1(t, n = !1) {
          const s = new Fi(!1);
          do ji(t, n, s);
          while (!s.stop && !r.error);
        }
        function ji(t, n, s) {
          E ? ii(t, n, s) : j ? Ia(t, n, s) : Kn(t, n, s);
        }
        function Kn(t, n, s) {
          if (!n && x(e.doubleColon)) er(), (s.stop = !0), Zn(t, n);
          else if (o(e.questionDot)) {
            if (
              ((r.tokens[t].isOptionalChainStart = !0), n && i() === e.parenL)
            ) {
              s.stop = !0;
              return;
            }
            _(),
              (r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
              x(e.bracketL) ? (Ye(), m(e.bracketR)) : x(e.parenL) ? At() : En();
          } else if (x(e.dot))
            (r.tokens[r.tokens.length - 1].subscriptStartIndex = t), En();
          else if (x(e.bracketL))
            (r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
              Ye(),
              m(e.bracketR);
          else if (!n && o(e.parenL))
            if (h1()) {
              const c = r.snapshot(),
                f = r.tokens.length;
              _(), (r.tokens[r.tokens.length - 1].subscriptStartIndex = t);
              const k = q();
              (r.tokens[r.tokens.length - 1].contextId = k),
                At(),
                (r.tokens[r.tokens.length - 1].contextId = k),
                qi() &&
                  (r.restoreFromSnapshot(c),
                  (s.stop = !0),
                  r.scopeDepth++,
                  Gt(),
                  Ui(f));
            } else {
              _(), (r.tokens[r.tokens.length - 1].subscriptStartIndex = t);
              const c = q();
              (r.tokens[r.tokens.length - 1].contextId = c),
                At(),
                (r.tokens[r.tokens.length - 1].contextId = c);
            }
          else o(e.backQuote) ? rr() : (s.stop = !0);
        }
        function h1() {
          return (
            r.tokens[r.tokens.length - 1].contextualKeyword === u._async &&
            !Fe()
          );
        }
        function At() {
          let t = !0;
          for (; !x(e.parenR) && !r.error; ) {
            if (t) t = !1;
            else if ((m(e.comma), x(e.parenR))) break;
            k1(!1);
          }
        }
        function qi() {
          return o(e.colon) || o(e.arrow);
        }
        function Ui(t) {
          E ? yi() : j && ja(), m(e.arrow), rn(t);
        }
        function er() {
          const t = r.tokens.length;
          xt(), Zn(t, !0);
        }
        function xt() {
          if (x(e.modulo)) return xe(), !1;
          if (o(e.jsxText) || o(e.jsxEmptyText)) return Ht(), !1;
          if (o(e.lessThan) && T)
            return (r.type = e.jsxTagStart), c1(), _(), !1;
          const t = r.potentialArrowAt === r.start;
          switch (r.type) {
            case e.slash:
            case e.assign:
              Re();
            case e._super:
            case e._this:
            case e.regexp:
            case e.num:
            case e.bigint:
            case e.decimal:
            case e.string:
            case e._null:
            case e._true:
            case e._false:
              return _(), !1;
            case e._import:
              return (
                _(),
                o(e.dot) &&
                  ((r.tokens[r.tokens.length - 1].type = e.name), _(), xe()),
                !1
              );
            case e.name: {
              const n = r.tokens.length,
                s = r.start,
                c = r.contextualKeyword;
              return (
                xe(),
                c === u._await
                  ? (Ji(), !1)
                  : c === u._async && o(e._function) && !Fe()
                  ? (_(), Mt(s, !1), !1)
                  : t && c === u._async && !Fe() && o(e.name)
                  ? (r.scopeDepth++, Tt(!1), m(e.arrow), rn(n), !0)
                  : o(e._do) && !Fe()
                  ? (_(), St(), !1)
                  : t && !Fe() && o(e.arrow)
                  ? (r.scopeDepth++, jn(!1), m(e.arrow), rn(n), !0)
                  : ((r.tokens[r.tokens.length - 1].identifierRole = N.Access),
                    !1)
              );
            }
            case e._do:
              return _(), St(), !1;
            case e.parenL:
              return p1(t);
            case e.bracketL:
              return _(), d1(e.bracketR, !0), !1;
            case e.braceL:
              return sr(!1, !1), !1;
            case e._function:
              return $i(), !1;
            case e.at:
              kr();
            case e._class:
              return Bt(!1), !1;
            case e._new:
              return Wi(), !1;
            case e.backQuote:
              return rr(), !1;
            case e.doubleColon:
              return _(), er(), !1;
            case e.hash: {
              const n = y();
              return pe[n] || n === h.backslash ? En() : _(), !1;
            }
            default:
              return v(), !1;
          }
        }
        function En() {
          x(e.hash), xe();
        }
        function $i() {
          const t = r.start;
          xe(), x(e.dot) && xe(), Mt(t, !1);
        }
        function Ht() {
          _();
        }
        function An() {
          m(e.parenL), Ye(), m(e.parenR);
        }
        function p1(t) {
          const n = r.snapshot(),
            s = r.tokens.length;
          m(e.parenL);
          let c = !0;
          for (; !o(e.parenR) && !r.error; ) {
            if (c) c = !1;
            else if ((m(e.comma), o(e.parenR))) break;
            if (o(e.ellipsis)) {
              Ws(!1), nr();
              break;
            } else Xe(!1, !0);
          }
          return (
            m(e.parenR),
            t && Vi() && tr()
              ? (r.restoreFromSnapshot(n),
                r.scopeDepth++,
                Gt(),
                tr(),
                rn(s),
                r.error ? (r.restoreFromSnapshot(n), p1(!1), !1) : !0)
              : !1
          );
        }
        function Vi() {
          return o(e.colon) || !Fe();
        }
        function tr() {
          return E ? bi() : j ? Ua() : x(e.arrow);
        }
        function nr() {
          (E || j) && Di();
        }
        function Wi() {
          if ((m(e._new), x(e.dot))) {
            xe();
            return;
          }
          Hi(), j && ba(), x(e.parenL) && d1(e.parenR);
        }
        function Hi() {
          er(), x(e.questionDot);
        }
        function rr() {
          for (me(), me(); !o(e.backQuote) && !r.error; )
            m(e.dollarBraceL), Ye(), me(), me();
          _();
        }
        function sr(t, n) {
          const s = q();
          let c = !0;
          for (
            _(), r.tokens[r.tokens.length - 1].contextId = s;
            !x(e.braceR) && !r.error;

          ) {
            if (c) c = !1;
            else if ((m(e.comma), x(e.braceR))) break;
            let f = !1;
            if (o(e.ellipsis)) {
              const k = r.tokens.length;
              if (
                (Vs(), t && (r.tokens.length === k + 2 && jn(n), x(e.braceR)))
              )
                break;
              continue;
            }
            t || (f = x(e.star)),
              !t && P(u._async)
                ? (f && v(),
                  xe(),
                  o(e.colon) ||
                    o(e.parenL) ||
                    o(e.braceR) ||
                    o(e.eq) ||
                    o(e.comma) ||
                    (o(e.star) && (_(), (f = !0)), nn(s)))
                : nn(s),
              zi(t, n, s);
          }
          r.tokens[r.tokens.length - 1].contextId = s;
        }
        function Gi(t) {
          return (
            !t &&
            (o(e.string) ||
              o(e.num) ||
              o(e.bracketL) ||
              o(e.name) ||
              !!(r.type & e.IS_KEYWORD))
          );
        }
        function Yi(t, n) {
          const s = r.start;
          return o(e.parenL)
            ? (t && v(), or(s, !1), !0)
            : Gi(t)
            ? (nn(n), or(s, !1), !0)
            : !1;
        }
        function Xi(t, n) {
          if (x(e.colon)) {
            t ? xn(n) : Xe(!1);
            return;
          }
          let s;
          t
            ? r.scopeDepth === 0
              ? (s = N.ObjectShorthandTopLevelDeclaration)
              : n
              ? (s = N.ObjectShorthandBlockScopedDeclaration)
              : (s = N.ObjectShorthandFunctionScopedDeclaration)
            : (s = N.ObjectShorthand),
            (r.tokens[r.tokens.length - 1].identifierRole = s),
            xn(n, !0);
        }
        function zi(t, n, s) {
          E ? ki() : j && La(), Yi(t, s) || Xi(t, n);
        }
        function nn(t) {
          j && dr(),
            x(e.bracketL)
              ? ((r.tokens[r.tokens.length - 1].contextId = t),
                Xe(),
                m(e.bracketR),
                (r.tokens[r.tokens.length - 1].contextId = t))
              : (o(e.num) || o(e.string) || o(e.bigint) || o(e.decimal)
                  ? xt()
                  : En(),
                (r.tokens[r.tokens.length - 1].identifierRole = N.ObjectKey),
                (r.tokens[r.tokens.length - 1].contextId = t));
        }
        function or(t, n) {
          const s = q();
          r.scopeDepth++;
          const c = r.tokens.length;
          Gt(n, s), m1(t, s);
          const k = r.tokens.length;
          r.scopes.push(new O(c, k, !0)), r.scopeDepth--;
        }
        function rn(t) {
          sn(!0);
          const n = r.tokens.length;
          r.scopes.push(new O(t, n, !0)), r.scopeDepth--;
        }
        function m1(t, n = 0) {
          E ? oi(t, n) : j ? wa(n) : sn(!1, n);
        }
        function sn(t, n = 0) {
          t && !o(e.braceL) ? Xe() : St(!0, n);
        }
        function d1(t, n = !1) {
          let s = !0;
          for (; !x(t) && !r.error; ) {
            if (s) s = !1;
            else if ((m(e.comma), x(t))) break;
            k1(n);
          }
        }
        function k1(t) {
          (t && o(e.comma)) ||
            (o(e.ellipsis) ? (Vs(), nr()) : o(e.question) ? _() : Xe(!1, !0));
        }
        function xe() {
          _(), (r.tokens[r.tokens.length - 1].type = e.name);
        }
        function Ji() {
          tn();
        }
        function Qi() {
          _(), !o(e.semi) && !Fe() && (x(e.star), Xe());
        }
        function Zi() {
          Ae(u._module), m(e.braceL), Pn(e.braceR);
        }
        function Ki(t) {
          return (
            (t.type === e.name || !!(t.type & e.IS_KEYWORD)) &&
            t.contextualKeyword !== u._from
          );
        }
        function pt(t) {
          const n = Q(0);
          m(t || e.colon), rt(), te(n);
        }
        function g1() {
          m(e.modulo), Ae(u._checks), x(e.parenL) && (Ye(), m(e.parenR));
        }
        function ir() {
          const t = Q(0);
          m(e.colon), o(e.modulo) ? g1() : (rt(), o(e.modulo) && g1()), te(t);
        }
        function ea() {
          _(), cr(!0);
        }
        function ta() {
          _(),
            xe(),
            o(e.lessThan) && ft(),
            m(e.parenL),
            mr(),
            m(e.parenR),
            ir(),
            R();
        }
        function ar() {
          o(e._class)
            ? ea()
            : o(e._function)
            ? ta()
            : o(e._var)
            ? na()
            : Ce(u._module)
            ? x(e.dot)
              ? oa()
              : ra()
            : P(u._type)
            ? ia()
            : P(u._opaque)
            ? aa()
            : P(u._interface)
            ? ca()
            : o(e._export)
            ? sa()
            : v();
        }
        function na() {
          _(), b1(), R();
        }
        function ra() {
          for (
            o(e.string) ? xt() : xe(), m(e.braceL);
            !o(e.braceR) && !r.error;

          )
            o(e._import) ? (_(), F1()) : v();
          m(e.braceR);
        }
        function sa() {
          m(e._export),
            x(e._default)
              ? o(e._function) || o(e._class)
                ? ar()
                : (rt(), R())
              : o(e._var) || o(e._function) || o(e._class) || P(u._opaque)
              ? ar()
              : o(e.star) ||
                o(e.braceL) ||
                P(u._interface) ||
                P(u._type) ||
                P(u._opaque)
              ? L1()
              : v();
        }
        function oa() {
          Ae(u._exports), Ot(), R();
        }
        function ia() {
          _(), ur();
        }
        function aa() {
          _(), fr(!0);
        }
        function ca() {
          _(), cr();
        }
        function cr(t = !1) {
          if ((vn(), o(e.lessThan) && ft(), x(e._extends)))
            do Sn();
            while (!t && x(e.comma));
          if (P(u._mixins)) {
            _();
            do Sn();
            while (x(e.comma));
          }
          if (P(u._implements)) {
            _();
            do Sn();
            while (x(e.comma));
          }
          Cn(t, !1, t);
        }
        function Sn() {
          _1(!1), o(e.lessThan) && Ft();
        }
        function lr() {
          cr();
        }
        function vn() {
          xe();
        }
        function ur() {
          vn(), o(e.lessThan) && ft(), pt(e.eq), R();
        }
        function fr(t) {
          Ae(u._type),
            vn(),
            o(e.lessThan) && ft(),
            o(e.colon) && pt(e.colon),
            t || pt(e.eq),
            R();
        }
        function la() {
          dr(), b1(), x(e.eq) && rt();
        }
        function ft() {
          const t = Q(0);
          o(e.lessThan) || o(e.typeParameterStart) ? _() : v();
          do la(), o(e.greaterThan) || m(e.comma);
          while (!o(e.greaterThan) && !r.error);
          m(e.greaterThan), te(t);
        }
        function Ft() {
          const t = Q(0);
          for (m(e.lessThan); !o(e.greaterThan) && !r.error; )
            rt(), o(e.greaterThan) || m(e.comma);
          m(e.greaterThan), te(t);
        }
        function ua() {
          if ((Ae(u._interface), x(e._extends)))
            do Sn();
            while (x(e.comma));
          Cn(!1, !1, !1);
        }
        function hr() {
          o(e.num) || o(e.string) ? xt() : xe();
        }
        function fa() {
          i() === e.colon ? (hr(), pt()) : rt(), m(e.bracketR), pt();
        }
        function ha() {
          hr(),
            m(e.bracketR),
            m(e.bracketR),
            o(e.lessThan) || o(e.parenL) ? pr() : (x(e.question), pt());
        }
        function pr() {
          for (
            o(e.lessThan) && ft(), m(e.parenL);
            !o(e.parenR) && !o(e.ellipsis) && !r.error;

          )
            Nn(), o(e.parenR) || m(e.comma);
          x(e.ellipsis) && Nn(), m(e.parenR), pt();
        }
        function pa() {
          pr();
        }
        function Cn(t, n, s) {
          let c;
          for (
            n && o(e.braceBarL)
              ? (m(e.braceBarL), (c = e.braceBarR))
              : (m(e.braceL), (c = e.braceR));
            !o(c) && !r.error;

          ) {
            if (s && P(u._proto)) {
              const f = i();
              f !== e.colon && f !== e.question && (_(), (t = !1));
            }
            if (t && P(u._static)) {
              const f = i();
              f !== e.colon && f !== e.question && _();
            }
            if ((dr(), x(e.bracketL))) x(e.bracketL) ? ha() : fa();
            else if (o(e.parenL) || o(e.lessThan)) pa();
            else {
              if (P(u._get) || P(u._set)) {
                const f = i();
                (f === e.name || f === e.string || f === e.num) && _();
              }
              ma();
            }
            da();
          }
          m(c);
        }
        function ma() {
          if (o(e.ellipsis)) {
            if ((m(e.ellipsis), x(e.comma) || x(e.semi), o(e.braceR))) return;
            rt();
          } else
            hr(), o(e.lessThan) || o(e.parenL) ? pr() : (x(e.question), pt());
        }
        function da() {
          !x(e.semi) && !x(e.comma) && !o(e.braceR) && !o(e.braceBarR) && v();
        }
        function _1(t) {
          for (t || xe(); x(e.dot); ) xe();
        }
        function ka() {
          _1(!0), o(e.lessThan) && Ft();
        }
        function ga() {
          m(e._typeof), y1();
        }
        function _a() {
          for (
            m(e.bracketL);
            r.pos < w.length && !o(e.bracketR) && (rt(), !o(e.bracketR));

          )
            m(e.comma);
          m(e.bracketR);
        }
        function Nn() {
          const t = i();
          t === e.colon || t === e.question
            ? (xe(), x(e.question), pt())
            : rt();
        }
        function mr() {
          for (; !o(e.parenR) && !o(e.ellipsis) && !r.error; )
            Nn(), o(e.parenR) || m(e.comma);
          x(e.ellipsis) && Nn();
        }
        function y1() {
          let t = !1;
          const n = r.noAnonFunctionType;
          switch (r.type) {
            case e.name: {
              if (P(u._interface)) {
                ua();
                return;
              }
              xe(), ka();
              return;
            }
            case e.braceL:
              Cn(!1, !1, !1);
              return;
            case e.braceBarL:
              Cn(!1, !0, !1);
              return;
            case e.bracketL:
              _a();
              return;
            case e.lessThan:
              ft(), m(e.parenL), mr(), m(e.parenR), m(e.arrow), rt();
              return;
            case e.parenL:
              if ((_(), !o(e.parenR) && !o(e.ellipsis)))
                if (o(e.name)) {
                  const s = i();
                  t = s !== e.question && s !== e.colon;
                } else t = !0;
              if (t)
                if (
                  ((r.noAnonFunctionType = !1),
                  rt(),
                  (r.noAnonFunctionType = n),
                  r.noAnonFunctionType ||
                    !(o(e.comma) || (o(e.parenR) && i() === e.arrow)))
                ) {
                  m(e.parenR);
                  return;
                } else x(e.comma);
              mr(), m(e.parenR), m(e.arrow), rt();
              return;
            case e.minus:
              _(), Ht();
              return;
            case e.string:
            case e.num:
            case e._true:
            case e._false:
            case e._null:
            case e._this:
            case e._void:
            case e.star:
              _();
              return;
            default:
              if (r.type === e._typeof) {
                ga();
                return;
              } else if (r.type & e.IS_KEYWORD) {
                _(), (r.tokens[r.tokens.length - 1].type = e.name);
                return;
              }
          }
          v();
        }
        function ya() {
          for (y1(); !Fe() && (o(e.bracketL) || o(e.questionDot)); )
            x(e.questionDot),
              m(e.bracketL),
              x(e.bracketR) || (rt(), m(e.bracketR));
        }
        function x1() {
          x(e.question) ? x1() : ya();
        }
        function w1() {
          x1(), !r.noAnonFunctionType && x(e.arrow) && rt();
        }
        function I1() {
          for (x(e.bitwiseAND), w1(); x(e.bitwiseAND); ) w1();
        }
        function xa() {
          for (x(e.bitwiseOR), I1(); x(e.bitwiseOR); ) I1();
        }
        function rt() {
          xa();
        }
        function Ot() {
          pt();
        }
        function b1() {
          xe(), o(e.colon) && Ot();
        }
        function dr() {
          (o(e.plus) || o(e.minus)) &&
            (_(), (r.tokens[r.tokens.length - 1].isType = !0));
        }
        function wa(t) {
          o(e.colon) && ir(), sn(!1, t);
        }
        function Ia(t, n, s) {
          if (o(e.questionDot) && i() === e.lessThan) {
            if (n) {
              s.stop = !0;
              return;
            }
            _(), Ft(), m(e.parenL), At();
            return;
          } else if (!n && o(e.lessThan)) {
            const c = r.snapshot();
            if ((Ft(), m(e.parenL), At(), r.error)) r.restoreFromSnapshot(c);
            else return;
          }
          Kn(t, n, s);
        }
        function ba() {
          if (o(e.lessThan)) {
            const t = r.snapshot();
            Ft(), r.error && r.restoreFromSnapshot(t);
          }
        }
        function Ta() {
          if (o(e.name) && r.contextualKeyword === u._interface) {
            const t = Q(0);
            return _(), lr(), te(t), !0;
          } else if (P(u._enum)) return T1(), !0;
          return !1;
        }
        function Ea() {
          return P(u._enum) ? (T1(), !0) : !1;
        }
        function Aa(t) {
          if (t === u._declare) {
            if (
              o(e._class) ||
              o(e.name) ||
              o(e._function) ||
              o(e._var) ||
              o(e._export)
            ) {
              const n = Q(1);
              ar(), te(n);
            }
          } else if (o(e.name)) {
            if (t === u._interface) {
              const n = Q(1);
              lr(), te(n);
            } else if (t === u._type) {
              const n = Q(1);
              ur(), te(n);
            } else if (t === u._opaque) {
              const n = Q(1);
              fr(!1), te(n);
            }
          }
          R();
        }
        function Sa() {
          return P(u._type) || P(u._interface) || P(u._opaque) || P(u._enum);
        }
        function va() {
          return (
            o(e.name) &&
            (r.contextualKeyword === u._type ||
              r.contextualKeyword === u._interface ||
              r.contextualKeyword === u._opaque ||
              r.contextualKeyword === u._enum)
          );
        }
        function Ca() {
          if (P(u._type)) {
            const t = Q(1);
            _(), o(e.braceL) ? (yr(), cn()) : ur(), te(t);
          } else if (P(u._opaque)) {
            const t = Q(1);
            _(), fr(!1), te(t);
          } else if (P(u._interface)) {
            const t = Q(1);
            _(), lr(), te(t);
          } else it(!0);
        }
        function Na() {
          return o(e.star) || (P(u._type) && i() === e.star);
        }
        function Ra() {
          if (Ce(u._type)) {
            const t = Q(2);
            _r(), te(t);
          } else _r();
        }
        function Pa(t) {
          if ((t && o(e.lessThan) && Ft(), P(u._implements))) {
            const n = Q(0);
            _(), (r.tokens[r.tokens.length - 1].type = e._implements);
            do vn(), o(e.lessThan) && Ft();
            while (x(e.comma));
            te(n);
          }
        }
        function La() {
          o(e.lessThan) && (ft(), o(e.parenL) || v());
        }
        function Da() {
          const t = Q(0);
          x(e.question), o(e.colon) && Ot(), te(t);
        }
        function Fa() {
          if (o(e._typeof) || P(u._type)) {
            const t = l();
            (Ki(t) || t.type === e.braceL || t.type === e.star) && _();
          }
        }
        function Oa() {
          const t = r.contextualKeyword === u._type || r.type === e._typeof;
          t ? _() : xe(),
            P(u._as) && !Se(u._as)
              ? (xe(), (t && !o(e.name) && !(r.type & e.IS_KEYWORD)) || xe())
              : (t && (o(e.name) || r.type & e.IS_KEYWORD) && xe(),
                Ce(u._as) && xe());
        }
        function Ma() {
          if (o(e.lessThan)) {
            const t = Q(0);
            ft(), te(t);
          }
        }
        function Ba() {
          o(e.colon) && Ot();
        }
        function ja() {
          if (o(e.colon)) {
            const t = r.noAnonFunctionType;
            (r.noAnonFunctionType = !0), Ot(), (r.noAnonFunctionType = t);
          }
        }
        function qa(t, n) {
          if (o(e.lessThan)) {
            const s = r.snapshot();
            let c = ht(t, n);
            if (r.error)
              r.restoreFromSnapshot(s), (r.type = e.typeParameterStart);
            else return c;
            const f = Q(0);
            if ((ft(), te(f), (c = ht(t, n)), c)) return !0;
            v();
          }
          return ht(t, n);
        }
        function Ua() {
          if (o(e.colon)) {
            const t = Q(0),
              n = r.snapshot(),
              s = r.noAnonFunctionType;
            (r.noAnonFunctionType = !0),
              ir(),
              (r.noAnonFunctionType = s),
              Fe() && v(),
              o(e.arrow) || v(),
              r.error && r.restoreFromSnapshot(n),
              te(t);
          }
          return x(e.arrow);
        }
        function $a(t, n = !1) {
          if (
            r.tokens[r.tokens.length - 1].contextualKeyword === u._async &&
            o(e.lessThan)
          ) {
            const s = r.snapshot();
            if (Va() && !r.error) return;
            r.restoreFromSnapshot(s);
          }
          f1(t, n);
        }
        function Va() {
          r.scopeDepth++;
          const t = r.tokens.length;
          return Gt(), tr() ? (rn(t), !0) : !1;
        }
        function T1() {
          Ae(u._enum),
            (r.tokens[r.tokens.length - 1].type = e._enum),
            xe(),
            Wa();
        }
        function Wa() {
          Ce(u._of) && _(), m(e.braceL), Ha(), m(e.braceR);
        }
        function Ha() {
          for (; !o(e.braceR) && !r.error && !x(e.ellipsis); )
            Ga(), o(e.braceR) || m(e.comma);
        }
        function Ga() {
          xe(), x(e.eq) && _();
        }
        function Ya() {
          if (
            (Pn(e.eof),
            r.scopes.push(new O(0, r.tokens.length, !0)),
            r.scopeDepth !== 0)
          )
            throw new Error(
              `Invalid scope depth at end of file: ${r.scopeDepth}`,
            );
          return new Lc(r.tokens, r.scopes);
        }
        function it(t) {
          (j && Ta()) || (o(e.at) && kr(), Xa(t));
        }
        function Xa(t) {
          if (E && fi()) return;
          const n = r.type;
          switch (n) {
            case e._break:
            case e._continue:
              Ja();
              return;
            case e._debugger:
              Qa();
              return;
            case e._do:
              Za();
              return;
            case e._for:
              Ka();
              return;
            case e._function:
              if (i() === e.dot) break;
              t || v(), nc();
              return;
            case e._class:
              t || v(), Bt(!0);
              return;
            case e._if:
              rc();
              return;
            case e._return:
              sc();
              return;
            case e._switch:
              oc();
              return;
            case e._throw:
              ic();
              return;
            case e._try:
              cc();
              return;
            case e._let:
            case e._const:
              t || v();
            case e._var:
              Rn(n !== e._var);
              return;
            case e._while:
              lc();
              return;
            case e.braceL:
              St();
              return;
            case e.semi:
              uc();
              return;
            case e._export:
            case e._import: {
              const f = i();
              if (f === e.parenL || f === e.dot) break;
              _(), n === e._import ? F1() : L1();
              return;
            }
            case e.name:
              if (r.contextualKeyword === u._async) {
                const f = r.start,
                  k = r.snapshot();
                if ((_(), o(e._function) && !Fe())) {
                  m(e._function), Mt(f, !0);
                  return;
                } else r.restoreFromSnapshot(k);
              } else if (
                r.contextualKeyword === u._using &&
                !Ke() &&
                i() === e.name
              ) {
                Rn(!0);
                return;
              } else if (E1()) {
                Ae(u._await), Rn(!0);
                return;
              }
            default:
              break;
          }
          const s = r.tokens.length;
          Ye();
          let c = null;
          if (r.tokens.length === s + 1) {
            const f = r.tokens[r.tokens.length - 1];
            f.type === e.name && (c = f.contextualKeyword);
          }
          if (c == null) {
            R();
            return;
          }
          x(e.colon) ? fc() : hc(c);
        }
        function E1() {
          if (!P(u._await)) return !1;
          const t = r.snapshot();
          return (
            _(),
            !P(u._using) || qe() || (_(), !o(e.name) || qe())
              ? (r.restoreFromSnapshot(t), !1)
              : (r.restoreFromSnapshot(t), !0)
          );
        }
        function kr() {
          for (; o(e.at); ) A1();
        }
        function A1() {
          if ((_(), x(e.parenL))) Ye(), m(e.parenR);
          else {
            for (xe(); x(e.dot); ) xe();
            za();
          }
        }
        function za() {
          E ? Ei() : S1();
        }
        function S1() {
          x(e.parenL) && At();
        }
        function Ja() {
          _(), K() || (xe(), R());
        }
        function Qa() {
          _(), R();
        }
        function Za() {
          _(), it(!1), m(e._while), An(), x(e.semi);
        }
        function Ka() {
          r.scopeDepth++;
          const t = r.tokens.length;
          tc();
          const n = r.tokens.length;
          r.scopes.push(new O(t, n, !1)), r.scopeDepth--;
        }
        function ec() {
          return !(!P(u._using) || Se(u._of));
        }
        function tc() {
          _();
          let t = !1;
          if ((P(u._await) && ((t = !0), _()), m(e.parenL), o(e.semi))) {
            t && v(), gr();
            return;
          }
          const n = E1();
          if (n || o(e._var) || o(e._let) || o(e._const) || ec()) {
            if (
              (n && Ae(u._await),
              _(),
              C1(!0, r.type !== e._var),
              o(e._in) || P(u._of))
            ) {
              v1(t);
              return;
            }
            gr();
            return;
          }
          if ((Ye(!0), o(e._in) || P(u._of))) {
            v1(t);
            return;
          }
          t && v(), gr();
        }
        function nc() {
          const t = r.start;
          _(), Mt(t, !0);
        }
        function rc() {
          _(), An(), it(!1), x(e._else) && it(!1);
        }
        function sc() {
          _(), K() || (Ye(), R());
        }
        function oc() {
          _(), An(), r.scopeDepth++;
          const t = r.tokens.length;
          for (m(e.braceL); !o(e.braceR) && !r.error; )
            if (o(e._case) || o(e._default)) {
              const s = o(e._case);
              _(), s && Ye(), m(e.colon);
            } else it(!0);
          _();
          const n = r.tokens.length;
          r.scopes.push(new O(t, n, !1)), r.scopeDepth--;
        }
        function ic() {
          _(), Ye(), R();
        }
        function ac() {
          yn(!0), E && Ut();
        }
        function cc() {
          if ((_(), St(), o(e._catch))) {
            _();
            let t = null;
            if (
              (o(e.parenL) &&
                (r.scopeDepth++,
                (t = r.tokens.length),
                m(e.parenL),
                ac(),
                m(e.parenR)),
              St(),
              t != null)
            ) {
              const n = r.tokens.length;
              r.scopes.push(new O(t, n, !1)), r.scopeDepth--;
            }
          }
          x(e._finally) && St();
        }
        function Rn(t) {
          _(), C1(!1, t), R();
        }
        function lc() {
          _(), An(), it(!1);
        }
        function uc() {
          _();
        }
        function fc() {
          it(!0);
        }
        function hc(t) {
          E ? pi(t) : j ? Aa(t) : R();
        }
        function St(t = !1, n = 0) {
          const s = r.tokens.length;
          r.scopeDepth++,
            m(e.braceL),
            n && (r.tokens[r.tokens.length - 1].contextId = n),
            Pn(e.braceR),
            n && (r.tokens[r.tokens.length - 1].contextId = n);
          const c = r.tokens.length;
          r.scopes.push(new O(s, c, t)), r.scopeDepth--;
        }
        function Pn(t) {
          for (; !x(t) && !r.error; ) it(!0);
        }
        function gr() {
          m(e.semi),
            o(e.semi) || Ye(),
            m(e.semi),
            o(e.parenR) || Ye(),
            m(e.parenR),
            it(!1);
        }
        function v1(t) {
          t ? Ce(u._of) : _(), Ye(), m(e.parenR), it(!1);
        }
        function C1(t, n) {
          for (;;) {
            if ((pc(n), x(e.eq))) {
              const s = r.tokens.length - 1;
              Xe(t), (r.tokens[s].rhsEndIndex = r.tokens.length);
            }
            if (!x(e.comma)) break;
          }
        }
        function pc(t) {
          yn(t), E ? _i() : j && Ba();
        }
        function Mt(t, n, s = !1) {
          o(e.star) && _(), n && !s && !o(e.name) && !o(e._yield) && v();
          let c = null;
          o(e.name) && (n || ((c = r.tokens.length), r.scopeDepth++), Tt(!1));
          const f = r.tokens.length;
          r.scopeDepth++, Gt(), m1(t);
          const k = r.tokens.length;
          r.scopes.push(new O(f, k, !0)),
            r.scopeDepth--,
            c !== null && (r.scopes.push(new O(c, k, !0)), r.scopeDepth--);
        }
        function Gt(t = !1, n = 0) {
          E ? gi() : j && Ma(),
            m(e.parenL),
            n && (r.tokens[r.tokens.length - 1].contextId = n),
            qn(e.parenR, !1, !1, t, n),
            n && (r.tokens[r.tokens.length - 1].contextId = n);
        }
        function Bt(t, n = !1) {
          const s = q();
          _(),
            (r.tokens[r.tokens.length - 1].contextId = s),
            (r.tokens[r.tokens.length - 1].isExpression = !t);
          let c = null;
          t || ((c = r.tokens.length), r.scopeDepth++), gc(t, n), _c();
          const f = r.tokens.length;
          if (
            (mc(s),
            !r.error &&
              ((r.tokens[f].contextId = s),
              (r.tokens[r.tokens.length - 1].contextId = s),
              c !== null))
          ) {
            const k = r.tokens.length;
            r.scopes.push(new O(c, k, !1)), r.scopeDepth--;
          }
        }
        function N1() {
          return o(e.eq) || o(e.semi) || o(e.braceR) || o(e.bang) || o(e.colon);
        }
        function R1() {
          return o(e.parenL) || o(e.lessThan);
        }
        function mc(t) {
          for (m(e.braceL); !x(e.braceR) && !r.error; ) {
            if (x(e.semi)) continue;
            if (o(e.at)) {
              A1();
              continue;
            }
            const n = r.start;
            dc(n, t);
          }
        }
        function dc(t, n) {
          E &&
            $n([u._declare, u._public, u._protected, u._private, u._override]);
          let s = !1;
          if (o(e.name) && r.contextualKeyword === u._static) {
            if ((xe(), R1())) {
              on(t, !1);
              return;
            } else if (N1()) {
              Ln();
              return;
            }
            if (
              ((r.tokens[r.tokens.length - 1].type = e._static),
              (s = !0),
              o(e.braceL))
            ) {
              (r.tokens[r.tokens.length - 1].contextId = n), St();
              return;
            }
          }
          kc(t, s, n);
        }
        function kc(t, n, s) {
          if (E && hi(n)) return;
          if (x(e.star)) {
            an(s), on(t, !1);
            return;
          }
          an(s);
          let c = !1;
          const f = r.tokens[r.tokens.length - 1];
          f.contextualKeyword === u._constructor && (c = !0),
            P1(),
            R1()
              ? on(t, c)
              : N1()
              ? Ln()
              : f.contextualKeyword === u._async && !K()
              ? ((r.tokens[r.tokens.length - 1].type = e._async),
                o(e.star) && _(),
                an(s),
                P1(),
                on(t, !1))
              : (f.contextualKeyword === u._get ||
                  f.contextualKeyword === u._set) &&
                !(K() && o(e.star))
              ? (f.contextualKeyword === u._get
                  ? (r.tokens[r.tokens.length - 1].type = e._get)
                  : (r.tokens[r.tokens.length - 1].type = e._set),
                an(s),
                on(t, !1))
              : f.contextualKeyword === u._accessor && !K()
              ? (an(s), Ln())
              : K()
              ? Ln()
              : v();
        }
        function on(t, n) {
          E ? Dt() : j && o(e.lessThan) && ft(), or(t, n);
        }
        function an(t) {
          nn(t);
        }
        function P1() {
          if (E) {
            const t = Q(0);
            x(e.question), te(t);
          }
        }
        function Ln() {
          if ((E ? (Oe(e.bang), Ut()) : j && o(e.colon) && Ot(), o(e.eq))) {
            const t = r.tokens.length;
            _(), Xe(), (r.tokens[t].rhsEndIndex = r.tokens.length);
          }
          R();
        }
        function gc(t, n = !1) {
          (E && (!t || n) && P(u._implements)) ||
            (o(e.name) && Tt(!0), E ? Dt() : j && o(e.lessThan) && ft());
        }
        function _c() {
          let t = !1;
          x(e._extends) ? (u1(), (t = !0)) : (t = !1), E ? di(t) : j && Pa(t);
        }
        function L1() {
          const t = r.tokens.length - 1;
          (E && ai()) ||
            (Ic()
              ? bc()
              : wc()
              ? (xe(),
                o(e.comma) && i() === e.star
                  ? (m(e.comma), m(e.star), Ae(u._as), xe())
                  : D1(),
                cn())
              : x(e._default)
              ? yc()
              : Ec()
              ? xc()
              : (yr(), cn()),
            (r.tokens[t].rhsEndIndex = r.tokens.length));
        }
        function yc() {
          if ((E && ui()) || (j && Ea())) return;
          const t = r.start;
          x(e._function)
            ? Mt(t, !0, !0)
            : P(u._async) && i() === e._function
            ? (Ce(u._async), x(e._function), Mt(t, !0, !0))
            : o(e._class)
            ? Bt(!0, !0)
            : o(e.at)
            ? (kr(), Bt(!0, !0))
            : (Xe(), R());
        }
        function xc() {
          E ? mi() : j ? Ca() : it(!0);
        }
        function wc() {
          if (E && s1()) return !1;
          if (j && va()) return !1;
          if (o(e.name)) return r.contextualKeyword !== u._async;
          if (!o(e._default)) return !1;
          const t = p(),
            n = l(),
            s = n.type === e.name && n.contextualKeyword === u._from;
          if (n.type === e.comma) return !0;
          if (s) {
            const c = w.charCodeAt(g(t + 4));
            return c === h.quotationMark || c === h.apostrophe;
          }
          return !1;
        }
        function D1() {
          x(e.comma) && yr();
        }
        function cn() {
          Ce(u._from) && (xt(), M1()), R();
        }
        function Ic() {
          return j ? Na() : o(e.star);
        }
        function bc() {
          j ? Ra() : _r();
        }
        function _r() {
          m(e.star), P(u._as) ? Tc() : cn();
        }
        function Tc() {
          _(), (r.tokens[r.tokens.length - 1].type = e._as), xe(), D1(), cn();
        }
        function Ec() {
          return (
            (E && s1()) ||
            (j && Sa()) ||
            r.type === e._var ||
            r.type === e._const ||
            r.type === e._let ||
            r.type === e._function ||
            r.type === e._class ||
            P(u._async) ||
            o(e.at)
          );
        }
        function yr() {
          let t = !0;
          for (m(e.braceL); !x(e.braceR) && !r.error; ) {
            if (t) t = !1;
            else if ((m(e.comma), x(e.braceR))) break;
            Ac();
          }
        }
        function Ac() {
          if (E) {
            li();
            return;
          }
          xe(),
            (r.tokens[r.tokens.length - 1].identifierRole = N.ExportAccess),
            Ce(u._as) && xe();
        }
        function Sc() {
          const t = r.snapshot();
          return (
            Ae(u._module),
            Ce(u._from)
              ? P(u._from)
                ? (r.restoreFromSnapshot(t), !0)
                : (r.restoreFromSnapshot(t), !1)
              : o(e.comma)
              ? (r.restoreFromSnapshot(t), !1)
              : (r.restoreFromSnapshot(t), !0)
          );
        }
        function vc() {
          P(u._module) && Sc() && _();
        }
        function F1() {
          if (E && o(e.name) && i() === e.eq) {
            zn();
            return;
          }
          if (E && P(u._type)) {
            const t = l();
            if (t.type === e.name && t.contextualKeyword !== u._from) {
              if ((Ae(u._type), i() === e.eq)) {
                zn();
                return;
              }
            } else (t.type === e.star || t.type === e.braceL) && Ae(u._type);
          }
          o(e.string) || (vc(), Nc(), Ae(u._from)), xt(), M1(), R();
        }
        function Cc() {
          return o(e.name);
        }
        function O1() {
          _n();
        }
        function Nc() {
          j && Fa();
          let t = !0;
          if (!(Cc() && (O1(), !x(e.comma)))) {
            if (o(e.star)) {
              _(), Ae(u._as), O1();
              return;
            }
            for (m(e.braceL); !x(e.braceR) && !r.error; ) {
              if (t) t = !1;
              else if (
                (x(e.colon) &&
                  v(
                    'ES2015 named imports do not destructure. Use another statement for destructuring after the import.',
                  ),
                m(e.comma),
                x(e.braceR))
              )
                break;
              Rc();
            }
          }
        }
        function Rc() {
          if (E) {
            ci();
            return;
          }
          if (j) {
            Oa();
            return;
          }
          _n(),
            P(u._as) &&
              ((r.tokens[r.tokens.length - 1].identifierRole = N.ImportAccess),
              _(),
              _n());
        }
        function M1() {
          (o(e._with) || (P(u._assert) && !qe())) && (_(), sr(!1, !1));
        }
        function Pc() {
          return (
            r.pos === 0 &&
              w.charCodeAt(0) === h.numberSign &&
              w.charCodeAt(1) === h.exclamationMark &&
              Ee(2),
            Y(),
            Ya()
          );
        }
        class Lc {
          constructor(n, s) {
            (this.tokens = n), (this.scopes = s);
          }
        }
        function Dc(t, n, s, c) {
          if (c && s)
            throw new Error('Cannot combine flow and typescript plugins.');
          ve(t, n, s, c);
          const f = Pc();
          if (r.error) throw oe(r.error);
          return f;
        }
        function Fc(t) {
          let n = t.currentIndex(),
            s = 0;
          const c = t.currentToken();
          do {
            const f = t.tokens[n];
            if (
              (f.isOptionalChainStart && s++,
              f.isOptionalChainEnd && s--,
              (s += f.numNullishCoalesceStarts),
              (s -= f.numNullishCoalesceEnds),
              f.contextualKeyword === u._await &&
                f.identifierRole == null &&
                f.scopeDepth === c.scopeDepth)
            )
              return !0;
            n += 1;
          } while (s > 0 && n < t.tokens.length);
          return !1;
        }
        class ln {
          __init() {
            this.resultCode = '';
          }
          __init2() {
            this.resultMappings = new Array(this.tokens.length);
          }
          __init3() {
            this.tokenIndex = 0;
          }
          constructor(n, s, c, f, k) {
            (this.code = n),
              (this.tokens = s),
              (this.isFlowEnabled = c),
              (this.disableESTransforms = f),
              (this.helperManager = k),
              ln.prototype.__init.call(this),
              ln.prototype.__init2.call(this),
              ln.prototype.__init3.call(this);
          }
          snapshot() {
            return { resultCode: this.resultCode, tokenIndex: this.tokenIndex };
          }
          restoreToSnapshot(n) {
            (this.resultCode = n.resultCode), (this.tokenIndex = n.tokenIndex);
          }
          dangerouslyGetAndRemoveCodeSinceSnapshot(n) {
            const s = this.resultCode.slice(n.resultCode.length);
            return (this.resultCode = n.resultCode), s;
          }
          reset() {
            (this.resultCode = ''),
              (this.resultMappings = new Array(this.tokens.length)),
              (this.tokenIndex = 0);
          }
          matchesContextualAtIndex(n, s) {
            return (
              this.matches1AtIndex(n, e.name) &&
              this.tokens[n].contextualKeyword === s
            );
          }
          identifierNameAtIndex(n) {
            return this.identifierNameForToken(this.tokens[n]);
          }
          identifierNameAtRelativeIndex(n) {
            return this.identifierNameForToken(this.tokenAtRelativeIndex(n));
          }
          identifierName() {
            return this.identifierNameForToken(this.currentToken());
          }
          identifierNameForToken(n) {
            return this.code.slice(n.start, n.end);
          }
          rawCodeForToken(n) {
            return this.code.slice(n.start, n.end);
          }
          stringValueAtIndex(n) {
            return this.stringValueForToken(this.tokens[n]);
          }
          stringValue() {
            return this.stringValueForToken(this.currentToken());
          }
          stringValueForToken(n) {
            return this.code.slice(n.start + 1, n.end - 1);
          }
          matches1AtIndex(n, s) {
            return this.tokens[n].type === s;
          }
          matches2AtIndex(n, s, c) {
            return this.tokens[n].type === s && this.tokens[n + 1].type === c;
          }
          matches3AtIndex(n, s, c, f) {
            return (
              this.tokens[n].type === s &&
              this.tokens[n + 1].type === c &&
              this.tokens[n + 2].type === f
            );
          }
          matches1(n) {
            return this.tokens[this.tokenIndex].type === n;
          }
          matches2(n, s) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s
            );
          }
          matches3(n, s, c) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s &&
              this.tokens[this.tokenIndex + 2].type === c
            );
          }
          matches4(n, s, c, f) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s &&
              this.tokens[this.tokenIndex + 2].type === c &&
              this.tokens[this.tokenIndex + 3].type === f
            );
          }
          matches5(n, s, c, f, k) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s &&
              this.tokens[this.tokenIndex + 2].type === c &&
              this.tokens[this.tokenIndex + 3].type === f &&
              this.tokens[this.tokenIndex + 4].type === k
            );
          }
          matchesContextual(n) {
            return this.matchesContextualAtIndex(this.tokenIndex, n);
          }
          matchesContextIdAndLabel(n, s) {
            return this.matches1(n) && this.currentToken().contextId === s;
          }
          previousWhitespaceAndComments() {
            let n = this.code.slice(
              this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
              this.tokenIndex < this.tokens.length
                ? this.tokens[this.tokenIndex].start
                : this.code.length,
            );
            return this.isFlowEnabled && (n = n.replace(/@flow/g, '')), n;
          }
          replaceToken(n) {
            (this.resultCode += this.previousWhitespaceAndComments()),
              this.appendTokenPrefix(),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += n),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          replaceTokenTrimmingLeftWhitespace(n) {
            (this.resultCode += this.previousWhitespaceAndComments().replace(
              /[^\r\n]/g,
              '',
            )),
              this.appendTokenPrefix(),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += n),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          removeInitialToken() {
            this.replaceToken('');
          }
          removeToken() {
            this.replaceTokenTrimmingLeftWhitespace('');
          }
          removeBalancedCode() {
            let n = 0;
            for (; !this.isAtEnd(); ) {
              if (this.matches1(e.braceL)) n++;
              else if (this.matches1(e.braceR)) {
                if (n === 0) return;
                n--;
              }
              this.removeToken();
            }
          }
          copyExpectedToken(n) {
            if (this.tokens[this.tokenIndex].type !== n)
              throw new Error(`Expected token ${n}`);
            this.copyToken();
          }
          copyToken() {
            (this.resultCode += this.previousWhitespaceAndComments()),
              this.appendTokenPrefix(),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += this.code.slice(
                this.tokens[this.tokenIndex].start,
                this.tokens[this.tokenIndex].end,
              )),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          copyTokenWithPrefix(n) {
            (this.resultCode += this.previousWhitespaceAndComments()),
              this.appendTokenPrefix(),
              (this.resultCode += n),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += this.code.slice(
                this.tokens[this.tokenIndex].start,
                this.tokens[this.tokenIndex].end,
              )),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          appendTokenPrefix() {
            const n = this.currentToken();
            if (
              ((n.numNullishCoalesceStarts || n.isOptionalChainStart) &&
                (n.isAsyncOperation = Fc(this)),
              !this.disableESTransforms)
            ) {
              if (n.numNullishCoalesceStarts)
                for (let s = 0; s < n.numNullishCoalesceStarts; s++)
                  n.isAsyncOperation
                    ? ((this.resultCode += 'await '),
                      (this.resultCode += this.helperManager.getHelperName(
                        'asyncNullishCoalesce',
                      )))
                    : (this.resultCode +=
                        this.helperManager.getHelperName('nullishCoalesce')),
                    (this.resultCode += '(');
              n.isOptionalChainStart &&
                (n.isAsyncOperation && (this.resultCode += 'await '),
                this.tokenIndex > 0 &&
                this.tokenAtRelativeIndex(-1).type === e._delete
                  ? n.isAsyncOperation
                    ? (this.resultCode += this.helperManager.getHelperName(
                        'asyncOptionalChainDelete',
                      ))
                    : (this.resultCode += this.helperManager.getHelperName(
                        'optionalChainDelete',
                      ))
                  : n.isAsyncOperation
                  ? (this.resultCode +=
                      this.helperManager.getHelperName('asyncOptionalChain'))
                  : (this.resultCode +=
                      this.helperManager.getHelperName('optionalChain')),
                (this.resultCode += '(['));
            }
          }
          appendTokenSuffix() {
            const n = this.currentToken();
            if (
              (n.isOptionalChainEnd &&
                !this.disableESTransforms &&
                (this.resultCode += '])'),
              n.numNullishCoalesceEnds && !this.disableESTransforms)
            )
              for (let s = 0; s < n.numNullishCoalesceEnds; s++)
                this.resultCode += '))';
          }
          appendCode(n) {
            this.resultCode += n;
          }
          currentToken() {
            return this.tokens[this.tokenIndex];
          }
          currentTokenCode() {
            const n = this.currentToken();
            return this.code.slice(n.start, n.end);
          }
          tokenAtRelativeIndex(n) {
            return this.tokens[this.tokenIndex + n];
          }
          currentIndex() {
            return this.tokenIndex;
          }
          nextToken() {
            if (this.tokenIndex === this.tokens.length)
              throw new Error('Unexpectedly reached end of input.');
            this.tokenIndex++;
          }
          previousToken() {
            this.tokenIndex--;
          }
          finish() {
            if (this.tokenIndex !== this.tokens.length)
              throw new Error(
                'Tried to finish processing tokens before reaching the end.',
              );
            return (
              (this.resultCode += this.previousWhitespaceAndComments()),
              { code: this.resultCode, mappings: this.resultMappings }
            );
          }
          isAtEnd() {
            return this.tokenIndex === this.tokens.length;
          }
        }
        function Oc(t, n, s, c) {
          const f = n.snapshot(),
            k = Mc(n);
          let A = [];
          const B = [],
            ee = [];
          let fe = null;
          const be = [],
            ge = [],
            ne = n.currentToken().contextId;
          if (ne == null)
            throw new Error(
              'Expected non-null class context ID on class open-brace.',
            );
          for (n.nextToken(); !n.matchesContextIdAndLabel(e.braceR, ne); )
            if (n.matchesContextual(u._constructor) && !n.currentToken().isType)
              ({
                constructorInitializerStatements: A,
                constructorInsertPos: fe,
              } = B1(n));
            else if (n.matches1(e.semi))
              c ||
                ge.push({ start: n.currentIndex(), end: n.currentIndex() + 1 }),
                n.nextToken();
            else if (n.currentToken().isType) n.nextToken();
            else {
              const we = n.currentIndex();
              let De = !1,
                Ze = !1,
                He = !1;
              for (; Dn(n.currentToken()); )
                n.matches1(e._static) && (De = !0),
                  n.matches1(e.hash) && (Ze = !0),
                  (n.matches1(e._declare) || n.matches1(e._abstract)) &&
                    (He = !0),
                  n.nextToken();
              if (De && n.matches1(e.braceL)) {
                xr(n, ne);
                continue;
              }
              if (Ze) {
                xr(n, ne);
                continue;
              }
              if (
                n.matchesContextual(u._constructor) &&
                !n.currentToken().isType
              ) {
                ({
                  constructorInitializerStatements: A,
                  constructorInsertPos: fe,
                } = B1(n));
                continue;
              }
              const et = n.currentIndex();
              if ((Bc(n), n.matches1(e.lessThan) || n.matches1(e.parenL))) {
                xr(n, ne);
                continue;
              }
              for (; n.currentToken().isType; ) n.nextToken();
              if (n.matches1(e.eq)) {
                const Je = n.currentIndex(),
                  lt = n.currentToken().rhsEndIndex;
                if (lt == null)
                  throw new Error(
                    'Expected rhsEndIndex on class field assignment.',
                  );
                for (n.nextToken(); n.currentIndex() < lt; ) t.processToken();
                let Qe;
                De
                  ? ((Qe = s.claimFreeName('__initStatic')), ee.push(Qe))
                  : ((Qe = s.claimFreeName('__init')), B.push(Qe)),
                  be.push({
                    initializerName: Qe,
                    equalsIndex: Je,
                    start: et,
                    end: n.currentIndex(),
                  });
              } else
                (!c || He) && ge.push({ start: we, end: n.currentIndex() });
            }
          return (
            n.restoreToSnapshot(f),
            c
              ? {
                  headerInfo: k,
                  constructorInitializerStatements: A,
                  instanceInitializerNames: [],
                  staticInitializerNames: [],
                  constructorInsertPos: fe,
                  fields: [],
                  rangesToRemove: ge,
                }
              : {
                  headerInfo: k,
                  constructorInitializerStatements: A,
                  instanceInitializerNames: B,
                  staticInitializerNames: ee,
                  constructorInsertPos: fe,
                  fields: be,
                  rangesToRemove: ge,
                }
          );
        }
        function xr(t, n) {
          for (t.nextToken(); t.currentToken().contextId !== n; ) t.nextToken();
          for (; Dn(t.tokenAtRelativeIndex(-1)); ) t.previousToken();
        }
        function Mc(t) {
          const n = t.currentToken(),
            s = n.contextId;
          if (s == null) throw new Error('Expected context ID on class token.');
          const c = n.isExpression;
          if (c == null)
            throw new Error('Expected isExpression on class token.');
          let f = null,
            k = !1;
          for (
            t.nextToken(), t.matches1(e.name) && (f = t.identifierName());
            !t.matchesContextIdAndLabel(e.braceL, s);

          )
            t.matches1(e._extends) && !t.currentToken().isType && (k = !0),
              t.nextToken();
          return { isExpression: c, className: f, hasSuperclass: k };
        }
        function B1(t) {
          const n = [];
          t.nextToken();
          const s = t.currentToken().contextId;
          if (s == null)
            throw new Error(
              'Expected context ID on open-paren starting constructor params.',
            );
          for (; !t.matchesContextIdAndLabel(e.parenR, s); )
            if (t.currentToken().contextId === s) {
              if ((t.nextToken(), Dn(t.currentToken()))) {
                for (t.nextToken(); Dn(t.currentToken()); ) t.nextToken();
                const k = t.currentToken();
                if (k.type !== e.name)
                  throw new Error(
                    'Expected identifier after access modifiers in constructor arg.',
                  );
                const A = t.identifierNameForToken(k);
                n.push(`this.${A} = ${A}`);
              }
            } else t.nextToken();
          for (t.nextToken(); t.currentToken().isType; ) t.nextToken();
          let c = t.currentIndex(),
            f = !1;
          for (; !t.matchesContextIdAndLabel(e.braceR, s); ) {
            if (!f && t.matches2(e._super, e.parenL)) {
              t.nextToken();
              const k = t.currentToken().contextId;
              if (k == null)
                throw new Error('Expected a context ID on the super call');
              for (; !t.matchesContextIdAndLabel(e.parenR, k); ) t.nextToken();
              (c = t.currentIndex()), (f = !0);
            }
            t.nextToken();
          }
          return (
            t.nextToken(),
            { constructorInitializerStatements: n, constructorInsertPos: c }
          );
        }
        function Dn(t) {
          return [
            e._async,
            e._get,
            e._set,
            e.plus,
            e.minus,
            e._readonly,
            e._static,
            e._public,
            e._private,
            e._protected,
            e._override,
            e._abstract,
            e.star,
            e._declare,
            e.hash,
          ].includes(t.type);
        }
        function Bc(t) {
          if (t.matches1(e.bracketL)) {
            const s = t.currentToken().contextId;
            if (s == null)
              throw new Error(
                'Expected class context ID on computed name open bracket.',
              );
            for (; !t.matchesContextIdAndLabel(e.bracketR, s); ) t.nextToken();
            t.nextToken();
          } else t.nextToken();
        }
        function j1(t) {
          if (
            (t.removeInitialToken(),
            t.removeToken(),
            t.removeToken(),
            t.removeToken(),
            t.matches1(e.parenL))
          )
            t.removeToken(), t.removeToken(), t.removeToken();
          else for (; t.matches1(e.dot); ) t.removeToken(), t.removeToken();
        }
        const q1 = {
          typeDeclarations: new Set(),
          valueDeclarations: new Set(),
        };
        function U1(t) {
          const n = new Set(),
            s = new Set();
          for (let c = 0; c < t.tokens.length; c++) {
            const f = t.tokens[c];
            f.type === e.name &&
              S(f) &&
              (f.isType
                ? n.add(t.identifierNameForToken(f))
                : s.add(t.identifierNameForToken(f)));
          }
          return { typeDeclarations: n, valueDeclarations: s };
        }
        function $1(t) {
          let n = t.currentIndex();
          for (; !t.matches1AtIndex(n, e.braceR); ) n++;
          return (
            t.matchesContextualAtIndex(n + 1, u._from) &&
            t.matches1AtIndex(n + 2, e.string)
          );
        }
        function jt(t) {
          (t.matches2(e._with, e.braceL) ||
            (t.matches2(e.name, e.braceL) && t.matchesContextual(u._assert))) &&
            (t.removeToken(),
            t.removeToken(),
            t.removeBalancedCode(),
            t.removeToken());
        }
        function V1(t, n, s, c) {
          if (!t || n) return !1;
          const f = s.currentToken();
          if (f.rhsEndIndex == null)
            throw new Error('Expected non-null rhsEndIndex on export token.');
          const k = f.rhsEndIndex - s.currentIndex();
          if (
            k !== 3 &&
            !(k === 4 && s.matches1AtIndex(f.rhsEndIndex - 1, e.semi))
          )
            return !1;
          const A = s.tokenAtRelativeIndex(2);
          if (A.type !== e.name) return !1;
          const B = s.identifierNameForToken(A);
          return c.typeDeclarations.has(B) && !c.valueDeclarations.has(B);
        }
        class un extends ut {
          __init() {
            this.hadExport = !1;
          }
          __init2() {
            this.hadNamedExport = !1;
          }
          __init3() {
            this.hadDefaultExport = !1;
          }
          constructor(n, s, c, f, k, A, B, ee, fe, be, ge, ne) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.importProcessor = c),
              (this.nameManager = f),
              (this.helperManager = k),
              (this.reactHotLoaderTransformer = A),
              (this.enableLegacyBabel5ModuleInterop = B),
              (this.enableLegacyTypeScriptModuleInterop = ee),
              (this.isTypeScriptTransformEnabled = fe),
              (this.isFlowTransformEnabled = be),
              (this.preserveDynamicImport = ge),
              (this.keepUnusedImports = ne),
              un.prototype.__init.call(this),
              un.prototype.__init2.call(this),
              un.prototype.__init3.call(this),
              (this.declarationInfo = fe ? U1(s) : q1);
          }
          getPrefixCode() {
            let n = '';
            return (
              this.hadExport &&
                (n +=
                  'Object.defineProperty(exports, "__esModule", {value: true});'),
              n
            );
          }
          getSuffixCode() {
            return this.enableLegacyBabel5ModuleInterop &&
              this.hadDefaultExport &&
              !this.hadNamedExport
              ? `
module.exports = exports.default;
`
              : '';
          }
          process() {
            return this.tokens.matches3(e._import, e.name, e.eq)
              ? this.processImportEquals()
              : this.tokens.matches1(e._import)
              ? (this.processImport(), !0)
              : this.tokens.matches2(e._export, e.eq)
              ? (this.tokens.replaceToken('module.exports'), !0)
              : this.tokens.matches1(e._export) &&
                !this.tokens.currentToken().isType
              ? ((this.hadExport = !0), this.processExport())
              : this.tokens.matches2(e.name, e.postIncDec) &&
                this.processPostIncDec()
              ? !0
              : this.tokens.matches1(e.name) || this.tokens.matches1(e.jsxName)
              ? this.processIdentifier()
              : this.tokens.matches1(e.eq)
              ? this.processAssignment()
              : this.tokens.matches1(e.assign)
              ? this.processComplexAssignment()
              : this.tokens.matches1(e.preIncDec)
              ? this.processPreIncDec()
              : !1;
          }
          processImportEquals() {
            const n = this.tokens.identifierNameAtIndex(
              this.tokens.currentIndex() + 1,
            );
            return (
              this.importProcessor.shouldAutomaticallyElideImportedName(n)
                ? j1(this.tokens)
                : this.tokens.replaceToken('const'),
              !0
            );
          }
          processImport() {
            if (this.tokens.matches2(e._import, e.parenL)) {
              if (this.preserveDynamicImport) {
                this.tokens.copyToken();
                return;
              }
              const s = this.enableLegacyTypeScriptModuleInterop
                ? ''
                : `${this.helperManager.getHelperName(
                    'interopRequireWildcard',
                  )}(`;
              this.tokens.replaceToken(
                `Promise.resolve().then(() => ${s}require`,
              );
              const c = this.tokens.currentToken().contextId;
              if (c == null)
                throw new Error(
                  'Expected context ID on dynamic import invocation.',
                );
              for (
                this.tokens.copyToken();
                !this.tokens.matchesContextIdAndLabel(e.parenR, c);

              )
                this.rootTransformer.processToken();
              this.tokens.replaceToken(s ? ')))' : '))');
              return;
            }
            if (this.removeImportAndDetectIfShouldElide())
              this.tokens.removeToken();
            else {
              const s = this.tokens.stringValue();
              this.tokens.replaceTokenTrimmingLeftWhitespace(
                this.importProcessor.claimImportCode(s),
              ),
                this.tokens.appendCode(this.importProcessor.claimImportCode(s));
            }
            jt(this.tokens),
              this.tokens.matches1(e.semi) && this.tokens.removeToken();
          }
          removeImportAndDetectIfShouldElide() {
            if (
              (this.tokens.removeInitialToken(),
              this.tokens.matchesContextual(u._type) &&
                !this.tokens.matches1AtIndex(
                  this.tokens.currentIndex() + 1,
                  e.comma,
                ) &&
                !this.tokens.matchesContextualAtIndex(
                  this.tokens.currentIndex() + 1,
                  u._from,
                ))
            )
              return this.removeRemainingImport(), !0;
            if (this.tokens.matches1(e.name) || this.tokens.matches1(e.star))
              return this.removeRemainingImport(), !1;
            if (this.tokens.matches1(e.string)) return !1;
            let n = !1,
              s = !1;
            for (; !this.tokens.matches1(e.string); )
              ((!n && this.tokens.matches1(e.braceL)) ||
                this.tokens.matches1(e.comma)) &&
                (this.tokens.removeToken(),
                this.tokens.matches1(e.braceR) || (s = !0),
                (this.tokens.matches2(e.name, e.comma) ||
                  this.tokens.matches2(e.name, e.braceR) ||
                  this.tokens.matches4(e.name, e.name, e.name, e.comma) ||
                  this.tokens.matches4(e.name, e.name, e.name, e.braceR)) &&
                  (n = !0)),
                this.tokens.removeToken();
            return this.keepUnusedImports
              ? !1
              : this.isTypeScriptTransformEnabled
              ? !n
              : this.isFlowTransformEnabled
              ? s && !n
              : !1;
          }
          removeRemainingImport() {
            for (; !this.tokens.matches1(e.string); ) this.tokens.removeToken();
          }
          processIdentifier() {
            const n = this.tokens.currentToken();
            if (n.shadowsGlobal) return !1;
            if (n.identifierRole === N.ObjectShorthand)
              return this.processObjectShorthand();
            if (n.identifierRole !== N.Access) return !1;
            const s = this.importProcessor.getIdentifierReplacement(
              this.tokens.identifierNameForToken(n),
            );
            if (!s) return !1;
            let c = this.tokens.currentIndex() + 1;
            for (
              ;
              c < this.tokens.tokens.length &&
              this.tokens.tokens[c].type === e.parenR;

            )
              c++;
            return (
              this.tokens.tokens[c].type === e.parenL
                ? this.tokens.tokenAtRelativeIndex(1).type === e.parenL &&
                  this.tokens.tokenAtRelativeIndex(-1).type !== e._new
                  ? (this.tokens.replaceToken(`${s}.call(void 0, `),
                    this.tokens.removeToken(),
                    this.rootTransformer.processBalancedCode(),
                    this.tokens.copyExpectedToken(e.parenR))
                  : this.tokens.replaceToken(`(0, ${s})`)
                : this.tokens.replaceToken(s),
              !0
            );
          }
          processObjectShorthand() {
            const n = this.tokens.identifierName(),
              s = this.importProcessor.getIdentifierReplacement(n);
            return s ? (this.tokens.replaceToken(`${n}: ${s}`), !0) : !1;
          }
          processExport() {
            if (
              this.tokens.matches2(e._export, e._enum) ||
              this.tokens.matches3(e._export, e._const, e._enum)
            )
              return (this.hadNamedExport = !0), !1;
            if (this.tokens.matches2(e._export, e._default))
              return this.tokens.matches3(e._export, e._default, e._enum)
                ? ((this.hadDefaultExport = !0), !1)
                : (this.processExportDefault(), !0);
            if (this.tokens.matches2(e._export, e.braceL))
              return this.processExportBindings(), !0;
            if (
              this.tokens.matches2(e._export, e.name) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 1,
                u._type,
              )
            ) {
              if (
                (this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.matches1(e.braceL))
              ) {
                for (; !this.tokens.matches1(e.braceR); )
                  this.tokens.removeToken();
                this.tokens.removeToken();
              } else
                this.tokens.removeToken(),
                  this.tokens.matches1(e._as) &&
                    (this.tokens.removeToken(), this.tokens.removeToken());
              return (
                this.tokens.matchesContextual(u._from) &&
                  this.tokens.matches1AtIndex(
                    this.tokens.currentIndex() + 1,
                    e.string,
                  ) &&
                  (this.tokens.removeToken(),
                  this.tokens.removeToken(),
                  jt(this.tokens)),
                !0
              );
            }
            if (
              ((this.hadNamedExport = !0),
              this.tokens.matches2(e._export, e._var) ||
                this.tokens.matches2(e._export, e._let) ||
                this.tokens.matches2(e._export, e._const))
            )
              return this.processExportVar(), !0;
            if (
              this.tokens.matches2(e._export, e._function) ||
              this.tokens.matches3(e._export, e.name, e._function)
            )
              return this.processExportFunction(), !0;
            if (
              this.tokens.matches2(e._export, e._class) ||
              this.tokens.matches3(e._export, e._abstract, e._class) ||
              this.tokens.matches2(e._export, e.at)
            )
              return this.processExportClass(), !0;
            if (this.tokens.matches2(e._export, e.star))
              return this.processExportStar(), !0;
            throw new Error('Unrecognized export syntax.');
          }
          processAssignment() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n - 1];
            if (
              s.isType ||
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n >= 2 && this.tokens.matches1AtIndex(n - 2, e.dot)) ||
              (n >= 2 &&
                [e._var, e._let, e._const].includes(
                  this.tokens.tokens[n - 2].type,
                ))
            )
              return !1;
            const c = this.importProcessor.resolveExportBinding(
              this.tokens.identifierNameForToken(s),
            );
            return c
              ? (this.tokens.copyToken(), this.tokens.appendCode(` ${c} =`), !0)
              : !1;
          }
          processComplexAssignment() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n - 1];
            if (
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n >= 2 && this.tokens.matches1AtIndex(n - 2, e.dot))
            )
              return !1;
            const c = this.importProcessor.resolveExportBinding(
              this.tokens.identifierNameForToken(s),
            );
            return c
              ? (this.tokens.appendCode(` = ${c}`), this.tokens.copyToken(), !0)
              : !1;
          }
          processPreIncDec() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n + 1];
            if (
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n + 2 < this.tokens.tokens.length &&
                (this.tokens.matches1AtIndex(n + 2, e.dot) ||
                  this.tokens.matches1AtIndex(n + 2, e.bracketL) ||
                  this.tokens.matches1AtIndex(n + 2, e.parenL)))
            )
              return !1;
            const c = this.tokens.identifierNameForToken(s),
              f = this.importProcessor.resolveExportBinding(c);
            return f
              ? (this.tokens.appendCode(`${f} = `), this.tokens.copyToken(), !0)
              : !1;
          }
          processPostIncDec() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n],
              c = this.tokens.tokens[n + 1];
            if (
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n >= 1 && this.tokens.matches1AtIndex(n - 1, e.dot))
            )
              return !1;
            const f = this.tokens.identifierNameForToken(s),
              k = this.importProcessor.resolveExportBinding(f);
            if (!k) return !1;
            const A = this.tokens.rawCodeForToken(c),
              B = this.importProcessor.getIdentifierReplacement(f) || f;
            if (A === '++')
              this.tokens.replaceToken(`(${B} = ${k} = ${B} + 1, ${B} - 1)`);
            else if (A === '--')
              this.tokens.replaceToken(`(${B} = ${k} = ${B} - 1, ${B} + 1)`);
            else throw new Error(`Unexpected operator: ${A}`);
            return this.tokens.removeToken(), !0;
          }
          processExportDefault() {
            let n = !0;
            if (
              this.tokens.matches4(
                e._export,
                e._default,
                e._function,
                e.name,
              ) ||
              (this.tokens.matches5(
                e._export,
                e._default,
                e.name,
                e._function,
                e.name,
              ) &&
                this.tokens.matchesContextualAtIndex(
                  this.tokens.currentIndex() + 2,
                  u._async,
                ))
            ) {
              this.tokens.removeInitialToken(), this.tokens.removeToken();
              const s = this.processNamedFunction();
              this.tokens.appendCode(` exports.default = ${s};`);
            } else if (
              this.tokens.matches4(e._export, e._default, e._class, e.name) ||
              this.tokens.matches5(
                e._export,
                e._default,
                e._abstract,
                e._class,
                e.name,
              ) ||
              this.tokens.matches3(e._export, e._default, e.at)
            ) {
              this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.copyDecorators(),
                this.tokens.matches1(e._abstract) && this.tokens.removeToken();
              const s = this.rootTransformer.processNamedClass();
              this.tokens.appendCode(` exports.default = ${s};`);
            } else if (
              V1(
                this.isTypeScriptTransformEnabled,
                this.keepUnusedImports,
                this.tokens,
                this.declarationInfo,
              )
            )
              (n = !1),
                this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.removeToken();
            else if (this.reactHotLoaderTransformer) {
              const s = this.nameManager.claimFreeName('_default');
              this.tokens.replaceToken(`let ${s}; exports.`),
                this.tokens.copyToken(),
                this.tokens.appendCode(` = ${s} =`),
                this.reactHotLoaderTransformer.setExtractedDefaultExportName(s);
            } else
              this.tokens.replaceToken('exports.'),
                this.tokens.copyToken(),
                this.tokens.appendCode(' =');
            n && (this.hadDefaultExport = !0);
          }
          copyDecorators() {
            for (; this.tokens.matches1(e.at); )
              if ((this.tokens.copyToken(), this.tokens.matches1(e.parenL)))
                this.tokens.copyExpectedToken(e.parenL),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR);
              else {
                for (
                  this.tokens.copyExpectedToken(e.name);
                  this.tokens.matches1(e.dot);

                )
                  this.tokens.copyExpectedToken(e.dot),
                    this.tokens.copyExpectedToken(e.name);
                this.tokens.matches1(e.parenL) &&
                  (this.tokens.copyExpectedToken(e.parenL),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR));
              }
          }
          processExportVar() {
            this.isSimpleExportVar()
              ? this.processSimpleExportVar()
              : this.processComplexExportVar();
          }
          isSimpleExportVar() {
            let n = this.tokens.currentIndex();
            if ((n++, n++, !this.tokens.matches1AtIndex(n, e.name))) return !1;
            for (
              n++;
              n < this.tokens.tokens.length && this.tokens.tokens[n].isType;

            )
              n++;
            return !!this.tokens.matches1AtIndex(n, e.eq);
          }
          processSimpleExportVar() {
            this.tokens.removeInitialToken(), this.tokens.copyToken();
            const n = this.tokens.identifierName();
            for (; !this.tokens.matches1(e.eq); )
              this.rootTransformer.processToken();
            const s = this.tokens.currentToken().rhsEndIndex;
            if (s == null)
              throw new Error('Expected = token with an end index.');
            for (; this.tokens.currentIndex() < s; )
              this.rootTransformer.processToken();
            this.tokens.appendCode(`; exports.${n} = ${n}`);
          }
          processComplexExportVar() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const n = this.tokens.matches1(e.braceL);
            n && this.tokens.appendCode('(');
            let s = 0;
            for (;;)
              if (
                this.tokens.matches1(e.braceL) ||
                this.tokens.matches1(e.dollarBraceL) ||
                this.tokens.matches1(e.bracketL)
              )
                s++, this.tokens.copyToken();
              else if (
                this.tokens.matches1(e.braceR) ||
                this.tokens.matches1(e.bracketR)
              )
                s--, this.tokens.copyToken();
              else {
                if (
                  s === 0 &&
                  !this.tokens.matches1(e.name) &&
                  !this.tokens.currentToken().isType
                )
                  break;
                if (this.tokens.matches1(e.eq)) {
                  const c = this.tokens.currentToken().rhsEndIndex;
                  if (c == null)
                    throw new Error('Expected = token with an end index.');
                  for (; this.tokens.currentIndex() < c; )
                    this.rootTransformer.processToken();
                } else {
                  const c = this.tokens.currentToken();
                  if (Ne(c)) {
                    const f = this.tokens.identifierName();
                    let k = this.importProcessor.getIdentifierReplacement(f);
                    if (k === null)
                      throw new Error(
                        `Expected a replacement for ${f} in \`export var\` syntax.`,
                      );
                    z(c) && (k = `${f}: ${k}`), this.tokens.replaceToken(k);
                  } else this.rootTransformer.processToken();
                }
              }
            if (n) {
              const c = this.tokens.currentToken().rhsEndIndex;
              if (c == null)
                throw new Error('Expected = token with an end index.');
              for (; this.tokens.currentIndex() < c; )
                this.rootTransformer.processToken();
              this.tokens.appendCode(')');
            }
          }
          processExportFunction() {
            this.tokens.replaceToken('');
            const n = this.processNamedFunction();
            this.tokens.appendCode(` exports.${n} = ${n};`);
          }
          processNamedFunction() {
            if (this.tokens.matches1(e._function)) this.tokens.copyToken();
            else if (this.tokens.matches2(e.name, e._function)) {
              if (!this.tokens.matchesContextual(u._async))
                throw new Error('Expected async keyword in function export.');
              this.tokens.copyToken(), this.tokens.copyToken();
            }
            if (
              (this.tokens.matches1(e.star) && this.tokens.copyToken(),
              !this.tokens.matches1(e.name))
            )
              throw new Error(
                'Expected identifier for exported function name.',
              );
            const n = this.tokens.identifierName();
            if ((this.tokens.copyToken(), this.tokens.currentToken().isType))
              for (
                this.tokens.removeInitialToken();
                this.tokens.currentToken().isType;

              )
                this.tokens.removeToken();
            return (
              this.tokens.copyExpectedToken(e.parenL),
              this.rootTransformer.processBalancedCode(),
              this.tokens.copyExpectedToken(e.parenR),
              this.rootTransformer.processPossibleTypeRange(),
              this.tokens.copyExpectedToken(e.braceL),
              this.rootTransformer.processBalancedCode(),
              this.tokens.copyExpectedToken(e.braceR),
              n
            );
          }
          processExportClass() {
            this.tokens.removeInitialToken(),
              this.copyDecorators(),
              this.tokens.matches1(e._abstract) && this.tokens.removeToken();
            const n = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.${n} = ${n};`);
          }
          processExportBindings() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const n = $1(this.tokens),
              s = [];
            for (;;) {
              if (this.tokens.matches1(e.braceR)) {
                this.tokens.removeToken();
                break;
              }
              const c = Jt(this.tokens);
              for (; this.tokens.currentIndex() < c.endIndex; )
                this.tokens.removeToken();
              if (
                !(
                  c.isType ||
                  (!n && this.shouldElideExportedIdentifier(c.leftName))
                )
              ) {
                const k = c.rightName;
                k === 'default'
                  ? (this.hadDefaultExport = !0)
                  : (this.hadNamedExport = !0);
                const A = c.leftName,
                  B = this.importProcessor.getIdentifierReplacement(A);
                s.push(`exports.${k} = ${B || A};`);
              }
              if (this.tokens.matches1(e.braceR)) {
                this.tokens.removeToken();
                break;
              }
              if (this.tokens.matches2(e.comma, e.braceR)) {
                this.tokens.removeToken(), this.tokens.removeToken();
                break;
              } else if (this.tokens.matches1(e.comma))
                this.tokens.removeToken();
              else
                throw new Error(
                  `Unexpected token: ${JSON.stringify(
                    this.tokens.currentToken(),
                  )}`,
                );
            }
            if (this.tokens.matchesContextual(u._from)) {
              this.tokens.removeToken();
              const c = this.tokens.stringValue();
              this.tokens.replaceTokenTrimmingLeftWhitespace(
                this.importProcessor.claimImportCode(c),
              ),
                jt(this.tokens);
            } else this.tokens.appendCode(s.join(' '));
            this.tokens.matches1(e.semi) && this.tokens.removeToken();
          }
          processExportStar() {
            for (
              this.tokens.removeInitialToken();
              !this.tokens.matches1(e.string);

            )
              this.tokens.removeToken();
            const n = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(
              this.importProcessor.claimImportCode(n),
            ),
              jt(this.tokens),
              this.tokens.matches1(e.semi) && this.tokens.removeToken();
          }
          shouldElideExportedIdentifier(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              !this.declarationInfo.valueDeclarations.has(n)
            );
          }
        }
        class jc extends ut {
          constructor(n, s, c, f, k, A, B, ee) {
            super(),
              (this.tokens = n),
              (this.nameManager = s),
              (this.helperManager = c),
              (this.reactHotLoaderTransformer = f),
              (this.isTypeScriptTransformEnabled = k),
              (this.isFlowTransformEnabled = A),
              (this.keepUnusedImports = B),
              (this.nonTypeIdentifiers = k && !B ? qs(n, ee) : new Set()),
              (this.declarationInfo = k && !B ? U1(n) : q1),
              (this.injectCreateRequireForImportRequire =
                !!ee.injectCreateRequireForImportRequire);
          }
          process() {
            if (this.tokens.matches3(e._import, e.name, e.eq))
              return this.processImportEquals();
            if (
              this.tokens.matches4(e._import, e.name, e.name, e.eq) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 1,
                u._type,
              )
            ) {
              this.tokens.removeInitialToken();
              for (let n = 0; n < 7; n++) this.tokens.removeToken();
              return !0;
            }
            if (this.tokens.matches2(e._export, e.eq))
              return this.tokens.replaceToken('module.exports'), !0;
            if (
              this.tokens.matches5(
                e._export,
                e._import,
                e.name,
                e.name,
                e.eq,
              ) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 2,
                u._type,
              )
            ) {
              this.tokens.removeInitialToken();
              for (let n = 0; n < 8; n++) this.tokens.removeToken();
              return !0;
            }
            if (this.tokens.matches1(e._import)) return this.processImport();
            if (this.tokens.matches2(e._export, e._default))
              return this.processExportDefault();
            if (this.tokens.matches2(e._export, e.braceL))
              return this.processNamedExports();
            if (
              this.tokens.matches2(e._export, e.name) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 1,
                u._type,
              )
            ) {
              if (
                (this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.matches1(e.braceL))
              ) {
                for (; !this.tokens.matches1(e.braceR); )
                  this.tokens.removeToken();
                this.tokens.removeToken();
              } else
                this.tokens.removeToken(),
                  this.tokens.matches1(e._as) &&
                    (this.tokens.removeToken(), this.tokens.removeToken());
              return (
                this.tokens.matchesContextual(u._from) &&
                  this.tokens.matches1AtIndex(
                    this.tokens.currentIndex() + 1,
                    e.string,
                  ) &&
                  (this.tokens.removeToken(),
                  this.tokens.removeToken(),
                  jt(this.tokens)),
                !0
              );
            }
            return !1;
          }
          processImportEquals() {
            const n = this.tokens.identifierNameAtIndex(
              this.tokens.currentIndex() + 1,
            );
            return (
              this.shouldAutomaticallyElideImportedName(n)
                ? j1(this.tokens)
                : this.injectCreateRequireForImportRequire
                ? (this.tokens.replaceToken('const'),
                  this.tokens.copyToken(),
                  this.tokens.copyToken(),
                  this.tokens.replaceToken(
                    this.helperManager.getHelperName('require'),
                  ))
                : this.tokens.replaceToken('const'),
              !0
            );
          }
          processImport() {
            if (this.tokens.matches2(e._import, e.parenL)) return !1;
            const n = this.tokens.snapshot();
            if (this.removeImportTypeBindings()) {
              for (
                this.tokens.restoreToSnapshot(n);
                !this.tokens.matches1(e.string);

              )
                this.tokens.removeToken();
              this.tokens.removeToken(),
                jt(this.tokens),
                this.tokens.matches1(e.semi) && this.tokens.removeToken();
            }
            return !0;
          }
          removeImportTypeBindings() {
            if (
              (this.tokens.copyExpectedToken(e._import),
              this.tokens.matchesContextual(u._type) &&
                !this.tokens.matches1AtIndex(
                  this.tokens.currentIndex() + 1,
                  e.comma,
                ) &&
                !this.tokens.matchesContextualAtIndex(
                  this.tokens.currentIndex() + 1,
                  u._from,
                ))
            )
              return !0;
            if (this.tokens.matches1(e.string))
              return this.tokens.copyToken(), !1;
            this.tokens.matchesContextual(u._module) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 2,
                u._from,
              ) &&
              this.tokens.copyToken();
            let n = !1,
              s = !1,
              c = !1;
            if (
              (this.tokens.matches1(e.name) &&
                (this.shouldAutomaticallyElideImportedName(
                  this.tokens.identifierName(),
                )
                  ? (this.tokens.removeToken(),
                    this.tokens.matches1(e.comma) && this.tokens.removeToken())
                  : ((n = !0),
                    this.tokens.copyToken(),
                    this.tokens.matches1(e.comma) &&
                      ((c = !0), this.tokens.removeToken()))),
              this.tokens.matches1(e.star))
            )
              this.shouldAutomaticallyElideImportedName(
                this.tokens.identifierNameAtRelativeIndex(2),
              )
                ? (this.tokens.removeToken(),
                  this.tokens.removeToken(),
                  this.tokens.removeToken())
                : (c && this.tokens.appendCode(','),
                  (n = !0),
                  this.tokens.copyExpectedToken(e.star),
                  this.tokens.copyExpectedToken(e.name),
                  this.tokens.copyExpectedToken(e.name));
            else if (this.tokens.matches1(e.braceL)) {
              for (
                c && this.tokens.appendCode(','), this.tokens.copyToken();
                !this.tokens.matches1(e.braceR);

              ) {
                s = !0;
                const f = Jt(this.tokens);
                if (
                  f.isType ||
                  this.shouldAutomaticallyElideImportedName(f.rightName)
                ) {
                  for (; this.tokens.currentIndex() < f.endIndex; )
                    this.tokens.removeToken();
                  this.tokens.matches1(e.comma) && this.tokens.removeToken();
                } else {
                  for (n = !0; this.tokens.currentIndex() < f.endIndex; )
                    this.tokens.copyToken();
                  this.tokens.matches1(e.comma) && this.tokens.copyToken();
                }
              }
              this.tokens.copyExpectedToken(e.braceR);
            }
            return this.keepUnusedImports
              ? !1
              : this.isTypeScriptTransformEnabled
              ? !n
              : this.isFlowTransformEnabled
              ? s && !n
              : !1;
          }
          shouldAutomaticallyElideImportedName(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              !this.nonTypeIdentifiers.has(n)
            );
          }
          processExportDefault() {
            if (
              V1(
                this.isTypeScriptTransformEnabled,
                this.keepUnusedImports,
                this.tokens,
                this.declarationInfo,
              )
            )
              return (
                this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.removeToken(),
                !0
              );
            if (
              !(
                this.tokens.matches4(
                  e._export,
                  e._default,
                  e._function,
                  e.name,
                ) ||
                (this.tokens.matches5(
                  e._export,
                  e._default,
                  e.name,
                  e._function,
                  e.name,
                ) &&
                  this.tokens.matchesContextualAtIndex(
                    this.tokens.currentIndex() + 2,
                    u._async,
                  )) ||
                this.tokens.matches4(e._export, e._default, e._class, e.name) ||
                this.tokens.matches5(
                  e._export,
                  e._default,
                  e._abstract,
                  e._class,
                  e.name,
                )
              ) &&
              this.reactHotLoaderTransformer
            ) {
              const s = this.nameManager.claimFreeName('_default');
              return (
                this.tokens.replaceToken(`let ${s}; export`),
                this.tokens.copyToken(),
                this.tokens.appendCode(` ${s} =`),
                this.reactHotLoaderTransformer.setExtractedDefaultExportName(s),
                !0
              );
            }
            return !1;
          }
          processNamedExports() {
            if (!this.isTypeScriptTransformEnabled) return !1;
            this.tokens.copyExpectedToken(e._export),
              this.tokens.copyExpectedToken(e.braceL);
            const n = $1(this.tokens);
            let s = !1;
            for (; !this.tokens.matches1(e.braceR); ) {
              const c = Jt(this.tokens);
              if (
                c.isType ||
                (!n && this.shouldElideExportedName(c.leftName))
              ) {
                for (; this.tokens.currentIndex() < c.endIndex; )
                  this.tokens.removeToken();
                this.tokens.matches1(e.comma) && this.tokens.removeToken();
              } else {
                for (s = !0; this.tokens.currentIndex() < c.endIndex; )
                  this.tokens.copyToken();
                this.tokens.matches1(e.comma) && this.tokens.copyToken();
              }
            }
            return (
              this.tokens.copyExpectedToken(e.braceR),
              !this.keepUnusedImports &&
                n &&
                !s &&
                (this.tokens.removeToken(),
                this.tokens.removeToken(),
                jt(this.tokens)),
              !0
            );
          }
          shouldElideExportedName(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              this.declarationInfo.typeDeclarations.has(n) &&
              !this.declarationInfo.valueDeclarations.has(n)
            );
          }
        }
        class qc extends ut {
          constructor(n, s, c) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.isImportsTransformEnabled = c);
          }
          process() {
            return this.rootTransformer.processPossibleArrowParamEnd() ||
              this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
              this.rootTransformer.processPossibleTypeRange()
              ? !0
              : this.tokens.matches1(e._enum)
              ? (this.processEnum(), !0)
              : this.tokens.matches2(e._export, e._enum)
              ? (this.processNamedExportEnum(), !0)
              : this.tokens.matches3(e._export, e._default, e._enum)
              ? (this.processDefaultExportEnum(), !0)
              : !1;
          }
          processNamedExportEnum() {
            if (this.isImportsTransformEnabled) {
              this.tokens.removeInitialToken();
              const n = this.tokens.identifierNameAtRelativeIndex(1);
              this.processEnum(),
                this.tokens.appendCode(` exports.${n} = ${n};`);
            } else this.tokens.copyToken(), this.processEnum();
          }
          processDefaultExportEnum() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const n = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum(),
              this.isImportsTransformEnabled
                ? this.tokens.appendCode(` exports.default = ${n};`)
                : this.tokens.appendCode(` export default ${n};`);
          }
          processEnum() {
            this.tokens.replaceToken('const'),
              this.tokens.copyExpectedToken(e.name);
            let n = !1;
            this.tokens.matchesContextual(u._of) &&
              (this.tokens.removeToken(),
              (n = this.tokens.matchesContextual(u._symbol)),
              this.tokens.removeToken());
            const s = this.tokens.matches3(e.braceL, e.name, e.eq);
            this.tokens.appendCode(' = require("flow-enums-runtime")');
            const c = !n && !s;
            for (
              this.tokens.replaceTokenTrimmingLeftWhitespace(
                c ? '.Mirrored([' : '({',
              );
              !this.tokens.matches1(e.braceR);

            ) {
              if (this.tokens.matches1(e.ellipsis)) {
                this.tokens.removeToken();
                break;
              }
              this.processEnumElement(n, s),
                this.tokens.matches1(e.comma) && this.tokens.copyToken();
            }
            this.tokens.replaceToken(c ? ']);' : '});');
          }
          processEnumElement(n, s) {
            if (n) {
              const c = this.tokens.identifierName();
              this.tokens.copyToken(),
                this.tokens.appendCode(`: Symbol("${c}")`);
            } else
              s
                ? (this.tokens.copyToken(),
                  this.tokens.replaceTokenTrimmingLeftWhitespace(':'),
                  this.tokens.copyToken())
                : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
          }
        }
        function Uc(t) {
          let n,
            s = t[0],
            c = 1;
          for (; c < t.length; ) {
            const f = t[c],
              k = t[c + 1];
            if (
              ((c += 2),
              (f === 'optionalAccess' || f === 'optionalCall') && s == null)
            )
              return;
            f === 'access' || f === 'optionalAccess'
              ? ((n = s), (s = k(s)))
              : (f === 'call' || f === 'optionalCall') &&
                ((s = k((...A) => s.call(n, ...A))), (n = void 0));
          }
          return s;
        }
        const Fn = 'jest',
          $c = ['mock', 'unmock', 'enableAutomock', 'disableAutomock'];
        class wr extends ut {
          __init() {
            this.hoistedFunctionNames = [];
          }
          constructor(n, s, c, f) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.nameManager = c),
              (this.importProcessor = f),
              wr.prototype.__init.call(this);
          }
          process() {
            return this.tokens.currentToken().scopeDepth === 0 &&
              this.tokens.matches4(e.name, e.dot, e.name, e.parenL) &&
              this.tokens.identifierName() === Fn
              ? Uc([
                  this,
                  'access',
                  (n) => n.importProcessor,
                  'optionalAccess',
                  (n) => n.getGlobalNames,
                  'call',
                  (n) => n(),
                  'optionalAccess',
                  (n) => n.has,
                  'call',
                  (n) => n(Fn),
                ])
                ? !1
                : this.extractHoistedCalls()
              : !1;
          }
          getHoistedCode() {
            return this.hoistedFunctionNames.length > 0
              ? this.hoistedFunctionNames.map((n) => `${n}();`).join('')
              : '';
          }
          extractHoistedCalls() {
            this.tokens.removeToken();
            let n = !1;
            for (; this.tokens.matches3(e.dot, e.name, e.parenL); ) {
              const s = this.tokens.identifierNameAtIndex(
                this.tokens.currentIndex() + 1,
              );
              if ($c.includes(s)) {
                const f = this.nameManager.claimFreeName('__jestHoist');
                this.hoistedFunctionNames.push(f),
                  this.tokens.replaceToken(`function ${f}(){${Fn}.`),
                  this.tokens.copyToken(),
                  this.tokens.copyToken(),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR),
                  this.tokens.appendCode(';}'),
                  (n = !1);
              } else
                n
                  ? this.tokens.copyToken()
                  : this.tokens.replaceToken(`${Fn}.`),
                  this.tokens.copyToken(),
                  this.tokens.copyToken(),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR),
                  (n = !0);
            }
            return !0;
          }
        }
        class Vc extends ut {
          constructor(n) {
            super(), (this.tokens = n);
          }
          process() {
            if (this.tokens.matches1(e.num)) {
              const n = this.tokens.currentTokenCode();
              if (n.includes('_'))
                return this.tokens.replaceToken(n.replace(/_/g, '')), !0;
            }
            return !1;
          }
        }
        class Wc extends ut {
          constructor(n, s) {
            super(), (this.tokens = n), (this.nameManager = s);
          }
          process() {
            return this.tokens.matches2(e._catch, e.braceL)
              ? (this.tokens.copyToken(),
                this.tokens.appendCode(
                  ` (${this.nameManager.claimFreeName('e')})`,
                ),
                !0)
              : !1;
          }
        }
        class Hc extends ut {
          constructor(n, s) {
            super(), (this.tokens = n), (this.nameManager = s);
          }
          process() {
            if (this.tokens.matches1(e.nullishCoalescing)) {
              const c = this.tokens.currentToken();
              return (
                this.tokens.tokens[c.nullishStartIndex].isAsyncOperation
                  ? this.tokens.replaceTokenTrimmingLeftWhitespace(
                      ', async () => (',
                    )
                  : this.tokens.replaceTokenTrimmingLeftWhitespace(', () => ('),
                !0
              );
            }
            if (
              this.tokens.matches1(e._delete) &&
              this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart
            )
              return this.tokens.removeInitialToken(), !0;
            const s = this.tokens.currentToken().subscriptStartIndex;
            if (
              s != null &&
              this.tokens.tokens[s].isOptionalChainStart &&
              this.tokens.tokenAtRelativeIndex(-1).type !== e._super
            ) {
              const c = this.nameManager.claimFreeName('_');
              let f;
              if (
                (s > 0 &&
                this.tokens.matches1AtIndex(s - 1, e._delete) &&
                this.isLastSubscriptInChain()
                  ? (f = `${c} => delete ${c}`)
                  : (f = `${c} => ${c}`),
                this.tokens.tokens[s].isAsyncOperation && (f = `async ${f}`),
                this.tokens.matches2(e.questionDot, e.parenL) ||
                  this.tokens.matches2(e.questionDot, e.lessThan))
              )
                this.justSkippedSuper() &&
                  this.tokens.appendCode('.bind(this)'),
                  this.tokens.replaceTokenTrimmingLeftWhitespace(
                    `, 'optionalCall', ${f}`,
                  );
              else if (this.tokens.matches2(e.questionDot, e.bracketL))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'optionalAccess', ${f}`,
                );
              else if (this.tokens.matches1(e.questionDot))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'optionalAccess', ${f}.`,
                );
              else if (this.tokens.matches1(e.dot))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'access', ${f}.`,
                );
              else if (this.tokens.matches1(e.bracketL))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'access', ${f}[`,
                );
              else if (this.tokens.matches1(e.parenL))
                this.justSkippedSuper() &&
                  this.tokens.appendCode('.bind(this)'),
                  this.tokens.replaceTokenTrimmingLeftWhitespace(
                    `, 'call', ${f}(`,
                  );
              else
                throw new Error(
                  'Unexpected subscript operator in optional chain.',
                );
              return !0;
            }
            return !1;
          }
          isLastSubscriptInChain() {
            let n = 0;
            for (let s = this.tokens.currentIndex() + 1; ; s++) {
              if (s >= this.tokens.tokens.length)
                throw new Error(
                  'Reached the end of the code while finding the end of the access chain.',
                );
              if (
                (this.tokens.tokens[s].isOptionalChainStart
                  ? n++
                  : this.tokens.tokens[s].isOptionalChainEnd && n--,
                n < 0)
              )
                return !0;
              if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
                return !1;
            }
          }
          justSkippedSuper() {
            let n = 0,
              s = this.tokens.currentIndex() - 1;
            for (;;) {
              if (s < 0)
                throw new Error(
                  'Reached the start of the code while finding the start of the access chain.',
                );
              if (
                (this.tokens.tokens[s].isOptionalChainStart
                  ? n--
                  : this.tokens.tokens[s].isOptionalChainEnd && n++,
                n < 0)
              )
                return !1;
              if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
                return this.tokens.tokens[s - 1].type === e._super;
              s--;
            }
          }
        }
        class Gc extends ut {
          constructor(n, s, c, f) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.importProcessor = c),
              (this.options = f);
          }
          process() {
            const n = this.tokens.currentIndex();
            if (this.tokens.identifierName() === 'createReactClass') {
              const s =
                this.importProcessor &&
                this.importProcessor.getIdentifierReplacement(
                  'createReactClass',
                );
              return (
                s
                  ? this.tokens.replaceToken(`(0, ${s})`)
                  : this.tokens.copyToken(),
                this.tryProcessCreateClassCall(n),
                !0
              );
            }
            if (
              this.tokens.matches3(e.name, e.dot, e.name) &&
              this.tokens.identifierName() === 'React' &&
              this.tokens.identifierNameAtIndex(
                this.tokens.currentIndex() + 2,
              ) === 'createClass'
            ) {
              const s =
                (this.importProcessor &&
                  this.importProcessor.getIdentifierReplacement('React')) ||
                'React';
              return (
                s
                  ? (this.tokens.replaceToken(s),
                    this.tokens.copyToken(),
                    this.tokens.copyToken())
                  : (this.tokens.copyToken(),
                    this.tokens.copyToken(),
                    this.tokens.copyToken()),
                this.tryProcessCreateClassCall(n),
                !0
              );
            }
            return !1;
          }
          tryProcessCreateClassCall(n) {
            const s = this.findDisplayName(n);
            s &&
              this.classNeedsDisplayName() &&
              (this.tokens.copyExpectedToken(e.parenL),
              this.tokens.copyExpectedToken(e.braceL),
              this.tokens.appendCode(`displayName: '${s}',`),
              this.rootTransformer.processBalancedCode(),
              this.tokens.copyExpectedToken(e.braceR),
              this.tokens.copyExpectedToken(e.parenR));
          }
          findDisplayName(n) {
            return n < 2
              ? null
              : this.tokens.matches2AtIndex(n - 2, e.name, e.eq)
              ? this.tokens.identifierNameAtIndex(n - 2)
              : n >= 2 &&
                this.tokens.tokens[n - 2].identifierRole === N.ObjectKey
              ? this.tokens.identifierNameAtIndex(n - 2)
              : this.tokens.matches2AtIndex(n - 2, e._export, e._default)
              ? this.getDisplayNameFromFilename()
              : null;
          }
          getDisplayNameFromFilename() {
            const s = (this.options.filePath || 'unknown').split('/'),
              c = s[s.length - 1],
              f = c.lastIndexOf('.'),
              k = f === -1 ? c : c.slice(0, f);
            return k === 'index' && s[s.length - 2] ? s[s.length - 2] : k;
          }
          classNeedsDisplayName() {
            let n = this.tokens.currentIndex();
            if (!this.tokens.matches2(e.parenL, e.braceL)) return !1;
            const s = n + 1,
              c = this.tokens.tokens[s].contextId;
            if (c == null)
              throw new Error(
                'Expected non-null context ID on object open-brace.',
              );
            for (; n < this.tokens.tokens.length; n++) {
              const f = this.tokens.tokens[n];
              if (f.type === e.braceR && f.contextId === c) {
                n++;
                break;
              }
              if (
                this.tokens.identifierNameAtIndex(n) === 'displayName' &&
                this.tokens.tokens[n].identifierRole === N.ObjectKey &&
                f.contextId === c
              )
                return !1;
            }
            if (n === this.tokens.tokens.length)
              throw new Error(
                'Unexpected end of input when processing React class.',
              );
            return (
              this.tokens.matches1AtIndex(n, e.parenR) ||
              this.tokens.matches2AtIndex(n, e.comma, e.parenR)
            );
          }
        }
        class Ir extends ut {
          __init() {
            this.extractedDefaultExportName = null;
          }
          constructor(n, s) {
            super(),
              (this.tokens = n),
              (this.filePath = s),
              Ir.prototype.__init.call(this);
          }
          setExtractedDefaultExportName(n) {
            this.extractedDefaultExportName = n;
          }
          getPrefixCode() {
            return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`
              .replace(/\s+/g, ' ')
              .trim();
          }
          getSuffixCode() {
            const n = new Set();
            for (const c of this.tokens.tokens)
              !c.isType &&
                S(c) &&
                c.identifierRole !== N.ImportDeclaration &&
                n.add(this.tokens.identifierNameForToken(c));
            const s = Array.from(n).map((c) => ({
              variableName: c,
              uniqueLocalName: c,
            }));
            return (
              this.extractedDefaultExportName &&
                s.push({
                  variableName: this.extractedDefaultExportName,
                  uniqueLocalName: 'default',
                }),
              `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${s.map(
  ({ variableName: c, uniqueLocalName: f }) =>
    `  reactHotLoader.register(${c}, "${f}", ${JSON.stringify(
      this.filePath || '',
    )});`,
).join(`
`)}
  leaveModule(module);
})();`
            );
          }
          process() {
            return !1;
          }
        }
        const Yc = new Set([
          'break',
          'case',
          'catch',
          'class',
          'const',
          'continue',
          'debugger',
          'default',
          'delete',
          'do',
          'else',
          'export',
          'extends',
          'finally',
          'for',
          'function',
          'if',
          'import',
          'in',
          'instanceof',
          'new',
          'return',
          'super',
          'switch',
          'this',
          'throw',
          'try',
          'typeof',
          'var',
          'void',
          'while',
          'with',
          'yield',
          'enum',
          'implements',
          'interface',
          'let',
          'package',
          'private',
          'protected',
          'public',
          'static',
          'await',
          'false',
          'null',
          'true',
        ]);
        function W1(t) {
          if (t.length === 0 || !pe[t.charCodeAt(0)]) return !1;
          for (let n = 1; n < t.length; n++) if (!M[t.charCodeAt(n)]) return !1;
          return !Yc.has(t);
        }
        class Xc extends ut {
          constructor(n, s, c) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.isImportsTransformEnabled = c);
          }
          process() {
            return this.rootTransformer.processPossibleArrowParamEnd() ||
              this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
              this.rootTransformer.processPossibleTypeRange()
              ? !0
              : this.tokens.matches1(e._public) ||
                this.tokens.matches1(e._protected) ||
                this.tokens.matches1(e._private) ||
                this.tokens.matches1(e._abstract) ||
                this.tokens.matches1(e._readonly) ||
                this.tokens.matches1(e._override) ||
                this.tokens.matches1(e.nonNullAssertion)
              ? (this.tokens.removeInitialToken(), !0)
              : this.tokens.matches1(e._enum) ||
                this.tokens.matches2(e._const, e._enum)
              ? (this.processEnum(), !0)
              : this.tokens.matches2(e._export, e._enum) ||
                this.tokens.matches3(e._export, e._const, e._enum)
              ? (this.processEnum(!0), !0)
              : !1;
          }
          processEnum(n = !1) {
            for (
              this.tokens.removeInitialToken();
              this.tokens.matches1(e._const) || this.tokens.matches1(e._enum);

            )
              this.tokens.removeToken();
            const s = this.tokens.identifierName();
            this.tokens.removeToken(),
              n &&
                !this.isImportsTransformEnabled &&
                this.tokens.appendCode('export '),
              this.tokens.appendCode(`var ${s}; (function (${s})`),
              this.tokens.copyExpectedToken(e.braceL),
              this.processEnumBody(s),
              this.tokens.copyExpectedToken(e.braceR),
              n && this.isImportsTransformEnabled
                ? this.tokens.appendCode(
                    `)(${s} || (exports.${s} = ${s} = {}));`,
                  )
                : this.tokens.appendCode(`)(${s} || (${s} = {}));`);
          }
          processEnumBody(n) {
            let s = null;
            for (; !this.tokens.matches1(e.braceR); ) {
              const { nameStringCode: c, variableName: f } =
                this.extractEnumKeyInfo(this.tokens.currentToken());
              this.tokens.removeInitialToken(),
                this.tokens.matches3(e.eq, e.string, e.comma) ||
                this.tokens.matches3(e.eq, e.string, e.braceR)
                  ? this.processStringLiteralEnumMember(n, c, f)
                  : this.tokens.matches1(e.eq)
                  ? this.processExplicitValueEnumMember(n, c, f)
                  : this.processImplicitValueEnumMember(n, c, f, s),
                this.tokens.matches1(e.comma) && this.tokens.removeToken(),
                f != null ? (s = f) : (s = `${n}[${c}]`);
            }
          }
          extractEnumKeyInfo(n) {
            if (n.type === e.name) {
              const s = this.tokens.identifierNameForToken(n);
              return {
                nameStringCode: `"${s}"`,
                variableName: W1(s) ? s : null,
              };
            } else if (n.type === e.string) {
              const s = this.tokens.stringValueForToken(n);
              return {
                nameStringCode: this.tokens.code.slice(n.start, n.end),
                variableName: W1(s) ? s : null,
              };
            } else
              throw new Error(
                'Expected name or string at beginning of enum element.',
              );
          }
          processStringLiteralEnumMember(n, s, c) {
            c != null
              ? (this.tokens.appendCode(`const ${c}`),
                this.tokens.copyToken(),
                this.tokens.copyToken(),
                this.tokens.appendCode(`; ${n}[${s}] = ${c};`))
              : (this.tokens.appendCode(`${n}[${s}]`),
                this.tokens.copyToken(),
                this.tokens.copyToken(),
                this.tokens.appendCode(';'));
          }
          processExplicitValueEnumMember(n, s, c) {
            const f = this.tokens.currentToken().rhsEndIndex;
            if (f == null)
              throw new Error('Expected rhsEndIndex on enum assign.');
            if (c != null) {
              for (
                this.tokens.appendCode(`const ${c}`), this.tokens.copyToken();
                this.tokens.currentIndex() < f;

              )
                this.rootTransformer.processToken();
              this.tokens.appendCode(`; ${n}[${n}[${s}] = ${c}] = ${s};`);
            } else {
              for (
                this.tokens.appendCode(`${n}[${n}[${s}]`),
                  this.tokens.copyToken();
                this.tokens.currentIndex() < f;

              )
                this.rootTransformer.processToken();
              this.tokens.appendCode(`] = ${s};`);
            }
          }
          processImplicitValueEnumMember(n, s, c, f) {
            let k = f != null ? `${f} + 1` : '0';
            c != null &&
              (this.tokens.appendCode(`const ${c} = ${k}; `), (k = c)),
              this.tokens.appendCode(`${n}[${n}[${s}] = ${k}] = ${s};`);
          }
        }
        class On {
          __init() {
            this.transformers = [];
          }
          __init2() {
            this.generatedVariables = [];
          }
          constructor(n, s, c, f) {
            On.prototype.__init.call(this),
              On.prototype.__init2.call(this),
              (this.nameManager = n.nameManager),
              (this.helperManager = n.helperManager);
            const { tokenProcessor: k, importProcessor: A } = n;
            (this.tokens = k),
              (this.isImportsTransformEnabled = s.includes('imports')),
              (this.isReactHotLoaderTransformEnabled =
                s.includes('react-hot-loader')),
              (this.disableESTransforms = !!f.disableESTransforms),
              f.disableESTransforms ||
                (this.transformers.push(new Hc(k, this.nameManager)),
                this.transformers.push(new Vc(k)),
                this.transformers.push(new Wc(k, this.nameManager))),
              s.includes('jsx') &&
                (f.jsxRuntime !== 'preserve' &&
                  this.transformers.push(
                    new Pt(this, k, A, this.nameManager, f),
                  ),
                this.transformers.push(new Gc(this, k, A, f)));
            let B = null;
            if (s.includes('react-hot-loader')) {
              if (!f.filePath)
                throw new Error(
                  'filePath is required when using the react-hot-loader transform.',
                );
              (B = new Ir(k, f.filePath)), this.transformers.push(B);
            }
            if (s.includes('imports')) {
              if (A === null)
                throw new Error(
                  'Expected non-null importProcessor with imports transform enabled.',
                );
              this.transformers.push(
                new un(
                  this,
                  k,
                  A,
                  this.nameManager,
                  this.helperManager,
                  B,
                  c,
                  !!f.enableLegacyTypeScriptModuleInterop,
                  s.includes('typescript'),
                  s.includes('flow'),
                  !!f.preserveDynamicImport,
                  !!f.keepUnusedImports,
                ),
              );
            } else
              this.transformers.push(
                new jc(
                  k,
                  this.nameManager,
                  this.helperManager,
                  B,
                  s.includes('typescript'),
                  s.includes('flow'),
                  !!f.keepUnusedImports,
                  f,
                ),
              );
            s.includes('flow') &&
              this.transformers.push(new qc(this, k, s.includes('imports'))),
              s.includes('typescript') &&
                this.transformers.push(new Xc(this, k, s.includes('imports'))),
              s.includes('jest') &&
                this.transformers.push(new wr(this, k, this.nameManager, A));
          }
          transform() {
            this.tokens.reset(), this.processBalancedCode();
            let s = this.isImportsTransformEnabled ? '"use strict";' : '';
            for (const A of this.transformers) s += A.getPrefixCode();
            (s += this.helperManager.emitHelpers()),
              (s += this.generatedVariables.map((A) => ` var ${A};`).join(''));
            for (const A of this.transformers) s += A.getHoistedCode();
            let c = '';
            for (const A of this.transformers) c += A.getSuffixCode();
            const f = this.tokens.finish();
            let { code: k } = f;
            if (k.startsWith('#!')) {
              let A = k.indexOf(`
`);
              return (
                A === -1 &&
                  ((A = k.length),
                  (k += `
`)),
                {
                  code: k.slice(0, A + 1) + s + k.slice(A + 1) + c,
                  mappings: this.shiftMappings(f.mappings, s.length),
                }
              );
            } else
              return {
                code: s + k + c,
                mappings: this.shiftMappings(f.mappings, s.length),
              };
          }
          processBalancedCode() {
            let n = 0,
              s = 0;
            for (; !this.tokens.isAtEnd(); ) {
              if (
                this.tokens.matches1(e.braceL) ||
                this.tokens.matches1(e.dollarBraceL)
              )
                n++;
              else if (this.tokens.matches1(e.braceR)) {
                if (n === 0) return;
                n--;
              }
              if (this.tokens.matches1(e.parenL)) s++;
              else if (this.tokens.matches1(e.parenR)) {
                if (s === 0) return;
                s--;
              }
              this.processToken();
            }
          }
          processToken() {
            if (this.tokens.matches1(e._class)) {
              this.processClass();
              return;
            }
            for (const n of this.transformers) if (n.process()) return;
            this.tokens.copyToken();
          }
          processNamedClass() {
            if (!this.tokens.matches2(e._class, e.name))
              throw new Error('Expected identifier for exported class name.');
            const n = this.tokens.identifierNameAtIndex(
              this.tokens.currentIndex() + 1,
            );
            return this.processClass(), n;
          }
          processClass() {
            const n = Oc(
                this,
                this.tokens,
                this.nameManager,
                this.disableESTransforms,
              ),
              s =
                (n.headerInfo.isExpression || !n.headerInfo.className) &&
                n.staticInitializerNames.length +
                  n.instanceInitializerNames.length >
                  0;
            let c = n.headerInfo.className;
            s &&
              ((c = this.nameManager.claimFreeName('_class')),
              this.generatedVariables.push(c),
              this.tokens.appendCode(` (${c} =`));
            const k = this.tokens.currentToken().contextId;
            if (k == null)
              throw new Error('Expected class to have a context ID.');
            for (
              this.tokens.copyExpectedToken(e._class);
              !this.tokens.matchesContextIdAndLabel(e.braceL, k);

            )
              this.processToken();
            this.processClassBody(n, c);
            const A = n.staticInitializerNames.map((B) => `${c}.${B}()`);
            s
              ? this.tokens.appendCode(
                  `, ${A.map((B) => `${B}, `).join('')}${c})`,
                )
              : n.staticInitializerNames.length > 0 &&
                this.tokens.appendCode(` ${A.map((B) => `${B};`).join(' ')}`);
          }
          processClassBody(n, s) {
            const {
              headerInfo: c,
              constructorInsertPos: f,
              constructorInitializerStatements: k,
              fields: A,
              instanceInitializerNames: B,
              rangesToRemove: ee,
            } = n;
            let fe = 0,
              be = 0;
            const ge = this.tokens.currentToken().contextId;
            if (ge == null)
              throw new Error('Expected non-null context ID on class.');
            this.tokens.copyExpectedToken(e.braceL),
              this.isReactHotLoaderTransformEnabled &&
                this.tokens.appendCode(
                  '__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}',
                );
            const ne = k.length + B.length > 0;
            if (f === null && ne) {
              const we = this.makeConstructorInitCode(k, B, s);
              if (c.hasSuperclass) {
                const De = this.nameManager.claimFreeName('args');
                this.tokens.appendCode(
                  `constructor(...${De}) { super(...${De}); ${we}; }`,
                );
              } else this.tokens.appendCode(`constructor() { ${we}; }`);
            }
            for (; !this.tokens.matchesContextIdAndLabel(e.braceR, ge); )
              if (fe < A.length && this.tokens.currentIndex() === A[fe].start) {
                let we = !1;
                for (
                  this.tokens.matches1(e.bracketL)
                    ? this.tokens.copyTokenWithPrefix(
                        `${A[fe].initializerName}() {this`,
                      )
                    : this.tokens.matches1(e.string) ||
                      this.tokens.matches1(e.num)
                    ? (this.tokens.copyTokenWithPrefix(
                        `${A[fe].initializerName}() {this[`,
                      ),
                      (we = !0))
                    : this.tokens.copyTokenWithPrefix(
                        `${A[fe].initializerName}() {this.`,
                      );
                  this.tokens.currentIndex() < A[fe].end;

                )
                  we &&
                    this.tokens.currentIndex() === A[fe].equalsIndex &&
                    this.tokens.appendCode(']'),
                    this.processToken();
                this.tokens.appendCode('}'), fe++;
              } else if (
                be < ee.length &&
                this.tokens.currentIndex() >= ee[be].start
              ) {
                for (
                  this.tokens.currentIndex() < ee[be].end &&
                  this.tokens.removeInitialToken();
                  this.tokens.currentIndex() < ee[be].end;

                )
                  this.tokens.removeToken();
                be++;
              } else
                this.tokens.currentIndex() === f
                  ? (this.tokens.copyToken(),
                    ne &&
                      this.tokens.appendCode(
                        `;${this.makeConstructorInitCode(k, B, s)};`,
                      ),
                    this.processToken())
                  : this.processToken();
            this.tokens.copyExpectedToken(e.braceR);
          }
          makeConstructorInitCode(n, s, c) {
            return [
              ...n,
              ...s.map((f) => `${c}.prototype.${f}.call(this)`),
            ].join(';');
          }
          processPossibleArrowParamEnd() {
            if (
              this.tokens.matches2(e.parenR, e.colon) &&
              this.tokens.tokenAtRelativeIndex(1).isType
            ) {
              let n = this.tokens.currentIndex() + 1;
              for (; this.tokens.tokens[n].isType; ) n++;
              if (this.tokens.matches1AtIndex(n, e.arrow)) {
                for (
                  this.tokens.removeInitialToken();
                  this.tokens.currentIndex() < n;

                )
                  this.tokens.removeToken();
                return (
                  this.tokens.replaceTokenTrimmingLeftWhitespace(') =>'), !0
                );
              }
            }
            return !1;
          }
          processPossibleAsyncArrowWithTypeParams() {
            if (
              !this.tokens.matchesContextual(u._async) &&
              !this.tokens.matches1(e._async)
            )
              return !1;
            const n = this.tokens.tokenAtRelativeIndex(1);
            if (n.type !== e.lessThan || !n.isType) return !1;
            let s = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[s].isType; ) s++;
            if (this.tokens.matches1AtIndex(s, e.parenL)) {
              for (
                this.tokens.replaceToken('async ('),
                  this.tokens.removeInitialToken();
                this.tokens.currentIndex() < s;

              )
                this.tokens.removeToken();
              return (
                this.tokens.removeToken(),
                this.processBalancedCode(),
                this.processToken(),
                !0
              );
            }
            return !1;
          }
          processPossibleTypeRange() {
            if (this.tokens.currentToken().isType) {
              for (
                this.tokens.removeInitialToken();
                this.tokens.currentToken().isType;

              )
                this.tokens.removeToken();
              return !0;
            }
            return !1;
          }
          shiftMappings(n, s) {
            for (let c = 0; c < n.length; c++) {
              const f = n[c];
              f !== void 0 && (n[c] = f + s);
            }
            return n;
          }
        }
        var bl = H(18589);
        function Tl(t, n) {
          if (n.length === 0) return '';
          const s = Object.keys(n[0]).filter(
              (ne) =>
                ne !== 'type' &&
                ne !== 'value' &&
                ne !== 'start' &&
                ne !== 'end' &&
                ne !== 'loc',
            ),
            c = Object.keys(n[0].type).filter(
              (ne) => ne !== 'label' && ne !== 'keyword',
            ),
            f = ['Location', 'Label', 'Raw', ...s, ...c],
            k = new LinesAndColumns(t),
            A = [f, ...n.map(ee)],
            B = f.map(() => 0);
          for (const ne of A)
            for (let we = 0; we < ne.length; we++)
              B[we] = Math.max(B[we], ne[we].length);
          return A.map((ne) => ne.map((we, De) => we.padEnd(B[De])).join(' '))
            .join(`
`);
          function ee(ne) {
            const we = t.slice(ne.start, ne.end);
            return [
              be(ne.start, ne.end),
              formatTokenType(ne.type),
              zc(String(we), 14),
              ...s.map((De) => fe(ne[De], De)),
              ...c.map((De) => fe(ne.type[De], De)),
            ];
          }
          function fe(ne, we) {
            return ne === !0 ? we : ne === !1 || ne === null ? '' : String(ne);
          }
          function be(ne, we) {
            return `${ge(ne)}-${ge(we)}`;
          }
          function ge(ne) {
            const we = k.locationForIndex(ne);
            return we ? `${we.line + 1}:${we.column + 1}` : 'Unknown';
          }
        }
        function zc(t, n) {
          return t.length > n ? `${t.slice(0, n - 3)}...` : t;
        }
        function Jc(t) {
          const n = new Set();
          for (let s = 0; s < t.tokens.length; s++)
            t.matches1AtIndex(s, e._import) &&
              !t.matches3AtIndex(s, e._import, e.name, e.eq) &&
              Qc(t, s, n);
          return n;
        }
        function Qc(t, n, s) {
          n++,
            !t.matches1AtIndex(n, e.parenL) &&
              (t.matches1AtIndex(n, e.name) &&
                (s.add(t.identifierNameAtIndex(n)),
                n++,
                t.matches1AtIndex(n, e.comma) && n++),
              t.matches1AtIndex(n, e.star) &&
                ((n += 2), s.add(t.identifierNameAtIndex(n)), n++),
              t.matches1AtIndex(n, e.braceL) && (n++, Zc(t, n, s)));
        }
        function Zc(t, n, s) {
          for (;;) {
            if (t.matches1AtIndex(n, e.braceR)) return;
            const c = Jt(t, n);
            if (
              ((n = c.endIndex),
              c.isType || s.add(c.rightName),
              t.matches2AtIndex(n, e.comma, e.braceR))
            )
              return;
            if (t.matches1AtIndex(n, e.braceR)) return;
            if (t.matches1AtIndex(n, e.comma)) n++;
            else
              throw new Error(
                `Unexpected token: ${JSON.stringify(t.tokens[n])}`,
              );
          }
        }
        function El() {
          return '3.35.0';
        }
        function Kc(t, n) {
          mo(n);
          try {
            const s = H1(t, n),
              f = new On(
                s,
                n.transforms,
                !!n.enableLegacyBabel5ModuleInterop,
                n,
              ).transform();
            let k = { code: f.code };
            if (n.sourceMapOptions) {
              if (!n.filePath)
                throw new Error(
                  'filePath must be specified when generating a source map.',
                );
              k = Q1(J1({}, k), {
                sourceMap: ro(
                  f,
                  n.filePath,
                  n.sourceMapOptions,
                  t,
                  s.tokenProcessor.tokens,
                ),
              });
            }
            return k;
          } catch (s) {
            throw (
              (n.filePath &&
                (s.message = `Error transforming ${n.filePath}: ${s.message}`),
              s)
            );
          }
        }
        function Al(t, n) {
          const s = H1(t, n).tokenProcessor.tokens;
          return formatTokens(t, s);
        }
        function H1(t, n) {
          const s = n.transforms.includes('jsx'),
            c = n.transforms.includes('typescript'),
            f = n.transforms.includes('flow'),
            k = n.disableESTransforms === !0,
            A = Dc(t, s, c, f),
            B = A.tokens,
            ee = A.scopes,
            fe = new Bn(t, B),
            be = new gn(fe),
            ge = new ln(t, B, f, k, be),
            ne = !!n.enableLegacyTypeScriptModuleInterop;
          let we = null;
          return (
            n.transforms.includes('imports')
              ? ((we = new Lt(
                  fe,
                  ge,
                  ne,
                  n,
                  n.transforms.includes('typescript'),
                  !!n.keepUnusedImports,
                  be,
                )),
                we.preprocessTokens(),
                Us(ge, ee, we.getGlobalNames()),
                n.transforms.includes('typescript') &&
                  !n.keepUnusedImports &&
                  we.pruneTypeOnlyImports())
              : n.transforms.includes('typescript') &&
                !n.keepUnusedImports &&
                Us(ge, ee, Jc(ge)),
            {
              tokenProcessor: ge,
              scopes: ee,
              nameManager: fe,
              importProcessor: we,
              helperManager: be,
            }
          );
        }
        function br(t) {
          '@babel/helpers - typeof';
          return (
            (br =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      typeof Symbol == 'function' &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            br(t)
          );
        }
        function Tr() {
          'use strict';
          Tr = function () {
            return t;
          };
          var t = {},
            n = Object.prototype,
            s = n.hasOwnProperty,
            c =
              Object.defineProperty ||
              function (Z, F, V) {
                Z[F] = V.value;
              },
            f = typeof Symbol == 'function' ? Symbol : {},
            k = f.iterator || '@@iterator',
            A = f.asyncIterator || '@@asyncIterator',
            B = f.toStringTag || '@@toStringTag';
          function ee(Z, F, V) {
            return (
              Object.defineProperty(Z, F, {
                value: V,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              Z[F]
            );
          }
          try {
            ee({}, '');
          } catch (Z) {
            ee = function (V, ke, Te) {
              return (V[ke] = Te);
            };
          }
          function fe(Z, F, V, ke) {
            var Te = F && F.prototype instanceof ne ? F : ne,
              _e = Object.create(Te.prototype),
              Be = new dt(ke || []);
            return c(_e, '_invoke', { value: vt(Z, V, Be) }), _e;
          }
          function be(Z, F, V) {
            try {
              return { type: 'normal', arg: Z.call(F, V) };
            } catch (ke) {
              return { type: 'throw', arg: ke };
            }
          }
          t.wrap = fe;
          var ge = {};
          function ne() {}
          function we() {}
          function De() {}
          var Ze = {};
          ee(Ze, k, function () {
            return this;
          });
          var He = Object.getPrototypeOf,
            et = He && He(He(kt([])));
          et && et !== n && s.call(et, k) && (Ze = et);
          var Je = (De.prototype = ne.prototype = Object.create(Ze));
          function lt(Z) {
            ['next', 'throw', 'return'].forEach(function (F) {
              ee(Z, F, function (V) {
                return this._invoke(F, V);
              });
            });
          }
          function Qe(Z, F) {
            function V(Te, _e, Be, Ve) {
              var We = be(Z[Te], Z, _e);
              if (We.type !== 'throw') {
                var st = We.arg,
                  tt = st.value;
                return tt && br(tt) == 'object' && s.call(tt, '__await')
                  ? F.resolve(tt.__await).then(
                      function (ot) {
                        V('next', ot, Be, Ve);
                      },
                      function (ot) {
                        V('throw', ot, Be, Ve);
                      },
                    )
                  : F.resolve(tt).then(
                      function (ot) {
                        (st.value = ot), Be(st);
                      },
                      function (ot) {
                        return V('throw', ot, Be, Ve);
                      },
                    );
              }
              Ve(We.arg);
            }
            var ke;
            c(this, '_invoke', {
              value: function (_e, Be) {
                function Ve() {
                  return new F(function (We, st) {
                    V(_e, Be, We, st);
                  });
                }
                return (ke = ke ? ke.then(Ve, Ve) : Ve());
              },
            });
          }
          function vt(Z, F, V) {
            var ke = 'suspendedStart';
            return function (Te, _e) {
              if (ke === 'executing')
                throw new Error('Generator is already running');
              if (ke === 'completed') {
                if (Te === 'throw') throw _e;
                return It();
              }
              for (V.method = Te, V.arg = _e; ; ) {
                var Be = V.delegate;
                if (Be) {
                  var Ve = wt(Be, V);
                  if (Ve) {
                    if (Ve === ge) continue;
                    return Ve;
                  }
                }
                if (V.method === 'next') V.sent = V._sent = V.arg;
                else if (V.method === 'throw') {
                  if (ke === 'suspendedStart')
                    throw ((ke = 'completed'), V.arg);
                  V.dispatchException(V.arg);
                } else V.method === 'return' && V.abrupt('return', V.arg);
                ke = 'executing';
                var We = be(Z, F, V);
                if (We.type === 'normal') {
                  if (
                    ((ke = V.done ? 'completed' : 'suspendedYield'),
                    We.arg === ge)
                  )
                    continue;
                  return { value: We.arg, done: V.done };
                }
                We.type === 'throw' &&
                  ((ke = 'completed'), (V.method = 'throw'), (V.arg = We.arg));
              }
            };
          }
          function wt(Z, F) {
            var V = F.method,
              ke = Z.iterator[V];
            if (ke === void 0)
              return (
                (F.delegate = null),
                (V === 'throw' &&
                  Z.iterator.return &&
                  ((F.method = 'return'),
                  (F.arg = void 0),
                  wt(Z, F),
                  F.method === 'throw')) ||
                  (V !== 'return' &&
                    ((F.method = 'throw'),
                    (F.arg = new TypeError(
                      "The iterator does not provide a '" + V + "' method",
                    )))),
                ge
              );
            var Te = be(ke, Z.iterator, F.arg);
            if (Te.type === 'throw')
              return (
                (F.method = 'throw'), (F.arg = Te.arg), (F.delegate = null), ge
              );
            var _e = Te.arg;
            return _e
              ? _e.done
                ? ((F[Z.resultName] = _e.value),
                  (F.next = Z.nextLoc),
                  F.method !== 'return' &&
                    ((F.method = 'next'), (F.arg = void 0)),
                  (F.delegate = null),
                  ge)
                : _e
              : ((F.method = 'throw'),
                (F.arg = new TypeError('iterator result is not an object')),
                (F.delegate = null),
                ge);
          }
          function Ct(Z) {
            var F = { tryLoc: Z[0] };
            1 in Z && (F.catchLoc = Z[1]),
              2 in Z && ((F.finallyLoc = Z[2]), (F.afterLoc = Z[3])),
              this.tryEntries.push(F);
          }
          function mt(Z) {
            var F = Z.completion || {};
            (F.type = 'normal'), delete F.arg, (Z.completion = F);
          }
          function dt(Z) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              Z.forEach(Ct, this),
              this.reset(!0);
          }
          function kt(Z) {
            if (Z) {
              var F = Z[k];
              if (F) return F.call(Z);
              if (typeof Z.next == 'function') return Z;
              if (!isNaN(Z.length)) {
                var V = -1,
                  ke = function Te() {
                    for (; ++V < Z.length; )
                      if (s.call(Z, V))
                        return (Te.value = Z[V]), (Te.done = !1), Te;
                    return (Te.value = void 0), (Te.done = !0), Te;
                  };
                return (ke.next = ke);
              }
            }
            return { next: It };
          }
          function It() {
            return { value: void 0, done: !0 };
          }
          return (
            (we.prototype = De),
            c(Je, 'constructor', { value: De, configurable: !0 }),
            c(De, 'constructor', { value: we, configurable: !0 }),
            (we.displayName = ee(De, B, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (Z) {
              var F = typeof Z == 'function' && Z.constructor;
              return (
                !!F &&
                (F === we || (F.displayName || F.name) === 'GeneratorFunction')
              );
            }),
            (t.mark = function (Z) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(Z, De)
                  : ((Z.__proto__ = De), ee(Z, B, 'GeneratorFunction')),
                (Z.prototype = Object.create(Je)),
                Z
              );
            }),
            (t.awrap = function (Z) {
              return { __await: Z };
            }),
            lt(Qe.prototype),
            ee(Qe.prototype, A, function () {
              return this;
            }),
            (t.AsyncIterator = Qe),
            (t.async = function (Z, F, V, ke, Te) {
              Te === void 0 && (Te = Promise);
              var _e = new Qe(fe(Z, F, V, ke), Te);
              return t.isGeneratorFunction(F)
                ? _e
                : _e.next().then(function (Be) {
                    return Be.done ? Be.value : _e.next();
                  });
            }),
            lt(Je),
            ee(Je, B, 'Generator'),
            ee(Je, k, function () {
              return this;
            }),
            ee(Je, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (Z) {
              var F = Object(Z),
                V = [];
              for (var ke in F) V.push(ke);
              return (
                V.reverse(),
                function Te() {
                  for (; V.length; ) {
                    var _e = V.pop();
                    if (_e in F) return (Te.value = _e), (Te.done = !1), Te;
                  }
                  return (Te.done = !0), Te;
                }
              );
            }),
            (t.values = kt),
            (dt.prototype = {
              constructor: dt,
              reset: function (F) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = void 0),
                  this.tryEntries.forEach(mt),
                  !F)
                )
                  for (var V in this)
                    V.charAt(0) === 't' &&
                      s.call(this, V) &&
                      !isNaN(+V.slice(1)) &&
                      (this[V] = void 0);
              },
              stop: function () {
                this.done = !0;
                var F = this.tryEntries[0].completion;
                if (F.type === 'throw') throw F.arg;
                return this.rval;
              },
              dispatchException: function (F) {
                if (this.done) throw F;
                var V = this;
                function ke(st, tt) {
                  return (
                    (Be.type = 'throw'),
                    (Be.arg = F),
                    (V.next = st),
                    tt && ((V.method = 'next'), (V.arg = void 0)),
                    !!tt
                  );
                }
                for (var Te = this.tryEntries.length - 1; Te >= 0; --Te) {
                  var _e = this.tryEntries[Te],
                    Be = _e.completion;
                  if (_e.tryLoc === 'root') return ke('end');
                  if (_e.tryLoc <= this.prev) {
                    var Ve = s.call(_e, 'catchLoc'),
                      We = s.call(_e, 'finallyLoc');
                    if (Ve && We) {
                      if (this.prev < _e.catchLoc) return ke(_e.catchLoc, !0);
                      if (this.prev < _e.finallyLoc) return ke(_e.finallyLoc);
                    } else if (Ve) {
                      if (this.prev < _e.catchLoc) return ke(_e.catchLoc, !0);
                    } else {
                      if (!We)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < _e.finallyLoc) return ke(_e.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (F, V) {
                for (var ke = this.tryEntries.length - 1; ke >= 0; --ke) {
                  var Te = this.tryEntries[ke];
                  if (
                    Te.tryLoc <= this.prev &&
                    s.call(Te, 'finallyLoc') &&
                    this.prev < Te.finallyLoc
                  ) {
                    var _e = Te;
                    break;
                  }
                }
                _e &&
                  (F === 'break' || F === 'continue') &&
                  _e.tryLoc <= V &&
                  V <= _e.finallyLoc &&
                  (_e = null);
                var Be = _e ? _e.completion : {};
                return (
                  (Be.type = F),
                  (Be.arg = V),
                  _e
                    ? ((this.method = 'next'), (this.next = _e.finallyLoc), ge)
                    : this.complete(Be)
                );
              },
              complete: function (F, V) {
                if (F.type === 'throw') throw F.arg;
                return (
                  F.type === 'break' || F.type === 'continue'
                    ? (this.next = F.arg)
                    : F.type === 'return'
                    ? ((this.rval = this.arg = F.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : F.type === 'normal' && V && (this.next = V),
                  ge
                );
              },
              finish: function (F) {
                for (var V = this.tryEntries.length - 1; V >= 0; --V) {
                  var ke = this.tryEntries[V];
                  if (ke.finallyLoc === F)
                    return (
                      this.complete(ke.completion, ke.afterLoc), mt(ke), ge
                    );
                }
              },
              catch: function (F) {
                for (var V = this.tryEntries.length - 1; V >= 0; --V) {
                  var ke = this.tryEntries[V];
                  if (ke.tryLoc === F) {
                    var Te = ke.completion;
                    if (Te.type === 'throw') {
                      var _e = Te.arg;
                      mt(ke);
                    }
                    return _e;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (F, V, ke) {
                return (
                  (this.delegate = {
                    iterator: kt(F),
                    resultName: V,
                    nextLoc: ke,
                  }),
                  this.method === 'next' && (this.arg = void 0),
                  ge
                );
              },
            }),
            t
          );
        }
        function G1(t, n, s, c, f, k, A) {
          try {
            var B = t[k](A),
              ee = B.value;
          } catch (fe) {
            s(fe);
            return;
          }
          B.done ? n(ee) : Promise.resolve(ee).then(c, f);
        }
        function el(t) {
          return function () {
            var n = this,
              s = arguments;
            return new Promise(function (c, f) {
              var k = t.apply(n, s);
              function A(ee) {
                G1(k, c, f, A, B, 'next', ee);
              }
              function B(ee) {
                G1(k, c, f, A, B, 'throw', ee);
              }
              A(void 0);
            });
          };
        }
        var tl = (function () {
            var t = el(
              Tr().mark(function n(s) {
                return Tr().wrap(function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        return f.abrupt(
                          'return',
                          Kc(s, {
                            transforms: ['typescript', 'jsx', 'imports'],
                          }).code,
                        );
                      case 1:
                      case 'end':
                        return f.stop();
                    }
                }, n);
              }),
            );
            return function (s) {
              return t.apply(this, arguments);
            };
          })(),
          nl = tl;
      },
      79742: function (Le, I) {
        'use strict';
        (I.byteLength = h), (I.toByteArray = T), (I.fromByteArray = r);
        for (
          var H = [],
            u = [],
            e = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
            Ie =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            O = 0,
            X = Ie.length;
          O < X;
          ++O
        )
          (H[O] = Ie[O]), (u[Ie.charCodeAt(O)] = O);
        (u[45] = 62), (u[95] = 63);
        function C(w) {
          var ce = w.length;
          if (ce % 4 > 0)
            throw new Error('Invalid string. Length must be a multiple of 4');
          var q = w.indexOf('=');
          q === -1 && (q = ce);
          var oe = q === ce ? 0 : 4 - (q % 4);
          return [q, oe];
        }
        function h(w) {
          var ce = C(w),
            q = ce[0],
            oe = ce[1];
          return ((q + oe) * 3) / 4 - oe;
        }
        function d(w, ce, q) {
          return ((ce + q) * 3) / 4 - q;
        }
        function T(w) {
          var ce,
            q = C(w),
            oe = q[0],
            ie = q[1],
            ye = new e(d(w, oe, ie)),
            ve = 0,
            P = ie > 0 ? oe - 4 : oe,
            Se;
          for (Se = 0; Se < P; Se += 4)
            (ce =
              (u[w.charCodeAt(Se)] << 18) |
              (u[w.charCodeAt(Se + 1)] << 12) |
              (u[w.charCodeAt(Se + 2)] << 6) |
              u[w.charCodeAt(Se + 3)]),
              (ye[ve++] = (ce >> 16) & 255),
              (ye[ve++] = (ce >> 8) & 255),
              (ye[ve++] = ce & 255);
          return (
            ie === 2 &&
              ((ce =
                (u[w.charCodeAt(Se)] << 2) | (u[w.charCodeAt(Se + 1)] >> 4)),
              (ye[ve++] = ce & 255)),
            ie === 1 &&
              ((ce =
                (u[w.charCodeAt(Se)] << 10) |
                (u[w.charCodeAt(Se + 1)] << 4) |
                (u[w.charCodeAt(Se + 2)] >> 2)),
              (ye[ve++] = (ce >> 8) & 255),
              (ye[ve++] = ce & 255)),
            ye
          );
        }
        function E(w) {
          return (
            H[(w >> 18) & 63] + H[(w >> 12) & 63] + H[(w >> 6) & 63] + H[w & 63]
          );
        }
        function j(w, ce, q) {
          for (var oe, ie = [], ye = ce; ye < q; ye += 3)
            (oe =
              ((w[ye] << 16) & 16711680) +
              ((w[ye + 1] << 8) & 65280) +
              (w[ye + 2] & 255)),
              ie.push(E(oe));
          return ie.join('');
        }
        function r(w) {
          for (
            var ce,
              q = w.length,
              oe = q % 3,
              ie = [],
              ye = 16383,
              ve = 0,
              P = q - oe;
            ve < P;
            ve += ye
          )
            ie.push(j(w, ve, ve + ye > P ? P : ve + ye));
          return (
            oe === 1
              ? ((ce = w[q - 1]),
                ie.push(H[ce >> 2] + H[(ce << 4) & 63] + '=='))
              : oe === 2 &&
                ((ce = (w[q - 2] << 8) + w[q - 1]),
                ie.push(
                  H[ce >> 10] + H[(ce >> 4) & 63] + H[(ce << 2) & 63] + '=',
                )),
            ie.join('')
          );
        }
      },
      48764: function (Le, I, H) {
        'use strict';
        var u;
        var e = H(79742),
          Ie = H(80645),
          O = H(87300);
        (I.lW = d),
          (u = ye),
          (I.h2 = 50),
          (d.TYPED_ARRAY_SUPPORT =
            H.g.TYPED_ARRAY_SUPPORT !== void 0 ? H.g.TYPED_ARRAY_SUPPORT : X()),
          (u = C());
        function X() {
          try {
            var o = new Uint8Array(1);
            return (
              (o.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                  return 42;
                },
              }),
              o.foo() === 42 &&
                typeof o.subarray == 'function' &&
                o.subarray(1, 1).byteLength === 0
            );
          } catch (i) {
            return !1;
          }
        }
        function C() {
          return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function h(o, i) {
          if (C() < i) throw new RangeError('Invalid typed array length');
          return (
            d.TYPED_ARRAY_SUPPORT
              ? ((o = new Uint8Array(i)), (o.__proto__ = d.prototype))
              : (o === null && (o = new d(i)), (o.length = i)),
            o
          );
        }
        function d(o, i, a) {
          if (!d.TYPED_ARRAY_SUPPORT && !(this instanceof d))
            return new d(o, i, a);
          if (typeof o == 'number') {
            if (typeof i == 'string')
              throw new Error(
                'If encoding is specified then the first argument must be a string',
              );
            return r(this, o);
          }
          return T(this, o, i, a);
        }
        (d.poolSize = 8192),
          (d._augment = function (o) {
            return (o.__proto__ = d.prototype), o;
          });
        function T(o, i, a, l) {
          if (typeof i == 'number')
            throw new TypeError('"value" argument must not be a number');
          return typeof ArrayBuffer != 'undefined' && i instanceof ArrayBuffer
            ? q(o, i, a, l)
            : typeof i == 'string'
            ? w(o, i, a)
            : oe(o, i);
        }
        (d.from = function (o, i, a) {
          return T(null, o, i, a);
        }),
          d.TYPED_ARRAY_SUPPORT &&
            ((d.prototype.__proto__ = Uint8Array.prototype),
            (d.__proto__ = Uint8Array),
            typeof Symbol != 'undefined' &&
              Symbol.species &&
              d[Symbol.species] === d &&
              Object.defineProperty(d, Symbol.species, {
                value: null,
                configurable: !0,
              }));
        function E(o) {
          if (typeof o != 'number')
            throw new TypeError('"size" argument must be a number');
          if (o < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function j(o, i, a, l) {
          return (
            E(i),
            i <= 0
              ? h(o, i)
              : a !== void 0
              ? typeof l == 'string'
                ? h(o, i).fill(a, l)
                : h(o, i).fill(a)
              : h(o, i)
          );
        }
        d.alloc = function (o, i, a) {
          return j(null, o, i, a);
        };
        function r(o, i) {
          if ((E(i), (o = h(o, i < 0 ? 0 : ie(i) | 0)), !d.TYPED_ARRAY_SUPPORT))
            for (var a = 0; a < i; ++a) o[a] = 0;
          return o;
        }
        (d.allocUnsafe = function (o) {
          return r(null, o);
        }),
          (d.allocUnsafeSlow = function (o) {
            return r(null, o);
          });
        function w(o, i, a) {
          if (
            ((typeof a != 'string' || a === '') && (a = 'utf8'),
            !d.isEncoding(a))
          )
            throw new TypeError('"encoding" must be a valid string encoding');
          var l = ve(i, a) | 0;
          o = h(o, l);
          var p = o.write(i, a);
          return p !== l && (o = o.slice(0, p)), o;
        }
        function ce(o, i) {
          var a = i.length < 0 ? 0 : ie(i.length) | 0;
          o = h(o, a);
          for (var l = 0; l < a; l += 1) o[l] = i[l] & 255;
          return o;
        }
        function q(o, i, a, l) {
          if ((i.byteLength, a < 0 || i.byteLength < a))
            throw new RangeError("'offset' is out of bounds");
          if (i.byteLength < a + (l || 0))
            throw new RangeError("'length' is out of bounds");
          return (
            a === void 0 && l === void 0
              ? (i = new Uint8Array(i))
              : l === void 0
              ? (i = new Uint8Array(i, a))
              : (i = new Uint8Array(i, a, l)),
            d.TYPED_ARRAY_SUPPORT
              ? ((o = i), (o.__proto__ = d.prototype))
              : (o = ce(o, i)),
            o
          );
        }
        function oe(o, i) {
          if (d.isBuffer(i)) {
            var a = ie(i.length) | 0;
            return (o = h(o, a)), o.length === 0 || i.copy(o, 0, 0, a), o;
          }
          if (i) {
            if (
              (typeof ArrayBuffer != 'undefined' &&
                i.buffer instanceof ArrayBuffer) ||
              'length' in i
            )
              return typeof i.length != 'number' || Oe(i.length)
                ? h(o, 0)
                : ce(o, i);
            if (i.type === 'Buffer' && O(i.data)) return ce(o, i.data);
          }
          throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
          );
        }
        function ie(o) {
          if (o >= C())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                C().toString(16) +
                ' bytes',
            );
          return o | 0;
        }
        function ye(o) {
          return +o != o && (o = 0), d.alloc(+o);
        }
        (d.isBuffer = function (i) {
          return !!(i != null && i._isBuffer);
        }),
          (d.compare = function (i, a) {
            if (!d.isBuffer(i) || !d.isBuffer(a))
              throw new TypeError('Arguments must be Buffers');
            if (i === a) return 0;
            for (
              var l = i.length, p = a.length, g = 0, y = Math.min(l, p);
              g < y;
              ++g
            )
              if (i[g] !== a[g]) {
                (l = i[g]), (p = a[g]);
                break;
              }
            return l < p ? -1 : p < l ? 1 : 0;
          }),
          (d.isEncoding = function (i) {
            switch (String(i).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (d.concat = function (i, a) {
            if (!O(i))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            if (i.length === 0) return d.alloc(0);
            var l;
            if (a === void 0)
              for (a = 0, l = 0; l < i.length; ++l) a += i[l].length;
            var p = d.allocUnsafe(a),
              g = 0;
            for (l = 0; l < i.length; ++l) {
              var y = i[l];
              if (!d.isBuffer(y))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              y.copy(p, g), (g += y.length);
            }
            return p;
          });
        function ve(o, i) {
          if (d.isBuffer(o)) return o.length;
          if (
            typeof ArrayBuffer != 'undefined' &&
            typeof ArrayBuffer.isView == 'function' &&
            (ArrayBuffer.isView(o) || o instanceof ArrayBuffer)
          )
            return o.byteLength;
          typeof o != 'string' && (o = '' + o);
          var a = o.length;
          if (a === 0) return 0;
          for (var l = !1; ; )
            switch (i) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return a;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return me(o).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return a * 2;
              case 'hex':
                return a >>> 1;
              case 'base64':
                return te(o).length;
              default:
                if (l) return me(o).length;
                (i = ('' + i).toLowerCase()), (l = !0);
            }
        }
        d.byteLength = ve;
        function P(o, i, a) {
          var l = !1;
          if (
            ((i === void 0 || i < 0) && (i = 0),
            i > this.length ||
              ((a === void 0 || a > this.length) && (a = this.length),
              a <= 0) ||
              ((a >>>= 0), (i >>>= 0), a <= i))
          )
            return '';
          for (o || (o = 'utf8'); ; )
            switch (o) {
              case 'hex':
                return pe(this, i, a);
              case 'utf8':
              case 'utf-8':
                return de(this, i, a);
              case 'ascii':
                return G(this, i, a);
              case 'latin1':
              case 'binary':
                return M(this, i, a);
              case 'base64':
                return v(this, i, a);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ue(this, i, a);
              default:
                if (l) throw new TypeError('Unknown encoding: ' + o);
                (o = (o + '').toLowerCase()), (l = !0);
            }
        }
        d.prototype._isBuffer = !0;
        function Se(o, i, a) {
          var l = o[i];
          (o[i] = o[a]), (o[a] = l);
        }
        (d.prototype.swap16 = function () {
          var i = this.length;
          if (i % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var a = 0; a < i; a += 2) Se(this, a, a + 1);
          return this;
        }),
          (d.prototype.swap32 = function () {
            var i = this.length;
            if (i % 4 !== 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var a = 0; a < i; a += 4)
              Se(this, a, a + 3), Se(this, a + 1, a + 2);
            return this;
          }),
          (d.prototype.swap64 = function () {
            var i = this.length;
            if (i % 8 !== 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var a = 0; a < i; a += 8)
              Se(this, a, a + 7),
                Se(this, a + 1, a + 6),
                Se(this, a + 2, a + 5),
                Se(this, a + 3, a + 4);
            return this;
          }),
          (d.prototype.toString = function () {
            var i = this.length | 0;
            return i === 0
              ? ''
              : arguments.length === 0
              ? de(this, 0, i)
              : P.apply(this, arguments);
          }),
          (d.prototype.equals = function (i) {
            if (!d.isBuffer(i))
              throw new TypeError('Argument must be a Buffer');
            return this === i ? !0 : d.compare(this, i) === 0;
          }),
          (d.prototype.inspect = function () {
            var i = '',
              a = I.h2;
            return (
              this.length > 0 &&
                ((i = this.toString('hex', 0, a).match(/.{2}/g).join(' ')),
                this.length > a && (i += ' ... ')),
              '<Buffer ' + i + '>'
            );
          }),
          (d.prototype.compare = function (i, a, l, p, g) {
            if (!d.isBuffer(i))
              throw new TypeError('Argument must be a Buffer');
            if (
              (a === void 0 && (a = 0),
              l === void 0 && (l = i ? i.length : 0),
              p === void 0 && (p = 0),
              g === void 0 && (g = this.length),
              a < 0 || l > i.length || p < 0 || g > this.length)
            )
              throw new RangeError('out of range index');
            if (p >= g && a >= l) return 0;
            if (p >= g) return -1;
            if (a >= l) return 1;
            if (((a >>>= 0), (l >>>= 0), (p >>>= 0), (g >>>= 0), this === i))
              return 0;
            for (
              var y = g - p,
                Y = l - a,
                W = Math.min(y, Y),
                he = this.slice(p, g),
                Ee = i.slice(a, l),
                le = 0;
              le < W;
              ++le
            )
              if (he[le] !== Ee[le]) {
                (y = he[le]), (Y = Ee[le]);
                break;
              }
            return y < Y ? -1 : Y < y ? 1 : 0;
          });
        function Ce(o, i, a, l, p) {
          if (o.length === 0) return -1;
          if (
            (typeof a == 'string'
              ? ((l = a), (a = 0))
              : a > 2147483647
              ? (a = 2147483647)
              : a < -2147483648 && (a = -2147483648),
            (a = +a),
            isNaN(a) && (a = p ? 0 : o.length - 1),
            a < 0 && (a = o.length + a),
            a >= o.length)
          ) {
            if (p) return -1;
            a = o.length - 1;
          } else if (a < 0)
            if (p) a = 0;
            else return -1;
          if ((typeof i == 'string' && (i = d.from(i, l)), d.isBuffer(i)))
            return i.length === 0 ? -1 : Ae(o, i, a, l, p);
          if (typeof i == 'number')
            return (
              (i = i & 255),
              d.TYPED_ARRAY_SUPPORT &&
              typeof Uint8Array.prototype.indexOf == 'function'
                ? p
                  ? Uint8Array.prototype.indexOf.call(o, i, a)
                  : Uint8Array.prototype.lastIndexOf.call(o, i, a)
                : Ae(o, [i], a, l, p)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function Ae(o, i, a, l, p) {
          var g = 1,
            y = o.length,
            Y = i.length;
          if (
            l !== void 0 &&
            ((l = String(l).toLowerCase()),
            l === 'ucs2' ||
              l === 'ucs-2' ||
              l === 'utf16le' ||
              l === 'utf-16le')
          ) {
            if (o.length < 2 || i.length < 2) return -1;
            (g = 2), (y /= 2), (Y /= 2), (a /= 2);
          }
          function W(Ge, je) {
            return g === 1 ? Ge[je] : Ge.readUInt16BE(je * g);
          }
          var he;
          if (p) {
            var Ee = -1;
            for (he = a; he < y; he++)
              if (W(o, he) === W(i, Ee === -1 ? 0 : he - Ee)) {
                if ((Ee === -1 && (Ee = he), he - Ee + 1 === Y)) return Ee * g;
              } else Ee !== -1 && (he -= he - Ee), (Ee = -1);
          } else
            for (a + Y > y && (a = y - Y), he = a; he >= 0; he--) {
              for (var le = !0, J = 0; J < Y; J++)
                if (W(o, he + J) !== W(i, J)) {
                  le = !1;
                  break;
                }
              if (le) return he;
            }
          return -1;
        }
        (d.prototype.includes = function (i, a, l) {
          return this.indexOf(i, a, l) !== -1;
        }),
          (d.prototype.indexOf = function (i, a, l) {
            return Ce(this, i, a, l, !0);
          }),
          (d.prototype.lastIndexOf = function (i, a, l) {
            return Ce(this, i, a, l, !1);
          });
        function Fe(o, i, a, l) {
          a = Number(a) || 0;
          var p = o.length - a;
          l ? ((l = Number(l)), l > p && (l = p)) : (l = p);
          var g = i.length;
          if (g % 2 !== 0) throw new TypeError('Invalid hex string');
          l > g / 2 && (l = g / 2);
          for (var y = 0; y < l; ++y) {
            var Y = parseInt(i.substr(y * 2, 2), 16);
            if (isNaN(Y)) return y;
            o[a + y] = Y;
          }
          return y;
        }
        function qe(o, i, a, l) {
          return x(me(i, o.length - a), o, a, l);
        }
        function Ke(o, i, a, l) {
          return x(Re(i), o, a, l);
        }
        function K(o, i, a, l) {
          return Ke(o, i, a, l);
        }
        function R(o, i, a, l) {
          return x(te(i), o, a, l);
        }
        function m(o, i, a, l) {
          return x(Q(i, o.length - a), o, a, l);
        }
        (d.prototype.write = function (i, a, l, p) {
          if (a === void 0) (p = 'utf8'), (l = this.length), (a = 0);
          else if (l === void 0 && typeof a == 'string')
            (p = a), (l = this.length), (a = 0);
          else if (isFinite(a))
            (a = a | 0),
              isFinite(l)
                ? ((l = l | 0), p === void 0 && (p = 'utf8'))
                : ((p = l), (l = void 0));
          else
            throw new Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported',
            );
          var g = this.length - a;
          if (
            ((l === void 0 || l > g) && (l = g),
            (i.length > 0 && (l < 0 || a < 0)) || a > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          p || (p = 'utf8');
          for (var y = !1; ; )
            switch (p) {
              case 'hex':
                return Fe(this, i, a, l);
              case 'utf8':
              case 'utf-8':
                return qe(this, i, a, l);
              case 'ascii':
                return Ke(this, i, a, l);
              case 'latin1':
              case 'binary':
                return K(this, i, a, l);
              case 'base64':
                return R(this, i, a, l);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return m(this, i, a, l);
              default:
                if (y) throw new TypeError('Unknown encoding: ' + p);
                (p = ('' + p).toLowerCase()), (y = !0);
            }
        }),
          (d.prototype.toJSON = function () {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function v(o, i, a) {
          return i === 0 && a === o.length
            ? e.fromByteArray(o)
            : e.fromByteArray(o.slice(i, a));
        }
        function de(o, i, a) {
          a = Math.min(o.length, a);
          for (var l = [], p = i; p < a; ) {
            var g = o[p],
              y = null,
              Y = g > 239 ? 4 : g > 223 ? 3 : g > 191 ? 2 : 1;
            if (p + Y <= a) {
              var W, he, Ee, le;
              switch (Y) {
                case 1:
                  g < 128 && (y = g);
                  break;
                case 2:
                  (W = o[p + 1]),
                    (W & 192) === 128 &&
                      ((le = ((g & 31) << 6) | (W & 63)), le > 127 && (y = le));
                  break;
                case 3:
                  (W = o[p + 1]),
                    (he = o[p + 2]),
                    (W & 192) === 128 &&
                      (he & 192) === 128 &&
                      ((le = ((g & 15) << 12) | ((W & 63) << 6) | (he & 63)),
                      le > 2047 && (le < 55296 || le > 57343) && (y = le));
                  break;
                case 4:
                  (W = o[p + 1]),
                    (he = o[p + 2]),
                    (Ee = o[p + 3]),
                    (W & 192) === 128 &&
                      (he & 192) === 128 &&
                      (Ee & 192) === 128 &&
                      ((le =
                        ((g & 15) << 18) |
                        ((W & 63) << 12) |
                        ((he & 63) << 6) |
                        (Ee & 63)),
                      le > 65535 && le < 1114112 && (y = le));
              }
            }
            y === null
              ? ((y = 65533), (Y = 1))
              : y > 65535 &&
                ((y -= 65536),
                l.push(((y >>> 10) & 1023) | 55296),
                (y = 56320 | (y & 1023))),
              l.push(y),
              (p += Y);
          }
          return U(l);
        }
        var $ = 4096;
        function U(o) {
          var i = o.length;
          if (i <= $) return String.fromCharCode.apply(String, o);
          for (var a = '', l = 0; l < i; )
            a += String.fromCharCode.apply(String, o.slice(l, (l += $)));
          return a;
        }
        function G(o, i, a) {
          var l = '';
          a = Math.min(o.length, a);
          for (var p = i; p < a; ++p) l += String.fromCharCode(o[p] & 127);
          return l;
        }
        function M(o, i, a) {
          var l = '';
          a = Math.min(o.length, a);
          for (var p = i; p < a; ++p) l += String.fromCharCode(o[p]);
          return l;
        }
        function pe(o, i, a) {
          var l = o.length;
          (!i || i < 0) && (i = 0), (!a || a < 0 || a > l) && (a = l);
          for (var p = '', g = i; g < a; ++g) p += _(o[g]);
          return p;
        }
        function ue(o, i, a) {
          for (var l = o.slice(i, a), p = '', g = 0; g < l.length; g += 2)
            p += String.fromCharCode(l[g] + l[g + 1] * 256);
          return p;
        }
        d.prototype.slice = function (i, a) {
          var l = this.length;
          (i = ~~i),
            (a = a === void 0 ? l : ~~a),
            i < 0 ? ((i += l), i < 0 && (i = 0)) : i > l && (i = l),
            a < 0 ? ((a += l), a < 0 && (a = 0)) : a > l && (a = l),
            a < i && (a = i);
          var p;
          if (d.TYPED_ARRAY_SUPPORT)
            (p = this.subarray(i, a)), (p.__proto__ = d.prototype);
          else {
            var g = a - i;
            p = new d(g, void 0);
            for (var y = 0; y < g; ++y) p[y] = this[y + i];
          }
          return p;
        };
        function re(o, i, a) {
          if (o % 1 !== 0 || o < 0) throw new RangeError('offset is not uint');
          if (o + i > a)
            throw new RangeError('Trying to access beyond buffer length');
        }
        (d.prototype.readUIntLE = function (i, a, l) {
          (i = i | 0), (a = a | 0), l || re(i, a, this.length);
          for (var p = this[i], g = 1, y = 0; ++y < a && (g *= 256); )
            p += this[i + y] * g;
          return p;
        }),
          (d.prototype.readUIntBE = function (i, a, l) {
            (i = i | 0), (a = a | 0), l || re(i, a, this.length);
            for (var p = this[i + --a], g = 1; a > 0 && (g *= 256); )
              p += this[i + --a] * g;
            return p;
          }),
          (d.prototype.readUInt8 = function (i, a) {
            return a || re(i, 1, this.length), this[i];
          }),
          (d.prototype.readUInt16LE = function (i, a) {
            return a || re(i, 2, this.length), this[i] | (this[i + 1] << 8);
          }),
          (d.prototype.readUInt16BE = function (i, a) {
            return a || re(i, 2, this.length), (this[i] << 8) | this[i + 1];
          }),
          (d.prototype.readUInt32LE = function (i, a) {
            return (
              a || re(i, 4, this.length),
              (this[i] | (this[i + 1] << 8) | (this[i + 2] << 16)) +
                this[i + 3] * 16777216
            );
          }),
          (d.prototype.readUInt32BE = function (i, a) {
            return (
              a || re(i, 4, this.length),
              this[i] * 16777216 +
                ((this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3])
            );
          }),
          (d.prototype.readIntLE = function (i, a, l) {
            (i = i | 0), (a = a | 0), l || re(i, a, this.length);
            for (var p = this[i], g = 1, y = 0; ++y < a && (g *= 256); )
              p += this[i + y] * g;
            return (g *= 128), p >= g && (p -= Math.pow(2, 8 * a)), p;
          }),
          (d.prototype.readIntBE = function (i, a, l) {
            (i = i | 0), (a = a | 0), l || re(i, a, this.length);
            for (var p = a, g = 1, y = this[i + --p]; p > 0 && (g *= 256); )
              y += this[i + --p] * g;
            return (g *= 128), y >= g && (y -= Math.pow(2, 8 * a)), y;
          }),
          (d.prototype.readInt8 = function (i, a) {
            return (
              a || re(i, 1, this.length),
              this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i]
            );
          }),
          (d.prototype.readInt16LE = function (i, a) {
            a || re(i, 2, this.length);
            var l = this[i] | (this[i + 1] << 8);
            return l & 32768 ? l | 4294901760 : l;
          }),
          (d.prototype.readInt16BE = function (i, a) {
            a || re(i, 2, this.length);
            var l = this[i + 1] | (this[i] << 8);
            return l & 32768 ? l | 4294901760 : l;
          }),
          (d.prototype.readInt32LE = function (i, a) {
            return (
              a || re(i, 4, this.length),
              this[i] |
                (this[i + 1] << 8) |
                (this[i + 2] << 16) |
                (this[i + 3] << 24)
            );
          }),
          (d.prototype.readInt32BE = function (i, a) {
            return (
              a || re(i, 4, this.length),
              (this[i] << 24) |
                (this[i + 1] << 16) |
                (this[i + 2] << 8) |
                this[i + 3]
            );
          }),
          (d.prototype.readFloatLE = function (i, a) {
            return a || re(i, 4, this.length), Ie.read(this, i, !0, 23, 4);
          }),
          (d.prototype.readFloatBE = function (i, a) {
            return a || re(i, 4, this.length), Ie.read(this, i, !1, 23, 4);
          }),
          (d.prototype.readDoubleLE = function (i, a) {
            return a || re(i, 8, this.length), Ie.read(this, i, !0, 52, 8);
          }),
          (d.prototype.readDoubleBE = function (i, a) {
            return a || re(i, 8, this.length), Ie.read(this, i, !1, 52, 8);
          });
        function N(o, i, a, l, p, g) {
          if (!d.isBuffer(o))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (i > p || i < g)
            throw new RangeError('"value" argument is out of bounds');
          if (a + l > o.length) throw new RangeError('Index out of range');
        }
        (d.prototype.writeUIntLE = function (i, a, l, p) {
          if (((i = +i), (a = a | 0), (l = l | 0), !p)) {
            var g = Math.pow(2, 8 * l) - 1;
            N(this, i, a, l, g, 0);
          }
          var y = 1,
            Y = 0;
          for (this[a] = i & 255; ++Y < l && (y *= 256); )
            this[a + Y] = (i / y) & 255;
          return a + l;
        }),
          (d.prototype.writeUIntBE = function (i, a, l, p) {
            if (((i = +i), (a = a | 0), (l = l | 0), !p)) {
              var g = Math.pow(2, 8 * l) - 1;
              N(this, i, a, l, g, 0);
            }
            var y = l - 1,
              Y = 1;
            for (this[a + y] = i & 255; --y >= 0 && (Y *= 256); )
              this[a + y] = (i / Y) & 255;
            return a + l;
          }),
          (d.prototype.writeUInt8 = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 1, 255, 0),
              d.TYPED_ARRAY_SUPPORT || (i = Math.floor(i)),
              (this[a] = i & 255),
              a + 1
            );
          });
        function se(o, i, a, l) {
          i < 0 && (i = 65535 + i + 1);
          for (var p = 0, g = Math.min(o.length - a, 2); p < g; ++p)
            o[a + p] =
              (i & (255 << (8 * (l ? p : 1 - p)))) >>> ((l ? p : 1 - p) * 8);
        }
        (d.prototype.writeUInt16LE = function (i, a, l) {
          return (
            (i = +i),
            (a = a | 0),
            l || N(this, i, a, 2, 65535, 0),
            d.TYPED_ARRAY_SUPPORT
              ? ((this[a] = i & 255), (this[a + 1] = i >>> 8))
              : se(this, i, a, !0),
            a + 2
          );
        }),
          (d.prototype.writeUInt16BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 2, 65535, 0),
              d.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 8), (this[a + 1] = i & 255))
                : se(this, i, a, !1),
              a + 2
            );
          });
        function Ne(o, i, a, l) {
          i < 0 && (i = 4294967295 + i + 1);
          for (var p = 0, g = Math.min(o.length - a, 4); p < g; ++p)
            o[a + p] = (i >>> ((l ? p : 3 - p) * 8)) & 255;
        }
        (d.prototype.writeUInt32LE = function (i, a, l) {
          return (
            (i = +i),
            (a = a | 0),
            l || N(this, i, a, 4, 4294967295, 0),
            d.TYPED_ARRAY_SUPPORT
              ? ((this[a + 3] = i >>> 24),
                (this[a + 2] = i >>> 16),
                (this[a + 1] = i >>> 8),
                (this[a] = i & 255))
              : Ne(this, i, a, !0),
            a + 4
          );
        }),
          (d.prototype.writeUInt32BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 4, 4294967295, 0),
              d.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 24),
                  (this[a + 1] = i >>> 16),
                  (this[a + 2] = i >>> 8),
                  (this[a + 3] = i & 255))
                : Ne(this, i, a, !1),
              a + 4
            );
          }),
          (d.prototype.writeIntLE = function (i, a, l, p) {
            if (((i = +i), (a = a | 0), !p)) {
              var g = Math.pow(2, 8 * l - 1);
              N(this, i, a, l, g - 1, -g);
            }
            var y = 0,
              Y = 1,
              W = 0;
            for (this[a] = i & 255; ++y < l && (Y *= 256); )
              i < 0 && W === 0 && this[a + y - 1] !== 0 && (W = 1),
                (this[a + y] = (((i / Y) >> 0) - W) & 255);
            return a + l;
          }),
          (d.prototype.writeIntBE = function (i, a, l, p) {
            if (((i = +i), (a = a | 0), !p)) {
              var g = Math.pow(2, 8 * l - 1);
              N(this, i, a, l, g - 1, -g);
            }
            var y = l - 1,
              Y = 1,
              W = 0;
            for (this[a + y] = i & 255; --y >= 0 && (Y *= 256); )
              i < 0 && W === 0 && this[a + y + 1] !== 0 && (W = 1),
                (this[a + y] = (((i / Y) >> 0) - W) & 255);
            return a + l;
          }),
          (d.prototype.writeInt8 = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 1, 127, -128),
              d.TYPED_ARRAY_SUPPORT || (i = Math.floor(i)),
              i < 0 && (i = 255 + i + 1),
              (this[a] = i & 255),
              a + 1
            );
          }),
          (d.prototype.writeInt16LE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 2, 32767, -32768),
              d.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i & 255), (this[a + 1] = i >>> 8))
                : se(this, i, a, !0),
              a + 2
            );
          }),
          (d.prototype.writeInt16BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 2, 32767, -32768),
              d.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 8), (this[a + 1] = i & 255))
                : se(this, i, a, !1),
              a + 2
            );
          }),
          (d.prototype.writeInt32LE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 4, 2147483647, -2147483648),
              d.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i & 255),
                  (this[a + 1] = i >>> 8),
                  (this[a + 2] = i >>> 16),
                  (this[a + 3] = i >>> 24))
                : Ne(this, i, a, !0),
              a + 4
            );
          }),
          (d.prototype.writeInt32BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || N(this, i, a, 4, 2147483647, -2147483648),
              i < 0 && (i = 4294967295 + i + 1),
              d.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 24),
                  (this[a + 1] = i >>> 16),
                  (this[a + 2] = i >>> 8),
                  (this[a + 3] = i & 255))
                : Ne(this, i, a, !1),
              a + 4
            );
          });
        function b(o, i, a, l, p, g) {
          if (a + l > o.length) throw new RangeError('Index out of range');
          if (a < 0) throw new RangeError('Index out of range');
        }
        function S(o, i, a, l, p) {
          return (
            p || b(o, i, a, 4, 34028234663852886e22, -34028234663852886e22),
            Ie.write(o, i, a, l, 23, 4),
            a + 4
          );
        }
        (d.prototype.writeFloatLE = function (i, a, l) {
          return S(this, i, a, !0, l);
        }),
          (d.prototype.writeFloatBE = function (i, a, l) {
            return S(this, i, a, !1, l);
          });
        function L(o, i, a, l, p) {
          return (
            p || b(o, i, a, 8, 17976931348623157e292, -17976931348623157e292),
            Ie.write(o, i, a, l, 52, 8),
            a + 8
          );
        }
        (d.prototype.writeDoubleLE = function (i, a, l) {
          return L(this, i, a, !0, l);
        }),
          (d.prototype.writeDoubleBE = function (i, a, l) {
            return L(this, i, a, !1, l);
          }),
          (d.prototype.copy = function (i, a, l, p) {
            if (
              (l || (l = 0),
              !p && p !== 0 && (p = this.length),
              a >= i.length && (a = i.length),
              a || (a = 0),
              p > 0 && p < l && (p = l),
              p === l || i.length === 0 || this.length === 0)
            )
              return 0;
            if (a < 0) throw new RangeError('targetStart out of bounds');
            if (l < 0 || l >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (p < 0) throw new RangeError('sourceEnd out of bounds');
            p > this.length && (p = this.length),
              i.length - a < p - l && (p = i.length - a + l);
            var g = p - l,
              y;
            if (this === i && l < a && a < p)
              for (y = g - 1; y >= 0; --y) i[y + a] = this[y + l];
            else if (g < 1e3 || !d.TYPED_ARRAY_SUPPORT)
              for (y = 0; y < g; ++y) i[y + a] = this[y + l];
            else Uint8Array.prototype.set.call(i, this.subarray(l, l + g), a);
            return g;
          }),
          (d.prototype.fill = function (i, a, l, p) {
            if (typeof i == 'string') {
              if (
                (typeof a == 'string'
                  ? ((p = a), (a = 0), (l = this.length))
                  : typeof l == 'string' && ((p = l), (l = this.length)),
                i.length === 1)
              ) {
                var g = i.charCodeAt(0);
                g < 256 && (i = g);
              }
              if (p !== void 0 && typeof p != 'string')
                throw new TypeError('encoding must be a string');
              if (typeof p == 'string' && !d.isEncoding(p))
                throw new TypeError('Unknown encoding: ' + p);
            } else typeof i == 'number' && (i = i & 255);
            if (a < 0 || this.length < a || this.length < l)
              throw new RangeError('Out of range index');
            if (l <= a) return this;
            (a = a >>> 0),
              (l = l === void 0 ? this.length : l >>> 0),
              i || (i = 0);
            var y;
            if (typeof i == 'number') for (y = a; y < l; ++y) this[y] = i;
            else {
              var Y = d.isBuffer(i) ? i : me(new d(i, p).toString()),
                W = Y.length;
              for (y = 0; y < l - a; ++y) this[y + a] = Y[y % W];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function z(o) {
          if (((o = ae(o).replace(D, '')), o.length < 2)) return '';
          for (; o.length % 4 !== 0; ) o = o + '=';
          return o;
        }
        function ae(o) {
          return o.trim ? o.trim() : o.replace(/^\s+|\s+$/g, '');
        }
        function _(o) {
          return o < 16 ? '0' + o.toString(16) : o.toString(16);
        }
        function me(o, i) {
          i = i || 1 / 0;
          for (var a, l = o.length, p = null, g = [], y = 0; y < l; ++y) {
            if (((a = o.charCodeAt(y)), a > 55295 && a < 57344)) {
              if (!p) {
                if (a > 56319) {
                  (i -= 3) > -1 && g.push(239, 191, 189);
                  continue;
                } else if (y + 1 === l) {
                  (i -= 3) > -1 && g.push(239, 191, 189);
                  continue;
                }
                p = a;
                continue;
              }
              if (a < 56320) {
                (i -= 3) > -1 && g.push(239, 191, 189), (p = a);
                continue;
              }
              a = (((p - 55296) << 10) | (a - 56320)) + 65536;
            } else p && (i -= 3) > -1 && g.push(239, 191, 189);
            if (((p = null), a < 128)) {
              if ((i -= 1) < 0) break;
              g.push(a);
            } else if (a < 2048) {
              if ((i -= 2) < 0) break;
              g.push((a >> 6) | 192, (a & 63) | 128);
            } else if (a < 65536) {
              if ((i -= 3) < 0) break;
              g.push((a >> 12) | 224, ((a >> 6) & 63) | 128, (a & 63) | 128);
            } else if (a < 1114112) {
              if ((i -= 4) < 0) break;
              g.push(
                (a >> 18) | 240,
                ((a >> 12) & 63) | 128,
                ((a >> 6) & 63) | 128,
                (a & 63) | 128,
              );
            } else throw new Error('Invalid code point');
          }
          return g;
        }
        function Re(o) {
          for (var i = [], a = 0; a < o.length; ++a)
            i.push(o.charCodeAt(a) & 255);
          return i;
        }
        function Q(o, i) {
          for (var a, l, p, g = [], y = 0; y < o.length && !((i -= 2) < 0); ++y)
            (a = o.charCodeAt(y)),
              (l = a >> 8),
              (p = a % 256),
              g.push(p),
              g.push(l);
          return g;
        }
        function te(o) {
          return e.toByteArray(z(o));
        }
        function x(o, i, a, l) {
          for (var p = 0; p < l && !(p + a >= i.length || p >= o.length); ++p)
            i[p + a] = o[p];
          return p;
        }
        function Oe(o) {
          return o !== o;
        }
      },
      87300: function (Le) {
        var I = {}.toString;
        Le.exports =
          Array.isArray ||
          function (H) {
            return I.call(H) == '[object Array]';
          };
      },
      80645: function (Le, I) {
        (I.read = function (H, u, e, Ie, O) {
          var X,
            C,
            h = O * 8 - Ie - 1,
            d = (1 << h) - 1,
            T = d >> 1,
            E = -7,
            j = e ? O - 1 : 0,
            r = e ? -1 : 1,
            w = H[u + j];
          for (
            j += r, X = w & ((1 << -E) - 1), w >>= -E, E += h;
            E > 0;
            X = X * 256 + H[u + j], j += r, E -= 8
          );
          for (
            C = X & ((1 << -E) - 1), X >>= -E, E += Ie;
            E > 0;
            C = C * 256 + H[u + j], j += r, E -= 8
          );
          if (X === 0) X = 1 - T;
          else {
            if (X === d) return C ? NaN : (w ? -1 : 1) * (1 / 0);
            (C = C + Math.pow(2, Ie)), (X = X - T);
          }
          return (w ? -1 : 1) * C * Math.pow(2, X - Ie);
        }),
          (I.write = function (H, u, e, Ie, O, X) {
            var C,
              h,
              d,
              T = X * 8 - O - 1,
              E = (1 << T) - 1,
              j = E >> 1,
              r = O === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              w = Ie ? 0 : X - 1,
              ce = Ie ? 1 : -1,
              q = u < 0 || (u === 0 && 1 / u < 0) ? 1 : 0;
            for (
              u = Math.abs(u),
                isNaN(u) || u === 1 / 0
                  ? ((h = isNaN(u) ? 1 : 0), (C = E))
                  : ((C = Math.floor(Math.log(u) / Math.LN2)),
                    u * (d = Math.pow(2, -C)) < 1 && (C--, (d *= 2)),
                    C + j >= 1 ? (u += r / d) : (u += r * Math.pow(2, 1 - j)),
                    u * d >= 2 && (C++, (d /= 2)),
                    C + j >= E
                      ? ((h = 0), (C = E))
                      : C + j >= 1
                      ? ((h = (u * d - 1) * Math.pow(2, O)), (C = C + j))
                      : ((h = u * Math.pow(2, j - 1) * Math.pow(2, O)),
                        (C = 0)));
              O >= 8;
              H[e + w] = h & 255, w += ce, h /= 256, O -= 8
            );
            for (
              C = (C << O) | h, T += O;
              T > 0;
              H[e + w] = C & 255, w += ce, C /= 256, T -= 8
            );
            H[e + w - ce] |= q * 128;
          });
      },
      18589: function (Le, I) {
        'use strict';
        var H;
        (H = !0), (H = void 0);
        var u = `
`,
          e = '\r',
          Ie = (function () {
            function O(X) {
              this.string = X;
              for (var C = [0], h = 0; h < X.length; )
                switch (X[h]) {
                  case u:
                    (h += u.length), C.push(h);
                    break;
                  case e:
                    (h += e.length), X[h] === u && (h += u.length), C.push(h);
                    break;
                  default:
                    h++;
                    break;
                }
              this.offsets = C;
            }
            return (
              (O.prototype.locationForIndex = function (X) {
                if (X < 0 || X > this.string.length) return null;
                for (var C = 0, h = this.offsets; h[C + 1] <= X; ) C++;
                var d = X - h[C];
                return { line: C, column: d };
              }),
              (O.prototype.indexForLocation = function (X) {
                var C = X.line,
                  h = X.column;
                return C < 0 ||
                  C >= this.offsets.length ||
                  h < 0 ||
                  h > this.lengthOfLine(C)
                  ? null
                  : this.offsets[C] + h;
              }),
              (O.prototype.lengthOfLine = function (X) {
                var C = this.offsets[X],
                  h =
                    X === this.offsets.length - 1
                      ? this.string.length
                      : this.offsets[X + 1];
                return h - C;
              }),
              O
            );
          })();
        (H = Ie), (H = Ie);
      },
      61477: function (Le, I, H) {
        'use strict';
        var u =
          (this && this.__spreadArrays) ||
          function () {
            for (var d = 0, T = 0, E = arguments.length; T < E; T++)
              d += arguments[T].length;
            for (var j = Array(d), r = 0, T = 0; T < E; T++)
              for (
                var w = arguments[T], ce = 0, q = w.length;
                ce < q;
                ce++, r++
              )
                j[r] = w[ce];
            return j;
          };
        Object.defineProperty(I, '__esModule', { value: !0 }),
          (I.Checker = I.createCheckers = void 0);
        var e = H(22746),
          Ie = H(67180),
          O = H(22746);
        Object.defineProperty(I, 'TArray', {
          enumerable: !0,
          get: function () {
            return O.TArray;
          },
        }),
          Object.defineProperty(I, 'TEnumType', {
            enumerable: !0,
            get: function () {
              return O.TEnumType;
            },
          }),
          Object.defineProperty(I, 'TEnumLiteral', {
            enumerable: !0,
            get: function () {
              return O.TEnumLiteral;
            },
          }),
          Object.defineProperty(I, 'TFunc', {
            enumerable: !0,
            get: function () {
              return O.TFunc;
            },
          }),
          Object.defineProperty(I, 'TIface', {
            enumerable: !0,
            get: function () {
              return O.TIface;
            },
          }),
          Object.defineProperty(I, 'TLiteral', {
            enumerable: !0,
            get: function () {
              return O.TLiteral;
            },
          }),
          Object.defineProperty(I, 'TName', {
            enumerable: !0,
            get: function () {
              return O.TName;
            },
          }),
          Object.defineProperty(I, 'TOptional', {
            enumerable: !0,
            get: function () {
              return O.TOptional;
            },
          }),
          Object.defineProperty(I, 'TParam', {
            enumerable: !0,
            get: function () {
              return O.TParam;
            },
          }),
          Object.defineProperty(I, 'TParamList', {
            enumerable: !0,
            get: function () {
              return O.TParamList;
            },
          }),
          Object.defineProperty(I, 'TProp', {
            enumerable: !0,
            get: function () {
              return O.TProp;
            },
          }),
          Object.defineProperty(I, 'TTuple', {
            enumerable: !0,
            get: function () {
              return O.TTuple;
            },
          }),
          Object.defineProperty(I, 'TType', {
            enumerable: !0,
            get: function () {
              return O.TType;
            },
          }),
          Object.defineProperty(I, 'TUnion', {
            enumerable: !0,
            get: function () {
              return O.TUnion;
            },
          }),
          Object.defineProperty(I, 'TIntersection', {
            enumerable: !0,
            get: function () {
              return O.TIntersection;
            },
          }),
          Object.defineProperty(I, 'array', {
            enumerable: !0,
            get: function () {
              return O.array;
            },
          }),
          Object.defineProperty(I, 'enumlit', {
            enumerable: !0,
            get: function () {
              return O.enumlit;
            },
          }),
          Object.defineProperty(I, 'enumtype', {
            enumerable: !0,
            get: function () {
              return O.enumtype;
            },
          }),
          Object.defineProperty(I, 'func', {
            enumerable: !0,
            get: function () {
              return O.func;
            },
          }),
          Object.defineProperty(I, 'iface', {
            enumerable: !0,
            get: function () {
              return O.iface;
            },
          }),
          Object.defineProperty(I, 'lit', {
            enumerable: !0,
            get: function () {
              return O.lit;
            },
          }),
          Object.defineProperty(I, 'name', {
            enumerable: !0,
            get: function () {
              return O.name;
            },
          }),
          Object.defineProperty(I, 'opt', {
            enumerable: !0,
            get: function () {
              return O.opt;
            },
          }),
          Object.defineProperty(I, 'param', {
            enumerable: !0,
            get: function () {
              return O.param;
            },
          }),
          Object.defineProperty(I, 'tuple', {
            enumerable: !0,
            get: function () {
              return O.tuple;
            },
          }),
          Object.defineProperty(I, 'union', {
            enumerable: !0,
            get: function () {
              return O.union;
            },
          }),
          Object.defineProperty(I, 'intersection', {
            enumerable: !0,
            get: function () {
              return O.intersection;
            },
          }),
          Object.defineProperty(I, 'BasicType', {
            enumerable: !0,
            get: function () {
              return O.BasicType;
            },
          });
        var X = H(67180);
        Object.defineProperty(I, 'VError', {
          enumerable: !0,
          get: function () {
            return X.VError;
          },
        });
        function C() {
          for (var d = [], T = 0; T < arguments.length; T++)
            d[T] = arguments[T];
          for (
            var E = Object.assign.apply(Object, u([{}, e.basicTypes], d)),
              j = {},
              r = 0,
              w = d;
            r < w.length;
            r++
          )
            for (
              var ce = w[r], q = 0, oe = Object.keys(ce);
              q < oe.length;
              q++
            ) {
              var ie = oe[q];
              j[ie] = new h(E, ce[ie]);
            }
          return j;
        }
        I.createCheckers = C;
        var h = (function () {
          function d(T, E, j) {
            if (
              (j === void 0 && (j = 'value'),
              (this.suite = T),
              (this.ttype = E),
              (this._path = j),
              (this.props = new Map()),
              E instanceof e.TIface)
            )
              for (var r = 0, w = E.props; r < w.length; r++) {
                var ce = w[r];
                this.props.set(ce.name, ce.ttype);
              }
            (this.checkerPlain = this.ttype.getChecker(T, !1)),
              (this.checkerStrict = this.ttype.getChecker(T, !0));
          }
          return (
            (d.prototype.setReportedPath = function (T) {
              this._path = T;
            }),
            (d.prototype.check = function (T) {
              return this._doCheck(this.checkerPlain, T);
            }),
            (d.prototype.test = function (T) {
              return this.checkerPlain(T, new Ie.NoopContext());
            }),
            (d.prototype.validate = function (T) {
              return this._doValidate(this.checkerPlain, T);
            }),
            (d.prototype.strictCheck = function (T) {
              return this._doCheck(this.checkerStrict, T);
            }),
            (d.prototype.strictTest = function (T) {
              return this.checkerStrict(T, new Ie.NoopContext());
            }),
            (d.prototype.strictValidate = function (T) {
              return this._doValidate(this.checkerStrict, T);
            }),
            (d.prototype.getProp = function (T) {
              var E = this.props.get(T);
              if (!E) throw new Error('Type has no property ' + T);
              return new d(this.suite, E, this._path + '.' + T);
            }),
            (d.prototype.methodArgs = function (T) {
              var E = this._getMethod(T);
              return new d(this.suite, E.paramList);
            }),
            (d.prototype.methodResult = function (T) {
              var E = this._getMethod(T);
              return new d(this.suite, E.result);
            }),
            (d.prototype.getArgs = function () {
              if (!(this.ttype instanceof e.TFunc))
                throw new Error('getArgs() applied to non-function');
              return new d(this.suite, this.ttype.paramList);
            }),
            (d.prototype.getResult = function () {
              if (!(this.ttype instanceof e.TFunc))
                throw new Error('getResult() applied to non-function');
              return new d(this.suite, this.ttype.result);
            }),
            (d.prototype.getType = function () {
              return this.ttype;
            }),
            (d.prototype._doCheck = function (T, E) {
              var j = new Ie.NoopContext();
              if (!T(E, j)) {
                var r = new Ie.DetailContext();
                throw (T(E, r), r.getError(this._path));
              }
            }),
            (d.prototype._doValidate = function (T, E) {
              var j = new Ie.NoopContext();
              if (T(E, j)) return null;
              var r = new Ie.DetailContext();
              return T(E, r), r.getErrorDetail(this._path);
            }),
            (d.prototype._getMethod = function (T) {
              var E = this.props.get(T);
              if (!E) throw new Error('Type has no property ' + T);
              if (!(E instanceof e.TFunc))
                throw new Error('Property ' + T + ' is not a method');
              return E;
            }),
            d
          );
        })();
        I.Checker = h;
      },
      22746: function (Le, I, H) {
        'use strict';
        var u = H(48764).lW,
          e =
            (this && this.__extends) ||
            (function () {
              var b = function (S, L) {
                return (
                  (b =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (D, z) {
                        D.__proto__ = z;
                      }) ||
                    function (D, z) {
                      for (var ae in z) z.hasOwnProperty(ae) && (D[ae] = z[ae]);
                    }),
                  b(S, L)
                );
              };
              return function (S, L) {
                b(S, L);
                function D() {
                  this.constructor = S;
                }
                S.prototype =
                  L === null
                    ? Object.create(L)
                    : ((D.prototype = L.prototype), new D());
              };
            })();
        Object.defineProperty(I, '__esModule', { value: !0 }),
          (I.basicTypes =
            I.BasicType =
            I.TParamList =
            I.TParam =
            I.param =
            I.TFunc =
            I.func =
            I.TProp =
            I.TOptional =
            I.opt =
            I.TIface =
            I.iface =
            I.TEnumLiteral =
            I.enumlit =
            I.TEnumType =
            I.enumtype =
            I.TIntersection =
            I.intersection =
            I.TUnion =
            I.union =
            I.TTuple =
            I.tuple =
            I.TArray =
            I.array =
            I.TLiteral =
            I.lit =
            I.TName =
            I.name =
            I.TType =
              void 0);
        var Ie = H(67180),
          O = (function () {
            function b() {}
            return b;
          })();
        I.TType = O;
        function X(b) {
          return typeof b == 'string' ? h(b) : b;
        }
        function C(b, S) {
          var L = b[S];
          if (!L) throw new Error('Unknown type ' + S);
          return L;
        }
        function h(b) {
          return new d(b);
        }
        I.name = h;
        var d = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (D.name = L), (D._failMsg = 'is not a ' + L), D;
          }
          return (
            (S.prototype.getChecker = function (L, D, z) {
              var ae = this,
                _ = C(L, this.name),
                me = _.getChecker(L, D, z);
              return _ instanceof M || _ instanceof S
                ? me
                : function (Re, Q) {
                    return me(Re, Q) ? !0 : Q.fail(null, ae._failMsg, 0);
                  };
            }),
            S
          );
        })(O);
        I.TName = d;
        function T(b) {
          return new E(b);
        }
        I.lit = T;
        var E = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (
              (D.value = L),
              (D.name = JSON.stringify(L)),
              (D._failMsg = 'is not ' + D.name),
              D
            );
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this;
              return function (ae, _) {
                return ae === z.value ? !0 : _.fail(null, z._failMsg, -1);
              };
            }),
            S
          );
        })(O);
        I.TLiteral = E;
        function j(b) {
          return new r(X(b));
        }
        I.array = j;
        var r = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (D.ttype = L), D;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this.ttype.getChecker(L, D);
              return function (ae, _) {
                if (!Array.isArray(ae))
                  return _.fail(null, 'is not an array', 0);
                for (var me = 0; me < ae.length; me++) {
                  var Re = z(ae[me], _);
                  if (!Re) return _.fail(me, null, 1);
                }
                return !0;
              };
            }),
            S
          );
        })(O);
        I.TArray = r;
        function w() {
          for (var b = [], S = 0; S < arguments.length; S++)
            b[S] = arguments[S];
          return new ce(
            b.map(function (L) {
              return X(L);
            }),
          );
        }
        I.tuple = w;
        var ce = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (D.ttypes = L), D;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this.ttypes.map(function (_) {
                  return _.getChecker(L, D);
                }),
                ae = function (_, me) {
                  if (!Array.isArray(_))
                    return me.fail(null, 'is not an array', 0);
                  for (var Re = 0; Re < z.length; Re++) {
                    var Q = z[Re](_[Re], me);
                    if (!Q) return me.fail(Re, null, 1);
                  }
                  return !0;
                };
              return D
                ? function (_, me) {
                    return ae(_, me)
                      ? _.length <= z.length
                        ? !0
                        : me.fail(z.length, 'is extraneous', 2)
                      : !1;
                  }
                : ae;
            }),
            S
          );
        })(O);
        I.TTuple = ce;
        function q() {
          for (var b = [], S = 0; S < arguments.length; S++)
            b[S] = arguments[S];
          return new oe(
            b.map(function (L) {
              return X(L);
            }),
          );
        }
        I.union = q;
        var oe = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            D.ttypes = L;
            var z = L.map(function (_) {
                return _ instanceof d || _ instanceof E ? _.name : null;
              }).filter(function (_) {
                return _;
              }),
              ae = L.length - z.length;
            return (
              z.length
                ? (ae > 0 && z.push(ae + ' more'),
                  (D._failMsg = 'is none of ' + z.join(', ')))
                : (D._failMsg = 'is none of ' + ae + ' types'),
              D
            );
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this,
                ae = this.ttypes.map(function (_) {
                  return _.getChecker(L, D);
                });
              return function (_, me) {
                for (var Re = me.unionResolver(), Q = 0; Q < ae.length; Q++) {
                  var te = ae[Q](_, Re.createContext());
                  if (te) return !0;
                }
                return me.resolveUnion(Re), me.fail(null, z._failMsg, 0);
              };
            }),
            S
          );
        })(O);
        I.TUnion = oe;
        function ie() {
          for (var b = [], S = 0; S < arguments.length; S++)
            b[S] = arguments[S];
          return new ye(
            b.map(function (L) {
              return X(L);
            }),
          );
        }
        I.intersection = ie;
        var ye = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (D.ttypes = L), D;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = new Set(),
                ae = this.ttypes.map(function (_) {
                  return _.getChecker(L, D, z);
                });
              return function (_, me) {
                var Re = ae.every(function (Q) {
                  return Q(_, me);
                });
                return Re ? !0 : me.fail(null, null, 0);
              };
            }),
            S
          );
        })(O);
        I.TIntersection = ye;
        function ve(b) {
          return new P(b);
        }
        I.enumtype = ve;
        var P = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (
              (D.members = L),
              (D.validValues = new Set()),
              (D._failMsg = 'is not a valid enum value'),
              (D.validValues = new Set(
                Object.keys(L).map(function (z) {
                  return L[z];
                }),
              )),
              D
            );
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this;
              return function (ae, _) {
                return z.validValues.has(ae) ? !0 : _.fail(null, z._failMsg, 0);
              };
            }),
            S
          );
        })(O);
        I.TEnumType = P;
        function Se(b, S) {
          return new Ce(b, S);
        }
        I.enumlit = Se;
        var Ce = (function (b) {
          e(S, b);
          function S(L, D) {
            var z = b.call(this) || this;
            return (
              (z.enumName = L),
              (z.prop = D),
              (z._failMsg = 'is not ' + L + '.' + D),
              z
            );
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this,
                ae = C(L, this.enumName);
              if (!(ae instanceof P))
                throw new Error(
                  'Type ' +
                    this.enumName +
                    ' used in enumlit is not an enum type',
                );
              var _ = ae.members[this.prop];
              if (!ae.members.hasOwnProperty(this.prop))
                throw new Error(
                  'Unknown value ' +
                    this.enumName +
                    '.' +
                    this.prop +
                    ' used in enumlit',
                );
              return function (me, Re) {
                return me === _ ? !0 : Re.fail(null, z._failMsg, -1);
              };
            }),
            S
          );
        })(O);
        I.TEnumLiteral = Ce;
        function Ae(b) {
          return Object.keys(b).map(function (S) {
            return Fe(S, b[S]);
          });
        }
        function Fe(b, S) {
          return S instanceof R ? new m(b, S.ttype, !0) : new m(b, X(S), !1);
        }
        function qe(b, S) {
          return new Ke(b, Ae(S));
        }
        I.iface = qe;
        var Ke = (function (b) {
          e(S, b);
          function S(L, D) {
            var z = b.call(this) || this;
            return (
              (z.bases = L),
              (z.props = D),
              (z.propSet = new Set(
                D.map(function (ae) {
                  return ae.name;
                }),
              )),
              z
            );
          }
          return (
            (S.prototype.getChecker = function (L, D, z) {
              var ae = this,
                _ = this.bases.map(function (Oe) {
                  return C(L, Oe).getChecker(L, D);
                }),
                me = this.props.map(function (Oe) {
                  return Oe.ttype.getChecker(L, D);
                }),
                Re = new Ie.NoopContext(),
                Q = this.props.map(function (Oe, o) {
                  return !Oe.isOpt && !me[o](void 0, Re);
                }),
                te = function (Oe, o) {
                  if (typeof Oe != 'object' || Oe === null)
                    return o.fail(null, 'is not an object', 0);
                  for (var i = 0; i < _.length; i++)
                    if (!_[i](Oe, o)) return !1;
                  for (var i = 0; i < me.length; i++) {
                    var a = ae.props[i].name,
                      l = Oe[a];
                    if (l === void 0) {
                      if (Q[i]) return o.fail(a, 'is missing', 1);
                    } else {
                      var p = me[i](l, o);
                      if (!p) return o.fail(a, null, 1);
                    }
                  }
                  return !0;
                };
              if (!D) return te;
              var x = this.propSet;
              return (
                z &&
                  (this.propSet.forEach(function (Oe) {
                    return z.add(Oe);
                  }),
                  (x = z)),
                function (Oe, o) {
                  if (!te(Oe, o)) return !1;
                  for (var i in Oe)
                    if (!x.has(i)) return o.fail(i, 'is extraneous', 2);
                  return !0;
                }
              );
            }),
            S
          );
        })(O);
        I.TIface = Ke;
        function K(b) {
          return new R(X(b));
        }
        I.opt = K;
        var R = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (D.ttype = L), D;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this.ttype.getChecker(L, D);
              return function (ae, _) {
                return ae === void 0 || z(ae, _);
              };
            }),
            S
          );
        })(O);
        I.TOptional = R;
        var m = (function () {
          function b(S, L, D) {
            (this.name = S), (this.ttype = L), (this.isOpt = D);
          }
          return b;
        })();
        I.TProp = m;
        function v(b) {
          for (var S = [], L = 1; L < arguments.length; L++)
            S[L - 1] = arguments[L];
          return new de(new G(S), X(b));
        }
        I.func = v;
        var de = (function (b) {
          e(S, b);
          function S(L, D) {
            var z = b.call(this) || this;
            return (z.paramList = L), (z.result = D), z;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              return function (z, ae) {
                return typeof z == 'function'
                  ? !0
                  : ae.fail(null, 'is not a function', 0);
              };
            }),
            S
          );
        })(O);
        I.TFunc = de;
        function $(b, S, L) {
          return new U(b, X(S), !!L);
        }
        I.param = $;
        var U = (function () {
          function b(S, L, D) {
            (this.name = S), (this.ttype = L), (this.isOpt = D);
          }
          return b;
        })();
        I.TParam = U;
        var G = (function (b) {
          e(S, b);
          function S(L) {
            var D = b.call(this) || this;
            return (D.params = L), D;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this,
                ae = this.params.map(function (Q) {
                  return Q.ttype.getChecker(L, D);
                }),
                _ = new Ie.NoopContext(),
                me = this.params.map(function (Q, te) {
                  return !Q.isOpt && !ae[te](void 0, _);
                }),
                Re = function (Q, te) {
                  if (!Array.isArray(Q))
                    return te.fail(null, 'is not an array', 0);
                  for (var x = 0; x < ae.length; x++) {
                    var Oe = z.params[x];
                    if (Q[x] === void 0) {
                      if (me[x]) return te.fail(Oe.name, 'is missing', 1);
                    } else {
                      var o = ae[x](Q[x], te);
                      if (!o) return te.fail(Oe.name, null, 1);
                    }
                  }
                  return !0;
                };
              return D
                ? function (Q, te) {
                    return Re(Q, te)
                      ? Q.length <= ae.length
                        ? !0
                        : te.fail(ae.length, 'is extraneous', 2)
                      : !1;
                  }
                : Re;
            }),
            S
          );
        })(O);
        I.TParamList = G;
        var M = (function (b) {
          e(S, b);
          function S(L, D) {
            var z = b.call(this) || this;
            return (z.validator = L), (z.message = D), z;
          }
          return (
            (S.prototype.getChecker = function (L, D) {
              var z = this;
              return function (ae, _) {
                return z.validator(ae) ? !0 : _.fail(null, z.message, 0);
              };
            }),
            S
          );
        })(O);
        (I.BasicType = M),
          (I.basicTypes = {
            any: new M(function (b) {
              return !0;
            }, 'is invalid'),
            number: new M(function (b) {
              return typeof b == 'number';
            }, 'is not a number'),
            object: new M(function (b) {
              return typeof b == 'object' && b;
            }, 'is not an object'),
            boolean: new M(function (b) {
              return typeof b == 'boolean';
            }, 'is not a boolean'),
            string: new M(function (b) {
              return typeof b == 'string';
            }, 'is not a string'),
            symbol: new M(function (b) {
              return typeof b == 'symbol';
            }, 'is not a symbol'),
            void: new M(function (b) {
              return b == null;
            }, 'is not void'),
            undefined: new M(function (b) {
              return b === void 0;
            }, 'is not undefined'),
            null: new M(function (b) {
              return b === null;
            }, 'is not null'),
            never: new M(function (b) {
              return !1;
            }, 'is unexpected'),
            Date: new M(ue('[object Date]'), 'is not a Date'),
            RegExp: new M(ue('[object RegExp]'), 'is not a RegExp'),
          });
        var pe = Object.prototype.toString;
        function ue(b) {
          return function (S) {
            return typeof S == 'object' && S && pe.call(S) === b;
          };
        }
        typeof u != 'undefined' &&
          (I.basicTypes.Buffer = new M(function (b) {
            return u.isBuffer(b);
          }, 'is not a Buffer'));
        for (
          var re = function (b) {
              I.basicTypes[b.name] = new M(function (S) {
                return S instanceof b;
              }, 'is not a ' + b.name);
            },
            N = 0,
            se = [
              Int8Array,
              Uint8Array,
              Uint8ClampedArray,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array,
              ArrayBuffer,
            ];
          N < se.length;
          N++
        ) {
          var Ne = se[N];
          re(Ne);
        }
      },
      67180: function (Le, I) {
        'use strict';
        var H =
          (this && this.__extends) ||
          (function () {
            var X = function (C, h) {
              return (
                (X =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, T) {
                      d.__proto__ = T;
                    }) ||
                  function (d, T) {
                    for (var E in T) T.hasOwnProperty(E) && (d[E] = T[E]);
                  }),
                X(C, h)
              );
            };
            return function (C, h) {
              X(C, h);
              function d() {
                this.constructor = C;
              }
              C.prototype =
                h === null
                  ? Object.create(h)
                  : ((d.prototype = h.prototype), new d());
            };
          })();
        Object.defineProperty(I, '__esModule', { value: !0 }),
          (I.DetailContext = I.NoopContext = I.VError = void 0);
        var u = (function (X) {
          H(C, X);
          function C(h, d) {
            var T = X.call(this, d) || this;
            return (T.path = h), Object.setPrototypeOf(T, C.prototype), T;
          }
          return C;
        })(Error);
        I.VError = u;
        var e = (function () {
          function X() {}
          return (
            (X.prototype.fail = function (C, h, d) {
              return !1;
            }),
            (X.prototype.unionResolver = function () {
              return this;
            }),
            (X.prototype.createContext = function () {
              return this;
            }),
            (X.prototype.resolveUnion = function (C) {}),
            X
          );
        })();
        I.NoopContext = e;
        var Ie = (function () {
          function X() {
            (this._propNames = ['']),
              (this._messages = [null]),
              (this._score = 0);
          }
          return (
            (X.prototype.fail = function (C, h, d) {
              return (
                this._propNames.push(C),
                this._messages.push(h),
                (this._score += d),
                !1
              );
            }),
            (X.prototype.unionResolver = function () {
              return new O();
            }),
            (X.prototype.resolveUnion = function (C) {
              for (
                var h, d, T = C, E = null, j = 0, r = T.contexts;
                j < r.length;
                j++
              ) {
                var w = r[j];
                (!E || w._score >= E._score) && (E = w);
              }
              E &&
                E._score > 0 &&
                ((h = this._propNames).push.apply(h, E._propNames),
                (d = this._messages).push.apply(d, E._messages));
            }),
            (X.prototype.getError = function (C) {
              for (var h = [], d = this._propNames.length - 1; d >= 0; d--) {
                var T = this._propNames[d];
                C += typeof T == 'number' ? '[' + T + ']' : T ? '.' + T : '';
                var E = this._messages[d];
                E && h.push(C + ' ' + E);
              }
              return new u(C, h.join('; '));
            }),
            (X.prototype.getErrorDetail = function (C) {
              for (var h = [], d = this._propNames.length - 1; d >= 0; d--) {
                var T = this._propNames[d];
                C += typeof T == 'number' ? '[' + T + ']' : T ? '.' + T : '';
                var E = this._messages[d];
                E && h.push({ path: C, message: E });
              }
              for (var j = null, d = h.length - 1; d >= 0; d--)
                j && (h[d].nested = [j]), (j = h[d]);
              return j;
            }),
            X
          );
        })();
        I.DetailContext = Ie;
        var O = (function () {
          function X() {
            this.contexts = [];
          }
          return (
            (X.prototype.createContext = function () {
              var C = new Ie();
              return this.contexts.push(C), C;
            }),
            X
          );
        })();
      },
    },
  ]);
})();
