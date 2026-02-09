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
    <div style={{ padding: "0 var(--space-6) var(--space-6)", ...style }}>
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
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--weight-bold)",
              color: "var(--neutral-900)",
              marginBottom: "var(--space-2)",
              margin: 0,
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                color: "var(--text-grey)",
                marginTop: "var(--space-2)",
                marginBottom: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>
    </div>
  );
}
