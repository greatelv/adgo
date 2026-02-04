"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Mode = "SUPPORTER" | "BUILDER";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("SUPPORTER");
  const router = useRouter();

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "SUPPORTER" ? "BUILDER" : "SUPPORTER";
      // Redirect logic
      if (newMode === "BUILDER") {
        router.push("/builder");
      } else {
        router.push("/");
      }
      return newMode;
    });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
