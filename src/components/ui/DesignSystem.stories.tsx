import type { Story } from "@ladle/react";

export const TokenShowcase: Story = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      paddingBottom: "100px",
    }}
  >
    {/* 1. Color Palette */}
    <section>
      <h1
        style={{
          fontSize: "var(--text-3xl)",
          fontWeight: "var(--weight-bold)",
          marginBottom: "24px",
        }}
      >
        Design Tokens
      </h1>

      <h2
        style={{
          fontSize: "var(--text-xl)",
          fontWeight: "var(--weight-bold)",
          marginBottom: "16px",
        }}
      >
        1. Semantic Colors
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          {
            name: "Primary Gradient",
            var: "--primary-gradient",
            bg: "var(--primary-gradient)",
          },
          {
            name: "Primary Solid",
            var: "--primary-solid",
            bg: "var(--primary-solid)",
          },
          {
            name: "Secondary (Brand)",
            var: "--secondary-600",
            bg: "var(--secondary-600)",
          },
          {
            name: "Background",
            var: "--bg-gradient",
            bg: "var(--bg-gradient)",
            border: true,
          },
        ].map((c) => (
          <div key={c.name}>
            <div
              style={{
                height: "80px",
                background: c.bg,
                borderRadius: "var(--radius-md)",
                marginBottom: "8px",
                boxShadow: "var(--shadow-sm)",
                border: c.border ? "1px solid var(--neutral-200)" : "none",
              }}
            ></div>
            <div
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-bold)",
              }}
            >
              {c.name}
            </div>
            <div
              style={{ fontSize: "var(--text-xs)", color: "var(--text-light)" }}
            >
              var({c.var})
            </div>
          </div>
        ))}
      </div>

      <h3
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: "var(--weight-semibold)",
          margin: "24px 0 16px",
        }}
      >
        Status Colors
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "16px",
        }}
      >
        {[
          {
            name: "Success",
            var: "--status-success",
            bg: "var(--status-success)",
          },
          { name: "Info", var: "--status-info", bg: "var(--status-info)" },
          {
            name: "Urgent (Pink)",
            var: "--status-urgent",
            bg: "var(--status-urgent)",
          },
          { name: "Warning", var: "--status-warn", bg: "var(--status-warn)" },
          { name: "Error", var: "--status-error", bg: "var(--status-error)" },
        ].map((c) => (
          <div key={c.name}>
            <div
              style={{
                height: "60px",
                background: c.bg,
                borderRadius: "var(--radius-md)",
                marginBottom: "8px",
              }}
            ></div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-bold)",
              }}
            >
              {c.name}
            </div>
            <div
              style={{ fontSize: "var(--text-xs)", color: "var(--text-light)" }}
            >
              var({c.var})
            </div>
          </div>
        ))}
      </div>

      <h3
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: "var(--weight-semibold)",
          margin: "24px 0 16px",
        }}
      >
        Neutrals
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
          <div key={n} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                background: `var(--neutral-${n})`,
                borderRadius: "var(--radius-sm)",
                marginBottom: "8px",
                border: n < 300 ? "1px solid #eee" : "none",
              }}
            ></div>
            <div style={{ fontSize: "10px", fontWeight: "bold" }}>{n}</div>
          </div>
        ))}
      </div>
    </section>

    {/* 2. Typography */}
    <section>
      <h2
        style={{
          fontSize: "var(--text-xl)",
          fontWeight: "var(--weight-bold)",
          marginBottom: "16px",
        }}
      >
        2. Typography
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px",
          background: "var(--surface-white)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div
          style={{
            fontSize: "var(--text-3xl)",
            fontWeight: "var(--weight-bold)",
          }}
        >
          Heading 3XL (Bold)
        </div>
        <div
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: "var(--weight-bold)",
          }}
        >
          Heading 2XL (Bold)
        </div>
        <div
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--weight-bold)",
          }}
        >
          Heading XL (Bold)
        </div>
        <div
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--weight-semibold)",
          }}
        >
          Subtitle LG (Semibold)
        </div>
        <div
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--weight-medium)",
          }}
        >
          Body Base (Medium)
        </div>
        <div
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--weight-regular)",
          }}
        >
          Body Base (Regular)
        </div>
        <div style={{ fontSize: "var(--text-sm)", color: "var(--text-grey)" }}>
          Caption SM (Grey)
        </div>
        <div style={{ fontSize: "var(--text-xs)", color: "var(--text-light)" }}>
          Small XS (Light)
        </div>
      </div>
    </section>

    {/* 3. Radius & Spacing */}
    <section>
      <h2
        style={{
          fontSize: "var(--text-xl)",
          fontWeight: "var(--weight-bold)",
          marginBottom: "16px",
        }}
      >
        3. Shape & Layout
      </h2>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {/* Radius */}
        <div>
          <h4
            style={{
              marginBottom: "12px",
              fontSize: "var(--text-sm)",
              color: "var(--text-grey)",
            }}
          >
            Border Radius
          </h4>
          <div style={{ display: "flex", gap: "16px" }}>
            {["sm", "md", "button", "card", "pill"].map((r) => (
              <div
                key={r}
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--primary-100)",
                  color: "var(--primary-700)",
                  borderRadius: `var(--radius-${r})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  border: "2px solid var(--primary-200)",
                }}
              >
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* Shadows */}
        <div>
          <h4
            style={{
              marginBottom: "12px",
              fontSize: "var(--text-sm)",
              color: "var(--text-grey)",
            }}
          >
            Shadows
          </h4>
          <div style={{ display: "flex", gap: "24px" }}>
            {["sm", "card", "float", "glow"].map((s) => (
              <div
                key={s}
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--surface-white)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  boxShadow: `var(--shadow-${s})`,
                  color: "var(--neutral-600)",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 4. Surfaces */}
    <section>
      <h2
        style={{
          fontSize: "var(--text-xl)",
          fontWeight: "var(--weight-bold)",
          marginBottom: "16px",
        }}
      >
        4. Surfaces (Glassmorphism)
      </h2>
      <div
        style={{
          padding: "40px",
          background:
            "var(--bg-gradient)" /* Ensure we have a bg to blur against */,
          borderRadius: "var(--radius-card)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blobs to demonstrate glass */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50px",
            width: "100px",
            height: "100px",
            background: "#f472b6",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "50px",
            width: "120px",
            height: "120px",
            background: "#6366f1",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              padding: "24px",
              borderRadius: "var(--radius-card)",
              background: "var(--surface-white)",
              flex: 1,
            }}
          >
            <strong>White Surface</strong>
            <p style={{ fontSize: "12px", marginTop: "8px" }}>
              Solid white background.
            </p>
          </div>
          <div
            style={{
              padding: "24px",
              borderRadius: "var(--radius-card)",
              background: "var(--surface-translucent)",
              backdropFilter: "blur(10px)",
              flex: 1,
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <strong>Translucent</strong>
            <p style={{ fontSize: "12px", marginTop: "8px" }}>
              Glass effect with blur.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
