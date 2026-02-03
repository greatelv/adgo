import React, { ReactNode } from "react";

interface FilterChipProps {
  label: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function FilterChip({
  label,
  active = false,
  onClick,
}: FilterChipProps) {
  return (
    <button
      className={`filter-btn ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
