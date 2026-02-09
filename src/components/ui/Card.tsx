import React from "react";

interface CardProps {
  children: React.ReactNode;
  padding?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string; // Allow passing classes for interactions etc
}

export default function Card({
  children,
  padding = "24px",
  onClick,
  style,
  className,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: "var(--surface-white)",
        borderRadius: "var(--radius-card)",
        padding: padding,
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
