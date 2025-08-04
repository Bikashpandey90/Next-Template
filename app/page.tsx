'use client'

import api from "@/lib/axios";
import type { Metadata } from "next";
import Landing from "@/components/Landing";
import Project from "@/components/Project";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import About from "@/components/about";
import AboutUsComponent from "@/components/about-us";
import Gallery from "@/components/gallery";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Bento from "@/components/bento";
import StickyCursor from '@/common/StickyCursor'
const getMetadata = () => {
  const response = api.get('/')
  return {
    title: "Home",
    description: "This is the home page",
    authors: [],
    keywords: [],
    image: "",
    openGraph: {
      title: "Home",
      description: "This is the home page",
      type: "website",
      url: "",
      images: ""
    }


  } as Metadata;
}


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // const stickyElement = useRef(null);


  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (

    <>
      <main className="" >
        {/* <StickyCursor stickyElement={stickyElement} /> */}

        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Landing />
        <About />
        <Project />

        <Gallery />
        <Skills />
        <Portfolio />
        {/* <Bento/> */}


      </main>

    </>
  );
}
