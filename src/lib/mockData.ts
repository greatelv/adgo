export interface Quest {
  id: string;
  title: string;
  subtitle?: string; // Legacy: kept for compatibility

  // New Structured Classification
  channel: string; // e.g. "App Store", "Web", "Instagram", "Discord"
  questType: string; // e.g. "베타테스트", "리뷰", "구독", "팔로우"

  category: "스토어" | "SNS" | "웹" | "커뮤니티" | "유튜브" | "기타";

  reward: string; // Changed to free text (e.g., "3만원 상당 기프티콘")
  // rawReward: removed or deprecated for MVP v2
  deadline?: string;
  status: "OPEN" | "CLOSED" | "URGENT";
  recruitStatus: string;
  description: string;
  tags: string[];
  colors: {
    iconBg: string;
    iconColor: string;
    priceBg: string;
    priceColor: string;
    progressGradient?: string;
  };
  progressValue?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  contactInfo?: {
    phone?: string;
    address?: string;
  };
  // Add other user properties as needed
}

export const MOCK_QUESTS: Quest[] = [
  {
    id: "1",
    title: "AI 노트 테이킹 앱 'SmartMemo' 베타 테스터 모집",
    subtitle: "초기 유저 피드백 • 버그 제보",
    channel: "App Store",
    questType: "베타테스트",
    category: "스토어",
    reward: "1만원 상당 네이버페이",
    deadline: "2024. 05. 01 마감",
    status: "OPEN",
    recruitStatus: "15/50명 지원중",
    progressValue: "30%",
    tags: ["#생산성앱", "#얼리어답터", "#베타테스트", "#IT리뷰"],
    colors: {
      iconBg: "#E0E7FF",
      iconColor: "#4F46E5",
      priceBg: "#EEF2FF",
      priceColor: "#4F46E5",
      progressGradient: "var(--primary-gradient)",
    },
    description: `
      <p>안녕하세요! AI 기반으로 회의록을 자동 정리해주는 <strong>스마트메모(SmartMemo)</strong> 개발팀입니다.</p>
      <p>정식 출시 전, 앱을 직접 사용해보고 솔직한 피드백을 남겨주실 베타 테스터를 찾습니다.</p>
      <br/>
      <div style="background: #EEF2FF; padding: 16px; border-radius: 12px; margin: 16px 0; border: 1px solid #E0E7FF;">
        <h3 style="margin: 0 0 12px 0; color: #4F46E5; font-size: 1.1rem;">🏃‍♂️ 미션 내용</h3>
        <ul style="padding-left: 20px; list-style-type: disc; margin: 0;">
          <li style="margin-bottom: 8px; color: #374151;">앱 설치 및 회원가입 진행</li>
          <li style="margin-bottom: 8px; color: #374151;">실제 회의/강의 녹음 기능 1회 이상 테스트</li>
          <li style="color: #374151;">사용 후기 및 개선 의견 구글 폼 제출</li>
        </ul>
      </div>
    `,
  },
  {
    id: "2",
    title: "인디게임 'Pixel Dungeon' 인스타그램 릴스 홍보",
    subtitle: "30초 내외 홍보 영상 제작",
    channel: "Instagram",
    questType: "영상 제작",
    category: "SNS",
    reward: "3만원 문화상품권",
    deadline: "2024. 04. 25 마감",
    status: "URGENT",
    recruitStatus: "마감 임박",
    progressValue: "80%",
    tags: ["#인디게임", "#영상제작", "#릴스", "#바이럴"],
    colors: {
      iconBg: "#FEE2E2",
      iconColor: "#EF4444",
      priceBg: "#FEF2F2",
      priceColor: "#EF4444",
      progressGradient: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)",
    },
    description: `
      <p>도트 그래픽의 향수! <strong>Pixel Dungeon</strong>의 재미있는 플레이 순간을 릴스로 만들어주세요.</p>
      <p>재치 있는 자막과 함께 게임의 핵심 재미를 30초 안에 담아주시면 됩니다.</p>
    `,
  },
  {
    id: "3",
    title: "개발자 뉴스레터 'TechMorning' 구독 인증",
    subtitle: "뉴스레터 구독 및 오픈 인증",
    channel: "뉴스레터",
    questType: "구독",
    category: "웹",
    reward: "스타벅스 아메리카노",
    deadline: "상시 모집",
    status: "OPEN",
    recruitStatus: "42/100명 지원중",
    progressValue: "42%",
    tags: ["#뉴스레터", "#개발자", "#트렌드", "#지식공유"],
    colors: {
      iconBg: "#F3F4F6",
      iconColor: "#374151",
      priceBg: "#F9FAFB",
      priceColor: "#374151",
      progressGradient: "linear-gradient(135deg, #4B5563 0%, #1F2937 100%)",
    },
    description: `
      <p>매일 아침 배달되는 IT 트렌드, <strong>TechMorning</strong>을 구독해보세요.</p>
      <p>구독 후 완료 페이지 혹은 확인 메일을 캡처하여 인증해 주세요.</p>
    `,
  },
  {
    id: "4",
    title: "SaaS 랜딩페이지 UX 설문조사 참여",
    subtitle: "5분 내외 구글 폼 답변",
    channel: "Web",
    questType: "설문조사",
    category: "웹",
    reward: "2천원 편의점 쿠폰",
    deadline: "2024. 04. 30 마감",
    status: "CLOSED",
    recruitStatus: "50/50명 마감",
    progressValue: "100%",
    tags: ["#UX리서치", "#설문조사", "#피드백"],
    colors: {
      iconBg: "#ECFCCB",
      iconColor: "#65A30D",
      priceBg: "#F7FEE7",
      priceColor: "#65A30D",
      progressGradient: "none",
    },
    description:
      "<p>대상 인원이 모두 모집되어 마감되었습니다. 참여해주셔서 감사합니다.</p>",
  },
  {
    id: "5",
    title: "에브리타임 '알바몬' 홍보 게시글 작성",
    subtitle: "자게/정보게시판 홍보글",
    channel: "Everytime",
    questType: "홍보글 작성",
    category: "커뮤니티",
    reward: "5천원 배민 쿠폰",
    deadline: "선착순 마감",
    status: "OPEN",
    recruitStatus: "12/20명 지원중",
    progressValue: "60%",
    tags: ["#알바몬", "#에브리타임", "#꿀알바", "#홍보"],
    colors: {
      iconBg: "#FCE7F3",
      iconColor: "#EC4899",
      priceBg: "#FFF1F2",
      priceColor: "#BE123C",
      progressGradient: "var(--secondary-gradient)",
    },
    description: `
      <p>에브리타임 내 게시판에 <strong>알바몬</strong>의 신규 이벤트를 자연스럽게 홍보해 주세요.</p>
      <p>작성한 게시글의 URL 또는 캡처본을 제출해 주시면 됩니다.</p>
    `,
  },
];

export const getQuestById = (id: string): Quest | undefined => {
  return MOCK_QUESTS.find((q) => q.id === id);
};

export const MOCK_NOTICES = [
  { id: 1, title: "[공지] 플랫폼 정식 서비스 오픈 안내", date: "2024.04.01" },
  {
    id: 2,
    title: "[이벤트] 신규 가입자 3일 무제한 패스 지급!",
    date: "2024.04.05",
  },
  { id: 3, title: "[업데이트] 다크 모드 지원 예정 안내", date: "2024.04.10" },
];

export const MOCK_FAQ = [
  {
    id: 1,
    question: "Q. 포인트는 언제 지급되나요?",
    answer: "퀘스트 완료 후 검수 기간(최대 24시간) 내에 지급됩니다.",
  },
  {
    id: 2,
    question: "Q. 출금 신청은 얼마부터 가능한가요?",
    answer: "최소 10,000 P 부터 1,000 P 단위로 신청 가능합니다.",
  },
  {
    id: 3,
    question: "Q. 퀘스트 참여 횟수에 제한이 있나요?",
    answer: "아니요, 오픈된 퀘스트는 제한 없이 참여하실 수 있습니다!",
  },
];
