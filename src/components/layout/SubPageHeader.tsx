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
        height: "var(--space-header)",
        padding: "0 var(--space-4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-fixed)",
        background: "var(--surface-translucent)",
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
          color: "var(--text-dark)",
          borderRadius: "var(--radius-md)",
          transition: "background 0.2s",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>

      <span
        style={{
          fontSize: "1.15rem",
          fontWeight: "var(--weight-bold)",
          color: "var(--text-dark)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>
    </div>
  );
}
