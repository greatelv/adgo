"use strict";

import React from "react";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";
import FAB from "../components/ui/FAB";
import FilterChip from "../components/ui/FilterChip";
import QuestCard from "../components/quest/QuestCard";
import { TaskIcon1, TaskIcon2, TaskIcon3 } from "../components/ui/Icons";

export default function Home() {
  return (
    <main className="container">
      {/* Background Ornaments */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <Header />

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
        <FilterChip label="전체" active />
        <FilterChip label="🔥 고수익" />
        <FilterChip label="📱 SNS" />
        <FilterChip label="📝 블로그" />
      </section>

      {/* Task List */}
      <section style={{ paddingBottom: "120px" }}>
        {/* Card 1 */}
        <QuestCard
          title="신규 카페 오픈 블로그 리뷰"
          subtitle="사진 5장 이상 필수 • 2시간 전"
          icon={<TaskIcon1 />}
          price="5,000 P"
          iconBg="#E0E7FF"
          iconColor="#4F46E5"
          priceBg="#EEF2FF"
          priceColor="#4F46E5"
          progressLabel="모집 현황"
          progressValue="30%"
          progressGradient="var(--primary-gradient)"
        />

        {/* Card 2 */}
        <QuestCard
          title="에너지 드링크 인스타 스토리"
          subtitle="@energy_boost 태그 • 긴급"
          icon={<TaskIcon2 />}
          price="3,000 P"
          iconBg="#FCE7F3"
          iconColor="#EC4899"
          priceBg="#FFF1F2"
          priceColor="#BE123C"
          progressLabel="마감 임박"
          progressValue="90%"
          progressValueColor="#EC4899"
          progressGradient="var(--secondary-gradient)"
        />

        {/* Card 3 (Opacity) */}
        <QuestCard
          title="앱스토어 별점 평가"
          subtitle="간단 리뷰 작성"
          icon={<TaskIcon3 />}
          price="마감"
          iconBg="#F3F4F6"
          iconColor="#9CA3AF"
          priceBg="#F3F4F6"
          priceColor="#9CA3AF"
          progressLabel=""
          progressValue=""
          isClosed={true}
        />
      </section>

      <FAB />
      <BottomNav />
    </main>
  );
}
