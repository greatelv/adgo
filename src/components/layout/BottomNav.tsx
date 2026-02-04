"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, CalendarIcon, WalletIcon, ProfileIcon } from "../ui/Icons";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bottom-nav">
      <Link href="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
        <HomeIcon active={isActive("/")} />
      </Link>
      <Link
        href="/calendar"
        className={`nav-item ${isActive("/calendar") ? "active" : ""}`}
      >
        <CalendarIcon active={isActive("/calendar")} />
      </Link>
      <Link
        href="/wallet"
        className={`nav-item ${isActive("/wallet") ? "active" : ""}`}
      >
        <WalletIcon active={isActive("/wallet")} />
      </Link>
      <Link
        href="/profile"
        className={`nav-item ${isActive("/profile") ? "active" : ""}`}
      >
        <ProfileIcon active={isActive("/profile")} />
      </Link>
    </nav>
  );
}
