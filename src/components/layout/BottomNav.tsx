import React from "react";
import { HomeIcon, CalendarIcon, WalletIcon, ProfileIcon } from "../ui/Icons";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="nav-item active">
        <HomeIcon active />
      </div>
      <div className="nav-item">
        <CalendarIcon />
      </div>
      <div style={{ width: "40px" }}></div> {/* Spacer for FAB */}
      <div className="nav-item">
        <WalletIcon />
      </div>
      <div className="nav-item">
        <ProfileIcon />
      </div>
    </nav>
  );
}
