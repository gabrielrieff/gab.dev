"use client";

import { About } from "~/components/About";
import { Projects } from "~/components/Projects";
import { Header } from "~/components/Header";
import { Skill } from "~/components/Skill";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".cards", {
      x: 0,
      transition: ".5s",
      opacity: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top 350px",
        end: "bottom 380px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".about");
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0F0715] overflow-hidden">
      <Header />

      <About />

      <Skill />

      <Projects />
    </main>
  );
}
