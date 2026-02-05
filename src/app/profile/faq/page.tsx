"use client";

import React from "react";
import SubPageHeader from "../../../components/layout/SubPageHeader";
import { MOCK_FAQ } from "../../../lib/mockData";

export default function FAQPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      <SubPageHeader title="자주 묻는 질문" />

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
