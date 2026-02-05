"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

function OnboardingContent() {
  const { user, completeOnboarding } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [channelUrl, setChannelUrl] = useState("");

  // Step 1: Contact Info
  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      alert("연락처를 입력해주세요.");
      return;
    }
    setStep(2);
  };

  // Step 2: Channel Info
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!channelUrl.trim()) {
      alert("활동 채널 URL을 입력해주세요.");
      return;
    }

    // Update Context State
    completeOnboarding({
      phoneNumber: phoneNumber,
      channels: [channelUrl],
    });

    alert("온보딩이 완료되었습니다! 서포터 활동을 시작해보세요.");
    router.push(returnUrl);
  };

  return (
    <main
      className="container"
      style={{
        paddingBottom: "100px",
        minHeight: "100vh",
        background: "#FFFFFF",
      }}
    >
      {/* Header - hide back button if mandatory? Or allow back to login? Let's use clean layout */}
      <div style={{ padding: "24px 24px 0" }}>
        <h1
          style={{
            fontSize: "1.2rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          Adgo
        </h1>
      </div>

      <div style={{ padding: "32px 24px" }}>
        {/* Progress Indicator */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
          <div
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              background: step >= 1 ? "#4F46E5" : "#E5E7EB",
            }}
          ></div>
          <div
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              background: step >= 2 ? "#4F46E5" : "#E5E7EB",
            }}
          ></div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleStep1Submit}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#111827",
              }}
            >
              연락처를 확인해주세요.
            </h2>
            <p
              style={{
                color: "#6B7280",
                marginBottom: "32px",
                lineHeight: "1.5",
              }}
            >
              중요한 알림과 리워드 지급을 위해
              <br />
              정확한 연락처가 필요합니다.
            </p>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                이름
              </label>
              <input
                type="text"
                value={user?.name || ""}
                disabled
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  background: "#F9FAFB",
                  color: "#9CA3AF",
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                이메일
              </label>
              <input
                type="text"
                value={user?.email || ""}
                disabled
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  background: "#F9FAFB",
                  color: "#9CA3AF",
                }}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                휴대폰 번호 (필수)
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  fontSize: "1rem",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "16px",
                background: "#4F46E5",
                color: "white",
                fontWeight: "700",
                fontSize: "1.1rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
              }}
            >
              다음으로
            </button>
          </form>
        ) : (
          <form onSubmit={handleFinalSubmit}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#111827",
              }}
            >
              활동하시는 채널이 있나요?
            </h2>
            <p
              style={{
                color: "#6B7280",
                marginBottom: "32px",
                lineHeight: "1.5",
              }}
            >
              빌더에게 어필할 본인 소유의 채널을 알려주세요!
              <br />
              (추후 마이페이지에서 추가 가능)
            </p>

            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                활동 채널 URL (필수)
              </label>
              <input
                type="url"
                placeholder="https://instagram.com/..."
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  fontSize: "1rem",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "16px",
                background: "#4F46E5",
                color: "white",
                fontWeight: "700",
                fontSize: "1.1rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
              }}
            >
              시작하기 !
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              style={{
                width: "100%",
                padding: "16px",
                marginTop: "12px",
                background: "transparent",
                color: "#6B7280",
                fontWeight: "600",
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              이전 단계
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}
