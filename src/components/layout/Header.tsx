"use client";

import React from "react";
import Link from "next/link";
import { NotificationIcon } from "../ui/Icons";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <header className="header-section">
      <div style={{ width: "24px" }}></div>

      {isLoggedIn ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              transform: "translateX(-12px)",
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
              style={{
                fontSize: "1.25rem",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              35,000 P
            </span>
          </div>
          <Link href="/notifications">
            <NotificationIcon />
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textDecoration: "none",
            }}
          >
            <h1
              style={{
                fontSize: "1.2rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}
            >
              Adgo
            </h1>
          </Link>
          <Link
            href="/login"
            style={{
              textDecoration: "none",
              color: "#4F46E5",
              fontWeight: "600",
              fontSize: "0.9rem",
            }}
          >
            로그인
          </Link>
        </>
      )}
    </header>
  );
}
