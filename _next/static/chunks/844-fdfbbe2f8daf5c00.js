"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[844], {
    7401: (e, t, i) => {
        i.d(t, {
            A: () => l
        });
        var s = i(2115);
        let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , n = function() {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            return t.filter( (e, t, i) => !!e && "" !== e.trim() && i.indexOf(e) === t).join(" ").trim()
        };
        var r = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let a = (0,
        s.forwardRef)( (e, t) => {
            let {color: i="currentColor", size: o=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: c="", children: d, iconNode: h, ...u} = e;
            return (0,
            s.createElement)("svg", {
                ref: t,
                ...r,
                width: o,
                height: o,
                stroke: i,
                strokeWidth: l ? 24 * Number(a) / Number(o) : a,
                className: n("lucide", c),
                ...u
            }, [...h.map(e => {
                let[t,i] = e;
                return (0,
                s.createElement)(t, i)
            }
            ), ...Array.isArray(d) ? d : [d]])
        }
        )
          , l = (e, t) => {
            let i = (0,
            s.forwardRef)( (i, r) => {
                let {className: l, ...c} = i;
                return (0,
                s.createElement)(a, {
                    ref: r,
                    iconNode: t,
                    className: n("lucide-".concat(o(e)), l),
                    ...c
                })
            }
            );
            return i.displayName = "".concat(e),
            i
        }
    }
    ,
    6710: (e, t, i) => {
        i.d(t, {
            A: () => s
        });
        let s = (0,
        i(7401).A)("Menu", [["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]])
    }
    ,
    6165: (e, t, i) => {
        i.d(t, {
            A: () => s
        });
        let s = (0,
        i(7401).A)("Rocket", [["path", {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }], ["path", {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }], ["path", {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }], ["path", {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }]])
    }
    ,
    7819: (e, t, i) => {
        i.d(t, {
            A: () => s
        });
        let s = (0,
        i(7401).A)("Trophy", [["path", {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }], ["path", {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }], ["path", {
            d: "M4 22h16",
            key: "57wxv0"
        }], ["path", {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }], ["path", {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }], ["path", {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }]])
    }
    ,
    767: (e, t, i) => {
        i.d(t, {
            A: () => s
        });
        let s = (0,
        i(7401).A)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]])
    }
    ,
    5565: (e, t, i) => {
        i.d(t, {
            default: () => o.a
        });
        var s = i(4146)
          , o = i.n(s)
    }
    ,
    8173: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return m
            }
        });
        let s = i(306)
          , o = i(5155)
          , n = s._(i(2115))
          , r = i(180)
          , a = i(1394)
          , l = i(4116)
          , c = i(4445)
          , d = i(5353)
          , h = i(2170)
          , u = i(9544);
        function p(e, t, i) {
            "undefined" != typeof window && (async () => e.prefetch(t, i))().catch(e => {}
            )
        }
        function f(e) {
            return "string" == typeof e ? e : (0,
            r.formatUrl)(e)
        }
        i(2363);
        let m = n.default.forwardRef(function(e, t) {
            let i, s;
            let {href: r, as: m, children: g, prefetch: y=null, passHref: v, replace: b, shallow: w, scroll: x, onClick: _, onMouseEnter: k, onTouchStart: z, legacyBehavior: M=!1, ...C} = e;
            i = g,
            M && ("string" == typeof i || "number" == typeof i) && (i = (0,
            o.jsx)("a", {
                children: i
            }));
            let P = n.default.useContext(a.AppRouterContext)
              , O = !1 !== y
              , S = null === y ? c.PrefetchKind.AUTO : c.PrefetchKind.FULL
              , {href: T, as: E} = n.default.useMemo( () => {
                let e = f(r);
                return {
                    href: e,
                    as: m ? f(m) : e
                }
            }
            , [r, m])
              , I = n.default.useRef(T)
              , R = n.default.useRef(E);
            M && (s = n.default.Children.only(i));
            let D = M ? s && "object" == typeof s && s.ref : t
              , [A,L,j] = (0,
            l.useIntersection)({
                rootMargin: "200px"
            })
              , V = n.default.useCallback(e => {
                (R.current !== E || I.current !== T) && (j(),
                R.current = E,
                I.current = T),
                A(e)
            }
            , [E, T, j, A])
              , G = (0,
            d.useMergedRef)(V, D);
            n.default.useEffect( () => {
                P && L && O && p(P, T, {
                    kind: S
                })
            }
            , [E, T, L, O, P, S]);
            let B = {
                ref: G,
                onClick(e) {
                    M || "function" != typeof _ || _(e),
                    M && s.props && "function" == typeof s.props.onClick && s.props.onClick(e),
                    P && !e.defaultPrevented && function(e, t, i, s, o, r, a) {
                        let {nodeName: l} = e.currentTarget;
                        "A" === l.toUpperCase() && function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || (e.preventDefault(),
                        n.default.startTransition( () => {
                            let e = null == a || a;
                            "beforePopState"in t ? t[o ? "replace" : "push"](i, s, {
                                shallow: r,
                                scroll: e
                            }) : t[o ? "replace" : "push"](s || i, {
                                scroll: e
                            })
                        }
                        ))
                    }(e, P, T, E, b, w, x)
                },
                onMouseEnter(e) {
                    M || "function" != typeof k || k(e),
                    M && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(e),
                    P && O && p(P, T, {
                        kind: S
                    })
                },
                onTouchStart: function(e) {
                    M || "function" != typeof z || z(e),
                    M && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(e),
                    P && O && p(P, T, {
                        kind: S
                    })
                }
            };
            return (0,
            h.isAbsoluteUrl)(E) ? B.href = E : M && !v && ("a" !== s.type || "href"in s.props) || (B.href = (0,
            u.addBasePath)(E)),
            M ? n.default.cloneElement(s, B) : (0,
            o.jsx)("a", {
                ...C,
                ...B,
                children: i
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    7970: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return w
            }
        });
        let s = i(306)
          , o = i(9955)
          , n = i(5155)
          , r = o._(i(2115))
          , a = s._(i(7650))
          , l = s._(i(6107))
          , c = i(666)
          , d = i(1159)
          , h = i(3621);
        i(2363);
        let u = i(3576)
          , p = s._(i(5514))
          , f = i(5353)
          , m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };
        function g(e, t, i, s, o, n, r) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && o(!0),
                    null == i ? void 0 : i.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let s = !1
                          , o = !1;
                        i.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => s,
                            isPropagationStopped: () => o,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                s = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == s ? void 0 : s.current) && s.current(e)
                }
            }
            ))
        }
        function y(e) {
            return r.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0,
        r.forwardRef)( (e, t) => {
            let {src: i, srcSet: s, sizes: o, height: a, width: l, decoding: c, className: d, style: h, fetchPriority: u, placeholder: p, loading: m, unoptimized: v, fill: b, onLoadRef: w, onLoadingCompleteRef: x, setBlurComplete: _, setShowAltText: k, sizesInput: z, onLoad: M, onError: C, ...P} = e
              , O = (0,
            r.useCallback)(e => {
                e && (C && (e.src = e.src),
                e.complete && g(e, p, w, x, _, v, z))
            }
            , [i, p, w, x, _, C, v, z])
              , S = (0,
            f.useMergedRef)(t, O);
            return (0,
            n.jsx)("img", {
                ...P,
                ...y(u),
                loading: m,
                width: l,
                height: a,
                decoding: c,
                "data-nimg": b ? "fill" : "1",
                className: d,
                style: h,
                sizes: o,
                srcSet: s,
                src: i,
                ref: S,
                onLoad: e => {
                    g(e.currentTarget, p, w, x, _, v, z)
                }
                ,
                onError: e => {
                    k(!0),
                    "empty" !== p && _(!0),
                    C && C(e)
                }
            })
        }
        );
        function b(e) {
            let {isAppRouter: t, imgAttributes: i} = e
              , s = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy,
                ...y(i.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(i.src, s),
            null) : (0,
            n.jsx)(l.default, {
                children: (0,
                n.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...s
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }
        let w = (0,
        r.forwardRef)( (e, t) => {
            let i = (0,
            r.useContext)(u.RouterContext)
              , s = (0,
            r.useContext)(h.ImageConfigContext)
              , o = (0,
            r.useMemo)( () => {
                let e = m || s || d.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , i = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: i
                }
            }
            , [s])
              , {onLoad: a, onLoadingComplete: l} = e
              , f = (0,
            r.useRef)(a);
            (0,
            r.useEffect)( () => {
                f.current = a
            }
            , [a]);
            let g = (0,
            r.useRef)(l);
            (0,
            r.useEffect)( () => {
                g.current = l
            }
            , [l]);
            let[y,w] = (0,
            r.useState)(!1)
              , [x,_] = (0,
            r.useState)(!1)
              , {props: k, meta: z} = (0,
            c.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: o,
                blurComplete: y,
                showAltText: x
            });
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(v, {
                    ...k,
                    unoptimized: z.unoptimized,
                    placeholder: z.placeholder,
                    fill: z.fill,
                    onLoadRef: f,
                    onLoadingCompleteRef: g,
                    setBlurComplete: w,
                    setShowAltText: _,
                    sizesInput: e.sizes,
                    ref: t
                }), z.priority ? (0,
                n.jsx)(b, {
                    isAppRouter: !i,
                    imgAttributes: k
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    8571: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            cancelIdleCallback: function() {
                return s
            },
            requestIdleCallback: function() {
                return i
            }
        });
        let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
          , s = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        }
        ;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    4116: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let s = i(2115)
          , o = i(8571)
          , n = "function" == typeof IntersectionObserver
          , r = new Map
          , a = [];
        function l(e) {
            let {rootRef: t, rootMargin: i, disabled: l} = e
              , c = l || !n
              , [d,h] = (0,
            s.useState)(!1)
              , u = (0,
            s.useRef)(null)
              , p = (0,
            s.useCallback)(e => {
                u.current = e
            }
            , []);
            return (0,
            s.useEffect)( () => {
                if (n) {
                    if (c || d)
                        return;
                    let e = u.current;
                    if (e && e.tagName)
                        return function(e, t, i) {
                            let {id: s, observer: o, elements: n} = function(e) {
                                let t;
                                let i = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , s = a.find(e => e.root === i.root && e.margin === i.margin);
                                if (s && (t = r.get(s)))
                                    return t;
                                let o = new Map;
                                return t = {
                                    id: i,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target)
                                              , i = e.isIntersecting || e.intersectionRatio > 0;
                                            t && i && t(i)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: o
                                },
                                a.push(i),
                                r.set(i, t),
                                t
                            }(i);
                            return n.set(e, t),
                            o.observe(e),
                            function() {
                                if (n.delete(e),
                                o.unobserve(e),
                                0 === n.size) {
                                    o.disconnect(),
                                    r.delete(s);
                                    let e = a.findIndex(e => e.root === s.root && e.margin === s.margin);
                                    e > -1 && a.splice(e, 1)
                                }
                            }
                        }(e, e => e && h(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: i
                        })
                } else if (!d) {
                    let e = (0,
                    o.requestIdleCallback)( () => h(!0));
                    return () => (0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [c, i, t, d, u.current]),
            [p, d, (0,
            s.useCallback)( () => {
                h(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    5353: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let s = i(2115);
        function o(e, t) {
            let i = (0,
            s.useRef)( () => {}
            )
              , o = (0,
            s.useRef)( () => {}
            );
            return (0,
            s.useMemo)( () => e && t ? s => {
                null === s ? (i.current(),
                o.current()) : (i.current = n(e, s),
                o.current = n(t, s))
            }
            : e || t, [e, t])
        }
        function n(e, t) {
            if ("function" != typeof e)
                return e.current = t,
                () => {
                    e.current = null
                }
                ;
            {
                let i = e(t);
                return "function" == typeof i ? i : () => e(null)
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    3003: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let s = i(306)._(i(2115)).default.createContext({})
    }
    ,
    675: (e, t) => {
        function i(e) {
            let {ampFirst: t=!1, hybrid: i=!1, hasQuery: s=!1} = void 0 === e ? {} : e;
            return t || i && s
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    }
    ,
    666: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        i(2363);
        let s = i(5859)
          , o = i(1159);
        function n(e) {
            return void 0 !== e.default
        }
        function r(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function a(e, t) {
            var i;
            let a, l, c, {src: d, sizes: h, unoptimized: u=!1, priority: p=!1, loading: f, className: m, quality: g, width: y, height: v, fill: b=!1, style: w, overrideSrc: x, onLoad: _, onLoadingComplete: k, placeholder: z="empty", blurDataURL: M, fetchPriority: C, decoding: P="async", layout: O, objectFit: S, objectPosition: T, lazyBoundary: E, lazyRoot: I, ...R} = e, {imgConf: D, showAltText: A, blurComplete: L, defaultLoader: j} = t, V = D || o.imageConfigDefault;
            if ("allSizes"in V)
                a = V;
            else {
                let e = [...V.deviceSizes, ...V.imageSizes].sort( (e, t) => e - t)
                  , t = V.deviceSizes.sort( (e, t) => e - t);
                a = {
                    ...V,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            if (void 0 === j)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let G = R.loader || j;
            delete R.loader,
            delete R.srcSet;
            let B = "__next_img_default"in G;
            if (B) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = G;
                G = t => {
                    let {config: i, ...s} = t;
                    return e(s)
                }
            }
            if (O) {
                "fill" === O && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[O];
                e && (w = {
                    ...w,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[O];
                t && !h && (h = t)
            }
            let q = ""
              , F = r(y)
              , U = r(v);
            if ((i = d) && "object" == typeof i && (n(i) || void 0 !== i.src)) {
                let e = n(d) ? d.default : d;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                c = e.blurHeight,
                M = M || e.blurDataURL,
                q = e.src,
                !b) {
                    if (F || U) {
                        if (F && !U) {
                            let t = F / e.width;
                            U = Math.round(e.height * t)
                        } else if (!F && U) {
                            let t = U / e.height;
                            F = Math.round(e.width * t)
                        }
                    } else
                        F = e.width,
                        U = e.height
                }
            }
            let W = !p && ("lazy" === f || void 0 === f);
            (!(d = "string" == typeof d ? d : q) || d.startsWith("data:") || d.startsWith("blob:")) && (u = !0,
            W = !1),
            a.unoptimized && (u = !0),
            B && !a.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (u = !0);
            let N = r(g)
              , H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: T
            } : {}, A ? {} : {
                color: "transparent"
            }, w)
              , $ = L || "empty" === z ? null : "blur" === z ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            s.getImageBlurSvg)({
                widthInt: F,
                heightInt: U,
                blurWidth: l,
                blurHeight: c,
                blurDataURL: M || "",
                objectFit: H.objectFit
            }) + '")' : 'url("' + z + '")'
              , Y = $ ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: $
            } : {}
              , J = function(e) {
                let {config: t, src: i, unoptimized: s, width: o, quality: n, sizes: r, loader: a} = e;
                if (s)
                    return {
                        src: i,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: c} = function(e, t, i) {
                    let {deviceSizes: s, allSizes: o} = e;
                    if (i) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let s; s = e.exec(i); s)
                            t.push(parseInt(s[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t => t >= s[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: s,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                        kind: "x"
                    }
                }(t, o, r)
                  , d = l.length - 1;
                return {
                    sizes: r || "w" !== c ? r : "100vw",
                    srcSet: l.map( (e, s) => a({
                        config: t,
                        src: i,
                        quality: n,
                        width: e
                    }) + " " + ("w" === c ? e : s + 1) + c).join(", "),
                    src: a({
                        config: t,
                        src: i,
                        quality: n,
                        width: l[d]
                    })
                }
            }({
                config: a,
                src: d,
                unoptimized: u,
                width: F,
                quality: N,
                sizes: h,
                loader: G
            });
            return {
                props: {
                    ...R,
                    loading: W ? "lazy" : f,
                    fetchPriority: C,
                    width: F,
                    height: U,
                    decoding: P,
                    className: m,
                    style: {
                        ...H,
                        ...Y
                    },
                    sizes: J.sizes,
                    srcSet: J.srcSet,
                    src: x || J.src
                },
                meta: {
                    unoptimized: u,
                    priority: p,
                    placeholder: z,
                    fill: b
                }
            }
        }
    }
    ,
    6107: (e, t, i) => {
        var s = i(2818);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            default: function() {
                return g
            },
            defaultHead: function() {
                return u
            }
        });
        let o = i(306)
          , n = i(9955)
          , r = i(5155)
          , a = n._(i(2115))
          , l = o._(i(1172))
          , c = i(3003)
          , d = i(1147)
          , h = i(675);
        function u(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            r.jsx)("meta", {
                charSet: "utf-8"
            }, "charset")];
            return e || t.push((0,
            r.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")),
            t
        }
        function p(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        i(2363);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(e, t) {
            let {inAmpMode: i} = t;
            return e.reduce(p, []).reverse().concat(u(i).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , i = new Set
                  , s = {};
                return o => {
                    let n = !0
                      , r = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        r = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? n = !1 : e.add(t)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? n = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (let e = 0, t = f.length; e < t; e++) {
                            let t = f[e];
                            if (o.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    i.has(t) ? n = !1 : i.add(t);
                                else {
                                    let e = o.props[t]
                                      , i = s[t] || new Set;
                                    ("name" !== t || !r) && i.has(e) ? n = !1 : (i.add(e),
                                    s[t] = i)
                                }
                            }
                        }
                    }
                    return n
                }
            }()).reverse().map( (e, t) => {
                let o = e.key || t;
                if (s.env.__NEXT_OPTIMIZE_FONTS && !i && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    a.default.cloneElement(e, t)
                }
                return a.default.cloneElement(e, {
                    key: o
                })
            }
            )
        }
        let g = function(e) {
            let {children: t} = e
              , i = (0,
            a.useContext)(c.AmpStateContext)
              , s = (0,
            a.useContext)(d.HeadManagerContext);
            return (0,
            r.jsx)(l.default, {
                reduceComponentsToState: m,
                headManager: s,
                inAmpMode: (0,
                h.isInAmpMode)(i),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    5859: (e, t) => {
        function i(e) {
            let {widthInt: t, heightInt: i, blurWidth: s, blurHeight: o, blurDataURL: n, objectFit: r} = e
              , a = s ? 40 * s : t
              , l = o ? 40 * o : i
              , c = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === r ? "xMidYMid" : "cover" === r ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + n + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    }
    ,
    3621: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let s = i(306)._(i(2115))
          , o = i(1159)
          , n = s.default.createContext(o.imageConfigDefault)
    }
    ,
    1159: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            VALID_LOADERS: function() {
                return i
            },
            imageConfigDefault: function() {
                return s
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , s = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            unoptimized: !1
        }
    }
    ,
    4146: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let s = i(306)
          , o = i(666)
          , n = i(7970)
          , r = s._(i(5514));
        function a(e) {
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: r.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let[e,i] of Object.entries(t))
                void 0 === i && delete t[e];
            return {
                props: t
            }
        }
        let l = n.Image
    }
    ,
    5514: (e, t) => {
        function i(e) {
            let {config: t, src: i, width: s, quality: o} = e;
            return t.path + "?url=" + encodeURIComponent(i) + "&w=" + s + "&q=" + (o || 75) + (i.startsWith("/_next/static/media/"),
            "")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return s
            }
        }),
        i.__next_img_default = !0;
        let s = i
    }
    ,
    3576: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let s = i(306)._(i(2115)).default.createContext(null)
    }
    ,
    180: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            formatUrl: function() {
                return n
            },
            formatWithValidation: function() {
                return a
            },
            urlObjectKeys: function() {
                return r
            }
        });
        let s = i(9955)._(i(4156))
          , o = /https?|ftp|gopher|file/;
        function n(e) {
            let {auth: t, hostname: i} = e
              , n = e.protocol || ""
              , r = e.pathname || ""
              , a = e.hash || ""
              , l = e.query || ""
              , c = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
            e.host ? c = t + e.host : i && (c = t + (~i.indexOf(":") ? "[" + i + "]" : i),
            e.port && (c += ":" + e.port)),
            l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l)));
            let d = e.search || l && "?" + l || "";
            return n && !n.endsWith(":") && (n += ":"),
            e.slashes || (!n || o.test(n)) && !1 !== c ? (c = "//" + (c || ""),
            r && "/" !== r[0] && (r = "/" + r)) : c || (c = ""),
            a && "#" !== a[0] && (a = "#" + a),
            d && "?" !== d[0] && (d = "?" + d),
            "" + n + c + (r = r.replace(/[?#]/g, encodeURIComponent)) + (d = d.replace("#", "%23")) + a
        }
        let r = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(e) {
            return n(e)
        }
    }
    ,
    4156: (e, t) => {
        function i(e) {
            let t = {};
            return e.forEach( (e, i) => {
                void 0 === t[i] ? t[i] = e : Array.isArray(t[i]) ? t[i].push(e) : t[i] = [t[i], e]
            }
            ),
            t
        }
        function s(e) {
            return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function o(e) {
            let t = new URLSearchParams;
            return Object.entries(e).forEach(e => {
                let[i,o] = e;
                Array.isArray(o) ? o.forEach(e => t.append(i, s(e))) : t.set(i, s(o))
            }
            ),
            t
        }
        function n(e) {
            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
                i[s - 1] = arguments[s];
            return i.forEach(t => {
                Array.from(t.keys()).forEach(t => e.delete(t)),
                t.forEach( (t, i) => e.append(i, t))
            }
            ),
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            assign: function() {
                return n
            },
            searchParamsToUrlQuery: function() {
                return i
            },
            urlQueryToSearchParams: function() {
                return o
            }
        })
    }
    ,
    1172: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let s = i(2115)
          , o = "undefined" == typeof window
          , n = o ? () => {}
        : s.useLayoutEffect
          , r = o ? () => {}
        : s.useEffect;
        function a(e) {
            let {headManager: t, reduceComponentsToState: i} = e;
            function a() {
                if (t && t.mountedInstances) {
                    let o = s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(i(o, e))
                }
            }
            if (o) {
                var l;
                null == t || null == (l = t.mountedInstances) || l.add(e.children),
                a()
            }
            return n( () => {
                var i;
                return null == t || null == (i = t.mountedInstances) || i.add(e.children),
                () => {
                    var i;
                    null == t || null == (i = t.mountedInstances) || i.delete(e.children)
                }
            }
            ),
            n( () => (t && (t._pendingUpdate = a),
            () => {
                t && (t._pendingUpdate = a)
            }
            )),
            r( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    }
    ,
    2170: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            DecodeError: function() {
                return f
            },
            MiddlewareNotFoundError: function() {
                return v
            },
            MissingStaticPage: function() {
                return y
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return u
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return i
            },
            execOnce: function() {
                return s
            },
            getDisplayName: function() {
                return l
            },
            getLocationOrigin: function() {
                return r
            },
            getURL: function() {
                return a
            },
            isAbsoluteUrl: function() {
                return n
            },
            isResSent: function() {
                return c
            },
            loadGetInitialProps: function() {
                return h
            },
            normalizeRepeatedSlashes: function() {
                return d
            },
            stringifyError: function() {
                return b
            }
        });
        let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function s(e) {
            let t, i = !1;
            return function() {
                for (var s = arguments.length, o = Array(s), n = 0; n < s; n++)
                    o[n] = arguments[n];
                return i || (i = !0,
                t = e(...o)),
                t
            }
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , n = e => o.test(e);
        function r() {
            let {protocol: e, hostname: t, port: i} = window.location;
            return e + "//" + t + (i ? ":" + i : "")
        }
        function a() {
            let {href: e} = window.location
              , t = r();
            return e.substring(t.length)
        }
        function l(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }
        function c(e) {
            return e.finished || e.headersSent
        }
        function d(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        }
        async function h(e, t) {
            let i = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps)
                return t.ctx && t.Component ? {
                    pageProps: await h(t.Component, t.ctx)
                } : {};
            let s = await e.getInitialProps(t);
            if (i && c(i))
                return s;
            if (!s)
                throw Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + s + '" instead.');
            return s
        }
        let u = "undefined" != typeof performance
          , p = u && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class f extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(e) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + e
            }
        }
        class y extends Error {
            constructor(e, t) {
                super(),
                this.message = "Failed to load static file for page: " + e + " " + t
            }
        }
        class v extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function b(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    }
    ,
    712: (e, t, i) => {
        i.d(t, {
            A: () => c
        });
        var s = i(2115)
          , o = i(9090);
        let n = e => "object" == typeof e && null !== e;
        function r(e, t, i= () => !1) {
            if (!n(e) || !n(t))
                return e === t;
            let s = Object.keys(e).filter(e => !i(e))
              , o = Object.keys(t).filter(e => !i(e));
            if (s.length !== o.length)
                return !1;
            for (let o of s) {
                let s = e[o]
                  , a = t[o];
                if (n(s) && n(a)) {
                    if (s === t && a === e)
                        continue;
                    if (!r(s, a, i))
                        return !1
                } else if (Array.isArray(s) && Array.isArray(a)) {
                    if (!function e(t, i, s) {
                        if (t.length !== i.length)
                            return !1;
                        for (let o = 0; o < t.length; o++) {
                            let a = t[o]
                              , l = i[o];
                            if (Array.isArray(a) && Array.isArray(l)) {
                                if (!e(a, l, s))
                                    return !1
                            } else if (n(a) && n(l)) {
                                if (!r(a, l, s))
                                    return !1
                            } else if (a !== l)
                                return !1
                        }
                        return !0
                    }(s, a, i))
                        return !1
                } else if (s !== a)
                    return !1
            }
            return !0
        }
        let a = "tsparticles";
        class l extends s.Component {
            constructor(e) {
                super(e),
                this.state = {
                    init: !1,
                    library: void 0
                }
            }
            destroy() {
                this.state.library && (this.state.library.destroy(),
                this.setState({
                    library: void 0
                }))
            }
            shouldComponentUpdate(e) {
                let t = e.options ?? e.params
                  , i = this.props.options ?? this.props.params;
                return e.url !== this.props.url || e.id !== this.props.id || e.canvasClassName !== this.props.canvasClassName || e.className !== this.props.className || e.height !== this.props.height || e.width !== this.props.width || !r(e.style, this.props.style) || e.init !== this.props.init || e.loaded !== this.props.loaded || !r(t, i, e => e.startsWith("_"))
            }
            componentDidUpdate() {
                this.refresh()
            }
            forceUpdate() {
                this.refresh().then( () => {
                    super.forceUpdate()
                }
                )
            }
            componentDidMount() {
                (async () => {
                    this.props.init && await this.props.init(o.$k),
                    this.setState({
                        init: !0
                    }, async () => {
                        await this.loadParticles()
                    }
                    )
                }
                )()
            }
            componentWillUnmount() {
                this.destroy()
            }
            render() {
                let {width: e, height: t, className: i, canvasClassName: o, id: n} = this.props;
                return s.createElement("div", {
                    className: i,
                    id: n
                }, s.createElement("canvas", {
                    className: o,
                    style: {
                        ...this.props.style,
                        width: e,
                        height: t
                    }
                }))
            }
            async refresh() {
                this.destroy(),
                await this.loadParticles()
            }
            async loadParticles() {
                if (!this.state.init)
                    return;
                let e = this.props.id ?? l.defaultProps.id ?? a
                  , t = await o.$k.load({
                    url: this.props.url,
                    id: e,
                    options: this.props.options ?? this.props.params
                });
                this.props.container && (this.props.container.current = t),
                this.setState({
                    library: t
                }),
                this.props.loaded && await this.props.loaded(t)
            }
        }
        l.defaultProps = {
            width: "100%",
            height: "100%",
            options: {},
            style: {},
            url: void 0,
            id: a
        };
        let c = l
    }
    ,
    2286: (e, t, i) => {
        i.d(t, {
            j: () => r
        });
        var s = i(1595)
          , o = i(2835)
          , n = i(8524);
        class r extends s.Q {
            constructor(e, t, i) {
                super(e, t),
                this.radius = i
            }
            contains(e) {
                return (0,
                n.Yf)(e, this.position) <= this.radius
            }
            intersects(e) {
                let t = this.position
                  , i = e.position
                  , s = {
                    x: Math.abs(i.x - t.x),
                    y: Math.abs(i.y - t.y)
                }
                  , n = this.radius;
                if (e instanceof r)
                    return n + e.radius > Math.sqrt(s.x ** 2 + s.y ** 2);
                if (e instanceof o.M) {
                    let {width: t, height: i} = e.size;
                    return Math.pow(s.x - t, 2) + Math.pow(s.y - i, 2) <= n ** 2 || s.x <= n + t && s.y <= n + i || s.x <= t || s.y <= i
                }
                return !1
            }
        }
    }
    ,
    5739: (e, t, i) => {
        i.d(t, {
            Bp: () => d,
            DG: () => h,
            G3: () => u,
            NF: () => p,
            Rb: () => l,
            Z0: () => r,
            dI: () => m,
            eb: () => s,
            ms: () => o,
            nK: () => f,
            s7: () => c,
            sf: () => a,
            vo: () => n
        });
        let s = "generated"
          , o = "pointerdown"
          , n = "pointerup"
          , r = "pointerleave"
          , a = "pointerout"
          , l = "pointermove"
          , c = "touchstart"
          , d = "touchend"
          , h = "touchmove"
          , u = "touchcancel"
          , p = "resize"
          , f = "visibilitychange"
          , m = "tsParticles - Error"
    }
    ,
    1595: (e, t, i) => {
        i.d(t, {
            Q: () => s
        });
        class s {
            constructor(e, t) {
                this.position = {
                    x: e,
                    y: t
                }
            }
        }
    }
    ,
    2835: (e, t, i) => {
        i.d(t, {
            M: () => n
        });
        var s = i(2286)
          , o = i(1595);
        class n extends o.Q {
            constructor(e, t, i, s) {
                super(e, t),
                this.size = {
                    height: s,
                    width: i
                }
            }
            contains(e) {
                let t = this.size.width
                  , i = this.size.height
                  , s = this.position;
                return e.x >= s.x && e.x <= s.x + t && e.y >= s.y && e.y <= s.y + i
            }
            intersects(e) {
                e instanceof s.j && e.intersects(this);
                let t = this.size.width
                  , i = this.size.height
                  , o = this.position
                  , r = e.position
                  , a = e instanceof n ? e.size : {
                    width: 0,
                    height: 0
                }
                  , l = a.width
                  , c = a.height;
                return r.x < o.x + t && r.x + l > o.x && r.y < o.y + i && r.y + c > o.y
            }
        }
    }
    ,
    7249: (e, t, i) => {
        i.d(t, {
            M: () => o
        });
        var s = i(1722);
        class o extends s.p {
            constructor(e, t) {
                super(e, t, 0)
            }
            static get origin() {
                return o.create(0, 0)
            }
            static clone(e) {
                return o.create(e.x, e.y)
            }
            static create(e, t) {
                return new o(e,t)
            }
        }
    }
    ,
    1722: (e, t, i) => {
        i.d(t, {
            p: () => n
        });
        var s = i(5739)
          , o = i(2927);
        class n {
            constructor(e, t, i) {
                if (this._updateFromAngle = (e, t) => {
                    this.x = Math.cos(e) * t,
                    this.y = Math.sin(e) * t
                }
                ,
                !(0,
                o.Et)(e) && e)
                    this.x = e.x,
                    this.y = e.y,
                    this.z = e.z ? e.z : 0;
                else if (void 0 !== e && void 0 !== t)
                    this.x = e,
                    this.y = t,
                    this.z = i ?? 0;
                else
                    throw Error(`${s.dI} Vector3d not initialized correctly`)
            }
            static get origin() {
                return n.create(0, 0, 0)
            }
            get angle() {
                return Math.atan2(this.y, this.x)
            }
            set angle(e) {
                this._updateFromAngle(e, this.length)
            }
            get length() {
                return Math.sqrt(this.getLengthSq())
            }
            set length(e) {
                this._updateFromAngle(this.angle, e)
            }
            static clone(e) {
                return n.create(e.x, e.y, e.z)
            }
            static create(e, t, i) {
                return new n(e,t,i)
            }
            add(e) {
                return n.create(this.x + e.x, this.y + e.y, this.z + e.z)
            }
            addTo(e) {
                this.x += e.x,
                this.y += e.y,
                this.z += e.z
            }
            copy() {
                return n.clone(this)
            }
            distanceTo(e) {
                return this.sub(e).length
            }
            distanceToSq(e) {
                return this.sub(e).getLengthSq()
            }
            div(e) {
                return n.create(this.x / e, this.y / e, this.z / e)
            }
            divTo(e) {
                this.x /= e,
                this.y /= e,
                this.z /= e
            }
            getLengthSq() {
                return this.x ** 2 + this.y ** 2
            }
            mult(e) {
                return n.create(this.x * e, this.y * e, this.z * e)
            }
            multTo(e) {
                this.x *= e,
                this.y *= e,
                this.z *= e
            }
            normalize() {
                let e = this.length;
                0 != e && this.multTo(1 / e)
            }
            rotate(e) {
                return n.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), 0)
            }
            setTo(e) {
                this.x = e.x,
                this.y = e.y,
                this.z = e.z ? e.z : 0
            }
            sub(e) {
                return n.create(this.x - e.x, this.y - e.y, this.z - e.z)
            }
            subFrom(e) {
                this.x -= e.x,
                this.y -= e.y,
                this.z -= e.z
            }
        }
    }
    ,
    7426: (e, t, i) => {
        i.d(t, {
            Q: () => n,
            p: () => o
        });
        var s = i(8524);
        class o {
            constructor() {
                this.count = 0,
                this.enable = !1,
                this.speed = 1,
                this.decay = 0,
                this.delay = 0,
                this.sync = !1
            }
            load(e) {
                e && (void 0 !== e.count && (this.count = (0,
                s.DT)(e.count)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.speed && (this.speed = (0,
                s.DT)(e.speed)),
                void 0 !== e.decay && (this.decay = (0,
                s.DT)(e.decay)),
                void 0 !== e.delay && (this.delay = (0,
                s.DT)(e.delay)),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class n extends o {
            constructor() {
                super(),
                this.mode = "auto",
                this.startValue = "random"
            }
            load(e) {
                super.load(e),
                e && (void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.startValue && (this.startValue = e.startValue))
            }
        }
    }
    ,
    6463: (e, t, i) => {
        i.d(t, {
            O: () => o
        });
        var s = i(2927);
        class o {
            constructor() {
                this.value = ""
            }
            static create(e, t) {
                let i = new o;
                return i.load(e),
                void 0 !== t && ((0,
                s.Kg)(t) || (0,
                s.cy)(t) ? i.load({
                    value: t
                }) : i.load(t)),
                i
            }
            load(e) {
                e?.value !== void 0 && (this.value = e.value)
            }
        }
    }
    ,
    755: (e, t, i) => {
        i.d(t, {
            PV: () => r
        }),
        i(7426);
        class s {
            constructor() {
                this.enable = !1,
                this.minimumValue = 0
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue))
            }
        }
        var o = i(2927)
          , n = i(8524);
        class r {
            constructor() {
                this.random = new s,
                this.value = 0
            }
            load(e) {
                e && ((0,
                o.Lm)(e.random) ? this.random.enable = e.random : this.random.load(e.random),
                void 0 !== e.value && (this.value = (0,
                n.DT)(e.value, this.random.enable ? this.random.minimumValue : void 0)))
            }
        }
    }
    ,
    6387: (e, t, i) => {
        i.d(t, {
            D4: () => n,
            IU: () => l,
            Md: () => a,
            Sn: () => r,
            V6: () => o,
            Wb: () => h,
            e_: () => d,
            p0: () => c,
            yx: () => u
        });
        var s = i(7966);
        function o(e, t, i) {
            e.beginPath(),
            e.moveTo(t.x, t.y),
            e.lineTo(i.x, i.y),
            e.closePath()
        }
        function n(e, t, i, s) {
            e.beginPath(),
            e.moveTo(t.x, t.y),
            e.lineTo(i.x, i.y),
            e.lineTo(s.x, s.y),
            e.closePath()
        }
        function r(e, t, i) {
            e.fillStyle = i ?? "rgba(0,0,0,0)",
            e.fillRect(0, 0, t.width, t.height)
        }
        function a(e, t, i, s) {
            i && (e.globalAlpha = s,
            e.drawImage(i, 0, 0, t.width, t.height),
            e.globalAlpha = 1)
        }
        function l(e, t) {
            e.clearRect(0, 0, t.width, t.height)
        }
        function c(e) {
            let {container: t, context: i, particle: o, delta: n, colorStyles: r, backgroundMask: a, composite: l, radius: c, opacity: d, shadow: h, transform: u} = e
              , p = o.getPosition()
              , f = o.rotation + (o.pathRotation ? o.velocity.angle : 0)
              , m = {
                sin: Math.sin(f),
                cos: Math.cos(f)
            }
              , g = {
                a: m.cos * (u.a ?? 1),
                b: m.sin * (u.b ?? 1),
                c: -m.sin * (u.c ?? 1),
                d: m.cos * (u.d ?? 1)
            };
            i.setTransform(g.a, g.b, g.c, g.d, p.x, p.y),
            i.beginPath(),
            a && (i.globalCompositeOperation = l);
            let y = o.shadowColor;
            h.enable && y && (i.shadowBlur = h.blur,
            i.shadowColor = (0,
            s.xx)(y),
            i.shadowOffsetX = h.offset.x,
            i.shadowOffsetY = h.offset.y),
            r.fill && (i.fillStyle = r.fill);
            let v = o.strokeWidth ?? 0;
            i.lineWidth = v,
            r.stroke && (i.strokeStyle = r.stroke),
            function(e, t, i, s, o, n) {
                if (!i.shape)
                    return;
                let r = e.drawers.get(i.shape);
                r && r.draw(t, i, s, o, n, e.retina.pixelRatio)
            }(t, i, o, c, d, n),
            v > 0 && i.stroke(),
            o.close && i.closePath(),
            o.fill && i.fill(),
            function(e, t, i, s, o, n) {
                if (!i.shape)
                    return;
                let r = e.drawers.get(i.shape);
                r && r.afterEffect && r.afterEffect(t, i, s, o, n, e.retina.pixelRatio)
            }(t, i, o, c, d, n),
            i.globalCompositeOperation = "source-over",
            i.setTransform(1, 0, 0, 1, 0, 0)
        }
        function d(e, t, i) {
            t.draw && t.draw(e, i)
        }
        function h(e, t, i, s) {
            t.drawParticle && t.drawParticle(e, i, s)
        }
        function u(e, t, i) {
            return {
                h: e.h,
                s: e.s,
                l: e.l + ("darken" === t ? -1 : 1) * i
            }
        }
    }
    ,
    7966: (e, t, i) => {
        i.d(t, {
            BN: () => c,
            EY: () => y,
            K6: () => h,
            LC: () => g,
            O_: () => w,
            PG: () => b,
            R5: () => d,
            YL: () => u,
            _h: () => v,
            a9: () => a,
            ay: () => p,
            pz: () => x,
            xx: () => m
        });
        var s = i(8524)
          , o = i(2927);
        let n = "random"
          , r = new Map;
        function a(e) {
            r.set(e.key, e)
        }
        function l(e, t, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
        }
        function c(e, t, i=!0) {
            if (!e)
                return;
            let s = (0,
            o.Kg)(e) ? {
                value: e
            } : e;
            if ((0,
            o.Kg)(s.value))
                return function e(t, i, s=!0) {
                    if (!t)
                        return;
                    let a = (0,
                    o.Kg)(t) ? {
                        value: t
                    } : t;
                    if ((0,
                    o.Kg)(a.value))
                        return a.value === n ? f() : function(e) {
                            for (let[,t] of r)
                                if (e.startsWith(t.stringPrefix))
                                    return t.parseString(e);
                            let t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (e, t, i, s, o) => t + t + i + i + s + s + (void 0 !== o ? o + o : ""))
                              , i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);
                            return i ? {
                                a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                                b: parseInt(i[3], 16),
                                g: parseInt(i[2], 16),
                                r: parseInt(i[1], 16)
                            } : void 0
                        }(a.value);
                    if ((0,
                    o.cy)(a.value))
                        return e({
                            value: (0,
                            o.Vh)(a.value, i, s)
                        });
                    for (let[,e] of r) {
                        let t = e.handleColor(a);
                        if (t)
                            return t
                    }
                }(s.value, t, i);
            if ((0,
            o.cy)(s.value))
                return c({
                    value: (0,
                    o.Vh)(s.value, t, i)
                });
            for (let[,e] of r) {
                let t = e.handleRangeColor(s);
                if (t)
                    return t
            }
        }
        function d(e, t, i=!0) {
            let s = c(e, t, i);
            return s ? h(s) : void 0
        }
        function h(e) {
            let t = e.r / 255
              , i = e.g / 255
              , s = e.b / 255
              , o = Math.max(t, i, s)
              , n = Math.min(t, i, s)
              , r = {
                h: 0,
                l: (o + n) / 2,
                s: 0
            };
            return o !== n && (r.s = r.l < .5 ? (o - n) / (o + n) : (o - n) / (2 - o - n),
            r.h = t === o ? (i - s) / (o - n) : r.h = i === o ? 2 + (s - t) / (o - n) : 4 + (t - i) / (o - n)),
            r.l *= 100,
            r.s *= 100,
            r.h *= 60,
            r.h < 0 && (r.h += 360),
            r.h >= 360 && (r.h -= 360),
            r
        }
        function u(e) {
            let t = {
                b: 0,
                g: 0,
                r: 0
            }
              , i = {
                h: e.h / 360,
                l: e.l / 100,
                s: e.s / 100
            };
            if (i.s) {
                let e = i.l < .5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s
                  , s = 2 * i.l - e;
                t.r = l(s, e, i.h + 1 / 3),
                t.g = l(s, e, i.h),
                t.b = l(s, e, i.h - 1 / 3)
            } else
                t.r = t.g = t.b = i.l;
            return t.r = Math.floor(255 * t.r),
            t.g = Math.floor(255 * t.g),
            t.b = Math.floor(255 * t.b),
            t
        }
        function p(e) {
            let t = u(e);
            return {
                a: e.a,
                b: t.b,
                g: t.g,
                r: t.r
            }
        }
        function f(e) {
            let t = e ?? 0;
            return {
                b: Math.floor((0,
                s.U4)((0,
                s.DT)(t, 256))),
                g: Math.floor((0,
                s.U4)((0,
                s.DT)(t, 256))),
                r: Math.floor((0,
                s.U4)((0,
                s.DT)(t, 256)))
            }
        }
        function m(e, t) {
            return `rgba(${e.r}, ${e.g}, ${e.b}, ${t ?? 1})`
        }
        function g(e, t) {
            return `hsla(${e.h}, ${e.s}%, ${e.l}%, ${t ?? 1})`
        }
        function y(e, t, i, o) {
            let n = e
              , r = t;
            return void 0 === n.r && (n = u(e)),
            void 0 === r.r && (r = u(t)),
            {
                b: (0,
                s.jh)(n.b, r.b, i, o),
                g: (0,
                s.jh)(n.g, r.g, i, o),
                r: (0,
                s.jh)(n.r, r.r, i, o)
            }
        }
        function v(e, t, i) {
            if (i === n)
                return f();
            if ("mid" !== i)
                return i;
            {
                let i = e.getFillColor() ?? e.getStrokeColor()
                  , s = t?.getFillColor() ?? t?.getStrokeColor();
                if (i && s && t)
                    return y(i, s, e.getRadius(), t.getRadius());
                {
                    let e = i ?? s;
                    if (e)
                        return u(e)
                }
            }
        }
        function b(e, t, i) {
            let s = (0,
            o.Kg)(e) ? e : e.value;
            return s === n ? i ? c({
                value: s
            }) : t ? n : "mid" : "mid" === s ? "mid" : c({
                value: s
            })
        }
        function w(e) {
            return void 0 !== e ? {
                h: e.h.value,
                s: e.s.value,
                l: e.l.value
            } : void 0
        }
        function x(e, t, i) {
            let s = {
                h: {
                    enable: !1,
                    value: e.h
                },
                s: {
                    enable: !1,
                    value: e.s
                },
                l: {
                    enable: !1,
                    value: e.l
                }
            };
            return t && (_(s.h, t.h, i),
            _(s.s, t.s, i),
            _(s.l, t.l, i)),
            s
        }
        function _(e, t, i) {
            e.enable = t.enable,
            e.enable ? (e.velocity = (0,
            s.VG)(t.speed) / 100 * i,
            e.decay = 1 - (0,
            s.VG)(t.decay),
            e.status = "increasing",
            e.loops = 0,
            e.maxLoops = (0,
            s.VG)(t.count),
            e.time = 0,
            e.delayTime = 1e3 * (0,
            s.VG)(t.delay),
            t.sync || (e.velocity *= (0,
            s.G0)(),
            e.value *= (0,
            s.G0)()),
            e.initialValue = e.value) : e.velocity = 0
        }
    }
    ,
    8524: (e, t, i) => {
        i.d(t, {
            $m: () => x,
            DT: () => g,
            G0: () => c,
            JY: () => w,
            M3: () => z,
            Nx: () => k,
            OW: () => _,
            Sg: () => f,
            U4: () => u,
            VG: () => p,
            W9: () => m,
            Yf: () => b,
            _W: () => y,
            il: () => l,
            jh: () => h,
            nL: () => a,
            qE: () => d,
            vr: () => v
        });
        var s = i(2927)
          , o = i(7249);
        let n = Math.random
          , r = new Map;
        function a(e, t) {
            r.get(e) || r.set(e, t)
        }
        function l(e) {
            return r.get(e) || (e => e)
        }
        function c() {
            return d(n(), 0, 1 - 1e-16)
        }
        function d(e, t, i) {
            return Math.min(Math.max(e, t), i)
        }
        function h(e, t, i, s) {
            return Math.floor((e * i + t * s) / (i + s))
        }
        function u(e) {
            let t = m(e)
              , i = f(e);
            return t === i && (i = 0),
            c() * (t - i) + i
        }
        function p(e) {
            return (0,
            s.Et)(e) ? e : u(e)
        }
        function f(e) {
            return (0,
            s.Et)(e) ? e : e.min
        }
        function m(e) {
            return (0,
            s.Et)(e) ? e : e.max
        }
        function g(e, t) {
            if (e === t || void 0 === t && (0,
            s.Et)(e))
                return e;
            let i = f(e)
              , o = m(e);
            return void 0 !== t ? {
                min: Math.min(i, t),
                max: Math.max(o, t)
            } : g(i, o)
        }
        function y(e) {
            let t = e.random
              , {enable: i, minimumValue: o} = (0,
            s.Lm)(t) ? {
                enable: t,
                minimumValue: 0
            } : t;
            return i ? p(g(e.value, o)) : p(e.value)
        }
        function v(e, t) {
            let i = e.x - t.x
              , s = e.y - t.y;
            return {
                dx: i,
                dy: s,
                distance: Math.sqrt(i ** 2 + s ** 2)
            }
        }
        function b(e, t) {
            return v(e, t).distance
        }
        function w(e, t, i) {
            if ((0,
            s.Et)(e))
                return e * Math.PI / 180;
            switch (e) {
            case "top":
                return -Math.PI / 2;
            case "top-right":
                return -Math.PI / 4;
            case "right":
                return 0;
            case "bottom-right":
                return Math.PI / 4;
            case "bottom":
                return Math.PI / 2;
            case "bottom-left":
                return 3 * Math.PI / 4;
            case "left":
                return Math.PI;
            case "top-left":
                return -3 * Math.PI / 4;
            case "inside":
                return Math.atan2(i.y - t.y, i.x - t.x);
            case "outside":
                return Math.atan2(t.y - i.y, t.x - i.x);
            default:
                return c() * Math.PI * 2
            }
        }
        function x(e) {
            let t = o.M.origin;
            return t.length = 1,
            t.angle = e,
            t
        }
        function _(e, t, i, s) {
            return o.M.create(e.x * (i - s) / (i + s) + 2 * t.x * s / (i + s), e.y)
        }
        function k(e) {
            return {
                x: e.position?.x ?? c() * e.size.width,
                y: e.position?.y ?? c() * e.size.height
            }
        }
        function z(e) {
            return e ? e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e) : 1
        }
    }
    ,
    2927: (e, t, i) => {
        i.d(t, {
            AE: () => m,
            Al: () => u,
            B9: () => l,
            E9: () => C,
            Et: () => S,
            Gv: () => E,
            Kg: () => O,
            Lm: () => P,
            NV: () => v,
            TA: () => k,
            Tg: () => b,
            Tj: () => f,
            Tn: () => T,
            U6: () => y,
            Vh: () => p,
            Xs: () => M,
            cy: () => I,
            hn: () => h,
            iK: () => g,
            jo: () => x,
            lV: () => c,
            pE: () => w,
            tG: () => d,
            tZ: () => r,
            wJ: () => _,
            zw: () => function e(t, ...i) {
                for (let s of i) {
                    if (null == s)
                        continue;
                    if (!E(s)) {
                        t = s;
                        continue
                    }
                    let i = Array.isArray(s);
                    for (let o in i && (E(t) || !t || !Array.isArray(t)) ? t = [] : !i && (E(t) || !t || Array.isArray(t)) && (t = {}),
                    s) {
                        if ("__proto__" === o)
                            continue;
                        let i = s[o]
                          , n = t;
                        n[o] = E(i) && Array.isArray(i) ? i.map(t => e(n[o], t)) : e(n[o], i)
                    }
                }
                return t
            }
        });
        var s = i(8524)
          , o = i(7249);
        let n = {
            debug: console.debug,
            error: console.error,
            info: console.info,
            log: console.log,
            verbose: console.log,
            warning: console.warn
        };
        function r() {
            return n
        }
        function a(e) {
            let t = {
                bounced: !1
            }
              , {pSide: i, pOtherSide: s, rectSide: o, rectOtherSide: n, velocity: r, factor: a} = e;
            return s.min < n.min || s.min > n.max || s.max < n.min || s.max > n.max || (i.max >= o.min && i.max <= (o.max + o.min) / 2 && r > 0 || i.min <= o.max && i.min > (o.max + o.min) / 2 && r < 0) && (t.velocity = -(r * a),
            t.bounced = !0),
            t
        }
        function l() {
            return "undefined" == typeof window || !window || void 0 === window.document || !window.document
        }
        function c(e) {
            if (!l() && "undefined" != typeof matchMedia)
                return matchMedia(e)
        }
        function d(e) {
            if (!l() && "undefined" != typeof MutationObserver)
                return new MutationObserver(e)
        }
        function h(e, t) {
            return e === t || I(t) && t.indexOf(e) > -1
        }
        async function u(e, t) {
            try {
                await document.fonts.load(`${t ?? "400"} 36px '${e ?? "Verdana"}'`)
            } catch {}
        }
        function p(e, t, i=!0) {
            return e[void 0 !== t && i ? t % e.length : Math.floor((0,
            s.G0)() * e.length)]
        }
        function f(e, t, i, s, o) {
            var n;
            let r;
            return n = m(e, s ?? 0),
            r = !0,
            o && "bottom" !== o || (r = n.top < t.height + i.x),
            r && (!o || "left" === o) && (r = n.right > i.x),
            r && (!o || "right" === o) && (r = n.left < t.width + i.y),
            r && (!o || "top" === o) && (r = n.bottom > i.y),
            r
        }
        function m(e, t) {
            return {
                bottom: e.y + t,
                left: e.x - t,
                right: e.x + t,
                top: e.y - t
            }
        }
        function g(e, t) {
            return !!z(t, t => t.enable && h(e, t.mode))
        }
        function y(e, t, i) {
            _(t, t => {
                let s = t.mode;
                t.enable && h(e, s) && _(t.selectors, e => {
                    i(e, t)
                }
                )
            }
            )
        }
        function v(e, t) {
            if (t && e)
                return z(e, e => (function(e, t) {
                    let i = _(t, t => e.matches(t));
                    return I(i) ? i.some(e => e) : i
                }
                )(t, e.selectors))
        }
        function b(e) {
            return {
                position: e.getPosition(),
                radius: e.getRadius(),
                mass: e.getMass(),
                velocity: e.velocity,
                factor: o.M.create((0,
                s._W)(e.options.bounce.horizontal), (0,
                s._W)(e.options.bounce.vertical))
            }
        }
        function w(e, t) {
            let {x: i, y: o} = e.velocity.sub(t.velocity)
              , [n,r] = [e.position, t.position]
              , {dx: a, dy: l} = (0,
            s.vr)(r, n);
            if (i * a + o * l < 0)
                return;
            let c = -Math.atan2(l, a)
              , d = e.mass
              , h = t.mass
              , u = e.velocity.rotate(c)
              , p = t.velocity.rotate(c)
              , f = (0,
            s.OW)(u, p, d, h)
              , m = (0,
            s.OW)(p, u, d, h)
              , g = f.rotate(-c)
              , y = m.rotate(-c);
            e.velocity.x = g.x * e.factor.x,
            e.velocity.y = g.y * e.factor.y,
            t.velocity.x = y.x * t.factor.x,
            t.velocity.y = y.y * t.factor.y
        }
        function x(e, t) {
            let i = m(e.getPosition(), e.getRadius())
              , o = a({
                pSide: {
                    min: i.left,
                    max: i.right
                },
                pOtherSide: {
                    min: i.top,
                    max: i.bottom
                },
                rectSide: {
                    min: t.left,
                    max: t.right
                },
                rectOtherSide: {
                    min: t.top,
                    max: t.bottom
                },
                velocity: e.velocity.x,
                factor: (0,
                s._W)(e.options.bounce.horizontal)
            });
            o.bounced && (void 0 !== o.velocity && (e.velocity.x = o.velocity),
            void 0 !== o.position && (e.position.x = o.position));
            let n = a({
                pSide: {
                    min: i.top,
                    max: i.bottom
                },
                pOtherSide: {
                    min: i.left,
                    max: i.right
                },
                rectSide: {
                    min: t.top,
                    max: t.bottom
                },
                rectOtherSide: {
                    min: t.left,
                    max: t.right
                },
                velocity: e.velocity.y,
                factor: (0,
                s._W)(e.options.bounce.vertical)
            });
            n.bounced && (void 0 !== n.velocity && (e.velocity.y = n.velocity),
            void 0 !== n.position && (e.position.y = n.position))
        }
        function _(e, t) {
            return I(e) ? e.map( (e, i) => t(e, i)) : t(e, 0)
        }
        function k(e, t, i) {
            return I(e) ? p(e, t, i) : e
        }
        function z(e, t) {
            return I(e) ? e.find( (e, i) => t(e, i)) : t(e, 0) ? e : void 0
        }
        function M(e, t) {
            let i = e.value
              , o = e.animation
              , n = {
                delayTime: 1e3 * (0,
                s.VG)(o.delay),
                enable: o.enable,
                value: (0,
                s.VG)(e.value) * t,
                max: (0,
                s.W9)(i) * t,
                min: (0,
                s.Sg)(i) * t,
                loops: 0,
                maxLoops: (0,
                s.VG)(o.count),
                time: 0
            };
            if (o.enable) {
                switch (n.decay = 1 - (0,
                s.VG)(o.decay),
                o.mode) {
                case "increase":
                    n.status = "increasing";
                    break;
                case "decrease":
                    n.status = "decreasing";
                    break;
                case "random":
                    n.status = (0,
                    s.G0)() >= .5 ? "increasing" : "decreasing"
                }
                let e = "auto" === o.mode;
                switch (o.startValue) {
                case "min":
                    n.value = n.min,
                    e && (n.status = "increasing");
                    break;
                case "max":
                    n.value = n.max,
                    e && (n.status = "decreasing");
                    break;
                default:
                    n.value = (0,
                    s.U4)(n),
                    e && (n.status = (0,
                    s.G0)() >= .5 ? "increasing" : "decreasing")
                }
            }
            return n.initialValue = n.value,
            n
        }
        function C(e, t) {
            return function(e, t) {
                if ("percent" !== e.mode) {
                    let {mode: t, ...i} = e;
                    return i
                }
                return "x"in e ? {
                    x: e.x / 100 * t.width,
                    y: e.y / 100 * t.height
                } : {
                    width: e.width / 100 * t.width,
                    height: e.height / 100 * t.height
                }
            }(e, t)
        }
        function P(e) {
            return "boolean" == typeof e
        }
        function O(e) {
            return "string" == typeof e
        }
        function S(e) {
            return "number" == typeof e
        }
        function T(e) {
            return "function" == typeof e
        }
        function E(e) {
            return "object" == typeof e && null !== e
        }
        function I(e) {
            return Array.isArray(e)
        }
    }
    ,
    9090: (e, t, i) => {
        i.d(t, {
            $k: () => ej
        });
        var s = i(5739)
          , o = i(2927)
          , n = i(6387)
          , r = i(7966);
        class a {
            constructor(e) {
                this.container = e,
                this._applyPostDrawUpdaters = e => {
                    for (let t of this._postDrawUpdaters)
                        t.afterDraw && t.afterDraw(e)
                }
                ,
                this._applyPreDrawUpdaters = (e, t, i, s, o, n) => {
                    for (let r of this._preDrawUpdaters) {
                        if (r.getColorStyles) {
                            let {fill: n, stroke: a} = r.getColorStyles(t, e, i, s);
                            n && (o.fill = n),
                            a && (o.stroke = a)
                        }
                        if (r.getTransformValues) {
                            let e = r.getTransformValues(t);
                            for (let t in e)
                                !function(e, t, i) {
                                    let s = t[i];
                                    void 0 !== s && (e[i] = (e[i] ?? 1) * s)
                                }(n, e, t)
                        }
                        r.beforeDraw && r.beforeDraw(t)
                    }
                }
                ,
                this._applyResizePlugins = () => {
                    for (let e of this._resizePlugins)
                        e.resize && e.resize()
                }
                ,
                this._getPluginParticleColors = e => {
                    let t, i;
                    for (let s of this._colorPlugins)
                        if (!t && s.particleFillColor && (t = (0,
                        r.R5)(s.particleFillColor(e))),
                        !i && s.particleStrokeColor && (i = (0,
                        r.R5)(s.particleStrokeColor(e))),
                        t && i)
                            break;
                    return [t, i]
                }
                ,
                this._initCover = () => {
                    let e = this.container.actualOptions.backgroundMask.cover
                      , t = e.color
                      , i = (0,
                    r.BN)(t);
                    if (i) {
                        let t = {
                            ...i,
                            a: e.opacity
                        };
                        this._coverColorStyle = (0,
                        r.xx)(t, t.a)
                    }
                }
                ,
                this._initStyle = () => {
                    let e = this.element
                      , t = this.container.actualOptions;
                    if (e)
                        for (let i in this._fullScreen ? (this._originalStyle = (0,
                        o.zw)({}, e.style),
                        this._setFullScreenStyle()) : this._resetOriginalStyle(),
                        t.style) {
                            if (!i || !t.style)
                                continue;
                            let s = t.style[i];
                            s && e.style.setProperty(i, s, "important")
                        }
                }
                ,
                this._initTrail = async () => {
                    let e = this.container.actualOptions
                      , t = e.particles.move.trail
                      , i = t.fill;
                    if (t.enable) {
                        if (i.color) {
                            let t = (0,
                            r.BN)(i.color);
                            if (!t)
                                return;
                            let s = e.particles.move.trail;
                            this._trailFill = {
                                color: {
                                    ...t
                                },
                                opacity: 1 / s.length
                            }
                        } else
                            await new Promise( (e, s) => {
                                if (!i.image)
                                    return;
                                let o = document.createElement("img");
                                o.addEventListener("load", () => {
                                    this._trailFill = {
                                        image: o,
                                        opacity: 1 / t.length
                                    },
                                    e()
                                }
                                ),
                                o.addEventListener("error", e => {
                                    s(e.error)
                                }
                                ),
                                o.src = i.image
                            }
                            )
                    }
                }
                ,
                this._paintBase = e => {
                    this.draw(t => (0,
                    n.Sn)(t, this.size, e))
                }
                ,
                this._paintImage = (e, t) => {
                    this.draw(i => (0,
                    n.Md)(i, this.size, e, t))
                }
                ,
                this._repairStyle = () => {
                    let e = this.element;
                    e && (this._safeMutationObserver(e => e.disconnect()),
                    this._initStyle(),
                    this.initBackground(),
                    this._safeMutationObserver(t => t.observe(e, {
                        attributes: !0
                    })))
                }
                ,
                this._resetOriginalStyle = () => {
                    let e = this.element
                      , t = this._originalStyle;
                    if (!(e && t))
                        return;
                    let i = e.style;
                    i.position = t.position,
                    i.zIndex = t.zIndex,
                    i.top = t.top,
                    i.left = t.left,
                    i.width = t.width,
                    i.height = t.height
                }
                ,
                this._safeMutationObserver = e => {
                    this._mutationObserver && e(this._mutationObserver)
                }
                ,
                this._setFullScreenStyle = () => {
                    let e = this.element;
                    if (!e)
                        return;
                    let t = "important"
                      , i = e.style;
                    i.setProperty("position", "fixed", t),
                    i.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), t),
                    i.setProperty("top", "0", t),
                    i.setProperty("left", "0", t),
                    i.setProperty("width", "100%", t),
                    i.setProperty("height", "100%", t)
                }
                ,
                this.size = {
                    height: 0,
                    width: 0
                },
                this._context = null,
                this._generated = !1,
                this._preDrawUpdaters = [],
                this._postDrawUpdaters = [],
                this._resizePlugins = [],
                this._colorPlugins = []
            }
            get _fullScreen() {
                return this.container.actualOptions.fullScreen.enable
            }
            clear() {
                let e = this.container.actualOptions
                  , t = e.particles.move.trail
                  , i = this._trailFill;
                e.backgroundMask.enable ? this.paint() : t.enable && t.length > 0 && i ? i.color ? this._paintBase((0,
                r.xx)(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : this.draw(e => {
                    (0,
                    n.IU)(e, this.size)
                }
                )
            }
            destroy() {
                if (this.stop(),
                this._generated) {
                    let e = this.element;
                    e && e.remove()
                } else
                    this._resetOriginalStyle();
                this._preDrawUpdaters = [],
                this._postDrawUpdaters = [],
                this._resizePlugins = [],
                this._colorPlugins = []
            }
            draw(e) {
                let t = this._context;
                if (t)
                    return e(t)
            }
            drawParticle(e, t) {
                if (e.spawning || e.destroyed)
                    return;
                let i = e.getRadius();
                if (i <= 0)
                    return;
                let s = e.getFillColor()
                  , o = e.getStrokeColor() ?? s
                  , [a,l] = this._getPluginParticleColors(e);
                a || (a = s),
                l || (l = o),
                (a || l) && this.draw(s => {
                    let o = this.container
                      , c = o.actualOptions
                      , d = e.options.zIndex
                      , h = (1 - e.zIndexFactor) ** d.opacityRate
                      , u = e.bubble.opacity ?? e.opacity?.value ?? 1
                      , p = e.strokeOpacity ?? u
                      , f = u * h
                      , m = {}
                      , g = {
                        fill: a ? (0,
                        r.LC)(a, f) : void 0
                    };
                    g.stroke = l ? (0,
                    r.LC)(l, p * h) : g.fill,
                    this._applyPreDrawUpdaters(s, e, i, f, g, m),
                    (0,
                    n.p0)({
                        container: o,
                        context: s,
                        particle: e,
                        delta: t,
                        colorStyles: g,
                        backgroundMask: c.backgroundMask.enable,
                        composite: c.backgroundMask.composite,
                        radius: i * (1 - e.zIndexFactor) ** d.sizeRate,
                        opacity: f,
                        shadow: e.options.shadow,
                        transform: m
                    }),
                    this._applyPostDrawUpdaters(e)
                }
                )
            }
            drawParticlePlugin(e, t, i) {
                this.draw(s => (0,
                n.Wb)(s, e, t, i))
            }
            drawPlugin(e, t) {
                this.draw(i => (0,
                n.e_)(i, e, t))
            }
            async init() {
                this._safeMutationObserver(e => e.disconnect()),
                this._mutationObserver = (0,
                o.tG)(e => {
                    for (let t of e)
                        "attributes" === t.type && "style" === t.attributeName && this._repairStyle()
                }
                ),
                this.resize(),
                this._initStyle(),
                this._initCover();
                try {
                    await this._initTrail()
                } catch (e) {
                    (0,
                    o.tZ)().error(e)
                }
                this.initBackground(),
                this._safeMutationObserver(e => {
                    this.element && e.observe(this.element, {
                        attributes: !0
                    })
                }
                ),
                this.initUpdaters(),
                this.initPlugins(),
                this.paint()
            }
            initBackground() {
                let e = this.container.actualOptions.background
                  , t = this.element;
                if (!t)
                    return;
                let i = t.style;
                if (i) {
                    if (e.color) {
                        let t = (0,
                        r.BN)(e.color);
                        i.backgroundColor = t ? (0,
                        r.xx)(t, e.opacity) : ""
                    } else
                        i.backgroundColor = "";
                    i.backgroundImage = e.image || "",
                    i.backgroundPosition = e.position || "",
                    i.backgroundRepeat = e.repeat || "",
                    i.backgroundSize = e.size || ""
                }
            }
            initPlugins() {
                for (let[,e] of (this._resizePlugins = [],
                this.container.plugins))
                    e.resize && this._resizePlugins.push(e),
                    (e.particleFillColor || e.particleStrokeColor) && this._colorPlugins.push(e)
            }
            initUpdaters() {
                for (let e of (this._preDrawUpdaters = [],
                this._postDrawUpdaters = [],
                this.container.particles.updaters))
                    e.afterDraw && this._postDrawUpdaters.push(e),
                    (e.getColorStyles || e.getTransformValues || e.beforeDraw) && this._preDrawUpdaters.push(e)
            }
            loadCanvas(e) {
                this._generated && this.element && this.element.remove(),
                this._generated = e.dataset && s.eb in e.dataset ? "true" === e.dataset[s.eb] : this._generated,
                this.element = e,
                this.element.ariaHidden = "true",
                this._originalStyle = (0,
                o.zw)({}, this.element.style),
                this.size.height = e.offsetHeight,
                this.size.width = e.offsetWidth,
                this._context = this.element.getContext("2d"),
                this._safeMutationObserver(e => {
                    this.element && e.observe(this.element, {
                        attributes: !0
                    })
                }
                ),
                this.container.retina.init(),
                this.initBackground()
            }
            paint() {
                let e = this.container.actualOptions;
                this.draw(t => {
                    e.backgroundMask.enable && e.backgroundMask.cover ? ((0,
                    n.IU)(t, this.size),
                    this._paintBase(this._coverColorStyle)) : this._paintBase()
                }
                )
            }
            resize() {
                if (!this.element)
                    return !1;
                let e = this.container
                  , t = e.retina.pixelRatio
                  , i = e.canvas.size
                  , s = {
                    width: this.element.offsetWidth * t,
                    height: this.element.offsetHeight * t
                };
                if (s.height === i.height && s.width === i.width && s.height === this.element.height && s.width === this.element.width)
                    return !1;
                let o = {
                    ...i
                };
                return this.element.width = i.width = this.element.offsetWidth * t,
                this.element.height = i.height = this.element.offsetHeight * t,
                this.container.started && (this.resizeFactor = {
                    width: i.width / o.width,
                    height: i.height / o.height
                }),
                !0
            }
            stop() {
                this._safeMutationObserver(e => e.disconnect()),
                this._mutationObserver = void 0,
                this.draw(e => (0,
                n.IU)(e, this.size))
            }
            async windowResize() {
                if (!this.element || !this.resize())
                    return;
                let e = this.container
                  , t = e.updateActualOptions();
                e.particles.setDensity(),
                this._applyResizePlugins(),
                t && await e.refresh()
            }
        }
        function l(e, t, i, s, n) {
            if (s) {
                let s = {
                    passive: !0
                };
                (0,
                o.Lm)(n) ? s.capture = n : void 0 !== n && (s = n),
                e.addEventListener(t, i, s)
            } else
                e.removeEventListener(t, i, n)
        }
        class c {
            constructor(e) {
                this.container = e,
                this._doMouseTouchClick = e => {
                    let t = this.container
                      , i = t.actualOptions;
                    if (this._canPush) {
                        let e = t.interactivity.mouse
                          , s = e.position;
                        if (!s)
                            return;
                        e.clickPosition = {
                            ...s
                        },
                        e.clickTime = new Date().getTime();
                        let n = i.interactivity.events.onClick;
                        (0,
                        o.wJ)(n.mode, e => this.container.handleClickMode(e))
                    }
                    "touchend" === e.type && setTimeout( () => this._mouseTouchFinish(), 500)
                }
                ,
                this._handleThemeChange = e => {
                    let t = this.container
                      , i = t.options
                      , s = i.defaultThemes
                      , o = e.matches ? s.dark : s.light
                      , n = i.themes.find(e => e.name === o);
                    n && n.default.auto && t.loadTheme(o)
                }
                ,
                this._handleVisibilityChange = () => {
                    let e = this.container
                      , t = e.actualOptions;
                    this._mouseTouchFinish(),
                    t.pauseOnBlur && (document && document.hidden ? (e.pageHidden = !0,
                    e.pause()) : (e.pageHidden = !1,
                    e.getAnimationStatus() ? e.play(!0) : e.draw(!0)))
                }
                ,
                this._handleWindowResize = async () => {
                    this._resizeTimeout && (clearTimeout(this._resizeTimeout),
                    delete this._resizeTimeout),
                    this._resizeTimeout = setTimeout(async () => {
                        let e = this.container.canvas;
                        e && await e.windowResize()
                    }
                    , 1e3 * this.container.actualOptions.interactivity.events.resize.delay)
                }
                ,
                this._manageInteractivityListeners = (e, t) => {
                    let i = this._handlers
                      , o = this.container
                      , n = o.actualOptions
                      , r = o.interactivity.element;
                    if (!r)
                        return;
                    let a = o.canvas.element;
                    a && (a.style.pointerEvents = r === a ? "initial" : "none"),
                    (n.interactivity.events.onHover.enable || n.interactivity.events.onClick.enable) && (l(r, s.Rb, i.mouseMove, t),
                    l(r, s.s7, i.touchStart, t),
                    l(r, s.DG, i.touchMove, t),
                    n.interactivity.events.onClick.enable ? (l(r, s.Bp, i.touchEndClick, t),
                    l(r, s.vo, i.mouseUp, t),
                    l(r, s.ms, i.mouseDown, t)) : l(r, s.Bp, i.touchEnd, t),
                    l(r, e, i.mouseLeave, t),
                    l(r, s.G3, i.touchCancel, t))
                }
                ,
                this._manageListeners = e => {
                    let t = this._handlers
                      , i = this.container
                      , o = i.actualOptions.interactivity.detectsOn
                      , n = i.canvas.element
                      , r = s.Z0;
                    "window" === o ? (i.interactivity.element = window,
                    r = s.sf) : "parent" === o && n ? i.interactivity.element = n.parentElement ?? n.parentNode : i.interactivity.element = n,
                    this._manageMediaMatch(e),
                    this._manageResize(e),
                    this._manageInteractivityListeners(r, e),
                    document && l(document, s.nK, t.visibilityChange, e, !1)
                }
                ,
                this._manageMediaMatch = e => {
                    let t = this._handlers
                      , i = (0,
                    o.lV)("(prefers-color-scheme: dark)");
                    if (i) {
                        if (void 0 !== i.addEventListener) {
                            l(i, "change", t.themeChange, e);
                            return
                        }
                        void 0 !== i.addListener && (e ? i.addListener(t.oldThemeChange) : i.removeListener(t.oldThemeChange))
                    }
                }
                ,
                this._manageResize = e => {
                    let t = this._handlers
                      , i = this.container;
                    if (!i.actualOptions.interactivity.events.resize)
                        return;
                    if ("undefined" == typeof ResizeObserver) {
                        l(window, s.NF, t.resize, e);
                        return
                    }
                    let o = i.canvas.element;
                    this._resizeObserver && !e ? (o && this._resizeObserver.unobserve(o),
                    this._resizeObserver.disconnect(),
                    delete this._resizeObserver) : !this._resizeObserver && e && o && (this._resizeObserver = new ResizeObserver(async e => {
                        e.find(e => e.target === o) && await this._handleWindowResize()
                    }
                    ),
                    this._resizeObserver.observe(o))
                }
                ,
                this._mouseDown = () => {
                    let {interactivity: e} = this.container;
                    if (!e)
                        return;
                    let {mouse: t} = e;
                    t.clicking = !0,
                    t.downPosition = t.position
                }
                ,
                this._mouseTouchClick = e => {
                    let t = this.container
                      , i = t.actualOptions
                      , {mouse: s} = t.interactivity;
                    s.inside = !0;
                    let o = !1
                      , n = s.position;
                    if (n && i.interactivity.events.onClick.enable) {
                        for (let[,e] of t.plugins)
                            if (e.clickPositionValid && (o = e.clickPositionValid(n)))
                                break;
                        o || this._doMouseTouchClick(e),
                        s.clicking = !1
                    }
                }
                ,
                this._mouseTouchFinish = () => {
                    let e = this.container.interactivity;
                    if (!e)
                        return;
                    let t = e.mouse;
                    delete t.position,
                    delete t.clickPosition,
                    delete t.downPosition,
                    e.status = s.Z0,
                    t.inside = !1,
                    t.clicking = !1
                }
                ,
                this._mouseTouchMove = e => {
                    let t;
                    let i = this.container
                      , o = i.actualOptions
                      , n = i.interactivity
                      , r = i.canvas.element;
                    if (!n || !n.element)
                        return;
                    if (n.mouse.inside = !0,
                    e.type.startsWith("pointer")) {
                        if (this._canPush = !0,
                        n.element === window) {
                            if (r) {
                                let i = r.getBoundingClientRect();
                                t = {
                                    x: e.clientX - i.left,
                                    y: e.clientY - i.top
                                }
                            }
                        } else if ("parent" === o.interactivity.detectsOn) {
                            let i = e.target
                              , s = e.currentTarget;
                            if (i && s && r) {
                                let o = i.getBoundingClientRect()
                                  , n = s.getBoundingClientRect()
                                  , a = r.getBoundingClientRect();
                                t = {
                                    x: e.offsetX + 2 * o.left - (n.left + a.left),
                                    y: e.offsetY + 2 * o.top - (n.top + a.top)
                                }
                            } else
                                t = {
                                    x: e.offsetX ?? e.clientX,
                                    y: e.offsetY ?? e.clientY
                                }
                        } else
                            e.target === r && (t = {
                                x: e.offsetX ?? e.clientX,
                                y: e.offsetY ?? e.clientY
                            })
                    } else if (this._canPush = "touchmove" !== e.type,
                    r) {
                        let i = e.touches[e.touches.length - 1]
                          , s = r.getBoundingClientRect();
                        t = {
                            x: i.clientX - (s.left ?? 0),
                            y: i.clientY - (s.top ?? 0)
                        }
                    }
                    let a = i.retina.pixelRatio;
                    t && (t.x *= a,
                    t.y *= a),
                    n.mouse.position = t,
                    n.status = s.Rb
                }
                ,
                this._touchEnd = e => {
                    for (let t of Array.from(e.changedTouches))
                        this._touches.delete(t.identifier);
                    this._mouseTouchFinish()
                }
                ,
                this._touchEndClick = e => {
                    for (let t of Array.from(e.changedTouches))
                        this._touches.delete(t.identifier);
                    this._mouseTouchClick(e)
                }
                ,
                this._touchStart = e => {
                    for (let t of Array.from(e.changedTouches))
                        this._touches.set(t.identifier, performance.now());
                    this._mouseTouchMove(e)
                }
                ,
                this._canPush = !0,
                this._touches = new Map,
                this._handlers = {
                    mouseDown: () => this._mouseDown(),
                    mouseLeave: () => this._mouseTouchFinish(),
                    mouseMove: e => this._mouseTouchMove(e),
                    mouseUp: e => this._mouseTouchClick(e),
                    touchStart: e => this._touchStart(e),
                    touchMove: e => this._mouseTouchMove(e),
                    touchEnd: e => this._touchEnd(e),
                    touchCancel: e => this._touchEnd(e),
                    touchEndClick: e => this._touchEndClick(e),
                    visibilityChange: () => this._handleVisibilityChange(),
                    themeChange: e => this._handleThemeChange(e),
                    oldThemeChange: e => this._handleThemeChange(e),
                    resize: () => {
                        this._handleWindowResize()
                    }
                }
            }
            addListeners() {
                this._manageListeners(!0)
            }
            removeListeners() {
                this._manageListeners(!1)
            }
        }
        var d = i(6463);
        class h {
            constructor() {
                this.color = new d.O,
                this.color.value = "",
                this.image = "",
                this.position = "",
                this.repeat = "",
                this.size = "",
                this.opacity = 1
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = d.O.create(this.color, e.color)),
                void 0 !== e.image && (this.image = e.image),
                void 0 !== e.position && (this.position = e.position),
                void 0 !== e.repeat && (this.repeat = e.repeat),
                void 0 !== e.size && (this.size = e.size),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class u {
            constructor() {
                this.color = new d.O,
                this.color.value = "#fff",
                this.opacity = 1
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = d.O.create(this.color, e.color)),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class p {
            constructor() {
                this.composite = "destination-out",
                this.cover = new u,
                this.enable = !1
            }
            load(e) {
                if (e) {
                    if (void 0 !== e.composite && (this.composite = e.composite),
                    void 0 !== e.cover) {
                        let t = e.cover
                          , i = (0,
                        o.Kg)(e.cover) ? {
                            color: e.cover
                        } : e.cover;
                        this.cover.load(void 0 !== t.color ? t : {
                            color: i
                        })
                    }
                    void 0 !== e.enable && (this.enable = e.enable)
                }
            }
        }
        class f {
            constructor() {
                this.enable = !0,
                this.zIndex = 0
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.zIndex && (this.zIndex = e.zIndex))
            }
        }
        class m {
            constructor() {
                this.enable = !1,
                this.mode = []
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.mode && (this.mode = e.mode))
            }
        }
        class g {
            constructor() {
                this.selectors = [],
                this.enable = !1,
                this.mode = [],
                this.type = "circle"
            }
            get el() {
                return this.elementId
            }
            set el(e) {
                this.elementId = e
            }
            get elementId() {
                return this.ids
            }
            set elementId(e) {
                this.ids = e
            }
            get ids() {
                return (0,
                o.wJ)(this.selectors, e => e.replace("#", ""))
            }
            set ids(e) {
                this.selectors = (0,
                o.wJ)(e, e => `#${e}`)
            }
            load(e) {
                if (!e)
                    return;
                let t = e.ids ?? e.elementId ?? e.el;
                void 0 !== t && (this.ids = t),
                void 0 !== e.selectors && (this.selectors = e.selectors),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.type && (this.type = e.type)
            }
        }
        class y {
            constructor() {
                this.enable = !1,
                this.force = 2,
                this.smooth = 10
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.force && (this.force = e.force),
                void 0 !== e.smooth && (this.smooth = e.smooth))
            }
        }
        class v {
            constructor() {
                this.enable = !1,
                this.mode = [],
                this.parallax = new y
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.mode && (this.mode = e.mode),
                this.parallax.load(e.parallax))
            }
        }
        class b {
            constructor() {
                this.delay = .5,
                this.enable = !0
            }
            load(e) {
                void 0 !== e && (void 0 !== e.delay && (this.delay = e.delay),
                void 0 !== e.enable && (this.enable = e.enable))
            }
        }
        class w {
            constructor() {
                this.onClick = new m,
                this.onDiv = new g,
                this.onHover = new v,
                this.resize = new b
            }
            get onclick() {
                return this.onClick
            }
            set onclick(e) {
                this.onClick = e
            }
            get ondiv() {
                return this.onDiv
            }
            set ondiv(e) {
                this.onDiv = e
            }
            get onhover() {
                return this.onHover
            }
            set onhover(e) {
                this.onHover = e
            }
            load(e) {
                if (!e)
                    return;
                this.onClick.load(e.onClick ?? e.onclick);
                let t = e.onDiv ?? e.ondiv;
                void 0 !== t && (this.onDiv = (0,
                o.wJ)(t, e => {
                    let t = new g;
                    return t.load(e),
                    t
                }
                )),
                this.onHover.load(e.onHover ?? e.onhover),
                (0,
                o.Lm)(e.resize) ? this.resize.enable = e.resize : this.resize.load(e.resize)
            }
        }
        class x {
            constructor(e, t) {
                this._engine = e,
                this._container = t
            }
            load(e) {
                if (!e || !this._container)
                    return;
                let t = this._engine.plugins.interactors.get(this._container);
                if (t)
                    for (let i of t)
                        i.loadModeOptions && i.loadModeOptions(this, e)
            }
        }
        class _ {
            constructor(e, t) {
                this.detectsOn = "window",
                this.events = new w,
                this.modes = new x(e,t)
            }
            get detect_on() {
                return this.detectsOn
            }
            set detect_on(e) {
                this.detectsOn = e
            }
            load(e) {
                if (!e)
                    return;
                let t = e.detectsOn ?? e.detect_on;
                void 0 !== t && (this.detectsOn = t),
                this.events.load(e.events),
                this.modes.load(e.modes)
            }
        }
        class k {
            load(e) {
                e && (e.position && (this.position = {
                    x: e.position.x ?? 50,
                    y: e.position.y ?? 50,
                    mode: e.position.mode ?? "percent"
                }),
                e.options && (this.options = (0,
                o.zw)({}, e.options)))
            }
        }
        class z {
            constructor() {
                this.maxWidth = 1 / 0,
                this.options = {},
                this.mode = "canvas"
            }
            load(e) {
                e && (void 0 !== e.maxWidth && (this.maxWidth = e.maxWidth),
                void 0 !== e.mode && ("screen" === e.mode ? this.mode = "screen" : this.mode = "canvas"),
                void 0 !== e.options && (this.options = (0,
                o.zw)({}, e.options)))
            }
        }
        class M {
            constructor() {
                this.auto = !1,
                this.mode = "any",
                this.value = !1
            }
            load(e) {
                e && (void 0 !== e.auto && (this.auto = e.auto),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.value && (this.value = e.value))
            }
        }
        class C {
            constructor() {
                this.name = "",
                this.default = new M
            }
            load(e) {
                e && (void 0 !== e.name && (this.name = e.name),
                this.default.load(e.default),
                void 0 !== e.options && (this.options = (0,
                o.zw)({}, e.options)))
            }
        }
        var P = i(8524);
        class O {
            constructor() {
                this.count = 0,
                this.enable = !1,
                this.offset = 0,
                this.speed = 1,
                this.delay = 0,
                this.decay = 0,
                this.sync = !0
            }
            load(e) {
                e && (void 0 !== e.count && (this.count = (0,
                P.DT)(e.count)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.offset && (this.offset = (0,
                P.DT)(e.offset)),
                void 0 !== e.speed && (this.speed = (0,
                P.DT)(e.speed)),
                void 0 !== e.decay && (this.decay = (0,
                P.DT)(e.decay)),
                void 0 !== e.delay && (this.delay = (0,
                P.DT)(e.delay)),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class S {
            constructor() {
                this.h = new O,
                this.s = new O,
                this.l = new O
            }
            load(e) {
                e && (this.h.load(e.h),
                this.s.load(e.s),
                this.l.load(e.l))
            }
        }
        class T extends d.O {
            constructor() {
                super(),
                this.animation = new S
            }
            static create(e, t) {
                let i = new T;
                return i.load(e),
                void 0 !== t && ((0,
                o.Kg)(t) || (0,
                o.cy)(t) ? i.load({
                    value: t
                }) : i.load(t)),
                i
            }
            load(e) {
                if (super.load(e),
                !e)
                    return;
                let t = e.animation;
                void 0 !== t && (void 0 !== t.enable ? this.animation.h.load(t) : this.animation.load(e.animation))
            }
        }
        class E {
            constructor() {
                this.speed = 2
            }
            load(e) {
                e && void 0 !== e.speed && (this.speed = e.speed)
            }
        }
        class I {
            constructor() {
                this.enable = !0,
                this.retries = 0
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.retries && (this.retries = e.retries))
            }
        }
        var R = i(755);
        class D extends R.PV {
            constructor() {
                super(),
                this.random.minimumValue = .1,
                this.value = 1
            }
        }
        class A {
            constructor() {
                this.horizontal = new D,
                this.vertical = new D
            }
            load(e) {
                e && (this.horizontal.load(e.horizontal),
                this.vertical.load(e.vertical))
            }
        }
        class L {
            constructor() {
                this.absorb = new E,
                this.bounce = new A,
                this.enable = !1,
                this.maxSpeed = 50,
                this.mode = "bounce",
                this.overlap = new I
            }
            load(e) {
                e && (this.absorb.load(e.absorb),
                this.bounce.load(e.bounce),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.maxSpeed && (this.maxSpeed = (0,
                P.DT)(e.maxSpeed)),
                void 0 !== e.mode && (this.mode = e.mode),
                this.overlap.load(e.overlap))
            }
        }
        class j {
            constructor() {
                this.offset = 0,
                this.value = 90
            }
            load(e) {
                e && (void 0 !== e.offset && (this.offset = (0,
                P.DT)(e.offset)),
                void 0 !== e.value && (this.value = (0,
                P.DT)(e.value)))
            }
        }
        class V {
            constructor() {
                this.distance = 200,
                this.enable = !1,
                this.rotate = {
                    x: 3e3,
                    y: 3e3
                }
            }
            get rotateX() {
                return this.rotate.x
            }
            set rotateX(e) {
                this.rotate.x = e
            }
            get rotateY() {
                return this.rotate.y
            }
            set rotateY(e) {
                this.rotate.y = e
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.distance && (this.distance = (0,
                P.DT)(e.distance)),
                void 0 !== e.enable && (this.enable = e.enable);
                let t = e.rotate?.x ?? e.rotateX;
                void 0 !== t && (this.rotate.x = t);
                let i = e.rotate?.y ?? e.rotateY;
                void 0 !== i && (this.rotate.y = i)
            }
        }
        class G {
            constructor() {
                this.x = 50,
                this.y = 50,
                this.mode = "percent",
                this.radius = 0
            }
            load(e) {
                e && (void 0 !== e.x && (this.x = e.x),
                void 0 !== e.y && (this.y = e.y),
                void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.radius && (this.radius = e.radius))
            }
        }
        class B {
            constructor() {
                this.acceleration = 9.81,
                this.enable = !1,
                this.inverse = !1,
                this.maxSpeed = 50
            }
            load(e) {
                e && (void 0 !== e.acceleration && (this.acceleration = (0,
                P.DT)(e.acceleration)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.inverse && (this.inverse = e.inverse),
                void 0 !== e.maxSpeed && (this.maxSpeed = (0,
                P.DT)(e.maxSpeed)))
            }
        }
        class q {
            constructor() {
                this.clamp = !0,
                this.delay = new R.PV,
                this.enable = !1,
                this.options = {}
            }
            load(e) {
                e && (void 0 !== e.clamp && (this.clamp = e.clamp),
                this.delay.load(e.delay),
                void 0 !== e.enable && (this.enable = e.enable),
                this.generator = e.generator,
                e.options && (this.options = (0,
                o.zw)(this.options, e.options)))
            }
        }
        class F {
            load(e) {
                e && (void 0 !== e.color && (this.color = d.O.create(this.color, e.color)),
                void 0 !== e.image && (this.image = e.image))
            }
        }
        class U {
            constructor() {
                this.enable = !1,
                this.length = 10,
                this.fill = new F
            }
            get fillColor() {
                return this.fill.color
            }
            set fillColor(e) {
                this.fill.load({
                    color: e
                })
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                (void 0 !== e.fill || void 0 !== e.fillColor) && this.fill.load(e.fill || {
                    color: e.fillColor
                }),
                void 0 !== e.length && (this.length = e.length))
            }
        }
        class W {
            constructor() {
                this.default = "out"
            }
            load(e) {
                e && (void 0 !== e.default && (this.default = e.default),
                this.bottom = e.bottom ?? e.default,
                this.left = e.left ?? e.default,
                this.right = e.right ?? e.default,
                this.top = e.top ?? e.default)
            }
        }
        class N {
            constructor() {
                this.acceleration = 0,
                this.enable = !1
            }
            load(e) {
                e && (void 0 !== e.acceleration && (this.acceleration = (0,
                P.DT)(e.acceleration)),
                void 0 !== e.enable && (this.enable = e.enable),
                e.position && (this.position = (0,
                o.zw)({}, e.position)))
            }
        }
        class H {
            constructor() {
                this.angle = new j,
                this.attract = new V,
                this.center = new G,
                this.decay = 0,
                this.distance = {},
                this.direction = "none",
                this.drift = 0,
                this.enable = !1,
                this.gravity = new B,
                this.path = new q,
                this.outModes = new W,
                this.random = !1,
                this.size = !1,
                this.speed = 2,
                this.spin = new N,
                this.straight = !1,
                this.trail = new U,
                this.vibrate = !1,
                this.warp = !1
            }
            get bounce() {
                return this.collisions
            }
            set bounce(e) {
                this.collisions = e
            }
            get collisions() {
                return !1
            }
            set collisions(e) {}
            get noise() {
                return this.path
            }
            set noise(e) {
                this.path = e
            }
            get outMode() {
                return this.outModes.default
            }
            set outMode(e) {
                this.outModes.default = e
            }
            get out_mode() {
                return this.outMode
            }
            set out_mode(e) {
                this.outMode = e
            }
            load(e) {
                if (!e)
                    return;
                this.angle.load((0,
                o.Et)(e.angle) ? {
                    value: e.angle
                } : e.angle),
                this.attract.load(e.attract),
                this.center.load(e.center),
                void 0 !== e.decay && (this.decay = (0,
                P.DT)(e.decay)),
                void 0 !== e.direction && (this.direction = e.direction),
                void 0 !== e.distance && (this.distance = (0,
                o.Et)(e.distance) ? {
                    horizontal: e.distance,
                    vertical: e.distance
                } : {
                    ...e.distance
                }),
                void 0 !== e.drift && (this.drift = (0,
                P.DT)(e.drift)),
                void 0 !== e.enable && (this.enable = e.enable),
                this.gravity.load(e.gravity);
                let t = e.outModes ?? e.outMode ?? e.out_mode;
                void 0 !== t && ((0,
                o.Gv)(t) ? this.outModes.load(t) : this.outModes.load({
                    default: t
                })),
                this.path.load(e.path ?? e.noise),
                void 0 !== e.random && (this.random = e.random),
                void 0 !== e.size && (this.size = e.size),
                void 0 !== e.speed && (this.speed = (0,
                P.DT)(e.speed)),
                this.spin.load(e.spin),
                void 0 !== e.straight && (this.straight = e.straight),
                this.trail.load(e.trail),
                void 0 !== e.vibrate && (this.vibrate = e.vibrate),
                void 0 !== e.warp && (this.warp = e.warp)
            }
        }
        var $ = i(7426);
        class Y extends $.Q {
            constructor() {
                super(),
                this.destroy = "none",
                this.speed = 2
            }
            get opacity_min() {
                return this.minimumValue
            }
            set opacity_min(e) {
                this.minimumValue = e
            }
            load(e) {
                e?.opacity_min !== void 0 && void 0 === e.minimumValue && (e.minimumValue = e.opacity_min),
                super.load(e),
                e && void 0 !== e.destroy && (this.destroy = e.destroy)
            }
        }
        class J extends R.PV {
            constructor() {
                super(),
                this.animation = new Y,
                this.random.minimumValue = .1,
                this.value = 1
            }
            get anim() {
                return this.animation
            }
            set anim(e) {
                this.animation = e
            }
            load(e) {
                if (!e)
                    return;
                super.load(e);
                let t = e.animation ?? e.anim;
                void 0 !== t && (this.animation.load(t),
                this.value = (0,
                P.DT)(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
            }
        }
        class K {
            constructor() {
                this.enable = !1,
                this.width = 1920,
                this.height = 1080
            }
            get area() {
                return this.width
            }
            set area(e) {
                this.width = e
            }
            get factor() {
                return this.height
            }
            set factor(e) {
                this.height = e
            }
            get value_area() {
                return this.area
            }
            set value_area(e) {
                this.area = e
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.enable && (this.enable = e.enable);
                let t = e.width ?? e.area ?? e.value_area;
                void 0 !== t && (this.width = t);
                let i = e.height ?? e.factor;
                void 0 !== i && (this.height = i)
            }
        }
        class Z {
            constructor() {
                this.density = new K,
                this.limit = 0,
                this.value = 0
            }
            get max() {
                return this.limit
            }
            set max(e) {
                this.limit = e
            }
            load(e) {
                if (!e)
                    return;
                this.density.load(e.density);
                let t = e.limit ?? e.max;
                void 0 !== t && (this.limit = t),
                void 0 !== e.value && (this.value = e.value)
            }
        }
        class X {
            constructor() {
                this.blur = 0,
                this.color = new d.O,
                this.enable = !1,
                this.offset = {
                    x: 0,
                    y: 0
                },
                this.color.value = "#000"
            }
            load(e) {
                e && (void 0 !== e.blur && (this.blur = e.blur),
                this.color = d.O.create(this.color, e.color),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.offset && (void 0 !== e.offset.x && (this.offset.x = e.offset.x),
                void 0 !== e.offset.y && (this.offset.y = e.offset.y)))
            }
        }
        let Q = "character"
          , ee = "char"
          , et = "image"
          , ei = "images"
          , es = "polygon"
          , eo = "star";
        class en {
            constructor() {
                this.loadShape = (e, t, i, s) => {
                    if (!e)
                        return;
                    let n = (0,
                    o.cy)(e)
                      , r = n ? [] : {}
                      , a = n !== (0,
                    o.cy)(this.options[t])
                      , l = n !== (0,
                    o.cy)(this.options[i]);
                    a && (this.options[t] = r),
                    l && s && (this.options[i] = r),
                    this.options[t] = (0,
                    o.zw)(this.options[t] ?? r, e),
                    (!this.options[i] || s) && (this.options[i] = (0,
                    o.zw)(this.options[i] ?? r, e))
                }
                ,
                this.close = !0,
                this.fill = !0,
                this.options = {},
                this.type = "circle"
            }
            get character() {
                return this.options[Q] ?? this.options[ee]
            }
            set character(e) {
                this.options[ee] = this.options[Q] = e
            }
            get custom() {
                return this.options
            }
            set custom(e) {
                this.options = e
            }
            get image() {
                return this.options[et] ?? this.options[ei]
            }
            set image(e) {
                this.options[ei] = this.options[et] = e
            }
            get images() {
                return this.image
            }
            set images(e) {
                this.image = e
            }
            get polygon() {
                return this.options[es] ?? this.options[eo]
            }
            set polygon(e) {
                this.options[eo] = this.options[es] = e
            }
            get stroke() {
                return []
            }
            set stroke(e) {}
            load(e) {
                if (!e)
                    return;
                let t = e.options ?? e.custom;
                if (void 0 !== t)
                    for (let e in t) {
                        let i = t[e];
                        i && (this.options[e] = (0,
                        o.zw)(this.options[e] ?? {}, i))
                    }
                this.loadShape(e.character, Q, ee, !0),
                this.loadShape(e.polygon, es, eo, !1),
                this.loadShape(e.image ?? e.images, et, ei, !0),
                void 0 !== e.close && (this.close = e.close),
                void 0 !== e.fill && (this.fill = e.fill),
                void 0 !== e.type && (this.type = e.type)
            }
        }
        class er extends $.Q {
            constructor() {
                super(),
                this.destroy = "none",
                this.speed = 5
            }
            get size_min() {
                return this.minimumValue
            }
            set size_min(e) {
                this.minimumValue = e
            }
            load(e) {
                e?.size_min !== void 0 && void 0 === e.minimumValue && (e.minimumValue = e.size_min),
                super.load(e),
                e && void 0 !== e.destroy && (this.destroy = e.destroy)
            }
        }
        class ea extends R.PV {
            constructor() {
                super(),
                this.animation = new er,
                this.random.minimumValue = 1,
                this.value = 3
            }
            get anim() {
                return this.animation
            }
            set anim(e) {
                this.animation = e
            }
            load(e) {
                if (super.load(e),
                !e)
                    return;
                let t = e.animation ?? e.anim;
                void 0 !== t && (this.animation.load(t),
                this.value = (0,
                P.DT)(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
            }
        }
        class el {
            constructor() {
                this.width = 0
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = T.create(this.color, e.color)),
                void 0 !== e.width && (this.width = (0,
                P.DT)(e.width)),
                void 0 !== e.opacity && (this.opacity = (0,
                P.DT)(e.opacity)))
            }
        }
        class ec extends R.PV {
            constructor() {
                super(),
                this.opacityRate = 1,
                this.sizeRate = 1,
                this.velocityRate = 1
            }
            load(e) {
                super.load(e),
                e && (void 0 !== e.opacityRate && (this.opacityRate = e.opacityRate),
                void 0 !== e.sizeRate && (this.sizeRate = e.sizeRate),
                void 0 !== e.velocityRate && (this.velocityRate = e.velocityRate))
            }
        }
        class ed {
            constructor(e, t) {
                this._engine = e,
                this._container = t,
                this.bounce = new A,
                this.collisions = new L,
                this.color = new T,
                this.color.value = "#fff",
                this.groups = {},
                this.move = new H,
                this.number = new Z,
                this.opacity = new J,
                this.reduceDuplicates = !1,
                this.shadow = new X,
                this.shape = new en,
                this.size = new ea,
                this.stroke = new el,
                this.zIndex = new ec
            }
            load(e) {
                if (!e)
                    return;
                if (this.bounce.load(e.bounce),
                this.color.load(T.create(this.color, e.color)),
                void 0 !== e.groups)
                    for (let t in e.groups) {
                        let i = e.groups[t];
                        void 0 !== i && (this.groups[t] = (0,
                        o.zw)(this.groups[t] ?? {}, i))
                    }
                this.move.load(e.move),
                this.number.load(e.number),
                this.opacity.load(e.opacity),
                void 0 !== e.reduceDuplicates && (this.reduceDuplicates = e.reduceDuplicates),
                this.shape.load(e.shape),
                this.size.load(e.size),
                this.shadow.load(e.shadow),
                this.zIndex.load(e.zIndex);
                let t = e.move?.collisions ?? e.move?.bounce;
                void 0 !== t && (this.collisions.enable = t),
                this.collisions.load(e.collisions),
                void 0 !== e.interactivity && (this.interactivity = (0,
                o.zw)({}, e.interactivity));
                let i = e.stroke ?? e.shape?.stroke;
                if (i && (this.stroke = (0,
                o.wJ)(i, e => {
                    let t = new el;
                    return t.load(e),
                    t
                }
                )),
                this._container) {
                    let t = this._engine.plugins.updaters.get(this._container);
                    if (t)
                        for (let i of t)
                            i.loadOptions && i.loadOptions(this, e);
                    let i = this._engine.plugins.interactors.get(this._container);
                    if (i)
                        for (let t of i)
                            t.loadParticlesOptions && t.loadParticlesOptions(this, e)
                }
            }
        }
        function eh(e, ...t) {
            for (let i of t)
                e.load(i)
        }
        function eu(e, t, ...i) {
            let s = new ed(e,t);
            return eh(s, ...i),
            s
        }
        class ep {
            constructor(e, t) {
                this._findDefaultTheme = e => this.themes.find(t => t.default.value && t.default.mode === e) ?? this.themes.find(e => e.default.value && "any" === e.default.mode),
                this._importPreset = e => {
                    this.load(this._engine.plugins.getPreset(e))
                }
                ,
                this._engine = e,
                this._container = t,
                this.autoPlay = !0,
                this.background = new h,
                this.backgroundMask = new p,
                this.defaultThemes = {},
                this.delay = 0,
                this.fullScreen = new f,
                this.detectRetina = !0,
                this.duration = 0,
                this.fpsLimit = 120,
                this.interactivity = new _(e,t),
                this.manualParticles = [],
                this.particles = eu(this._engine, this._container),
                this.pauseOnBlur = !0,
                this.pauseOnOutsideViewport = !0,
                this.responsive = [],
                this.smooth = !1,
                this.style = {},
                this.themes = [],
                this.zLayers = 100
            }
            get backgroundMode() {
                return this.fullScreen
            }
            set backgroundMode(e) {
                this.fullScreen.load(e)
            }
            get fps_limit() {
                return this.fpsLimit
            }
            set fps_limit(e) {
                this.fpsLimit = e
            }
            get retina_detect() {
                return this.detectRetina
            }
            set retina_detect(e) {
                this.detectRetina = e
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.preset && (0,
                o.wJ)(e.preset, e => this._importPreset(e)),
                void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay),
                void 0 !== e.delay && (this.delay = (0,
                P.DT)(e.delay));
                let t = e.detectRetina ?? e.retina_detect;
                void 0 !== t && (this.detectRetina = t),
                void 0 !== e.duration && (this.duration = (0,
                P.DT)(e.duration));
                let i = e.fpsLimit ?? e.fps_limit;
                void 0 !== i && (this.fpsLimit = i),
                void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur),
                void 0 !== e.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
                void 0 !== e.zLayers && (this.zLayers = e.zLayers),
                this.background.load(e.background);
                let s = e.fullScreen ?? e.backgroundMode;
                (0,
                o.Lm)(s) ? this.fullScreen.enable = s : this.fullScreen.load(s),
                this.backgroundMask.load(e.backgroundMask),
                this.interactivity.load(e.interactivity),
                e.manualParticles && (this.manualParticles = e.manualParticles.map(e => {
                    let t = new k;
                    return t.load(e),
                    t
                }
                )),
                this.particles.load(e.particles),
                this.style = (0,
                o.zw)(this.style, e.style),
                this._engine.plugins.loadOptions(this, e),
                void 0 !== e.smooth && (this.smooth = e.smooth);
                let n = this._engine.plugins.interactors.get(this._container);
                if (n)
                    for (let t of n)
                        t.loadOptions && t.loadOptions(this, e);
                if (void 0 !== e.responsive)
                    for (let t of e.responsive) {
                        let e = new z;
                        e.load(t),
                        this.responsive.push(e)
                    }
                if (this.responsive.sort( (e, t) => e.maxWidth - t.maxWidth),
                void 0 !== e.themes)
                    for (let t of e.themes) {
                        let e = this.themes.find(e => e.name === t.name);
                        if (e)
                            e.load(t);
                        else {
                            let e = new C;
                            e.load(t),
                            this.themes.push(e)
                        }
                    }
                this.defaultThemes.dark = this._findDefaultTheme("dark")?.name,
                this.defaultThemes.light = this._findDefaultTheme("light")?.name
            }
            setResponsive(e, t, i) {
                this.load(i);
                let s = this.responsive.find(i => "screen" === i.mode && screen ? i.maxWidth > screen.availWidth : i.maxWidth * t > e);
                return this.load(s?.options),
                s?.maxWidth
            }
            setTheme(e) {
                if (e) {
                    let t = this.themes.find(t => t.name === e);
                    t && this.load(t.options)
                } else {
                    let e = (0,
                    o.lV)("(prefers-color-scheme: dark)")
                      , t = e && e.matches
                      , i = this._findDefaultTheme(t ? "dark" : "light");
                    i && this.load(i.options)
                }
            }
        }
        class ef {
            constructor(e, t) {
                this.container = t,
                this._engine = e,
                this._interactors = e.plugins.getInteractors(this.container, !0),
                this._externalInteractors = [],
                this._particleInteractors = []
            }
            async externalInteract(e) {
                for (let t of this._externalInteractors)
                    t.isEnabled() && await t.interact(e)
            }
            handleClickMode(e) {
                for (let t of this._externalInteractors)
                    t.handleClickMode && t.handleClickMode(e)
            }
            init() {
                for (let e of (this._externalInteractors = [],
                this._particleInteractors = [],
                this._interactors)) {
                    switch (e.type) {
                    case "external":
                        this._externalInteractors.push(e);
                        break;
                    case "particles":
                        this._particleInteractors.push(e)
                    }
                    e.init()
                }
            }
            async particlesInteract(e, t) {
                for (let i of this._externalInteractors)
                    i.clear(e, t);
                for (let i of this._particleInteractors)
                    i.isEnabled(e) && await i.interact(e, t)
            }
            async reset(e) {
                for (let t of this._externalInteractors)
                    t.isEnabled() && t.reset(e);
                for (let t of this._particleInteractors)
                    t.isEnabled(e) && t.reset(e)
            }
        }
        var em = i(7249)
          , eg = i(1722);
        let ey = e => {
            if (!(0,
            o.hn)(e.outMode, e.checkModes))
                return;
            let t = 2 * e.radius;
            e.coord > e.maxCoord - t ? e.setCb(-e.radius) : e.coord < t && e.setCb(e.radius)
        }
        ;
        class ev {
            constructor(e, t, i, r, a, l) {
                this.container = i,
                this._calcPosition = (e, t, i, s=0) => {
                    for (let[,s] of e.plugins) {
                        let e = void 0 !== s.particlePosition ? s.particlePosition(t, this) : void 0;
                        if (e)
                            return eg.p.create(e.x, e.y, i)
                    }
                    let o = e.canvas.size
                      , n = (0,
                    P.Nx)({
                        size: o,
                        position: t
                    })
                      , r = eg.p.create(n.x, n.y, i)
                      , a = this.getRadius()
                      , l = this.options.move.outModes
                      , c = t => {
                        ey({
                            outMode: t,
                            checkModes: ["bounce", "bounce-horizontal"],
                            coord: r.x,
                            maxCoord: e.canvas.size.width,
                            setCb: e => r.x += e,
                            radius: a
                        })
                    }
                      , d = t => {
                        ey({
                            outMode: t,
                            checkModes: ["bounce", "bounce-vertical"],
                            coord: r.y,
                            maxCoord: e.canvas.size.height,
                            setCb: e => r.y += e,
                            radius: a
                        })
                    }
                    ;
                    return (c(l.left ?? l.default),
                    c(l.right ?? l.default),
                    d(l.top ?? l.default),
                    d(l.bottom ?? l.default),
                    this._checkOverlap(r, s)) ? this._calcPosition(e, void 0, i, s + 1) : r
                }
                ,
                this._calculateVelocity = () => {
                    let e = (0,
                    P.$m)(this.direction).copy()
                      , t = this.options.move;
                    if ("inside" === t.direction || "outside" === t.direction)
                        return e;
                    let i = Math.PI / 180 * (0,
                    P.VG)(t.angle.value)
                      , s = Math.PI / 180 * (0,
                    P.VG)(t.angle.offset)
                      , o = {
                        left: s - i / 2,
                        right: s + i / 2
                    };
                    return t.straight || (e.angle += (0,
                    P.U4)((0,
                    P.DT)(o.left, o.right))),
                    t.random && "number" == typeof t.speed && (e.length *= (0,
                    P.G0)()),
                    e
                }
                ,
                this._checkOverlap = (e, t=0) => {
                    let i = this.options.collisions
                      , o = this.getRadius();
                    if (!i.enable)
                        return !1;
                    let n = i.overlap;
                    if (n.enable)
                        return !1;
                    let r = n.retries;
                    if (r >= 0 && t > r)
                        throw Error(`${s.dI} particle is overlapping and can't be placed`);
                    return !!this.container.particles.find(t => (0,
                    P.Yf)(e, t.position) < o + t.getRadius())
                }
                ,
                this._getRollColor = e => {
                    if (!e || !this.roll || !this.backColor && !this.roll.alter)
                        return e;
                    let t = this.roll.horizontal && this.roll.vertical ? 2 : 1
                      , i = this.roll.horizontal ? Math.PI / 2 : 0;
                    return Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / t)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? (0,
                    n.yx)(e, this.roll.alter.type, this.roll.alter.value) : e : e
                }
                ,
                this._initPosition = e => {
                    let t = this.container
                      , i = (0,
                    P.VG)(this.options.zIndex.value);
                    this.position = this._calcPosition(t, e, (0,
                    P.qE)(i, 0, t.zLayers)),
                    this.initialPosition = this.position.copy();
                    let s = t.canvas.size;
                    switch (this.moveCenter = {
                        ...(0,
                        o.E9)(this.options.move.center, s),
                        radius: this.options.move.center.radius ?? 0,
                        mode: this.options.move.center.mode ?? "percent"
                    },
                    this.direction = (0,
                    P.JY)(this.options.move.direction, this.position, this.moveCenter),
                    this.options.move.direction) {
                    case "inside":
                        this.outType = "inside";
                        break;
                    case "outside":
                        this.outType = "outside"
                    }
                    this.offset = em.M.origin
                }
                ,
                this._loadShapeData = (e, t) => {
                    let i = e.options[this.shape];
                    if (i)
                        return (0,
                        o.zw)({
                            close: e.close,
                            fill: e.fill
                        }, (0,
                        o.TA)(i, this.id, t))
                }
                ,
                this._engine = e,
                this.init(t, r, a, l)
            }
            destroy(e) {
                if (this.unbreakable || this.destroyed)
                    return;
                this.destroyed = !0,
                this.bubble.inRange = !1,
                this.slow.inRange = !1;
                let t = this.container
                  , i = this.pathGenerator;
                for (let[,i] of t.plugins)
                    i.particleDestroyed && i.particleDestroyed(this, e);
                for (let i of t.particles.updaters)
                    i.particleDestroyed && i.particleDestroyed(this, e);
                i && i.reset(this)
            }
            draw(e) {
                let t = this.container;
                for (let[,i] of t.plugins)
                    t.canvas.drawParticlePlugin(i, this, e);
                t.canvas.drawParticle(this, e)
            }
            getFillColor() {
                return this._getRollColor(this.bubble.color ?? (0,
                r.O_)(this.color))
            }
            getMass() {
                return this.getRadius() ** 2 * Math.PI / 2
            }
            getPosition() {
                return {
                    x: this.position.x + this.offset.x,
                    y: this.position.y + this.offset.y,
                    z: this.position.z
                }
            }
            getRadius() {
                return this.bubble.radius ?? this.size.value
            }
            getStrokeColor() {
                return this._getRollColor(this.bubble.color ?? (0,
                r.O_)(this.strokeColor))
            }
            init(e, t, i, s) {
                let n = this.container
                  , a = this._engine;
                this.id = e,
                this.group = s,
                this.fill = !0,
                this.pathRotation = !1,
                this.close = !0,
                this.lastPathTime = 0,
                this.destroyed = !1,
                this.unbreakable = !1,
                this.rotation = 0,
                this.misplaced = !1,
                this.retina = {
                    maxDistance: {}
                },
                this.outType = "normal",
                this.ignoresResizeRatio = !0;
                let l = n.retina.pixelRatio
                  , c = n.actualOptions
                  , d = eu(this._engine, n, c.particles)
                  , h = d.shape.type
                  , {reduceDuplicates: u} = d;
                this.shape = (0,
                o.TA)(h, this.id, u);
                let p = d.shape;
                if (i && i.shape && i.shape.type) {
                    let e = i.shape.type
                      , t = (0,
                    o.TA)(e, this.id, u);
                    t && (this.shape = t,
                    p.load(i.shape))
                }
                this.shapeData = this._loadShapeData(p, u),
                d.load(i);
                let f = this.shapeData;
                f && d.load(f.particles);
                let m = new _(a,n);
                m.load(n.actualOptions.interactivity),
                m.load(d.interactivity),
                this.interactivity = m,
                this.fill = f?.fill ?? d.shape.fill,
                this.close = f?.close ?? d.shape.close,
                this.options = d;
                let g = this.options.move.path;
                this.pathDelay = 1e3 * (0,
                P._W)(g.delay),
                g.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(g.generator),
                this.pathGenerator && n.addPath(g.generator, this.pathGenerator) && this.pathGenerator.init(n)),
                n.retina.initParticle(this),
                this.size = (0,
                o.Xs)(this.options.size, l),
                this.bubble = {
                    inRange: !1
                },
                this.slow = {
                    inRange: !1,
                    factor: 1
                },
                this._initPosition(t),
                this.initialVelocity = this._calculateVelocity(),
                this.velocity = this.initialVelocity.copy(),
                this.moveDecay = 1 - (0,
                P.VG)(this.options.move.decay);
                let y = n.particles;
                y.needsSort = y.needsSort || y.lastZIndex < this.position.z,
                y.lastZIndex = this.position.z,
                this.zIndexFactor = this.position.z / n.zLayers,
                this.sides = 24;
                let v = n.drawers.get(this.shape);
                !v && (v = this._engine.plugins.getShapeDrawer(this.shape)) && n.drawers.set(this.shape, v),
                v && v.loadShape && v.loadShape(this);
                let b = v?.getSidesCount;
                for (let e of (b && (this.sides = b(this)),
                this.spawning = !1,
                this.shadowColor = (0,
                r.BN)(this.options.shadow.color),
                n.particles.updaters))
                    e.init(this);
                for (let e of n.particles.movers)
                    e.init && e.init(this);
                for (let[,e] of (v && v.particleInit && v.particleInit(n, this),
                n.plugins))
                    e.particleCreated && e.particleCreated(this)
            }
            isInsideCanvas() {
                let e = this.getRadius()
                  , t = this.container.canvas.size
                  , i = this.position;
                return i.x >= -e && i.y >= -e && i.y <= t.height + e && i.x <= t.width + e
            }
            isVisible() {
                return !this.destroyed && !this.spawning && this.isInsideCanvas()
            }
            reset() {
                for (let e of this.container.particles.updaters)
                    e.reset && e.reset(this)
            }
        }
        class eb {
            constructor(e, t) {
                this.position = e,
                this.particle = t
            }
        }
        var ew = i(2286)
          , ex = i(2835);
        class e_ {
            constructor(e, t) {
                this.rectangle = e,
                this.capacity = t,
                this._subdivide = () => {
                    let {x: e, y: t} = this.rectangle.position
                      , {width: i, height: s} = this.rectangle.size
                      , {capacity: o} = this;
                    for (let n = 0; n < 4; n++)
                        this._subs.push(new e_(new ex.M(e + i / 2 * (n % 2),t + s / 2 * (Math.round(n / 2) - n % 2),i / 2,s / 2),o));
                    this._divided = !0
                }
                ,
                this._points = [],
                this._divided = !1,
                this._subs = []
            }
            insert(e) {
                return !!this.rectangle.contains(e.position) && (this._points.length < this.capacity ? (this._points.push(e),
                !0) : (this._divided || this._subdivide(),
                this._subs.some(t => t.insert(e))))
            }
            query(e, t, i) {
                let s = i || [];
                if (!e.intersects(this.rectangle))
                    return [];
                for (let i of this._points)
                    !e.contains(i.position) && (0,
                    P.Yf)(e.position, i.position) > i.particle.getRadius() && (!t || t(i.particle)) || s.push(i.particle);
                if (this._divided)
                    for (let i of this._subs)
                        i.query(e, t, s);
                return s
            }
            queryCircle(e, t, i) {
                return this.query(new ew.j(e.x,e.y,t), i)
            }
            queryRectangle(e, t, i) {
                return this.query(new ex.M(e.x,e.y,t.width,t.height), i)
            }
        }
        let ek = e => new ex.M(-e.width / 4,-e.height / 4,3 * e.width / 2,3 * e.height / 2);
        class ez {
            constructor(e, t) {
                this._applyDensity = (e, t, i) => {
                    if (!e.number.density?.enable)
                        return;
                    let s = e.number
                      , o = this._initDensityFactor(s.density)
                      , n = s.value
                      , r = s.limit > 0 ? s.limit : n
                      , a = Math.min(n, r) * o + t
                      , l = Math.min(this.count, this.filter(e => e.group === i).length);
                    this.limit = s.limit * o,
                    l < a ? this.push(Math.abs(a - l), void 0, e, i) : l > a && this.removeQuantity(l - a, i)
                }
                ,
                this._initDensityFactor = e => {
                    let t = this._container;
                    if (!t.canvas.element || !e.enable)
                        return 1;
                    let i = t.canvas.element
                      , s = t.retina.pixelRatio;
                    return i.width * i.height / (e.factor * s ** 2 * e.area)
                }
                ,
                this._pushParticle = (e, t, i, n) => {
                    try {
                        let s = this.pool.pop();
                        s ? s.init(this._nextId, e, t, i) : s = new ev(this._engine,this._nextId,this._container,e,t,i);
                        let o = !0;
                        if (n && (o = n(s)),
                        !o)
                            return;
                        return this._array.push(s),
                        this._zArray.push(s),
                        this._nextId++,
                        this._engine.dispatchEvent("particleAdded", {
                            container: this._container,
                            data: {
                                particle: s
                            }
                        }),
                        s
                    } catch (e) {
                        (0,
                        o.tZ)().warning(`${s.dI} adding particle: ${e}`);
                        return
                    }
                }
                ,
                this._removeParticle = (e, t, i) => {
                    let s = this._array[e];
                    if (!s || s.group !== t)
                        return !1;
                    s.destroy(i);
                    let o = this._zArray.indexOf(s);
                    return this._array.splice(e, 1),
                    this._zArray.splice(o, 1),
                    this.pool.push(s),
                    this._engine.dispatchEvent("particleRemoved", {
                        container: this._container,
                        data: {
                            particle: s
                        }
                    }),
                    !0
                }
                ,
                this._engine = e,
                this._container = t,
                this._nextId = 0,
                this._array = [],
                this._zArray = [],
                this.pool = [],
                this.limit = 0,
                this.needsSort = !1,
                this.lastZIndex = 0,
                this._interactionManager = new ef(e,t);
                let i = t.canvas.size;
                this.quadTree = new e_(ek(i),4),
                this.movers = this._engine.plugins.getMovers(t, !0),
                this.updaters = this._engine.plugins.getUpdaters(t, !0)
            }
            get count() {
                return this._array.length
            }
            addManualParticles() {
                let e = this._container;
                for (let t of e.actualOptions.manualParticles)
                    this.addParticle(t.position ? (0,
                    o.E9)(t.position, e.canvas.size) : void 0, t.options)
            }
            addParticle(e, t, i, s) {
                let o = this._container.actualOptions.particles.number.limit;
                if (o > 0) {
                    let e = this.count + 1 - o;
                    e > 0 && this.removeQuantity(e)
                }
                return this._pushParticle(e, t, i, s)
            }
            clear() {
                this._array = [],
                this._zArray = []
            }
            destroy() {
                this._array = [],
                this._zArray = [],
                this.movers = [],
                this.updaters = []
            }
            async draw(e) {
                let t = this._container;
                for (let[,i] of (t.canvas.clear(),
                await this.update(e),
                t.plugins))
                    t.canvas.drawPlugin(i, e);
                for (let t of this._zArray)
                    t.draw(e)
            }
            filter(e) {
                return this._array.filter(e)
            }
            find(e) {
                return this._array.find(e)
            }
            handleClickMode(e) {
                this._interactionManager.handleClickMode(e)
            }
            init() {
                let e = this._container
                  , t = e.actualOptions;
                this.lastZIndex = 0,
                this.needsSort = !1;
                let i = !1;
                for (let[,t] of (this.updaters = this._engine.plugins.getUpdaters(e, !0),
                this._interactionManager.init(),
                e.plugins))
                    if (void 0 !== t.particlesInitialization && (i = t.particlesInitialization()),
                    i)
                        break;
                for (let[,t] of (this._interactionManager.init(),
                e.pathGenerators))
                    t.init(e);
                if (this.addManualParticles(),
                !i) {
                    for (let e in t.particles.groups) {
                        let i = t.particles.groups[e];
                        for (let s = this.count, o = 0; o < i.number?.value && s < t.particles.number.value; s++,
                        o++)
                            this.addParticle(void 0, i, e)
                    }
                    for (let e = this.count; e < t.particles.number.value; e++)
                        this.addParticle()
                }
            }
            push(e, t, i, s) {
                this.pushing = !0;
                for (let o = 0; o < e; o++)
                    this.addParticle(t?.position, i, s);
                this.pushing = !1
            }
            async redraw() {
                this.clear(),
                this.init(),
                await this.draw({
                    value: 0,
                    factor: 0
                })
            }
            remove(e, t, i) {
                this.removeAt(this._array.indexOf(e), void 0, t, i)
            }
            removeAt(e, t=1, i, s) {
                if (e < 0 || e > this.count)
                    return;
                let o = 0;
                for (let n = e; o < t && n < this.count; n++)
                    this._removeParticle(n--, i, s) && o++
            }
            removeQuantity(e, t) {
                this.removeAt(0, e, t)
            }
            setDensity() {
                let e = this._container.actualOptions
                  , t = e.particles.groups;
                for (let e in t)
                    this._applyDensity(t[e], 0, e);
                this._applyDensity(e.particles, e.manualParticles.length)
            }
            async update(e) {
                let t = this._container
                  , i = new Set;
                for (let[,e] of (this.quadTree = new e_(ek(t.canvas.size),4),
                t.pathGenerators))
                    e.update();
                for (let[,i] of t.plugins)
                    i.update && i.update(e);
                for (let s of this._array) {
                    let o = t.canvas.resizeFactor;
                    for (let[,t] of (o && !s.ignoresResizeRatio && (s.position.x *= o.width,
                    s.position.y *= o.height,
                    s.initialPosition.x *= o.width,
                    s.initialPosition.y *= o.height),
                    s.ignoresResizeRatio = !1,
                    await this._interactionManager.reset(s),
                    this._container.plugins)) {
                        if (s.destroyed)
                            break;
                        t.particleUpdate && t.particleUpdate(s, e)
                    }
                    for (let t of this.movers)
                        t.isEnabled(s) && t.move(s, e);
                    if (s.destroyed) {
                        i.add(s);
                        continue
                    }
                    this.quadTree.insert(new eb(s.getPosition(),s))
                }
                if (i.size) {
                    let e = e => !i.has(e);
                    this._array = this.filter(e),
                    this._zArray = this._zArray.filter(e),
                    this.pool.push(...i)
                }
                for (let t of (await this._interactionManager.externalInteract(e),
                this._array)) {
                    for (let i of this.updaters)
                        i.update(t, e);
                    t.destroyed || t.spawning || await this._interactionManager.particlesInteract(t, e)
                }
                if (delete t.canvas.resizeFactor,
                this.needsSort) {
                    let e = this._zArray;
                    e.sort( (e, t) => t.position.z - e.position.z || e.id - t.id),
                    this.lastZIndex = e[e.length - 1].position.z,
                    this.needsSort = !1
                }
            }
        }
        class eM {
            constructor(e) {
                this.container = e,
                this.pixelRatio = 1,
                this.reduceFactor = 1
            }
            init() {
                let e = this.container
                  , t = e.actualOptions;
                this.pixelRatio = !t.detectRetina || (0,
                o.B9)() ? 1 : window.devicePixelRatio,
                this.reduceFactor = 1;
                let i = this.pixelRatio;
                if (e.canvas.element) {
                    let t = e.canvas.element;
                    e.canvas.size.width = t.offsetWidth * i,
                    e.canvas.size.height = t.offsetHeight * i
                }
                let s = t.particles
                  , n = s.move;
                this.attractDistance = (0,
                P.VG)(n.attract.distance) * i,
                this.maxSpeed = (0,
                P.VG)(n.gravity.maxSpeed) * i,
                this.sizeAnimationSpeed = (0,
                P.VG)(s.size.animation.speed) * i
            }
            initParticle(e) {
                let t = e.options
                  , i = this.pixelRatio
                  , s = t.move
                  , o = s.distance
                  , n = e.retina;
                n.attractDistance = (0,
                P.VG)(s.attract.distance) * i,
                n.moveDrift = (0,
                P.VG)(s.drift) * i,
                n.moveSpeed = (0,
                P.VG)(s.speed) * i,
                n.sizeAnimationSpeed = (0,
                P.VG)(t.size.animation.speed) * i;
                let r = n.maxDistance;
                r.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0,
                r.vertical = void 0 !== o.vertical ? o.vertical * i : void 0,
                n.maxSpeed = (0,
                P.VG)(s.gravity.maxSpeed) * i
            }
        }
        function eC(e) {
            return e && !e.destroyed
        }
        function eP(e, t, ...i) {
            let s = new ep(e,t);
            return eh(s, ...i),
            s
        }
        let eO = {
            generate: e => e.velocity,
            init: () => {}
            ,
            update: () => {}
            ,
            reset: () => {}
        };
        class eS {
            constructor(e, t, i) {
                this.id = t,
                this._intersectionManager = e => {
                    if (eC(this) && this.actualOptions.pauseOnOutsideViewport)
                        for (let t of e)
                            t.target === this.interactivity.element && (t.isIntersecting ? this.play : this.pause)()
                }
                ,
                this._nextFrame = async e => {
                    try {
                        if (!this.smooth && void 0 !== this.lastFrameTime && e < this.lastFrameTime + 1e3 / this.fpsLimit) {
                            this.draw(!1);
                            return
                        }
                        this.lastFrameTime ??= e;
                        let t = function(e, t=60, i=!1) {
                            return {
                                value: e,
                                factor: i ? 60 / t : 60 * e / 1e3
                            }
                        }(e - this.lastFrameTime, this.fpsLimit, this.smooth);
                        if (this.addLifeTime(t.value),
                        this.lastFrameTime = e,
                        t.value > 1e3) {
                            this.draw(!1);
                            return
                        }
                        if (await this.particles.draw(t),
                        !this.alive()) {
                            this.destroy();
                            return
                        }
                        this.getAnimationStatus() && this.draw(!1)
                    } catch (e) {
                        (0,
                        o.tZ)().error(`${s.dI} in animation loop`, e)
                    }
                }
                ,
                this._engine = e,
                this.fpsLimit = 120,
                this.smooth = !1,
                this._delay = 0,
                this._duration = 0,
                this._lifeTime = 0,
                this._firstStart = !0,
                this.started = !1,
                this.destroyed = !1,
                this._paused = !0,
                this.lastFrameTime = 0,
                this.zLayers = 100,
                this.pageHidden = !1,
                this._sourceOptions = i,
                this._initialSourceOptions = i,
                this.retina = new eM(this),
                this.canvas = new a(this),
                this.particles = new ez(this._engine,this),
                this.pathGenerators = new Map,
                this.interactivity = {
                    mouse: {
                        clicking: !1,
                        inside: !1
                    }
                },
                this.plugins = new Map,
                this.drawers = new Map,
                this._options = eP(this._engine, this),
                this.actualOptions = eP(this._engine, this),
                this._eventListeners = new c(this),
                "undefined" != typeof IntersectionObserver && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver(e => this._intersectionManager(e))),
                this._engine.dispatchEvent("containerBuilt", {
                    container: this
                })
            }
            get options() {
                return this._options
            }
            get sourceOptions() {
                return this._sourceOptions
            }
            addClickHandler(e) {
                if (!eC(this))
                    return;
                let t = this.interactivity.element;
                if (!t)
                    return;
                let i = (t, i, s) => {
                    if (!eC(this))
                        return;
                    let o = this.retina.pixelRatio
                      , n = {
                        x: i.x * o,
                        y: i.y * o
                    };
                    e(t, this.particles.quadTree.queryCircle(n, s * o))
                }
                  , s = !1
                  , o = !1;
                t.addEventListener("click", e => {
                    if (!eC(this))
                        return;
                    let t = {
                        x: e.offsetX || e.clientX,
                        y: e.offsetY || e.clientY
                    };
                    i(e, t, 1)
                }
                ),
                t.addEventListener("touchstart", () => {
                    eC(this) && (s = !0,
                    o = !1)
                }
                ),
                t.addEventListener("touchmove", () => {
                    eC(this) && (o = !0)
                }
                ),
                t.addEventListener("touchend", e => {
                    if (eC(this)) {
                        if (s && !o) {
                            let t = e.touches[e.touches.length - 1];
                            if (!t && !(t = e.changedTouches[e.changedTouches.length - 1]))
                                return;
                            let s = this.canvas.element
                              , o = s ? s.getBoundingClientRect() : void 0;
                            i(e, {
                                x: t.clientX - (o ? o.left : 0),
                                y: t.clientY - (o ? o.top : 0)
                            }, Math.max(t.radiusX, t.radiusY))
                        }
                        s = !1,
                        o = !1
                    }
                }
                ),
                t.addEventListener("touchcancel", () => {
                    eC(this) && (s = !1,
                    o = !1)
                }
                )
            }
            addLifeTime(e) {
                this._lifeTime += e
            }
            addPath(e, t, i=!1) {
                return !(!eC(this) || !i && this.pathGenerators.has(e)) && (this.pathGenerators.set(e, t ?? eO),
                !0)
            }
            alive() {
                return !this._duration || this._lifeTime <= this._duration
            }
            destroy() {
                if (!eC(this))
                    return;
                for (let[,e] of (this.stop(),
                this.particles.destroy(),
                this.canvas.destroy(),
                this.drawers))
                    e.destroy && e.destroy(this);
                for (let e of this.drawers.keys())
                    this.drawers.delete(e);
                this._engine.plugins.destroy(this),
                this.destroyed = !0;
                let e = this._engine.dom()
                  , t = e.findIndex(e => e === this);
                t >= 0 && e.splice(t, 1),
                this._engine.dispatchEvent("containerDestroyed", {
                    container: this
                })
            }
            draw(e) {
                if (!eC(this))
                    return;
                let t = e;
                this._drawAnimationFrame = requestAnimationFrame(async e => {
                    t && (this.lastFrameTime = void 0,
                    t = !1),
                    await this._nextFrame(e)
                }
                )
            }
            async export(e, t={}) {
                for (let[,i] of this.plugins) {
                    if (!i.export)
                        continue;
                    let s = await i.export(e, t);
                    if (s.supported)
                        return s.blob
                }
                (0,
                o.tZ)().error(`${s.dI} - Export plugin with type ${e} not found`)
            }
            getAnimationStatus() {
                return !this._paused && !this.pageHidden && eC(this)
            }
            handleClickMode(e) {
                if (eC(this))
                    for (let[,t] of (this.particles.handleClickMode(e),
                    this.plugins))
                        t.handleClickMode && t.handleClickMode(e)
            }
            async init() {
                if (eC(this)) {
                    for (let e of this._engine.plugins.getSupportedShapes()) {
                        let t = this._engine.plugins.getShapeDrawer(e);
                        t && this.drawers.set(e, t)
                    }
                    for (let[e,t] of (this._options = eP(this._engine, this, this._initialSourceOptions, this.sourceOptions),
                    this.actualOptions = eP(this._engine, this, this._options),
                    this._engine.plugins.getAvailablePlugins(this)))
                        this.plugins.set(e, t);
                    for (let[,e] of (this.retina.init(),
                    await this.canvas.init(),
                    this.updateActualOptions(),
                    this.canvas.initBackground(),
                    this.canvas.resize(),
                    this.zLayers = this.actualOptions.zLayers,
                    this._duration = 1e3 * (0,
                    P.VG)(this.actualOptions.duration),
                    this._delay = 1e3 * (0,
                    P.VG)(this.actualOptions.delay),
                    this._lifeTime = 0,
                    this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120,
                    this.smooth = this.actualOptions.smooth,
                    this.drawers))
                        e.init && await e.init(this);
                    for (let[,e] of this.plugins)
                        e.init && await e.init();
                    for (let[,e] of (this._engine.dispatchEvent("containerInit", {
                        container: this
                    }),
                    this.particles.init(),
                    this.particles.setDensity(),
                    this.plugins))
                        e.particlesSetup && e.particlesSetup();
                    this._engine.dispatchEvent("particlesSetup", {
                        container: this
                    })
                }
            }
            async loadTheme(e) {
                eC(this) && (this._currentTheme = e,
                await this.refresh())
            }
            pause() {
                if (eC(this) && (void 0 !== this._drawAnimationFrame && (cancelAnimationFrame(this._drawAnimationFrame),
                delete this._drawAnimationFrame),
                !this._paused)) {
                    for (let[,e] of this.plugins)
                        e.pause && e.pause();
                    this.pageHidden || (this._paused = !0),
                    this._engine.dispatchEvent("containerPaused", {
                        container: this
                    })
                }
            }
            play(e) {
                if (!eC(this))
                    return;
                let t = this._paused || e;
                if (this._firstStart && !this.actualOptions.autoPlay) {
                    this._firstStart = !1;
                    return
                }
                if (this._paused && (this._paused = !1),
                t)
                    for (let[,e] of this.plugins)
                        e.play && e.play();
                this._engine.dispatchEvent("containerPlay", {
                    container: this
                }),
                this.draw(t || !1)
            }
            async refresh() {
                if (eC(this))
                    return this.stop(),
                    this.start()
            }
            async reset() {
                if (eC(this))
                    return this._initialSourceOptions = void 0,
                    this._options = eP(this._engine, this),
                    this.actualOptions = eP(this._engine, this, this._options),
                    this.refresh()
            }
            setNoise(e, t, i) {
                eC(this) && this.setPath(e, t, i)
            }
            setPath(e, t, i) {
                if (!e || !eC(this))
                    return;
                let s = {
                    ...eO
                };
                (0,
                o.Tn)(e) ? (s.generate = e,
                t && (s.init = t),
                i && (s.update = i)) : (s.generate = e.generate || s.generate,
                s.init = e.init || s.init,
                s.update = e.update || s.update),
                this.addPath("default", s, !0)
            }
            async start() {
                eC(this) && !this.started && (await this.init(),
                this.started = !0,
                await new Promise(e => {
                    this._delayTimeout = setTimeout(async () => {
                        for (let[,e] of (this._eventListeners.addListeners(),
                        this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element),
                        this.plugins))
                            e.start && await e.start();
                        this._engine.dispatchEvent("containerStarted", {
                            container: this
                        }),
                        this.play(),
                        e()
                    }
                    , this._delay)
                }
                ))
            }
            stop() {
                if (eC(this) && this.started) {
                    for (let[,e] of (this._delayTimeout && (clearTimeout(this._delayTimeout),
                    delete this._delayTimeout),
                    this._firstStart = !0,
                    this.started = !1,
                    this._eventListeners.removeListeners(),
                    this.pause(),
                    this.particles.clear(),
                    this.canvas.stop(),
                    this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element),
                    this.plugins))
                        e.stop && e.stop();
                    for (let e of this.plugins.keys())
                        this.plugins.delete(e);
                    this._sourceOptions = this._options,
                    this._engine.dispatchEvent("containerStopped", {
                        container: this
                    })
                }
            }
            updateActualOptions() {
                this.actualOptions.responsive = [];
                let e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                return this.actualOptions.setTheme(this._currentTheme),
                this.responsiveMaxWidth !== e && (this.responsiveMaxWidth = e,
                !0)
            }
        }
        class eT {
            constructor() {
                this._listeners = new Map
            }
            addEventListener(e, t) {
                this.removeEventListener(e, t);
                let i = this._listeners.get(e);
                i || (i = [],
                this._listeners.set(e, i)),
                i.push(t)
            }
            dispatchEvent(e, t) {
                let i = this._listeners.get(e);
                i && i.forEach(e => e(t))
            }
            hasEventListener(e) {
                return !!this._listeners.get(e)
            }
            removeAllEventListeners(e) {
                e ? this._listeners.delete(e) : this._listeners = new Map
            }
            removeEventListener(e, t) {
                let i = this._listeners.get(e);
                if (!i)
                    return;
                let s = i.length
                  , o = i.indexOf(t);
                o < 0 || (1 === s ? this._listeners.delete(e) : i.splice(o, 1))
            }
        }
        function eE(e, t, i, s=!1) {
            let o = t.get(e);
            return (!o || s) && (o = [...i.values()].map(t => t(e)),
            t.set(e, o)),
            o
        }
        class eI {
            constructor(e) {
                this._engine = e,
                this.plugins = [],
                this._initializers = {
                    interactors: new Map,
                    movers: new Map,
                    updaters: new Map
                },
                this.interactors = new Map,
                this.movers = new Map,
                this.updaters = new Map,
                this.presets = new Map,
                this.drawers = new Map,
                this.pathGenerators = new Map
            }
            addInteractor(e, t) {
                this._initializers.interactors.set(e, t)
            }
            addParticleMover(e, t) {
                this._initializers.movers.set(e, t)
            }
            addParticleUpdater(e, t) {
                this._initializers.updaters.set(e, t)
            }
            addPathGenerator(e, t) {
                this.getPathGenerator(e) || this.pathGenerators.set(e, t)
            }
            addPlugin(e) {
                this.getPlugin(e.id) || this.plugins.push(e)
            }
            addPreset(e, t, i=!1) {
                (i || !this.getPreset(e)) && this.presets.set(e, t)
            }
            addShapeDrawer(e, t) {
                (0,
                o.wJ)(e, e => {
                    this.getShapeDrawer(e) || this.drawers.set(e, t)
                }
                )
            }
            destroy(e) {
                this.updaters.delete(e),
                this.movers.delete(e),
                this.interactors.delete(e)
            }
            getAvailablePlugins(e) {
                let t = new Map;
                for (let i of this.plugins)
                    i.needsPlugin(e.actualOptions) && t.set(i.id, i.getPlugin(e));
                return t
            }
            getInteractors(e, t=!1) {
                return eE(e, this.interactors, this._initializers.interactors, t)
            }
            getMovers(e, t=!1) {
                return eE(e, this.movers, this._initializers.movers, t)
            }
            getPathGenerator(e) {
                return this.pathGenerators.get(e)
            }
            getPlugin(e) {
                return this.plugins.find(t => t.id === e)
            }
            getPreset(e) {
                return this.presets.get(e)
            }
            getShapeDrawer(e) {
                return this.drawers.get(e)
            }
            getSupportedShapes() {
                return this.drawers.keys()
            }
            getUpdaters(e, t=!1) {
                return eE(e, this.updaters, this._initializers.updaters, t)
            }
            loadOptions(e, t) {
                for (let i of this.plugins)
                    i.loadOptions(e, t)
            }
            loadParticlesOptions(e, t, ...i) {
                let s = this.updaters.get(e);
                if (s)
                    for (let e of s)
                        e.loadOptions && e.loadOptions(t, ...i)
            }
        }
        async function eR(e) {
            let t = (0,
            o.TA)(e.url, e.index);
            if (!t)
                return e.fallback;
            let i = await fetch(t);
            return i.ok ? i.json() : ((0,
            o.tZ)().error(`${s.dI} ${i.status} while retrieving config file`),
            e.fallback)
        }
        class eD {
            constructor() {
                this._configs = new Map,
                this._domArray = [],
                this._eventDispatcher = new eT,
                this._initialized = !1,
                this.plugins = new eI(this)
            }
            get configs() {
                let e = {};
                for (let[t,i] of this._configs)
                    e[t] = i;
                return e
            }
            get version() {
                return "2.12.0"
            }
            addConfig(e, t) {
                (0,
                o.Kg)(e) ? t && (t.name = e,
                this._configs.set(e, t)) : this._configs.set(e.name ?? "default", e)
            }
            addEventListener(e, t) {
                this._eventDispatcher.addEventListener(e, t)
            }
            async addInteractor(e, t, i=!0) {
                this.plugins.addInteractor(e, t),
                await this.refresh(i)
            }
            async addMover(e, t, i=!0) {
                this.plugins.addParticleMover(e, t),
                await this.refresh(i)
            }
            async addParticleUpdater(e, t, i=!0) {
                this.plugins.addParticleUpdater(e, t),
                await this.refresh(i)
            }
            async addPathGenerator(e, t, i=!0) {
                this.plugins.addPathGenerator(e, t),
                await this.refresh(i)
            }
            async addPlugin(e, t=!0) {
                this.plugins.addPlugin(e),
                await this.refresh(t)
            }
            async addPreset(e, t, i=!1, s=!0) {
                this.plugins.addPreset(e, t, i),
                await this.refresh(s)
            }
            async addShape(e, t, i, s, n, r=!0) {
                let a;
                let l = r, c, d, h;
                (0,
                o.Lm)(i) ? (l = i,
                c = void 0) : c = i,
                (0,
                o.Lm)(s) ? (l = s,
                d = void 0) : d = s,
                (0,
                o.Lm)(n) ? (l = n,
                h = void 0) : h = n,
                a = (0,
                o.Tn)(t) ? {
                    afterEffect: d,
                    destroy: h,
                    draw: t,
                    init: c
                } : t,
                this.plugins.addShapeDrawer(e, a),
                await this.refresh(l)
            }
            dispatchEvent(e, t) {
                this._eventDispatcher.dispatchEvent(e, t)
            }
            dom() {
                return this._domArray
            }
            domItem(e) {
                let t = this.dom()
                  , i = t[e];
                if (!i || i.destroyed) {
                    t.splice(e, 1);
                    return
                }
                return i
            }
            init() {
                this._initialized || (this._initialized = !0)
            }
            async load(e, t) {
                return this.loadFromArray(e, t)
            }
            async loadFromArray(e, t, i) {
                let s;
                return e.id || e.element || e.url || e.options ? s = e : (s = {},
                (0,
                o.Kg)(e) ? s.id = e : s.options = e,
                (0,
                o.Et)(t) ? s.index = t : s.options = t ?? s.options,
                s.index = i ?? s.index),
                this._loadParams(s)
            }
            async loadJSON(e, t, i) {
                let s, n;
                return (0,
                o.Et)(t) || void 0 === t ? s = e : (n = e,
                s = t),
                this._loadParams({
                    id: n,
                    url: s,
                    index: i
                })
            }
            async refresh(e=!0) {
                e && this.dom().forEach(e => e.refresh())
            }
            removeEventListener(e, t) {
                this._eventDispatcher.removeEventListener(e, t)
            }
            async set(e, t, i, s) {
                let n = {
                    index: s
                };
                return (0,
                o.Kg)(e) ? n.id = e : n.element = e,
                t instanceof HTMLElement ? n.element = t : n.options = t,
                (0,
                o.Et)(i) ? n.index = i : n.options = i ?? n.options,
                this._loadParams(n)
            }
            async setJSON(e, t, i, s) {
                let o = {};
                return e instanceof HTMLElement ? (o.element = e,
                o.url = t,
                o.index = i) : (o.id = e,
                o.element = t,
                o.url = i,
                o.index = s),
                this._loadParams(o)
            }
            setOnClickHandler(e) {
                let t = this.dom();
                if (!t.length)
                    throw Error(`${s.dI} can only set click handlers after calling tsParticles.load()`);
                for (let i of t)
                    i.addClickHandler(e)
            }
            async _loadParams(e) {
                let t;
                let i = e.id ?? `tsparticles${Math.floor(1e4 * (0,
                P.G0)())}`
                  , {index: n, url: r} = e
                  , a = r ? await eR({
                    fallback: e.options,
                    url: r,
                    index: n
                }) : e.options
                  , l = e.element ?? document.getElementById(i);
                l || ((l = document.createElement("div")).id = i,
                document.body.append(l));
                let c = (0,
                o.TA)(a, n)
                  , d = this.dom()
                  , h = d.findIndex(e => e.id === i);
                if (h >= 0) {
                    let e = this.domItem(h);
                    e && !e.destroyed && (e.destroy(),
                    d.splice(h, 1))
                }
                if ("canvas" === l.tagName.toLowerCase())
                    (t = l).dataset[s.eb] = "false";
                else {
                    let e = l.getElementsByTagName("canvas");
                    e.length ? (t = e[0]).dataset[s.eb] = "false" : ((t = document.createElement("canvas")).dataset[s.eb] = "true",
                    l.appendChild(t))
                }
                t.style.width || (t.style.width = "100%"),
                t.style.height || (t.style.height = "100%");
                let u = new eS(this,i,c);
                return h >= 0 ? d.splice(h, 0, u) : d.push(u),
                u.canvas.loadCanvas(t),
                await u.start(),
                u
            }
        }
        class eA {
            constructor() {
                this.key = "hsl",
                this.stringPrefix = "hsl"
            }
            handleColor(e) {
                let t = e.value.hsl ?? e.value;
                if (void 0 !== t.h && void 0 !== t.s && void 0 !== t.l)
                    return (0,
                    r.YL)(t)
            }
            handleRangeColor(e) {
                let t = e.value.hsl ?? e.value;
                if (void 0 !== t.h && void 0 !== t.l)
                    return (0,
                    r.YL)({
                        h: (0,
                        P.VG)(t.h),
                        l: (0,
                        P.VG)(t.l),
                        s: (0,
                        P.VG)(t.s)
                    })
            }
            parseString(e) {
                if (!e.startsWith("hsl"))
                    return;
                let t = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);
                return t ? (0,
                r.ay)({
                    a: t.length > 4 ? (0,
                    P.M3)(t[5]) : 1,
                    h: parseInt(t[1], 10),
                    l: parseInt(t[3], 10),
                    s: parseInt(t[2], 10)
                }) : void 0
            }
        }
        class eL {
            constructor() {
                this.key = "rgb",
                this.stringPrefix = "rgb"
            }
            handleColor(e) {
                let t = e.value.rgb ?? e.value;
                if (void 0 !== t.r)
                    return t
            }
            handleRangeColor(e) {
                let t = e.value.rgb ?? e.value;
                if (void 0 !== t.r)
                    return {
                        r: (0,
                        P.VG)(t.r),
                        g: (0,
                        P.VG)(t.g),
                        b: (0,
                        P.VG)(t.b)
                    }
            }
            parseString(e) {
                if (!e.startsWith(this.stringPrefix))
                    return;
                let t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);
                return t ? {
                    a: t.length > 4 ? (0,
                    P.M3)(t[5]) : 1,
                    b: parseInt(t[3], 10),
                    g: parseInt(t[2], 10),
                    r: parseInt(t[1], 10)
                } : void 0
            }
        }
        let ej = function() {
            let e = new eL
              , t = new eA;
            (0,
            r.a9)(e),
            (0,
            r.a9)(t);
            let i = new eD;
            return i.init(),
            i
        }();
        (0,
        o.B9)() || (window.tsParticles = ej)
    }
    ,
    989: (e, t, i) => {
        i.d(t, {
            m: () => tw
        });
        var s = i(9090);
        class o {
            static init(e) {
                let t = new o
                  , i = e.selector;
                if (!i)
                    throw Error("No selector provided");
                let n = document.querySelector(i);
                if (!n)
                    throw Error("No element found for selector");
                return s.$k.set(i.replace(".", "").replace("!", ""), n, {
                    fullScreen: {
                        enable: !1
                    },
                    particles: {
                        color: {
                            value: e.color ?? "!000000"
                        },
                        links: {
                            color: "random",
                            distance: e.minDistance ?? 120,
                            enable: e.connectParticles ?? !1
                        },
                        move: {
                            enable: !0,
                            speed: e.speed ?? .5
                        },
                        number: {
                            value: e.maxParticles ?? 100
                        },
                        size: {
                            value: {
                                min: 1,
                                max: e.sizeVariations ?? 3
                            }
                        }
                    },
                    responsive: e.responsive?.map(t => ({
                        maxWidth: t.breakpoint,
                        options: {
                            particles: {
                                color: {
                                    value: t.options?.color
                                },
                                links: {
                                    distance: t.options?.minDistance,
                                    enable: t.options?.connectParticles
                                },
                                number: {
                                    value: e.maxParticles
                                },
                                move: {
                                    enable: !0,
                                    speed: t.options?.speed
                                },
                                size: {
                                    value: t.options?.sizeVariations
                                }
                            }
                        }
                    }))
                }).then(e => {
                    t._container = e
                }
                ),
                t
            }
            destroy() {
                let e = this._container;
                e && e.destroy()
            }
            pauseAnimation() {
                let e = this._container;
                e && e.pause()
            }
            resumeAnimation() {
                let e = this._container;
                e && e.play()
            }
        }
        let n = e => {
            let t = (t, i) => e.load(t, i);
            return t.load = (t, i, s) => {
                e.loadJSON(t, i).then(e => {
                    e && s(e)
                }
                ).catch( () => {
                    s(void 0)
                }
                )
            }
            ,
            t.setOnClickHandler = t => {
                e.setOnClickHandler(t)
            }
            ,
            {
                particlesJS: t,
                pJSDom: e.dom()
            }
        }
          , r = e => {
            let {particlesJS: t, pJSDom: i} = n(e);
            return window.particlesJS = t,
            window.pJSDom = i,
            window.Particles = o,
            {
                particlesJS: t,
                pJSDom: i,
                Particles: o
            }
        }
        ;
        var a = i(8524);
        class l {
            constructor() {
                this._initSpin = e => {
                    let t = e.container
                      , i = e.options.move.spin;
                    if (!i.enable)
                        return;
                    let s = i.position ?? {
                        x: 50,
                        y: 50
                    }
                      , o = {
                        x: s.x / 100 * t.canvas.size.width,
                        y: s.y / 100 * t.canvas.size.height
                    }
                      , n = e.getPosition()
                      , r = (0,
                    a.Yf)(n, o)
                      , l = (0,
                    a.VG)(i.acceleration);
                    e.retina.spinAcceleration = l * t.retina.pixelRatio,
                    e.spin = {
                        center: o,
                        direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                        angle: e.velocity.angle,
                        radius: r,
                        acceleration: e.retina.spinAcceleration
                    }
                }
            }
            init(e) {
                let t = e.options.move.gravity;
                e.gravity = {
                    enable: t.enable,
                    acceleration: (0,
                    a.VG)(t.acceleration),
                    inverse: t.inverse
                },
                this._initSpin(e)
            }
            isEnabled(e) {
                return !e.destroyed && e.options.move.enable
            }
            move(e, t) {
                let i = e.options
                  , s = i.move;
                if (!s.enable)
                    return;
                let o = e.container
                  , n = o.retina.pixelRatio
                  , r = e.slow.inRange ? e.slow.factor : 1
                  , l = (e.retina.moveSpeed ??= (0,
                a.VG)(s.speed) * n) * o.retina.reduceFactor
                  , c = e.retina.moveDrift ??= (0,
                a.VG)(e.options.move.drift) * n
                  , d = (0,
                a.W9)(i.size.value) * n
                  , h = l * (s.size ? e.getRadius() / d : 1) * r * (t.factor || 1) / 2
                  , u = e.retina.maxSpeed ?? o.retina.maxSpeed;
                s.spin.enable ? function(e, t) {
                    let i = e.container;
                    if (!e.spin)
                        return;
                    let s = {
                        x: "clockwise" === e.spin.direction ? Math.cos : Math.sin,
                        y: "clockwise" === e.spin.direction ? Math.sin : Math.cos
                    };
                    e.position.x = e.spin.center.x + e.spin.radius * s.x(e.spin.angle),
                    e.position.y = e.spin.center.y + e.spin.radius * s.y(e.spin.angle),
                    e.spin.radius += e.spin.acceleration;
                    let o = Math.max(i.canvas.size.width, i.canvas.size.height);
                    e.spin.radius > o / 2 ? (e.spin.radius = o / 2,
                    e.spin.acceleration *= -1) : e.spin.radius < 0 && (e.spin.radius = 0,
                    e.spin.acceleration *= -1),
                    e.spin.angle += t / 100 * (1 - e.spin.radius / o)
                }(e, h) : function(e, t, i, s, o, n) {
                    (function(e, t) {
                        let i = e.options.move.path;
                        if (!i.enable)
                            return;
                        if (e.lastPathTime <= e.pathDelay) {
                            e.lastPathTime += t.value;
                            return
                        }
                        let s = e.pathGenerator?.generate(e, t);
                        s && e.velocity.addTo(s),
                        i.clamp && (e.velocity.x = (0,
                        a.qE)(e.velocity.x, -1, 1),
                        e.velocity.y = (0,
                        a.qE)(e.velocity.y, -1, 1)),
                        e.lastPathTime -= e.pathDelay
                    }
                    )(e, n);
                    let r = e.gravity
                      , l = r?.enable && r.inverse ? -1 : 1;
                    o && i && (e.velocity.x += o * n.factor / (60 * i)),
                    r?.enable && i && (e.velocity.y += l * (r.acceleration * n.factor) / (60 * i));
                    let c = e.moveDecay;
                    e.velocity.multTo(c);
                    let d = e.velocity.mult(i);
                    r?.enable && s > 0 && (!r.inverse && d.y >= 0 && d.y >= s || r.inverse && d.y <= 0 && d.y <= -s) && (d.y = l * s,
                    i && (e.velocity.y = d.y / i));
                    let h = e.options.zIndex
                      , u = (1 - e.zIndexFactor) ** h.velocityRate;
                    d.multTo(u);
                    let {position: p} = e;
                    p.addTo(d),
                    t.vibrate && (p.x += Math.sin(p.x * Math.cos(p.y)),
                    p.y += Math.cos(p.y * Math.sin(p.x)))
                }(e, s, h, u, c, t),
                function(e) {
                    let t = e.initialPosition
                      , {dx: i, dy: s} = (0,
                    a.vr)(t, e.position)
                      , o = Math.abs(i)
                      , n = Math.abs(s)
                      , {maxDistance: r} = e.retina
                      , l = r.horizontal
                      , c = r.vertical;
                    if (l || c) {
                        if ((l && o >= l || c && n >= c) && !e.misplaced)
                            e.misplaced = !!l && o > l || !!c && n > c,
                            l && (e.velocity.x = e.velocity.y / 2 - e.velocity.x),
                            c && (e.velocity.y = e.velocity.x / 2 - e.velocity.y);
                        else if ((!l || o < l) && (!c || n < c) && e.misplaced)
                            e.misplaced = !1;
                        else if (e.misplaced) {
                            let i = e.position
                              , s = e.velocity;
                            l && (i.x < t.x && s.x < 0 || i.x > t.x && s.x > 0) && (s.x *= -(0,
                            a.G0)()),
                            c && (i.y < t.y && s.y < 0 || i.y > t.y && s.y > 0) && (s.y *= -(0,
                            a.G0)())
                        }
                    }
                }(e)
            }
        }
        async function c(e, t=!0) {
            await e.addMover("base", () => new l, t)
        }
        var d = i(2927);
        class h {
            draw(e, t, i) {
                t.circleRange || (t.circleRange = {
                    min: 0,
                    max: 2 * Math.PI
                });
                let s = t.circleRange;
                e.arc(0, 0, i, s.min, s.max, !1)
            }
            getSidesCount() {
                return 12
            }
            particleInit(e, t) {
                let i = t.shapeData
                  , s = i?.angle ?? {
                    max: 360,
                    min: 0
                };
                t.circleRange = (0,
                d.Gv)(s) ? {
                    min: s.min * Math.PI / 180,
                    max: s.max * Math.PI / 180
                } : {
                    min: 0,
                    max: s * Math.PI / 180
                }
            }
        }
        async function u(e, t=!0) {
            await e.addShape("circle", new h, t)
        }
        var p = i(7966);
        function f(e, t, i, s, o) {
            if (!t || !i.enable || (t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0) || (t.time || (t.time = 0),
            (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += e.value),
            (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0)))
                return;
            let n = (0,
            a.U4)(i.offset)
              , r = (t.velocity ?? 0) * e.factor + 3.6 * n
              , l = t.decay ?? 1;
            o && "increasing" !== t.status ? (t.value -= r,
            t.value < 0 && (t.loops || (t.loops = 0),
            t.loops++,
            t.status = "increasing",
            t.value += t.value)) : (t.value += r,
            t.value > s && (t.loops || (t.loops = 0),
            t.loops++,
            o && (t.status = "decreasing",
            t.value -= t.value % s))),
            t.velocity && 1 !== l && (t.velocity *= l),
            t.value > s && (t.value %= s)
        }
        class m {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = (0,
                p.R5)(e.options.color, e.id, e.options.reduceDuplicates);
                t && (e.color = (0,
                p.pz)(t, e.options.color.animation, this.container.retina.reduceFactor))
            }
            isEnabled(e) {
                let {h: t, s: i, l: s} = e.options.color.animation
                  , {color: o} = e;
                return !e.destroyed && !e.spawning && (o?.h.value !== void 0 && t.enable || o?.s.value !== void 0 && i.enable || o?.l.value !== void 0 && s.enable)
            }
            update(e, t) {
                !function(e, t) {
                    let {h: i, s: s, l: o} = e.options.color.animation
                      , {color: n} = e;
                    if (!n)
                        return;
                    let {h: r, s: a, l} = n;
                    r && f(t, r, i, 360, !1),
                    a && f(t, a, s, 100, !0),
                    l && f(t, l, o, 100, !0)
                }(e, t)
            }
        }
        async function g(e, t=!0) {
            await e.addParticleUpdater("color", e => new m(e), t)
        }
        class y {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = e.options.opacity;
                e.opacity = (0,
                d.Xs)(t, 1);
                let i = t.animation;
                i.enable && (e.opacity.velocity = (0,
                a.VG)(i.speed) / 100 * this.container.retina.reduceFactor,
                i.sync || (e.opacity.velocity *= (0,
                a.G0)()))
            }
            isEnabled(e) {
                return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && ((e.opacity.maxLoops ?? 0) <= 0 || (e.opacity.maxLoops ?? 0) > 0 && (e.opacity.loops ?? 0) < (e.opacity.maxLoops ?? 0))
            }
            reset(e) {
                e.opacity && (e.opacity.time = 0,
                e.opacity.loops = 0)
            }
            update(e, t) {
                this.isEnabled(e) && function(e, t) {
                    let i = e.opacity;
                    if (e.destroyed || !i?.enable || (i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
                        return;
                    let s = i.min
                      , o = i.max
                      , n = i.decay ?? 1;
                    if (i.time || (i.time = 0),
                    (i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0) && (i.time += t.value),
                    !((i.delayTime ?? 0) > 0) || !(i.time < (i.delayTime ?? 0))) {
                        switch (i.status) {
                        case "increasing":
                            i.value >= o ? (i.status = "decreasing",
                            i.loops || (i.loops = 0),
                            i.loops++) : i.value += (i.velocity ?? 0) * t.factor;
                            break;
                        case "decreasing":
                            i.value <= s ? (i.status = "increasing",
                            i.loops || (i.loops = 0),
                            i.loops++) : i.value -= (i.velocity ?? 0) * t.factor
                        }
                        i.velocity && 1 !== i.decay && (i.velocity *= n),
                        function(e, t, i, s) {
                            switch (e.options.opacity.animation.destroy) {
                            case "max":
                                t >= s && e.destroy();
                                break;
                            case "min":
                                t <= i && e.destroy()
                            }
                        }(e, i.value, s, o),
                        e.destroyed || (i.value = (0,
                        a.qE)(i.value, s, o))
                    }
                }(e, t)
            }
        }
        async function v(e, t=!0) {
            await e.addParticleUpdater("opacity", e => new y(e), t)
        }
        class b {
            constructor(e) {
                this.container = e,
                this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s))
                    return;
                let o = this.container
                  , n = !1;
                for (let[,s] of o.plugins)
                    if (void 0 !== s.particleBounce && (n = s.particleBounce(e, i, t)),
                    n)
                        break;
                if (n)
                    return;
                let r = e.getPosition()
                  , l = e.offset
                  , c = e.getRadius()
                  , h = (0,
                d.AE)(r, c)
                  , u = o.canvas.size;
                !function(e) {
                    if ("bounce" !== e.outMode && "bounce-horizontal" !== e.outMode && "bounceHorizontal" !== e.outMode && "split" !== e.outMode || "left" !== e.direction && "right" !== e.direction)
                        return;
                    e.bounds.right < 0 && "left" === e.direction ? e.particle.position.x = e.size + e.offset.x : e.bounds.left > e.canvasSize.width && "right" === e.direction && (e.particle.position.x = e.canvasSize.width - e.size - e.offset.x);
                    let t = e.particle.velocity.x
                      , i = !1;
                    if ("right" === e.direction && e.bounds.right >= e.canvasSize.width && t > 0 || "left" === e.direction && e.bounds.left <= 0 && t < 0) {
                        let t = (0,
                        a._W)(e.particle.options.bounce.horizontal);
                        e.particle.velocity.x *= -t,
                        i = !0
                    }
                    if (!i)
                        return;
                    let s = e.offset.x + e.size;
                    e.bounds.right >= e.canvasSize.width && "right" === e.direction ? e.particle.position.x = e.canvasSize.width - s : e.bounds.left <= 0 && "left" === e.direction && (e.particle.position.x = s),
                    "split" === e.outMode && e.particle.destroy()
                }({
                    particle: e,
                    outMode: s,
                    direction: t,
                    bounds: h,
                    canvasSize: u,
                    offset: l,
                    size: c
                }),
                function(e) {
                    if ("bounce" !== e.outMode && "bounce-vertical" !== e.outMode && "bounceVertical" !== e.outMode && "split" !== e.outMode || "bottom" !== e.direction && "top" !== e.direction)
                        return;
                    e.bounds.bottom < 0 && "top" === e.direction ? e.particle.position.y = e.size + e.offset.y : e.bounds.top > e.canvasSize.height && "bottom" === e.direction && (e.particle.position.y = e.canvasSize.height - e.size - e.offset.y);
                    let t = e.particle.velocity.y
                      , i = !1;
                    if ("bottom" === e.direction && e.bounds.bottom >= e.canvasSize.height && t > 0 || "top" === e.direction && e.bounds.top <= 0 && t < 0) {
                        let t = (0,
                        a._W)(e.particle.options.bounce.vertical);
                        e.particle.velocity.y *= -t,
                        i = !0
                    }
                    if (!i)
                        return;
                    let s = e.offset.y + e.size;
                    e.bounds.bottom >= e.canvasSize.height && "bottom" === e.direction ? e.particle.position.y = e.canvasSize.height - s : e.bounds.top <= 0 && "top" === e.direction && (e.particle.position.y = s),
                    "split" === e.outMode && e.particle.destroy()
                }({
                    particle: e,
                    outMode: s,
                    direction: t,
                    bounds: h,
                    canvasSize: u,
                    offset: l,
                    size: c
                })
            }
        }
        var w = i(7249);
        class x {
            constructor(e) {
                this.container = e,
                this.modes = ["destroy"]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s))
                    return;
                let o = this.container;
                switch (e.outType) {
                case "normal":
                case "outside":
                    if ((0,
                    d.Tj)(e.position, o.canvas.size, w.M.origin, e.getRadius(), t))
                        return;
                    break;
                case "inside":
                    {
                        let {dx: t, dy: i} = (0,
                        a.vr)(e.position, e.moveCenter)
                          , {x: s, y: o} = e.velocity;
                        if (s < 0 && t > e.moveCenter.radius || o < 0 && i > e.moveCenter.radius || s >= 0 && t < -e.moveCenter.radius || o >= 0 && i < -e.moveCenter.radius)
                            return
                    }
                }
                o.particles.remove(e, void 0, !0)
            }
        }
        class _ {
            constructor(e) {
                this.container = e,
                this.modes = ["none"]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s) || e.options.move.distance.horizontal && ("left" === t || "right" === t) || e.options.move.distance.vertical && ("top" === t || "bottom" === t))
                    return;
                let o = e.options.move.gravity
                  , n = this.container
                  , r = n.canvas.size
                  , a = e.getRadius();
                if (o.enable) {
                    let i = e.position;
                    (!o.inverse && i.y > r.height + a && "bottom" === t || o.inverse && i.y < -a && "top" === t) && n.particles.remove(e)
                } else {
                    if (e.velocity.y > 0 && e.position.y <= r.height + a || e.velocity.y < 0 && e.position.y >= -a || e.velocity.x > 0 && e.position.x <= r.width + a || e.velocity.x < 0 && e.position.x >= -a)
                        return;
                    (0,
                    d.Tj)(e.position, n.canvas.size, w.M.origin, a, t) || n.particles.remove(e)
                }
            }
        }
        class k {
            constructor(e) {
                this.container = e,
                this.modes = ["out"]
            }
            update(e, t, i, s) {
                if (!this.modes.includes(s))
                    return;
                let o = this.container;
                if ("inside" === e.outType) {
                    let {x: t, y: i} = e.velocity
                      , s = w.M.origin;
                    s.length = e.moveCenter.radius,
                    s.angle = e.velocity.angle + Math.PI,
                    s.addTo(w.M.create(e.moveCenter));
                    let {dx: n, dy: r} = (0,
                    a.vr)(e.position, s);
                    if (t <= 0 && n >= 0 || i <= 0 && r >= 0 || t >= 0 && n <= 0 || i >= 0 && r <= 0)
                        return;
                    e.position.x = Math.floor((0,
                    a.U4)({
                        min: 0,
                        max: o.canvas.size.width
                    })),
                    e.position.y = Math.floor((0,
                    a.U4)({
                        min: 0,
                        max: o.canvas.size.height
                    }));
                    let {dx: l, dy: c} = (0,
                    a.vr)(e.position, e.moveCenter);
                    e.direction = Math.atan2(-c, -l),
                    e.velocity.angle = e.direction
                } else {
                    if ((0,
                    d.Tj)(e.position, o.canvas.size, w.M.origin, e.getRadius(), t))
                        return;
                    switch (e.outType) {
                    case "outside":
                        {
                            e.position.x = Math.floor((0,
                            a.U4)({
                                min: -e.moveCenter.radius,
                                max: e.moveCenter.radius
                            })) + e.moveCenter.x,
                            e.position.y = Math.floor((0,
                            a.U4)({
                                min: -e.moveCenter.radius,
                                max: e.moveCenter.radius
                            })) + e.moveCenter.y;
                            let {dx: t, dy: i} = (0,
                            a.vr)(e.position, e.moveCenter);
                            e.moveCenter.radius && (e.direction = Math.atan2(i, t),
                            e.velocity.angle = e.direction);
                            break
                        }
                    case "normal":
                        {
                            let i = e.options.move.warp
                              , s = o.canvas.size
                              , n = {
                                bottom: s.height + e.getRadius() + e.offset.y,
                                left: -e.getRadius() - e.offset.x,
                                right: s.width + e.getRadius() + e.offset.x,
                                top: -e.getRadius() - e.offset.y
                            }
                              , r = e.getRadius()
                              , l = (0,
                            d.AE)(e.position, r);
                            "right" === t && l.left > s.width + e.offset.x ? (e.position.x = n.left,
                            e.initialPosition.x = e.position.x,
                            i || (e.position.y = (0,
                            a.G0)() * s.height,
                            e.initialPosition.y = e.position.y)) : "left" === t && l.right < -e.offset.x && (e.position.x = n.right,
                            e.initialPosition.x = e.position.x,
                            i || (e.position.y = (0,
                            a.G0)() * s.height,
                            e.initialPosition.y = e.position.y)),
                            "bottom" === t && l.top > s.height + e.offset.y ? (i || (e.position.x = (0,
                            a.G0)() * s.width,
                            e.initialPosition.x = e.position.x),
                            e.position.y = n.top,
                            e.initialPosition.y = e.position.y) : "top" === t && l.bottom < -e.offset.y && (i || (e.position.x = (0,
                            a.G0)() * s.width,
                            e.initialPosition.x = e.position.x),
                            e.position.y = n.bottom,
                            e.initialPosition.y = e.position.y)
                        }
                    }
                }
            }
        }
        class z {
            constructor(e) {
                this.container = e,
                this._updateOutMode = (e, t, i, s) => {
                    for (let o of this.updaters)
                        o.update(e, s, t, i)
                }
                ,
                this.updaters = [new b(e), new x(e), new k(e), new _(e)]
            }
            init() {}
            isEnabled(e) {
                return !e.destroyed && !e.spawning
            }
            update(e, t) {
                let i = e.options.move.outModes;
                this._updateOutMode(e, t, i.bottom ?? i.default, "bottom"),
                this._updateOutMode(e, t, i.left ?? i.default, "left"),
                this._updateOutMode(e, t, i.right ?? i.default, "right"),
                this._updateOutMode(e, t, i.top ?? i.default, "top")
            }
        }
        async function M(e, t=!0) {
            await e.addParticleUpdater("outModes", e => new z(e), t)
        }
        class C {
            init(e) {
                let t = e.container
                  , i = e.options.size.animation;
                i.enable && (e.size.velocity = (e.retina.sizeAnimationSpeed ?? t.retina.sizeAnimationSpeed) / 100 * t.retina.reduceFactor,
                i.sync || (e.size.velocity *= (0,
                a.G0)()))
            }
            isEnabled(e) {
                return !e.destroyed && !e.spawning && e.size.enable && ((e.size.maxLoops ?? 0) <= 0 || (e.size.maxLoops ?? 0) > 0 && (e.size.loops ?? 0) < (e.size.maxLoops ?? 0))
            }
            reset(e) {
                e.size.loops = 0
            }
            update(e, t) {
                this.isEnabled(e) && function(e, t) {
                    let i = e.size;
                    if (e.destroyed || !i || !i.enable || (i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
                        return;
                    let s = (i.velocity ?? 0) * t.factor
                      , o = i.min
                      , n = i.max
                      , r = i.decay ?? 1;
                    if (i.time || (i.time = 0),
                    (i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0) && (i.time += t.value),
                    !((i.delayTime ?? 0) > 0) || !(i.time < (i.delayTime ?? 0))) {
                        switch (i.status) {
                        case "increasing":
                            i.value >= n ? (i.status = "decreasing",
                            i.loops || (i.loops = 0),
                            i.loops++) : i.value += s;
                            break;
                        case "decreasing":
                            i.value <= o ? (i.status = "increasing",
                            i.loops || (i.loops = 0),
                            i.loops++) : i.value -= s
                        }
                        i.velocity && 1 !== r && (i.velocity *= r),
                        function(e, t, i, s) {
                            switch (e.options.size.animation.destroy) {
                            case "max":
                                t >= s && e.destroy();
                                break;
                            case "min":
                                t <= i && e.destroy()
                            }
                        }(e, i.value, o, n),
                        e.destroyed || (i.value = (0,
                        a.qE)(i.value, o, n))
                    }
                }(e, t)
            }
        }
        async function P(e, t=!0) {
            await e.addParticleUpdater("size", () => new C, t)
        }
        async function O(e, t=!0) {
            await c(e, !1),
            await u(e, !1),
            await g(e, !1),
            await v(e, !1),
            await M(e, !1),
            await P(e, !1),
            await e.refresh(t)
        }
        async function S() {
            (0,
            a.nL)("ease-in-quad", e => e ** 2),
            (0,
            a.nL)("ease-out-quad", e => 1 - (1 - e) ** 2),
            (0,
            a.nL)("ease-in-out-quad", e => e < .5 ? 2 * e ** 2 : 1 - (-2 * e + 2) ** 2 / 2)
        }
        class T {
            constructor(e) {
                this.container = e,
                this.type = "external"
            }
        }
        var E = i(2286)
          , I = i(5739);
        class R {
            constructor() {
                this.distance = 200,
                this.duration = .4,
                this.easing = "ease-out-quad",
                this.factor = 1,
                this.maxSpeed = 50,
                this.speed = 1
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                void 0 !== e.duration && (this.duration = e.duration),
                void 0 !== e.easing && (this.easing = e.easing),
                void 0 !== e.factor && (this.factor = e.factor),
                void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed),
                void 0 !== e.speed && (this.speed = e.speed))
            }
        }
        class D extends T {
            constructor(e, t) {
                super(t),
                this._clickAttract = () => {
                    let e = this.container;
                    e.attract || (e.attract = {
                        particles: []
                    });
                    let {attract: t} = e;
                    if (t.finish || (t.count || (t.count = 0),
                    t.count++,
                    t.count !== e.particles.count || (t.finish = !0)),
                    t.clicking) {
                        let t = e.interactivity.mouse.clickPosition
                          , i = e.retina.attractModeDistance;
                        if (!i || i < 0 || !t)
                            return;
                        this._processAttract(t, i, new E.j(t.x,t.y,i))
                    } else
                        !1 === t.clicking && (t.particles = [])
                }
                ,
                this._hoverAttract = () => {
                    let e = this.container
                      , t = e.interactivity.mouse.position
                      , i = e.retina.attractModeDistance;
                    i && !(i < 0) && t && this._processAttract(t, i, new E.j(t.x,t.y,i))
                }
                ,
                this._processAttract = (e, t, i) => {
                    let s = this.container
                      , o = s.actualOptions.interactivity.modes.attract;
                    if (o)
                        for (let n of s.particles.quadTree.query(i, e => this.isEnabled(e))) {
                            let {dx: i, dy: s, distance: r} = (0,
                            a.vr)(n.position, e)
                              , l = o.speed * o.factor
                              , c = (0,
                            a.qE)((0,
                            a.il)(o.easing)(1 - r / t) * l, 0, o.maxSpeed)
                              , d = w.M.create(0 === r ? l : i / r * c, 0 === r ? l : s / r * c);
                            n.position.subFrom(d)
                        }
                }
                ,
                this._engine = e,
                t.attract || (t.attract = {
                    particles: []
                }),
                this.handleClickMode = e => {
                    let i = this.container.actualOptions.interactivity.modes.attract;
                    if (i && "attract" === e) {
                        for (let e of (t.attract || (t.attract = {
                            particles: []
                        }),
                        t.attract.clicking = !0,
                        t.attract.count = 0,
                        t.attract.particles))
                            this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
                        t.attract.particles = [],
                        t.attract.finish = !1,
                        setTimeout( () => {
                            t.destroyed || (t.attract || (t.attract = {
                                particles: []
                            }),
                            t.attract.clicking = !1)
                        }
                        , 1e3 * i.duration)
                    }
                }
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.attract;
                t && (e.retina.attractModeDistance = t.distance * e.retina.pixelRatio)
            }
            async interact() {
                let e = this.container
                  , t = e.actualOptions
                  , i = e.interactivity.status === I.Rb
                  , s = t.interactivity.events
                  , o = s.onHover.enable
                  , n = s.onHover.mode
                  , r = s.onClick.enable
                  , a = s.onClick.mode;
                i && o && (0,
                d.hn)("attract", n) ? this._hoverAttract() : r && (0,
                d.hn)("attract", a) && this._clickAttract()
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , o = (e?.interactivity ?? i.interactivity).events;
                if ((!s.position || !o.onHover.enable) && (!s.clickPosition || !o.onClick.enable))
                    return !1;
                let n = o.onHover.mode
                  , r = o.onClick.mode;
                return (0,
                d.hn)("attract", n) || (0,
                d.hn)("attract", r)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.attract || (e.attract = new R),
                t))
                    e.attract.load(i?.attract)
            }
            reset() {}
        }
        async function A(e, t=!0) {
            await e.addInteractor("externalAttract", t => new D(e,t), t)
        }
        var L = i(2835);
        class j {
            constructor() {
                this.distance = 200
            }
            load(e) {
                e && void 0 !== e.distance && (this.distance = e.distance)
            }
        }
        class V extends T {
            constructor(e) {
                super(e),
                this._processBounce = (e, t, i) => {
                    for (let s of this.container.particles.quadTree.query(i, e => this.isEnabled(e)))
                        i instanceof E.j ? (0,
                        d.pE)((0,
                        d.Tg)(s), {
                            position: e,
                            radius: t,
                            mass: t ** 2 * Math.PI / 2,
                            velocity: w.M.origin,
                            factor: w.M.origin
                        }) : i instanceof L.M && (0,
                        d.jo)(s, (0,
                        d.AE)(e, t))
                }
                ,
                this._processMouseBounce = () => {
                    let e = this.container
                      , t = e.retina.pixelRatio
                      , i = e.interactivity.mouse.position
                      , s = e.retina.bounceModeDistance;
                    s && !(s < 0) && i && this._processBounce(i, s, new E.j(i.x,i.y,s + 10 * t))
                }
                ,
                this._singleSelectorBounce = (e, t) => {
                    let i = this.container
                      , s = document.querySelectorAll(e);
                    s.length && s.forEach(e => {
                        let s = i.retina.pixelRatio
                          , o = {
                            x: (e.offsetLeft + e.offsetWidth / 2) * s,
                            y: (e.offsetTop + e.offsetHeight / 2) * s
                        }
                          , n = e.offsetWidth / 2 * s
                          , r = 10 * s
                          , a = "circle" === t.type ? new E.j(o.x,o.y,n + r) : new L.M(e.offsetLeft * s - r,e.offsetTop * s - r,e.offsetWidth * s + 2 * r,e.offsetHeight * s + 2 * r);
                        this._processBounce(o, n, a)
                    }
                    )
                }
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.bounce;
                t && (e.retina.bounceModeDistance = t.distance * e.retina.pixelRatio)
            }
            async interact() {
                let e = this.container
                  , t = e.actualOptions.interactivity.events
                  , i = e.interactivity.status === I.Rb
                  , s = t.onHover.enable
                  , o = t.onHover.mode
                  , n = t.onDiv;
                i && s && (0,
                d.hn)("bounce", o) ? this._processMouseBounce() : (0,
                d.U6)("bounce", n, (e, t) => this._singleSelectorBounce(e, t))
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , o = (e?.interactivity ?? i.interactivity).events
                  , n = o.onDiv;
                return s.position && o.onHover.enable && (0,
                d.hn)("bounce", o.onHover.mode) || (0,
                d.iK)("bounce", n)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.bounce || (e.bounce = new j),
                t))
                    e.bounce.load(i?.bounce)
            }
            reset() {}
        }
        async function G(e, t=!0) {
            await e.addInteractor("externalBounce", e => new V(e), t)
        }
        var B = i(6463);
        class q {
            constructor() {
                this.distance = 200,
                this.duration = .4,
                this.mix = !1
            }
            load(e) {
                if (e) {
                    if (void 0 !== e.distance && (this.distance = e.distance),
                    void 0 !== e.duration && (this.duration = e.duration),
                    void 0 !== e.mix && (this.mix = e.mix),
                    void 0 !== e.opacity && (this.opacity = e.opacity),
                    void 0 !== e.color) {
                        let t = (0,
                        d.cy)(this.color) ? void 0 : this.color;
                        this.color = (0,
                        d.wJ)(e.color, e => B.O.create(t, e))
                    }
                    void 0 !== e.size && (this.size = e.size)
                }
            }
        }
        class F extends q {
            constructor() {
                super(),
                this.selectors = []
            }
            get ids() {
                return (0,
                d.wJ)(this.selectors, e => e.replace("#", ""))
            }
            set ids(e) {
                this.selectors = (0,
                d.wJ)(e, e => `#${e}`)
            }
            load(e) {
                super.load(e),
                e && (void 0 !== e.ids && (this.ids = e.ids),
                void 0 !== e.selectors && (this.selectors = e.selectors))
            }
        }
        class U extends q {
            load(e) {
                super.load(e),
                e && (this.divs = (0,
                d.wJ)(e.divs, e => {
                    let t = new F;
                    return t.load(e),
                    t
                }
                ))
            }
        }
        function W(e, t, i, s) {
            return t >= i ? (0,
            a.qE)(e + (t - i) * s, e, t) : t < i ? (0,
            a.qE)(e - (i - t) * s, t, e) : void 0
        }
        class N extends T {
            constructor(e) {
                super(e),
                this._clickBubble = () => {
                    let e = this.container
                      , t = e.actualOptions
                      , i = e.interactivity.mouse.clickPosition
                      , s = t.interactivity.modes.bubble;
                    if (!s || !i)
                        return;
                    e.bubble || (e.bubble = {});
                    let o = e.retina.bubbleModeDistance;
                    if (!o || o < 0)
                        return;
                    let n = e.particles.quadTree.queryCircle(i, o, e => this.isEnabled(e))
                      , {bubble: r} = e;
                    for (let t of n) {
                        if (!r.clicking)
                            continue;
                        t.bubble.inRange = !r.durationEnd;
                        let n = t.getPosition()
                          , l = (0,
                        a.Yf)(n, i)
                          , c = (new Date().getTime() - (e.interactivity.mouse.clickTime || 0)) / 1e3;
                        c > s.duration && (r.durationEnd = !0),
                        c > 2 * s.duration && (r.clicking = !1,
                        r.durationEnd = !1);
                        let d = {
                            bubbleObj: {
                                optValue: e.retina.bubbleModeSize,
                                value: t.bubble.radius
                            },
                            particlesObj: {
                                optValue: (0,
                                a.W9)(t.options.size.value) * e.retina.pixelRatio,
                                value: t.size.value
                            },
                            type: "size"
                        };
                        this._process(t, l, c, d);
                        let h = {
                            bubbleObj: {
                                optValue: s.opacity,
                                value: t.bubble.opacity
                            },
                            particlesObj: {
                                optValue: (0,
                                a.W9)(t.options.opacity.value),
                                value: t.opacity?.value ?? 1
                            },
                            type: "opacity"
                        };
                        this._process(t, l, c, h),
                        !r.durationEnd && l <= o ? this._hoverBubbleColor(t, l) : delete t.bubble.color
                    }
                }
                ,
                this._hoverBubble = () => {
                    let e = this.container
                      , t = e.interactivity.mouse.position
                      , i = e.retina.bubbleModeDistance;
                    if (i && !(i < 0) && void 0 !== t)
                        for (let s of e.particles.quadTree.queryCircle(t, i, e => this.isEnabled(e))) {
                            s.bubble.inRange = !0;
                            let o = s.getPosition()
                              , n = (0,
                            a.Yf)(o, t)
                              , r = 1 - n / i;
                            n <= i ? r >= 0 && e.interactivity.status === I.Rb && (this._hoverBubbleSize(s, r),
                            this._hoverBubbleOpacity(s, r),
                            this._hoverBubbleColor(s, r)) : this.reset(s),
                            e.interactivity.status === I.Z0 && this.reset(s)
                        }
                }
                ,
                this._hoverBubbleColor = (e, t, i) => {
                    let s = this.container.actualOptions
                      , o = i ?? s.interactivity.modes.bubble;
                    if (o) {
                        if (!e.bubble.finalColor) {
                            let t = o.color;
                            if (!t)
                                return;
                            let i = (0,
                            d.TA)(t);
                            e.bubble.finalColor = (0,
                            p.R5)(i)
                        }
                        if (e.bubble.finalColor) {
                            if (o.mix) {
                                e.bubble.color = void 0;
                                let i = e.getFillColor();
                                e.bubble.color = i ? (0,
                                p.K6)((0,
                                p.EY)(i, e.bubble.finalColor, 1 - t, t)) : e.bubble.finalColor
                            } else
                                e.bubble.color = e.bubble.finalColor
                        }
                    }
                }
                ,
                this._hoverBubbleOpacity = (e, t, i) => {
                    let s = this.container.actualOptions
                      , o = i?.opacity ?? s.interactivity.modes.bubble?.opacity;
                    if (!o)
                        return;
                    let n = e.options.opacity.value
                      , r = W(e.opacity?.value ?? 1, o, (0,
                    a.W9)(n), t);
                    void 0 !== r && (e.bubble.opacity = r)
                }
                ,
                this._hoverBubbleSize = (e, t, i) => {
                    let s = this.container
                      , o = i?.size ? i.size * s.retina.pixelRatio : s.retina.bubbleModeSize;
                    if (void 0 === o)
                        return;
                    let n = (0,
                    a.W9)(e.options.size.value) * s.retina.pixelRatio
                      , r = W(e.size.value, o, n, t);
                    void 0 !== r && (e.bubble.radius = r)
                }
                ,
                this._process = (e, t, i, s) => {
                    let o = this.container
                      , n = s.bubbleObj.optValue
                      , r = o.actualOptions.interactivity.modes.bubble;
                    if (!r || void 0 === n)
                        return;
                    let a = r.duration
                      , l = o.retina.bubbleModeDistance
                      , c = s.particlesObj.optValue
                      , d = s.bubbleObj.value
                      , h = s.particlesObj.value || 0
                      , u = s.type;
                    if (l && !(l < 0) && n !== c) {
                        if (o.bubble || (o.bubble = {}),
                        o.bubble.durationEnd)
                            d && ("size" === u && delete e.bubble.radius,
                            "opacity" === u && delete e.bubble.opacity);
                        else if (t <= l) {
                            if ((d ?? h) !== n) {
                                let t = h - i * (h - n) / a;
                                "size" === u && (e.bubble.radius = t),
                                "opacity" === u && (e.bubble.opacity = t)
                            }
                        } else
                            "size" === u && delete e.bubble.radius,
                            "opacity" === u && delete e.bubble.opacity
                    }
                }
                ,
                this._singleSelectorHover = (e, t, i) => {
                    let s = this.container
                      , o = document.querySelectorAll(t)
                      , n = s.actualOptions.interactivity.modes.bubble;
                    n && o.length && o.forEach(t => {
                        let o = s.retina.pixelRatio
                          , r = {
                            x: (t.offsetLeft + t.offsetWidth / 2) * o,
                            y: (t.offsetTop + t.offsetHeight / 2) * o
                        }
                          , a = t.offsetWidth / 2 * o
                          , l = "circle" === i.type ? new E.j(r.x,r.y,a) : new L.M(t.offsetLeft * o,t.offsetTop * o,t.offsetWidth * o,t.offsetHeight * o);
                        for (let i of s.particles.quadTree.query(l, e => this.isEnabled(e))) {
                            if (!l.contains(i.getPosition()))
                                continue;
                            i.bubble.inRange = !0;
                            let s = n.divs
                              , o = (0,
                            d.NV)(s, t);
                            i.bubble.div && i.bubble.div === t || (this.clear(i, e, !0),
                            i.bubble.div = t),
                            this._hoverBubbleSize(i, 1, o),
                            this._hoverBubbleOpacity(i, 1, o),
                            this._hoverBubbleColor(i, 1, o)
                        }
                    }
                    )
                }
                ,
                e.bubble || (e.bubble = {}),
                this.handleClickMode = t => {
                    "bubble" === t && (e.bubble || (e.bubble = {}),
                    e.bubble.clicking = !0)
                }
            }
            clear(e, t, i) {
                (!e.bubble.inRange || i) && (delete e.bubble.div,
                delete e.bubble.opacity,
                delete e.bubble.radius,
                delete e.bubble.color)
            }
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.bubble;
                t && (e.retina.bubbleModeDistance = t.distance * e.retina.pixelRatio,
                void 0 !== t.size && (e.retina.bubbleModeSize = t.size * e.retina.pixelRatio))
            }
            async interact(e) {
                let t = this.container.actualOptions.interactivity.events
                  , i = t.onHover
                  , s = t.onClick
                  , o = i.enable
                  , n = i.mode
                  , r = s.enable
                  , a = s.mode
                  , l = t.onDiv;
                o && (0,
                d.hn)("bubble", n) ? this._hoverBubble() : r && (0,
                d.hn)("bubble", a) ? this._clickBubble() : (0,
                d.U6)("bubble", l, (t, i) => this._singleSelectorHover(e, t, i))
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , {onClick: o, onDiv: n, onHover: r} = (e?.interactivity ?? i.interactivity).events
                  , a = (0,
                d.iK)("bubble", n);
                return (!!a || !!r.enable && !!s.position || !!o.enable && !!s.clickPosition) && ((0,
                d.hn)("bubble", r.mode) || (0,
                d.hn)("bubble", o.mode) || a)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.bubble || (e.bubble = new U),
                t))
                    e.bubble.load(i?.bubble)
            }
            reset(e) {
                e.bubble.inRange = !1
            }
        }
        async function H(e, t=!0) {
            await e.addInteractor("externalBubble", e => new N(e), t)
        }
        class $ {
            constructor() {
                this.opacity = .5
            }
            load(e) {
                e && void 0 !== e.opacity && (this.opacity = e.opacity)
            }
        }
        class Y {
            constructor() {
                this.distance = 80,
                this.links = new $,
                this.radius = 60
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(e) {
                this.links = e
            }
            get line_linked() {
                return this.links
            }
            set line_linked(e) {
                this.links = e
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                this.links.load(e.links ?? e.lineLinked ?? e.line_linked),
                void 0 !== e.radius && (this.radius = e.radius))
            }
        }
        var J = i(6387);
        class K extends T {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.connect;
                t && (e.retina.connectModeDistance = t.distance * e.retina.pixelRatio,
                e.retina.connectModeRadius = t.radius * e.retina.pixelRatio)
            }
            async interact() {
                let e = this.container;
                if (e.actualOptions.interactivity.events.onHover.enable && "pointermove" === e.interactivity.status) {
                    let t = e.interactivity.mouse.position;
                    if (!e.retina.connectModeDistance || e.retina.connectModeDistance < 0 || !e.retina.connectModeRadius || e.retina.connectModeRadius < 0 || !t)
                        return;
                    let i = Math.abs(e.retina.connectModeRadius)
                      , s = e.particles.quadTree.queryCircle(t, i, e => this.isEnabled(e))
                      , o = 0;
                    for (let t of s) {
                        let i = t.getPosition();
                        for (let n of s.slice(o + 1)) {
                            let s = n.getPosition()
                              , o = Math.abs(e.retina.connectModeDistance)
                              , r = Math.abs(i.x - s.x)
                              , a = Math.abs(i.y - s.y);
                            r < o && a < o && function(e, t, i) {
                                e.canvas.draw(s => {
                                    var o;
                                    let n = function(e, t, i, s) {
                                        let o = e.actualOptions.interactivity.modes.connect;
                                        if (o)
                                            return function(e, t, i, s) {
                                                let o = Math.floor(i.getRadius() / t.getRadius())
                                                  , n = t.getFillColor()
                                                  , r = i.getFillColor();
                                                if (!n || !r)
                                                    return;
                                                let a = t.getPosition()
                                                  , l = i.getPosition()
                                                  , c = (0,
                                                p.EY)(n, r, t.getRadius(), i.getRadius())
                                                  , d = e.createLinearGradient(a.x, a.y, l.x, l.y);
                                                return d.addColorStop(0, (0,
                                                p.LC)(n, s)),
                                                d.addColorStop(o > 1 ? 1 : o, (0,
                                                p.xx)(c, s)),
                                                d.addColorStop(1, (0,
                                                p.LC)(r, s)),
                                                d
                                            }(t, i, s, o.links.opacity)
                                    }(e, s, t, i);
                                    if (!n)
                                        return;
                                    let r = t.getPosition()
                                      , a = i.getPosition();
                                    o = t.retina.linksWidth ?? 0,
                                    (0,
                                    J.V6)(s, r, a),
                                    s.lineWidth = o,
                                    s.strokeStyle = n,
                                    s.stroke()
                                }
                                )
                            }(e, t, n)
                        }
                        ++o
                    }
                }
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.interactivity.mouse
                  , s = (e?.interactivity ?? t.actualOptions.interactivity).events;
                return !!s.onHover.enable && !!i.position && (0,
                d.hn)("connect", s.onHover.mode)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.connect || (e.connect = new Y),
                t))
                    e.connect.load(i?.connect)
            }
            reset() {}
        }
        async function Z(e, t=!0) {
            await e.addInteractor("externalConnect", e => new K(e), t)
        }
        class X {
            constructor() {
                this.blink = !1,
                this.consent = !1,
                this.opacity = 1
            }
            load(e) {
                e && (void 0 !== e.blink && (this.blink = e.blink),
                void 0 !== e.color && (this.color = B.O.create(this.color, e.color)),
                void 0 !== e.consent && (this.consent = e.consent),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class Q {
            constructor() {
                this.distance = 100,
                this.links = new X
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(e) {
                this.links = e
            }
            get line_linked() {
                return this.links
            }
            set line_linked(e) {
                this.links = e
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                this.links.load(e.links ?? e.lineLinked ?? e.line_linked))
            }
        }
        class ee extends T {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.grab;
                t && (e.retina.grabModeDistance = t.distance * e.retina.pixelRatio)
            }
            async interact() {
                let e = this.container
                  , t = e.actualOptions.interactivity;
                if (!t.modes.grab || !t.events.onHover.enable || e.interactivity.status !== I.Rb)
                    return;
                let i = e.interactivity.mouse.position;
                if (!i)
                    return;
                let s = e.retina.grabModeDistance;
                if (s && !(s < 0))
                    for (let o of e.particles.quadTree.queryCircle(i, s, e => this.isEnabled(e))) {
                        let n = o.getPosition()
                          , r = (0,
                        a.Yf)(n, i);
                        if (r > s)
                            continue;
                        let l = t.modes.grab.links
                          , c = l.opacity
                          , d = c - r * c / s;
                        if (d <= 0)
                            continue;
                        let h = l.color ?? o.options.links?.color;
                        if (!e.particles.grabLineColor && h) {
                            let i = t.modes.grab.links;
                            e.particles.grabLineColor = (0,
                            p.PG)(h, i.blink, i.consent)
                        }
                        let u = (0,
                        p._h)(o, void 0, e.particles.grabLineColor);
                        u && function(e, t, i, s, o) {
                            e.canvas.draw(e => {
                                var n;
                                let r = t.getPosition();
                                n = t.retina.linksWidth ?? 0,
                                (0,
                                J.V6)(e, r, o),
                                e.strokeStyle = (0,
                                p.xx)(i, s),
                                e.lineWidth = n,
                                e.stroke()
                            }
                            )
                        }(e, o, u, d, i)
                    }
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.interactivity.mouse
                  , s = (e?.interactivity ?? t.actualOptions.interactivity).events;
                return s.onHover.enable && !!i.position && (0,
                d.hn)("grab", s.onHover.mode)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.grab || (e.grab = new Q),
                t))
                    e.grab.load(i?.grab)
            }
            reset() {}
        }
        async function et(e, t=!0) {
            await e.addInteractor("externalGrab", e => new ee(e), t)
        }
        class ei extends T {
            constructor(e) {
                super(e),
                this.handleClickMode = e => {
                    if ("pause" !== e)
                        return;
                    let t = this.container;
                    t.getAnimationStatus() ? t.pause() : t.play()
                }
            }
            clear() {}
            init() {}
            async interact() {}
            isEnabled() {
                return !0
            }
            reset() {}
        }
        async function es(e, t=!0) {
            await e.addInteractor("externalPause", e => new ei(e), t)
        }
        class eo {
            constructor() {
                this.default = !0,
                this.groups = [],
                this.quantity = 4
            }
            get particles_nb() {
                return this.quantity
            }
            set particles_nb(e) {
                this.quantity = (0,
                a.DT)(e)
            }
            load(e) {
                if (!e)
                    return;
                void 0 !== e.default && (this.default = e.default),
                void 0 !== e.groups && (this.groups = e.groups.map(e => e)),
                this.groups.length || (this.default = !0);
                let t = e.quantity ?? e.particles_nb;
                void 0 !== t && (this.quantity = (0,
                a.DT)(t))
            }
        }
        class en extends T {
            constructor(e) {
                super(e),
                this.handleClickMode = e => {
                    if ("push" !== e)
                        return;
                    let t = this.container
                      , i = t.actualOptions.interactivity.modes.push;
                    if (!i)
                        return;
                    let s = (0,
                    a.VG)(i.quantity);
                    if (s <= 0)
                        return;
                    let o = (0,
                    d.Vh)([void 0, ...i.groups])
                      , n = void 0 !== o ? t.actualOptions.particles.groups[o] : void 0;
                    t.particles.push(s, t.interactivity.mouse, n, o)
                }
            }
            clear() {}
            init() {}
            async interact() {}
            isEnabled() {
                return !0
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.push || (e.push = new eo),
                t))
                    e.push.load(i?.push)
            }
            reset() {}
        }
        async function er(e, t=!0) {
            await e.addInteractor("externalPush", e => new en(e), t)
        }
        class ea {
            constructor() {
                this.quantity = 2
            }
            get particles_nb() {
                return this.quantity
            }
            set particles_nb(e) {
                this.quantity = (0,
                a.DT)(e)
            }
            load(e) {
                if (!e)
                    return;
                let t = e.quantity ?? e.particles_nb;
                void 0 !== t && (this.quantity = (0,
                a.DT)(t))
            }
        }
        class el extends T {
            constructor(e) {
                super(e),
                this.handleClickMode = e => {
                    let t = this.container
                      , i = t.actualOptions;
                    if (!i.interactivity.modes.remove || "remove" !== e)
                        return;
                    let s = (0,
                    a.VG)(i.interactivity.modes.remove.quantity);
                    t.particles.removeQuantity(s)
                }
            }
            clear() {}
            init() {}
            async interact() {}
            isEnabled() {
                return !0
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.remove || (e.remove = new ea),
                t))
                    e.remove.load(i?.remove)
            }
            reset() {}
        }
        async function ec(e, t=!0) {
            await e.addInteractor("externalRemove", e => new el(e), t)
        }
        class ed {
            constructor() {
                this.distance = 200,
                this.duration = .4,
                this.factor = 100,
                this.speed = 1,
                this.maxSpeed = 50,
                this.easing = "ease-out-quad"
            }
            load(e) {
                e && (void 0 !== e.distance && (this.distance = e.distance),
                void 0 !== e.duration && (this.duration = e.duration),
                void 0 !== e.easing && (this.easing = e.easing),
                void 0 !== e.factor && (this.factor = e.factor),
                void 0 !== e.speed && (this.speed = e.speed),
                void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed))
            }
        }
        class eh extends ed {
            constructor() {
                super(),
                this.selectors = []
            }
            get ids() {
                return (0,
                d.wJ)(this.selectors, e => e.replace("#", ""))
            }
            set ids(e) {
                this.selectors = (0,
                d.wJ)(e, e => `#${e}`)
            }
            load(e) {
                super.load(e),
                e && (void 0 !== e.ids && (this.ids = e.ids),
                void 0 !== e.selectors && (this.selectors = e.selectors))
            }
        }
        class eu extends ed {
            load(e) {
                super.load(e),
                e && (this.divs = (0,
                d.wJ)(e.divs, e => {
                    let t = new eh;
                    return t.load(e),
                    t
                }
                ))
            }
        }
        class ep extends T {
            constructor(e, t) {
                super(t),
                this._clickRepulse = () => {
                    let e = this.container
                      , t = e.actualOptions.interactivity.modes.repulse;
                    if (!t)
                        return;
                    let i = e.repulse || {
                        particles: []
                    };
                    if (i.finish || (i.count || (i.count = 0),
                    i.count++,
                    i.count !== e.particles.count || (i.finish = !0)),
                    i.clicking) {
                        let s = e.retina.repulseModeDistance;
                        if (!s || s < 0)
                            return;
                        let o = Math.pow(s / 6, 3)
                          , n = e.interactivity.mouse.clickPosition;
                        if (void 0 === n)
                            return;
                        let r = new E.j(n.x,n.y,o);
                        for (let s of e.particles.quadTree.query(r, e => this.isEnabled(e))) {
                            let {dx: e, dy: r, distance: l} = (0,
                            a.vr)(n, s.position)
                              , c = l ** 2
                              , d = -o * t.speed / c;
                            if (c <= o) {
                                i.particles.push(s);
                                let t = w.M.create(e, r);
                                t.length = d,
                                s.velocity.setTo(t)
                            }
                        }
                    } else if (!1 === i.clicking) {
                        for (let e of i.particles)
                            e.velocity.setTo(e.initialVelocity);
                        i.particles = []
                    }
                }
                ,
                this._hoverRepulse = () => {
                    let e = this.container
                      , t = e.interactivity.mouse.position
                      , i = e.retina.repulseModeDistance;
                    i && !(i < 0) && t && this._processRepulse(t, i, new E.j(t.x,t.y,i))
                }
                ,
                this._processRepulse = (e, t, i, s) => {
                    let o = this.container
                      , n = o.particles.quadTree.query(i, e => this.isEnabled(e))
                      , r = o.actualOptions.interactivity.modes.repulse;
                    if (r)
                        for (let i of n) {
                            let {dx: o, dy: n, distance: l} = (0,
                            a.vr)(i.position, e)
                              , c = (s?.speed ?? r.speed) * r.factor
                              , d = (0,
                            a.qE)((0,
                            a.il)(r.easing)(1 - l / t) * c, 0, r.maxSpeed)
                              , h = w.M.create(0 === l ? c : o / l * d, 0 === l ? c : n / l * d);
                            i.position.addTo(h)
                        }
                }
                ,
                this._singleSelectorRepulse = (e, t) => {
                    let i = this.container
                      , s = i.actualOptions.interactivity.modes.repulse;
                    if (!s)
                        return;
                    let o = document.querySelectorAll(e);
                    o.length && o.forEach(e => {
                        let o = i.retina.pixelRatio
                          , n = {
                            x: (e.offsetLeft + e.offsetWidth / 2) * o,
                            y: (e.offsetTop + e.offsetHeight / 2) * o
                        }
                          , r = e.offsetWidth / 2 * o
                          , a = "circle" === t.type ? new E.j(n.x,n.y,r) : new L.M(e.offsetLeft * o,e.offsetTop * o,e.offsetWidth * o,e.offsetHeight * o)
                          , l = s.divs
                          , c = (0,
                        d.NV)(l, e);
                        this._processRepulse(n, r, a, c)
                    }
                    )
                }
                ,
                this._engine = e,
                t.repulse || (t.repulse = {
                    particles: []
                }),
                this.handleClickMode = e => {
                    let i = this.container.actualOptions.interactivity.modes.repulse;
                    if (!i || "repulse" !== e)
                        return;
                    t.repulse || (t.repulse = {
                        particles: []
                    });
                    let s = t.repulse;
                    for (let e of (s.clicking = !0,
                    s.count = 0,
                    t.repulse.particles))
                        this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
                    s.particles = [],
                    s.finish = !1,
                    setTimeout( () => {
                        t.destroyed || (s.clicking = !1)
                    }
                    , 1e3 * i.duration)
                }
            }
            clear() {}
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.repulse;
                t && (e.retina.repulseModeDistance = t.distance * e.retina.pixelRatio)
            }
            async interact() {
                let e = this.container
                  , t = e.actualOptions
                  , i = e.interactivity.status === I.Rb
                  , s = t.interactivity.events
                  , o = s.onHover
                  , n = o.enable
                  , r = o.mode
                  , a = s.onClick
                  , l = a.enable
                  , c = a.mode
                  , h = s.onDiv;
                i && n && (0,
                d.hn)("repulse", r) ? this._hoverRepulse() : l && (0,
                d.hn)("repulse", c) ? this._clickRepulse() : (0,
                d.U6)("repulse", h, (e, t) => this._singleSelectorRepulse(e, t))
            }
            isEnabled(e) {
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse
                  , o = (e?.interactivity ?? i.interactivity).events
                  , n = o.onDiv
                  , r = o.onHover
                  , a = o.onClick
                  , l = (0,
                d.iK)("repulse", n);
                if (!(l || r.enable && s.position || a.enable && s.clickPosition))
                    return !1;
                let c = r.mode
                  , h = a.mode;
                return (0,
                d.hn)("repulse", c) || (0,
                d.hn)("repulse", h) || l
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.repulse || (e.repulse = new eu),
                t))
                    e.repulse.load(i?.repulse)
            }
            reset() {}
        }
        async function ef(e, t=!0) {
            await e.addInteractor("externalRepulse", t => new ep(e,t), t)
        }
        class em {
            constructor() {
                this.factor = 3,
                this.radius = 200
            }
            load(e) {
                e && (void 0 !== e.factor && (this.factor = e.factor),
                void 0 !== e.radius && (this.radius = e.radius))
            }
        }
        class eg extends T {
            constructor(e) {
                super(e)
            }
            clear(e, t, i) {
                (!e.slow.inRange || i) && (e.slow.factor = 1)
            }
            init() {
                let e = this.container
                  , t = e.actualOptions.interactivity.modes.slow;
                t && (e.retina.slowModeRadius = t.radius * e.retina.pixelRatio)
            }
            async interact() {}
            isEnabled(e) {
                let t = this.container
                  , i = t.interactivity.mouse
                  , s = (e?.interactivity ?? t.actualOptions.interactivity).events;
                return s.onHover.enable && !!i.position && (0,
                d.hn)("slow", s.onHover.mode)
            }
            loadModeOptions(e, ...t) {
                for (let i of (e.slow || (e.slow = new em),
                t))
                    e.slow.load(i?.slow)
            }
            reset(e) {
                e.slow.inRange = !1;
                let t = this.container
                  , i = t.actualOptions
                  , s = t.interactivity.mouse.position
                  , o = t.retina.slowModeRadius
                  , n = i.interactivity.modes.slow;
                if (!n || !o || o < 0 || !s)
                    return;
                let r = e.getPosition()
                  , l = (0,
                a.Yf)(s, r)
                  , c = n.factor
                  , {slow: d} = e;
                l > o || (d.inRange = !0,
                d.factor = l / o / c)
            }
        }
        async function ey(e, t=!0) {
            await e.addInteractor("externalSlow", e => new eg(e), t)
        }
        let ev = [0, 4, 2, 1]
          , eb = [8, 8, 4, 2];
        class ew {
            constructor(e) {
                this.pos = 0,
                this.data = new Uint8ClampedArray(e)
            }
            getString(e) {
                let t = this.data.slice(this.pos, this.pos + e);
                return this.pos += t.length,
                t.reduce( (e, t) => e + String.fromCharCode(t), "")
            }
            nextByte() {
                return this.data[this.pos++]
            }
            nextTwoBytes() {
                return this.pos += 2,
                this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
            }
            readSubBlocks() {
                let e = ""
                  , t = 0;
                do {
                    t = this.data[this.pos++];
                    for (let i = t; --i >= 0; e += String.fromCharCode(this.data[this.pos++]))
                        ;
                } while (0 !== t);
                return e
            }
            readSubBlocksBin() {
                let e = 0
                  , t = 0;
                for (let i = 0; 0 !== (e = this.data[this.pos + i]); i += e + 1)
                    t += e;
                let i = new Uint8Array(t);
                for (let t = 0; 0 !== (e = this.data[this.pos++]); )
                    for (let s = e; --s >= 0; i[t++] = this.data[this.pos++])
                        ;
                return i
            }
            skipSubBlocks() {
                for (; 0 !== this.data[this.pos]; this.pos += this.data[this.pos] + 1)
                    ;
                this.pos++
            }
        }
        function ex(e, t) {
            let i = [];
            for (let s = 0; s < t; s++)
                i.push({
                    r: e.data[e.pos],
                    g: e.data[e.pos + 1],
                    b: e.data[e.pos + 2]
                }),
                e.pos += 3;
            return i
        }
        async function e_(e, t, i, s) {
            switch (e.nextByte()) {
            case 249:
                {
                    let o = t.frames[i(!1)];
                    e.pos++;
                    let n = e.nextByte();
                    o.GCreserved = (224 & n) >>> 5,
                    o.disposalMethod = (28 & n) >>> 2,
                    o.userInputDelayFlag = (2 & n) == 2,
                    o.delayTime = 10 * e.nextTwoBytes();
                    let r = e.nextByte();
                    (1 & n) == 1 && s(r),
                    e.pos++;
                    break
                }
            case 255:
                {
                    e.pos++;
                    let i = {
                        identifier: e.getString(8),
                        authenticationCode: e.getString(3),
                        data: e.readSubBlocksBin()
                    };
                    t.applicationExtensions.push(i);
                    break
                }
            case 254:
                t.comments.push([i(!1), e.readSubBlocks()]);
                break;
            case 1:
                if (0 === t.globalColorTable.length)
                    throw EvalError("plain text extension without global color table");
                e.pos++,
                t.frames[i(!1)].plainTextData = {
                    left: e.nextTwoBytes(),
                    top: e.nextTwoBytes(),
                    width: e.nextTwoBytes(),
                    height: e.nextTwoBytes(),
                    charSize: {
                        width: e.nextTwoBytes(),
                        height: e.nextTwoBytes()
                    },
                    foregroundColor: e.nextByte(),
                    backgroundColor: e.nextByte(),
                    text: e.readSubBlocks()
                };
                break;
            default:
                e.skipSubBlocks()
            }
        }
        async function ek(e, t, i, s, o, n) {
            let r = t.frames[s(!0)];
            r.left = e.nextTwoBytes(),
            r.top = e.nextTwoBytes(),
            r.width = e.nextTwoBytes(),
            r.height = e.nextTwoBytes();
            let a = e.nextByte()
              , l = (128 & a) == 128;
            r.sortFlag = (32 & a) == 32,
            r.reserved = (24 & a) >>> 3,
            l && (r.localColorTable = ex(e, 1 << (7 & a) + 1));
            let c = e => {
                let {r: s, g: n, b: a} = (l ? r.localColorTable : t.globalColorTable)[e];
                return {
                    r: s,
                    g: n,
                    b: a,
                    a: e === o(null) ? i ? ~~((s + n + a) / 3) : 0 : 255
                }
            }
              , d = ( () => {
                try {
                    return new ImageData(r.width,r.height,{
                        colorSpace: "srgb"
                    })
                } catch (e) {
                    if (e instanceof DOMException && "IndexSizeError" === e.name)
                        return null;
                    throw e
                }
            }
            )();
            if (null == d)
                throw EvalError("GIF frame size is to large");
            let h = e.nextByte()
              , u = e.readSubBlocksBin()
              , p = 1 << h
              , f = (e, t) => {
                let i = e >>> 3
                  , s = 7 & e;
                return (u[i] + (u[i + 1] << 8) + (u[i + 2] << 16) & (1 << t) - 1 << s) >>> s
            }
            ;
            if ((64 & a) == 64) {
                for (let i = 0, o = h + 1, a = 0, l = [[0]], u = 0; u < 4; u++) {
                    if (ev[u] < r.height)
                        for (let e = 0, t = 0; ; ) {
                            let s = i;
                            if (i = f(a, o),
                            a += o + 1,
                            i === p) {
                                o = h + 1,
                                l.length = p + 2;
                                for (let e = 0; e < l.length; e++)
                                    l[e] = e < p ? [e] : []
                            } else {
                                i >= l.length ? l.push(l[s].concat(l[s][0])) : s !== p && l.push(l[s].concat(l[i][0]));
                                for (let s = 0; s < l[i].length; s++) {
                                    let {r: o, g: n, b: a, a: h} = c(l[i][s]);
                                    d.data.set([o, n, a, h], ev[u] * r.width + eb[u] * t + e % (4 * r.width)),
                                    e += 4
                                }
                                l.length === 1 << o && o < 12 && o++
                            }
                            if (e === 4 * r.width * (t + 1) && (t++,
                            ev[u] + eb[u] * t >= r.height))
                                break
                        }
                    n?.(e.pos / (e.data.length - 1), s(!1) + 1, d, {
                        x: r.left,
                        y: r.top
                    }, {
                        width: t.width,
                        height: t.height
                    })
                }
                r.image = d,
                r.bitmap = await createImageBitmap(d)
            } else {
                for (let e = 0, t = h + 1, i = 0, s = [[0]], o = -4; ; ) {
                    let n = e;
                    if (e = f(i, t),
                    i += t,
                    e === p) {
                        t = h + 1,
                        s.length = p + 2;
                        for (let e = 0; e < s.length; e++)
                            s[e] = e < p ? [e] : []
                    } else {
                        if (e === p + 1)
                            break;
                        e >= s.length ? s.push(s[n].concat(s[n][0])) : n !== p && s.push(s[n].concat(s[e][0]));
                        for (let t = 0; t < s[e].length; t++) {
                            let {r: i, g: n, b: r, a} = c(s[e][t]);
                            d.data.set([i, n, r, a], o += 4)
                        }
                        s.length >= 1 << t && t < 12 && t++
                    }
                }
                r.image = d,
                r.bitmap = await createImageBitmap(d),
                n?.((e.pos + 1) / e.data.length, s(!1) + 1, r.image, {
                    x: r.left,
                    y: r.top
                }, {
                    width: t.width,
                    height: t.height
                })
            }
        }
        async function ez(e, t, i, s, o, n) {
            switch (e.nextByte()) {
            case 59:
                return !0;
            case 44:
                await ek(e, t, i, s, o, n);
                break;
            case 33:
                await e_(e, t, s, o);
                break;
            default:
                throw EvalError("undefined block found")
            }
            return !1
        }
        async function eM(e, t, i) {
            i || (i = !1);
            let s = await fetch(e);
            if (!s.ok && 404 === s.status)
                throw EvalError("file not found");
            let o = await s.arrayBuffer()
              , n = {
                width: 0,
                height: 0,
                totalTime: 0,
                colorRes: 0,
                pixelAspectRatio: 0,
                frames: [],
                sortFlag: !1,
                globalColorTable: [],
                backgroundImage: new ImageData(1,1,{
                    colorSpace: "srgb"
                }),
                comments: [],
                applicationExtensions: []
            }
              , r = new ew(new Uint8ClampedArray(o));
            if ("GIF89a" !== r.getString(6))
                throw Error("not a supported GIF file");
            n.width = r.nextTwoBytes(),
            n.height = r.nextTwoBytes();
            let a = r.nextByte()
              , l = (128 & a) == 128;
            n.colorRes = (112 & a) >>> 4,
            n.sortFlag = (8 & a) == 8;
            let c = r.nextByte();
            n.pixelAspectRatio = r.nextByte(),
            0 !== n.pixelAspectRatio && (n.pixelAspectRatio = (n.pixelAspectRatio + 15) / 64),
            l && (n.globalColorTable = ex(r, 1 << (7 & a) + 1));
            let d = ( () => {
                try {
                    return new ImageData(n.width,n.height,{
                        colorSpace: "srgb"
                    })
                } catch (e) {
                    if (e instanceof DOMException && "IndexSizeError" === e.name)
                        return null;
                    throw e
                }
            }
            )();
            if (null == d)
                throw Error("GIF frame size is to large");
            let {r: h, g: u, b: p} = n.globalColorTable[c];
            d.data.set(l ? [h, u, p, 255] : [0, 0, 0, 0]);
            for (let e = 4; e < d.data.length; e *= 2)
                d.data.copyWithin(e, 0, e);
            n.backgroundImage = d;
            let f = -1
              , m = !0
              , g = -1
              , y = e => (e && (m = !0),
            f)
              , v = e => (null != e && (g = e),
            g);
            try {
                do
                    m && (n.frames.push({
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        disposalMethod: 0,
                        image: new ImageData(1,1,{
                            colorSpace: "srgb"
                        }),
                        plainTextData: null,
                        userInputDelayFlag: !1,
                        delayTime: 0,
                        sortFlag: !1,
                        localColorTable: [],
                        reserved: 0,
                        GCreserved: 0
                    }),
                    f++,
                    g = -1,
                    m = !1);
                while (!await ez(r, n, i, y, v, t));
                for (let e of (n.frames.length--,
                n.frames)) {
                    if (e.userInputDelayFlag && 0 === e.delayTime) {
                        n.totalTime = 1 / 0;
                        break
                    }
                    n.totalTime += e.delayTime
                }
                return n
            } catch (e) {
                if (e instanceof EvalError)
                    throw Error(`error while parsing frame ${f} "${e.message}"`);
                throw e
            }
        }
        let eC = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        async function eP(e) {
            return new Promise(t => {
                e.loading = !0;
                let i = new Image;
                e.element = i,
                i.addEventListener("load", () => {
                    e.loading = !1,
                    t()
                }
                ),
                i.addEventListener("error", () => {
                    e.element = void 0,
                    e.error = !0,
                    e.loading = !1,
                    (0,
                    d.tZ)().error(`${I.dI} loading image: ${e.source}`),
                    t()
                }
                ),
                i.src = e.source
            }
            )
        }
        async function eO(e) {
            if ("gif" !== e.type) {
                await eP(e);
                return
            }
            e.loading = !0;
            try {
                e.gifData = await eM(e.source),
                e.gifLoopCount = function(e) {
                    for (let t of e.applicationExtensions)
                        if (t.identifier + t.authenticationCode === "NETSCAPE2.0")
                            return t.data[1] + (t.data[2] << 8);
                    return NaN
                }(e.gifData) ?? 0,
                0 === e.gifLoopCount && (e.gifLoopCount = 1 / 0)
            } catch {
                e.error = !0
            }
            e.loading = !1
        }
        async function eS(e) {
            if ("svg" !== e.type) {
                await eP(e);
                return
            }
            e.loading = !0;
            let t = await fetch(e.source);
            t.ok ? e.svgData = await t.text() : ((0,
            d.tZ)().error(`${I.dI} Image not found`),
            e.error = !0),
            e.loading = !1
        }
        class eT {
            constructor(e) {
                this.loadImageShape = async e => {
                    if (!this._engine.loadImage)
                        throw Error(`${I.dI} image shape not initialized`);
                    await this._engine.loadImage({
                        gif: e.gif,
                        name: e.name,
                        replaceColor: e.replaceColor ?? e.replace_color ?? !1,
                        src: e.src
                    })
                }
                ,
                this._engine = e
            }
            addImage(e) {
                this._engine.images || (this._engine.images = []),
                this._engine.images.push(e)
            }
            draw(e, t, i, s, o) {
                let n = t.image
                  , r = n?.element;
                if (n) {
                    if (e.globalAlpha = s,
                    n.gif && n.gifData) {
                        let s = new OffscreenCanvas(n.gifData.width,n.gifData.height)
                          , r = s.getContext("2d");
                        if (!r)
                            throw Error("could not create offscreen canvas context");
                        r.imageSmoothingQuality = "low",
                        r.imageSmoothingEnabled = !1,
                        r.clearRect(0, 0, s.width, s.height),
                        void 0 === t.gifLoopCount && (t.gifLoopCount = n.gifLoopCount ?? 0);
                        let a = t.gifFrame ?? 0
                          , l = {
                            x: -(.5 * n.gifData.width),
                            y: -(.5 * n.gifData.height)
                        }
                          , c = n.gifData.frames[a];
                        if (void 0 === t.gifTime && (t.gifTime = 0),
                        !c.bitmap)
                            return;
                        switch (e.scale(i / n.gifData.width, i / n.gifData.height),
                        c.disposalMethod) {
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 0:
                            r.drawImage(c.bitmap, c.left, c.top),
                            e.drawImage(s, l.x, l.y),
                            r.clearRect(0, 0, s.width, s.height);
                            break;
                        case 1:
                            r.drawImage(c.bitmap, c.left, c.top),
                            e.drawImage(s, l.x, l.y);
                            break;
                        case 2:
                            r.drawImage(c.bitmap, c.left, c.top),
                            e.drawImage(s, l.x, l.y),
                            r.clearRect(0, 0, s.width, s.height),
                            0 === n.gifData.globalColorTable.length ? r.putImageData(n.gifData.frames[0].image, l.x + c.left, l.y + c.top) : r.putImageData(n.gifData.backgroundImage, l.x, l.y);
                            break;
                        case 3:
                            {
                                let t = r.getImageData(0, 0, s.width, s.height);
                                r.drawImage(c.bitmap, c.left, c.top),
                                e.drawImage(s, l.x, l.y),
                                r.clearRect(0, 0, s.width, s.height),
                                r.putImageData(t, 0, 0)
                            }
                        }
                        if (t.gifTime += o.value,
                        t.gifTime > c.delayTime) {
                            if (t.gifTime -= c.delayTime,
                            ++a >= n.gifData.frames.length) {
                                if (--t.gifLoopCount <= 0)
                                    return;
                                a = 0,
                                r.clearRect(0, 0, s.width, s.height)
                            }
                            t.gifFrame = a
                        }
                        e.scale(n.gifData.width / i, n.gifData.height / i)
                    } else if (r) {
                        let t = n.ratio
                          , s = {
                            x: -i,
                            y: -i
                        };
                        e.drawImage(r, s.x, s.y, 2 * i, 2 * i / t)
                    }
                    e.globalAlpha = 1
                }
            }
            getSidesCount() {
                return 12
            }
            async init(e) {
                let t = e.actualOptions;
                if (t.preload && this._engine.loadImage)
                    for (let e of t.preload)
                        await this._engine.loadImage(e)
            }
            loadShape(e) {
                if ("image" !== e.shape && "images" !== e.shape)
                    return;
                this._engine.images || (this._engine.images = []);
                let t = e.shapeData;
                this._engine.images.find(e => e.name === t.name || e.source === t.src) || this.loadImageShape(t).then( () => {
                    this.loadShape(e)
                }
                )
            }
            particleInit(e, t) {
                if ("image" !== t.shape && "images" !== t.shape)
                    return;
                this._engine.images || (this._engine.images = []);
                let i = this._engine.images
                  , s = t.shapeData
                  , o = t.getFillColor()
                  , n = i.find(e => e.name === s.name || e.source === s.src);
                if (!n)
                    return;
                let r = s.replaceColor ?? s.replace_color ?? n.replaceColor;
                if (n.loading) {
                    setTimeout( () => {
                        this.particleInit(e, t)
                    }
                    );
                    return
                }
                (async () => {
                    let e;
                    (e = n.svgData && o ? await function(e, t, i, s) {
                        let o = function(e, t, i) {
                            let {svgData: s} = e;
                            if (!s)
                                return "";
                            let o = (0,
                            p.LC)(t, i);
                            if (s.includes("fill"))
                                return s.replace(eC, () => o);
                            let n = s.indexOf(">");
                            return `${s.substring(0, n)} fill="${o}"${s.substring(n)}`
                        }(e, i, s.opacity?.value ?? 1)
                          , n = {
                            color: i,
                            gif: t.gif,
                            data: {
                                ...e,
                                svgData: o
                            },
                            loaded: !1,
                            ratio: t.width / t.height,
                            replaceColor: t.replaceColor ?? t.replace_color,
                            source: t.src
                        };
                        return new Promise(t => {
                            let i = new Blob([o],{
                                type: "image/svg+xml"
                            })
                              , s = URL || window.URL || window.webkitURL || window
                              , r = s.createObjectURL(i)
                              , a = new Image;
                            a.addEventListener("load", () => {
                                n.loaded = !0,
                                n.element = a,
                                t(n),
                                s.revokeObjectURL(r)
                            }
                            ),
                            a.addEventListener("error", async () => {
                                s.revokeObjectURL(r);
                                let i = {
                                    ...e,
                                    error: !1,
                                    loading: !0
                                };
                                await eP(i),
                                n.loaded = !0,
                                n.element = i.element,
                                t(n)
                            }
                            ),
                            a.src = r
                        }
                        )
                    }(n, s, o, t) : {
                        color: o,
                        data: n,
                        element: n.element,
                        gif: n.gif,
                        gifData: n.gifData,
                        gifLoopCount: n.gifLoopCount,
                        loaded: !0,
                        ratio: s.width && s.height ? s.width / s.height : n.ratio ?? 1,
                        replaceColor: r,
                        source: s.src
                    }).ratio || (e.ratio = 1);
                    let i = s.fill ?? t.fill
                      , a = s.close ?? t.close;
                    t.image = e,
                    t.fill = i,
                    t.close = a
                }
                )()
            }
        }
        class eE {
            constructor() {
                this.src = "",
                this.gif = !1
            }
            load(e) {
                e && (void 0 !== e.gif && (this.gif = e.gif),
                void 0 !== e.height && (this.height = e.height),
                void 0 !== e.name && (this.name = e.name),
                void 0 !== e.replaceColor && (this.replaceColor = e.replaceColor),
                void 0 !== e.src && (this.src = e.src),
                void 0 !== e.width && (this.width = e.width))
            }
        }
        class eI {
            constructor(e) {
                this.id = "imagePreloader",
                this._engine = e
            }
            getPlugin() {
                return {}
            }
            loadOptions(e, t) {
                if (!t || !t.preload)
                    return;
                e.preload || (e.preload = []);
                let i = e.preload;
                for (let e of t.preload) {
                    let t = i.find(t => t.name === e.name || t.src === e.src);
                    if (t)
                        t.load(e);
                    else {
                        let t = new eE;
                        t.load(e),
                        i.push(t)
                    }
                }
            }
            needsPlugin() {
                return !0
            }
        }
        async function eR(e, t=!0) {
            e.loadImage || (e.loadImage = async t => {
                if (!t.name && !t.src)
                    throw Error(`${I.dI} no image source provided`);
                if (e.images || (e.images = []),
                !e.images.find(e => e.name === t.name || e.source === t.src))
                    try {
                        let i = {
                            gif: t.gif ?? !1,
                            name: t.name ?? t.src,
                            source: t.src,
                            type: t.src.substring(t.src.length - 3),
                            error: !1,
                            loading: !0,
                            replaceColor: t.replaceColor,
                            ratio: t.width && t.height ? t.width / t.height : void 0
                        };
                        e.images.push(i);
                        let s = t.gif ? eO : t.replaceColor ? eS : eP;
                        await s(i)
                    } catch {
                        throw Error(`${I.dI} ${t.name ?? t.src} not found`)
                    }
            }
            );
            let i = new eI(e);
            await e.addPlugin(i, t),
            await e.addShape(["image", "images"], new eT(e), t)
        }
        var eD = i(755);
        class eA extends eD.PV {
            constructor() {
                super(),
                this.sync = !1
            }
            load(e) {
                e && (super.load(e),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class eL extends eD.PV {
            constructor() {
                super(),
                this.random.minimumValue = 1e-4,
                this.sync = !1
            }
            load(e) {
                e && (super.load(e),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class ej {
            constructor() {
                this.count = 0,
                this.delay = new eA,
                this.duration = new eL
            }
            load(e) {
                e && (void 0 !== e.count && (this.count = e.count),
                this.delay.load(e.delay),
                this.duration.load(e.duration))
            }
        }
        class eV {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = this.container
                  , i = e.options.life;
                i && (e.life = {
                    delay: t.retina.reduceFactor ? (0,
                    a.VG)(i.delay.value) * (i.delay.sync ? 1 : (0,
                    a.G0)()) / t.retina.reduceFactor * 1e3 : 0,
                    delayTime: 0,
                    duration: t.retina.reduceFactor ? (0,
                    a.VG)(i.duration.value) * (i.duration.sync ? 1 : (0,
                    a.G0)()) / t.retina.reduceFactor * 1e3 : 0,
                    time: 0,
                    count: i.count
                },
                e.life.duration <= 0 && (e.life.duration = -1),
                e.life.count <= 0 && (e.life.count = -1),
                e.life && (e.spawning = e.life.delay > 0))
            }
            isEnabled(e) {
                return !e.destroyed
            }
            loadOptions(e, ...t) {
                for (let i of (e.life || (e.life = new ej),
                t))
                    e.life.load(i?.life)
            }
            update(e, t) {
                if (!this.isEnabled(e) || !e.life)
                    return;
                let i = e.life
                  , s = !1;
                if (e.spawning) {
                    if (i.delayTime += t.value,
                    !(i.delayTime >= e.life.delay))
                        return;
                    s = !0,
                    e.spawning = !1,
                    i.delayTime = 0,
                    i.time = 0
                }
                if (-1 === i.duration || e.spawning || (s ? i.time = 0 : i.time += t.value,
                i.time < i.duration))
                    return;
                if (i.time = 0,
                e.life.count > 0 && e.life.count--,
                0 === e.life.count) {
                    e.destroy();
                    return
                }
                let o = this.container.canvas.size
                  , n = (0,
                a.DT)(0, o.width)
                  , r = (0,
                a.DT)(0, o.width);
                e.position.x = (0,
                a.U4)(n),
                e.position.y = (0,
                a.U4)(r),
                e.spawning = !0,
                i.delayTime = 0,
                i.time = 0,
                e.reset();
                let l = e.options.life;
                l && (i.delay = 1e3 * (0,
                a.VG)(l.delay.value),
                i.duration = 1e3 * (0,
                a.VG)(l.duration.value))
            }
        }
        async function eG(e, t=!0) {
            await e.addParticleUpdater("life", e => new eV(e), t)
        }
        class eB {
            draw(e, t, i) {
                let s = t.shapeData;
                e.moveTo(-i / 2, 0),
                e.lineTo(i / 2, 0),
                e.lineCap = s?.cap ?? "butt"
            }
            getSidesCount() {
                return 1
            }
        }
        async function eq(e, t=!0) {
            await e.addShape("line", new eB, t)
        }
        class eF {
            init() {}
            isEnabled(e) {
                return !(0,
                d.B9)() && !e.destroyed && e.container.actualOptions.interactivity.events.onHover.parallax.enable
            }
            move(e) {
                let t = e.container
                  , i = t.actualOptions.interactivity.events.onHover.parallax;
                if ((0,
                d.B9)() || !i.enable)
                    return;
                let s = i.force
                  , o = t.interactivity.mouse.position;
                if (!o)
                    return;
                let n = t.canvas.size
                  , r = {
                    x: n.width / 2,
                    y: n.height / 2
                }
                  , a = i.smooth
                  , l = e.getRadius() / s
                  , c = {
                    x: (o.x - r.x) * l,
                    y: (o.y - r.y) * l
                }
                  , {offset: h} = e;
                h.x += (c.x - h.x) / a,
                h.y += (c.y - h.y) / a
            }
        }
        async function eU(e, t=!0) {
            await e.addMover("parallax", () => new eF, t)
        }
        class eW {
            constructor(e) {
                this.container = e,
                this.type = "particles"
            }
        }
        class eN extends eW {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {}
            async interact(e) {
                let t = this.container
                  , i = e.retina.attractDistance ?? t.retina.attractDistance
                  , s = e.getPosition();
                for (let o of t.particles.quadTree.queryCircle(s, i)) {
                    if (e === o || !o.options.move.attract.enable || o.destroyed || o.spawning)
                        continue;
                    let t = o.getPosition()
                      , {dx: i, dy: n} = (0,
                    a.vr)(s, t)
                      , r = e.options.move.attract.rotate
                      , l = i / (1e3 * r.x)
                      , c = n / (1e3 * r.y)
                      , d = o.size.value / e.size.value
                      , h = 1 / d;
                    e.velocity.x -= l * d,
                    e.velocity.y -= c * d,
                    o.velocity.x += l * h,
                    o.velocity.y += c * h
                }
            }
            isEnabled(e) {
                return e.options.move.attract.enable
            }
            reset() {}
        }
        async function eH(e, t=!0) {
            await e.addInteractor("particlesAttract", e => new eN(e), t)
        }
        function e$(e, t, i, s, o, n) {
            let r = (0,
            a.qE)(e.options.collisions.absorb.speed * o.factor / 10, 0, s);
            e.size.value += r / 2,
            i.size.value -= r,
            s <= n && (i.size.value = 0,
            i.destroy())
        }
        let eY = e => {
            void 0 === e.collisionMaxSpeed && (e.collisionMaxSpeed = (0,
            a.VG)(e.options.collisions.maxSpeed)),
            e.velocity.length > e.collisionMaxSpeed && (e.velocity.length = e.collisionMaxSpeed)
        }
        ;
        function eJ(e, t) {
            (0,
            d.pE)((0,
            d.Tg)(e), (0,
            d.Tg)(t)),
            eY(e),
            eY(t)
        }
        class eK extends eW {
            constructor(e) {
                super(e)
            }
            clear() {}
            init() {}
            async interact(e, t) {
                if (e.destroyed || e.spawning)
                    return;
                let i = this.container
                  , s = e.getPosition()
                  , o = e.getRadius();
                for (let n of i.particles.quadTree.queryCircle(s, 2 * o)) {
                    if (e === n || !n.options.collisions.enable || e.options.collisions.mode !== n.options.collisions.mode || n.destroyed || n.spawning)
                        continue;
                    let r = n.getPosition()
                      , l = n.getRadius();
                    !(Math.abs(Math.round(s.z) - Math.round(r.z)) > o + l) && ((0,
                    a.Yf)(s, r) > o + l || function(e, t, i, s) {
                        switch (e.options.collisions.mode) {
                        case "absorb":
                            !function(e, t, i, s) {
                                let o = e.getRadius()
                                  , n = t.getRadius();
                                void 0 === o && void 0 !== n ? e.destroy() : void 0 !== o && void 0 === n ? t.destroy() : void 0 !== o && void 0 !== n && (o >= n ? e$(e, o, t, n, i, s) : e$(t, n, e, o, i, s))
                            }(e, t, i, s);
                            break;
                        case "bounce":
                            eJ(e, t);
                            break;
                        case "destroy":
                            e.unbreakable || t.unbreakable || eJ(e, t),
                            void 0 === e.getRadius() && void 0 !== t.getRadius() ? e.destroy() : void 0 !== e.getRadius() && void 0 === t.getRadius() ? t.destroy() : void 0 !== e.getRadius() && void 0 !== t.getRadius() && (e.getRadius() >= t.getRadius() ? t : e).destroy()
                        }
                    }(e, n, t, i.retina.pixelRatio))
                }
            }
            isEnabled(e) {
                return e.options.collisions.enable
            }
            reset() {}
        }
        async function eZ(e, t=!0) {
            await e.addInteractor("particlesCollisions", e => new eK(e), t)
        }
        class eX extends E.j {
            constructor(e, t, i, s) {
                super(e, t, i),
                this.canvasSize = s,
                this.canvasSize = {
                    ...s
                }
            }
            contains(e) {
                let {width: t, height: i} = this.canvasSize
                  , {x: s, y: o} = e;
                return super.contains(e) || super.contains({
                    x: s - t,
                    y: o
                }) || super.contains({
                    x: s - t,
                    y: o - i
                }) || super.contains({
                    x: s,
                    y: o - i
                })
            }
            intersects(e) {
                if (super.intersects(e))
                    return !0;
                let t = {
                    x: e.position.x - this.canvasSize.width,
                    y: e.position.y - this.canvasSize.height
                };
                if (void 0 !== e.radius) {
                    let i = new E.j(t.x,t.y,2 * e.radius);
                    return super.intersects(i)
                }
                if (void 0 !== e.size) {
                    let i = new L.M(t.x,t.y,2 * e.size.width,2 * e.size.height);
                    return super.intersects(i)
                }
                return !1
            }
        }
        class eQ {
            constructor() {
                this.blur = 5,
                this.color = new B.O,
                this.color.value = "#000",
                this.enable = !1
            }
            load(e) {
                e && (void 0 !== e.blur && (this.blur = e.blur),
                this.color = B.O.create(this.color, e.color),
                void 0 !== e.enable && (this.enable = e.enable))
            }
        }
        class e0 {
            constructor() {
                this.enable = !1,
                this.frequency = 1
            }
            load(e) {
                e && (void 0 !== e.color && (this.color = B.O.create(this.color, e.color)),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.frequency && (this.frequency = e.frequency),
                void 0 !== e.opacity && (this.opacity = e.opacity))
            }
        }
        class e1 {
            constructor() {
                this.blink = !1,
                this.color = new B.O,
                this.color.value = "#fff",
                this.consent = !1,
                this.distance = 100,
                this.enable = !1,
                this.frequency = 1,
                this.opacity = 1,
                this.shadow = new eQ,
                this.triangles = new e0,
                this.width = 1,
                this.warp = !1
            }
            load(e) {
                e && (void 0 !== e.id && (this.id = e.id),
                void 0 !== e.blink && (this.blink = e.blink),
                this.color = B.O.create(this.color, e.color),
                void 0 !== e.consent && (this.consent = e.consent),
                void 0 !== e.distance && (this.distance = e.distance),
                void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.frequency && (this.frequency = e.frequency),
                void 0 !== e.opacity && (this.opacity = e.opacity),
                this.shadow.load(e.shadow),
                this.triangles.load(e.triangles),
                void 0 !== e.width && (this.width = e.width),
                void 0 !== e.warp && (this.warp = e.warp))
            }
        }
        class e2 extends eW {
            constructor(e) {
                super(e),
                this._setColor = e => {
                    if (!e.options.links)
                        return;
                    let t = this.linkContainer
                      , i = e.options.links
                      , s = void 0 === i.id ? t.particles.linksColor : t.particles.linksColors.get(i.id);
                    if (s)
                        return;
                    let o = i.color;
                    s = (0,
                    p.PG)(o, i.blink, i.consent),
                    void 0 === i.id ? t.particles.linksColor = s : t.particles.linksColors.set(i.id, s)
                }
                ,
                this.linkContainer = e
            }
            clear() {}
            init() {
                this.linkContainer.particles.linksColor = void 0,
                this.linkContainer.particles.linksColors = new Map
            }
            async interact(e) {
                if (!e.options.links)
                    return;
                e.links = [];
                let t = e.getPosition()
                  , i = this.container
                  , s = i.canvas.size;
                if (t.x < 0 || t.y < 0 || t.x > s.width || t.y > s.height)
                    return;
                let o = e.options.links
                  , n = o.opacity
                  , r = e.retina.linksDistance ?? 0
                  , l = o.warp
                  , c = l ? new eX(t.x,t.y,r,s) : new E.j(t.x,t.y,r);
                for (let d of i.particles.quadTree.query(c)) {
                    let i = d.options.links;
                    if (e === d || !i?.enable || o.id !== i.id || d.spawning || d.destroyed || !d.links || e.links.some(e => e.destination === d) || d.links.some(t => t.destination === e))
                        continue;
                    let c = d.getPosition();
                    if (c.x < 0 || c.y < 0 || c.x > s.width || c.y > s.height)
                        continue;
                    let h = function(e, t, i, s, o) {
                        let {dx: n, dy: r, distance: l} = (0,
                        a.vr)(e, t);
                        if (!o || l <= i)
                            return l;
                        let c = {
                            x: Math.abs(n),
                            y: Math.abs(r)
                        }
                          , d = {
                            x: Math.min(c.x, s.width - c.x),
                            y: Math.min(c.y, s.height - c.y)
                        };
                        return Math.sqrt(d.x ** 2 + d.y ** 2)
                    }(t, c, r, s, l && i.warp);
                    if (h > r)
                        continue;
                    let u = (1 - h / r) * n;
                    this._setColor(e),
                    e.links.push({
                        destination: d,
                        opacity: u
                    })
                }
            }
            isEnabled(e) {
                return !!e.options.links?.enable
            }
            loadParticlesOptions(e, ...t) {
                for (let i of (e.links || (e.links = new e1),
                t))
                    e.links.load(i?.links ?? i?.lineLinked ?? i?.line_linked)
            }
            reset() {}
        }
        async function e5(e, t=!0) {
            await e.addInteractor("particlesLinks", e => new e2(e), t)
        }
        function e3(e, t) {
            var i;
            let s = ((i = e.map(e => e.id)).sort( (e, t) => e - t),
            i.join("_"))
              , o = t.get(s);
            return void 0 === o && (o = (0,
            a.G0)(),
            t.set(s, o)),
            o
        }
        class e6 {
            constructor(e) {
                this.container = e,
                this._drawLinkLine = (e, t) => {
                    let i = e.options.links;
                    if (!i?.enable)
                        return;
                    let s = this.container
                      , o = s.actualOptions
                      , n = t.destination
                      , r = e.getPosition()
                      , l = n.getPosition()
                      , c = t.opacity;
                    s.canvas.draw(t => {
                        let d;
                        let h = e.options.twinkle?.lines;
                        if (h?.enable) {
                            let e = h.frequency
                              , t = (0,
                            p.BN)(h.color);
                            (0,
                            a.G0)() < e && t && (d = t,
                            c = (0,
                            a.VG)(h.opacity))
                        }
                        if (!d) {
                            let t = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
                            d = (0,
                            p._h)(e, n, t)
                        }
                        if (!d)
                            return;
                        let u = e.retina.linksWidth ?? 0
                          , f = e.retina.linksDistance ?? 0
                          , {backgroundMask: m} = o;
                        !function(e) {
                            let t = !1
                              , {begin: i, end: s, maxDistance: o, context: n, canvasSize: r, width: l, backgroundMask: c, colorLine: d, opacity: h, links: u} = e;
                            if ((0,
                            a.Yf)(i, s) <= o)
                                (0,
                                J.V6)(n, i, s),
                                t = !0;
                            else if (u.warp) {
                                let e, l;
                                let c = {
                                    x: s.x - r.width,
                                    y: s.y
                                }
                                  , d = (0,
                                a.vr)(i, c);
                                if (d.distance <= o) {
                                    let t = i.y - d.dy / d.dx * i.x;
                                    e = {
                                        x: 0,
                                        y: t
                                    },
                                    l = {
                                        x: r.width,
                                        y: t
                                    }
                                } else {
                                    let t = {
                                        x: s.x,
                                        y: s.y - r.height
                                    }
                                      , n = (0,
                                    a.vr)(i, t);
                                    if (n.distance <= o) {
                                        let t = -(i.y - n.dy / n.dx * i.x) / (n.dy / n.dx);
                                        e = {
                                            x: t,
                                            y: 0
                                        },
                                        l = {
                                            x: t,
                                            y: r.height
                                        }
                                    } else {
                                        let t = {
                                            x: s.x - r.width,
                                            y: s.y - r.height
                                        }
                                          , n = (0,
                                        a.vr)(i, t);
                                        if (n.distance <= o) {
                                            let t = i.y - n.dy / n.dx * i.x;
                                            l = {
                                                x: (e = {
                                                    x: -t / (n.dy / n.dx),
                                                    y: t
                                                }).x + r.width,
                                                y: e.y + r.height
                                            }
                                        }
                                    }
                                }
                                e && l && ((0,
                                J.V6)(n, i, e),
                                (0,
                                J.V6)(n, s, l),
                                t = !0)
                            }
                            if (!t)
                                return;
                            n.lineWidth = l,
                            c.enable && (n.globalCompositeOperation = c.composite),
                            n.strokeStyle = (0,
                            p.xx)(d, h);
                            let {shadow: f} = u;
                            if (f.enable) {
                                let e = (0,
                                p.BN)(f.color);
                                e && (n.shadowBlur = f.blur,
                                n.shadowColor = (0,
                                p.xx)(e))
                            }
                            n.stroke()
                        }({
                            context: t,
                            width: u,
                            begin: r,
                            end: l,
                            maxDistance: f,
                            canvasSize: s.canvas.size,
                            links: i,
                            backgroundMask: m,
                            colorLine: d,
                            opacity: c
                        })
                    }
                    )
                }
                ,
                this._drawLinkTriangle = (e, t, i) => {
                    let s = e.options.links;
                    if (!s?.enable)
                        return;
                    let o = s.triangles;
                    if (!o.enable)
                        return;
                    let n = this.container
                      , r = n.actualOptions
                      , l = t.destination
                      , c = i.destination
                      , d = o.opacity ?? (t.opacity + i.opacity) / 2;
                    d <= 0 || n.canvas.draw(t => {
                        let i = e.getPosition()
                          , h = l.getPosition()
                          , u = c.getPosition()
                          , f = e.retina.linksDistance ?? 0;
                        if ((0,
                        a.Yf)(i, h) > f || (0,
                        a.Yf)(u, h) > f || (0,
                        a.Yf)(u, i) > f)
                            return;
                        let m = (0,
                        p.BN)(o.color);
                        if (!m) {
                            let t = void 0 !== s.id ? n.particles.linksColors.get(s.id) : n.particles.linksColor;
                            m = (0,
                            p._h)(e, l, t)
                        }
                        m && function(e) {
                            let {context: t, pos1: i, pos2: s, pos3: o, backgroundMask: n, colorTriangle: r, opacityTriangle: a} = e;
                            (0,
                            J.D4)(t, i, s, o),
                            n.enable && (t.globalCompositeOperation = n.composite),
                            t.fillStyle = (0,
                            p.xx)(r, a),
                            t.fill()
                        }({
                            context: t,
                            pos1: i,
                            pos2: h,
                            pos3: u,
                            backgroundMask: r.backgroundMask,
                            colorTriangle: m,
                            opacityTriangle: d
                        })
                    }
                    )
                }
                ,
                this._drawTriangles = (e, t, i, s) => {
                    let o = i.destination;
                    if (!(e.links?.triangles.enable && o.options.links?.triangles.enable))
                        return;
                    let n = o.links?.filter(e => {
                        let t = this._getLinkFrequency(o, e.destination);
                        return o.options.links && t <= o.options.links.frequency && s.findIndex(t => t.destination === e.destination) >= 0
                    }
                    );
                    if (n?.length)
                        for (let s of n) {
                            let n = s.destination;
                            this._getTriangleFrequency(t, o, n) > e.links.triangles.frequency || this._drawLinkTriangle(t, i, s)
                        }
                }
                ,
                this._getLinkFrequency = (e, t) => e3([e, t], this._freqs.links),
                this._getTriangleFrequency = (e, t, i) => e3([e, t, i], this._freqs.triangles),
                this._freqs = {
                    links: new Map,
                    triangles: new Map
                }
            }
            drawParticle(e, t) {
                let {links: i, options: s} = t;
                if (!i || i.length <= 0)
                    return;
                let o = i.filter(e => s.links && this._getLinkFrequency(t, e.destination) <= s.links.frequency);
                for (let e of o)
                    this._drawTriangles(s, t, e, o),
                    e.opacity > 0 && (t.retina.linksWidth ?? 0) > 0 && this._drawLinkLine(t, e)
            }
            async init() {
                this._freqs.links = new Map,
                this._freqs.triangles = new Map
            }
            particleCreated(e) {
                if (e.links = [],
                !e.options.links)
                    return;
                let t = this.container.retina.pixelRatio
                  , {retina: i} = e
                  , {distance: s, width: o} = e.options.links;
                i.linksDistance = s * t,
                i.linksWidth = o * t
            }
            particleDestroyed(e) {
                e.links = []
            }
        }
        class e4 {
            constructor() {
                this.id = "links"
            }
            getPlugin(e) {
                return new e6(e)
            }
            loadOptions() {}
            needsPlugin() {
                return !0
            }
        }
        async function e8(e, t=!0) {
            let i = new e4;
            await e.addPlugin(i, t)
        }
        async function e9(e, t=!0) {
            await e5(e, t),
            await e8(e, t)
        }
        class e7 {
            draw(e, t, i) {
                let s = this.getCenter(t, i)
                  , o = this.getSidesData(t, i)
                  , n = o.count.numerator * o.count.denominator
                  , r = o.count.numerator / o.count.denominator
                  , a = Math.PI - 180 * (r - 2) / r * Math.PI / 180;
                if (e) {
                    e.beginPath(),
                    e.translate(s.x, s.y),
                    e.moveTo(0, 0);
                    for (let t = 0; t < n; t++)
                        e.lineTo(o.length, 0),
                        e.translate(o.length, 0),
                        e.rotate(a)
                }
            }
            getSidesCount(e) {
                let t = e.shapeData;
                return Math.round((0,
                a.VG)(t?.sides ?? t?.nb_sides ?? 5))
            }
        }
        class te extends e7 {
            getCenter(e, t) {
                return {
                    x: -t / (e.sides / 3.5),
                    y: -t / .76
                }
            }
            getSidesData(e, t) {
                let i = e.sides;
                return {
                    count: {
                        denominator: 1,
                        numerator: i
                    },
                    length: 2.66 * t / (i / 3)
                }
            }
        }
        class tt extends e7 {
            getCenter(e, t) {
                return {
                    x: -t,
                    y: t / 1.66
                }
            }
            getSidesCount() {
                return 3
            }
            getSidesData(e, t) {
                return {
                    count: {
                        denominator: 2,
                        numerator: 3
                    },
                    length: 2 * t
                }
            }
        }
        async function ti(e, t=!0) {
            await e.addShape("polygon", new te, t)
        }
        async function ts(e, t=!0) {
            await e.addShape("triangle", new tt, t)
        }
        async function to(e, t=!0) {
            await ti(e, t),
            await ts(e, t)
        }
        class tn {
            constructor() {
                this.enable = !1,
                this.speed = 0,
                this.decay = 0,
                this.sync = !1
            }
            load(e) {
                e && (void 0 !== e.enable && (this.enable = e.enable),
                void 0 !== e.speed && (this.speed = (0,
                a.DT)(e.speed)),
                void 0 !== e.decay && (this.decay = (0,
                a.DT)(e.decay)),
                void 0 !== e.sync && (this.sync = e.sync))
            }
        }
        class tr extends eD.PV {
            constructor() {
                super(),
                this.animation = new tn,
                this.direction = "clockwise",
                this.path = !1,
                this.value = 0
            }
            load(e) {
                e && (super.load(e),
                void 0 !== e.direction && (this.direction = e.direction),
                this.animation.load(e.animation),
                void 0 !== e.path && (this.path = e.path))
            }
        }
        class ta {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = e.options.rotate;
                if (!t)
                    return;
                e.rotate = {
                    enable: t.animation.enable,
                    value: (0,
                    a.VG)(t.value) * Math.PI / 180
                },
                e.pathRotation = t.path;
                let i = t.direction;
                switch ("random" === i && (i = Math.floor(2 * (0,
                a.G0)()) > 0 ? "counter-clockwise" : "clockwise"),
                i) {
                case "counter-clockwise":
                case "counterClockwise":
                    e.rotate.status = "decreasing";
                    break;
                case "clockwise":
                    e.rotate.status = "increasing"
                }
                let s = t.animation;
                s.enable && (e.rotate.decay = 1 - (0,
                a.VG)(s.decay),
                e.rotate.velocity = (0,
                a.VG)(s.speed) / 360 * this.container.retina.reduceFactor,
                s.sync || (e.rotate.velocity *= (0,
                a.G0)())),
                e.rotation = e.rotate.value
            }
            isEnabled(e) {
                let t = e.options.rotate;
                return !!t && !e.destroyed && !e.spawning && t.animation.enable && !t.path
            }
            loadOptions(e, ...t) {
                for (let i of (e.rotate || (e.rotate = new tr),
                t))
                    e.rotate.load(i?.rotate)
            }
            update(e, t) {
                this.isEnabled(e) && (!function(e, t) {
                    let i = e.rotate
                      , s = e.options.rotate;
                    if (!i || !s)
                        return;
                    let o = s.animation
                      , n = (i.velocity ?? 0) * t.factor
                      , r = 2 * Math.PI
                      , a = i.decay ?? 1;
                    o.enable && ("increasing" === i.status ? (i.value += n,
                    i.value > r && (i.value -= r)) : (i.value -= n,
                    i.value < 0 && (i.value += r)),
                    i.velocity && 1 !== a && (i.velocity *= a))
                }(e, t),
                e.rotation = e.rotate?.value ?? 0)
            }
        }
        async function tl(e, t=!0) {
            await e.addParticleUpdater("rotate", e => new ta(e), t)
        }
        let tc = Math.sqrt(2);
        class td {
            draw(e, t, i) {
                let s = i / tc
                  , o = 2 * s;
                e.rect(-s, -s, o, o)
            }
            getSidesCount() {
                return 4
            }
        }
        async function th(e, t=!0) {
            await e.addShape(["edge", "square"], new td, t)
        }
        class tu {
            draw(e, t, i) {
                let s = t.sides
                  , o = t.starInset ?? 2;
                e.moveTo(0, 0 - i);
                for (let t = 0; t < s; t++)
                    e.rotate(Math.PI / s),
                    e.lineTo(0, 0 - i * o),
                    e.rotate(Math.PI / s),
                    e.lineTo(0, 0 - i)
            }
            getSidesCount(e) {
                let t = e.shapeData;
                return Math.round((0,
                a.VG)(t?.sides ?? t?.nb_sides ?? 5))
            }
            particleInit(e, t) {
                let i = t.shapeData
                  , s = (0,
                a.VG)(i?.inset ?? 2);
                t.starInset = s
            }
        }
        async function tp(e, t=!0) {
            await e.addShape("star", new tu, t)
        }
        function tf(e, t, i, s, o) {
            if (!t || !i.enable || (t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0) || (t.time || (t.time = 0),
            (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += e.value),
            (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0)))
                return;
            let n = (0,
            a.U4)(i.offset)
              , r = (t.velocity ?? 0) * e.factor + 3.6 * n
              , l = t.decay ?? 1;
            o && "increasing" !== t.status ? (t.value -= r,
            t.value < 0 && (t.loops || (t.loops = 0),
            t.loops++,
            t.status = "increasing",
            t.value += t.value)) : (t.value += r,
            t.value > s && (t.loops || (t.loops = 0),
            t.loops++,
            o && (t.status = "decreasing",
            t.value -= t.value % s))),
            t.velocity && 1 !== l && (t.velocity *= l),
            t.value > s && (t.value %= s)
        }
        class tm {
            constructor(e) {
                this.container = e
            }
            init(e) {
                let t = this.container
                  , i = e.options
                  , s = (0,
                d.TA)(i.stroke, e.id, i.reduceDuplicates);
                e.strokeWidth = (0,
                a.VG)(s.width) * t.retina.pixelRatio,
                e.strokeOpacity = (0,
                a.VG)(s.opacity ?? 1),
                e.strokeAnimation = s.color?.animation;
                let o = (0,
                p.R5)(s.color) ?? e.getFillColor();
                o && (e.strokeColor = (0,
                p.pz)(o, e.strokeAnimation, t.retina.reduceFactor))
            }
            isEnabled(e) {
                let t = e.strokeAnimation
                  , {strokeColor: i} = e;
                return !e.destroyed && !e.spawning && !!t && (i?.h.value !== void 0 && i.h.enable || i?.s.value !== void 0 && i.s.enable || i?.l.value !== void 0 && i.l.enable)
            }
            update(e, t) {
                this.isEnabled(e) && function(e, t) {
                    if (!e.strokeColor || !e.strokeAnimation)
                        return;
                    let {h: i, s, l: o} = e.strokeColor
                      , {h: n, s: r, l: a} = e.strokeAnimation;
                    i && tf(t, i, n, 360, !1),
                    s && tf(t, s, r, 100, !0),
                    o && tf(t, o, a, 100, !0)
                }(e, t)
            }
        }
        async function tg(e, t=!0) {
            await e.addParticleUpdater("strokeColor", e => new tm(e), t)
        }
        let ty = ["text", "character", "char"];
        class tv {
            draw(e, t, i, s) {
                let o = t.shapeData;
                if (void 0 === o)
                    return;
                let n = o.value;
                if (void 0 === n)
                    return;
                void 0 === t.text && (t.text = (0,
                d.TA)(n, t.randomIndexData));
                let r = t.text
                  , a = o.style ?? ""
                  , l = o.weight ?? "400"
                  , c = 2 * Math.round(i)
                  , h = o.font ?? "Verdana"
                  , u = t.fill
                  , p = r.length * i / 2;
                e.font = `${a} ${l} ${c}px "${h}"`;
                let f = {
                    x: -p,
                    y: i / 2
                };
                e.globalAlpha = s,
                u ? e.fillText(r, f.x, f.y) : e.strokeText(r, f.x, f.y),
                e.globalAlpha = 1
            }
            getSidesCount() {
                return 12
            }
            async init(e) {
                let t = e.actualOptions;
                if (ty.find(e => (0,
                d.hn)(e, t.particles.shape.type))) {
                    let e = ty.map(e => t.particles.shape.options[e]).find(e => !!e)
                      , i = [];
                    (0,
                    d.wJ)(e, e => {
                        i.push((0,
                        d.Al)(e.font, e.weight))
                    }
                    ),
                    await Promise.all(i)
                }
            }
            particleInit(e, t) {
                if (!t.shape || !ty.includes(t.shape))
                    return;
                let i = t.shapeData;
                if (void 0 === i)
                    return;
                let s = i.value;
                void 0 !== s && (t.text = (0,
                d.TA)(s, t.randomIndexData))
            }
        }
        async function tb(e, t=!0) {
            await e.addShape(ty, new tv, t)
        }
        async function tw(e, t=!0) {
            r(e),
            await eU(e, !1),
            await A(e, !1),
            await G(e, !1),
            await H(e, !1),
            await Z(e, !1),
            await et(e, !1),
            await es(e, !1),
            await er(e, !1),
            await ec(e, !1),
            await ef(e, !1),
            await ey(e, !1),
            await eH(e, !1),
            await eZ(e, !1),
            await e9(e, !1),
            await S(),
            await eR(e, !1),
            await eq(e, !1),
            await to(e, !1),
            await th(e, !1),
            await tp(e, !1),
            await tb(e, !1),
            await eG(e, !1),
            await tl(e, !1),
            await tg(e, !1),
            await O(e, t)
        }
    }
    ,
    1290: (e, t, i) => {
        i.d(t, {
            DX: () => r
        });
        var s = i(2115);
        function o(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        var n = i(5155)
          , r = s.forwardRef( (e, t) => {
            let {children: i, ...o} = e
              , r = s.Children.toArray(i)
              , l = r.find(c);
            if (l) {
                let e = l.props.children
                  , i = r.map(t => t !== l ? t : s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null);
                return (0,
                n.jsx)(a, {
                    ...o,
                    ref: t,
                    children: s.isValidElement(e) ? s.cloneElement(e, void 0, i) : null
                })
            }
            return (0,
            n.jsx)(a, {
                ...o,
                ref: t,
                children: i
            })
        }
        );
        r.displayName = "Slot";
        var a = s.forwardRef( (e, t) => {
            let {children: i, ...n} = e;
            if (s.isValidElement(i)) {
                let e = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
                      , i = t && "isReactWarning"in t && t.isReactWarning;
                    return i ? e.ref : (i = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning"in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                }(i)
                  , r = function(e, t) {
                    let i = {
                        ...t
                    };
                    for (let s in t) {
                        let o = e[s]
                          , n = t[s];
                        /^on[A-Z]/.test(s) ? o && n ? i[s] = (...e) => {
                            n(...e),
                            o(...e)
                        }
                        : o && (i[s] = o) : "style" === s ? i[s] = {
                            ...o,
                            ...n
                        } : "className" === s && (i[s] = [o, n].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...i
                    }
                }(n, i.props);
                return i.type !== s.Fragment && (r.ref = t ? function(...e) {
                    return t => {
                        let i = !1
                          , s = e.map(e => {
                            let s = o(e, t);
                            return i || "function" != typeof s || (i = !0),
                            s
                        }
                        );
                        if (i)
                            return () => {
                                for (let t = 0; t < s.length; t++) {
                                    let i = s[t];
                                    "function" == typeof i ? i() : o(e[t], null)
                                }
                            }
                    }
                }(t, e) : e),
                s.cloneElement(i, r)
            }
            return s.Children.count(i) > 1 ? s.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        var l = ({children: e}) => (0,
        n.jsx)(n.Fragment, {
            children: e
        });
        function c(e) {
            return s.isValidElement(e) && e.type === l
        }
    }
    ,
    1027: (e, t, i) => {
        i.d(t, {
            F: () => r
        });
        var s = i(3463);
        let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
          , n = s.$
          , r = (e, t) => i => {
            var s;
            if ((null == t ? void 0 : t.variants) == null)
                return n(e, null == i ? void 0 : i.class, null == i ? void 0 : i.className);
            let {variants: r, defaultVariants: a} = t
              , l = Object.keys(r).map(e => {
                let t = null == i ? void 0 : i[e]
                  , s = null == a ? void 0 : a[e];
                if (null === t)
                    return null;
                let n = o(t) || o(s);
                return r[e][n]
            }
            )
              , c = i && Object.entries(i).reduce( (e, t) => {
                let[i,s] = t;
                return void 0 === s || (e[i] = s),
                e
            }
            , {});
            return n(e, l, null == t ? void 0 : null === (s = t.compoundVariants) || void 0 === s ? void 0 : s.reduce( (e, t) => {
                let {class: i, className: s, ...o} = t;
                return Object.entries(o).every(e => {
                    let[t,i] = e;
                    return Array.isArray(i) ? i.includes({
                        ...a,
                        ...c
                    }[t]) : ({
                        ...a,
                        ...c
                    })[t] === i
                }
                ) ? [...e, i, s] : e
            }
            , []), null == i ? void 0 : i.class, null == i ? void 0 : i.className)
        }
    }
    ,
    3463: (e, t, i) => {
        i.d(t, {
            $: () => s
        });
        function s() {
            for (var e, t, i = 0, s = "", o = arguments.length; i < o; i++)
                (e = arguments[i]) && (t = function e(t) {
                    var i, s, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var n = t.length;
                            for (i = 0; i < n; i++)
                                t[i] && (s = e(t[i])) && (o && (o += " "),
                                o += s)
                        } else
                            for (s in t)
                                t[s] && (o && (o += " "),
                                o += s)
                    }
                    return o
                }(e)) && (s && (s += " "),
                s += t);
            return s
        }
    }
    ,
    9795: (e, t, i) => {
        i.d(t, {
            QP: () => J
        });
        let s = e => {
            let t = a(e)
              , {conflictingClassGroups: i, conflictingClassGroupModifiers: s} = e;
            return {
                getClassGroupId: e => {
                    let i = e.split("-");
                    return "" === i[0] && 1 !== i.length && i.shift(),
                    o(i, t) || r(e)
                }
                ,
                getConflictingClassGroupIds: (e, t) => {
                    let o = i[e] || [];
                    return t && s[e] ? [...o, ...s[e]] : o
                }
            }
        }
          , o = (e, t) => {
            if (0 === e.length)
                return t.classGroupId;
            let i = e[0]
              , s = t.nextPart.get(i)
              , n = s ? o(e.slice(1), s) : void 0;
            if (n)
                return n;
            if (0 === t.validators.length)
                return;
            let r = e.join("-");
            return t.validators.find( ({validator: e}) => e(r))?.classGroupId
        }
          , n = /^\[(.+)\]$/
          , r = e => {
            if (n.test(e)) {
                let t = n.exec(e)[1]
                  , i = t?.substring(0, t.indexOf(":"));
                if (i)
                    return "arbitrary.." + i
            }
        }
          , a = e => {
            let {theme: t, prefix: i} = e
              , s = {
                nextPart: new Map,
                validators: []
            };
            return h(Object.entries(e.classGroups), i).forEach( ([e,i]) => {
                l(i, s, e, t)
            }
            ),
            s
        }
          , l = (e, t, i, s) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : c(t, e)).classGroupId = i;
                    return
                }
                if ("function" == typeof e) {
                    if (d(e)) {
                        l(e(s), t, i, s);
                        return
                    }
                    t.validators.push({
                        validator: e,
                        classGroupId: i
                    });
                    return
                }
                Object.entries(e).forEach( ([e,o]) => {
                    l(o, c(t, e), i, s)
                }
                )
            }
            )
        }
          , c = (e, t) => {
            let i = e;
            return t.split("-").forEach(e => {
                i.nextPart.has(e) || i.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                i = i.nextPart.get(e)
            }
            ),
            i
        }
          , d = e => e.isThemeGetter
          , h = (e, t) => t ? e.map( ([e,i]) => [e, i.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,i]) => [t + e, i])) : e)]) : e
          , u = e => {
            if (e < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let t = 0
              , i = new Map
              , s = new Map
              , o = (o, n) => {
                i.set(o, n),
                ++t > e && (t = 0,
                s = i,
                i = new Map)
            }
            ;
            return {
                get(e) {
                    let t = i.get(e);
                    return void 0 !== t ? t : void 0 !== (t = s.get(e)) ? (o(e, t),
                    t) : void 0
                },
                set(e, t) {
                    i.has(e) ? i.set(e, t) : o(e, t)
                }
            }
        }
          , p = e => {
            let {separator: t, experimentalParseClassName: i} = e
              , s = 1 === t.length
              , o = t[0]
              , n = t.length
              , r = e => {
                let i;
                let r = []
                  , a = 0
                  , l = 0;
                for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (0 === a) {
                        if (d === o && (s || e.slice(c, c + n) === t)) {
                            r.push(e.slice(l, c)),
                            l = c + n;
                            continue
                        }
                        if ("/" === d) {
                            i = c;
                            continue
                        }
                    }
                    "[" === d ? a++ : "]" === d && a--
                }
                let c = 0 === r.length ? e : e.substring(l)
                  , d = c.startsWith("!")
                  , h = d ? c.substring(1) : c;
                return {
                    modifiers: r,
                    hasImportantModifier: d,
                    baseClassName: h,
                    maybePostfixModifierPosition: i && i > l ? i - l : void 0
                }
            }
            ;
            return i ? e => i({
                className: e,
                parseClassName: r
            }) : r
        }
          , f = e => {
            if (e.length <= 1)
                return e;
            let t = []
              , i = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...i.sort(), e),
                i = []) : i.push(e)
            }
            ),
            t.push(...i.sort()),
            t
        }
          , m = e => ({
            cache: u(e.cacheSize),
            parseClassName: p(e),
            ...s(e)
        })
          , g = /\s+/
          , y = (e, t) => {
            let {parseClassName: i, getClassGroupId: s, getConflictingClassGroupIds: o} = t
              , n = []
              , r = e.trim().split(g)
              , a = "";
            for (let e = r.length - 1; e >= 0; e -= 1) {
                let t = r[e]
                  , {modifiers: l, hasImportantModifier: c, baseClassName: d, maybePostfixModifierPosition: h} = i(t)
                  , u = !!h
                  , p = s(u ? d.substring(0, h) : d);
                if (!p) {
                    if (!u || !(p = s(d))) {
                        a = t + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    u = !1
                }
                let m = f(l).join(":")
                  , g = c ? m + "!" : m
                  , y = g + p;
                if (n.includes(y))
                    continue;
                n.push(y);
                let v = o(p, u);
                for (let e = 0; e < v.length; ++e) {
                    let t = v[e];
                    n.push(g + t)
                }
                a = t + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        ;
        function v() {
            let e, t, i = 0, s = "";
            for (; i < arguments.length; )
                (e = arguments[i++]) && (t = b(e)) && (s && (s += " "),
                s += t);
            return s
        }
        let b = e => {
            let t;
            if ("string" == typeof e)
                return e;
            let i = "";
            for (let s = 0; s < e.length; s++)
                e[s] && (t = b(e[s])) && (i && (i += " "),
                i += t);
            return i
        }
          , w = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
          , x = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , _ = /^\d+\/\d+$/
          , k = new Set(["px", "full", "screen"])
          , z = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , M = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , S = e => E(e) || k.has(e) || _.test(e)
          , T = e => W(e, "length", N)
          , E = e => !!e && !Number.isNaN(Number(e))
          , I = e => W(e, "number", E)
          , R = e => !!e && Number.isInteger(Number(e))
          , D = e => e.endsWith("%") && E(e.slice(0, -1))
          , A = e => x.test(e)
          , L = e => z.test(e)
          , j = new Set(["length", "size", "percentage"])
          , V = e => W(e, j, H)
          , G = e => W(e, "position", H)
          , B = new Set(["image", "url"])
          , q = e => W(e, B, Y)
          , F = e => W(e, "", $)
          , U = () => !0
          , W = (e, t, i) => {
            let s = x.exec(e);
            return !!s && (s[1] ? "string" == typeof t ? s[1] === t : t.has(s[1]) : i(s[2]))
        }
          , N = e => M.test(e) && !C.test(e)
          , H = () => !1
          , $ = e => P.test(e)
          , Y = e => O.test(e);
        Symbol.toStringTag;
        let J = function(e, ...t) {
            let i, s, o;
            let n = function(a) {
                return s = (i = m(t.reduce( (e, t) => t(e), e()))).cache.get,
                o = i.cache.set,
                n = r,
                r(a)
            };
            function r(e) {
                let t = s(e);
                if (t)
                    return t;
                let n = y(e, i);
                return o(e, n),
                n
            }
            return function() {
                return n(v.apply(null, arguments))
            }
        }( () => {
            let e = w("colors")
              , t = w("spacing")
              , i = w("blur")
              , s = w("brightness")
              , o = w("borderColor")
              , n = w("borderRadius")
              , r = w("borderSpacing")
              , a = w("borderWidth")
              , l = w("contrast")
              , c = w("grayscale")
              , d = w("hueRotate")
              , h = w("invert")
              , u = w("gap")
              , p = w("gradientColorStops")
              , f = w("gradientColorStopPositions")
              , m = w("inset")
              , g = w("margin")
              , y = w("opacity")
              , v = w("padding")
              , b = w("saturate")
              , x = w("scale")
              , _ = w("sepia")
              , k = w("skew")
              , z = w("space")
              , M = w("translate")
              , C = () => ["auto", "contain", "none"]
              , P = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , O = () => ["auto", A, t]
              , j = () => [A, t]
              , B = () => ["", S, T]
              , W = () => ["auto", E, A]
              , N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , H = () => ["solid", "dashed", "dotted", "double", "none"]
              , $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , J = () => ["", "0", A]
              , K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , Z = () => [E, A];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [U],
                    spacing: [S, T],
                    blur: ["none", "", L, A],
                    brightness: Z(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", L, A],
                    borderSpacing: j(),
                    borderWidth: B(),
                    contrast: Z(),
                    grayscale: J(),
                    hueRotate: Z(),
                    invert: J(),
                    gap: j(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [D, T],
                    inset: O(),
                    margin: O(),
                    opacity: Z(),
                    padding: j(),
                    saturate: Z(),
                    scale: Z(),
                    sepia: J(),
                    skew: Z(),
                    space: j(),
                    translate: j()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", A]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [L]
                    }],
                    "break-after": [{
                        "break-after": K()
                    }],
                    "break-before": [{
                        "break-before": K()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...N(), A]
                    }],
                    overflow: [{
                        overflow: P()
                    }],
                    "overflow-x": [{
                        "overflow-x": P()
                    }],
                    "overflow-y": [{
                        "overflow-y": P()
                    }],
                    overscroll: [{
                        overscroll: C()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": C()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": C()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [m]
                    }],
                    "inset-x": [{
                        "inset-x": [m]
                    }],
                    "inset-y": [{
                        "inset-y": [m]
                    }],
                    start: [{
                        start: [m]
                    }],
                    end: [{
                        end: [m]
                    }],
                    top: [{
                        top: [m]
                    }],
                    right: [{
                        right: [m]
                    }],
                    bottom: [{
                        bottom: [m]
                    }],
                    left: [{
                        left: [m]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", R, A]
                    }],
                    basis: [{
                        basis: O()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", A]
                    }],
                    grow: [{
                        grow: J()
                    }],
                    shrink: [{
                        shrink: J()
                    }],
                    order: [{
                        order: ["first", "last", "none", R, A]
                    }],
                    "grid-cols": [{
                        "grid-cols": [U]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", R, A]
                        }, A]
                    }],
                    "col-start": [{
                        "col-start": W()
                    }],
                    "col-end": [{
                        "col-end": W()
                    }],
                    "grid-rows": [{
                        "grid-rows": [U]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [R, A]
                        }, A]
                    }],
                    "row-start": [{
                        "row-start": W()
                    }],
                    "row-end": [{
                        "row-end": W()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", A]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", A]
                    }],
                    gap: [{
                        gap: [u]
                    }],
                    "gap-x": [{
                        "gap-x": [u]
                    }],
                    "gap-y": [{
                        "gap-y": [u]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...Y()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...Y(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...Y(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [v]
                    }],
                    px: [{
                        px: [v]
                    }],
                    py: [{
                        py: [v]
                    }],
                    ps: [{
                        ps: [v]
                    }],
                    pe: [{
                        pe: [v]
                    }],
                    pt: [{
                        pt: [v]
                    }],
                    pr: [{
                        pr: [v]
                    }],
                    pb: [{
                        pb: [v]
                    }],
                    pl: [{
                        pl: [v]
                    }],
                    m: [{
                        m: [g]
                    }],
                    mx: [{
                        mx: [g]
                    }],
                    my: [{
                        my: [g]
                    }],
                    ms: [{
                        ms: [g]
                    }],
                    me: [{
                        me: [g]
                    }],
                    mt: [{
                        mt: [g]
                    }],
                    mr: [{
                        mr: [g]
                    }],
                    mb: [{
                        mb: [g]
                    }],
                    ml: [{
                        ml: [g]
                    }],
                    "space-x": [{
                        "space-x": [z]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [z]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", A, t]
                    }],
                    "min-w": [{
                        "min-w": [A, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [A, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [L]
                        }, L]
                    }],
                    h: [{
                        h: [A, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [A, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", L, T]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", I]
                    }],
                    "font-family": [{
                        font: [U]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", A]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", E, I]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", S, A]
                    }],
                    "list-image": [{
                        "list-image": ["none", A]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", A]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [y]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [y]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...H(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", S, T]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", S, A]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: j()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", A]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", A]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [y]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...N(), G]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", V]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, q]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [f]
                    }],
                    "gradient-via-pos": [{
                        via: [f]
                    }],
                    "gradient-to-pos": [{
                        to: [f]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [n]
                    }],
                    "rounded-s": [{
                        "rounded-s": [n]
                    }],
                    "rounded-e": [{
                        "rounded-e": [n]
                    }],
                    "rounded-t": [{
                        "rounded-t": [n]
                    }],
                    "rounded-r": [{
                        "rounded-r": [n]
                    }],
                    "rounded-b": [{
                        "rounded-b": [n]
                    }],
                    "rounded-l": [{
                        "rounded-l": [n]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [n]
                    }],
                    "rounded-se": [{
                        "rounded-se": [n]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [n]
                    }],
                    "rounded-es": [{
                        "rounded-es": [n]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [n]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [n]
                    }],
                    "rounded-br": [{
                        "rounded-br": [n]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [n]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [y]
                    }],
                    "border-style": [{
                        border: [...H(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [y]
                    }],
                    "divide-style": [{
                        divide: H()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-s": [{
                        "border-s": [o]
                    }],
                    "border-color-e": [{
                        "border-e": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: ["", ...H()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [S, A]
                    }],
                    "outline-w": [{
                        outline: [S, T]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: B()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [y]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [S, T]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", L, F]
                    }],
                    "shadow-color": [{
                        shadow: [U]
                    }],
                    opacity: [{
                        opacity: [y]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...$(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": $()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [i]
                    }],
                    brightness: [{
                        brightness: [s]
                    }],
                    contrast: [{
                        contrast: [l]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", L, A]
                    }],
                    grayscale: [{
                        grayscale: [c]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [h]
                    }],
                    saturate: [{
                        saturate: [b]
                    }],
                    sepia: [{
                        sepia: [_]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [i]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [s]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [l]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [c]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [h]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [y]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [b]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [_]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [r]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [r]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [r]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", A]
                    }],
                    duration: [{
                        duration: Z()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", A]
                    }],
                    delay: [{
                        delay: Z()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", A]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [x]
                    }],
                    "scale-x": [{
                        "scale-x": [x]
                    }],
                    "scale-y": [{
                        "scale-y": [x]
                    }],
                    rotate: [{
                        rotate: [R, A]
                    }],
                    "translate-x": [{
                        "translate-x": [M]
                    }],
                    "translate-y": [{
                        "translate-y": [M]
                    }],
                    "skew-x": [{
                        "skew-x": [k]
                    }],
                    "skew-y": [{
                        "skew-y": [k]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", A]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", A]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": j()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": j()
                    }],
                    "scroll-my": [{
                        "scroll-my": j()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": j()
                    }],
                    "scroll-me": [{
                        "scroll-me": j()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": j()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": j()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": j()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": j()
                    }],
                    "scroll-p": [{
                        "scroll-p": j()
                    }],
                    "scroll-px": [{
                        "scroll-px": j()
                    }],
                    "scroll-py": [{
                        "scroll-py": j()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": j()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": j()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": j()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": j()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": j()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": j()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", A]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [S, T, I]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        )
    }
}]);
