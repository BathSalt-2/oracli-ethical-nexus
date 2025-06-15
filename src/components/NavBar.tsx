
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "The Problem", href: "/#problem" },
  { name: "The Solution", href: "/#solution" },
  { name: "Core Powers", href: "/#powers" },
  { name: "Community", href: "/#community" },
  { name: "Dashboard", href: "/dashboard" },
];

const NavBar: React.FC = () => (
  <nav className="sticky top-0 z-50 w-full backdrop-holographic border-b border-cyan-400/20 shadow-lg">
    <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
      <Link to="/" className="flex items-center gap-4 group">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
            alt="OR4CL3 Logo"
            className="w-12 h-12 rounded-full border-2 border-cyan-400/50 shadow-lg relative z-10 group-hover:border-cyan-400 transition-colors duration-300 glow-cyan"
          />
        </div>
        <span className="font-black text-2xl text-holographic uppercase tracking-wider transform group-hover:scale-105 transition-transform duration-300">
          OR4CL3
        </span>
      </Link>
      
      <div className="gap-8 hidden md:flex">
        {navLinks.map((l) => {
          const linkClasses = cn(
            "px-3 py-2 font-bold text-cyan-100 hover:text-holographic transition-all duration-300 relative group transform hover:scale-105",
            "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-pink-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
            "before:content-[''] before:absolute before:-inset-2 before:bg-cyan-400/10 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          );

          if (l.href.startsWith('/#')) {
            return (
              <a key={l.name} href={l.href} className={linkClasses}>
                <span className="relative z-10">{l.name}</span>
              </a>
            );
          }

          return (
            <Link key={l.name} to={l.href} className={linkClasses}>
              <span className="relative z-10">{l.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  </nav>
);

export default NavBar;
