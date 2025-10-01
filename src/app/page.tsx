"use client";
import React, { useRef } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Enhance from "./components/Enhance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Page: React.FC = () => {
  const landingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const enhanceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let element: HTMLDivElement | null = null;
    let offset = 70;


    if (section === "Home") {
      element = landingRef.current
      offset = 70; 
    };
    if (section === "Skills") {
      element = skillsRef.current
      offset = 115; 
    };
    if (section === "Experience") {
      element = enhanceRef.current
      offset = 350; 
    };
    if (section === "Contact" || section==='hire') {
      element = contactRef.current 
      offset = -120;
    };

    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header onNavClick={scrollToSection} />
      <div className="flex flex-col w-full">
        <div ref={landingRef} className="min-h-screen w-full">
          <Landing onNavClick={scrollToSection}/>
        </div>
        <div ref={skillsRef} className="min-h-screen w-full">
          <Skills />
        </div>
        <div ref={enhanceRef} className="w-full min-h-screen">
          <Enhance />
        </div>
        <div ref={contactRef} className="min-h-screen w-full">
          <Contact />
        </div>
        <div className="mb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;