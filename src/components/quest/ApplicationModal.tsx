"use strict";

import React, { useState, useEffect } from "react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  questTitle: string;
}

export default function ApplicationModal({
  isOpen,
  onClose,
  questTitle,
}: ApplicationModalProps) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For animation delay

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure render happens before animation class is applied (if we were using classes)
      // Here it simply sets visibility state. To fix linter, we can defer it slightly.
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleSubmit = async () => {
    if (!message.trim()) {
      alert("각오 한마디를 입력해주세요!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    alert("지원이 완료되었습니다! 빌더의 선택을 기다려주세요.");
    onClose();
    setMessage("");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--overlay-dim)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Sheet */}
      <div
        style={{
          backgroundColor: "var(--surface-white)",
          width: "100%",
          maxWidth: "480px",
          borderTopLeftRadius: "var(--radius-card)",
          borderTopRightRadius: "var(--radius-card)",
          padding: "var(--space-8) var(--space-6) var(--space-10)",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.1)", // Could be a token --shadow-sheet
        }}
      >
        {/* Drag Handle */}
        <div
          style={{
            width: "40px",
            height: "4px",
            background: "var(--neutral-200)",
            borderRadius: "2px",
            margin: "-10px auto 24px",
          }}
        />

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "var(--weight-bold)",
            color: "var(--neutral-900)",
            marginBottom: "var(--space-2)",
          }}
        >
          지원하기
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-grey)",
            marginBottom: "var(--space-6)",
          }}
        >
          <span
            style={{
              fontWeight: "var(--weight-semibold)",
              color: "var(--primary-600)",
            }}
          >
            {questTitle}
          </span>{" "}
          퀘스트에 지원합니다.
          <br />
          빌더에게 어필할 한마디를 남겨주세요.
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="예: 안녕하세요! 이 분야 경험이 많아 꼼꼼하게 작업 가능합니다. 꼭 맡겨주세요!"
          style={{
            width: "100%",
            height: "120px",
            padding: "var(--space-4)",
            borderRadius: "var(--radius-button)",
            border: "1px solid var(--neutral-200)",
            background: "var(--neutral-50)",
            fontSize: "var(--text-base)",
            color: "var(--neutral-900)",
            resize: "none",
            outline: "none",
            marginBottom: "var(--space-6)",
            fontFamily: "inherit",
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "var(--space-4)",
            borderRadius: "var(--radius-button)",
            border: "none",
            background: isSubmitting
              ? "var(--neutral-200)"
              : "var(--primary-gradient)",
            color: isSubmitting ? "var(--neutral-400)" : "var(--surface-white)",
            fontWeight: "var(--weight-bold)",
            fontSize: "var(--text-base)",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transform: isSubmitting ? "scale(0.98)" : "scale(1)",
            transition: "all 0.2s",
          }}
        >
          {isSubmitting ? "제출 중..." : "지원하기"}
        </button>
      </div>
    </div>
  );
}
