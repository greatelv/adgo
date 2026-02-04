import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  rightAction?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function PageHeader({
  title,
  description,
  rightAction,
  style,
}: PageHeaderProps) {
  return (
    <div style={{ padding: "0 24px 24px", ...style }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "8px",
              margin: 0,
            }}
          >
            {title}
          </h1>
          {description && (
            <p style={{ color: "#6B7280", marginTop: "8px", marginBottom: 0 }}>
              {description}
            </p>
          )}
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>
    </div>
  );
}
