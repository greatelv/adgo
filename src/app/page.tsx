"use strict";

import React from "react";

// Icons (Rounded & Soft)
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111827"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="6" x2="12" y2="6"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

const NotificationIcon = () => (
  <div style={{ position: "relative" }}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#111827"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 2,
        width: "10px",
        height: "10px",
        background: "#EF4444",
        borderRadius: "50%",
        border: "2px solid white",
      }}
    ></div>
  </div>
);

const TaskIcon1 = () => <span style={{ fontSize: "1.5rem" }}>☕</span>;
const TaskIcon2 = () => <span style={{ fontSize: "1.5rem" }}>⚡</span>;
const TaskIcon3 = () => <span style={{ fontSize: "1.5rem" }}>⭐</span>;

const HomeIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={active ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const CalendarIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={active ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const WalletIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={active ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const ProfileIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={active ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default function Home() {
  return (
    <main className="container">
      {/* Background Ornaments */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* Header */}
      <header className="header-section">
        <MenuIcon />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
        <NotificationIcon />
      </header>

      {/* Greeting Area */}
      <section style={{ padding: "10px 24px 24px" }}>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "800",
            lineHeight: "1.2",
            color: "#111827",
          }}
        >
          오늘의 퀘스트 <br />
          <span style={{ color: "var(--primary-solid)" }}>준비되셨나요?</span>
        </h1>
      </section>

      {/* Filters (Pill shaped) */}
      <section className="filter-scroll">
        <button className="filter-btn active">전체</button>
        <button className="filter-btn">🔥 고수익</button>
        <button className="filter-btn">📱 SNS</button>
        <button className="filter-btn">📝 블로그</button>
      </section>

      {/* Task List */}
      <section style={{ paddingBottom: "100px" }}>
        {/* Card 1 */}
        <div className="task-card">
          <div className="card-top">
            <div
              className="icon-box"
              style={{ background: "#E0E7FF", color: "#4F46E5" }}
            >
              <TaskIcon1 />
            </div>
            <div style={{ flex: 1 }}>
              <div className="card-title">신규 카페 오픈 블로그 리뷰</div>
              <div className="card-subtitle">사진 5장 이상 필수 • 2시간 전</div>
            </div>
            <div
              className="price-tag"
              style={{ background: "#EEF2FF", color: "#4F46E5" }}
            >
              5,000
            </div>
          </div>

          <div className="progress-section">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#6B7280",
              }}
            >
              <span>모집 현황</span>
              <span>30%</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: "30%", background: "var(--primary-gradient)" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="task-card">
          <div className="card-top">
            <div
              className="icon-box"
              style={{ background: "#FCE7F3", color: "#EC4899" }}
            >
              <TaskIcon2 />
            </div>
            <div style={{ flex: 1 }}>
              <div className="card-title">에너지 드링크 인스타 스토리</div>
              <div className="card-subtitle">@energy_boost 태그 • 긴급</div>
            </div>
            <div
              className="price-tag"
              style={{ background: "#FFF1F2", color: "#BE123C" }}
            >
              3,000
            </div>
          </div>

          <div className="progress-section">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
                fontSize: "0.8rem",
                fontWeight: "600",
                color: "#6B7280",
              }}
            >
              <span>마감 임박</span>
              <span style={{ color: "#EC4899" }}>90%</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{
                  width: "90%",
                  background: "var(--secondary-gradient)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Card 3 (Opacity) */}
        <div className="task-card" style={{ opacity: 0.6 }}>
          <div className="card-top">
            <div
              className="icon-box"
              style={{ background: "#F3F4F6", color: "#9CA3AF" }}
            >
              <TaskIcon3 />
            </div>
            <div style={{ flex: 1 }}>
              <div className="card-title" style={{ color: "#6B7280" }}>
                앱스토어 별점 평가
              </div>
              <div className="card-subtitle">간단 리뷰 작성</div>
            </div>
            <div
              className="price-tag"
              style={{ background: "#F3F4F6", color: "#9CA3AF" }}
            >
              마감
            </div>
          </div>
          {/* No progress for closed */}
        </div>
      </section>

      {/* Floating Add Button */}
      <div className="fab">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <HomeIcon active />
        </div>
        <div className="nav-item">
          <CalendarIcon />
        </div>
        <div style={{ width: "40px" }}></div> {/* Spacer for FAB */}
        <div className="nav-item">
          <WalletIcon />
        </div>
        <div className="nav-item">
          <ProfileIcon />
        </div>
      </nav>
    </main>
  );
}
