(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[292], {
    7357: (e, a, t) => {
        Promise.resolve().then(t.bind(t, 4507))
    }
    ,
    4507: (e, a, t) => {
        "use strict";
        t.r(a),
        t.d(a, {
            default: () => w
        });
        var s = t(5155)
          , i = t(2115)
          , r = t(2250)
          , n = t(4085)
          , l = t(3651)
          , c = t(7364)
          , o = t(6122);
        let d = (0,
        t(7401).A)("Link", [["path", {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }], ["path", {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }]]);
        var m = t(853)
          , h = t(6336)
          , x = t(4836)
          , p = t(6967)
          , b = t(5160)
          , u = t(4999)
          , g = t(8173)
          , y = t.n(g)
          , j = t(5565);
        function w() {
            let[e,a] = (0,
            i.useState)("overview");
            return (0,
            s.jsxs)("div", {
                className: "min-h-screen bg-black text-white",
                children: [(0,
                s.jsx)(r.y, {
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
                    scrollToSection: e => {
                        window.location.href = "/#".concat(e)
                    }
                }), (0,
                s.jsxs)("section", {
                    className: "relative pt-20 pb-16 overflow-hidden",
                    children: [(0,
                    s.jsx)(l.B, {}), (0,
                    s.jsx)("div", {
                        className: "container mx-auto px-4 relative z-10",
                        children: (0,
                        s.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            s.jsxs)(y(), {
                                href: "/#tracks",
                                className: "inline-flex items-center text-blue-400 hover:text-blue-300 mb-6",
                                children: [(0,
                                s.jsx)(c.A, {
                                    className: "h-4 w-4 mr-2"
                                }), "Back to All Tracks"]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-center mb-6",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "h-16 w-16 rounded-full bg-blue-900 flex items-center justify-center mr-6",
                                    children: (0,
                                    s.jsx)(o.A, {
                                        className: "h-8 w-8 text-blue-300"
                                    })
                                }), (0,
                                s.jsx)("h1", {
                                    className: "text-4xl md:text-5xl font-bold",
                                    children: "Web3 & Blockchain Track"
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-xl text-gray-300 mb-8",
                                children: "Build decentralized applications, smart contracts, or blockchain-based solutions that push the boundaries of Web3. This track challenges you to create innovative solutions that leverage blockchain technology to address real-world problems across finance, identity, governance, and more."
                            })]
                        })
                    })]
                }), (0,
                s.jsx)("section", {
                    className: "bg-gray-950 border-b border-gray-800 sticky top-16 z-20",
                    children: (0,
                    s.jsx)("div", {
                        className: "container mx-auto px-4",
                        children: (0,
                        s.jsxs)("div", {
                            className: "flex overflow-x-auto scrollbar-hide",
                            children: [(0,
                            s.jsx)("button", {
                                className: "px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ".concat("overview" === e ? "border-blue-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"),
                                onClick: () => a("overview"),
                                children: "Overview"
                            }), (0,
                            s.jsx)("button", {
                                className: "px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ".concat("problems" === e ? "border-blue-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"),
                                onClick: () => a("problems"),
                                children: "Problem Statements"
                            }), (0,
                            s.jsx)("button", {
                                className: "px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ".concat("mentors" === e ? "border-blue-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"),
                                onClick: () => a("mentors"),
                                children: "Mentors"
                            })]
                        })
                    })
                }), (0,
                s.jsx)("section", {
                    className: "py-12",
                    children: (0,
                    s.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: ["overview" === e && (0,
                        s.jsxs)("div", {
                            className: "max-w-5xl mx-auto px-6 py-12",
                            children: [(0,
                            s.jsxs)("h2", {
                                className: "text-4xl font-extrabold text-white text-center mb-8 flex items-center justify-center",
                                children: [(0,
                                s.jsx)(d, {
                                    className: "h-10 w-10 mr-3 text-blue-400"
                                }), "Web3 & Blockchain Track", (0,
                                s.jsx)("span", {
                                    className: "block text-lg font-medium text-gray-400 mt-2",
                                    children: "Exploring Decentralized Innovation"
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-800",
                                children: [(0,
                                s.jsx)("p", {
                                    className: "text-lg text-gray-300 leading-relaxed",
                                    children: "The Web3 & Blockchain track challenges participants to develop innovative solutions that leverage blockchain technology, smart contracts, and decentralized systems to solve real-world problems. From decentralized finance (DeFi) to digital identity, from governance systems to supply chain transparency, this track offers a diverse range of problem statements to tackle."
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-8",
                                    children: [(0,
                                    s.jsxs)("h3", {
                                        className: "text-2xl font-semibold text-white mb-4 flex items-center",
                                        children: [(0,
                                        s.jsx)(m.A, {
                                            className: "h-6 w-6 mr-2 text-blue-400"
                                        }), "What We're Looking For"]
                                    }), (0,
                                    s.jsxs)("ul", {
                                        className: "space-y-3 text-gray-300 text-lg",
                                        children: [(0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(h.A, {
                                                className: "h-5 w-5 mr-2 text-green-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Demonstrate innovative applications of blockchain technology"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(h.A, {
                                                className: "h-5 w-5 mr-2 text-green-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Address real-world problems with practical decentralized solutions"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(h.A, {
                                                className: "h-5 w-5 mr-2 text-green-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Consider security, scalability, and user experience"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(h.A, {
                                                className: "h-5 w-5 mr-2 text-green-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Balance technical sophistication with usability"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(h.A, {
                                                className: "h-5 w-5 mr-2 text-green-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Show potential for adoption and real-world implementation"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-10",
                                    children: [(0,
                                    s.jsxs)("h3", {
                                        className: "text-2xl font-semibold text-white mb-4 flex items-center",
                                        children: [(0,
                                        s.jsx)(d, {
                                            className: "h-6 w-6 mr-2 text-yellow-400"
                                        }), "Technologies"]
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300",
                                        children: ["Ethereum, Solana, Polygon, or other smart contract platforms", "Development frameworks (Hardhat, Truffle, Anchor)", "Web3 libraries (ethers.js, web3.js)", "IPFS / Arweave for decentralized storage", "The Graph for blockchain indexing"].map( (e, a) => (0,
                                        s.jsx)("div", {
                                            className: "bg-gray-800 p-3 rounded-lg text-center text-sm font-medium",
                                            children: e
                                        }, a))
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-10",
                                    children: [(0,
                                    s.jsxs)("h3", {
                                        className: "text-2xl font-semibold text-white mb-4 flex items-center",
                                        children: [(0,
                                        s.jsx)(x.A, {
                                            className: "h-6 w-6 mr-2 text-blue-400"
                                        }), "Submission Requirements"]
                                    }), (0,
                                    s.jsxs)("ul", {
                                        className: "space-y-3 text-gray-300 text-lg",
                                        children: [(0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(p.A, {
                                                className: "h-5 w-5 mr-2 text-purple-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "A working prototype or demo"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(p.A, {
                                                className: "h-5 w-5 mr-2 text-purple-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Source code repository with documentation"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(p.A, {
                                                className: "h-5 w-5 mr-2 text-purple-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Smart contract code (if applicable)"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(p.A, {
                                                className: "h-5 w-5 mr-2 text-purple-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "A brief presentation explaining the approach and results"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(p.A, {
                                                className: "h-5 w-5 mr-2 text-purple-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Description of the problem being solved and its significance"
                                            })]
                                        }), (0,
                                        s.jsxs)("li", {
                                            className: "flex items-center",
                                            children: [(0,
                                            s.jsx)(p.A, {
                                                className: "h-5 w-5 mr-2 text-purple-400"
                                            }), (0,
                                            s.jsx)("span", {
                                                children: "Discussion of security considerations and potential improvements"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "bg-gradient-to-r from-blue-700 to-indigo-700 p-6 mt-12 rounded-xl text-center shadow-lg",
                                    children: [(0,
                                    s.jsxs)("h3", {
                                        className: "text-xl font-bold text-white mb-3 flex items-center justify-center",
                                        children: [(0,
                                        s.jsx)(b.A, {
                                            className: "h-5 w-5 mr-2"
                                        }), "Ready to Get Started?"]
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-gray-200 mb-4",
                                        children: "Browse the problem statements, gather your team, and start building your Web3 solution!"
                                    }), (0,
                                    s.jsx)(n.$, {
                                        className: "px-6 py-3 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-lg",
                                        onClick: () => a("problems"),
                                        children: "View Problem Statements"
                                    })]
                                })]
                            })]
                        }), "problems" === e && (0,
                        s.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-3xl font-bold mb-6",
                                children: "Problem Statements"
                            }), (0,
                            s.jsx)("p", {
                                className: "text-gray-400 mb-8",
                                children: "Choose from the following problem statements or propose your own idea within the Web3 & Blockchain domain."
                            }), (0,
                            s.jsx)("div", {
                                className: "space-y-8",
                                children: [{
                                    id: 1,
                                    title: "Decentralized Uber: Blockchain-Based Ride-Sharing",
                                    description: "Develop a decentralized ride-sharing platform that eliminates intermediaries, reduces commission fees, ensures fair driver earnings, and enhances rider privacy.",
                                    difficulty: "Hard",
                                    tags: ["Ride-Sharing", "Blockchain", "Smart Contracts"],
                                    details: "The system should leverage blockchain and smart contracts for trustless transactions, dynamic pricing, and decentralized governance."
                                }, {
                                    id: 2,
                                    title: "Decentralized Supply Chain Tracking",
                                    description: "Design a blockchain-based supply chain tracking system that ensures transparency, traceability, and authenticity of products from origin to consumer.",
                                    difficulty: "Medium",
                                    tags: ["Supply Chain", "Blockchain", "Traceability"],
                                    details: "Build a solution that provides real-time tracking, automated compliance checks, and verifiable product authenticity."
                                }, {
                                    id: 3,
                                    title: "Blockchain-Based DeFi Microloans for Financial Inclusion",
                                    description: "Develop a blockchain-based DeFi microloan platform that provides borderless, collateral-free, and low-interest loans through smart contracts and community-based trust mechanisms.",
                                    difficulty: "Medium",
                                    tags: ["DeFi", "Microloans", "Financial Inclusion"],
                                    details: "The system should use on-chain reputation, social staking (community endorsements), and AI-based risk assessment to determine borrower credibility."
                                }, {
                                    id: 4,
                                    title: "Blockchain-Based Decentralized Copyright Protection",
                                    description: "Build a blockchain-based copyright registry that ensures immutable proof of ownership and automatic royalty payments.",
                                    difficulty: "Medium",
                                    tags: ["Copyright", "NFTs", "Intellectual Property"],
                                    details: "The system should allow creators to mint digital assets on-chain and receive royalties via smart contracts whenever their work is sold or streamed."
                                }, {
                                    id: 5,
                                    title: "Secure Blockchain-Based E-Voting System",
                                    description: "Develop a blockchain-based voting system that enhances security, transparency, and trust while maintaining voter anonymity.",
                                    difficulty: "Hard",
                                    tags: ["E-Voting", "Blockchain", "Security"],
                                    details: "The system should ensure tamper-proof, verifiable elections while preventing fraud and improving accessibility."
                                }].map(e => (0,
                                s.jsx)("div", {
                                    className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden",
                                    children: (0,
                                    s.jsxs)("div", {
                                        className: "p-6",
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: "flex justify-between items-start mb-4",
                                            children: (0,
                                            s.jsx)("h3", {
                                                className: "text-xl font-bold",
                                                children: e.title
                                            })
                                        }), (0,
                                        s.jsx)("h4", {
                                            className: "text-lg font-medium mb-2",
                                            children: "Problem Statement:"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-gray-300 mb-4",
                                            children: e.description
                                        }), (0,
                                        s.jsx)("div", {
                                            className: "flex flex-wrap gap-2 mb-4",
                                            children: e.tags.map( (e, a) => (0,
                                            s.jsx)("span", {
                                                className: "bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-300",
                                                children: e
                                            }, a))
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: "mt-6",
                                            children: [(0,
                                            s.jsx)("h4", {
                                                className: "text-lg font-medium mb-2",
                                                children: "Study Case:"
                                            }), (0,
                                            s.jsx)("p", {
                                                className: "text-gray-400",
                                                children: e.details
                                            })]
                                        })]
                                    })
                                }, e.id))
                            })]
                        }), "mentors" === e && (0,
                        s.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-3xl font-bold mb-6",
                                children: "Mentors"
                            }), (0,
                            s.jsx)("p", {
                                className: "text-gray-400 mb-8",
                                children: "Our Web3 & Blockchain track mentors are industry experts and researchers who will provide guidance and support throughout the hackathon."
                            }), (0,
                            s.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",
                                children: [{
                                    name: "Kishore M",
                                    title: "III year AD 'A'",
                                    bio: "Smart India Hackathon 2024 Winner",
                                    domain: "Data Analytics",
                                    image: "/images/mentors/kishore.png",
                                    linkedin: "https://www.linkedin.com/in/kishore-m-13a7402a7/"
                                }, {
                                    name: "Mukundh A P",
                                    title: "III year AD 'B'",
                                    bio: "Smart India Hackathon 2024 Winner",
                                    domain: "Data Analytics",
                                    image: "/images/mentors/mukundh.png",
                                    linkedin: "https://www.linkedin.com/in/mukundh-a-p/"
                                }, {
                                    name: "Cletus Rajkumar",
                                    title: "III year CS 'A'",
                                    bio: "Smart India Hackathon Finalist",
                                    domain: "Machine Learning",
                                    image: "/images/mentors/cletus.png",
                                    linkedin: "https://www.linkedin.com/in/cletus-rajkumar-40513525a/"
                                }, {
                                    name: "K. Jaiadhitya",
                                    title: "III year CS 'A'",
                                    bio: "UmagineTN Third Prize Winner",
                                    domain: "Machine Learning",
                                    image: "/images/mentors/jaiadhi.png",
                                    linkedin: "https://www.linkedin.com/in/jaiadhitya-k/"
                                }, {
                                    name: "Gowtham S",
                                    title: "",
                                    bio: "Smart India Hackathon Finalist",
                                    domain: "Cyber Security",
                                    image: "/images/mentors/gowtham.png",
                                    linkedin: "https://www.linkedin.com/in/gowtham-srinivasan-59a909163/"
                                }, {
                                    name: "Mugundhan Y",
                                    title: "III year AD 'B'",
                                    bio: "Smart India Hackathon 2024 Winner",
                                    domain: "Cyber Security",
                                    image: "/images/mentors/mugundhan.png",
                                    linkedin: "https://www.linkedin.com/in/mugundhan-y-0ab2772a7/"
                                }, {
                                    name: "Devesh S",
                                    title: "III year CS 'A'",
                                    bio: "UmagineTN Third Prize Winner",
                                    domain: "Blockchain & Web3",
                                    image: "/images/mentors/devesh.png",
                                    linkedin: "https://www.linkedin.com/in/devesh-s-3048b22a7/"
                                }, {
                                    name: "Praveen Kumar R",
                                    title: "III year AD 'B'",
                                    bio: "Smart India Hackathon 2024 Winner",
                                    domain: "Blockchain & Web3",
                                    image: "/images/mentors/praveen.png",
                                    linkedin: "https://www.linkedin.com/in/praveen-kumar-80900a339/"
                                }].map( (e, a) => (0,
                                s.jsxs)("div", {
                                    className: "bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "flex-shrink-0",
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "w-24 h-24 rounded-full overflow-hidden bg-gray-800",
                                            children: (0,
                                            s.jsx)(j.default, {
                                                src: e.image || "/placeholder.svg",
                                                alt: e.name,
                                                width: 96,
                                                height: 96,
                                                className: "object-cover"
                                            })
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-xl font-bold mb-1",
                                            children: e.name
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-blue-400 mb-3",
                                            children: e.title
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-gray-400 text-sm mb-3",
                                            children: e.bio
                                        }), (0,
                                        s.jsxs)("a", {
                                            href: e.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors",
                                            "aria-label": "Connect with ".concat(e.name, " on LinkedIn"),
                                            children: [(0,
                                            s.jsx)(u.A, {
                                                className: "h-5 w-5 mr-2"
                                            }), (0,
                                            s.jsx)("span", {
                                                className: "text-sm",
                                                children: "Connect on LinkedIn"
                                            })]
                                        })]
                                    })]
                                }, a))
                            }), (0,
                            s.jsxs)("div", {
                                className: "bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8",
                                children: [(0,
                                s.jsxs)("h3", {
                                    className: "text-xl font-bold mb-4 flex items-center",
                                    children: [(0,
                                    s.jsx)(b.A, {
                                        className: "h-5 w-5 mr-2 text-yellow-400"
                                    }), "Need Help?"]
                                }), (0,
                                s.jsx)("p", {
                                    className: "mb-4",
                                    children: "Our mentors are available throughout the hackathon to provide guidance and support. Don't hesitate to reach out!"
                                }), (0,
                                s.jsx)(n.$, {
                                    className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                                    children: "Schedule Mentor Session"
                                })]
                            })]
                        })]
                    })
                })]
            })
        }
    }
    ,
    7364: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("ArrowLeft", [["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }], ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]])
    }
    ,
    6967: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
    }
    ,
    6336: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("CircleCheck", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]])
    }
    ,
    4836: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("ClipboardList", [["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }], ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }], ["path", {
            d: "M12 11h4",
            key: "1jrz19"
        }], ["path", {
            d: "M12 16h4",
            key: "n85exb"
        }], ["path", {
            d: "M8 11h.01",
            key: "1dfujw"
        }], ["path", {
            d: "M8 16h.01",
            key: "18s6g9"
        }]])
    }
    ,
    6122: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("Globe", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }], ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]])
    }
    ,
    5160: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("Lightbulb", [["path", {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }], ["path", {
            d: "M9 18h6",
            key: "x1upvd"
        }], ["path", {
            d: "M10 22h4",
            key: "ceow96"
        }]])
    }
    ,
    4999: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("Linkedin", [["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }], ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }], ["circle", {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }]])
    }
    ,
    853: (e, a, t) => {
        "use strict";
        t.d(a, {
            A: () => s
        });
        let s = (0,
        t(7401).A)("Search", [["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }], ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]])
    }
}, e => {
    var a = a => e(e.s = a);
    e.O(0, [844, 136, 441, 517, 358], () => a(7357)),
    _N_E = e.O()
}
]);
