import React, { ReactNode } from "react";

interface QuestCardProps {
  title: string;
  // subtitle is replaced by tags logic
  channel?: string;
  questType?: string;

  icon: ReactNode;
  price: string; // Now a free text string (e.g. "3만원 상당")
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
  channel,
  questType,
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
      {/* 1. Top Row: Icon + Title (2 lines) */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        {/* Icon (Height matches 2 lines of title approx 48-50px) */}
        <div
          className="icon-box"
          style={{
            background: iconBg,
            color: iconColor,
            width: "52px",
            height: "52px",
            fontSize: "1.5rem",
            flexShrink: 0,
            borderRadius: "16px",
          }}
        >
          {icon}
        </div>

        {/* Title (Max 2 lines) */}
        <div
          className="card-title"
          style={{
            margin: 0,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "1.4",
            height: "fit-content",
            maxHeight: "3.2rem",
            alignSelf: "center",
            ...(isClosed ? { color: "#6B7280" } : {}),
          }}
        >
          {title}
        </div>
      </div>

      {/* 2. Bottom Row: Tags + Price */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: isClosed ? "0" : "16px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {channel && (
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--badge-neutral-txt)",
                background: "var(--badge-neutral-bg)",
                padding: "4px var(--space-2)",
                borderRadius: "6px",
              }}
            >
              {channel}
            </span>
          )}
          {questType && (
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--badge-brand-txt)",
                background: "var(--badge-brand-bg)", // Light purple
                padding: "4px var(--space-2)",
                borderRadius: "6px",
              }}
            >
              {questType}
            </span>
          )}
        </div>

        <div
          className="price-tag"
          style={{
            background: priceBg,
            color: priceColor,
            whiteSpace: "nowrap",
          }}
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
