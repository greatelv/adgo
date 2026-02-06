"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type ToastType = "success" | "error" | "info";

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "90%",
          maxWidth: "400px",
          pointerEvents: "none", // Allow clicks through container
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              padding: "16px 20px",
              borderRadius: "16px",
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              animation: "slideDown 0.3s cubic-bezier(0.2, 0, 0, 1)",
              border: "1px solid rgba(0,0,0,0.05)",
              pointerEvents: "auto",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              {toast.type === "success"
                ? "✅"
                : toast.type === "error"
                  ? "🚨"
                  : "ℹ️"}
            </span>
            <span
              style={{
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#1F2937",
                lineHeight: "1.4",
              }}
            >
              {toast.message}
            </span>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
