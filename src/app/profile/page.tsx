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
  );

  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Background Blobs */}

      <Header />

      {/* Mode Switcher */}
      <div style={{ padding: "0 var(--space-6) var(--space-4)" }}>
        <div
          style={{
            background: "var(--neutral-100)",
            borderRadius: "var(--radius-md)",
            padding: "4px",
            display: "flex",
          }}
        >
          <button
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "var(--radius-sm)",
              border: "none",
              background: "var(--surface-white)",
              color: "var(--neutral-900)",
              fontWeight: "var(--weight-bold)",
              fontSize: "0.95rem",
              boxShadow: "var(--shadow-sm)",
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
              borderRadius: "var(--radius-sm)",
              border: "none",
              background: "transparent",
              color: "var(--neutral-400)",
              fontWeight: "var(--weight-semibold)",
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
      <section style={{ padding: "0 var(--space-6) var(--space-8)" }}>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-5)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "var(--primary-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--surface-white)",
              fontSize: "1.5rem",
              fontWeight: "var(--weight-bold)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            K
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              <h2
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: "var(--weight-bold)",
                  margin: 0,
                  color: "var(--neutral-900)",
                }}
              >
                {user.name} 님
              </h2>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  padding: "4px var(--space-2)",
                  background: "var(--primary-50)",
                  color: "var(--primary-600)",
                  borderRadius: "100px",
                  fontWeight: "var(--weight-bold)",
                }}
              >
                Lv. 3
              </span>
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "var(--text-grey)",
                marginTop: "4px",
              }}
            >
              {user.grade}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--neutral-400)",
                marginTop: "2px",
              }}
            >
              가입일 {user.joinDate}
            </div>
          </div>
        </Card>
      </section>

      {/* Stats Grid */}
      <section
        style={{
          padding: "0 var(--space-6) var(--space-8)",
          display: "flex",
          gap: "var(--space-3)",
        }}
      >
        <StatCard
          label="완료한 퀘스트"
          value={`${user.stats.completedQuests}개`}
          color="var(--primary-600)"
        />
        <StatCard
          label="누적 수익금"
          value={`${user.stats.totalEarnings} P`}
          color="var(--neutral-900)"
        />
      </section>

      {/* My Quests */}
      <section style={{ padding: "0 0 var(--space-10)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--space-4)",
            padding: "0 var(--space-6)", // Add padding to title only
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: "var(--weight-bold)",
              color: "var(--neutral-900)",
            }}
          >
            진행 중인 퀘스트
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
          }}
        >
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
      <section style={{ padding: "0 var(--space-6)" }}>
        <div
          style={{
            background: "var(--surface-white)",
            borderRadius: "var(--radius-button)",
            padding: "var(--space-2) 0",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <Link href="/profile/notices" style={{ textDecoration: "none" }}>
            <MenuRow icon="📢" label="공지사항" />
          </Link>
          <Link href="/profile/faq" style={{ textDecoration: "none" }}>
            <MenuRow icon="❓" label="자주 묻는 질문" />
          </Link>
          <Link href="/profile/inquiry" style={{ textDecoration: "none" }}>
            <MenuRow icon="💬" label="1:1 문의하기" />
          </Link>
          <div
            style={{
              height: "1px",
              background: "var(--neutral-100)",
              margin: "var(--space-2) var(--space-6)",
            }}
          ></div>
          <Link href="/profile/settings" style={{ textDecoration: "none" }}>
            <MenuRow icon="⚙️" label="앱 설정" />
          </Link>
          <Link href="/profile/privacy" style={{ textDecoration: "none" }}>
            <MenuRow icon="🔒" label="개인정보 처리방침" />
          </Link>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "var(--space-8)",
            color: "var(--neutral-300)",
            fontSize: "var(--text-xs)",
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
        background: "var(--neutral-50)",
        borderRadius: "var(--radius-button)",
        padding: "var(--space-4)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
      }}
    >
      <span
        style={{
          fontSize: "0.85rem",
          color: "var(--text-grey)",
          fontWeight: "var(--weight-medium)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "1.1rem",
          fontWeight: "var(--weight-bold)",
          color: color,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function MenuRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      style={{
        padding: "var(--space-4) var(--space-6)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      <span
        style={{
          fontSize: "1rem",
          fontWeight: "var(--weight-medium)",
          color: "var(--neutral-700)",
        }}
      >
        {label}
      </span>
      <span style={{ marginLeft: "auto", color: "var(--neutral-300)" }}>›</span>
    </div>
  );
}
