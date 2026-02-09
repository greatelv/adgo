import type { Story } from "@ladle/react";
import Card from "./Card";

export const Default: Story = () => (
  <Card>
    <h2>기본 카드</h2>
    <p>디자인 토큰이 적용된 카드입니다.</p>
  </Card>
);

export const WithCustomPadding: Story = () => (
  <Card padding="40px">
    <h2>패딩 40px</h2>
    <p>패딩이 더 넓은 카드입니다.</p>
  </Card>
);

export const WithShadowOverride: Story = () => (
  <Card style={{ boxShadow: "var(--shadow-float)" }}>
    <h2>Floating Shadow</h2>
    <p>더 강한 그림자가 적용된 카드입니다.</p>
  </Card>
);
