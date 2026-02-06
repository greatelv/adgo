"use client";

import React from "react";
import SubPageHeader from "../../../components/layout/SubPageHeader";

export default function PrivacyPage() {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      <SubPageHeader title="개인정보 처리방침" />

      <div style={{ padding: "24px", color: "#4B5563", lineHeight: "1.7" }}>
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          제 1조 (목적)
        </h3>
        <p style={{ marginBottom: "24px" }}>
          본 약관은 서비스 제공자(이하 &quot;회사&quot;)가 제공하는 서비스의
          이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을
          목적으로 합니다.
        </p>

        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          제 2조 (개인정보 수집 항목)
        </h3>
        <p style={{ marginBottom: "24px" }}>
          회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를
          수집하고 있습니다.
          <br />- 수집항목 : 이름, 로그인ID, 비밀번호, 휴대전화번호, 이메일
        </p>

        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          제 3조 (개인정보의 보유 및 이용기간)
        </h3>
        <p>
          회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를
          지체 없이 파기합니다.
        </p>
      </div>
    </main>
  );
}
