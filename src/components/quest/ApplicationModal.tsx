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
      setIsVisible(true);
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
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Sheet */}
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "480px",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          padding: "32px 24px 40px",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.1)",
        }}
      >
        {/* Drag Handle */}
        <div
          style={{
            width: "40px",
            height: "4px",
            background: "#E5E7EB",
            borderRadius: "2px",
            margin: "-10px auto 24px",
          }}
        />

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "800",
            color: "#111827",
            marginBottom: "8px",
          }}
        >
          지원하기
        </h2>
        <p
          style={{ fontSize: "0.9rem", color: "#6B7280", marginBottom: "24px" }}
        >
          <span style={{ fontWeight: "600", color: "#4F46E5" }}>
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
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            background: "#F9FAFB",
            fontSize: "1rem",
            color: "#111827",
            resize: "none",
            outline: "none",
            marginBottom: "24px",
            fontFamily: "inherit",
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "16px",
            border: "none",
            background: isSubmitting ? "#E5E7EB" : "var(--primary-gradient)",
            color: isSubmitting ? "#9CA3AF" : "white",
            fontWeight: "700",
            fontSize: "1rem",
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
