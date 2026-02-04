"use client";

import React from "react";
import Link from "next/link";
import { MOCK_NOTICES } from "../../../lib/mockData";

export default function NoticesPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Sticky Header */}
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
          href="/profile"
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
        <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>공지사항</span>
      </div>

      <div style={{ padding: "0 24px" }}>
        {MOCK_NOTICES.map((notice) => (
          <div
            key={notice.id}
            style={{
              padding: "16px 0",
              borderBottom: "1px solid #F3F4F6",
              cursor: "pointer",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "4px",
              }}
            >
              {notice.title}
            </h3>
            <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>
              {notice.date}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
