"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phoneNumber?: string;
  channels?: string[];
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (provider: "google" | "naver", redirectUrl?: string) => void;
  logout: () => void;
  completeOnboarding: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Initialize from generic storage or just default to logged out for MVP demo
  // For now, we start logged out to demonstrate the flow

  const login = (provider: "google" | "naver", redirectUrl = "/") => {
    // Mock Login
    const mockUser: User = {
      id: "u1",
      name: "Kei",
      email: "kei@example.com",
      avatar: "K",
    };
    setUser(mockUser);

    // Simulate slight delay for realism then redirect
    setTimeout(() => {
      router.push(redirectUrl);
    }, 500);
  };

  const logout = () => {
    setUser(null);
    router.push("/");
  };

  const completeOnboarding = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, logout, completeOnboarding }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
