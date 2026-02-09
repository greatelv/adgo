"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { TaskIcon1, TaskIcon2, TaskIcon3 } from "../../../components/ui/Icons";
import ApplicationModal from "../../../components/quest/ApplicationModal";
import { getQuestById } from "../../../lib/mockData";
import { useAuth } from "../../../context/AuthContext";

export default function QuestDetail() {
  const params = useParams();
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch quest data based on ID
  const questId = typeof params.id === "string" ? params.id : "";
  const quest = getQuestById(questId);

  // Handle case where quest is not found
  if (!quest) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h2
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          퀘스트를 찾을 수 없습니다.
        </h2>
        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 20px",
            background: "var(--primary-600)",
            color: "var(--surface-white)",
            borderRadius: "var(--radius-sm)",
            border: "none",
            fontWeight: "var(--weight-semibold)",
          }}
        >
          메인으로 돌아가기
        </button>
      </div>
    );
  }

  // Icon logic
  let IconComponent = <TaskIcon1 />;
  if (quest.category === "SNS") IconComponent = <TaskIcon2 />;
  if (quest.category === "기타") IconComponent = <TaskIcon3 />;

  return (
    <main className="container" style={{ paddingBottom: "120px" }}>
      {/* Global Style for content readability */}
      <style jsx>{`
        .content-area p {
          margin-bottom: 12px;
          line-height: 1.7;
        }
        .content-area h3 {
          font-weight: 700;
          margin-top: 24px;
          margin-bottom: 12px;
        }
        .content-area ul {
          padding-left: 1.5rem;
        }
        .content-area li {
          margin-bottom: 6px;
        }
      `}</style>

      {/* Background */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Sticky Header with Blur */}
      <div
        style={{
          padding: "var(--space-4) var(--space-6)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          position: "sticky",
          top: 0,
          zIndex: "var(--z-fixed)",
          background: "var(--surface-translucent)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Back Icon */}
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
          style={{ fontSize: "1.05rem", fontWeight: "700", color: "#111827" }}
        >
          퀘스트 상세
        </span>
      </div>

      {/* Hero / Title Section */}
      <section style={{ padding: "24px 24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              background: quest.colors.iconBg,
              color: quest.colors.iconColor,
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 8px 16px -4px ${quest.colors.iconColor}33`, // Dynamic shadow color
              flexShrink: 0,
            }}
          >
            {IconComponent}
          </div>

          <div style={{ flex: 1, paddingTop: "4px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                background: quest.colors.priceBg,
                color: quest.colors.priceColor,
                borderRadius: "100px",
                fontSize: "0.8rem",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "0.5px",
              }}
            >
              {quest.category}
            </div>
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: "800",
                lineHeight: "1.3",
                margin: 0,
                color: "var(--neutral-900)",
                letterSpacing: "-0.5px",
              }}
            >
              {quest.title}
            </h1>
          </div>
        </div>

        {/* Info Grid - Glassy Cards */}
        <div style={{ display: "flex", gap: "14px", marginBottom: "32px" }}>
          <div
            style={{
              flex: 1,
              padding: "20px",
              borderRadius: "20px",
              background: "var(--surface-translucent)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontSize: "0.9rem",
                color: "#6B7280",
                marginBottom: "6px",
                fontWeight: "500",
              }}
            >
              건당 보상
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "800",
                color: "#4F46E5",
              }}
            >
              {quest.reward}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px",
              borderRadius: "20px",
              background: "var(--surface-translucent)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontSize: "0.9rem",
                color: "#6B7280",
                marginBottom: "6px",
                fontWeight: "500",
              }}
            >
              {quest.status === "URGENT" ? "마감 임박" : "모집 현황"}
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              {quest.recruitStatus.split(" ")[0]} {/* "3/10" part */}
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#9CA3AF",
                  marginLeft: "2px",
                }}
              >
                {quest.recruitStatus.split(" ").slice(1).join(" ")}{" "}
                {/* "명 지원중" part */}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div
        style={{
          padding: "0 24px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", gap: "28px" }}>
          <div
            style={{
              fontSize: "1.05rem",
              fontWeight: "700",
              color: "#4F46E5",
              paddingBottom: "12px",
              borderBottom: "2px solid #4F46E5",
              cursor: "pointer",
            }}
          >
            상세 가이드
          </div>
          <div
            style={{
              fontSize: "1.05rem",
              fontWeight: "600",
              color: "#9CA3AF",
              paddingBottom: "12px",
              cursor: "pointer",
            }}
          >
            지원자 현황
          </div>
        </div>
      </div>

      {/* Content Area */}
      <section
        className="content-area"
        style={{
          padding: "0 var(--space-6) var(--space-6)",
          color: "var(--neutral-700)",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: quest.description }} />

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {quest.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(255,255,255,0.8)",
                padding: "8px 14px",
                borderRadius: "100px",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#4B5563",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Action Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          padding: "16px 24px 34px",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.08)",
          borderTop: "1px solid rgba(255,255,255,0.5)",
          display: "flex",
          gap: "12px",
          maxWidth: "480px",
          margin: "0 auto",
          zIndex: 50,
        }}
      >
        <button
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "16px",
            border: "none",
            background: "var(--neutral-100)",
            color: "var(--neutral-600)",
            fontWeight: "var(--weight-bold)",
            fontSize: "var(--text-base)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          문의하기
        </button>

        {quest.status === "CLOSED" ? (
          <button
            disabled
            style={{
              flex: 2,
              padding: "16px",
              borderRadius: "16px",
              border: "none",
              background: "var(--neutral-200)",
              color: "var(--neutral-400)",
              fontWeight: "var(--weight-bold)",
              fontSize: "var(--text-base)",
              cursor: "not-allowed",
            }}
          >
            모집 마감
          </button>
        ) : (
          <button
            onClick={() => {
              if (isLoggedIn) {
                setIsModalOpen(true);
              } else {
                router.push(`/login?returnUrl=/quests/${quest.id}`);
              }
            }}
            style={{
              flex: 2,
              padding: "16px",
              borderRadius: "16px",
              border: "none",
              background: "var(--primary-gradient)",
              color: "var(--surface-white)",
              fontWeight: "var(--weight-bold)",
              fontSize: "var(--text-base)",
              boxShadow: "0 8px 20px -4px rgba(99, 102, 241, 0.4)",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
          >
            지원하기
          </button>
        )}
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        questTitle={quest.title}
      />
    </main>
  );
}
