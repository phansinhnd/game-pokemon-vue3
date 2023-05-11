(function () {
  "use strict";
  var e = {
      6889: function (e, i, a) {
        var n = a(9242),
          s = a(3396);
        function t(e, i, a, n, t, o) {
          const r = (0, s.up)("initial-screen");
          return (0, s.wg)(), (0, s.j4)(r);
        }
        var o = a(7139);
        const r = (e) => (
            (0, s.dD)("data-v-fc4b6a6a"), (e = e()), (0, s.Cn)(), e
          ),
          l = { key: 0, class: "main flex flex-center bg-primary" },
          c = { class: "main__wrapper" },
          m = r(() =>
            (0, s._)(
              "div",
              { class: "main__h1__wrapper" },
              [
                (0, s._)(
                  "h1",
                  { class: "text-h1 text-h1--heading" },
                  "pokemon card"
                ),
              ],
              -1
            )
          ),
          g = r(() =>
            (0, s._)(
              "img",
              { class: "main__image", src: "./pokemonbg.gif", alt: "image" },
              null,
              -1
            )
          ),
          d = r(() =>
            (0, s._)(
              "h2",
              { class: "text-h2 text-h2--heading" },
              "Select mode to play game",
              -1
            )
          ),
          p = { class: "card-list-wrapper" },
          u = { class: "card-list" },
          h = ["onClick"],
          f = { class: "text-h4" },
          C = { class: "text-p" };
        function k(e, i, a, n, t, r) {
          const k = (0, s.up)("playing-screen"),
            w = (0, s.up)("footer-screen");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              s.HY,
              null,
              [
                0 === t.tab_Index
                  ? ((0, s.wg)(),
                    (0, s.iD)("div", l, [
                      (0, s._)("div", c, [
                        m,
                        g,
                        d,
                        (0, s._)("div", p, [
                          (0, s._)("ul", u, [
                            ((0, s.wg)(!0),
                            (0, s.iD)(
                              s.HY,
                              null,
                              (0, s.Ko)(
                                t.cards,
                                (e) => (
                                  (0, s.wg)(),
                                  (0, s.iD)(
                                    "li",
                                    {
                                      class: "card-item btn-primary",
                                      key: e.id,
                                      onClick: () => {
                                        r.gettotal(
                                          e.totalCard,
                                          e.className,
                                          e.timeShowCard
                                        );
                                      },
                                    },
                                    [
                                      (0, s._)("h4", f, (0, o.zw)(e.dir), 1),
                                      (0, s._)("p", C, (0, o.zw)(e.mode), 1),
                                    ],
                                    8,
                                    h
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                      ]),
                    ]))
                  : (0, s.kq)("", !0),
                1 === t.tab_Index
                  ? ((0, s.wg)(),
                    (0, s.j4)(
                      k,
                      {
                        key: 1,
                        numberCard: t.totalCard,
                        className: t.className,
                        onBackHome: r.backHome,
                        timeShowCard: t.timeShowCard,
                      },
                      null,
                      8,
                      ["numberCard", "className", "onBackHome", "timeShowCard"]
                    ))
                  : (0, s.kq)("", !0),
                0 === t.tab_Index
                  ? ((0, s.wg)(), (0, s.j4)(w, { key: 2 }))
                  : (0, s.kq)("", !0),
              ],
              64
            )
          );
        }
        const w = (e) => (
            (0, s.dD)("data-v-766841fd"), (e = e()), (0, s.Cn)(), e
          ),
          _ = { class: "container" },
          v = { class: "main-play-wrapper" },
          y = { class: "main-play" },
          b = { class: "main-play-audio" },
          S = { ref: "audioGame", controls: "", loop: "", autoplay: "" },
          x = w(() =>
            (0, s._)(
              "source",
              { src: "/audios/Pikachu.mp3", type: "audio/ogg" },
              null,
              -1
            )
          ),
          D = w(() =>
            (0, s._)(
              "source",
              { src: "/audios/4.mp3", type: "audio/mpeg" },
              null,
              -1
            )
          ),
          H = [x, D],
          T = ["onClick"],
          A = ["src"],
          N = w(() =>
            (0, s._)(
              "img",
              {
                class: "card-item-img card-item-front",
                src: "./images/icon_back.png",
                alt: "image",
              },
              null,
              -1
            )
          );
        function I(e, i, a, n, t, r) {
          const l = (0, s.up)("header-component");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", _, [
              (0, s._)("div", v, [
                (0, s._)("div", y, [
                  (0, s._)("div", b, [(0, s._)("audio", S, H, 512)]),
                  (0, s.Wm)(
                    l,
                    {
                      onBackHome: r.backHome,
                      onPlayAudio: r.playAudio,
                      onPauseAudio: r.pauseAudio,
                      isStopTimer: t.isStopTimer,
                    },
                    null,
                    8,
                    ["onBackHome", "onPlayAudio", "onPauseAudio", "isStopTimer"]
                  ),
                  (0, s._)(
                    "ul",
                    { class: (0, o.C_)([a.className[0], "card-list flex"]) },
                    [
                      ((0, s.wg)(!0),
                      (0, s.iD)(
                        s.HY,
                        null,
                        (0, s.Ko)(
                          t.arrCard,
                          (e, i) => (
                            (0, s.wg)(),
                            (0, s.iD)(
                              "li",
                              {
                                class: (0, o.C_)([a.className[1], "card-item"]),
                                key: i,
                              },
                              [
                                (0, s._)(
                                  "div",
                                  {
                                    class: (0, o.C_)([
                                      "card-item__wrapper",
                                      { "card-item-flip": e.isFlip },
                                    ]),
                                    onClick: (a) => r.handleClickCard(i, e),
                                  },
                                  [
                                    (0, s._)(
                                      "img",
                                      {
                                        class: "card-item-img card-item-back",
                                        src: e.src,
                                        alt: "image",
                                      },
                                      null,
                                      8,
                                      A
                                    ),
                                    N,
                                  ],
                                  10,
                                  T
                                ),
                              ],
                              2
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ),
                ]),
              ]),
            ])
          );
        }
        a(7658);
        const P = (e) => (
            (0, s.dD)("data-v-171b30b4"), (e = e()), (0, s.Cn)(), e
          ),
          j = P(() =>
            (0, s._)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                class: "ionicon",
                viewBox: "0 0 512 512",
              },
              [
                (0, s._)("path", {
                  d: "M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32",
                }),
                (0, s._)("path", {
                  d: "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "32",
                }),
              ],
              -1
            )
          ),
          O = [j],
          B = {
            class:
              "btn-primary main-icon-wrapper main-icon-wrapper--audio flex flex-center",
          },
          F = P(() =>
            (0, s._)(
              "div",
              {
                class:
                  "main-theme btn-primary main-icon-wrapper flex flex-center",
              },
              [(0, s.Uk)(" Themes"), (0, s._)("span", null, " > ")],
              -1
            )
          ),
          M = { key: 0, class: "main-theme-list" },
          q = ["onClick"],
          $ = { class: "main__time" },
          V = { key: 0, class: "main__time__dot" };
        function Z(e, i, a, n, t, r) {
          const l = (0, s.up)("ion-icon");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: "header",
                style: (0, o.j5)({
                  background: t.isBgHeader ? t.bgHeader : "",
                }),
              },
              [
                (0, s._)(
                  "div",
                  {
                    onClick:
                      i[0] ||
                      (i[0] = (...e) => r.onClickHome && r.onClickHome(...e)),
                    class: (0, o.C_)([
                      "btn-primary main-icon-wrapper flex flex-center",
                      { "color-primary-change": t.isColorOrange },
                    ]),
                    title: "home",
                  },
                  O,
                  2
                ),
                (0, s._)("div", B, [
                  t.isAudio
                    ? ((0, s.wg)(),
                      (0, s.j4)(
                        l,
                        {
                          key: 0,
                          onClick: r.onToggleAudio,
                          name: "volume-high-outline",
                        },
                        null,
                        8,
                        ["onClick"]
                      ))
                    : (0, s.kq)("", !0),
                  t.isAudio
                    ? (0, s.kq)("", !0)
                    : ((0, s.wg)(),
                      (0, s.j4)(
                        l,
                        {
                          key: 1,
                          onClick: r.onToggleAudio,
                          name: "volume-mute-outline",
                        },
                        null,
                        8,
                        ["onClick"]
                      )),
                ]),
                (0, s._)(
                  "div",
                  {
                    onClick:
                      i[1] ||
                      (i[1] = (...e) =>
                        r.onToggleDropDown && r.onToggleDropDown(...e)),
                    class: "main-theme-wrapper",
                  },
                  [
                    F,
                    t.isDropDown
                      ? ((0, s.wg)(),
                        (0, s.iD)("ul", M, [
                          ((0, s.wg)(!0),
                          (0, s.iD)(
                            s.HY,
                            null,
                            (0, s.Ko)(
                              t.themes,
                              (e, i) => (
                                (0, s.wg)(),
                                (0, s.iD)(
                                  "li",
                                  {
                                    class: "main-theme-item",
                                    key: i,
                                    onClick: (i) =>
                                      r.onClickItem(e.title, e.color),
                                  },
                                  (0, o.zw)(e.title),
                                  9,
                                  q
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (0, s.kq)("", !0),
                  ]
                ),
                (0, s._)("div", $, [
                  (0, s.Uk)(" Time "),
                  t.isShow
                    ? ((0, s.wg)(), (0, s.iD)("span", V, ": "))
                    : (0, s.kq)("", !0),
                  (0, s.Uk)("  " + (0, o.zw)(t.time) + " s ", 1),
                ]),
              ],
              4
            )
          );
        }
        var z = {
            name: "TimerComponent",
            components: {},
            data() {
              return {
                time: 0,
                isShow: !0,
                isAudio: !0,
                isDropDown: !1,
                isColorOrange: !1,
                isBgHeader: !1,
                bgHeader: "",
                themes: [
                  { title: "Default", color: "" },
                  { title: "Orange", color: "#f05123" },
                ],
              };
            },
            props: { isStopTimer: { type: Boolean } },
            methods: {
              onToggleAudio() {
                (this.isAudio = !this.isAudio),
                  this.isAudio
                    ? this.$emit("playAudio")
                    : this.$emit("pauseAudio");
              },
              onClickHome() {
                console.log(this.isBgHeader), this.$emit("backHome");
              },
              onToggleDropDown() {
                (this.isDropDown = !this.isDropDown),
                  console.log(this.isBgHeader);
              },
              onClickItem(e, i) {
                let a = document.querySelector(":root");
                "Default" === e
                  ? ((this.isBgHeader = !1),
                    a.style.setProperty(
                      "--color-primary-playScreen",
                      "#1877f2"
                    ))
                  : ((this.isBgHeader = !0),
                    (this.bgHeader = i),
                    a.style.setProperty("--color-primary-playScreen", i));
              },
              timer() {
                this.isStopTimer || ++this.time;
              },
              handeleShow: function () {
                this.isStopTimer
                  ? (this.isShow = !0)
                  : (this.isShow = !this.isShow);
              },
            },
            mounted() {
              setInterval(this.timer, 1e3), setInterval(this.handeleShow, 500);
            },
          },
          G = a(89);
        const Y = (0, G.Z)(z, [
          ["render", Z],
          ["__scopeId", "data-v-171b30b4"],
        ]);
        var E = Y,
          K = {
            name: "PlayingScreen",
            components: { HeaderComponent: E },
            data() {
              return {
                arrCard: [],
                cardClick: null,
                isNoProcess: !1,
                countCardMatch: 0,
                isStopTimer: !1,
                arrSrc: [
                  "./images/1.png",
                  "./images/2.png",
                  "/images/3.png",
                  "./images/4.png",
                  "./images/5.png",
                  "./images/6.png",
                  "./images/7.png",
                  "./images/8.png",
                  "./images/9.png",
                  "./images/10.png",
                  "./images/11.png",
                  "./images/12.png",
                  "./images/13.png",
                  "./images/14.png",
                  "./images/15.png",
                  "./images/16.png",
                  "./images/17.png",
                  "./images/18.png",
                  "./images/19.png",
                  "./images/20.png",
                  "./images/21.png",
                  "./images/22.png",
                  "./images/23.png",
                  "./images/24.png",
                  "./images/25.png",
                  "./images/26.png",
                  "./images/27.png",
                  "./images/28.png",
                  "./images/29.png",
                  "./images/30.png",
                  "./images/31.png",
                  "./images/32.png",
                  "./images/33.png",
                  "./images/34.png",
                  "./images/35.png",
                  "./images/36.png",
                  "./images/37.png",
                  "./images/38.png",
                  "./images/39.png",
                  "./images/40.png",
                  "./images/41.png",
                  "./images/42.png",
                  "./images/43.png",
                  "./images/44.png",
                  "./images/45.png",
                  "./images/46.png",
                  "./images/47.png",
                  "./images/48.png",
                  "./images/49.png",
                  "./images/50.png",
                  "./images/51.png",
                  "./images/52.png",
                  "./images/53.png",
                  "./images/54.png",
                  "./images/55.png",
                  "./images/56.png",
                  "./images/57.png",
                  "./images/58.png",
                  "./images/59.png",
                  "./images/60.png",
                  "./images/61.png",
                  "./images/62.png",
                  "./images/63.png",
                  "./images/64.png",
                ],
              };
            },
            props: {
              numberCard: { type: Number },
              className: { type: Array },
              timeShowCard: { type: Number },
            },
            methods: {
              playAudio() {
                this.$refs.audioGame.play(),
                  (this.$refs.audioGame.currentTime = 0);
              },
              pauseAudio() {
                this.$refs.audioGame.pause();
              },
              backHome() {
                this.$emit("backHome");
              },
              getMultipleRandom: function (e, i) {
                console.log(typeof i);
                let a = [...e].sort(() => 0.5 - Math.random()),
                  n = a.slice(0, i / 2);
                (n = [...n, ...n]),
                  (n = [...n].sort(() => 0.5 - Math.random())),
                  (n = n.slice(0, i));
                for (let s = 0; s < n.length; s++)
                  this.arrCard.push({ isFlip: !0, src: n[s] });
              },
              handleClickCard(e, i) {
                if (!i.isFlip && !this.isNoProcess)
                  return null === this.cardClick
                    ? ((this.cardClick = { ...i, index: e }),
                      console.log(this.cardClick),
                      void (i.isFlip = !0))
                    : null !== this.cardClick && this.cardClick.src === i.src
                    ? ((i.isFlip = !0),
                      (this.cardClick = null),
                      this.countCardMatch++,
                      void (
                        this.countCardMatch == this.arrCard.length / 2 &&
                        (this.isStopTimer = !0)
                      ))
                    : void (
                        null !== this.cardClick &&
                        this.cardClick.src !== i.src &&
                        ((i.isFlip = !0),
                        (this.isNoProcess = !0),
                        setTimeout(() => {
                          (this.arrCard[this.cardClick.index].isFlip = !1),
                            (i.isFlip = !1),
                            (this.isNoProcess = !1),
                            (this.cardClick = null);
                        }, 1e3))
                      );
              },
            },
            computed: {},
            mounted() {
              console.log(typeof this.timeShowCard),
                console.log(typeof this.numberCard),
                this.getMultipleRandom(this.arrSrc, this.numberCard),
                setTimeout(() => {
                  this.arrCard.forEach((e) => (e.isFlip = !1));
                }, this.timeShowCard);
            },
          };
        const U = (0, G.Z)(K, [
          ["render", I],
          ["__scopeId", "data-v-766841fd"],
        ]);
        var L = U;
        const R = { class: "footer" };
        function W(e, i, a, n, t, o) {
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "footer",
              R,
              " This is game owned by ❤️ Phan Van Sinh ❤️ "
            )
          );
        }
        var J = { name: "FooterScreen" };
        const Q = (0, G.Z)(J, [
          ["render", W],
          ["__scopeId", "data-v-206b51e4"],
        ]);
        var X = Q,
          ee = {
            name: "InitialScreen",
            components: { PlayingScreen: L, FooterScreen: X },
            data() {
              return {
                tab_Index: 0,
                totalCard: 0,
                className: [],
                timeShowCard: 0,
                cards: [
                  {
                    id: 0,
                    mode: "4x4",
                    dir: "Easy",
                    totalCard: 16,
                    className: ["card-list--16", "card-item--16"],
                    timeShowCard: 1200,
                  },
                  {
                    id: 1,
                    mode: "6x4",
                    totalCard: 24,
                    dir: "Norm",
                    className: ["card-list--24", "card-item--24"],
                    timeShowCard: 3e3,
                  },
                  {
                    id: 2,
                    mode: "8x6",
                    totalCard: 48,
                    dir: "Hard",
                    className: ["card-list--48", "card-item--48"],
                    timeShowCard: 4e3,
                  },
                  {
                    id: 3,
                    mode: "11x6",
                    totalCard: 66,
                    dir: "Very Hard",
                    className: ["card-list--100", "card-item--100"],
                    timeShowCard: 5e3,
                  },
                ],
              };
            },
            methods: {
              backHome() {
                this.tab_Index = 0;
              },
              gettotal(e, i, a) {
                (this.totalCard = e),
                  (this.className = i),
                  (this.timeShowCard = a),
                  (this.tab_Index = 1);
              },
            },
            mounted() {},
          };
        const ie = (0, G.Z)(ee, [
          ["render", k],
          ["__scopeId", "data-v-fc4b6a6a"],
        ]);
        var ae = ie,
          ne = { name: "App", components: { InitialScreen: ae } };
        const se = (0, G.Z)(ne, [["render", t]]);
        var te = se;
        (0, n.ri)(te).mount("#game");
      },
    },
    i = {};
  function a(n) {
    var s = i[n];
    if (void 0 !== s) return s.exports;
    var t = (i[n] = { exports: {} });
    return e[n](t, t.exports, a), t.exports;
  }
  (a.m = e),
    (function () {
      var e = [];
      a.O = function (i, n, s, t) {
        if (!n) {
          var o = 1 / 0;
          for (m = 0; m < e.length; m++) {
            (n = e[m][0]), (s = e[m][1]), (t = e[m][2]);
            for (var r = !0, l = 0; l < n.length; l++)
              (!1 & t || o >= t) &&
              Object.keys(a.O).every(function (e) {
                return a.O[e](n[l]);
              })
                ? n.splice(l--, 1)
                : ((r = !1), t < o && (o = t));
            if (r) {
              e.splice(m--, 1);
              var c = s();
              void 0 !== c && (i = c);
            }
          }
          return i;
        }
        t = t || 0;
        for (var m = e.length; m > 0 && e[m - 1][2] > t; m--) e[m] = e[m - 1];
        e[m] = [n, s, t];
      };
    })(),
    (function () {
      a.n = function (e) {
        var i =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return a.d(i, { a: i }), i;
      };
    })(),
    (function () {
      a.d = function (e, i) {
        for (var n in i)
          a.o(i, n) &&
            !a.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (e, i) {
        return Object.prototype.hasOwnProperty.call(e, i);
      };
    })(),
    (function () {
      var e = { 143: 0 };
      a.O.j = function (i) {
        return 0 === e[i];
      };
      var i = function (i, n) {
          var s,
            t,
            o = n[0],
            r = n[1],
            l = n[2],
            c = 0;
          if (
            o.some(function (i) {
              return 0 !== e[i];
            })
          ) {
            for (s in r) a.o(r, s) && (a.m[s] = r[s]);
            if (l) var m = l(a);
          }
          for (i && i(n); c < o.length; c++)
            (t = o[c]), a.o(e, t) && e[t] && e[t][0](), (e[t] = 0);
          return a.O(m);
        },
        n = (self["webpackChunkgame_mini_vue_3"] =
          self["webpackChunkgame_mini_vue_3"] || []);
      n.forEach(i.bind(null, 0)), (n.push = i.bind(null, n.push.bind(n)));
    })();
  var n = a.O(void 0, [998], function () {
    return a(6889);
  });
  n = a.O(n);
})();
//# sourceMappingURL=app.953de1f4.js.map
