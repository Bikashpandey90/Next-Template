"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

export default function VoxelScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const stepsRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)
    const countContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const lenis = new Lenis()
        lenis.on("scroll", ScrollTrigger.update)
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)

        const stickySection = stepsRef.current
        const stickyHeight = window.innerHeight * 7
        const cards = cardsRef.current?.querySelectorAll(".card")
        const countContainer = countContainerRef.current
        const totalCards = cards?.length || 0

        if (stickySection && cards && countContainer) {
            ScrollTrigger.create({
                trigger: stickySection,
                start: "top top",
                end: `+=${stickyHeight}px`,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    positionCards(self.progress)
                },
            })

            const getRadius = () => {
                return window.innerWidth < 900 ? window.innerWidth * 7.5 : window.innerWidth * 2.5
            }

            const arcAngle = Math.PI * 0.4
            const startAngle = Math.PI / 2 - arcAngle / 2

            function positionCards(progress = 0) {
                const radius = getRadius()
                const totalTravel = 1 + totalCards / 7.5
                const adjustedProgress = (progress * totalTravel - 1) * 0.75

                cards.forEach((card, i) => {
                    const normalizedProgress = (totalCards - 1 - i) / totalCards
                    const cardProgress = normalizedProgress + adjustedProgress
                    const angle = startAngle + arcAngle * cardProgress

                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    const rotation = (angle - Math.PI / 2) * (180 / Math.PI)

                    gsap.set(card, {
                        x: x,
                        y: -y + radius,
                        rotation: -rotation,
                        transformOrigin: "center center",
                    })
                })
            }

            positionCards(0)

            let currentCardIndex = 0

            const options = {
                root: null,
                rootMargin: "0% 0%",
                threshold: 0.5,
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardIndex = Array.from(cards).indexOf(entry.target as Element)
                        currentCardIndex = cardIndex
                        console.log(currentCardIndex)

                        const targetY = 150 - currentCardIndex * 150
                        gsap.to(countContainer, {
                            y: targetY,
                            duration: 0.3,
                            ease: "power1.out",
                            overwrite: true,
                        })
                    }
                })
            }, options)

            cards.forEach((card) => {
                observer.observe(card)
            })

            const handleResize = () => positionCards(0)
            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize", handleResize)
                observer.disconnect()
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
                lenis.destroy()
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="w-screen bg-neutral-950 text-white"
            style={{
                height: "900vh",
                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                scrollbarWidth: "none"
            }}
        >
            {/* Navigation */}

            {/* <nav
                className="absolute top-0 left-0 w-screen z-20 flex justify-between items-center"
                style={{ padding: "1.5em" }}
            >
                <p
                    id="logo"
                    className="uppercase font-black"
                    style={{
                        fontFamily: '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                >
                    Voxel
                </p>
                <button
                    className="border-none outline-none font-medium text-black bg-white"
                    style={{ padding: "0.75em 1em", borderRadius: "0.25em" }}
                >
                    Download Now
                </button>
            </nav> */}

            {/* Intro Section */}
            <section
                className="relative w-screen  overflow-hidden"
                // h-screen
                style={{
                    height: '50vh',
                    background: '',
                    backgroundSize: "cover",
                }}
            />

            {/* Steps Section */}
            <section ref={stepsRef} className="steps relative w-screen h-screen overflow-hidden">
                {/* Step Counter */}
                <div className="step-counter absolute flex flex-col" style={{ margin: "2em" }}>
                    <div
                        className="counter-title relative w-full overflow-hidden"
                        style={{
                            width: "1200px",
                            height: "150px",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}
                    >
                        <h1
                            className="w-full relative text-white uppercase font-black"
                            style={{
                                fontFamily: '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                fontSize: "150px",
                                lineHeight: "1",
                                letterSpacing: "-0.04em",
                                willChange: "transform",
                            }}
                        >
                            steps
                        </h1>
                    </div>
                    <div
                        className="count relative overflow-hidden"
                        style={{
                            top: "-10px",
                            width: "1200px",
                            height: "150px",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}
                    >
                        <div
                            ref={countContainerRef}
                            className="count-container relative"
                            style={{
                                transform: "translateY(150px)",
                                willChange: "transform",
                            }}
                        >
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                01
                            </h1>
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                02
                            </h1>
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                03
                            </h1>
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                04
                            </h1>
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                05
                            </h1>
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                06
                            </h1>
                            <h1
                                className="w-full relative text-white uppercase font-black"
                                style={{
                                    fontFamily:
                                        '"PP Monument Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "150px",
                                    lineHeight: "1",
                                    letterSpacing: "-0.04em",
                                    willChange: "transform",
                                }}
                            >
                                07
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div
                    ref={cardsRef}
                    className="cards absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        top: "25%",
                        width: "150vw",
                        height: "600px",
                        willChange: "transform",
                    }}
                >
                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-1.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                Effortlessly import your 3D models and assets into our intuitive design tool, ensuring that projects are
                                set up quickly.
                            </p>
                        </div>
                    </div>

                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-2.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                Take full control of your designs with our advanced customization tools. Adjust lighting and geometry
                                with precision.
                            </p>
                        </div>
                    </div>

                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-3.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                Bring your designs to life with our seamless animation presets and tools, allowing you to create dynamic
                                interactions.
                            </p>
                        </div>
                    </div>

                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-4.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                Collaborate in real time with your team, sharing ideas and updates instantly to streamline the creative
                                process.
                            </p>
                        </div>
                    </div>

                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-5.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                When your design is complete, export it in various formats optimized for production or further editing.
                                .
                            </p>
                        </div>
                    </div>

                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-4.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                Collaborate in real time with your team, sharing ideas and updates instantly to streamline the creative
                                process.
                            </p>
                        </div>
                    </div>


                    <div
                        className="card absolute left-1/2 top-1/2 flex flex-col gap-4"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <div className="card-img flex-1 bg-white rounded-lg overflow-hidden">
                            <img src={"/images/card-4.jpg"} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="card-content w-full h-15">
                            <p
                                className="text-left text-white font-medium"
                                style={{
                                    fontFamily:
                                        '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: "16px",
                                    lineHeight: "1.25",
                                }}
                            >
                                Collaborate in real time with your team, sharing ideas and updates instantly to streamline the creative
                                process.
                            </p>
                        </div>
                    </div>

                    {/* <div
                        className="card empty absolute left-1/2 top-1/2 opacity-0"
                        style={{
                            width: "500px",
                            height: "550px",
                            transformOrigin: "center center",
                            marginLeft: "-250px",
                            willChange: "transform",
                        }}
                    >
                        <p>EMPTY</p>
                    </div> */}
                </div>
            </section>

            {/* Outro Section */}
            <section
                className="outro relative w-screen h-screen overflow-hidden flex justify-center items-center"
                style={{
                    background: "linear-gradient(180deg, #171717, #364549)",
                    backgroundSize: "200% 200%",
                }}
            >
                <p
                    className="text-center text-white font-normal"
                    style={{
                        width: "75%",
                        fontSize: "52px",
                        lineHeight: "1.125",
                    }}
                >
                    Our 3D design tool is built to enhance your creative workflow,{" "}
                    <span style={{ color: "#75e1ff" }}>providing an all-in-one solution</span> for crafting stunning visuals and
                    prototypes.
                </p>
            </section>

            {/* Global Styles */}
            <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }

        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }

        .lenis.lenis-stopped {
          overflow: clip;
        }

        .lenis.lenis-smooth iframe {
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .counter-title {
            height: 30px !important;
          }

          .counter-title h1 {
            font-size: 30px !important;
          }

          .count {
            top: 0px !important;
            left: -10px !important;
          }

          .cards {
            top: 27.5% !important;
          }

          .card {
            width: 375px !important;
            height: 500px !important;
          }
        }
      `}</style>
        </div>
    )
}
