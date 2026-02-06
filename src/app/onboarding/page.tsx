"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import Logo from "../../components/ui/Logo";

function OnboardingContent() {
  const { user, completeOnboarding } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  // Step 2 State: Array of strings, max 3
  const [channelUrls, setChannelUrls] = useState<string[]>([""]);

  // Validation States
  const [phoneError, setPhoneError] = useState("");
  const [channelError, setChannelError] = useState("");

  // Step 1: Contact Info
  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      setPhoneError("휴대폰 번호를 입력해주세요.");
      return;
    }
    setPhoneError("");
    setStep(2);
  };

  // Step 2 Logic
  const handleAddChannel = () => {
    if (channelUrls.length < 3) {
      setChannelUrls([...channelUrls, ""]);
    }
  };

  const handleRemoveChannel = (index: number) => {
    const newUrls = channelUrls.filter((_, i) => i !== index);
    setChannelUrls(newUrls.length ? newUrls : [""]); // Keep at least one
  };

  const handleChannelChange = (index: number, value: string) => {
    const newUrls = [...channelUrls];
    newUrls[index] = value;
    setChannelUrls(newUrls);
    if (value.trim()) setChannelError(""); // Clear error on type
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Filter empty inputs
    const validChannels = channelUrls.filter((url) => url.trim() !== "");

    if (validChannels.length === 0) {
      setChannelError("최소 1개의 활동 채널을 입력해주세요.");
      return;
    }

    // Update Context State
    completeOnboarding({
      phoneNumber: phoneNumber,
      channels: validChannels,
    });

    showToast("회원가입이 완료되었습니다! 환영합니다 🎉", "success");
    router.push(returnUrl);
  };

  return (
    <main
      className="container"
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex", // Robust Flex Layout
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header Area */}
      <header
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "12px",
          marginBottom: "24px",
        }}
      >
        <Logo width={84} height={28} />
      </header>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          width: "100%",
          padding: "0 24px 40px", // Consistent Horizontal Padding
          display: "flex",
          flexDirection: "column",
          maxWidth: "480px", // Safety cap for desktop view
        }}
      >
        {/* Progress System */}
        <div
          role="progressbar"
          aria-label={`Step ${step} of 2`}
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "48px",
            width: "100%",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "4px",
              background: step >= 1 ? "#6366F1" : "#F3F4F6",
              transition: "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          <div
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "4px",
              background: step >= 2 ? "#6366F1" : "#F3F4F6",
              transition: "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        {/* Dynamic Step Content */}
        {step === 1 ? (
          <form
            onSubmit={handleStep1Submit}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Title Section */}
            <div style={{ marginBottom: "40px" }}>
              <h2 style={h2Style}>
                연락처를
                <br />
                확인해주세요 📞
              </h2>
              <p style={subtextStyle}>
                중요한 알림과 리워드 지급을 위해
                <br />
                정확한 정보인지 확인 부탁드려요.
              </p>
            </div>

            {/* Input Group */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              <div>
                <label style={labelStyle}>이름</label>
                <div style={disabledInputWrapperStyle}>
                  <input
                    type="text"
                    value={user?.name || ""}
                    disabled
                    style={disabledInputStyle}
                  />
                  <span style={{ fontSize: "1.2rem", opacity: 0.5 }}>🔒</span>
                </div>
              </div>

              <div>
                <label style={labelStyle}>이메일</label>
                <div style={disabledInputWrapperStyle}>
                  <input
                    type="text"
                    value={user?.email || ""}
                    disabled
                    style={disabledInputStyle}
                  />
                  <span style={{ fontSize: "1.2rem", opacity: 0.5 }}>🔒</span>
                </div>
              </div>

              <div>
                <label style={labelStyle}>
                  휴대폰 번호 <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (e.target.value.trim()) setPhoneError("");
                  }}
                  style={{
                    ...activeInputStyle,
                    borderColor: phoneError
                      ? "#EF4444"
                      : (activeInputStyle.border as string),
                  }}
                  autoFocus
                />
                {phoneError && (
                  <p
                    style={{
                      marginTop: "6px",
                      fontSize: "0.85rem",
                      color: "#EF4444",
                      fontWeight: "500",
                    }}
                  >
                    {phoneError}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Action */}
            <div style={{ marginTop: "auto" }}>
              <button type="submit" style={primaryButtonStyle}>
                다음으로
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleFinalSubmit}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Title Section */}
            <div style={{ marginBottom: "32px" }}>
              <h2 style={h2Style}>
                활동하시는
                <br />
                채널이 있나요? ✨
              </h2>
              <p style={subtextStyle}>
                빌더들에게 어필할 나만의 채널을
                <br />
                알려주세요. (최대 3개)
              </p>
            </div>

            {/* Warning Alert - Compact & Warn Level */}
            <div style={warningBoxStyle}>
              <span style={{ fontSize: "1.1rem", marginTop: "1px" }}>⚠️</span>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#92400E",
                    fontWeight: "600",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  반드시 <u>본인 소유의 채널</u>만 입력해주세요.
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#B45309",
                    marginTop: "2px",
                    margin: 0,
                  }}
                >
                  허위 입력 시 활동이 제한될 수 있습니다.
                </p>
              </div>
            </div>

            {/* Dynamic Inputs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              <label style={labelStyle}>
                활동 채널 URL <span style={{ color: "#EF4444" }}>*</span>
              </label>

              {channelError && (
                <p
                  style={{
                    marginBottom: "8px",
                    fontSize: "0.9rem",
                    color: "#EF4444",
                    fontWeight: "600",
                  }}
                >
                  {channelError}
                </p>
              )}

              {channelUrls.map((url, index) => (
                <div key={index} style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="url"
                    placeholder="https://instagram.com/my_account"
                    value={url}
                    onChange={(e) => handleChannelChange(index, e.target.value)}
                    style={{ ...activeInputStyle, flex: 1 }}
                    autoFocus={index === 0}
                  />
                  {channelUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveChannel(index)}
                      style={iconButtonStyle}
                      aria-label="Remove channel"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}

              {channelUrls.length < 3 && (
                <button
                  type="button"
                  onClick={handleAddChannel}
                  style={dashedButtonStyle}
                >
                  + 채널 추가하기
                </button>
              )}
            </div>

            {/* Bottom Action */}
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <button type="submit" style={primaryButtonStyle}>
                시작하기
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                style={secondaryButtonStyle}
              >
                이전 단계
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

