"use client";

import React from "react";
import SubPageHeader from "../../../components/layout/SubPageHeader";

export default function SettingsPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      <SubPageHeader title="앱 설정" />

      <div style={{ padding: "0 24px" }}>
        <h3
          style={{
            fontSize: "0.9rem",
            color: "#9CA3AF",
            marginTop: "24px",
            marginBottom: "8px",
          }}
        >
          알림 설정
        </h3>
        <ToggleRow label="푸시 알림" checked={true} />
        <ToggleRow label="혜택/이벤트 알림 수신" checked={false} />

        <h3
          style={{
            fontSize: "0.9rem",
            color: "#9CA3AF",
            marginTop: "32px",
            marginBottom: "8px",
          }}
        >
          계정 설정
        </h3>
        <div
          style={{
            padding: "16px 0",
            borderBottom: "1px solid #F3F4F6",
            cursor: "pointer",
          }}
        >
          로그아웃
        </div>
        <div style={{ padding: "16px 0", color: "#EF4444", cursor: "pointer" }}>
          회원 탈퇴
        </div>
      </div>
    </main>
  );
}

function ToggleRow({ label, checked }: { label: string; checked: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
        borderBottom: "1px solid #F3F4F6",
      }}
    >
      <span style={{ fontSize: "1rem", color: "#374151", fontWeight: "500" }}>
        {label}
      </span>
      <div
        style={{
          width: "48px",
          height: "28px",
          background: checked ? "#4F46E5" : "#E5E7EB",
          borderRadius: "100px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            background: "white",
            borderRadius: "50%",
            position: "absolute",
            top: "2px",
            left: checked ? "22px" : "2px",
            transition: "left 0.2s",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
}
