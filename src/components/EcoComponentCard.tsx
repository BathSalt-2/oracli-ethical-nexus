
import React from "react";
import { cn } from "@/lib/utils";

export interface EcoComponentCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  id?: string;
}

const EcoComponentCard: React.FC<EcoComponentCardProps> = ({
  icon,
  title,
  description,
  accentColor,
  id
}) => (
  <div
    id={id}
    className={cn(
      "group relative rounded-2xl overflow-hidden backdrop-holographic shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-float-3d border-holographic",
      "hover:border-cyan-400/50 hover:glow-cyan cursor-pointer p-6 flex flex-col items-start min-h-[220px] transform hover:scale-105 hover:-translate-y-2 perspective-1000"
    )}
  >
    {/* Holographic overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Animated border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{padding: '1px'}}>
      <div className="w-full h-full rounded-2xl bg-gray-900/90"></div>
    </div>
    
    <div className="mb-6 text-4xl relative z-10 transform group-hover:scale-110 transition-transform duration-300 glow-cyan">
      {icon}
    </div>
    
    <h3 className="font-black text-xl text-holographic group-hover:glow-cyan transition-all duration-300 mb-3 relative z-10">
      {title}
    </h3>
    
    <p className="text-base text-cyan-100/80 font-medium flex-1 relative z-10 leading-relaxed">
      {description}
    </p>
    
    {/* Holographic scan line effect */}
    <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
    
    {/* Corner accents */}
    <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300"></div>
    <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-400/50 group-hover:border-purple-400 transition-colors duration-300"></div>
  </div>
);

export default EcoComponentCard;