// Design System Styles (Reusable & Token-based)
const h2Style: React.CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: "800",
  color: "#111827",
  marginBottom: "12px",
  lineHeight: "1.3",
  letterSpacing: "-0.01em",
};

const subtextStyle: React.CSSProperties = {
  fontSize: "1.05rem",
  color: "#6B7280",
  lineHeight: "1.6",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  fontSize: "0.95rem",
  color: "#374151",
  letterSpacing: "-0.01em",
};

const commonInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 20px",
  borderRadius: "16px",
  fontSize: "1rem",
  lineHeight: "1.5",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s, background-color 0.2s",
};

const disabledInputWrapperStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  background: "#F9FAFB",
  borderRadius: "16px",
  border: "1px solid #E5E7EB",
  paddingRight: "16px",
};

const disabledInputStyle: React.CSSProperties = {
  ...commonInputStyle,
  border: "none",
  background: "transparent",
  color: "#9CA3AF",
  cursor: "not-allowed",
  flex: 1,
};

const activeInputStyle: React.CSSProperties = {
  ...commonInputStyle,
  border: "1px solid #E5E7EB",
  background: "#FFFFFF",
  color: "#1F2937",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
};

const primaryButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "20px",
  borderRadius: "18px",
  background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
  color: "white",
  fontWeight: "700",
  fontSize: "1.1rem",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
  transition: "transform 0.1s active",
};

const secondaryButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  background: "transparent",
  color: "#6B7280",
  fontWeight: "600",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
  transition: "color 0.2s",
};

const dashedButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "2px dashed #E5E7EB",
  background: "transparent",
  color: "#6B7280",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.2s",
  marginTop: "8px",
};

const iconButtonStyle: React.CSSProperties = {
  width: "56px",
  height: "56px", // Match input height roughly
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  border: "1px solid #FEE2E2",
  background: "#FEF2F2",
  color: "#EF4444",
  cursor: "pointer",
  fontSize: "1.2rem",
  flexShrink: 0,
};

const warningBoxStyle: React.CSSProperties = {
  background: "#FFFBEB", // Amber-50 (Warn)
  border: "1px solid #FEF3C7", // Amber-100
  borderRadius: "14px",
  padding: "12px 16px", // Compact padding
  marginBottom: "32px",
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
};

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}
