"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TaskIcon1 } from "../../../components/ui/Icons";
import ApplicationModal from "../../../components/quest/ApplicationModal"; // Import Modal

// Mock Data for MVP (This would come from DB/API later)
const MOCK_QUEST = {
  id: "1",
  title: "신규 카페 오픈 블로그 리뷰",
  category: "블로그",
  reward: "5,000 P",
  deadline: "2024. 04. 20 마감",
  recruitStatus: "3/10명 지원중",
  description: `
    <p>안녕하세요! 해운대 근처에 새로 오픈한 '오션브리즈' 카페입니다.</p>
    <p>오픈 기념으로 감성적인 블로그 리뷰를 작성해주실 서포터님을 찾습니다.</p>
    <br/>
    <div style="background: #F3F4F6; padding: 16px; border-radius: 12px; margin: 16px 0;">
      <h3 style="margin: 0 0 12px 0; color: #4F46E5; font-size: 1.1rem;">📸 필수 포함 사항</h3>
      <ul style="padding-left: 20px; list-style-type: disc; margin: 0;">
        <li style="margin-bottom: 8px;">매장 내외부 인테리어 사진 3장 이상</li>
        <li style="margin-bottom: 8px;">시그니처 메뉴(오션 라떼) 사진 2장 이상</li>
        <li>지도 위치 첨부 필수</li>
      </ul>
    </div>
    <div style="margin-top: 24px;">
        <h3 style="margin-bottom: 8px; color: #DC2626; font-size: 1.1rem;">⚠️ 유의 사항</h3>
        <p style="color: #4B5563;">성의 없는 글이나 사진 재사용은 반려될 수 있습니다.</p>
    </div>
  `,
  tags: ["#해운대카페", "#오션브리즈", "#감성카페"],
};

export default function QuestDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="container" style={{ paddingBottom: "120px" }}>
      {/* Global Style for content readability (Scoped via style tag for now) */}
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
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(243, 232, 255, 0.7)", // Transparent Purple Tint
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
              background: "#E0E7FF",
              color: "#4F46E5",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 16px -4px rgba(79, 70, 229, 0.2)",
              flexShrink: 0,
            }}
          >
            <TaskIcon1 />
          </div>

          <div style={{ flex: 1, paddingTop: "4px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                background: "#EEF2FF",
                color: "#4F46E5",
                borderRadius: "100px",
                fontSize: "0.8rem",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "0.5px",
              }}
            >
              {MOCK_QUEST.category}
            </div>
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: "800",
                lineHeight: "1.3",
                margin: 0,
                color: "#111827",
                letterSpacing: "-0.5px",
              }}
            >
              {MOCK_QUEST.title}
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
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 4px 15px -4px rgba(0,0,0,0.05)",
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
              {MOCK_QUEST.reward}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 4px 15px -4px rgba(0,0,0,0.05)",
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
              모집 현황
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              3/10
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#9CA3AF",
                  marginLeft: "2px",
                }}
              >
                명
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs (Underline Style) */}
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
        style={{ padding: "0 24px 24px", color: "#374151" }}
      >
        <div dangerouslySetInnerHTML={{ __html: MOCK_QUEST.description }} />

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {MOCK_QUEST.tags.map((tag) => (
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

      {/* Bottom Action Bar (Fixed & Glassy) */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255, 255, 255, 0.85)", // More translucent
          backdropFilter: "blur(12px)", // Strong blur
          padding: "16px 24px 34px",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.08)", // Softer, larger shadow
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
            background: "#F3F4F6",
            color: "#4B5563",
            fontWeight: "700",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          문의하기
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            flex: 2,
            padding: "16px",
            borderRadius: "16px",
            border: "none",
            background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
            color: "white",
            fontWeight: "700",
            fontSize: "1rem",
            boxShadow: "0 8px 20px -4px rgba(99, 102, 241, 0.4)",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
        >
          지원하기
        </button>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        questTitle={MOCK_QUEST.title}
      />
    </main>
  );
}
