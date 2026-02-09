import type { Story } from "@ladle/react";
import Icons, {
  HomeIcon,
  CalendarIcon,
  WalletIcon,
  ProfileIcon,
  NotificationIcon,
  TaskIcon1,
  TaskIcon2,
  TaskIcon3,
} from "./Icons";
import FilterChip from "./FilterChip";
import Logo from "./Logo";
import PageHeader from "./PageHeader";
import { useState } from "react";

// --- Icons ---
export const AllIcons: Story = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      gap: "24px",
    }}
  >
    {[
      { Cmp: HomeIcon, name: "Home" },
      { Cmp: CalendarIcon, name: "Calendar" },
      { Cmp: WalletIcon, name: "Wallet" },
      { Cmp: ProfileIcon, name: "Profile" },
      { Cmp: NotificationIcon, name: "Notification" },
      { Cmp: TaskIcon1, name: "Task 1 (Store)" },
      { Cmp: TaskIcon2, name: "Task 2 (SNS)" },
      { Cmp: TaskIcon3, name: "Task 3 (Web)" },
    ].map(({ Cmp, name }, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ fontSize: "2rem", color: "var(--text-dark)" }}>
          <Cmp active={false} />
        </div>
        <div style={{ fontSize: "2rem", color: "var(--primary-600)" }}>
          <Cmp active={true} />
        </div>
        <span style={{ fontSize: "10px", color: "var(--text-grey)" }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

// --- Filter Chip ---
export const FilterChips: Story = () => {
  const [active, setActive] = useState("all");
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <FilterChip label="전체 (Active)" active={true} onClick={() => {}} />
      <FilterChip label="스토어 (Inactive)" active={false} onClick={() => {}} />

      {/* Interactive */}
      <div
        style={{
          borderLeft: "1px solid #ddd",
          paddingLeft: "12px",
          display: "flex",
          gap: "8px",
        }}
      >
        {["All", "Active", "Completed"].map((l) => (
          <FilterChip
            key={l}
            label={l}
            active={active === l}
            onClick={() => setActive(l)}
          />
        ))}
      </div>
    </div>
  );
};

// --- Logo ---
export const Logos: Story = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      padding: "24px",
      background: "var(--surface-white)",
    }}
  >
    <Logo width={120} height={40} />
    <Logo width={80} height={24} />
    <Logo />
  </div>
);

// --- Page Header ---
export const PageHeaders: Story = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      background: "var(--bg-color)",
      padding: "20px",
    }}
  >
    <PageHeader title="마이페이지" description="내 활동 내역을 확인하세요." />
    <PageHeader title="알림 센터" description="새로운 소식이 도착했습니다." />
  </div>
);
