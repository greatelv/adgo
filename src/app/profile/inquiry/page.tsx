"use client";

import React from "react";
import Link from "next/link";

export default function InquiryPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
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
          1:1 문의하기
        </span>
      </div>

      <div style={{ padding: "24px" }}>
        <p style={{ color: "#6B7280", marginBottom: "24px" }}>
          궁금한 점이나 건의사항이 있으시면 아래 폼을 작성해주세요.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              제목
            </label>
            <input
              type="text"
              placeholder="문의 제목을 입력해주세요"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              내용
            </label>
            <textarea
              rows={6}
              placeholder="문의 내용을 자세히 적어주세요"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "1rem",
                resize: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "16px",
              background: "#4F46E5",
              color: "white",
              fontWeight: "700",
              fontSize: "1.1rem",
              border: "none",
            }}
          >
            문의 접수하기
          </button>
        </form>
      </div>
    </main>
  );
}
