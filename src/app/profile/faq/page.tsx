"use client";

import React from "react";
import Link from "next/link";
import { MOCK_FAQ } from "../../../lib/mockData";

export default function FAQPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Header */}
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
        <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>
          자주 묻는 질문
        </span>
      </div>

      <div style={{ padding: "0 24px" }}>
        {MOCK_FAQ.map((item) => (
          <details
            key={item.id}
            style={{ padding: "16px 0", borderBottom: "1px solid #F3F4F6" }}
          >
            <summary
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
                listStyle: "none",
              }}
            >
              {item.question}
            </summary>
            <p
              style={{
                marginTop: "12px",
                fontSize: "0.95rem",
                color: "#6B7280",
                lineHeight: "1.6",
              }}
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </main>
  );
}
