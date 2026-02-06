import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string; // For margin/padding helpers
}

export default function Logo({
  width = 90,
  height = 30,
  priority = false,
  className,
}: LogoProps) {
  return (
    <Image
      src="/logo-adgo.svg"
      alt="App Logo"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
