
import React from "react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => (
  <section className="relative isolate pt-12 pb-20 flex flex-col md:flex-row items-center justify-center bg-background overflow-x-hidden">
    <div className="w-full md:w-3/5 flex flex-col items-start px-6 z-10">
      <h1 className="text-[clamp(2.4rem,8vw,4.5rem)] font-extrabold leading-[1.1] text-left bg-gradient-to-r from-white via-blue-400 to-pink-500 bg-clip-text text-transparent drop-shadow">
        <span>Code Like It's Music.</span>
        <br />
        <span>Think Like It's Art.</span>
        <br />
        <span>
          <span className="text-pink-500">Build Like It's </span>
          <span className="text-blue-400">War.</span>
        </span>
      </h1>
      <p className="mt-8 max-w-xl text-lg md:text-2xl text-muted-foreground/80 font-medium [text-wrap:pretty]">
        The first quantum-classical, ethically-grounded AI—built as an open ecosystem for rewriting the future responsibly.
      </p>
      <div className="mt-8 bg-background/80 border border-pink-600/60 rounded-xl p-5 shadow-xl max-w-lg animate-fade-in">
        <p className="mb-4 text-pink-400 font-semibold text-base">
          If you're an educator, non-profit leader, or open-source rebel fighting for humanity—you don’t need an invite or pedigree.<br />
          <span className="text-white font-bold">
            Grab your free world-changer pass—forever.
          </span>
        </p>
        <span className="text-muted-foreground text-sm">
          No gatekeepers. No B.S. Just pure possibility for those bold enough to shape the future.
        </span>
      </div>
      <a
        href="#roadmap"
        className="mt-10 inline-block text-lg font-bold transition
         bg-gradient-to-r from-blue-500 to-pink-500 text-white px-7 py-3 rounded-xl shadow-xl hover:opacity-90 hover:shadow-2xl focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 animate-scale-in"
      >
        🔥 Grab Your Free World-Changer Pass
      </a>
    </div>
    <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
      <div className="relative">
        <img
          src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
          alt="Futuristic dual-brained AI"
          className="w-[320px] md:w-[380px] lg:w-[440px] aspect-square rounded-full shadow-2xl md:-mr-8 border-8 border-background/90"
        />
        <div className="absolute -inset-3 rounded-full pointer-events-none animate-pulse"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%,#0ea5e9AA 0deg,#a21caf88 180deg,#ec489933 360deg)",
            zIndex: -1,
            filter: "blur(8px)",
          }}
        />
      </div>
    </div>
    {/* Subtle BG gradient */}
    <div className="pointer-events-none absolute inset-0 z-0 [background:radial-gradient(ellipse_at_40%_48%,rgba(76,29,149,0.18)_0%,rgba(23,37,84,.7)_60%,rgba(2,0,36,1)_100%)]"></div>
  </section>
);

export default HeroSection;
