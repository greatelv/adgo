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
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Link
        href={backTo}
        style={{ display: "flex", alignItems: "center", color: "#111827" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>{title}</span>
    </div>
  );
}
