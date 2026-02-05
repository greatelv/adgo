"use client";

import React from "react";

import { MOCK_NOTICES } from "../../../lib/mockData";
import SubPageHeader from "../../../components/layout/SubPageHeader";

export default function NoticesPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      <SubPageHeader title="공지사항" />

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
