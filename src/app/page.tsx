"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0F172A",
        color: "#F8FAFC",
        fontFamily: "Inter, sans-serif",
        gap: 48,
        padding: 48,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 64, fontWeight: 800, margin: 0, letterSpacing: -1 }}>AI Stack videos</h1>
        <p style={{ marginTop: 12, fontSize: 20, color: "#94A3B8" }}>
          Editframe compositions for the Centaur videos.
        </p>
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {[
          { href: "/personal", title: "Personal AI Stack", sub: "Runner · Obsidian · Co-typist · Codex", color: "#3DA8A0" },
          { href: "/personal-white-label", title: "Personal White Label", sub: "Public-safe · generic personal AI OS", color: "#A78BFA" },
          { href: "/work",     title: "Centaur for WF",    sub: "Multiplayer agents · iron-proxy · perms", color: "#06B6D4" },
          { href: "/centaur-white-label", title: "Centaur White Label", sub: "Public-safe · generic workflows · X-ready", color: "#E97862" },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            style={{
              display: "block",
              padding: "32px 40px",
              background: "#1E293B",
              border: `1px solid ${card.color}40`,
              borderRadius: 12,
              textDecoration: "none",
              color: "#F8FAFC",
              minWidth: 360,
              transition: "border-color 0.2s",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700, color: card.color }}>{card.title}</div>
            <div style={{ marginTop: 8, fontSize: 14, color: "#94A3B8" }}>{card.sub}</div>
            <div style={{ marginTop: 16, fontSize: 12, color: "#64748B", letterSpacing: 4 }}>OPEN  →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
