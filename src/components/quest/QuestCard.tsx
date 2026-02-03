import React, { ReactNode } from "react";

interface QuestCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  price: string;
  iconBg: string;
  iconColor: string;
  priceBg: string;
  priceColor: string;

  // Progress & Status
  progressLabel: string;
  progressValue: string; // e.g. "30%" or "90%"
  progressValueColor?: string; // Color of the percentage text
  progressGradient?: string; // CSS gradient for the bar

  isClosed?: boolean;
}

export default function QuestCard({
  title,
  subtitle,
  icon,
  price,
  iconBg,
  iconColor,
  priceBg,
  priceColor,
  progressLabel,
  progressValue,
  progressValueColor,
  progressGradient,
  isClosed = false,
}: QuestCardProps) {
  return (
    <div className="task-card" style={isClosed ? { opacity: 0.6 } : {}}>
      <div className="card-top">
        <div
          className="icon-box"
          style={{ background: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div
            className="card-title"
            style={isClosed ? { color: "#6B7280" } : {}}
          >
            {title}
          </div>
          <div className="card-subtitle">{subtitle}</div>
        </div>
        <div
          className="price-tag"
          style={{ background: priceBg, color: priceColor }}
        >
          {price}
        </div>
      </div>

      {!isClosed && (
        <div className="progress-section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
              fontSize: "0.8rem",
              fontWeight: "600",
              color: "#6B7280",
            }}
          >
            <span>{progressLabel}</span>
            <span style={{ color: progressValueColor }}>{progressValue}</span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: progressValue, background: progressGradient }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
