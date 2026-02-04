"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/layout/Header";
import BottomNav from "../../components/layout/BottomNav";
import FilterChip from "../../components/ui/FilterChip";
import PageHeader from "../../components/ui/PageHeader";

// Mock Transaction Data
const TRANSACTIONS = [
  {
    id: 1,
    type: "earn",
    title: "신규 카페 오픈 리뷰 리워드",
    date: "2024.03.25",
    amount: 5000,
    balance: 35000,
  },
  {
    id: 2,
    type: "earn",
    title: "에너지 드링크 챌린지 리워드",
    date: "2024.03.22",
    amount: 3000,
    balance: 30000,
  },
  {
    id: 3,
    type: "withdraw",
    title: "포인트 출금",
    date: "2024.03.20",
    amount: -10000,
    balance: 27000,
  },
  {
    id: 4,
    type: "earn",
    title: "마스크팩 체험단 리워드",
    date: "2024.03.15",
    amount: 20000,
    balance: 37000,
  },
  {
    id: 5,
    type: "withdraw",
    title: "포인트 출금",
    date: "2024.03.10",
    amount: -50000,
    balance: 17000,
  },
];

export default function WalletPage() {
  const [filter, setFilter] = useState("전체");

  const filteredTransactions = TRANSACTIONS.filter((t) => {
    if (filter === "전체") return true;
    if (filter === "적립") return t.type === "earn";
    if (filter === "출금") return t.type === "withdraw";
    return true;
  });

  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      {/* Background Blobs */}
      <Header />
      <PageHeader title="내 지갑" description="수익금을 관리하고 출금하세요." />
      {/* Wallet Card */}
      <section style={{ padding: "0 24px 32px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #111827 0%, #374151 100%)",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Deco Circle */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
            }}
          ></div>

          <div
            style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "8px" }}
          >
            출금 가능 포인트
          </div>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: "800",
              marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}
          >
            35,000{" "}
            <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>P</span>
          </div>

          <button
            onClick={() => alert("출금 신청 기능은 준비 중입니다.")}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "14px",
              background: "white",
              color: "#111827",
              fontSize: "1rem",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.1s",
            }}
          >
            출금 신청하기
          </button>
        </div>
      </section>
      {/* Transaction History */}
      <section style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              color: "#111827",
              margin: 0,
            }}
          >
            최근 내역
          </h3>
          <div style={{ display: "flex", gap: "8px" }}>
            {/* Simple Filter Chips implementation locally */}
            {["전체", "적립", "출금"].map((f) => (
              <div
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  background: filter === f ? "#111827" : "#F3F4F6",
                  color: filter === f ? "white" : "#6B7280",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredTransactions.map((t) => (
            <div
              key={t.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "16px",
                    background: t.type === "earn" ? "#EEF2FF" : "#F3F4F6",
                    color: t.type === "earn" ? "#4F46E5" : "#6B7280",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {t.type === "earn" ? "💰" : "💸"}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#1F2937",
                      marginBottom: "4px",
                    }}
                  >
                    {t.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>
                    {t.date}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: t.type === "earn" ? "#4F46E5" : "#111827",
                  }}
                >
                  {t.amount > 0 ? "+" : ""}
                  {t.amount.toLocaleString()} P
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#9CA3AF",
                    marginTop: "2px",
                  }}
                >
                  잔액 {t.balance.toLocaleString()} P
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BottomNav />
    </main>
  );
}
