"use client";

import React from "react";
import Link from "next/link";

import { NotificationIcon } from "../ui/Icons";
import { useAuth } from "../../context/AuthContext";
import Logo from "../ui/Logo";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header
      className="header-section"
      style={{ padding: "var(--space-4) var(--space-6)" }}
    >
      {isLoggedIn ? (
        <>
          {/* Left: Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: "var(--z-elevated)",
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
              zIndex: "var(--z-base)",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-grey)",
                fontWeight: "var(--weight-medium)",
              }}
            >
              현재 포인트
            </span>
            <span
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: "var(--weight-bold)",
                color: "var(--neutral-900)",
              }}
            >
              35,000 P
            </span>
          </div>

          {/* Right: Notification */}
          <Link
            href="/notifications"
            style={{
              marginLeft: "auto",
              position: "relative",
              zIndex: "var(--z-elevated)",
            }}
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
              color: "var(--surface-white)",
              fontWeight: "var(--weight-semibold)",
              fontSize: "0.9rem",
              background: "var(--primary-gradient)",
              padding: "var(--space-2) 18px",
              borderRadius: "var(--radius-pill)",
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)", // Complex shadow, keep or define token
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
