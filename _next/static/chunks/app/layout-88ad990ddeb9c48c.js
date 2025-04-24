(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[177], {
    2642: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 2859)),
        Promise.resolve().then(t.t.bind(t, 9324, 23))
    }
    ,
    2859: (e, s, t) => {
        "use strict";
        t.d(s, {
            default: () => r
        });
        var a = t(5155)
          , l = t(7037);
        function r(e) {
            let {children: s} = e;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(l.aH, {}), s]
            })
        }
    }
    ,
    7037: (e, s, t) => {
        "use strict";
        t.d(s, {
            M3: () => c,
            aH: () => o
        });
        var a = t(5155)
          , l = t(2115);
        let r = !0
          , i = [];
        function n(e) {
            r = e,
            i.forEach(s => s(e))
        }
        function c() {
            let[e,s] = (0,
            l.useState)(r);
            return (0,
            l.useEffect)( () => {
                let e = e => s(e);
                return i.push(e),
                () => {
                    i = i.filter(s => s !== e)
                }
            }
            , []),
            e
        }
        let o = () => {
            let[e,s] = (0,
            l.useState)(0)
              , [t,r] = (0,
            l.useState)(0)
              , [i,c] = (0,
            l.useState)(!1)
              , [o,d] = (0,
            l.useState)(!0)
              , u = "SATHAK - A - THON"
              , v = u.substring(0, t);
            return ((0,
            l.useEffect)( () => {
                n(!0);
                let e = setTimeout( () => {
                    d(!1),
                    setTimeout( () => {
                        n(!1),
                        console.log("Loader finished, setting loading to false")
                    }
                    , 200)
                }
                , 4500)
                  , t = setInterval( () => {
                    r(e => e >= u.length ? (clearInterval(t),
                    e) : e + 1)
                }
                , 100)
                  , a = setInterval( () => {
                    s(e => e >= 100 ? (clearInterval(a),
                    100) : e + 1)
                }
                , 40)
                  , l = setInterval( () => {
                    c(e => !e)
                }
                , 2e3);
                return () => {
                    clearTimeout(e),
                    clearInterval(t),
                    clearInterval(a),
                    clearInterval(l)
                }
            }
            , []),
            o) ? (0,
            a.jsxs)("div", {
                className: "fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black",
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0 scan-lines pointer-events-none opacity-30"
                }), (0,
                a.jsxs)("div", {
                    className: "relative flex flex-col items-center justify-center",
                    children: [(0,
                    a.jsx)("div", {
                        className: "hourglass-container mb-10 ".concat(i ? "flipped" : ""),
                        children: (0,
                        a.jsxs)("div", {
                            className: "hourglass",
                            children: [(0,
                            a.jsx)("div", {
                                className: "hourglass-top"
                            }), (0,
                            a.jsx)("div", {
                                className: "hourglass-middle"
                            }), (0,
                            a.jsx)("div", {
                                className: "hourglass-bottom"
                            }), (0,
                            a.jsx)("div", {
                                className: "hourglass-sand-stream"
                            }), (0,
                            a.jsx)("div", {
                                className: "hourglass-sand-top"
                            }), (0,
                            a.jsx)("div", {
                                className: "hourglass-sand-bottom"
                            })]
                        })
                    }), (0,
                    a.jsxs)("h1", {
                        className: "text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mb-8 relative sci-fi-font",
                        children: [v, (0,
                        a.jsx)("span", {
                            className: "text-white/20 absolute top-0 left-0 right-0 pointer-events-none",
                            children: u.substring(t).replace(/./g, " ")
                        }), (0,
                        a.jsx)("span", {
                            className: "typing-cursor"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "w-64 relative",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "h-2 bg-gray-800 rounded-full overflow-hidden loader-frame relative",
                            children: [(0,
                            a.jsx)("div", {
                                className: "h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full relative",
                                style: {
                                    width: "".concat(e, "%")
                                }
                            }), (0,
                            a.jsx)("div", {
                                className: "scanner-effect"
                            }), [...Array(10)].map( (e, s) => (0,
                            a.jsx)("div", {
                                className: "absolute top-0 bottom-0 w-0.5 bg-black",
                                style: {
                                    left: "".concat(10 * s, "%")
                                }
                            }, s))]
                        }), (0,
                        a.jsxs)("div", {
                            className: "mt-2 text-sm text-white/60 sci-fi-font tracking-wider flex justify-between w-full",
                            children: [(0,
                            a.jsx)("span", {
                                children: "LOADING"
                            }), (0,
                            a.jsxs)("span", {
                                children: [e, "%"]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "absolute -left-6 top-0 h-2 w-4 border border-purple-500"
                        }), (0,
                        a.jsx)("div", {
                            className: "absolute -right-6 top-0 h-2 w-4 border border-blue-500"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "flex gap-1 mt-6",
                        children: [void 0, void 0, void 0, void 0, void 0].map( (s, t) => (0,
                        a.jsx)("div", {
                            className: "w-1.5 h-1.5 rounded-full ".concat(e > 20 * t ? "bg-blue-500" : "bg-gray-600")
                        }, t))
                    })]
                })]
            }) : null
        }
    }
    ,
    9324: () => {}
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [533, 441, 517, 358], () => s(2642)),
    _N_E = e.O()
}
]);
