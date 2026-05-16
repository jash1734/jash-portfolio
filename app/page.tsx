"use client";

import { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import BackgroundGlow from "@/app/components/BackgroundGlow";
import Loader from "@/app/components/Loader";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="bg-[#0f0f0f] text-white overflow-x-hidden">

      <BackgroundGlow />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Contact />

      <Footer />

    </main>
  );
}