"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import SubPageHeader from "../../../components/layout/SubPageHeader";
import { useAuth } from "../../../context/AuthContext";

export default function InquiryPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(`/login?returnUrl=${pathname}`);
    }
  }, [isLoggedIn, router, pathname]);

  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      <SubPageHeader title="1:1 문의하기" />

      <div style={{ padding: "24px" }}>
        <p style={{ color: "#6B7280", marginBottom: "24px" }}>
          궁금한 점이나 건의사항이 있으시면 아래 폼을 작성해주세요.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              제목
            </label>
            <input
              type="text"
              placeholder="문의 제목을 입력해주세요"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "1rem",
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
              내용
            </label>
            <textarea
              rows={6}
              placeholder="문의 내용을 자세히 적어주세요"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "1rem",
                resize: "none",
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
            }}
          >
            문의 접수하기
          </button>
        </form>
      </div>
    </main>
  );
}
