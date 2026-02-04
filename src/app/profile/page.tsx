"use client";

import React from "react";
import Link from "next/link";
import Header from "../../components/layout/Header";
import BottomNav from "../../components/layout/BottomNav";
import QuestCard from "../../components/quest/QuestCard";
import { TaskIcon1, TaskIcon2 } from "../../components/ui/Icons";
import { MOCK_QUESTS } from "../../lib/mockData";
import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

export default function ProfilePage() {
  // Mock User Data
  const user = {
    name: "Kei",
    grade: "Super Supporter",
    joinDate: "2024.01.15",
    stats: {
      completedQuests: 12,
      totalEarnings: "154,000",
      ranking: "TOP 5%",
    },
  };

  // Filter only 'OPEN' quests as 'In Progress' for demo
  const myQuests = MOCK_QUESTS.filter(
    (q) => q.status === "URGENT" || q.id === "1",
  ).slice(0, 2);

  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Background Blobs */}

      <Header />

      {/* Mode Switcher */}
      <div style={{ padding: "0 24px 16px" }}>
        <div
          style={{
            background: "#F3F4F6",
            borderRadius: "12px",
            padding: "4px",
            display: "flex",
          }}
        >
          <button
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "white",
              color: "#111827",
              fontWeight: "700",
              fontSize: "0.95rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              cursor: "default",
            }}
          >
            서포터 모드
          </button>
          <button
            onClick={() =>
              alert(
                "빌더 모드는 준비 중입니다! 🚧\\n곧 나만의 퀘스트를 등록할 수 있어요.",
              )
            }
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "transparent",
              color: "#9CA3AF",
              fontWeight: "600",
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            빌더 모드
          </button>
        </div>
      </div>

      <PageHeader title="마이페이지" description="내 활동 내역을 확인하세요." />

      {/* User Profile Card */}
      <section style={{ padding: "0 24px 32px" }}>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "800",
              boxShadow: "0 8px 16px rgba(79, 70, 229, 0.3)",
            }}
          >
            K
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  margin: 0,
                  color: "#111827",
                }}
              >
                {user.name} 님
              </h2>
              <span
                style={{
                  fontSize: "0.75rem",
                  padding: "4px 8px",
                  background: "#EFF6FF",
                  color: "#3B82F6",
                  borderRadius: "100px",
                  fontWeight: "700",
                }}
              >
                Lv. 3
              </span>
            </div>
            <div
              style={{ fontSize: "0.9rem", color: "#6B7280", marginTop: "4px" }}
            >
              {user.grade}
            </div>
            <div
              style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "2px" }}
            >
              가입일 {user.joinDate}
            </div>
          </div>
        </Card>
      </section>

      {/* Stats Grid */}
      <section style={{ padding: "0 24px 32px", display: "flex", gap: "12px" }}>
        <StatCard
          label="완료한 퀘스트"
          value={`${user.stats.completedQuests}개`}
          color="#4F46E5"
        />
        <StatCard
          label="누적 수익금"
          value={`${user.stats.totalEarnings} P`}
          color="#111827"
        />
      </section>

      {/* My Quests */}
      <section style={{ padding: "0 0 40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            padding: "0 24px", // Add padding to title only
          }}
        >
          <h3
            style={{ fontSize: "1.1rem", fontWeight: "700", color: "#111827" }}
          >
            진행 중인 퀘스트
          </h3>
          <span
            style={{
              fontSize: "0.85rem",
              color: "#4F46E5",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            전체보기
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {myQuests.map((quest) => (
            <Link
              key={quest.id}
              href={`/quests/${quest.id}`}
              style={{ textDecoration: "none" }}
            >
              <QuestCard
                title={quest.title}
                platform={quest.platform}
                questType={quest.questType}
                icon={quest.category === "SNS" ? <TaskIcon2 /> : <TaskIcon1 />}
                price={quest.reward}
                iconBg={quest.colors.iconBg}
                iconColor={quest.colors.iconColor}
                priceBg={quest.colors.priceBg}
                priceColor={quest.colors.priceColor}
                progressLabel="진행률"
                progressValue={quest.status === "URGENT" ? "80%" : "20%"}
                progressGradient={quest.colors.progressGradient}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Menu List */}
      <section style={{ padding: "0 24px" }}>
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "8px 0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
          }}
        >
          <MenuRow icon="📢" label="공지사항" />
          <MenuRow icon="❓" label="자주 묻는 질문" />
          <MenuRow icon="💬" label="1:1 문의하기" />
          <div
            style={{ height: "1px", background: "#F3F4F6", margin: "8px 24px" }}
          ></div>
          <MenuRow icon="⚙️" label="앱 설정" />
          <MenuRow icon="🔒" label="개인정보 처리방침" />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "32px",
            color: "#D1D5DB",
            fontSize: "0.8rem",
          }}
        >
          회원 탈퇴 | 로그아웃
        </div>
      </section>

      <BottomNav />
    </main>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: "#F9FAFB",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <span
        style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: "500" }}
      >
        {label}
      </span>
      <span style={{ fontSize: "1.1rem", fontWeight: "800", color: color }}>
        {value}
      </span>
    </div>
  );
}

function MenuRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      <span style={{ fontSize: "1rem", fontWeight: "500", color: "#374151" }}>
        {label}
      </span>
      <span style={{ marginLeft: "auto", color: "#D1D5DB" }}>›</span>
    </div>
  );
}
