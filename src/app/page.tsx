"use strict";

import React from "react";

export default function Home() {
  return (
    <main className="container">
      {/* Header */}
      <header
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backgroundColor: "var(--background)",
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--primary)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              color: "#000",
            }}
          >
            A
          </div>
          <span style={{ fontSize: "1.2rem", fontWeight: "800" }}>Adgo</span>
        </div>

        <div
          style={{
            background: "var(--surface-highlight)",
            padding: "6px 12px",
            borderRadius: "var(--radius-full)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ color: "var(--primary)", fontSize: "1.1rem" }}>ⓟ</span>
          <span style={{ fontWeight: "700" }}>35,000</span>
        </div>
      </header>

      {/* Filters */}
      <section
        style={{
          padding: "0 20px 20px",
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollbarWidth: "none",
        }}
      >
        <div className="chip active">All</div>
        <div className="chip">High Reward</div>
        <div className="chip">Social Media</div>
        <div className="chip">Blog Review</div>
      </section>

      {/* Quest List */}
      <section
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Card 1 */}
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span className="badge badge-recruit">Recruiting (3/10)</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              2h ago
            </span>
          </div>
          <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>
            Write a blog review for New Cafe
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginBottom: "16px",
            }}
          >
            Visit our new Seaside branch and write a detailed review with 5+
            photos.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span
                style={{
                  color: "var(--primary)",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                5,000 P
              </span>
            </div>
            <button
              className="btn-primary"
              style={{ padding: "8px 20px", fontSize: "0.9rem" }}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <span className="badge badge-recruit">Recruiting (9/10)</span>
              <span className="badge badge-urgent">Urgent</span>
            </div>
          </div>
          <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>
            Instagram Story for Energy Drink
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginBottom: "16px",
            }}
          >
            Post a story featuring our new can. Must tag @energy_boost.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span
                style={{
                  color: "var(--primary)",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                3,000 P
              </span>
            </div>
            <button
              className="btn-primary"
              style={{ padding: "8px 20px", fontSize: "0.9rem" }}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Card 3 (Closed) */}
        <div className="card" style={{ opacity: 0.6 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              className="badge"
              style={{ background: "#333", color: "#888" }}
            >
              Closed
            </span>
          </div>
          <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>
            App Store 5-star Rating
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginBottom: "16px",
            }}
          >
            Install and leave a positive review. Simple task!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                1,000 P
              </span>
            </div>
            <button
              disabled
              style={{
                background: "#333",
                color: "#666",
                border: "none",
                padding: "8px 20px",
                borderRadius: "999px",
                fontWeight: "bold",
              }}
            >
              Closed
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <span style={{ fontSize: "1.5rem" }}>🏠</span>
          <span>Home</span>
        </div>
        <div className="nav-item">
          <span style={{ fontSize: "1.5rem" }}>📂</span>
          <span>Activity</span>
        </div>
        <div className="nav-item">
          <span style={{ fontSize: "1.5rem" }}>💳</span>
          <span>Wallet</span>
        </div>
        <div className="nav-item">
          <span style={{ fontSize: "1.5rem" }}>👤</span>
          <span>Profile</span>
        </div>
      </nav>
    </main>
  );
}
