
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
      "group relative rounded-2xl overflow-hidden bg-background/70 border border-border shadow hover:shadow-2xl transition-shadow duration-300 animate-fade-in",
      "hover:border-transparent hover:ring-2",
      accentColor,
      "cursor-pointer p-6 flex flex-col items-start min-h-[196px]"
    )}
  >
    <div className="mb-4 text-3xl">{icon}</div>
    <h3 className="font-extrabold text-xl text-white group-hover:text-pink-400 transition-colors mb-2">{title}</h3>
    <p className="text-base text-muted-foreground font-medium flex-1">{description}</p>
    <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
  </div>
);

export default EcoComponentCard;
