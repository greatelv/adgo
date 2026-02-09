import type { Story } from "@ladle/react";
import Header from "./Header";
import BottomNav from "./BottomNav";
import SubPageHeader from "./SubPageHeader";

// Note: Header wraps useAuth, which is mocked in .ladle/components.tsx
export const MainHeader: Story = () => (
  <div
    style={{
      position: "relative",
      height: "100px",
      background: "var(--bg-color)",
    }}
  >
    <Header />
    <p style={{ padding: "20px", fontSize: "12px", color: "var(--text-grey)" }}>
      *Note: Renders based on Mock Auth Context (Default Logged In/Out state set
      in provider)
    </p>
  </div>
);

export const NavigationBar: Story = () => (
  <div
    style={{
      position: "relative",
      height: "150px",
      background: "var(--bg-color)",
    }}
  >
    <div style={{ padding: "20px" }}>Content above nav...</div>
    <BottomNav />
  </div>
);

export const SubHeaders: Story = () => (
  <div style={{ background: "var(--bg-color)", paddingBottom: "20px" }}>
    <SubPageHeader title="상세 페이지" />
    <div style={{ height: "20px" }}></div>
    <SubPageHeader title="긴 제목의 상세 페이지 테스트입니다" />
  </div>
);
