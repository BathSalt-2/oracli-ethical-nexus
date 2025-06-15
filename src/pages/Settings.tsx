
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Settings: React.FC = () => {
  const navigate = useNavigate();

  // Theme toggle for demo, replace as needed
  const handleThemeToggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const theme =
    (typeof window !== "undefined" &&
      (localStorage.getItem("theme") ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"))) || "dark";

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-8 animate-fade-in">
      <div className="w-full max-w-sm mx-auto bg-card/80 backdrop-holographic rounded-2xl p-6 border-holographic shadow-xl flex flex-col items-center">
        <img
          src="/lovable-uploads/64723279-4d63-481c-86ad-3fd46954b7c9.png"
          alt="Logo"
          className="w-16 h-16 mb-2 rounded-full glow-cyan"
        />
        <h2 className="text-xl font-black text-holographic mb-4">Settings</h2>
        <div className="w-full flex flex-col items-stretch mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-cyan-200">Theme</span>
            <Button
              className="bg-cyan-600 text-white"
              onClick={handleThemeToggle}
              size="sm"
            >
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </Button>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="w-full mt-2 text-cyan-300 border-cyan-400"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Settings;
