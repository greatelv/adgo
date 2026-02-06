"use client";

import React from "react";
import Link from "next/link";

import { NotificationIcon } from "../ui/Icons";
import { useAuth } from "../../context/AuthContext";
import Logo from "../ui/Logo";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header-section" style={{ padding: "16px 24px" }}>
      {isLoggedIn ? (
        <>
          {/* Left: Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Logo width={72} height={24} priority />
          </Link>

          {/* Center: Points */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 0,
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

          {/* Right: Notification */}
          <Link
            href="/notifications"
            style={{ marginLeft: "auto", position: "relative", zIndex: 10 }}
          >
            <NotificationIcon />
          </Link>
        </>
      ) : (
        <>
          {/* Left: Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={72} height={24} priority />
          </Link>

          {/* Right: Login Button */}
          <Link
            href="/login"
            style={{
              marginLeft: "auto",
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "0.9rem",
              background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
              padding: "8px 18px",
              borderRadius: "99px",
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
              transition: "transform 0.2s",
              display: "flex", // Keep flex to align text nicely if needed
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            로그인
          </Link>
        </>
      )}
    </header>
  );
}
