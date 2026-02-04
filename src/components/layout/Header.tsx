"use client";

import React from "react";
import Link from "next/link";
import { NotificationIcon } from "../ui/Icons";

export default function Header() {
  return (
    <header className="header-section">
      <div style={{ width: "24px" }}></div>{" "}
      {/* Placeholder for balance alignment if needed, or just remove */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          transform: "translateX(-12px)", // Visual centering trick since notification icon is on right
        }}
      >
        <span
          style={{
            fontSize: "0.85rem",
            color: "var(--text-grey)",
            fontWeight: "500",
          }}
        >
          현재 포인트
        </span>
        <span
          style={{ fontSize: "1.25rem", fontWeight: "800", color: "#111827" }}
        >
          35,000 P
        </span>
      </div>
      <Link href="/notifications">
        <NotificationIcon />
      </Link>
    </header>
  );
}
