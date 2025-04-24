"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[136], {
    7037: (e, t, s) => {
        s.d(t, {
            M3: () => i,
            aH: () => c
        });
        var a = s(5155)
          , r = s(2115);
        let l = !0
          , n = [];
        function o(e) {
            l = e,
            n.forEach(t => t(e))
        }
        function i() {
            let[e,t] = (0,
            r.useState)(l);
            return (0,
            r.useEffect)( () => {
                let e = e => t(e);
                return n.push(e),
                () => {
                    n = n.filter(t => t !== e)
                }
            }
            , []),
            e
        }
        let c = () => {
            let[e,t] = (0,
            r.useState)(0)
              , [s,l] = (0,
            r.useState)(0)
              , [n,i] = (0,
            r.useState)(!1)
              , [c,d] = (0,
            r.useState)(!0)
              , u = "SATHAK  A  THON"
              , m = u.substring(0, s);
            return ((0,
            r.useEffect)( () => {
                o(!0);
                let e = setTimeout( () => {
                    d(!1),
                    setTimeout( () => {
                        o(!1),
                        console.log("Loader finished, setting loading to false")
                    }
                    , 200)
                }
                , 4500)
                  , s = setInterval( () => {
                    l(e => e >= u.length ? (clearInterval(s),
                    e) : e + 1)
                }
                , 100)
                  , a = setInterval( () => {
                    t(e => e >= 100 ? (clearInterval(a),
                    100) : e + 1)
                }
                , 40)
                  , r = setInterval( () => {
                    i(e => !e)
                }
                , 2e3);
                return () => {
                    clearTimeout(e),
                    clearInterval(s),
                    clearInterval(a),
                    clearInterval(r)
                }
            }
            , []),
            c) ? (0,
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
                        className: "hourglass-container mb-10 ".concat(n ? "flipped" : ""),
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
                        children: [m, (0,
                        a.jsx)("span", {
                            className: "text-white/20 absolute top-0 left-0 right-0 pointer-events-none",
                            children: u.substring(s).replace(/./g, " ")
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
                            }), [...Array(10)].map( (e, t) => (0,
                            a.jsx)("div", {
                                className: "absolute top-0 bottom-0 w-0.5 bg-black",
                                style: {
                                    left: "".concat(10 * t, "%")
                                }
                            }, t))]
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
                        children: [void 0, void 0, void 0, void 0, void 0].map( (t, s) => (0,
                        a.jsx)("div", {
                            className: "w-1.5 h-1.5 rounded-full ".concat(e > 20 * s ? "bg-blue-500" : "bg-gray-600")
                        }, s))
                    })]
                })]
            }) : null
        }
    }
    ,
    2250: (e, t, s) => {
        s.d(t, {
            y: () => h
        });
        var a = s(5155)
          , r = s(2115)
          , l = s(4085)
          , n = s(7819)
          , o = s(6165)
          , i = s(767)
          , c = s(6710)
          , d = s(8173)
          , u = s.n(d)
          , m = s(5565)
          , f = s(7037);
        function h(e) {
            let {sections: t, scrollToSection: s} = e
              , [d,h] = (0,
            r.useState)(!1)
              , [x,g] = (0,
            r.useState)(!0)
              , [v,p] = (0,
            r.useState)("")
              , [b,j] = (0,
            r.useState)(!1)
              , N = (0,
            r.useRef)(0)
              , w = (0,
            r.useRef)(null)
              , y = (0,
            f.M3)();
            return ((0,
            r.useEffect)( () => {
                y || setTimeout( () => {
                    j(!0)
                }
                , 100)
            }
            , [y]),
            (0,
            r.useEffect)( () => {
                console.log("NavigationBar loading state:", y)
            }
            , [y]),
            (0,
            r.useEffect)( () => {
                let e = () => {
                    let e = window.scrollY;
                    e > N.current + 10 ? g(!1) : e < N.current - 10 && g(!0),
                    N.current = e;
                    let s = t.map(e => ({
                        id: e.id,
                        element: document.getElementById(e.id)
                    })).filter(e => null !== e.element);
                    if (s.length) {
                        let e = s.reduce( (e, t) => {
                            if (!t.element)
                                return e;
                            let s = t.element.getBoundingClientRect();
                            return s.top <= 200 && s.bottom >= 200 ? t.id : e
                        }
                        , "");
                        e && p(e)
                    }
                }
                ;
                return window.addEventListener("scroll", e, {
                    passive: !0
                }),
                () => window.removeEventListener("scroll", e)
            }
            , [t]),
            (0,
            r.useEffect)( () => {
                let e = e => {
                    w.current && !w.current.contains(e.target) && h(!1)
                }
                ;
                return document.addEventListener("mousedown", e),
                () => document.removeEventListener("mousedown", e)
            }
            , []),
            y) ? null : (0,
            a.jsxs)("div", {
                ref: w,
                className: "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ".concat(b ? "opacity-100" : "opacity-0", " ").concat(x ? "translate-y-0" : "-translate-y-full", " ").concat(d || N.current > 10 ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"),
                style: {
                    transition: "opacity 0.5s, transform 0.5s"
                },
                children: [(0,
                a.jsx)("div", {
                    className: "container mx-auto px-4",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between h-16",
                        children: [(0,
                        a.jsx)(u(), {
                            href: "/",
                            className: "flex items-center space-x-2",
                            children: (0,
                            a.jsx)(m.default, {
                                src: "/logo.png",
                                alt: "SATHAK  A  THON Logo",
                                width: 100,
                                height: 40,
                                className: "h-20 w-auto"
                            })
                        }), (0,
                        a.jsxs)("nav", {
                            className: "hidden md:flex items-center space-x-6",
                            children: [t.map(e => (0,
                            a.jsxs)("button", {
                                onClick: () => s(e.id),
                                className: "text-sm transition-all duration-300 relative group ".concat(v === e.id ? "text-white font-medium" : "text-gray-400 hover:text-white"),
                                children: [e.label, (0,
                                a.jsx)("span", {
                                    className: "absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ".concat(v === e.id ? "scale-x-100" : "")
                                })]
                            }, e.id)), (0,
                            a.jsxs)(u(), {
                                href: "/shortlisted",
                                className: "text-sm text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center",
                                children: [(0,
                                a.jsx)(n.A, {
                                    className: "mr-1 h-3 w-3"
                                }), " Shortlisted Teams", (0,
                                a.jsx)("span", {
                                    className: "absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                })]
                            }), (0,
                            a.jsxs)(l.$, {
                                size: "sm",
                                className: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white ml-4",
                                onClick: () => window.location.href = "https://forms.gle/3qSGGBHraNnFNEsq9",
                                children: ["Register ", (0,
                                a.jsx)(o.A, {
                                    className: "ml-2 h-3 w-3"
                                })]
                            })]
                        }), (0,
                        a.jsx)("button", {
                            className: "md:hidden text-white p-2 rounded-md hover:bg-gray-800/50 transition-colors",
                            onClick: () => h(!d),
                            "aria-label": d ? "Close menu" : "Open menu",
                            children: d ? (0,
                            a.jsx)(i.A, {
                                className: "h-5 w-5"
                            }) : (0,
                            a.jsx)(c.A, {
                                className: "h-5 w-5"
                            })
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "md:hidden overflow-hidden transition-all duration-500 ease-in-out ".concat(d ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"),
                    children: (0,
                    a.jsx)("div", {
                        className: "bg-black/95 backdrop-blur-lg px-4 py-5 border-t border-gray-800/50",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col space-y-4",
                            children: [t.map(e => (0,
                            a.jsx)("button", {
                                onClick: () => {
                                    s(e.id),
                                    h(!1)
                                }
                                ,
                                className: "text-left px-3 py-2 rounded-md transition-colors ".concat(v === e.id ? "bg-gray-800/50 text-white font-medium" : "text-gray-400 hover:bg-gray-800/30 hover:text-white"),
                                children: e.label
                            }, e.id)), (0,
                            a.jsxs)(u(), {
                                href: "/shortlisted",
                                className: "flex items-center px-3 py-2 rounded-md transition-colors text-gray-400 hover:bg-gray-800/30 hover:text-white",
                                onClick: () => h(!1),
                                children: [(0,
                                a.jsx)(n.A, {
                                    className: "mr-2 h-4 w-4"
                                }), " Shortlisted Teams"]
                            }), (0,
                            a.jsx)("div", {
                                className: "pt-2 mt-2 border-t border-gray-800/50",
                                children: (0,
                                a.jsxs)(l.$, {
                                    size: "sm",
                                    className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
                                    onClick: () => window.location.href = "https://forms.gle/3qSGGBHraNnFNEsq9",
                                    children: ["Register ", (0,
                                    a.jsx)(o.A, {
                                        className: "ml-2 h-3 w-3"
                                    })]
                                })
                            })]
                        })
                    })
                })]
            })
        }
    }
    ,
    3651: (e, t, s) => {
        s.d(t, {
            B: () => o
        });
        var a = s(5155)
          , r = s(2115)
          , l = s(712)
          , n = s(989);
        function o() {
            let e = (0,
            r.useCallback)(async e => {
                await (0,
                n.m)(e)
            }
            , []);
            return (0,
            a.jsx)(l.A, {
                id: "tsparticles",
                init: e,
                className: "absolute inset-0",
                options: {
                    background: {
                        color: {
                            value: "transparent"
                        }
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: ["#ffffff", "#888888", "#555555"]
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: !0,
                            opacity: .2,
                            width: 1
                        },
                        move: {
                            direction: "none",
                            enable: !0,
                            outModes: {
                                default: "bounce"
                            },
                            random: !0,
                            speed: .5,
                            straight: !1
                        },
                        number: {
                            density: {
                                enable: !0,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: .5,
                            random: !0,
                            anim: {
                                enable: !0,
                                speed: .5,
                                opacity_min: .1,
                                sync: !1
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 3
                            },
                            random: !0
                        }
                    },
                    detectRetina: !0
                }
            })
        }
    }
    ,
    4085: (e, t, s) => {
        s.d(t, {
            $: () => c
        });
        var a = s(5155)
          , r = s(2115)
          , l = s(1290)
          , n = s(1027)
          , o = s(9602);
        let i = (0,
        n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , c = r.forwardRef( (e, t) => {
            let {className: s, variant: r, size: n, asChild: c=!1, ...d} = e
              , u = c ? l.DX : "button";
            return (0,
            a.jsx)(u, {
                className: (0,
                o.cn)(i({
                    variant: r,
                    size: n,
                    className: s
                })),
                ref: t,
                ...d
            })
        }
        );
        c.displayName = "Button"
    }
    ,
    9602: (e, t, s) => {
        s.d(t, {
            cn: () => l
        });
        var a = s(3463)
          , r = s(9795);
        function l() {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            return (0,
            r.QP)((0,
            a.$)(t))
        }
    }
}]);
