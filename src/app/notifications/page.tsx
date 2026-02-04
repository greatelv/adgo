"use client";

import React from "react";
import Link from "next/link";
import { TaskIcon1 } from "../../components/ui/Icons";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "system",
    title: "회원가입을 축하합니다! 🎉",
    message: "애드고의 서포터가 되신 것을 환영해요. 500P가 적립되었습니다.",
    time: "1일 전",
    isRead: true,
  },
  {
    id: 2,
    type: "quest",
    title: "'신규 카페 오픈' 퀘스트 선정",
    message:
      "축하합니다! 지원하신 퀘스트에 선정되셨습니다. 지금 바로 수행 가이드를 확인해보세요.",
    time: "2시간 전",
    isRead: false,
  },
  {
    id: 3,
    type: "point",
    title: "포인트 출금 완료",
    message: "신청하신 10,000P 출금이 완료되었습니다.",
    time: "방금 전",
    isRead: false,
  },
];

export default function NotificationPage() {
  return (
    <main className="container" style={{ paddingBottom: "40px" }}>
      {/* Background */}

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
          background: "transparent",
          // backdropFilter: "blur(10px)", // Removed for cleaner look
          // borderBottom: "1px solid rgba(0,0,0,0.05)", // Removed
        }}
      >
        <Link
          href="/"
          style={{
            color: "#1F2937",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
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
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
        </Link>
        <span
          style={{ fontSize: "1.1rem", fontWeight: "700", color: "#111827" }}
        >
          알림함
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.85rem",
            color: "#4F46E5",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          모두 읽음
        </span>
      </div>

      {/* List */}
      <div style={{ padding: "16px 24px" }}>
        {MOCK_NOTIFICATIONS.map((notif) => (
          <div
            key={notif.id}
            style={{
              padding: "16px",
              marginBottom: "12px",
              background: notif.isRead ? "white" : "#EEF2FF",
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              position: "relative",
            }}
          >
            {!notif.isRead && (
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                }}
              ></div>
            )}

            <div
              style={{
                fontSize: "0.95rem",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "4px",
              }}
            >
              {notif.title}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#4B5563",
                lineHeight: "1.5",
              }}
            >
              {notif.message}
            </div>
            <div
              style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "8px" }}
            >
              {notif.time}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
