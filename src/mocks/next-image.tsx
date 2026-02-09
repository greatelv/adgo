import React from "react";

const NextImage = ({
  src,
  alt,
  width,
  height,
  fill,
  style,
  className,
  ...props
}: any) => {
  // Handle Next.js Image logic loosely for preview
  const imgStyle = {
    ...style,
    width: width ? `${width}px` : fill ? "100%" : "auto",
    height: height ? `${height}px` : fill ? "100%" : "auto",
    objectFit: fill ? "cover" : undefined,
    position: fill ? "absolute" : undefined,
    inset: fill ? 0 : undefined,
  };

  // If src is an object (static import), use .src
  const actualSrc = typeof src === "object" && src?.src ? src.src : src;

  return (
    <img
      src={actualSrc}
      alt={alt || ""}
      style={imgStyle}
      className={className}
      {...props}
    />
  );
};

export default NextImage;
