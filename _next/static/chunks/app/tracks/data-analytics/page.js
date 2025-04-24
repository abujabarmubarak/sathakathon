(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[989], {
    3240: (e, a, s) => {
        Promise.resolve().then(s.bind(s, 5110))
    }
    ,
    5110: (e, a, s) => {
        "use strict";
        s.r(a),
        s.d(a, {
            default: () => b
        });
        var t = s(5155)
          , i = s(2115)
          , n = s(2250)
          , r = s(4085)
          , l = s(3651)
          , o = s(7364);
        let c = (0,
        s(7401).A)("ChartNoAxesColumnIncreasing", [["line", {
            x1: "12",
            x2: "12",
            y1: "20",
            y2: "10",
            key: "1vz5eb"
        }], ["line", {
            x1: "18",
            x2: "18",
            y1: "20",
            y2: "4",
            key: "cun8e5"
        }], ["line", {
            x1: "6",
            x2: "6",
            y1: "20",
            y2: "16",
            key: "hq0ia6"
        }]]);
        var m = s(6835)
          , d = s(6967)
          , h = s(2929)
          , x = s(4999)
          , g = s(8173)
          , u = s.n(g)
          , p = s(5565);
        function b() {
            let[e,a] = (0,
            i.useState)("overview");
            return (0,
            t.jsxs)("div", {
                className: "min-h-screen bg-black text-white",
                children: [(0,
                t.jsx)(n.y, {
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
                t.jsxs)("section", {
                    className: "relative pt-20 pb-16 overflow-hidden",
                    children: [(0,
                    t.jsx)(l.B, {}), (0,
                    t.jsx)("div", {
                        className: "container mx-auto px-4 relative z-10",
                        children: (0,
                        t.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            t.jsxs)(u(), {
                                href: "/#tracks",
                                className: "inline-flex items-center text-blue-400 hover:text-blue-300 mb-6",
                                children: [(0,
                                t.jsx)(o.A, {
                                    className: "h-4 w-4 mr-2"
                                }), "Back to All Tracks"]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex items-center mb-6",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "h-16 w-16 rounded-full bg-green-900 flex items-center justify-center mr-6",
                                    children: (0,
                                    t.jsx)(c, {
                                        className: "h-8 w-8 text-green-300"
                                    })
                                }), (0,
                                t.jsx)("h1", {
                                    className: "text-4xl md:text-5xl font-bold",
                                    children: "Data Analytics & Visualization Track"
                                })]
                            }), (0,
                            t.jsx)("p", {
                                className: "text-xl text-gray-300 mb-8",
                                children: "Transform raw data into meaningful insights and compelling visualizations. This track challenges you to create innovative solutions that make data more accessible, understandable, and actionable for diverse users and use cases."
                            })]
                        })
                    })]
                }), (0,
                t.jsx)("section", {
                    className: "bg-gray-950 border-b border-gray-800 sticky top-16 z-20",
                    children: (0,
                    t.jsx)("div", {
                        className: "container mx-auto px-4",
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex overflow-x-auto scrollbar-hide",
                            children: [(0,
                            t.jsx)("button", {
                                className: "px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ".concat("overview" === e ? "border-green-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"),
                                onClick: () => a("overview"),
                                children: "Overview"
                            }), (0,
                            t.jsx)("button", {
                                className: "px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ".concat("problems" === e ? "border-green-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"),
                                onClick: () => a("problems"),
                                children: "Problem Statements"
                            }), (0,
                            t.jsx)("button", {
                                className: "px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ".concat("mentors" === e ? "border-green-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"),
                                onClick: () => a("mentors"),
                                children: "Mentors"
                            })]
                        })
                    })
                }), (0,
                t.jsx)("section", {
                    className: "py-12",
                    children: (0,
                    t.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: ["overview" === e && (0,
                        t.jsx)("div", {
                            className: "max-w-5xl mx-auto px-6 py-12",
                            children: (0,
                            t.jsxs)("div", {
                                className: "bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-800",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex items-center mb-8",
                                    children: [(0,
                                    t.jsx)(c, {
                                        className: "h-10 w-10 text-green-400 mr-4"
                                    }), (0,
                                    t.jsx)("h2", {
                                        className: "text-3xl font-bold",
                                        children: "Data Analytics & Visualization Track"
                                    })]
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-lg text-gray-300 leading-relaxed mb-8",
                                    children: "The Data Analytics & Visualization track challenges participants to develop innovative solutions that transform raw data into meaningful insights and compelling visualizations. From interactive dashboards to predictive analytics tools, this track offers a wide range of problem statements to tackle."
                                }), (0,
                                t.jsxs)("div", {
                                    className: "mt-8",
                                    children: [(0,
                                    t.jsxs)("h3", {
                                        className: "text-2xl font-semibold text-white mb-4 flex items-center",
                                        children: [(0,
                                        t.jsx)(m.A, {
                                            className: "h-6 w-6 mr-2 text-green-400"
                                        }), "Key Focus Areas"]
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-3 text-gray-300 text-lg",
                                        children: [(0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Transform complex data into clear, intuitive visualizations"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Enable data-driven decision-making for diverse users"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Apply analytical techniques to extract meaningful insights"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Ensure user experience & accessibility in design"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt=0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Demonstrate scalability & performance with large datasets"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "mt-10",
                                    children: [(0,
                                    t.jsxs)("h3", {
                                        className: "text-2xl font-semibold text-white mb-4 flex items-center",
                                        children: [(0,
                                        t.jsx)(c, {
                                            className: "h-6 w-6 mr-2 text-green-400"
                                        }), "Technologies"]
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300",
                                        children: ["Python (Pandas, NumPy, Seaborn)", "Matplotlib & Plotly", "D3.js, Chart.js, Power BI", "Tableau & Business Intelligence", "Spark & Dask (Big Data)", "Machine Learning for Analytics"].map( (e, a) => (0,
                                        t.jsx)("div", {
                                            className: "bg-gray-800 p-3 rounded-lg text-center text-sm font-medium",
                                            children: e
                                        }, a))
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "mt-10",
                                    children: [(0,
                                    t.jsxs)("h3", {
                                        className: "text-2xl font-semibold text-white mb-4 flex items-center",
                                        children: [(0,
                                        t.jsx)(h.A, {
                                            className: "h-6 w-6 mr-2 text-green-400"
                                        }), "Submission Requirements"]
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-3 text-gray-300 text-lg",
                                        children: [(0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "A working prototype or demo"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Source code repository with documentation"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "A presentation explaining approach & results"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Description of the problem & significance"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Explanation of analytical techniques used"
                                            })]
                                        }), (0,
                                        t.jsxs)("li", {
                                            className: "flex items-start",
                                            children: [(0,
                                            t.jsx)(d.A, {
                                                className: "h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                            }), (0,
                                            t.jsx)("span", {
                                                children: "Discussion of limitations & future improvements"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "bg-gradient-to-r from-green-700 to-teal-700 p-6 mt-12 rounded-xl text-center shadow-lg",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "text-xl font-bold text-white mb-3",
                                        children: "Ready to Get Started?"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-gray-200 mb-4",
                                        children: "Browse the problem statements, gather your team, and start building your data analytics solution!"
                                    }), (0,
                                    t.jsx)(r.$, {
                                        className: "px-6 py-3 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-lg",
                                        onClick: () => a("problems"),
                                        children: "View Problem Statements"
                                    })]
                                })]
                            })
                        }), "problems" === e && (0,
                        t.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            t.jsx)("h2", {
                                className: "text-3xl font-bold mb-6",
                                children: "Problem Statements"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-8",
                                children: "Choose from the following problem statements or propose your own idea within the Data Analytics & Visualization domain."
                            }), (0,
                            t.jsx)("div", {
                                className: "space-y-8",
                                children: [{
                                    id: 1,
                                    title: "Predicting Patient Readmission in Hospitals",
                                    description: "Develop a predictive model to identify patients at risk of readmission within 30 days post-discharge, incorporating socioeconomic and environmental factors.",
                                    difficulty: "Hard",
                                    tags: ["Healthcare", "Machine Learning", "Predictive Analytics"],
                                    details: "Hospital XYZ observed that 15% of discharged patients return within a month due to complications, with a significant overlap in patients from specific socio-economic backgrounds. This trend highlights the need to consider external factors like access to healthcare, living conditions, and support systems.",
                                    resources: [{
                                        name: "Healthcare Datasets Repository",
                                        url: "#"
                                    }, {
                                        name: "Predictive Modeling in Healthcare Guide",
                                        url: "#"
                                    }, {
                                        name: "Readmission Risk Factors Research",
                                        url: "#"
                                    }]
                                }, {
                                    id: 2,
                                    title: "Real-Time Anomaly Detection in Credit Card Transactions",
                                    description: "Design a system to detect fraudulent credit card transactions in real-time, while considering user behavioral drift over time.",
                                    difficulty: "Hard",
                                    tags: ["Fraud Detection", "Anomaly Detection", "Finance"],
                                    details: "Bank ABC reported $10 million in annual losses due to fraudulent activities. Analysts observed that fraudsters mimic legitimate user behavior over time, gradually altering patterns to evade detection systems.",
                                    resources: [{
                                        name: "Fraud Detection Datasets",
                                        url: "#"
                                    }, {
                                        name: "Anomaly Detection Algorithms",
                                        url: "#"
                                    }, {
                                        name: "Financial Transaction Security Guide",
                                        url: "#"
                                    }]
                                }, {
                                    id: 3,
                                    title: "Optimizing Urban Public Transport Scheduling",
                                    description: "Develop a predictive model to optimize bus schedules by considering passenger demand, traffic patterns, and the carbon footprint of each route.",
                                    difficulty: "Medium",
                                    tags: ["Transport", "Sustainability", "AI Optimization"],
                                    details: "Motorville's City Transport Authority is under pressure to reduce its carbon emissions by 20% within the next 5 years. Inefficient scheduling has resulted in buses running below capacity and higher emissions per passenger.",
                                    resources: [{
                                        name: "Public Transport Optimization Techniques",
                                        url: "#"
                                    }, {
                                        name: "Traffic and Passenger Demand Datasets",
                                        url: "#"
                                    }, {
                                        name: "Carbon Footprint Analysis Tools",
                                        url: "#"
                                    }]
                                }, {
                                    id: 4,
                                    title: "Sentiment Analysis for Movie Box Office Predictions",
                                    description: "Analyze social media sentiment to predict the opening weekend box office revenue of movies and assess their long-term cultural impact.",
                                    difficulty: "Medium",
                                    tags: ["Social Media", "NLP", "Entertainment"],
                                    details: "Studio Alpha wants to understand the dual role of sentiment: predicting financial success and gauging cultural influence (e.g., viral trends, memes).",
                                    resources: [{
                                        name: "Social Media Sentiment Analysis Guide",
                                        url: "#"
                                    }, {
                                        name: "Box Office Prediction Models",
                                        url: "#"
                                    }, {
                                        name: "NLP Techniques for Trend Analysis",
                                        url: "#"
                                    }]
                                }, {
                                    id: 5,
                                    title: "User Behavior Analysis Track",
                                    description: "Develop a solution to identify distinct community groups within the user base based on interaction patterns and interests.",
                                    difficulty: "Medium",
                                    tags: ["User Analytics", "AI Clustering", "Community Engagement"],
                                    details: "Online platforms and digital communities struggle to understand user behavior effectively, leading to generic content delivery and poor engagement. A system that analyzes user interactions can help categorize audience segments, enabling better community management and personalized experiences.",
                                    resources: [{
                                        name: "User Interaction Datasets",
                                        url: "#"
                                    }, {
                                        name: "Clustering Algorithms for Behavior Analysis",
                                        url: "#"
                                    }, {
                                        name: "Community Engagement Strategies",
                                        url: "#"
                                    }]
                                }].map(e => (0,
                                t.jsx)("div", {
                                    className: "bg-gray-900 rounded-xl border border-gray-800 overflow-hidden",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "p-6",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "flex justify-between items-start mb-4",
                                            children: (0,
                                            t.jsx)("h3", {
                                                className: "text-xl font-bold",
                                                children: e.title
                                            })
                                        }), (0,
                                        t.jsx)("h4", {
                                            className: "text-lg font-medium mb-2",
                                            children: "Problem Statement:"
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-gray-300 mb-4",
                                            children: e.description
                                        }), (0,
                                        t.jsx)("div", {
                                            className: "flex flex-wrap gap-2 mb-4",
                                            children: e.tags.map( (e, a) => (0,
                                            t.jsx)("span", {
                                                className: "bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-300",
                                                children: e
                                            }, a))
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "mt-6",
                                            children: [(0,
                                            t.jsx)("h4", {
                                                className: "text-lg font-medium mb-2",
                                                children: "Study Case:"
                                            }), (0,
                                            t.jsx)("p", {
                                                className: "text-gray-400",
                                                children: e.details
                                            })]
                                        })]
                                    })
                                }, e.id))
                            })]
                        }), "mentors" === e && (0,
                        t.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [(0,
                            t.jsx)("h2", {
                                className: "text-3xl font-bold mb-6",
                                children: "Mentors"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-gray-400 mb-8",
                                children: "Our Data Analytics & Visualization track mentors are industry experts and researchers who will provide guidance and support throughout the hackathon."
                            }), (0,
                            t.jsx)("div", {
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
                                    title: "III year CS 'A'",
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
                                t.jsxs)("div", {
                                    className: "bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "flex-shrink-0",
                                        children: (0,
                                        t.jsx)("div", {
                                            className: "w-24 h-24 rounded-full overflow-hidden bg-gray-800",
                                            children: (0,
                                            t.jsx)(p.default, {
                                                src: e.image || "/placeholder.svg",
                                                alt: e.name,
                                                width: 96,
                                                height: 96,
                                                className: "object-cover"
                                            })
                                        })
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0,
                                        t.jsx)("h3", {
                                            className: "text-xl font-bold mb-1",
                                            children: e.name
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-green-400 mb-2",
                                            children: e.title
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-gray-400 text-sm mb-3",
                                            children: e.bio
                                        }), (0,
                                        t.jsxs)("p", {
                                            className: "text-gray-500 text-xs mb-3",
                                            children: ["Domain: ", e.domain]
                                        }), (0,
                                        t.jsxs)("a", {
                                            href: e.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors",
                                            children: [(0,
                                            t.jsx)(x.A, {
                                                className: "h-4 w-4 mr-2"
                                            }), "Connect on LinkedIn"]
                                        })]
                                    })]
                                }, a))
                            }), (0,
                            t.jsx)("div", {
                                className: "bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "flex items-start",
                                    children: [(0,
                                    t.jsx)(m.A, {
                                        className: "h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0"
                                    }), (0,
                                    t.jsxs)("div", {
                                        children: [(0,
                                        t.jsx)("h3", {
                                            className: "text-xl font-bold mb-4",
                                            children: "Need Help?"
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "mb-4 text-gray-300",
                                            children: "Our mentors are available throughout the hackathon to provide guidance and support. Don't hesitate to reach out!"
                                        }), (0,
                                        t.jsx)(r.$, {
                                            className: "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700",
                                            children: "Schedule Mentor Session"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            })
        }
    }
    ,
    7364: (e, a, s) => {
        "use strict";
        s.d(a, {
            A: () => t
        });
        let t = (0,
        s(7401).A)("ArrowLeft", [["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }], ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]])
    }
    ,
    2929: (e, a, s) => {
        "use strict";
        s.d(a, {
            A: () => t
        });
        let t = (0,
        s(7401).A)("Bookmark", [["path", {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }]])
    }
    ,
    6967: (e, a, s) => {
        "use strict";
        s.d(a, {
            A: () => t
        });
        let t = (0,
        s(7401).A)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
    }
    ,
    6835: (e, a, s) => {
        "use strict";
        s.d(a, {
            A: () => t
        });
        let t = (0,
        s(7401).A)("CircleHelp", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }], ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]])
    }
    ,
    4999: (e, a, s) => {
        "use strict";
        s.d(a, {
            A: () => t
        });
        let t = (0,
        s(7401).A)("Linkedin", [["path", {
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
}, e => {
    var a = a => e(e.s = a);
    e.O(0, [844, 136, 441, 517, 358], () => a(3240)),
    _N_E = e.O()
}
]);
