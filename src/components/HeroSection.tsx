
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => (
  <section className="relative isolate pt-12 pb-20 flex flex-col md:flex-row items-center justify-center bg-transparent overflow-hidden min-h-screen">
    {/* Holographic background elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
    </div>

    <div className="w-full md:w-3/5 flex flex-col items-start px-6 z-10 relative">
      <div className="absolute -top-10 -left-10 w-20 h-20 border border-cyan-400/30 transform rotate-45 animate-float-3d"></div>
      <div className="absolute -top-5 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
      
      <h1 className="text-[clamp(2.4rem,8vw,4.5rem)] font-black leading-[1.1] text-left text-holographic drop-shadow-2xl mb-6 perspective-1000">
        <span className="inline-block transform-3d hover:scale-105 transition-transform duration-300">Code Like It's Music.</span>
        <br />
        <span className="inline-block transform-3d hover:scale-105 transition-transform duration-300 delay-100">Think Like It's Art.</span>
        <br />
        <span className="inline-block transform-3d hover:scale-105 transition-transform duration-300 delay-200">
          <span className="text-cyan-400 glow-cyan">Build Like It's </span>
          <span className="text-purple-400 glow-purple">War.</span>
        </span>
      </h1>
      
      <p className="mt-8 max-w-xl text-lg md:text-2xl text-cyan-100/90 font-medium [text-wrap:pretty] backdrop-blur-sm">
        The first quantum-classical, ethically-grounded AI—built as an open ecosystem for rewriting the future responsibly.
      </p>
      
      <div className="mt-8 backdrop-holographic rounded-2xl p-6 shadow-2xl max-w-lg animate-float-3d border-holographic relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <p className="mb-4 text-cyan-300 font-semibold text-base relative z-10">
          If you're an educator, non-profit leader, or open-source rebel fighting for humanity—you don't need an invite or pedigree.<br />
          <span className="text-white font-bold glow-cyan">
            Grab your free world-changer pass—forever.
          </span>
        </p>
        <span className="text-cyan-100/70 text-sm relative z-10">
          No gatekeepers. No B.S. Just pure possibility for those bold enough to shape the future.
        </span>
      </div>
      
      <div className="mt-10 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-neon-glow"></div>
        <Link
          to="/dashboard"
          className="relative inline-block text-lg font-bold transition-all duration-300
           bg-gradient-to-r from-cyan-500/90 to-purple-500/90 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 backdrop-blur-sm border border-cyan-400/30 transform hover:scale-105"
        >
          🔥 Grab Your Free World-Changer Pass
        </Link>
      </div>
    </div>
    
    <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative">
      <div className="relative animate-float-3d">
        <div className="absolute -inset-8 bg-gradient-conic from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
        <img
          src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
          alt="Futuristic dual-brained AI"
          className="w-[320px] md:w-[380px] lg:w-[440px] aspect-square rounded-full shadow-2xl md:-mr-8 border-4 border-cyan-400/50 relative z-10 backdrop-blur-sm glow-cyan transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-1/4 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  </section>
);

export default HeroSection;
