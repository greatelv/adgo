import React from "react";

export default function GlobalBackground() {
  return (
    <div
      className="global-background-container"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Background Blobs reusing the global CSS classes */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
    </div>
  );
}
