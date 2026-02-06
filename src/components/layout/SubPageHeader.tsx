"use client";

import React from "react";
import Link from "next/link";

interface SubPageHeaderProps {
  title: string;
  backTo?: string; // URL to go back to (default: /profile)
}

export default function SubPageHeader({
  title,
  backTo = "/profile",
}: SubPageHeaderProps) {
  return (
    <div
      style={{
        height: "56px", // Standard App Header Height
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center Title
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Link
        href={backTo}
        style={{
          position: "absolute",
          left: "12px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1F2937",
          borderRadius: "12px",
          transition: "background 0.2s",
        }}
        // Add simple hover effect inline or via class if possible, kept simple for now
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5" // Slightly bolder
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>

      <span
        style={{
          fontSize: "1.15rem",
          fontWeight: "700",
          color: "#111827",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>
    </div>
  );
}
