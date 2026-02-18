"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";

import FilterChip from "../components/ui/FilterChip";
import QuestCard from "../components/quest/QuestCard";
import { TaskIcon1, TaskIcon2, TaskIcon3 } from "../components/ui/Icons";
import { MOCK_QUESTS } from "../lib/mockData";

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState("전체");

  const filteredQuests = MOCK_QUESTS.filter((quest) => {
    if (activeCategory === "전체") return true;
    return quest.category === activeCategory;
  });

  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Background Blobs (Premium Vibe) */}

      <Header />

      {/* Greeting Section */}
      <section style={{ padding: "0 24px 32px" }}>
        <h1 className="hero-title">
          오늘의 <span className="highlight">퀘스트</span>{" "}
          <span className="highlight-text">{MOCK_QUESTS.length}개</span> 🚀
        </h1>
      </section>

      {/* Filter Chips */}
      <h2
        style={{
          fontSize: "1.05rem",
          fontWeight: "var(--weight-bold)",
          color: "var(--neutral-700)",
          margin: "0 0 var(--space-3)",
          padding: "0 var(--space-6)",
        }}
      >
        어디서 활동하시나요?
      </h2>
      <div
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          padding: "0 24px 24px",
          scrollbarWidth: "none",
        }}
      >
        {[
          { id: "전체", label: "전체" },
          { id: "스토어", label: "🛍️ 스토어" },
          { id: "SNS", label: "💬 SNS" },
          { id: "웹", label: "🌐 웹" },
          { id: "기타", label: "⚡️ 기타" },
        ].map((cat) => (
          <FilterChip
            key={cat.id}
            label={cat.label}
            active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          />
        ))}
      </div>

      {/* Task List */}
      <section style={{ paddingBottom: "120px" }}>
        {filteredQuests.length > 0 ? (
          filteredQuests.map((quest) => {
            // Icon mapping logic
            let IconComponent = <TaskIcon1 />;
            if (quest.category === "SNS") IconComponent = <TaskIcon2 />;
            if (
              quest.status === "CLOSED" ||
              quest.category === "기타" ||
              quest.category === "웹"
            )
              IconComponent = <TaskIcon3 />;

            return (
              <Link
                key={quest.id}
                href={`/quests/${quest.id}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <QuestCard
                  title={quest.title}
                  channel={quest.channel}
                  questType={quest.questType}
                  icon={IconComponent}
                  price={quest.reward}
                  iconBg={quest.colors.iconBg}
                  iconColor={quest.colors.iconColor}
                  priceBg={quest.colors.priceBg}
                  priceColor={quest.colors.priceColor}
                  progressLabel={
                    quest.status === "CLOSED"
                      ? ""
                      : quest.status === "URGENT"
                        ? "마감 임박"
                        : "모집 현황"
                  }
                  progressValue={quest.progressValue || ""}
                  progressValueColor={
                    quest.status === "URGENT"
                      ? "var(--status-urgent)"
                      : undefined
                  }
                  progressGradient={quest.colors.progressGradient}
                  isClosed={quest.status === "CLOSED"}
                />
              </Link>
            );
          })
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "var(--space-10)",
              color: "var(--neutral-400)",
            }}
          >
            해당하는 퀘스트가 없습니다. 😅
          </div>
        )}
      </section>

      <BottomNav />
    </main>
  );
}
