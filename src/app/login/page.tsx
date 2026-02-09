"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../components/ui/Logo";

function LoginContent() {
  const { login } = useAuth();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const handleLogin = (provider: "google" | "naver") => {
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
        position: "relative",
      }}
    >
      {/* Close Button */}
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "var(--neutral-100)",
          color: "var(--neutral-600)",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
      >
        ✕
      </Link>

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo width={140} height={46} priority />
        </div>
        <p style={{ color: "var(--text-grey)", fontSize: "var(--text-base)" }}>
          퀘스트를 깨고 수익을 올려보세요! 🚀
        </p>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Google Login */}
        <button
          onClick={() => handleLogin("google")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid var(--neutral-100)",
            background: "var(--surface-white)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "var(--text-base)",
            fontWeight: "var(--weight-bold)",
            color: "var(--text-dark)",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            transition: "all 0.2s",
          }}
        >
          <Image src="/google-icon.svg" alt="G" width={24} height={24} />
          Google로 계속하기
        </button>

        {/* Naver Login */}
        <button
          onClick={() => handleLogin("naver")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid var(--neutral-100)",
            background: "var(--surface-white)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "var(--text-base)",
            fontWeight: "var(--weight-bold)",
            color: "var(--text-dark)",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            transition: "all 0.2s",
          }}
        >
          {/* Naver Icon (SVG handles white shape) */}
          <Image src="/naver-icon.svg" alt="N" width={24} height={24} />
          Naver로 계속하기
        </button>
      </div>

      <p
        style={{
          marginTop: "32px",
          fontSize: "0.8rem",
          color: "var(--neutral-400)",
          textAlign: "center",
        }}
      >
        계속 진행하면{" "}
        <Link
          href="/profile/notices"
          style={{ textDecoration: "underline", color: "var(--text-grey)" }}
        >
          이용약관
        </Link>{" "}
        및{" "}
        <Link
          href="/profile/privacy"
          style={{ textDecoration: "underline", color: "var(--text-grey)" }}
        >
          개인정보 처리방침
        </Link>
        에
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
