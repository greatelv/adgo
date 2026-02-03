import React from "react";
import { MenuIcon, NotificationIcon } from "../ui/Icons";

export default function Header() {
  return (
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
  );
}
