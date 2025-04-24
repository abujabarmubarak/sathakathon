(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    61: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 131))
    }
    ,
    131: (e, s, a) => {
        "use strict";
        a.r(s),
        a.d(s, {
            default: () => ea
        });
        var t = a(5155)
          , r = a(2115)
          , l = a(4085);
        function i() {
            let e = new Date("2025-05-05T10:00:00")
              , [s,a] = (0,
            r.useState)({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
            return (0,
            r.useEffect)( () => {
                let s = () => {
                    let s = e.getTime() - new Date().getTime();
                    if (s > 0) {
                        let e = Math.floor(s / 864e5);
                        a({
                            days: e,
                            hours: Math.floor(s / 36e5 % 24),
                            minutes: Math.floor(s / 1e3 / 60 % 60),
                            seconds: Math.floor(s / 1e3 % 60)
                        })
                    } else
                        a({
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        })
                }
                ;
                s();
                let t = setInterval(s, 1e3);
                return () => clearInterval(t)
            }
            , []),
            (0,
            t.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-4",
                children: [(0,
                t.jsxs)("div", {
                    className: "bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center",
                    children: [(0,
                    t.jsx)("div", {
                        className: "text-4xl font-bold",
                        children: s.days
                    }), (0,
                    t.jsx)("div", {
                        className: "text-xs text-gray-400 uppercase tracking-wider mt-1",
                        children: "Days"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center",
                    children: [(0,
                    t.jsx)("div", {
                        className: "text-4xl font-bold",
                        children: s.hours
                    }), (0,
                    t.jsx)("div", {
                        className: "text-xs text-gray-400 uppercase tracking-wider mt-1",
                        children: "Hours"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center",
                    children: [(0,
                    t.jsx)("div", {
                        className: "text-4xl font-bold",
                        children: s.minutes
                    }), (0,
                    t.jsx)("div", {
                        className: "text-xs text-gray-400 uppercase tracking-wider mt-1",
                        children: "Minutes"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center",
                    children: [(0,
                    t.jsx)("div", {
                        className: "text-4xl font-bold",
                        children: s.seconds
                    }), (0,
                    t.jsx)("div", {
                        className: "text-xs text-gray-400 uppercase tracking-wider mt-1",
                        children: "Seconds"
                    })]
                })]
            })
        }
        var n = a(3651);
        function o(e) {
            let {children: s, speed: a=.1, className: l=""} = e
              , i = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                let e = () => {
                    if (!i.current)
                        return;
                    let e = window.scrollY;
                    i.current.style.transform = "translate3d(0, ".concat(e * a, "px, 0)")
                }
                ;
                return window.addEventListener("scroll", e, {
                    passive: !0
                }),
                () => window.removeEventListener("scroll", e)
            }
            , [a]),
            (0,
            t.jsx)("div", {
                ref: i,
                className: l,
                children: s
            })
        }
        function c(e) {
            let {count: s=100, className: a=""} = e
              , l = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                let e;
                let a = l.current;
                if (!a)
                    return;
                let t = a.getContext("2d");
                if (!t)
                    return;
                let r = () => {
                    a.width = window.innerWidth,
                    a.height = window.innerHeight,
                    n()
                }
                  , i = []
                  , n = () => {
                    t.clearRect(0, 0, a.width, a.height),
                    t.fillStyle = "white",
                    i.forEach(e => {
                        t.beginPath(),
                        t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
                        t.fill()
                    }
                    )
                }
                  , o = () => {
                    n();
                    let s = window.scrollY;
                    i.forEach(e => {
                        e.y = (e.y + s * e.speed) % a.height
                    }
                    ),
                    e = requestAnimationFrame(o)
                }
                ;
                return r(),
                ( () => {
                    i.length = 0;
                    for (let e = 0; e < s; e++)
                        i.push({
                            x: Math.random() * a.width,
                            y: Math.random() * a.height,
                            radius: 1.5 * Math.random(),
                            speed: .05 * Math.random() + .01
                        })
                }
                )(),
                o(),
                window.addEventListener("resize", r),
                () => {
                    window.removeEventListener("resize", r),
                    cancelAnimationFrame(e)
                }
            }
            , [s]),
            (0,
            t.jsx)("canvas", {
                ref: l,
                className: "absolute inset-0 ".concat(a)
            })
        }
        var d = a(6165)
          , x = a(1719);
        function m(e) {
            let {hackathonDate: s, scrollToSection: a} = e;
            return (0,
            t.jsxs)("section", {
                className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden parallax-container",
                children: [(0,
                t.jsx)(n.B, {}), (0,
                t.jsx)(c, {
                    count: 300
                }), (0,
                t.jsx)("div", {
                    className: "relative z-10 container mx-auto px-4 text-center",
                    children: (0,
                    t.jsxs)(o, {
                        speed: .2,
                        className: "py-8",
                        children: [(0,
                        t.jsx)("br", {}), (0,
                        t.jsxs)("div", {
                            className: "space-y-6 max-w-4xl mx-auto",
                            children: [(0,
                            t.jsxs)("h1", {
                                className: "text-5xl md:text-7xl font-bold tracking-tighter",
                                "data-parallax": "0.1",
                                children: ["SATHAK\xa0\xa0", (0,
                                t.jsx)("span", {
                                    className: "text-gray-500",
                                    children: "A"
                                }), "\xa0\xa0THON"]
                            }), (0,
                            t.jsxs)("p", {
                                className: "text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text tracking-wide drop-shadow-lg max-w-2xl mx-auto",
                                "data-parallax": "0.15",
                                children: ["design.", (0,
                                t.jsx)("span", {
                                    className: "text-white",
                                    children: "develop."
                                }), (0,
                                t.jsx)("span", {
                                    className: "text-green-400",
                                    children: "deploy."
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "py-8",
                                "data-parallax": "0.2",
                                children: (0,
                                t.jsx)(i, {
                                    targetDate: s
                                })
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex flex-wrap justify-center gap-4 mt-8",
                                "data-parallax": "0.25",
                                children: [(0,
                                t.jsx)("a", {
                                    href: "https://forms.gle/3qSGGBHraNnFNEsq9",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0,
                                    t.jsxs)(l.$, {
                                        size: "lg",
                                        className: "bg-white text-black hover:bg-gray-200",
                                        children: ["Register Now ", (0,
                                        t.jsx)(d.A, {
                                            className: "ml-2 h-4 w-4"
                                        })]
                                    })
                                }), (0,
                                t.jsxs)(l.$, {
                                    variant: "outline",
                                    size: "lg",
                                    className: "border-gray-700 text-gray-300 hover:bg-gray-900",
                                    onClick: () => a("about"),
                                    children: ["Learn More ", (0,
                                    t.jsx)(x.A, {
                                        className: "ml-2 h-4 w-4"
                                    })]
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "w-full flex justify-center mt-4",
                                "data-parallax": "0.3",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://docs.google.com/presentation/d/1Ik2vsAiVP7vv1QVBV4CyOuY0CRN9a0AA/edit?usp=drive_link&ouid=116224171436636736150&rtpof=true&sd=true",
                                    download: "Abstract_Format.pptx",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex justify-center",
                                    children: (0,
                                    t.jsxs)("button", {
                                        type: "button",
                                        className: "btn",
                                        children: [(0,
                                        t.jsx)("strong", {
                                            children: "DOWNLOAD TEMPLATE"
                                        }), (0,
                                        t.jsx)("div", {
                                            id: "container-stars",
                                            children: (0,
                                            t.jsx)("div", {
                                                id: "stars"
                                            })
                                        }), (0,
                                        t.jsxs)("div", {
                                            id: "glow",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "circle"
                                            }), (0,
                                            t.jsx)("div", {
                                                className: "circle"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                }), (0,
                t.jsx)("div", {
                    className: "absolute bottom-10 left-0 right-0 flex justify-center animate-bounce",
                    children: (0,
                    t.jsx)("button", {
                        onClick: () => a("about"),
                        className: "text-gray-400 hover:text-white transition-colors",
                        "aria-label": "Scroll down",
                        children: (0,
                        t.jsx)(x.A, {
                            className: "h-8 w-8"
                        })
                    })
                })]
            })
        }
        var h = a(5565)
          , g = a(2823)
          , p = a(1024)
          , u = a(7819);
        let f = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e;
            return (0,
            t.jsx)("section", {
                id: "about",
                ref: s,
                className: "py-20 px-4 bg-black",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "About Sathak - A -Thon"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Join us for an unforgettable 24-hour journey of innovation, collaboration, and breakthrough solutions."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20",
                        children: [(0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: "Our Mission"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-4",
                                children: "Sathak-A-Thon was born out of a shared passion for innovation, creativity, and real-world impact. We believe that groundbreaking technological solutions emerge when diverse minds come together in a spirit of collaboration and exploration."
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-4",
                                children: "This hackathon is not just a competition—it's a dynamic platform for learning, networking, and pushing the boundaries of what’s possible with today’s cutting-edge technologies."
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400",
                                children: "Whether you're a seasoned developer, a design enthusiast, or a visionary problem-solver, Sathak-A-Thon offers the perfect stage for you to bring your ideas to life, build something meaningful, and contribute to the future of innovation."
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)("div", {
                                className: "relative h-64 md:h-96 w-full rounded-lg overflow-hidden border border-gray-800",
                                children: (0,
                                t.jsx)(h.default, {
                                    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZXJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZA/26tn33aiTi1jkl6H6/giphy.gif",
                                    alt: "Hackathon mission",
                                    fill: !0,
                                    className: "object-cover"
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "absolute -bottom-4 -right-4 h-32 w-32 rounded-lg overflow-hidden border-2 border-gray-700",
                                children: (0,
                                t.jsx)(h.default, {
                                    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5sZXI4ZmZkZzd5bDR6Njc3dmJzcDR2dmZ1djdsNHoxZGI1YWg0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bJ4TVNYNUympPgcpem/giphy.gif",
                                    alt: "Hackathon detail",
                                    fill: !0,
                                    className: "object-cover"
                                })
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-white group",
                            children: [(0,
                            t.jsx)("div", {
                                className: "mb-4 flex justify-center",
                                children: (0,
                                t.jsx)("div", {
                                    className: "p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors",
                                    children: (0,
                                    t.jsx)(g.A, {
                                        className: "h-8 w-8 text-white"
                                    })
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold mb-2 text-center",
                                children: "500+ Participants"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 text-center",
                                children: "Join a diverse community of developers, designers, and innovators from around the world."
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-white group",
                            children: [(0,
                            t.jsx)("div", {
                                className: "mb-4 flex justify-center",
                                children: (0,
                                t.jsx)("div", {
                                    className: "p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors",
                                    children: (0,
                                    t.jsx)(p.A, {
                                        className: "h-8 w-8 text-white"
                                    })
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold mb-2 text-center",
                                children: "5 Exciting Tracks"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 text-center",
                                children: "Choose from multiple specialized tracks designed to challenge your creativity and technical skills."
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-white group",
                            children: [(0,
                            t.jsx)("div", {
                                className: "mb-4 flex justify-center",
                                children: (0,
                                t.jsx)("div", {
                                    className: "p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors",
                                    children: (0,
                                    t.jsx)(u.A, {
                                        className: "h-8 w-8 text-white"
                                    })
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold mb-2 text-center",
                                children: "Exciting\xa0prizes"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 text-center",
                                children: "Compete for substantial cash prizes, mentorship opportunities, and valuable tech resources."
                            })]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "mt-16 text-center",
                        children: (0,
                        t.jsxs)(l.$, {
                            size: "lg",
                            className: "bg-white text-black hover:bg-gray-200",
                            onClick: () => a("timeline"),
                            children: ["View Timeline ", (0,
                            t.jsx)(x.A, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })]
                })
            })
        });
        var j = a(8803)
          , b = a.n(j);
        let v = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e
              , [i,n] = (0,
            r.useState)(0)
              , [o,d] = (0,
            r.useState)(0)
              , m = [{
                title: "Problem statements & Registration Open",
                description: "Problem statements released, and registrations open for participants to join and compete in the challenge.Problem statements released, and registrations open for participants to join and compete in the Hackathon.",
                date: "Apr 25, 2025",
                time: "6:00 PM IST"
            }, {
                title: "Submission Deadline",
                description: "Find teammates, attend skill-building workshops, and get mentorship to prepare for the main event.",
                date: "May 08, 2025",
                time: "12:00 AM IST"
            }, {
                title: "Shortlist & Waitlist Announcement",
                description: "Selected participants and waitlisted candidates will be announced. Stay tuned for further instructions.",
                date: "May 10, 2025",
                time: "11:00 AM IST"
            }, {
                title: "Hackathon Kickoff",
                description: "Present your projects to judges and celebrate the winners across all tracks and special categories.",
                date: "May 12, 2025",
                time: "10:00 AM IST"
            }, {
                title: "First Round Judging",
                description: "Initial project evaluations begin.",
                date: "May 15, 2025",
                time: "4:00 PM IST"
            }, {
                title: "Second Round Judging",
                description: "2nd Round project evaluations begin.",
                date: "May 25, 2025",
                time: "10:00 PM IST"
            }, {
                title: "Final Round Judging",
                description: "Teams present their solutions. Judges evaluate and determine the winners of the hackathon.",
                date: "May 30, 2025",
                time: "9:00 AM IST"
            }, {
                title: "Valedictory & Prize Distribution",
                description: "Celebrating achievements! Winners announced, prizes awarded, and the hackathon concludes with closing remarks.",
                date: "May 31, 2025",
                time: "1:30 PM IST"
            }];
            return (0,
            r.useEffect)( () => {
                let e = () => {
                    if (document.querySelectorAll("[data-parallax]").forEach(e => {
                        let s = Number.parseFloat(e.getAttribute("data-parallax") || "0.1")
                          , a = e.getBoundingClientRect()
                          , t = window.innerHeight;
                        if (a.top < t && a.bottom > 0) {
                            let r = (a.top - t) * s;
                            e.style.setProperty("--parallax-y", "".concat(r, "px"))
                        }
                    }
                    ),
                    s && "current"in s && s.current) {
                        let e = s.current
                          , a = e.getBoundingClientRect().top
                          , t = e.offsetHeight
                          , r = window.innerHeight
                          , l = window.scrollY;
                        a < r && a > -t && (n(Math.min(1, Math.max(0, 1 - a / (.8 * r)))),
                        d(Math.max(0, Math.min(Math.floor((l - e.offsetTop + r / 2) / (t / m.length)), m.length - 1))),
                        document.querySelectorAll(".timeline-event").forEach( (e, s) => {
                            let a = e.getBoundingClientRect();
                            e.classList.toggle("visible", a.top < .8 * r)
                        }
                        ))
                    }
                }
                ;
                return window.addEventListener("scroll", e, {
                    passive: !0
                }),
                e(),
                () => window.removeEventListener("scroll", e)
            }
            , [s, m.length]),
            (0,
            t.jsxs)("section", {
                id: "timeline",
                ref: s,
                className: "jsx-8c62fa351a8857ea py-20 px-4 bg-gray-950 min-h-screen",
                children: [(0,
                t.jsx)(c, {
                    count: 50,
                    className: "opacity-30"
                }), (0,
                t.jsxs)("div", {
                    className: "jsx-8c62fa351a8857ea container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "jsx-8c62fa351a8857ea text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            "data-parallax": "0.1",
                            className: "jsx-8c62fa351a8857ea text-4xl font-bold mb-4",
                            children: "Hackathon Timeline"
                        }), (0,
                        t.jsx)("div", {
                            className: "jsx-8c62fa351a8857ea h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            "data-parallax": "0.15",
                            className: "jsx-8c62fa351a8857ea text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Mark your calendar and prepare for an exciting journey of innovation and collaboration."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "jsx-8c62fa351a8857ea relative",
                        children: [(0,
                        t.jsx)("div", {
                            className: "jsx-8c62fa351a8857ea absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"
                        }), (0,
                        t.jsx)("div", {
                            style: {
                                height: "".concat(100 * i, "%")
                            },
                            className: "jsx-8c62fa351a8857ea absolute left-1/2 transform -translate-x-1/2 w-1 bg-white transition-all duration-500 ease-out hidden md:block"
                        }), (0,
                        t.jsx)("div", {
                            className: "jsx-8c62fa351a8857ea absolute left-6 top-0 h-full w-1 bg-gray-800 md:hidden"
                        }), (0,
                        t.jsx)("div", {
                            style: {
                                height: "".concat(100 * i, "%")
                            },
                            className: "jsx-8c62fa351a8857ea absolute left-6 top-0 w-1 bg-white transition-all duration-500 ease-out md:hidden"
                        }), (0,
                        t.jsx)("div", {
                            className: "jsx-8c62fa351a8857ea space-y-16 md:space-y-24",
                            children: m.map( (e, s) => (0,
                            t.jsxs)("div", {
                                style: {
                                    transitionDelay: "".concat(.2 * s, "s")
                                },
                                className: "jsx-8c62fa351a8857ea timeline-event relative opacity-0 transition-opacity duration-500 ease-in-out",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "jsx-8c62fa351a8857ea flex md:hidden items-start mb-4",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "jsx-8c62fa351a8857ea relative",
                                        children: (0,
                                        t.jsx)("div", {
                                            className: "jsx-8c62fa351a8857ea h-12 w-12 rounded-full bg-white flex items-center justify-center text-black font-bold z-10 relative",
                                            children: s + 1
                                        })
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "jsx-8c62fa351a8857ea ml-4",
                                        children: [(0,
                                        t.jsx)("h3", {
                                            className: "jsx-8c62fa351a8857ea text-xl font-bold",
                                            children: e.title
                                        }), (0,
                                        t.jsxs)("p", {
                                            className: "jsx-8c62fa351a8857ea text-gray-400 text-sm mt-1",
                                            children: [e.date, " • ", e.time]
                                        })]
                                    })]
                                }), (0,
                                t.jsx)("div", {
                                    className: "jsx-8c62fa351a8857ea pl-16 md:pl-0 md:w-full",
                                    children: (0,
                                    t.jsx)("div", {
                                        className: "jsx-8c62fa351a8857ea bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-800 md:hidden",
                                        children: (0,
                                        t.jsx)("p", {
                                            className: "jsx-8c62fa351a8857ea text-gray-400",
                                            children: e.description
                                        })
                                    })
                                }), (0,
                                t.jsx)("div", {
                                    className: "jsx-8c62fa351a8857ea hidden md:block",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "jsx-8c62fa351a8857ea " + "flex items-center ".concat(s % 2 == 0 ? "justify-end" : "justify-start"),
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "jsx-8c62fa351a8857ea " + "w-5/12 ".concat(s % 2 == 0 ? "text-right pr-16" : "pl-16"),
                                            children: [(0,
                                            t.jsx)("h3", {
                                                className: "jsx-8c62fa351a8857ea text-2xl font-bold mb-2",
                                                children: e.title
                                            }), (0,
                                            t.jsx)("p", {
                                                className: "jsx-8c62fa351a8857ea text-gray-400 mb-2",
                                                children: e.description
                                            }), (0,
                                            t.jsx)("div", {
                                                className: "jsx-8c62fa351a8857ea inline-block bg-gray-900 px-4 py-2 rounded-lg border border-gray-800",
                                                children: (0,
                                                t.jsxs)("p", {
                                                    className: "jsx-8c62fa351a8857ea text-lg font-mono",
                                                    children: [e.date, " • ", e.time]
                                                })
                                            })]
                                        }), (0,
                                        t.jsx)("div", {
                                            className: "jsx-8c62fa351a8857ea absolute left-1/2 transform -translate-x-1/2 z-10",
                                            children: (0,
                                            t.jsx)("div", {
                                                className: "jsx-8c62fa351a8857ea h-12 w-12 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg",
                                                children: s + 1
                                            })
                                        })]
                                    })
                                })]
                            }, s))
                        }), (0,
                        t.jsx)("div", {
                            className: "jsx-8c62fa351a8857ea hidden md:block",
                            children: (0,
                            t.jsx)("div", {
                                className: "jsx-8c62fa351a8857ea fixed right-8 top-1/2 transform -translate-y-1/2 z-20",
                                children: m.map( (e, s) => (0,
                                t.jsx)("div", {
                                    onClick: () => {
                                        let e = document.querySelectorAll(".timeline-event")[s];
                                        e && window.scrollTo({
                                            top: e.getBoundingClientRect().top + window.scrollY - 100,
                                            behavior: "smooth"
                                        })
                                    }
                                    ,
                                    className: "jsx-8c62fa351a8857ea " + "h-3 w-3 rounded-full my-4 cursor-pointer transition-all duration-300 ".concat(o === s ? "bg-white scale-150" : "bg-gray-600 hover:bg-gray-400")
                                }, s))
                            })
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "jsx-8c62fa351a8857ea mt-16 text-center",
                        children: (0,
                        t.jsxs)(l.$, {
                            size: "lg",
                            className: "bg-white text-black hover:bg-gray-200",
                            onClick: () => a("tracks"),
                            children: ["Explore Tracks ", (0,
                            t.jsx)(x.A, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })]
                }), (0,
                t.jsx)(b(), {
                    id: "8c62fa351a8857ea",
                    children: ".timeline-event.visible.jsx-8c62fa351a8857ea{opacity:1}[data-parallax].jsx-8c62fa351a8857ea{-webkit-transform:translatey(var(--parallax-y,0));-moz-transform:translatey(var(--parallax-y,0));-ms-transform:translatey(var(--parallax-y,0));-o-transform:translatey(var(--parallax-y,0));transform:translatey(var(--parallax-y,0))}"
                })]
            })
        });
        var N = a(8207)
          , y = a(9053)
          , w = a(6122)
          , k = a(1476)
          , A = a(2640)
          , E = a(5160)
          , S = a(8173)
          , z = a.n(S);
        let R = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e;
            return (0,
            t.jsx)("section", {
                id: "tracks",
                ref: s,
                className: "py-20 px-4 bg-black",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Hackathon Tracks"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Choose your challenge and showcase your skills in one of our specialized tracks."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",
                        children: [(0,
                        t.jsx)(z(), {
                            href: "Ai and machine learning.pdf",
                            className: "block group",
                            children: (0,
                            t.jsxs)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 h-full relative cursor-pointer transform group-hover:scale-[1.02]",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "absolute top-3 right-3 bg-purple-600/90 text-white text-xs font-medium px-3 py-1 rounded-full z-10 shadow-md",
                                    children: "Explore Track"
                                }), (0,
                                t.jsxs)("div", {
                                    className: "relative h-48 overflow-hidden",
                                    children: [(0,
                                    t.jsx)(h.default, {
                                        src: "https://media.giphy.com/media/KH26c44GWcwlty8DnW/giphy.gif?cid=790b7611sxvbfq2qoedj8iyc5no3k0w4z2nz8exm8fva00jc&ep=v1_gifs_search&rid=giphy.gif",
                                        alt: "AI Track",
                                        fill: !0,
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute top-4 left-4 bg-black/80 p-2 rounded-full",
                                        children: (0,
                                        t.jsx)(N.A, {
                                            className: "h-6 w-6 text-white"
                                        })
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors",
                                        children: "AI & Machine Learning"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400 mb-4",
                                        children: "Harness the power of artificial intelligence and machine learning to solve complex problems or create innovative applications."
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: "Natural language processing solutions"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Computer vision applications"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Predictive analytics tools"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "AI-powered automation systems"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-2",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex items-center text-sm text-gray-500 w-full",
                                            children: [(0,
                                            t.jsx)(p.A, {
                                                className: "h-4 w-4 mr-2 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Recommended skills: Python, TensorFlow, PyTorch, Data Science"
                                            })]
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "text-purple-400 flex items-center gap-1 text-sm font-medium whitespace-nowrap self-end sm:self-center",
                                            children: ["View Details ", (0,
                                            t.jsx)(y.A, {
                                                className: "h-3 w-3"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        t.jsx)(z(), {
                            href: "Web-App System.pdf",
                            className: "block group",
                            children: (0,
                            t.jsxs)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 h-full relative cursor-pointer transform group-hover:scale-[1.02]",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "absolute top-3 right-3 bg-blue-600/90 text-white text-xs font-medium px-3 py-1 rounded-full z-10 shadow-md",
                                    children: "Explore Track"
                                }), (0,
                                t.jsxs)("div", {
                                    className: "relative h-48 overflow-hidden",
                                    children: [(0,
                                    t.jsx)(h.default, {
                                        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZXJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZA/3oKIPEqDGUULpEU0aQ/giphy.gif",
                                        alt: "Web/app system",
                                        fill: !0,
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute top-4 left-4 bg-black/80 p-2 rounded-full",
                                        children: (0,
                                        t.jsx)(w.A, {
                                            className: "h-6 w-6 text-white"
                                        })
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors",
                                        children: "WEB/APP SYSTEM"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400 mb-4",
                                        children: "These platforms are accessible online or via smartphones, offering real-time interaction, data management, and user-friendly features to improve efficiency and communication."
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: "User-Centric Design"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Real-Time Data Handling"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Role-Based Access Control"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Cross-Platform Compatibility"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-2",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex items-center text-sm text-gray-500 w-full",
                                            children: [(0,
                                            t.jsx)(p.A, {
                                                className: "h-4 w-4 mr-2 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Recommended Skills:Node.js, Django, RESTful APIs"
                                            })]
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "text-blue-400 flex items-center gap-1 text-sm font-medium whitespace-nowrap self-end sm:self-center",
                                            children: ["View Details ", (0,
                                            t.jsx)(y.A, {
                                                className: "h-3 w-3"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        t.jsx)(z(), {
                            href: "AI_and_Robotics.pdf",
                            className: "block group",
                            children: (0,
                            t.jsxs)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-green-500 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.15)] transition-all duration-300 h-full relative cursor-pointer transform group-hover:scale-[1.02]",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "absolute top-3 right-3 bg-green-600/90 text-white text-xs font-medium px-3 py-1 rounded-full z-10 shadow-md",
                                    children: "Explore Track"
                                }), (0,
                                t.jsxs)("div", {
                                    className: "relative h-48 overflow-hidden",
                                    children: [(0,
                                    t.jsx)(h.default, {
                                        src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZrMDdlY2lydWE0eXB0MGJnY2t5NDk0eTh0ZzQzdzY2dHQwYTR5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AvVomHLXVfoLrgmlJX/giphy.gif",
                                        alt: "rOBOTICS",
                                        fill: !0,
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute top-4 left-4 bg-black/80 p-2 rounded-full",
                                        children: (0,
                                        t.jsx)(k.A, {
                                            className: "h-6 w-6 text-white"
                                        })
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "text-xl font-bold mb-2 group-hover:text-green-400 transition-colors",
                                        children: "AI and ROBOTICS"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400 mb-4",
                                        children: "AI-powered robots can help with campus navigation, security, administrative support, or personalized student assistance, creating a smart and interactive educational ecosystem."
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: "Autonomous Operation"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Sensor Integration"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Real-Time Data Processing"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Personalized Interaction"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-2",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex items-center text-sm text-gray-500 w-full",
                                            children: [(0,
                                            t.jsx)(p.A, {
                                                className: "h-4 w-4 mr-2 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Recommended Skills: Python,Embedded Systems,ML, ROS, CV"
                                            })]
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "text-green-400 flex items-center gap-1 text-sm font-medium whitespace-nowrap self-end sm:self-center",
                                            children: ["View Details ", (0,
                                            t.jsx)(y.A, {
                                                className: "h-3 w-3"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        t.jsx)(z(), {
                            href: "Embedded system.pdf",
                            className: "block group",
                            children: (0,
                            t.jsxs)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(248,113,113,0.15)] transition-all duration-300 h-full relative cursor-pointer transform group-hover:scale-[1.02]",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "absolute top-3 right-3 bg-red-600/90 text-white text-xs font-medium px-3 py-1 rounded-full z-10 shadow-md",
                                    children: "Explore Track"
                                }), (0,
                                t.jsxs)("div", {
                                    className: "relative h-48 overflow-hidden",
                                    children: [(0,
                                    t.jsx)(h.default, {
                                        src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdzMGZ6OXBxeDJtMzlreTFteG8xY201Zm16bTBqZ2pnNnBwMHh1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j6NaTTkaqWS6RoV3qt/giphy.gif",
                                        alt: "iot",
                                        fill: !0,
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute top-4 left-4 bg-black/80 p-2 rounded-full",
                                        children: (0,
                                        t.jsx)(A.A, {
                                            className: "h-6 w-6 text-white"
                                        })
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "text-xl font-bold mb-2 group-hover:text-red-400 transition-colors",
                                        children: "IoT & Embedded Systems"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400 mb-4",
                                        children: "It  involve connecting physical devices (like sensors, machines, or controllers) to the internet or a local network to collect, process, and exchange data."
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: "Real-Time Monitoring"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Remote Accessibility"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Automation and Control"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "Low-Power, High-Efficiency Devices"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-2",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex items-center text-sm text-gray-500 w-full",
                                            children: [(0,
                                            t.jsx)(p.A, {
                                                className: "h-4 w-4 mr-2 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Recommended Skills:C / C++,MQTT, HTTP,Firebase, Blynk."
                                            })]
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "text-red-400 flex items-center gap-1 text-sm font-medium whitespace-nowrap self-end sm:self-center",
                                            children: ["View Details ", (0,
                                            t.jsx)(y.A, {
                                                className: "h-3 w-3"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0,
                    t.jsx)("div", {

                        className: "max-w-xl mx-auto mb-16",
                        children: (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-amber-500 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all duration-300 relative cursor-pointer transform group-hover:scale-[1.02]",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "relative h-48 overflow-hidden",
                                children: [(0,
                                t.jsx)(h.default, {
                                    src: "https://cdn.dribbble.com/users/107759/screenshots/3745852/exclusive.gif",
                                    alt: "Open Innovation Track",
                                    fill: !0,
                                    className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute top-4 left-4 bg-black/80 p-2 rounded-full",
                                    children: (0,
                                    t.jsx)(E.A, {
                                        className: "h-6 w-6 text-white"
                                    })
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "p-6",
                                children: [(0,
                                t.jsx)("h3", {
                                    className: "text-xl font-bold mb-2 text-amber-400",
                                    children: "Open Innovation Track  (Problem ID - 20758)"
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-gray-400 mb-4",
                                    children: "Have a groundbreaking idea that doesn't fit neatly into the tracks above? The Open Innovation track welcomes all creative projects that demonstrate technical excellence and innovative thinking."
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                    children: [(0,
                                    t.jsx)("li", {
                                        children: "Novel hardware solutions"
                                    }), (0,
                                    t.jsx)("li", {
                                        children: "Cross-domain applications"
                                    }), (0,
                                    t.jsx)("li", {
                                        children: "Experimental technologies"
                                    }), (0,
                                    t.jsx)("li", {
                                        children: "Unique problem-solving approaches"
                                    })]
                                }), (0,
                                t.jsx)("div", {
                                    className: "pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-2",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "flex items-center text-sm text-gray-500 w-full",
                                        children: [(0,
                                        t.jsx)(p.A, {
                                            className: "h-4 w-4 mr-2 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Any tech stack, any approach - innovation is key"
                                        })]
                                    })
                                })]
                            })]
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "mt-16 text-center"
                    })]
                })
            })
        });
        var T = a(865)
          , C = a(7508)
          , M = a(3075)
          , D = a(7072);
        let P = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e;
            return (0,
            t.jsx)("section", {
                id: "prizes",
                ref: s,
                className: "py-20 px-4 bg-gray-950",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Prizes & Rewards"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Compete for amazing prizes that recognize innovation, technical excellence, and impactful solutions."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 rounded-xl border border-gray-800 group hover:border-white transition-all duration-300 relative pt-12",
                            children: [(0,
                            t.jsx)("div", {
                                className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "relative",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center",
                                        children: (0,
                                        t.jsx)(u.A, {
                                            className: "h-8 w-8 text-white"
                                        })
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 rounded-full border-2 border-gray-700 animate-pulse"
                                    })]
                                })
                            }), (0,
                            t.jsxs)("div", {
                                className: "p-6 text-center",
                                children: [(0,
                                t.jsx)("h3", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "Second Place"
                                }), (0,
                                t.jsx)("div", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "XXXXX"
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "space-y-2 text-gray-400 mb-6 text-left",
                                    children: [(0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "XXXXX cash prize for the team"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Certificate of Excellence"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Recognition on Official Platforms"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Opportunity to Connect with Peers"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative bg-gray-900 rounded-xl border border-gray-800 group hover:border-white transition-all duration-300 relative pt-12 md:transform md:scale-110 md:z-10",
                            children: [(0,
                            t.jsx)("div", {
                                className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "relative",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "h-20 w-20 rounded-full bg-white flex items-center justify-center",
                                        children: (0,
                                        t.jsx)(C.A, {
                                            className: "h-10 w-10 text-black"
                                        })
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 rounded-full border-2 border-white animate-pulse"
                                    })]
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full",
                                children: "GRAND PRIZE"
                            }), (0,
                            t.jsxs)("div", {
                                className: "p-6 text-center",
                                children: [(0,
                                t.jsx)("h3", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "First Place"
                                }), (0,
                                t.jsx)("div", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "XXXXX"
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "space-y-2 text-gray-400 mb-6 text-left",
                                    children: [(0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "XXXXX cash prize for the team"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Certificate of Achievement"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Recognition on Official Platforms"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Opportunity to Network with Experts"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 rounded-xl border border-gray-800 group hover:border-white transition-all duration-300 relative pt-12",
                            children: [(0,
                            t.jsx)("div", {
                                className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "relative",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center",
                                        children: (0,
                                        t.jsx)(M.A, {
                                            className: "h-8 w-8 text-white"
                                        })
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 rounded-full border-2 border-gray-700 animate-pulse"
                                    })]
                                })
                            }), (0,
                            t.jsxs)("div", {
                                className: "p-6 text-center",
                                children: [(0,
                                t.jsx)("h3", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "Third Place"
                                }), (0,
                                t.jsx)("div", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "XXXXX"
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "space-y-2 text-gray-400 mb-6 text-left",
                                    children: [(0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "XXXXX cash prize for the team"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Certificate of Participation"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Showcase of Winning Project"
                                        })]
                                    }), (0,
                                    t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [(0,
                                        t.jsx)(T.A, {
                                            className: "h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                                        }), (0,
                                        t.jsx)("span", {
                                            children: "Chance to Gain Valuable Experience"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mb-20",
                        children: [(0,
                        t.jsx)("h3", {
                            className: "text-2xl font-bold mb-8 text-center",
                            children: "Track Prizes"
                        }), (0,
                        t.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [(0,
                            t.jsx)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex items-center mb-4",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "p-2 bg-gray-800 rounded-full mr-4",
                                            children: (0,
                                            t.jsx)(N.A, {
                                                className: "h-6 w-6 text-white"
                                            })
                                        }), (0,
                                        t.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "AI & ML Track Prize"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-wrap gap-4 mb-4",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(u.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "inline-flex items-center",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-green-400 font-bold animate-pulse",
                                                    children: "$???"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "text-yellow-300 font-bold ml-1 animate-pulse",
                                                    children: "SECRET CASH"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "ml-1 text-white",
                                                    children: "\uD83D\uDCB0"
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(D.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "text-gray-300",
                                                children: "Exciting prizes"
                                            })]
                                        })]
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400",
                                        children: "Awarded to the most innovative use of AI and machine learning to solve complex problems."
                                    })]
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex items-center mb-4",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "p-2 bg-gray-800 rounded-full mr-4",
                                            children: (0,
                                            t.jsx)(w.A, {
                                                className: "h-6 w-6 text-white"
                                            })
                                        }), (0,
                                        t.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "Web/App System Prize"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-wrap gap-4 mb-4",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(u.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "inline-flex items-center",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-green-400 font-bold animate-pulse",
                                                    children: "$???"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "text-yellow-300 font-bold ml-1 animate-pulse",
                                                    children: "SECRET CASH"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "ml-1 text-white",
                                                    children: "\uD83D\uDCB0"
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(D.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "text-gray-300",
                                                children: "Exciting prizes"
                                            })]
                                        })]
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400",
                                        children: "Awarded to the most innovative decentralized application or blockchain solution."
                                    })]
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex items-center mb-4",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "p-2 bg-gray-800 rounded-full mr-4",
                                            children: (0,
                                            t.jsx)(k.A, {
                                                className: "h-6 w-6 text-white"
                                            })
                                        }), (0,
                                        t.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "AI & Robotics Prize"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-wrap gap-4 mb-4",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(u.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "inline-flex items-center",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-green-400 font-bold animate-pulse",
                                                    children: "$???"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "text-yellow-300 font-bold ml-1 animate-pulse",
                                                    children: "SECRET CASH"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "ml-1 text-white",
                                                    children: "\uD83D\uDCB0"
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(D.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "text-gray-300",
                                                children: "Exciting prizes"
                                            })]
                                        })]
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400",
                                        children: "Awarded to the most insightful and innovative analysis or visualization of data."
                                    })]
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "p-6",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex items-center mb-4",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "p-2 bg-gray-800 rounded-full mr-4",
                                            children: (0,
                                            t.jsx)(A.A, {
                                                className: "h-6 w-6 text-white"
                                            })
                                        }), (0,
                                        t.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "IOT & ES Prize"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-wrap gap-4 mb-4",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(u.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "inline-flex items-center",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-green-400 font-bold animate-pulse",
                                                    children: "$???"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "text-yellow-300 font-bold ml-1 animate-pulse",
                                                    children: "SECRET CASH"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "ml-1 text-white",
                                                    children: "\uD83D\uDCB0"
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "bg-gray-800 rounded-lg p-3 flex items-center",
                                            children: [(0,
                                            t.jsx)(D.A, {
                                                className: "h-5 w-5 text-white mr-2"
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "text-gray-300",
                                                children: "Exciting prizes"
                                            })]
                                        })]
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-400",
                                        children: "Awarded to the most effective solution for enhancing digital security or privacy."
                                    })]
                                })
                            })]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "mt-16 text-center",
                        children: (0,
                        t.jsxs)(l.$, {
                            size: "lg",
                            className: "bg-white text-black hover:bg-gray-200",
                            onClick: () => a("sponsors"),
                            children: ["Our Sponsors ", (0,
                            t.jsx)(x.A, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })]
                })
            })
        });
        var Z = a(5753)
          , I = a(4857);
        let q = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e;
            return (0,
            t.jsx)("section", {
                id: "become-sponsor",
                ref: s,
                className: "py-20 px-4 bg-gray-950",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Become a Sponsor"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Support innovation and connect with top tech talent by sponsoring SATHAK  A  THON Hackathon."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300",
                            children: [(0,
                            t.jsx)("div", {
                                className: "h-12 w-12 rounded-full bg-purple-900 flex items-center justify-center mb-6",
                                children: (0,
                                t.jsx)(g.A, {
                                    className: "h-6 w-6 text-purple-300"
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Talent Recruitment"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-4",
                                children: "Connect with over 500 skilled developers, designers, and innovators. Get first access to recruit top talent."
                            }), (0,
                            t.jsxs)("ul", {
                                className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                children: [(0,
                                t.jsx)("li", {
                                    children: "Direct access to participants"
                                }), (0,
                                t.jsx)("li", {
                                    children: "Resume database access"
                                }), (0,
                                t.jsx)("li", {
                                    children: "Networking opportunities"
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300",
                            children: [(0,
                            t.jsx)("div", {
                                className: "h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center mb-6",
                                children: (0,
                                t.jsx)(C.A, {
                                    className: "h-6 w-6 text-blue-300"
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Brand Visibility"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-4",
                                children: "Showcase your brand to a tech-savvy audience. Your logo will be featured on our website, social media, and event materials."
                            }), (0,
                            t.jsxs)("ul", {
                                className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                children: [(0,
                                t.jsx)("li", {
                                    children: "Logo placement on materials"
                                }), (0,
                                t.jsx)("li", {
                                    children: "Social media promotion"
                                }), (0,
                                t.jsx)("li", {
                                    children: "Presentation opportunities"
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-300",
                            children: [(0,
                            t.jsx)("div", {
                                className: "h-12 w-12 rounded-full bg-indigo-900 flex items-center justify-center mb-6",
                                children: (0,
                                t.jsx)(Z.A, {
                                    className: "h-6 w-6 text-indigo-300"
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Community Impact"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-4",
                                children: "Support the tech ecosystem and contribute to innovation. Help shape the future of technology through mentorship and resources."
                            }), (0,
                            t.jsxs)("ul", {
                                className: "space-y-2 text-gray-400 list-disc pl-5 mb-4",
                                children: [(0,
                                t.jsx)("li", {
                                    children: "Mentorship opportunities"
                                }), (0,
                                t.jsx)("li", {
                                    children: "Support innovation"
                                }), (0,
                                t.jsx)("li", {
                                    children: "Build community goodwill"
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "text-center",
                        children: [(0,
                        t.jsx)("div", {
                            className: "w-full flex justify-center mt-4",
                            children: (0,
                            t.jsx)("a", {
                                href: "Brochure.png",
                                download: "Brochure.png",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0,
                                t.jsxs)(l.$, {
                                    size: "lg",
                                    className: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2",
                                    children: [(0,
                                    t.jsx)(I.A, {
                                        className: "h-5 w-5"
                                    }), "Download Brochure"]
                                })
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "mt-8",
                            children: (0,
                            t.jsxs)(l.$, {
                                variant: "outline",
                                className: "border-gray-700 text-gray-300 hover:bg-gray-900",
                                onClick: () => a("sponsors"),
                                children: ["View Current Sponsors ", (0,
                                t.jsx)(x.A, {
                                    className: "ml-2 h-4 w-4"
                                })]
                            })
                        })]
                    })]
                })
            })
        })
          , W = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e;
            return (0,
            t.jsx)("section", {
                id: "sponsors",
                ref: s,
                className: "py-20 px-4 bg-black",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Our Sponsors"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "SATHAK  A  THON is made possible by the generous support of our sponsors who share our vision for innovation."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mb-16",
                        children: [(0,
                        t.jsx)("h3", {
                            className: "text-xl font-bold text-center mb-8 text-white"
                        }), (0,
                        t.jsx)("div", {
                            className: "flex justify-center",
                            children: (0,
                            t.jsxs)("div", {
                                className: "relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg -z-10 "
                                }), (0,
                                t.jsx)("img", {
                                    src: "comingsoon.jpeg",
                                    alt: "Coming Soon",
                                    className: "w-full h-auto object-cover transition-all duration-300 rounded-lg relative z-10 p-2"
                                })]
                            })
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "mt-16 text-center",
                        children: (0,
                        t.jsxs)(l.$, {
                            size: "lg",
                            className: "bg-white text-black hover:bg-gray-200",
                            onClick: () => a("gallery"),
                            children: ["View Gallery ", (0,
                            t.jsx)(x.A, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })]
                })
            })
        });
        var H = a(1190);
        let L = ["G1.jpg", "G2.jpg", "G3.jpg", "G4.jpg"]
          , F = [{
            src: "G5.jpg",
            title: "The Team",
            description: "Hard work, late nights, and a lot of fun—meet the organizers!"
        }, {
            src: "G6.jpg",
            title: "Faculty Coordinators",
            description: "Guiding us every step of the way – our faculty coordinators."
        }, {
            src: "G7.jpg",
            title: "Award Ceremony",
            description: "Celebrating the winners and their outstanding achievements"
        }]
          , _ = (0,
        r.forwardRef)(function(e, s) {
            return (0,
            t.jsx)("section", {
                id: "gallery",
                ref: s,
                className: "py-20 px-4 bg-gray-950",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Gallery"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Relive the excitement and innovation from our previous hackathons."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mb-16",
                        children: [(0,
                        t.jsx)("h3", {
                            className: "text-2xl font-bold mb-8",
                            children: "SATHAK  A  THON 2024"
                        }), (0,
                        t.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                            children: F.map( (e, s) => (0,
                            t.jsxs)("div", {
                                className: "relative group overflow-hidden rounded-lg",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "relative w-full h-64",
                                    children: (0,
                                    t.jsx)(h.default, {
                                        src: e.src,
                                        alt: e.title,
                                        layout: "fill",
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    })
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "p-4",
                                        children: [(0,
                                        t.jsx)("h4", {
                                            className: "text-white font-bold",
                                            children: e.title
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-gray-300 text-sm",
                                            children: e.description
                                        })]
                                    })
                                })]
                            }, s))
                        })]
                    }), (0,
                    t.jsx)("div", {
                        children: (0,
                        t.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",
                            children: L.map( (e, s) => (0,
                            t.jsxs)("div", {
                                className: "relative group overflow-hidden rounded-lg",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "relative w-full h-48",
                                    children: (0,
                                    t.jsx)(h.default, {
                                        src: e,
                                        alt: "Hackathon 2023 - Image ".concat(s + 1),
                                        layout: "fill",
                                        className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                    })
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                                    children: (0,
                                    t.jsx)(H.A, {
                                        className: "h-8 w-8 text-white"
                                    })
                                })]
                            }, s))
                        })
                    })]
                })
            })
        });
        var B = a(4999)
          , G = a(3831)
          , V = a(7223)
          , Y = a(7037);
        function O() {
            let e = (0,
            Y.M3)()
              , [s,a] = (0,
            r.useState)(!1);
            if ((0,
            r.useEffect)( () => {
                e || setTimeout( () => {
                    a(!0)
                }
                , 100)
            }
            , [e]),
            e)
                return null;
            let i = [{
                name: "Abu Jabar Mubarak",
                img: "Abu.jpg"
            },{
                name: "Amirudeen F",
                img: "/Amirudeen.jpg"
            }, {
                name: "Mohamed Abdul Kalam.N",
                img: "Kalam.jpg"
            },  {
                name: "Ganesh.J",
                img: "Ganesh.jpg"
            }, 
            ,]
              , n = {
                lat: 12.8358,
                lng: 80.2186,
                googleMapsUrl: "https://www.google.com/maps/place/Mohamed+Sathak+A.J.+College+of+Engineering/@12.8357768,80.2160224,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525a4499bb91f3:0x7eaff885438a07f4!8m2!3d12.8357768!4d80.2185973!16s%2Fg%2F1ttq0jm4?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D"
            };
            return (0,
            t.jsx)("section", {
                className: "py-20 px-4 bg-black border-t border-gray-900 transition-opacity duration-500 ".concat(s ? "opacity-100" : "opacity-0"),
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-4xl text-center",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-6",
                        children: "Are You Ready to Join the Challenge?"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-gray-400 mb-8 max-w-2xl mx-auto",
                        children: "Register now and start your journey to innovation, recognition, and amazing prizes!"
                    }), (0,
                    t.jsxs)(l.$, {
                        size: "lg",
                        className: "bg-white text-black hover:bg-gray-200",
                        onClick: () => window.location.href = "https://forms.gle/3qSGGBHraNnFNEsq9",
                        children: ["Register for SATHAK  A  THON ", (0,
                        t.jsx)(d.A, {
                            className: "ml-2 h-4 w-4"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center",
                        children: [(0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("h3", {
                                className: "text-lg font-bold mb-4",
                                children: "Follow Us"
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex justify-center space-x-6",
                                children: [(0,
                                t.jsxs)(z(), {
                                    href: "https://www.linkedin.com/school/mohamed-sathak-a.j.college-of-engineering/?originalSubdomain=in",
                                    className: "text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-2",
                                    children: [(0,
                                    t.jsx)(B.A, {
                                        className: "h-6 w-6 text-cyan-400"
                                    }), (0,
                                    t.jsx)("span", {
                                        children: "LinkedIn"
                                    })]
                                }), (0,
                                t.jsxs)(z(), {
                                    href: "https://www.instagram.com/msajce?igsh=aTdvdXc4djVrMXIy",
                                    className: "text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-2",
                                    children: [(0,
                                    t.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "h-6 w-6 text-cyan-400",
                                        children: [(0,
                                        t.jsx)("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "20",
                                            height: "20",
                                            rx: "5",
                                            ry: "5"
                                        }), (0,
                                        t.jsx)("path", {
                                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                        }), (0,
                                        t.jsx)("line", {
                                            x1: "17.5",
                                            y1: "6.5",
                                            x2: "17.51",
                                            y2: "6.5"
                                        })]
                                    }), (0,
                                    t.jsx)("span", {
                                        children: "Instagram"
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "md:col-span-1",
                            children: [(0,
                            t.jsx)("h3", {
                                className: "text-white font-bold mb-6",
                                children: "Contact Us"
                            }), (0,
                            t.jsxs)("ul", {
                                className: "space-y-4 mx-auto max-w-[250px] ml-0 md:ml-8 pl-16 md:pl-0",
                                children: [(0,
                                t.jsxs)("li", {
                                    className: "flex items-start",
                                    children: [(0,
                                    t.jsx)(G.A, {
                                        className: "h-5 w-5 text-cyan-400 mt-0.5 min-w-5"
                                    }), (0,
                                    t.jsxs)("span", {
                                        className: "text-gray-400 text-center ml-3",
                                        children: ["Abu Jabar Mubarak ", (0,
                                        t.jsx)("br", {}), (0,
                                        t.jsx)("span", {
                                            className: "font-medium text-white",
                                            children: "+91 6381978782"
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("li", {
                                    className: "flex items-start",
                                    children: [(0,
                                    t.jsx)(G.A, {
                                        className: "h-5 w-5 text-cyan-400 mt-0.5 min-w-5"
                                    }), (0,
                                    t.jsxs)("span", {
                                        className: "text-gray-400 text-center ml-3",
                                        children: ["Mohamed Abdul Kalam N ", (0,
                                        t.jsx)("br", {}), (0,
                                        t.jsx)("span", {
                                            className: "font-medium text-white",
                                            children: "+91 8248280500"
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("li", {
                                    className: "flex items-start",
                                    children: [(0,
                                    t.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "h-5 w-5 text-cyan-400 mt-0.5 min-w-5",
                                        children: [(0,
                                        t.jsx)("rect", {
                                            width: "20",
                                            height: "16",
                                            x: "2",
                                            y: "4",
                                            rx: "2"
                                        }), (0,
                                        t.jsx)("path", {
                                            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                        })]
                                    }), (0,
                                    t.jsxs)("span", {
                                        className: "text-gray-400 text-center ml-3",
                                        children: ["Email ", (0,
                                        t.jsx)("br", {}), (0,
                                        t.jsx)("a", {
                                            href: "mailto:tenetbelief@msajce-edu.in",
                                            className: "font-medium text-white hover:text-cyan-400 transition-colors",
                                            children: "tenetbelief@msajce-edu.in"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("h3", {
                                className: "text-lg font-bold mb-4",
                                children: "Resources"
                            }), (0,
                            t.jsxs)("div", {
                                className: "space-y-2 flex flex-col items-center",
                                children: [(0,
                                t.jsx)(z(), {
                                    href: "#faq",
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: "FAQ"
                                }), (0,
                                t.jsx)(z(), {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: "Code of Conduct"
                                }), (0,
                                t.jsx)(z(), {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: "Privacy Policy"
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-12",
                        children: [(0,
                        t.jsx)("h3", {
                            className: "text-2xl font-bold mb-4 text-left",
                            children: "Location"
                        }), (0,
                        t.jsx)("div", {
                            className: "rounded-lg overflow-hidden border border-gray-800 shadow-lg",
                            children: (0,
                            t.jsxs)("div", {
                                className: "relative w-full h-64 bg-gradient-to-r from-gray-900 to-black overflow-hidden",
                                children: [(0,
                                t.jsx)("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.116049083576!2d80.2185973!3d12.835776799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a4499bb91f3%3A0x7eaff885438a07f4!2sMohamed%20Sathak%20A.J.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1745478251620!5m2!1sen!2sin",
                                    width: "100%",
                                    height: "100%",
                                    style: {
                                        border: 0
                                    },
                                    allowFullScreen: !0,
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer-when-downgrade",
                                    className: "filter brightness-75 contrast-125 saturate-50"
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10"
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-10"
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 border border-cyan-900/20 pointer-events-none z-10"
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-left z-20",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "flex items-start gap-3",
                                        children: [(0,
                                        t.jsx)(V.A, {
                                            className: "h-5 w-5 text-cyan-400 mt-1"
                                        }), (0,
                                        t.jsxs)("div", {
                                            children: [(0,
                                            t.jsx)("h4", {
                                                className: "text-white font-medium",
                                                children: "Mohamed Sathak A.J. College of Engineering"
                                            }), (0,
                                            t.jsx)("p", {
                                                className: "text-gray-300 text-sm",
                                                children: "S34, Rajiv Gandhi Salai (OMR) Inside SIPCOT IT Park, Siruseri, Egattur, Chennai, Tamil Nadu 603103"
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "flex items-center gap-2 mt-1",
                                                children: [(0,
                                                t.jsxs)("span", {
                                                    className: "text-gray-400 text-xs",
                                                    children: [n.lat.toFixed(6), ", ", n.lng.toFixed(6)]
                                                }), (0,
                                                t.jsxs)("a", {
                                                    href: n.googleMapsUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-cyan-400 text-xs hover:text-cyan-300 inline-flex items-center",
                                                    children: ["Open in Google Maps ", (0,
                                                    t.jsx)("span", {
                                                        className: "inline-block ml-1",
                                                        children: "→"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-16 pt-8 border-t border-gray-900 text-sm text-gray-600",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "mb-6 py-4 px-6 bg-gradient-to-r from-cyan-900/20 to-gray-900/20 rounded-lg border border-gray-800",
                            children: [,(0,
                            t.jsx)("h3", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Meet Our Developers"
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex flex-wrap justify-center gap-4 md:gap-5",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex flex-wrap justify-center w-full md:hidden",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "w-full flex justify-center mb-5",
                                        children: i.filter(e => "S.Pragatheeshwar" === e.name).map( (e, s) => (0,
                                        t.jsxs)("div", {
                                            className: "flex flex-col items-center group",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "w-20 h-20 rounded-full overflow-hidden border-3 border-cyan-500 group-hover:border-cyan-400 transition-all mb-2",
                                                children: (0,
                                                t.jsx)(h.default, {
                                                    src: e.img,
                                                    alt: e.name,
                                                    width: 80,
                                                    height: 80,
                                                    className: "object-cover w-full h-full",
                                                    onError: e => {
                                                        e.currentTarget.src = "/developers/placeholder.jpg"
                                                    }
                                                })
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors",
                                                children: e.name
                                            })]
                                        }, s))
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "flex flex-wrap justify-center gap-4",
                                        children: i.filter(e => "S.Pragatheeshwar" !== e.name).map( (e, s) => (0,
                                        t.jsxs)("div", {
                                            className: "flex flex-col items-center group",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-cyan-400 transition-all mb-2",
                                                children: (0,
                                                t.jsx)(h.default, {
                                                    src: e.img,
                                                    alt: e.name,
                                                    width: 56,
                                                    height: 56,
                                                    className: "object-cover w-full h-full",
                                                    onError: e => {
                                                        e.currentTarget.src = "/developers/placeholder.jpg"
                                                    }
                                                })
                                            }), (0,
                                            t.jsx)("span", {
                                                className: "text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors",
                                                children: e.name
                                            })]
                                        }, s))
                                    })]
                                }), (0,
                                t.jsx)("div", {
                                    className: "hidden md:flex md:flex-wrap md:justify-center md:gap-5",
                                    children: i.map( (e, s) => (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col items-center group",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "w-20 h-20 rounded-full overflow-hidden border-2 ".concat("S.Pragatheeshwar" === e.name ? "border-cyan-500 border-3" : "border-gray-700", " group-hover:border-cyan-400 transition-all mb-2"),
                                            children: (0,
                                            t.jsx)(h.default, {
                                                src: e.img,
                                                alt: e.name,
                                                width: 80,
                                                height: 80,
                                                className: "object-cover w-full h-full",
                                                onError: e => {
                                                    e.currentTarget.src = "/developers/placeholder.jpg"
                                                }
                                            })
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors",
                                            children: e.name
                                        })]
                                    }, s))
                                })]
                            })]
                        }), (0,
                        t.jsxs)("p", {
                            children: ["\xa9 ", new Date().getFullYear(), " SATHAK  A  THON. All rights reserved."]
                        }), (0,
                        t.jsx)("p", {
                            className: "mt-2 flex items-center justify-center",
                            children: "Mohamed Sathak A J COllege of Engineering"
                        })]
                    })]
                })
            })
        }
        var J = a(2250)
          , $ = a(853)
          , U = a(6835)
          , Q = a(1902)
          , X = a(9271)
          , K = a(9602);
        let ee = r.forwardRef( (e, s) => {
            let {className: a, type: r, ...l} = e;
            return (0,
            t.jsx)("input", {
                type: r,
                className: (0,
                K.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a),
                ref: s,
                ...l
            })
        }
        );
        ee.displayName = "Input";
        let es = (0,
        r.forwardRef)(function(e, s) {
            let {scrollToSection: a} = e
              , [i,n] = (0,
            r.useState)(null)
              , [o,c] = (0,
            r.useState)("")
              , [d,m] = (0,
            r.useState)(null)
              , h = [{
                q: "Who can participate?",
                a: "Any university student from India can participate in this hackathon. We welcome participants from all academic backgrounds and institutions across the country. Whether you're pursuing engineering, sciences, arts, or any other field - if you're passionate about technology and problem-solving, you're eligible to join!",
                category: "Eligibility"
            }, {
                q: "How many members can be in a team?",
                a: "Each team must consist of 4-6 members. We encourage diverse teams with complementary skills and backgrounds to participate together.",
                category: "Teams"
            }, {
                q: "Is there a registration fee?",
                a: "No, the registration fee is free for participant.",
                category: "Registration"
            }, {
                q: "What should we bring?",
                a: "Bring your laptops with sufficient battery life, laptop chargers, valid college student ID cards, WiFi dongles for backup internet connectivity, extension boxes/power strips, and any other equipment you think might be helpful for development. We also recommend bringing a notebook and pen for brainstorming.",
                category: "Logistics"
            }, {
                q: "Will food and accommodation be provided?",
                a: "No, meals and accommodation will not be provided",
                category: "Logistics"
            }, {
                q: "What is the judging criteria?",
                a: "Projects will be judged based on innovation, technical complexity, practicality, presentation, and adherence to the chosen track's theme. Detailed criteria will be shared before the hackathon.",
                category: "Judging"
            }, {
                q: "Can I start working on my project before the hackathon?",
                a: "Yes, You can start",
                category: "Rules"
            }]
              , g = Array.from(new Set(h.map(e => e.category)))
              , p = e => {
                n(i === e ? null : e)
            }
              , u = h.filter(e => {
                let s = e.q.toLowerCase().includes(o.toLowerCase()) || e.a.toLowerCase().includes(o.toLowerCase())
                  , a = !d || e.category === d;
                return s && a
            }
            );
            return (0,
            t.jsx)("section", {
                id: "faq",
                ref: s,
                className: "py-20 px-4 bg-gray-950",
                children: (0,
                t.jsxs)("div", {
                    className: "container mx-auto max-w-4xl",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Frequently Asked Questions"
                        }), (0,
                        t.jsx)("div", {
                            className: "h-1 w-20 bg-white mx-auto mb-6"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg",
                            children: "Find answers to common questions about SATHAK  A  THON Hackathon."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "mb-10",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "relative mb-6",
                            children: [(0,
                            t.jsx)($.A, {
                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
                            }), (0,
                            t.jsx)(ee, {
                                type: "text",
                                placeholder: "Search questions...",
                                value: o,
                                onChange: e => c(e.target.value),
                                className: "pl-10 bg-gray-900 border-gray-800 focus:border-purple-500 text-white"
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex flex-wrap gap-2 justify-center",
                            children: [(0,
                            t.jsx)(l.$, {
                                variant: null === d ? "default" : "outline",
                                size: "sm",
                                onClick: () => m(null),
                                className: null === d ? "bg-purple-600 hover:bg-purple-700" : "border-gray-700 text-gray-400",
                                children: "All"
                            }), g.map(e => (0,
                            t.jsx)(l.$, {
                                variant: d === e ? "default" : "outline",
                                size: "sm",
                                onClick: () => m(e),
                                className: d === e ? "bg-purple-600 hover:bg-purple-700" : "border-gray-700 text-gray-400",
                                children: e
                            }, e))]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "space-y-4",
                        children: u.length > 0 ? u.map( (e, s) => (0,
                        t.jsxs)("div", {
                            className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700",
                            children: [(0,
                            t.jsxs)("button", {
                                className: "w-full px-6 py-4 text-left flex justify-between items-center",
                                onClick: () => p(s),
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0,
                                    t.jsx)(U.A, {
                                        className: "h-5 w-5 text-purple-400 mr-3 flex-shrink-0"
                                    }), (0,
                                    t.jsx)("span", {
                                        className: "font-medium text-white",
                                        children: e.q
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [e.category && (0,
                                    t.jsx)("span", {
                                        className: "text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full mr-3",
                                        children: e.category
                                    }), i === s ? (0,
                                    t.jsx)(Q.A, {
                                        className: "h-5 w-5 text-gray-400"
                                    }) : (0,
                                    t.jsx)(x.A, {
                                        className: "h-5 w-5 text-gray-400"
                                    })]
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "px-6 overflow-hidden transition-all duration-300 ".concat(i === s ? "max-h-96 pb-6" : "max-h-0"),
                                children: (0,
                                t.jsx)("div", {
                                    className: "pl-8 border-l border-gray-800 ml-2.5 text-gray-400",
                                    children: e.a
                                })
                            })]
                        }, s)) : (0,
                        t.jsxs)("div", {
                            className: "text-center py-10",
                            children: [(0,
                            t.jsx)("div", {
                                className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4",
                                children: (0,
                                t.jsx)(X.A, {
                                    className: "h-8 w-8 text-gray-600"
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-medium mb-2",
                                children: "No matching questions found"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-500",
                                children: "Try adjusting your search or filter criteria"
                            })]
                        })
                    })]
                })
            })
        });
        function ea() {
            let e = (0,
            Y.M3)()
              , s = new Date;
            s.setDate(s.getDate() + 30);
            let a = (0,
            r.useRef)(null)
              , l = (0,
            r.useRef)(null)
              , i = (0,
            r.useRef)(null)
              , n = (0,
            r.useRef)(null)
              , o = (0,
            r.useRef)(null)
              , c = (0,
            r.useRef)(null)
              , d = (0,
            r.useRef)(null)
              , x = (0,
            r.useRef)(null)
              , h = e => {
                let s = {
                    about: a,
                    timeline: l,
                    tracks: i,
                    prizes: n,
                    "become-sponsor": o,
                    sponsors: c,
                    faq: d,
                    gallery: x
                }[e];
                s && s.current && window.scrollTo({
                    top: s.current.offsetTop - 80,
                    behavior: "smooth"
                })
            }
            ;
            return console.log("Page component: isLoading =", e),
            (0,
            t.jsxs)("div", {
                className: "bg-black text-white",
                children: [(0,
                t.jsx)(J.y, {
                    sections: [{
                        id: "about",
                        label: "About"
                    }, {
                        id: "timeline",
                        label: "Timeline"
                    }, {
                        id: "tracks",
                        label: "Tracks"
                    }, {
                        id: "prizes",
                        label: "Prizes"
                    }, {
                        id: "become-sponsor",
                        label: "Become a Sponsor"
                    }, {
                        id: "sponsors",
                        label: "Sponsors"
                    }, {
                        id: "faq",
                        label: "FAQ"
                    }, {
                        id: "gallery",
                        label: "Gallery"
                    }],
                    scrollToSection: h
                }), (0,
                t.jsx)(m, {
                    hackathonDate: s,
                    scrollToSection: h
                }), (0,
                t.jsx)(f, {
                    ref: a,
                    scrollToSection: h
                }), (0,
                t.jsx)(v, {
                    ref: l,
                    scrollToSection: h
                }), (0,
                t.jsx)(R, {
                    ref: i,
                    scrollToSection: h
                }), (0,
                t.jsx)(P, {
                    ref: n,
                    scrollToSection: h
                }), (0,
                t.jsx)(q, {
                    ref: o,
                    scrollToSection: h
                }), (0,
                t.jsx)(W, {
                    ref: c,
                    scrollToSection: h
                }), (0,
                t.jsx)(_, {
                    ref: x
                }), (0,
                t.jsx)(es, {
                    ref: d,
                    scrollToSection: h
                }), (0,
                t.jsx)(O, {})]
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [844, 586, 136, 441, 517, 358], () => s(61)),
    _N_E = e.O()
}
]);
