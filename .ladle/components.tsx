import type { GlobalProvider } from "@ladle/react";
import React from "react";
import "../src/app/globals.css";
import { AuthProvider } from "../src/context/AuthContext";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
        background: "var(--bg-gradient)",
      }}
    >
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};
