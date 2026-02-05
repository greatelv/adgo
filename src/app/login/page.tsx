"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

function LoginContent() {
  const { login } = useAuth();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const handleLogin = (provider: "google" | "naver") => {
    // Always go to onboarding first for this MVP flow to verify contact info
    login(provider, `/onboarding?returnUrl=${encodeURIComponent(returnUrl)}`);
  };

  return (
    <main
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          Adgo
        </h1>
        <p style={{ color: "#6B7280", fontSize: "1rem" }}>
          퀘스트를 깨고 수익을 올려보세요! 🚀
        </p>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Google Login */}
        <button
          onClick={() => handleLogin("google")}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "#374151",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>🇬</span>
          Google로 계속하기
        </button>

        {/* Naver Login */}
        <button
          onClick={() => handleLogin("naver")}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "none",
            background: "#03C75A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(3, 199, 90, 0.2)",
          }}
        >
          <span style={{ fontSize: "1.2rem", fontWeight: "800" }}>N</span>
          Naver로 계속하기
        </button>
      </div>

      <p style={{ marginTop: "32px", fontSize: "0.8rem", color: "#9CA3AF" }}>
        계속 진행하면 이용약관 및 개인정보 처리방침에
        <br />
        동의하는 것으로 간주합니다.
      </p>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
