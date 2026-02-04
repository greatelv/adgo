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
        background: "white",
        borderRadius: "24px",
        padding: padding,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
