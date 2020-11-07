(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [9],
  {
    124: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s),
        o = a(57),
        r = a(58),
        l = a(19);
      a(97);
      var d = ({
          className: e,
          resize: t = "none",
          value: a,
          onChange: s,
          minRows: o = 1,
          maxRows: r,
          ...l
        }) => {
          const [d, u] = Object(c.useState)(o),
            [b, h] = Object(c.useState)(),
            j = Object(c.useRef)();
          Object(c.useEffect)(() => {
            const e = getComputedStyle(j.current),
              t = parseInt(e.lineHeight, 10),
              a = parseInt(e.paddingTop, 10) + parseInt(e.paddingBottom, 10);
            h({ lineHeight: t, paddingHeight: a });
          }, []);
          return Object(n.jsx)("textarea", {
            className: i()("textarea", e),
            ref: j,
            onChange: (e) => {
              s(e);
              const { lineHeight: t, paddingHeight: a } = b,
                n = e.target.rows;
              e.target.rows = o;
              const c = ~~((e.target.scrollHeight - a) / t);
              c === n && (e.target.rows = c),
                r &&
                  c >= r &&
                  ((e.target.rows = r),
                  (e.target.scrollTop = e.target.scrollHeight)),
                u(r && c > r ? r : c);
            },
            style: { "--resize": t },
            rows: d,
            value: a,
            ...l,
          });
        },
        u = a(9),
        b = a(20),
        h = a(10),
        j = a(2),
        m = a(15);
      a(98);
      var p = ({
          id: e,
          label: t,
          hasValue: a,
          value: s,
          multiline: l,
          className: p,
          style: O,
          error: _,
          onBlur: g,
          ...f
        }) => {
          const [x, v] = Object(c.useState)(!1),
            y = Object(u.c)(),
            N = Object(c.useRef)(),
            w = e || "input-" + y,
            S = w + "-label",
            M = w + "-error",
            H = l ? d : "input";
          return Object(n.jsxs)("div", {
            className: i()("input", p, { "input--error": !!_ }),
            style: O,
            children: [
              Object(n.jsxs)("div", {
                className: "input__content",
                children: [
                  Object(n.jsx)("label", {
                    className: i()("input__label", {
                      "input__label--focused": x,
                      "input__label--has-value": !!s,
                    }),
                    id: S,
                    htmlFor: w,
                    children: t,
                  }),
                  Object(n.jsx)(H, {
                    className: "input__element",
                    id: w,
                    "aria-labelledby": S,
                    "aria-describedby": _ ? M : void 0,
                    onFocus: () => v(!0),
                    onBlur: (e) => {
                      v(!1), g && g(e);
                    },
                    value: s,
                    ...f,
                  }),
                  Object(n.jsx)("div", {
                    className: i()("input__underline", {
                      "input__underline--focused": x,
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(o.a, {
                component: null,
                children:
                  !!_ &&
                  Object(n.jsx)(r.a, {
                    timeout: Object(j.b)(h.b.base.durationM),
                    children: (e) => {
                      var t;
                      return Object(n.jsx)("div", {
                        className: i()("input__error", "input__error--" + e),
                        id: M,
                        role: "alert",
                        style: {
                          "--height": Object(b.a)(e)
                            ? Object(j.d)(
                                null === (t = N.current) || void 0 === t
                                  ? void 0
                                  : t.getBoundingClientRect().height
                              )
                            : "0px",
                        },
                        children: Object(n.jsxs)("div", {
                          className: "input__error-message",
                          ref: N,
                          children: [Object(n.jsx)(m.a, { icon: "error" }), _],
                        }),
                      });
                    },
                  }),
              }),
            ],
          });
        },
        O = a(65),
        _ = a(74),
        g = a(21),
        f = a(61),
        x = a(28),
        v = a(59),
        y = a(60);
      a(99);
      const N = h.b.base.durationS;
      function w(e, t = Object(j.c)(0), a = 1) {
        const n = Object(j.b)(e) * a;
        return { "--delay": Object(j.c)((Object(j.b)(t) + n).toFixed(0)) };
      }
      t.default = () => {
        const { status: e } = Object(u.j)(),
          t = Object(c.useRef)(),
          a = Object(u.b)(""),
          s = Object(u.b)(""),
          [d, S] = Object(c.useState)(!1),
          [M, H] = Object(c.useState)(!1),
          [R, k] = Object(c.useState)("");
        Object(u.k)();
        const C = Object(c.useCallback)(
          async (e) => {
            if ((e.preventDefault(), k(""), !d))
              try {
                S(!0);
                const e = await fetch("https://api.tu2.tech/message", {
                    method: "POST",
                    mode: "cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: a.value, message: s.value }),
                  }),
                  t = await e.json(),
                  n = (function ({
                    status: e,
                    errorMessage: t,
                    fallback: a = "There was a problem with your request",
                  }) {
                    return (
                      200 !== e &&
                      (t ||
                        {
                          500: "There was a problem with the server, try again later",
                          404: "There was a problem connecting to the server. Make sure you are connected to the internet",
                        }[e] ||
                        a)
                    );
                  })({
                    status: null === e || void 0 === e ? void 0 : e.status,
                    errorMessage: null === t || void 0 === t ? void 0 : t.error,
                    fallback: "There was a problem sending your message",
                  });
                if (n) throw new Error(n);
                H(!0), S(!1);
              } catch (t) {
                S(!1), k(t.message);
              }
          },
          [a.value, s.value, d]
        );
        return Object(n.jsxs)(f.a, {
          className: i()("contact", "contact--" + e),
          children: [
            Object(n.jsxs)(l.a, {
              children: [
                Object(n.jsx)("title", {
                  children: "Contact | Mohnish Landge",
                }),
                Object(n.jsx)("meta", {
                  name: "description",
                  content:
                    "Send me a message if you\u2019re interested in discussing a project or if you just want to say hi",
                }),
              ],
            }),
            Object(n.jsxs)(o.a, {
              component: null,
              children: [
                !M &&
                  Object(n.jsx)(r.a, {
                    appear: !0,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    timeout: 1600,
                    onEnter: b.b,
                    children: (e) =>
                      Object(n.jsxs)("form", {
                        className: "contact__form",
                        method: "post",
                        onSubmit: C,
                        children: [
                          Object(n.jsx)(v.a, {
                            className: i()(
                              "contact__title",
                              "contact__title--" + e,
                              { "contact__title--hidden": x.a }
                            ),
                            level: 3,
                            as: "h1",
                            style: w(h.b.base.durationXS, N, 0.3),
                            children: Object(n.jsx)(O.a, {
                              text: "Say hello",
                              start: "exited" !== e && !x.a,
                              delay: 300,
                            }),
                          }),
                          Object(n.jsx)(_.a, {
                            className: i()(
                              "contact__divider",
                              "contact__divider--" + e,
                              { "contact__divider--hidden": x.a }
                            ),
                            style: w(h.b.base.durationXS, N, 0.4),
                          }),
                          Object(n.jsx)(p, {
                            required: !0,
                            className: i()(
                              "contact__input",
                              "contact__input--" + e,
                              { "contact__input--hidden": x.a }
                            ),
                            style: w(h.b.base.durationXS, N),
                            autoComplete: "email",
                            label: "Your Email",
                            type: "email",
                            maxLength: 512,
                            ...a,
                          }),
                          Object(n.jsx)(p, {
                            required: !0,
                            multiline: !0,
                            className: i()(
                              "contact__input",
                              "contact__input--" + e,
                              { "contact__input--hidden": x.a }
                            ),
                            style: w(h.b.base.durationS, N),
                            autoComplete: "off",
                            label: "Message",
                            maxLength: 4096,
                            ...s,
                          }),
                          Object(n.jsx)(o.a, {
                            component: null,
                            children:
                              !!R &&
                              Object(n.jsx)(r.a, {
                                timeout: Object(j.b)(h.b.base.durationM),
                                children: (e) => {
                                  var a;
                                  return Object(n.jsx)("div", {
                                    className: i()(
                                      "contact__form-error",
                                      "contact__form-error--" + e
                                    ),
                                    style: {
                                      "--height": Object(b.a)(e)
                                        ? Object(j.d)(
                                            null === (a = t.current) ||
                                              void 0 === a
                                              ? void 0
                                              : a.getBoundingClientRect().height
                                          )
                                        : "0px",
                                    },
                                    children: Object(n.jsx)("div", {
                                      className: "contact__form-error-content",
                                      ref: t,
                                      children: Object(n.jsxs)("div", {
                                        className:
                                          "contact__form-error-message",
                                        children: [
                                          Object(n.jsx)(m.a, {
                                            className:
                                              "contact__form-error-icon",
                                            icon: "error",
                                          }),
                                          R,
                                        ],
                                      }),
                                    }),
                                  });
                                },
                              }),
                          }),
                          Object(n.jsx)(g.a, {
                            className: i()(
                              "contact__button",
                              "contact__button--" + e,
                              {
                                "contact__button--hidden": x.a,
                                "contact__button--sending": d,
                              }
                            ),
                            style: w(h.b.base.durationM, N),
                            disabled: d,
                            loading: d,
                            loadingText: "Sending...",
                            icon: "send",
                            type: "submit",
                            children: "Send Message",
                          }),
                        ],
                      }),
                  }),
                M &&
                  Object(n.jsx)(r.a, {
                    appear: !0,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    onEnter: b.b,
                    timeout: 0,
                    children: (e) =>
                      Object(n.jsxs)("div", {
                        className: "contact__complete",
                        "aria-live": "polite",
                        children: [
                          Object(n.jsx)(v.a, {
                            level: 3,
                            as: "h3",
                            className: i()(
                              "contact__complete-title",
                              "contact__complete-title--" + e
                            ),
                            children: "Message Sent",
                          }),
                          Object(n.jsx)(y.a, {
                            size: "l",
                            className: i()(
                              "contact__complete-text",
                              "contact__complete-text--" + e
                            ),
                            style: w(h.b.base.durationXS),
                            children:
                              "I\u2019ll get back to you within a couple days, sit tight",
                          }),
                          Object(n.jsx)(g.a, {
                            secondary: !0,
                            iconHoverShift: !0,
                            className: i()(
                              "contact__complete-button",
                              "contact__complete-button--" + e
                            ),
                            style: w(h.b.base.durationM),
                            href: "/",
                            icon: "chevronRight",
                            children: "Back to homepage",
                          }),
                        ],
                      }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    59: function (e, t, a) {
      "use strict";
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s),
        o = a(19),
        r = a.p + "static/media/gotham-bold.73ce573b.woff2";
      a(62);
      t.a = ({
        children: e,
        level: t = 1,
        as: a,
        align: s = "auto",
        weight: l = "medium",
        className: d,
        ...u
      }) => {
        const b = Math.min(Math.max(t, 0), 4),
          h = a || "h" + Math.max(b, 1);
        return Object(n.jsxs)(c.Fragment, {
          children: [
            "bold" === l &&
              Object(n.jsxs)(o.a, {
                children: [
                  Object(n.jsx)("link", {
                    rel: "preload",
                    href: r,
                    as: "font",
                    crossorigin: "",
                  }),
                  Object(n.jsx)("style", {
                    children: `\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `,
                  }),
                ],
              }),
            Object(n.jsx)(h, {
              className: i()(
                d,
                "heading",
                "heading--align-" + s,
                "heading--level-" + b,
                "heading--weight-" + l
              ),
              ...u,
              children: e,
            }),
          ],
        });
      };
    },
    60: function (e, t, a) {
      "use strict";
      var n = a(1),
        c = a(4),
        s = a.n(c);
      a(63);
      t.a = ({
        children: e,
        size: t = "m",
        as: a = "p",
        align: c = "auto",
        weight: i = "auto",
        secondary: o,
        className: r,
        ...l
      }) =>
        Object(n.jsx)(a, {
          className: s()(
            r,
            "text",
            "text--align-" + c,
            "text--size-" + t,
            "text--weight-" + i,
            { "text--secondary": o }
          ),
          ...l,
          children: e,
        });
    },
    61: function (e, t, a) {
      "use strict";
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s);
      a(68);
      const o = Object(
        c.forwardRef
      )(({ as: e = "div", children: t, className: a, ...c }, s) =>
        Object(n.jsx)(e, {
          className: i()("section", a),
          ref: s,
          ...c,
          children: t,
        })
      );
      t.a = o;
    },
    62: function (e, t, a) {},
    63: function (e, t, a) {},
    65: function (e, t, a) {
      "use strict";
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s),
        o = a(9),
        r = a(66),
        l = a(22);
      a(67);
      const d = [
          "\u30a2",
          "\u30a4",
          "\u30a6",
          "\u30a8",
          "\u30aa",
          "\u30ab",
          "\u30ad",
          "\u30af",
          "\u30b1",
          "\u30b3",
          "\u30b5",
          "\u30b7",
          "\u30b9",
          "\u30bb",
          "\u30bd",
          "\u30bf",
          "\u30c1",
          "\u30c4",
          "\u30c6",
          "\u30c8",
          "\u30ca",
          "\u30cb",
          "\u30cc",
          "\u30cd",
          "\u30ce",
          "\u30cf",
          "\u30d2",
          "\u30d5",
          "\u30d8",
          "\u30db",
          "\u30de",
          "\u30df",
          "\u30e0",
          "\u30e1",
          "\u30e2",
          "\u30e4",
          "\u30e6",
          "\u30e8",
          "\u30fc",
          "\u30e9",
          "\u30ea",
          "\u30eb",
          "\u30ec",
          "\u30ed",
          "\u30ef",
          "\u30f0",
          "\u30f1",
          "\u30f2",
          "\u30f3",
          "\u30ac",
          "\u30ae",
          "\u30b0",
          "\u30b2",
          "\u30b4",
          "\u30b6",
          "\u30b8",
          "\u30ba",
          "\u30bc",
          "\u30be",
          "\u30c0",
          "\u30c2",
          "\u30c5",
          "\u30c7",
          "\u30c9",
          "\u30d0",
          "\u30d3",
          "\u30d6",
          "\u30d9",
          "\u30dc",
          "\u30d1",
          "\u30d4",
          "\u30d7",
          "\u30da",
          "\u30dd",
        ],
        u = "glyph",
        b = "value";
      const h = ({
        text: e,
        start: t = !0,
        delay: a = 0,
        className: s,
        ...h
      }) => {
        const j = Object(c.useRef)([{ type: u, value: "" }]),
          m = Object(c.useRef)(),
          p = Object(o.h)();
        return (
          Object(c.useEffect)(() => {
            const n = m.current,
              c = e.split("");
            let s;
            const i = () => {
                const e = j.current.map(
                  (e) =>
                    `<span class="decoder-text__${e.type}">${e.value}</span>`
                );
                n.innerHTML = e.join("");
              },
              o = Object(r.g)(0, (e) => {
                (j.current = (function (e, t, a) {
                  return e.map((e, n) => {
                    if (n < a) return { type: b, value: e };
                    if (a % 1 < 0.5) {
                      const e = Math.floor(Math.random() * d.length);
                      return { type: u, value: d[e] };
                    }
                    return { type: u, value: t[n].value };
                  });
                })(c, j.current, e)),
                  i();
              });
            return (
              !t ||
                s ||
                p ||
                (s = Object(r.a)(
                  Object(r.b)(a),
                  Object(r.e)({
                    from: 0,
                    to: c.length,
                    stiffness: 8,
                    damping: 5,
                  })
                ).start(o)),
              p &&
                ((j.current = c.map((e, t) => ({ type: b, value: c[t] }))),
                i()),
              () => {
                s && s.stop();
              }
            );
          }, [p, t, a, e]),
          Object(n.jsxs)("span", {
            className: i()("decoder-text", s),
            ...h,
            children: [
              Object(n.jsx)(l.a, {
                className: "decoder-text__label",
                children: e,
              }),
              Object(n.jsx)("span", {
                "aria-hidden": !0,
                className: "decoder-text__content",
                ref: m,
              }),
            ],
          })
        );
      };
      t.a = Object(c.memo)(h);
    },
    67: function (e, t, a) {},
    68: function (e, t, a) {},
    74: function (e, t, a) {
      "use strict";
      var n = a(1),
        c = a(4),
        s = a.n(c),
        i = a(2);
      a(75);
      const o = ({
        lineWidth: e,
        lineHeight: t,
        notchWidth: a,
        notchHeight: c,
        collapseDelay: o,
        collapsed: r,
        className: l,
        style: d,
      }) =>
        Object(n.jsxs)("div", {
          className: s()("divider", l),
          style: {
            "--lineWidth": e,
            "--lineHeight": t,
            "--notchWidth": a,
            "--notchHeight": c,
            "--collapseDelay": Object(i.c)(o),
            ...d,
          },
          children: [
            Object(n.jsx)("div", {
              className: s()("divider__line", {
                "divider__line--collapsed": r,
              }),
            }),
            Object(n.jsx)("div", {
              className: s()("divider__notch", {
                "divider__notch--collapsed": r,
              }),
              style: { "--collapseDelay": Object(i.c)(o + 160) },
            }),
          ],
        });
      (o.defaultProps = {
        lineWidth: "100%",
        lineHeight: "2px",
        notchWidth: "90px",
        notchHeight: "10px",
        collapsed: !1,
        collapseDelay: 0,
      }),
        (t.a = o);
    },
    75: function (e, t, a) {},
    97: function (e, t, a) {},
    98: function (e, t, a) {},
    99: function (e, t, a) {},
  },
]);
//# sourceMappingURL=9.e845f766.chunk.js.map
