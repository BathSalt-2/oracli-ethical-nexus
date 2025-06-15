
import React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "The Problem", href: "#problem" },
  { name: "The Solution", href: "#solution" },
  { name: "Core Powers", href: "#powers" },
  { name: "Community", href: "#community" },
];

const NavBar: React.FC = () => (
  <nav className="sticky top-0 z-40 w-full bg-background border-b border-border/40">
    <div className="flex items-center justify-between px-6 py-3 max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-3">
        <img
          src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
          alt="OR4CL3 Logo"
          className="w-12 h-12 rounded-full ring-2 ring-primary shadow-lg"
        />
        <span className="font-black text-xl text-primary uppercase tracking-wider">
          OR4CL3
        </span>
      </div>
      <div className="gap-6 hidden md:flex">
        {navLinks.map((l) => (
          <a
            key={l.name}
            href={l.href}
            className={cn(
              "px-2 py-1 font-semibold text-foreground hover:text-primary transition-colors duration-150 relative",
              "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-400 after:to-pink-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            )}
          >
            {l.name}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default NavBar;
