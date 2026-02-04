"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/layout/Header";
import BottomNav from "../../components/layout/BottomNav";
import PageHeader from "../../components/ui/PageHeader";

// Mock Schedule Data
const SCHEDULES = [
  {
    id: 1,
    title: "신규 카페 오픈 리뷰 마감",
    date: "2024-04-20",
    type: "deadline",
  },
  {
    id: 2,
    title: "에너지 드링크 챌린지 제출",
    date: "2024-04-18",
    type: "completed",
  },
  {
    id: 4,
    title: "마스크팩 체험단 선정 발표",
    date: "2024-04-25",
    type: "upcoming",
  },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 3, 1)); // April 2024 (Month is 0-indexed)
  const [selectedDate, setSelectedDate] = useState<string | null>("2024-04-20");

  // Calendar Logic
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];
  // Empty slots for previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  // Days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const formatDate = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const getScheduleForDay = (day: number) => {
    const dateStr = formatDate(day);
    return SCHEDULES.filter((s) => s.date === dateStr);
  };

  const selectedSchedules = selectedDate
    ? SCHEDULES.filter((s) => s.date === selectedDate)
    : [];

  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Background Blobs */}

      <Header />

      <PageHeader
        title="퀘스트 일정"
        description="이번 달 마감 기한을 확인하세요."
      />

      {/* Calendar Control */}
      <section
        style={{
          padding: "0 24px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            color: "#111827",
            margin: 0,
          }}
        >
          {year}년 {month + 1}월
        </h2>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={handlePrevMonth}
            style={{
              background: "white",
              border: "none",
              borderRadius: "12px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.1s",
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNextMonth}
            style={{
              background: "white",
              border: "none",
              borderRadius: "12px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.1s",
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Calendar Grid */}
      <section style={{ padding: "0 24px 32px" }}>
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* Weekday Headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            {["일", "월", "화", "수", "목", "금", "토"].map((d, i) => (
              <div
                key={d}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: i === 0 ? "#EF4444" : "#9CA3AF",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              rowGap: "12px",
            }}
          >
            {days.map((day, idx) => {
              if (!day) return <div key={`empty-${idx}`}></div>;

              const dateStr = formatDate(day);
              const schedules = getScheduleForDay(day);
              const isSelected = selectedDate === dateStr;
              const isToday = day === 20 && month === 3; // Mock Today: April 20

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDate(dateStr)}
                  style={{
                    height: "44px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    borderRadius: "12px",
                    background: isSelected ? "#EEF2FF" : "transparent",
                    color: isSelected ? "#4F46E5" : "#374151",
                    fontWeight: isSelected || isToday ? "700" : "500",
                    border: isToday ? "1px solid #4F46E5" : "none",
                  }}
                >
                  <span>{day}</span>
                  {/* Dots for schedules */}
                  <div
                    style={{ display: "flex", gap: "2px", marginTop: "4px" }}
                  >
                    {schedules.map((s) => (
                      <div
                        key={s.id}
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background:
                            s.type === "deadline"
                              ? "#EF4444"
                              : s.type === "completed"
                                ? "#10B981"
                                : "#3B82F6",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Date Schedule List */}
      <section style={{ padding: "0 24px" }}>
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "16px",
          }}
        >
          {selectedDate
            ? `${selectedDate.split("-")[1]}월 ${selectedDate.split("-")[2]}일 일정`
            : "날짜를 선택하세요"}
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {selectedSchedules.length > 0 ? (
            selectedSchedules.map((s) => (
              <div
                key={s.id}
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  background: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  borderLeft: `4px solid ${s.type === "deadline" ? "#EF4444" : s.type === "completed" ? "#10B981" : "#3B82F6"}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    color: "#1F2937",
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#6B7280",
                    marginTop: "4px",
                  }}
                >
                  {s.type === "deadline"
                    ? "🚨 마감일"
                    : s.type === "completed"
                      ? "✅ 완료됨"
                      : "🔵 예정"}
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "32px 0",
                color: "#9CA3AF",
                fontSize: "0.9rem",
              }}
            >
              등록된 일정이 없습니다. ☕️
            </div>
          )}
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
