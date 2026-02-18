import type { Story } from "@ladle/react";
import QuestCard from "./QuestCard";
import ApplicationModal from "./ApplicationModal";
import { useState } from "react";
import { TaskIcon1, TaskIcon2 } from "../ui/Icons";

export const QuestCards: Story = () => {
  const commonProps = {
    title: "신규 카페 오픈 리뷰 이벤트",
    channel: "네이버 블로그",
    questType: "리뷰 작성",
    price: "5,000 P",
    icon: <TaskIcon1 />,
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    priceBg: "#F3F4F6",
    priceColor: "#111827",
    progressGradient: "linear-gradient(90deg, #4F46E5 0%, #818CF8 100%)",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        background: "var(--bg-color)",
        padding: "24px",
      }}
    >
      <QuestCard
        {...commonProps}
        progressLabel="모집 현황"
        progressValue="3/10명"
      />

      <QuestCard
        {...commonProps}
        icon={<TaskIcon2 />}
        title="인스타그램 팔로우 미션"
        channel="Instagram"
        price="1,000 P"
        progressLabel="마감 임박"
        progressValue="95%"
        progressValueColor="var(--status-urgent)"
      />

      <QuestCard
        {...commonProps}
        title="모집 마감된 퀘스트"
        isClosed={true}
        progressLabel=""
        progressValue=""
      />
    </div>
  );
};

export const Modals: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "12px 24px",
          background: "var(--primary-600)",
          color: "white",
          borderRadius: "12px",
          border: "none",
        }}
      >
        Open Quest Modal
      </button>

      <ApplicationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        questTitle="신규 카페 오픈 리뷰 이벤트"
      />
    </div>
  );
};
