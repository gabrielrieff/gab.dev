"use client";

import { About } from "~/components/About";
import { Projects } from "~/components/Projects";
import { Header } from "~/components/Header";
import { Skill } from "~/components/Skill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0F0715] overflow-hidden">
      <Header />

      <About />

      <Skill />

      <Projects />
    </main>
  );
}
