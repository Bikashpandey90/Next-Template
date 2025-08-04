"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Facebook, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import DotExpandButton from "@/common/DotExpandButton"

export default function index() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1.25)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !imageRef.current) return

            const section = sectionRef.current
            const rect = section.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Calculate the progress of the section through the viewport
            // When section is entering from bottom: progress = 0
            // When section is centered: progress = 0.5
            // When section is exiting from top: progress = 1
            const sectionTop = rect.top
            const sectionHeight = rect.height

            // Calculate progress based on section position
            let progress = 0

            if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
                // Section is visible
                if (sectionTop <= windowHeight / 2) {
                    // Section has passed the middle of viewport
                    progress = Math.min(1, (windowHeight / 2 - sectionTop) / (sectionHeight / 2))
                } else {
                    // Section is entering viewport
                    progress = Math.max(0, (windowHeight - sectionTop) / (windowHeight / 2))
                }
            }

            // Smooth easing function for more natural animation
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
            const easedProgress = easeOutCubic(Math.max(0, Math.min(1, progress)))

            // Scale from 1.25 to 1.0 based on scroll progress
            const newScale = 1.25 - easedProgress * 0.25
            setScale(newScale)
        }

        // Add scroll listener with throttling for better performance
        let ticking = false
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", throttledScroll, { passive: true })
        handleScroll() // Initial call

        return () => {
            window.removeEventListener("scroll", throttledScroll)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* Image Section with Parallax Effect */}
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                        <div
                            ref={imageRef}
                            className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-square transition-transform duration-300 ease-out"
                            style={{
                                transform: `scale(${scale})`,
                                transformOrigin: "center center",
                            }}
                        >
                            <Image
                                src="/images/portfolio.avif"
                                alt="Professional portrait"
                                fill
                                className="object-cover"
                                sizes="(max-width: 728px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className=" space-y-6 justify-self-center lg:space-y-8">
                        <Badge
                            variant="secondary"
                            className="bg-neutral-300  text-neutral-900 hover:bg-neutral-300 border-neutral-300 text-sm font-medium px-4 py-2"
                        >
                            {/* <span className="mr-2">🚀</span> */}
                            <Globe className="mr-2 text-neutral-600" />
                            Website Expert
                        </Badge>

                        <div className="space-y-4 ">
                            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-medium text-gray-900 leading-tight">
                                Expertise in{" "}
                                <span className="block">
                                    Framer Templates
                                    <span className="text-red-500">.</span>
                                </span>
                            </h1>

                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Bringing Your Ideas to Life®</h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                            As expert in Framer, we specialize in turning your ideas into functional websites. Whether it's a custom
                            template, I ensure every project meets your vision and exceeds expectations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">

                            <DotExpandButton>View Portfolio</DotExpandButton>

                            <div className="flex-grid items-center  gap-4">
                                <div className="flex items-center justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-neutral-500 text-neutral-500" />
                                    ))}
                                </div>
                                <span className="text-gray-600 font-medium">299+ People Rated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
