"use client";

import type { CSSProperties, ReactNode } from "react";
import { Image, Text, Timegroup } from "@editframe/react";
import { WF } from "../_shared/chrome";
import "../_shared/animations.css";

// ============================================================================
// Personal AI Stack white-label: public-safe version.
// Same visual language, no organization chrome and no private screenshots/data.
// ============================================================================

const HEAD = "Inter Tight, Inter, sans-serif";
const BODY = "Inter, sans-serif";
const MONO = "JetBrains Mono, monospace";

const LOGO = {
  runner: "/assets/logos/si-runner_now.png",
  obsidian: "/assets/logos/si-obsidian.png",
  cotypist: "/assets/logos/si-cotypist_app.png",
  openai: "/assets/logos/si-openai.png",
  cloudflare: "/assets/logos/si-cloudflare.png",
  supabase: "/assets/logos/si-supabase.png",
  gmail: "/assets/logos/si-gmail.png",
  gcal: "/assets/logos/si-googlecalendar.png",
  slack: "/assets/logos/si-slack.png",
  github: "/assets/logos/si-github.png",
  notion: "/assets/logos/si-notion.png",
  chrome: "/assets/logos/si-googlechrome.png",
  telegram: "/assets/logos/si-telegram.png",
  whatsapp: "/assets/logos/si-whatsapp.png",
  linkedin: "/assets/logos/si-linkedin.png",
};

const SCENE = { width: 1920, height: 1080 };
const TOTAL = 21;

const DUR = {
  title: "11s",
  agenda: "11s",
  section: "10s",
  runnerSection: "9s",
  layers: "13s",
  runner: "12s",
  obsidian: "12s",
  built: "12s",
  portal: "12s",
  cotypist: "11s",
  codex: "11s",
  fit: "12s",
  workflow: "12s",
  rails: "11s",
  demo: "12s",
  closing: "10s",
};

type DashboardScreen = {
  label: string;
  metric: string;
  detail: string;
  mode: "image" | "table" | "cards" | "network" | "folded" | "full";
  src?: string;
  aspect?: number;
  duration?: string;
};

const DASHBOARD_SCREENS: DashboardScreen[] = [
  {
    label: "Contacts",
    metric: "Unified relationships",
    detail: "Private contact data redacted, but the shape of the interface is real.",
    mode: "image",
    src: "/assets/screenshots/personal-white-label-contacts.png",
    aspect: 2822 / 2286,
    duration: "12s",
  },
  { label: "Media queue", metric: "Saved knowledge", detail: "Videos, books, podcasts and notes become searchable input for agents.", mode: "cards", duration: "12s" },
  { label: "Network graph", metric: "Social graph", detail: "Ranked relationships, research targets and outreach paths become legible.", mode: "network", duration: "10s" },
  { label: "Folded knowledge graph", metric: "Folder-level map", detail: "A clean overview of the knowledge base before diving into individual notes.", mode: "folded", duration: "11s" },
  { label: "Full knowledge graph", metric: "Note-level links", detail: "Dense clusters expose the real connections inside the personal operating system.", mode: "full", duration: "11s" },
];

function existingFocus({
  border = "transparent",
  focus = WF.accentTeal,
  delay,
  baseAnimation,
  shadow = "none",
}: {
  border?: string;
  focus?: string;
  delay?: number;
  baseAnimation?: string;
  shadow?: string;
}): CSSProperties {
  const focusAnimation = delay === undefined ? "" : `3.1s cubic-bezier(0.22,1,0.36,1) wf-existing-focus ${delay}s both`;
  return {
    "--wf-base-border": border,
    "--wf-base-shadow": shadow,
    "--wf-focus-color": focus,
    animation: [baseAnimation, focusAnimation].filter(Boolean).join(", "),
  } as CSSProperties;
}

function textFocus(color: string, delay: number, baseAnimation?: string): CSSProperties {
  return {
    "--wf-focus-color": color,
    animation: [baseAnimation, `2.8s cubic-bezier(0.22,1,0.36,1) wf-inline-focus ${delay}s both`].filter(Boolean).join(", "),
  } as CSSProperties;
}

function textGrow(delay: number, baseAnimation?: string): CSSProperties {
  return {
    transformOrigin: "left center",
    animation: [baseAnimation, `2.8s cubic-bezier(0.22,1,0.36,1) wf-text-grow ${delay}s both`].filter(Boolean).join(", "),
  };
}

function Scene({
  duration,
  pageNum,
  dark = false,
  children,
}: {
  duration: string;
  pageNum?: number;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <Timegroup mode="fixed" duration={duration} style={{ position: "absolute", inset: 0, background: dark ? WF.inkDark : WF.cream }}>
      <WhiteLabelChrome duration={duration} dark={dark} pageNum={pageNum} total={TOTAL} />
      {children}
    </Timegroup>
  );
}

function WhiteLabelChrome({ duration, dark = false, pageNum, total }: { duration: string; dark?: boolean; pageNum?: number; total?: number }) {
  const tone = dark ? WF.cream : WF.ink;
  return (
    <>
      <Text duration={duration} style={{ position: "absolute", top: 62, left: 72, fontFamily: BODY, fontSize: 22, letterSpacing: 5, color: tone }}>
        AI OS
      </Text>
      <Text duration={duration} style={{ position: "absolute", top: 76, right: 72, width: 560, fontFamily: BODY, fontSize: 22, letterSpacing: 5, color: tone, lineHeight: 1, textAlign: "right", whiteSpace: "nowrap" }}>
        PUBLIC DEMO  ·  2026
      </Text>
      {pageNum && total ? (
        <Text duration={duration} style={{ position: "absolute", bottom: 56, right: 72, width: 140, fontFamily: BODY, fontSize: 22, color: dark ? WF.accentSand : WF.gray, lineHeight: 1, textAlign: "right", whiteSpace: "nowrap" }}>
          {pageNum} / {total}
        </Text>
      ) : null}
    </>
  );
}

function TitleHead({
  duration,
  title,
  subtitle,
  top = 180,
  dark = false,
}: {
  duration: string;
  title: string;
  subtitle?: string;
  top?: number;
  dark?: boolean;
}) {
  return (
    <div style={{ position: "absolute", top, left: 80, right: 80 }}>
      <Text duration={duration} style={{
        fontFamily: HEAD,
        fontSize: 76,
        fontWeight: 800,
        color: dark ? WF.cream : WF.ink,
        lineHeight: 1.04,
        animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both",
      }}>
        {title}
      </Text>
      {subtitle ? (
        <Text duration={duration} style={{
          marginTop: 16,
          fontFamily: BODY,
          fontSize: 28,
          color: dark ? WF.accentSand : WF.gray,
          animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up 0.15s both",
        }}>
          {subtitle}
        </Text>
      ) : null}
    </div>
  );
}

function BulletLine({
  duration,
  bold,
  rest,
  delay,
  accent = WF.accentTeal,
  dark = false,
}: {
  duration: string;
  bold: string;
  rest: string;
  delay: number;
  accent?: string;
  dark?: boolean;
}) {
  return (
    <li style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 18,
      marginBottom: 22,
      opacity: 0,
      animation: `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${delay - 1.4}s both`,
    } as CSSProperties}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: accent, marginTop: 14, flex: "0 0 auto" }} />
      <Text duration={duration} style={{
        fontFamily: BODY,
        fontSize: 29,
        color: dark ? WF.accentSand : WF.inkSoft,
        lineHeight: 1.35,
        ...textGrow(delay),
      }}>
        <span style={{ fontWeight: 800, color: dark ? WF.cream : WF.ink }}>{bold}</span>
        {rest}
      </Text>
    </li>
  );
}

function LogoTitle({
  duration,
  logo,
  title,
  subtitle,
  accent = WF.accentTeal,
  logoDelay = 1.2,
}: {
  duration: string;
  logo: string;
  title: string;
  subtitle: string;
  accent?: string;
  logoDelay?: number;
}) {
  return (
    <div style={{ position: "absolute", top: 185, left: 80, right: 80 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
        <Image duration={duration} src={logo} style={{
          width: 136,
          height: 136,
          objectFit: "contain",
          animation: "0.7s cubic-bezier(0.34,1.56,0.64,1) wf-pop-in both",
        }} />
        <Text split="char" duration={duration} staggerMs={32} style={{ fontFamily: HEAD, fontSize: 96, fontWeight: 800, color: WF.ink, lineHeight: 1 }}>
          <template className="wf-stagger" />
          {title}
        </Text>
      </div>
      <Text duration={duration} style={{
        marginTop: 24,
        fontFamily: BODY,
        fontSize: 28,
        color: WF.gray,
        animation: "0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-up 0.5s both",
      }}>
        {subtitle}
      </Text>
    </div>
  );
}

function Card({
  duration,
  children,
  delay,
  focusDelay,
  focus = WF.accentTeal,
  dark = false,
  style,
}: {
  duration: string;
  children: ReactNode;
  delay: number;
  focusDelay: number;
  focus?: string;
  dark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div style={{
      padding: 26,
      background: dark ? WF.inkDark : WF.accentSand,
      border: `2px solid ${dark ? WF.inkDark : WF.rule}`,
      opacity: 0,
      ...existingFocus({
        border: dark ? WF.inkDark : WF.rule,
        focus,
        delay: focusDelay,
        baseAnimation: `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${delay}s both`,
      }),
      ...style,
    } as CSSProperties}>
      {children}
      <span style={{ display: "none" }}>{duration}</span>
    </div>
  );
}

function TitleScene() {
  const duration = DUR.title;
  return (
    <Scene duration={duration}>
      <div style={{ position: "absolute", top: 280, left: 80, right: 80 }}>
        <Text split="word" duration={duration} staggerMs={80} style={{
          fontFamily: HEAD,
          fontSize: 188,
          fontWeight: 800,
          color: WF.ink,
          lineHeight: 1.02,
        }}>
          <template className="wf-stagger" />
          AI for daily life
        </Text>
        <Text duration={duration} style={{
          marginTop: 24,
          fontFamily: BODY,
          fontSize: 44,
          color: WF.inkSoft,
          animation: "1s cubic-bezier(0.22,1,0.36,1) wf-fade-up 0.5s both",
        }}>
          the personal stack I run on
        </Text>
      </div>
      <Text duration={duration} style={{ position: "absolute", bottom: 60, left: 80, fontFamily: BODY, fontSize: 32, color: WF.ink }}>
        24.05.2026
      </Text>
      <Text duration={duration} style={{ position: "absolute", bottom: 60, right: 80, fontFamily: BODY, fontSize: 32, color: WF.ink }}>
        public template
      </Text>
    </Scene>
  );
}

function AgendaScene() {
  const duration = DUR.agenda;
  const items = [
    "Mental model: three concentric layers",
    "Runner: chief-of-staff",
    "Obsidian: second brain · LLM-wiki",
    "Public surface: site + APIs",
    "Personal dashboard: local control center",
    "Co-typist: on-device autocomplete",
    "Codex: agentic coding harness",
    "Runner workflow: request → filed learnings",
    "Demo plan",
  ];
  return (
    <Scene duration={duration} pageNum={2}>
      <TitleHead duration={duration} title="Agenda" top={180} />
      <div style={{ position: "absolute", top: 360, left: 80, right: 80 }}>
        {items.map((item, i) => (
          <div key={item} style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr",
            alignItems: "baseline",
            marginBottom: 15,
            opacity: 0,
            animation: `0.45s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${0.45 + i * 0.12}s both`,
          }}>
            <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 34, fontWeight: 800, color: WF.accentTeal }}>{i + 1}.</Text>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 37, lineHeight: 1.15, color: WF.ink, ...textGrow(2.1 + i * 0.85) }}>
              {item}
            </Text>
          </div>
        ))}
      </div>
    </Scene>
  );
}

function SectionDividerScene({ number, label, pageNum, duration = DUR.section }: { number: number; label: string; pageNum: number; duration?: string }) {
  return (
    <Scene duration={duration} dark pageNum={pageNum}>
      <Text duration={duration} style={{
        position: "absolute",
        left: 80,
        top: 350,
        fontFamily: HEAD,
        fontSize: 168,
        fontWeight: 800,
        color: WF.accentTeal,
        lineHeight: 1,
        animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both",
      }}>
        {number}
      </Text>
      <Text split="word" duration={duration} staggerMs={70} style={{
        position: "absolute",
        left: 260,
        top: 375,
        fontFamily: HEAD,
        fontSize: 108,
        fontWeight: 800,
        color: WF.cream,
        lineHeight: 1,
      }}>
        <template className="wf-stagger" />
        {label}
      </Text>
    </Scene>
  );
}

function LayersScene() {
  const duration = DUR.layers;
  const cx = 460;
  const cy = 680;
  const rings = [
    { r: 280, color: WF.accentNavy, alpha: 0.55, delay: 0, focusDelay: 9.4 },
    { r: 190, color: WF.accentTeal, alpha: 0.6, delay: 0.2, focusDelay: 5.8 },
    { r: 95, color: WF.accentCoral, alpha: 0.8, delay: 0.4, focusDelay: 2.1 },
  ];
  return (
    <Scene duration={duration} pageNum={4}>
      <TitleHead duration={duration} title="Three concentric layers" subtitle="Same primitives: personal first, then a scoped subset for the team via Centaur." top={170} />
      {rings.map((r, i) => (
        <div key={i} style={{
          position: "absolute",
          top: cy - r.r,
          left: cx - r.r,
          width: r.r * 2,
          height: r.r * 2,
          borderRadius: "50%",
          border: "4px solid transparent",
          background: r.color,
          opacity: r.alpha,
          ...existingFocus({
            focus: r.color,
            delay: r.focusDelay,
            baseAnimation: `0.7s cubic-bezier(0.22,1,0.36,1) wf-grow-rings ${r.delay}s both`,
          }),
        } as CSSProperties} />
      ))}
      {[
        { y: cy - 14, text: "Context" },
        { y: cy - 150, text: "Agents" },
        { y: cy - 260, text: "Team" },
      ].map((l, i) => (
        <Text key={i} duration={duration} style={{
          position: "absolute",
          top: l.y,
          left: cx - 120,
          width: 240,
          textAlign: "center",
          fontFamily: HEAD,
          fontWeight: 700,
          fontSize: 26,
          color: WF.cream,
          animation: `0.5s cubic-bezier(0.22,1,0.36,1) wf-fade-in ${0.8 + i * 0.15}s both`,
        }}>
          {l.text}
        </Text>
      ))}
      <div style={{ position: "absolute", top: 360, left: 1000, width: 800 }}>
        {[
          { t: "Context layer", b: "Obsidian vault · agent memory · public surface: facts about work, projects, finances and notes.", delay: 2.1 },
          { t: "Personal agent layer", b: "Runner as chief-of-staff. Codex as the coding harness. Co-typist at the keystroke layer.", delay: 5.8 },
          { t: "Team agent layer", b: "A company Slack agent: a curated subset of these abilities with proper permissioning.", delay: 9.4 },
        ].map((it, i) => (
          <div key={it.t} style={{
            padding: "10px 14px",
            marginBottom: 28,
            opacity: 0,
            animation: `0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${1.2 + i * 0.3}s both`,
          }}>
            <Text duration={duration} style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 32, color: WF.ink, ...textGrow(it.delay) }}>
              {it.t}
            </Text>
            <Text duration={duration} style={{ marginTop: 6, fontFamily: BODY, fontSize: 22, color: WF.inkSoft }}>
              {it.b}
            </Text>
          </div>
        ))}
      </div>
    </Scene>
  );
}

function RunnerScene() {
  const duration = DUR.runner;
  const surfaces = [
    [LOGO.gmail, "Mailboxes"],
    [LOGO.gcal, "Calendars"],
    [LOGO.slack, "Slack"],
    [LOGO.telegram, "Telegram"],
    [LOGO.whatsapp, "WhatsApp"],
    [LOGO.linkedin, "LinkedIn"],
    [LOGO.github, "GitHub"],
    [LOGO.chrome, "Chrome + Zoom"],
    [LOGO.supabase, "Supabase"],
    [LOGO.notion, "Notion + Granola"],
  ];
  return (
    <Scene duration={duration} pageNum={6}>
      <LogoTitle duration={duration} logo={LOGO.runner} title="Runner" accent={WF.accentTeal} subtitle="chief-of-staff agent: Anthropic SDK + MCP, persistent file memory, scheduled automations" />
      <ul style={{ position: "absolute", top: 410, left: 80, width: 835, listStyle: "none", padding: 0, margin: 0 }}>
        <BulletLine duration={duration} bold="Drafts replies" rest=", books meetings, runs research." delay={2.0} />
        <BulletLine duration={duration} bold="Persistent memory" rest=" ~/.runner/memory/: user, feedback, project, references." delay={4.4} />
        <BulletLine duration={duration} bold="Skills" rest=" inbox-triage · morning-briefing · meeting-prep · investor-updates · weekly-review." delay={6.8} />
        <BulletLine duration={duration} bold="Action cards" rest=": no silent outbound sends." delay={9.2} />
      </ul>
      <div style={{ position: "absolute", top: 420, left: 1000, width: 780 }}>
        <Text duration={duration} style={{ fontFamily: BODY, fontSize: 18, fontWeight: 800, letterSpacing: 4, color: WF.gray, marginBottom: 22 }}>
          Connected surfaces
        </Text>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {surfaces.map(([icon, label], i) => (
            <Card key={label} duration={duration} delay={0.8 + i * 0.08} focusDelay={2.5 + i * 0.74} focus={i % 2 ? WF.accentCoral : WF.accentTeal} style={{ minHeight: 74, padding: 14, display: "flex", alignItems: "center", gap: 16 }}>
              <Image duration={duration} src={icon} style={{ width: 42, height: 42, objectFit: "contain" }} />
              <Text duration={duration} style={{ fontFamily: BODY, fontSize: 21, fontWeight: 700, color: WF.ink }}>
                {label}
              </Text>
            </Card>
          ))}
        </div>
      </div>
      <Text duration={duration} style={{ position: "absolute", left: 80, bottom: 82, fontFamily: MONO, fontSize: 20, fontStyle: "italic", color: WF.gray }}>
        runner.now/download/s3sx69
      </Text>
    </Scene>
  );
}

function ObsidianScene() {
  const duration = DUR.obsidian;
  const groups = [
    { label: "Capture", color: WF.accentCoral, folders: "raw/\nClippings/\nMeeting Transcripts/", notes: "daily notes, journals\nsaved references\ncalls and notes" },
    { label: "Wiki layer", color: WF.accentTeal, folders: "wiki/\nKnowledge/\nPeople/", notes: "canonical entities\nevergreen notes\nrelationship graph" },
    { label: "Work graph", color: WF.accentNavy, folders: "Projects/\nContent/\nCompany/", notes: "active work\npublished surface\nteam context" },
    { label: "Personal ops", color: WF.gray, folders: "Finance/\nInvesting/\nHealth/", notes: "cashflow, docs\nportfolio memory\nlongitudinal data" },
  ];
  return (
    <Scene duration={duration} pageNum={8}>
      <LogoTitle duration={duration} logo={LOGO.obsidian} title="Obsidian" accent={WF.accentNavy} subtitle="second brain · LLM-wiki: plain markdown so every agent can read & write the same files" />
      <ul style={{ position: "absolute", top: 430, left: 80, width: 780, listStyle: "none", padding: 0, margin: 0 }}>
        <BulletLine duration={duration} bold="Plain markdown" rest=": every agent can read + write the same files." delay={2.2} accent={WF.ink} />
        <BulletLine duration={duration} bold="Git-backed" rest=": agents never lose work." delay={4.6} accent={WF.ink} />
        <BulletLine duration={duration} bold="Wikilinks" rest=" make context navigable across topics." delay={7.0} accent={WF.ink} />
        <BulletLine duration={duration} bold="Karpathy's LLM-wiki pattern" rest=" (see CLAUDE.md schema)." delay={9.2} accent={WF.ink} />
      </ul>
      <Card duration={duration} delay={0.8} focusDelay={6.2} focus={WF.accentTeal} style={{ position: "absolute", top: 395, left: 980, width: 820, minHeight: 450, background: "#FFFFFF" }}>
        <Text duration={duration} style={{ fontFamily: BODY, fontSize: 18, fontWeight: 800, letterSpacing: 5, color: WF.gray, marginBottom: 24 }}>
          Top-level structure
        </Text>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {groups.map((g, i) => (
            <div key={g.label} style={{
              minHeight: 150,
              padding: "16px 16px 16px 22px",
              background: WF.cream,
              border: `2px solid ${WF.rule}`,
              borderLeft: `8px solid ${g.color}`,
              opacity: 0,
              animation: `0.45s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${1.1 + i * 0.15}s both`,
            }}>
              <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 18, fontWeight: 800, color: WF.ink, marginBottom: 12 }}>
                {g.label}
              </Text>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Text duration={duration} style={{ whiteSpace: "pre-line", fontFamily: MONO, fontSize: 17, fontWeight: 800, lineHeight: 1.35, color: WF.ink }}>
                  {g.folders}
                </Text>
                <Text duration={duration} style={{ whiteSpace: "pre-line", fontFamily: BODY, fontSize: 16, lineHeight: 1.35, color: WF.inkSoft }}>
                  {g.notes}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Scene>
  );
}

function BuiltSurfaceScene() {
  const duration = DUR.built;
  const cards = [
    {
      brand: "Public surface",
      icon: LOGO.cloudflare,
      focus: WF.accentCoral,
      items: [
        "Personal site, writing, projects and lightweight APIs",
        "Structured database tables for repeatable agent writes",
        "Object storage for assets, documents and generated files",
        "Skills: publish update · tag lead · research pipeline · weekly review",
      ],
      sub: "React/Vite · Cloudflare · Supabase · R2 · 1Password",
    },
    {
      brand: "Personal dashboard",
      icon: LOGO.obsidian,
      focus: WF.accentTeal,
      items: [
        "Local React app over the vault",
        "Graph view · finance + health + content charts",
        "Today: static snapshot regenerated by skill",
        "Next: real DBs + APIs, live data plane",
      ],
      sub: "Charts query live data; Runner mutates state via API.",
    },
  ];
  return (
    <Scene duration={duration} pageNum={9}>
      <TitleHead duration={duration} title="Public surface + personal dashboard" subtitle="A public side and a local control center; both consumed and written by agent skills." />
      <div style={{ position: "absolute", top: 420, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 44 }}>
        {cards.map((card, i) => (
          <Card key={card.brand} duration={duration} delay={0.6 + i * 0.18} focusDelay={2.2 + i * 5.8} focus={card.focus} style={{ minHeight: 440 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Image duration={duration} src={card.icon} style={{ width: 64, height: 64, objectFit: "contain" }} />
              <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 40, fontWeight: 800, color: WF.ink }}>
                {card.brand}
              </Text>
            </div>
            <ul style={{ margin: "34px 0 0", padding: 0, listStyle: "none" }}>
              {card.items.map((item, idx) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 18 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: WF.ink, marginTop: 9 }} />
                  <Text duration={duration} style={{ fontFamily: BODY, fontSize: 22, lineHeight: 1.3, color: WF.inkSoft, ...textGrow(3 + idx * 1.2 + i * 4) }}>
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
            <Text duration={duration} style={{ position: "absolute", left: 26, right: 26, bottom: 22, fontFamily: MONO, fontSize: 18, fontStyle: "italic", color: WF.gray }}>
              {card.sub}
            </Text>
          </Card>
        ))}
      </div>
    </Scene>
  );
}

function DashboardMockScene({ shot, pageNum, focusDelay }: { shot: DashboardScreen; pageNum: number; focusDelay: number }) {
  const duration = shot.duration ?? DUR.portal;
  const navItems = ["Contacts", "Media", "Network", "Folders", "Graph"];

  if (shot.mode === "image" && shot.src && shot.aspect) {
    const frameWidth = 1700;
    const frameHeight = 820;
    const imageWidth = Math.min(frameWidth, frameHeight * shot.aspect);
    const imageHeight = imageWidth / shot.aspect;

    return (
      <Scene duration={duration} pageNum={pageNum} dark>
        <div style={{
          position: "absolute",
          left: 110,
          top: 145,
          width: frameWidth,
          height: frameHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020302",
          border: "3px solid rgba(245,242,236,0.2)",
          overflow: "hidden",
          ...existingFocus({
            border: "rgba(245,242,236,0.2)",
            focus: WF.accentTeal,
            delay: focusDelay,
            baseAnimation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both",
          }),
        } as CSSProperties}>
          <div style={{
            position: "relative",
            width: imageWidth,
            height: imageHeight,
            border: "1px solid rgba(245,242,236,0.18)",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
          }}>
            <Image duration={duration} src={shot.src} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
        </div>
        <Text duration={duration} style={{
          position: "absolute",
          left: 80,
          right: 80,
          bottom: 48,
          fontFamily: BODY,
          fontSize: 22,
          fontStyle: "italic",
          color: WF.accentSand,
          animation: "0.6s wf-fade-in 1.4s both",
        }}>
          Same pattern: private data stays local, but the interface is inspectable and agent-readable.
        </Text>
      </Scene>
    );
  }

  return (
    <Scene duration={duration} pageNum={pageNum} dark>
      <div style={{
        position: "absolute",
        left: 110,
        top: 150,
        width: 1700,
        height: 800,
        background: "#08090B",
        border: "3px solid rgba(245,242,236,0.2)",
        overflow: "hidden",
        padding: 44,
        ...existingFocus({
          border: "rgba(245,242,236,0.2)",
          focus: WF.accentTeal,
          delay: focusDelay,
          baseAnimation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both",
        }),
      } as CSSProperties}>
        <div style={{ display: "grid", gridTemplateColumns: "310px 1fr", gap: 36, height: "100%" }}>
          <div style={{ borderRight: "1px solid rgba(245,242,236,0.14)", paddingRight: 30 }}>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 18, fontWeight: 800, letterSpacing: 4, color: WF.accentTeal }}>
              PERSONAL OS
            </Text>
            <Text duration={duration} style={{ marginTop: 26, fontFamily: HEAD, fontSize: 44, fontWeight: 800, color: WF.cream }}>
              {shot.label}
            </Text>
            <Text duration={duration} style={{ marginTop: 18, fontFamily: BODY, fontSize: 21, lineHeight: 1.35, color: WF.accentSand }}>
              {shot.detail}
            </Text>
            <div style={{ marginTop: 44, display: "grid", gap: 14 }}>
              {navItems.map((nav, i) => (
                <div key={nav} style={{ padding: "12px 14px", background: i === (pageNum - 10) % navItems.length ? "rgba(61,168,160,0.25)" : "rgba(245,242,236,0.06)", border: "1px solid rgba(245,242,236,0.1)" }}>
                  <Text duration={duration} style={{ fontFamily: BODY, fontSize: 19, fontWeight: 700, color: i === (pageNum - 10) % navItems.length ? WF.cream : WF.gray }}>
                    {nav}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateRows: "110px 1fr", gap: 26 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
              {[
                ["Signal", "142"],
                ["Open loops", "18"],
                ["Last sync", "today"],
              ].map(([label, value], i) => (
                <div key={label} style={{ background: "rgba(245,242,236,0.07)", border: "1px solid rgba(245,242,236,0.12)", padding: 20 }}>
                  <Text duration={duration} style={{ fontFamily: BODY, fontSize: 15, color: WF.gray, letterSpacing: 3 }}>
                    {label}
                  </Text>
                  <Text duration={duration} style={{ marginTop: 10, fontFamily: HEAD, fontSize: 34, fontWeight: 800, color: i === 0 ? WF.accentTeal : WF.cream }}>
                    {value}
                  </Text>
                </div>
              ))}
            </div>
            <MockPanel duration={duration} mode={shot.mode} label={shot.metric} />
          </div>
        </div>
      </div>
      <Text duration={duration} style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 48,
        fontFamily: BODY,
        fontSize: 22,
        fontStyle: "italic",
        color: WF.accentSand,
        animation: "0.6s wf-fade-in 1.4s both",
      }}>
        Same pattern: private data stays local, but the interface is inspectable and agent-readable.
      </Text>
    </Scene>
  );
}

function MockPanel({ duration, mode, label }: { duration: string; mode: string; label: string }) {
  if (mode === "network" || mode === "folded" || mode === "full") {
    const count = mode === "full" ? 42 : mode === "network" ? 30 : 16;
    return (
      <div style={{ position: "relative", background: "rgba(245,242,236,0.05)", border: "1px solid rgba(245,242,236,0.12)", overflow: "hidden" }}>
        <Text duration={duration} style={{ position: "absolute", top: 28, left: 28, fontFamily: HEAD, fontSize: 30, fontWeight: 800, color: WF.cream }}>
          {label}
        </Text>
        {Array.from({ length: count }).map((_, i) => {
          const x = 90 + ((i * 139) % 1080);
          const y = 120 + ((i * 83) % 450);
          const size = mode === "full" ? 15 + (i % 4) * 4 : 28 + (i % 5) * 5;
          return (
            <div key={i} style={{
              position: "absolute",
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: 999,
              background: [WF.accentTeal, WF.accentCoral, WF.accentSand, "#6BA6FF"][i % 4],
              boxShadow: "0 0 24px rgba(61,168,160,0.28)",
              opacity: 0,
              animation: `0.45s wf-pop-in ${0.4 + i * 0.025}s both`,
            }} />
          );
        })}
      </div>
    );
  }

  if (mode === "cards") {
    return (
      <div style={{ background: "rgba(245,242,236,0.05)", border: "1px solid rgba(245,242,236,0.12)", padding: 26, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} style={{ background: "rgba(245,242,236,0.08)", border: "1px solid rgba(245,242,236,0.12)", minHeight: 128, padding: 18, opacity: 0, animation: `0.45s wf-fade-up ${0.45 + i * 0.08}s both` }}>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 14, color: WF.gray, letterSpacing: 3 }}>
              ITEM
            </Text>
            <Text duration={duration} style={{ marginTop: 14, fontFamily: HEAD, fontSize: 24, fontWeight: 800, color: WF.cream }}>
              Saved source {i + 1}
            </Text>
            <div style={{ marginTop: 18, height: 8, width: `${45 + i * 5}%`, background: i % 2 ? WF.accentTeal : WF.accentCoral }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ background: "rgba(245,242,236,0.05)", border: "1px solid rgba(245,242,236,0.12)", padding: 28 }}>
      <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 30, fontWeight: 800, color: WF.cream }}>
        {label}
      </Text>
      <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1fr", gap: 18, padding: "15px 18px", background: i % 2 ? "rgba(245,242,236,0.04)" : "rgba(245,242,236,0.08)", opacity: 0, animation: `0.4s wf-fade-up ${0.4 + i * 0.07}s both` }}>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 20, color: WF.cream }}>Person {i + 1}</Text>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 20, color: WF.accentTeal }}>channel</Text>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 20, color: WF.gray }}>context note</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

function CotypistScene() {
  const duration = DUR.cotypist;
  return (
    <Scene duration={duration} pageNum={15}>
      <LogoTitle duration={duration} logo={LOGO.cotypist} title="Co-typist" accent={WF.accentCoral} subtitle="on-device predictive text for every macOS text field, sitting at the input layer" />
      <div style={{ position: "absolute", left: 80, top: 410, width: 600, textAlign: "center" }}>
        <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 280, fontWeight: 800, color: WF.accentCoral, lineHeight: 1, ...textGrow(2.1) }}>
          0
        </Text>
        <Text duration={duration} style={{ fontFamily: BODY, fontSize: 28, fontStyle: "italic", color: WF.gray }}>
          bytes leave the machine
        </Text>
      </div>
      <ul style={{ position: "absolute", top: 445, left: 820, width: 920, listStyle: "none", padding: 0, margin: 0 }}>
        <BulletLine duration={duration} bold="System-wide ghost-text" rest=": Mail, Notes, Messages, Slack, Obsidian, editors." delay={2.5} accent={WF.accentCoral} />
        <BulletLine duration={duration} bold="Apple Foundation Models" rest=": runs locally; safe to leave on during sensitive typing." delay={5.3} accent={WF.accentCoral} />
        <BulletLine duration={duration} bold="Complements Runner + Codex" rest=" by speeding up the raw keystroke step everywhere else." delay={8.0} accent={WF.accentCoral} />
      </ul>
      <Text duration={duration} style={{ position: "absolute", left: 820, bottom: 100, fontFamily: MONO, fontSize: 22, fontStyle: "italic", color: WF.gray }}>
        cotypist.app
      </Text>
    </Scene>
  );
}

function CodexScene() {
  const duration = DUR.codex;
  const where = [
    "Personal site frontend + APIs",
    "Personal dashboard (current focus)",
    "Runner skills + local tooling",
    "Work projects: PRs, scripts, infra",
    "Cross-checked vs. Claude Code locally",
  ];
  const pattern = [
    "Deterministic Python orchestrator",
    "LLMs only at the leaves",
    "Short-lived agents",
    "Worktree isolation",
    "File-based state",
  ];
  return (
    <Scene duration={duration} pageNum={16}>
      <LogoTitle duration={duration} logo={LOGO.openai} title="Codex" subtitle="the agentic coding harness I run for every project, built on OpenAI Codex Pro" />
      <div style={{ position: "absolute", top: 420, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <Card duration={duration} delay={0.7} focusDelay={2.5} focus={WF.accentTeal} style={{ minHeight: 430 }}>
          <Text duration={duration} style={{ fontFamily: BODY, fontSize: 18, fontWeight: 800, letterSpacing: 4, color: WF.gray, marginBottom: 24 }}>
            Where it shows up
          </Text>
          {where.map((item, i) => (
            <Text key={item} duration={duration} style={{ fontFamily: BODY, fontSize: 26, color: WF.inkSoft, lineHeight: 1.45, marginBottom: 10, ...textGrow(2.2 + i * 0.75) }}>
              • {item}
            </Text>
          ))}
        </Card>
        <Card duration={duration} delay={0.9} focusDelay={6.8} focus={WF.accentCoral} style={{ minHeight: 430 }}>
          <Text duration={duration} style={{ fontFamily: BODY, fontSize: 18, fontWeight: 800, letterSpacing: 4, color: WF.gray, marginBottom: 24 }}>
            The pattern I prefer
          </Text>
          {pattern.map((item, i) => (
            <div key={item} style={{ display: "grid", gridTemplateColumns: "50px 1fr", marginBottom: 15 }}>
              <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 28, fontWeight: 800, color: WF.ink }}>{i + 1}.</Text>
              <Text duration={duration} style={{ fontFamily: BODY, fontSize: 26, color: WF.inkSoft, ...textGrow(6.4 + i * 0.75) }}>
                {item}
              </Text>
            </div>
          ))}
        </Card>
      </div>
    </Scene>
  );
}

function FitTogetherScene() {
  const duration = DUR.fit;
  const bands = [
    { label: "Personal context", body: "Obsidian vault  ·  Runner memory  ·  1Password", color: WF.accentNavy, dark: false },
    { label: "Personal agents", body: "Runner (chief-of-staff)     Codex (agentic coding)     Co-typist (keystroke layer)", color: WF.accentTeal, dark: true },
    { label: "Built surface", body: "Public site (Supabase, R2, Cloudflare)     Personal dashboard (live data plane planned)", color: WF.accentCoral, dark: false },
  ];
  return (
    <Scene duration={duration} pageNum={17}>
      <TitleHead duration={duration} title="How it fits together" subtitle="Personal context feeds personal agents which act on a public + built surface." />
      <div style={{ position: "absolute", top: 400, left: 80, right: 80 }}>
        {bands.map((band, i) => (
          <div key={band.label} style={{
            height: 150,
            marginBottom: 18,
            padding: "24px 30px",
            background: band.dark ? WF.inkDark : WF.accentSand,
            border: `3px solid ${band.color}`,
            ...existingFocus({
              border: band.color,
              focus: band.color,
              delay: 1.8 + i * 3.0,
              baseAnimation: `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${0.6 + i * 0.18}s both`,
            }),
          } as CSSProperties}>
            <Text duration={duration} style={{ fontFamily: BODY, fontSize: 18, fontWeight: 800, letterSpacing: 5, color: band.color }}>
              {band.label}
            </Text>
            <Text duration={duration} style={{ marginTop: 18, fontFamily: BODY, fontSize: 34, color: band.dark ? WF.cream : WF.ink }}>
              {band.body}
            </Text>
          </div>
        ))}
      </div>
    </Scene>
  );
}

function WorkflowScene() {
  const duration = DUR.workflow;
  const focusDelays = [1.2, 2.9, 4.5, 6.2, 7.9, 9.6];
  const steps = [
    { title: "Ask", body: "Draft follow-ups from last week", color: WF.accentCoral },
    { title: "Context pull", body: "memory · contacts · wiki/index", color: WF.accentNavy },
    { title: "Tools", body: "calendar · transcripts · inbox · browser", color: WF.accentTeal },
    { title: "Voice", body: "style profile by platform + audience", color: WF.accentCoral },
    { title: "Action cards", body: "editable drafts, nothing sent silently", color: WF.accentNavy },
    { title: "File back", body: "wiki/entities · explorations · log", color: WF.accentTeal },
  ];
  const notes = [
    { h: "Reads are broad", b: "The agent can search vault, calendar, inbox, docs, browser and project systems when the task needs it." },
    { h: "Writes are bounded", b: "Drafts, files, issues and code can be prepared; sending, deleting, publishing and merging stay approval-gated." },
    { h: "The vault learns", b: "Useful outcomes become linked markdown, not a transient chat transcript that disappears after the task." },
  ];
  return (
    <Scene duration={duration} pageNum={18}>
      <TitleHead duration={duration} title="A request becomes a graph of work" subtitle="The pattern from the Runner + Obsidian workflow: pull context, act through tools, write learnings back." top={165} />
      <div style={{ position: "absolute", top: 395, left: 80, right: 80, display: "flex", alignItems: "stretch", gap: 16 }}>
        {steps.flatMap((step, i) => {
          const card = (
            <div key={`step-${i}`} style={{
              flex: 1,
              minHeight: 230,
              padding: 22,
              background: i === 0 ? WF.inkDark : WF.accentSand,
              border: `3px solid ${step.color}`,
              opacity: 0,
              ...existingFocus({
                border: step.color,
                focus: step.color,
                delay: focusDelays[i],
                baseAnimation: `0.55s cubic-bezier(0.34,1.56,0.64,1) wf-pop-in ${0.45 + i * 0.14}s both`,
              }),
            } as CSSProperties}>
              <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 32, fontWeight: 800, color: i === 0 ? WF.accentTeal : step.color }}>
                {i + 1}
              </Text>
              <Text duration={duration} style={{ marginTop: 14, fontFamily: HEAD, fontSize: 26, fontWeight: 800, color: i === 0 ? WF.cream : WF.ink }}>
                {step.title}
              </Text>
              <Text duration={duration} style={{ marginTop: 16, fontFamily: BODY, fontSize: 18, lineHeight: 1.35, color: i === 0 ? WF.accentSand : WF.inkSoft }}>
                {step.body}
              </Text>
            </div>
          );
          if (i === steps.length - 1) return [card];
          return [
            card,
            <div key={`arrow-${i}`} style={{
              alignSelf: "center",
              fontFamily: HEAD,
              fontSize: 42,
              color: WF.gray,
              "--wf-base-color": WF.gray,
              "--wf-focus-color": steps[i + 1].color,
              opacity: 0,
              animation: `0.5s wf-fade-in ${0.7 + i * 0.14}s both, 2.4s cubic-bezier(0.22,1,0.36,1) wf-arrow-focus ${focusDelays[i] + 0.8}s both`,
            } as CSSProperties}>
              →
            </div>,
          ];
        })}
      </div>
      <div style={{ position: "absolute", top: 725, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
        {notes.map((note, i) => (
          <div key={note.h} style={{ opacity: 0, animation: `0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${1.5 + i * 0.25}s both` }}>
            <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 28, fontWeight: 800, color: WF.ink, ...textGrow(2.0 + i * 3.35) }}>
              {note.h}
            </Text>
            <Text duration={duration} style={{ marginTop: 12, fontFamily: BODY, fontSize: 20, lineHeight: 1.35, color: WF.gray }}>
              {note.b}
            </Text>
          </div>
        ))}
      </div>
    </Scene>
  );
}

function OperatingRailsScene() {
  const duration = DUR.rails;
  const focusDelays = [1.0, 2.4, 3.8, 5.2, 6.6, 8.0];
  const rails = [
    { key: "BRAIN", title: "Vault contract", body: "CLAUDE.md defines schema; wiki/raw/explorations make knowledge navigable." },
    { key: "MUSCLE", title: "Memory with reasons", body: "Feedback and project rules include why + how to apply, so they survive edge cases." },
    { key: "SENSES", title: "Deferred connectors", body: "~1,500 tools stay out of context until ToolSearch loads the needed schema." },
    { key: "REFLEX", title: "Skills as reflexes", body: "Morning briefing, meeting prep, inbox triage and research pipelines become reusable routines." },
    { key: "VOICE", title: "Style profiles", body: "Platform-specific voice profiles shape drafts without steering every time." },
    { key: "SAFETY", title: "Verification guardrails", body: "Browser proof for visual changes; no destructive writes without explicit approval." },
  ];
  return (
    <Scene duration={duration} pageNum={19}>
      <TitleHead duration={duration} title="The operating rails" subtitle="What keeps the workflow reliable when the tool surface gets large." />
      <div style={{ position: "absolute", top: 400, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {rails.map((rail, i) => {
          const dark = i === 1 || i === 4;
          return (
            <Card key={rail.key} duration={duration} delay={0.45 + i * 0.12} focusDelay={focusDelays[i]} focus={dark ? WF.accentTeal : WF.accentCoral} dark={dark} style={{ minHeight: 180 }}>
              <Text duration={duration} style={{ fontFamily: BODY, fontSize: 16, fontWeight: 800, letterSpacing: 4, color: dark ? WF.accentTeal : WF.gray }}>
                {rail.key}
              </Text>
              <Text duration={duration} style={{ marginTop: 16, fontFamily: HEAD, fontSize: 30, fontWeight: 800, color: dark ? WF.cream : WF.ink }}>
                {rail.title}
              </Text>
              <Text duration={duration} style={{ marginTop: 12, fontFamily: BODY, fontSize: 20, lineHeight: 1.35, color: dark ? WF.accentSand : WF.inkSoft }}>
                {rail.body}
              </Text>
            </Card>
          );
        })}
      </div>
      <Text duration={duration} style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 74,
        fontFamily: BODY,
        fontSize: 22,
        fontStyle: "italic",
        color: WF.gray,
        animation: "0.6s wf-fade-in 2.1s both",
      }}>
        Mental model: Obsidian is the brain; Runner is the hands; connectors are the senses; skills are the reflexes.
      </Text>
    </Scene>
  );
}

function DemoPlanScene() {
  const duration = DUR.demo;
  const demos = [
    { icon: LOGO.runner, title: "Inbox triage + a calendar booking", sub: "End-to-end workflow with drafts and explicit approvals." },
    { icon: LOGO.obsidian, title: "Personal dashboard: finance + health + content", sub: "Dashboards over a local vault, regenerated by skills." },
    { icon: LOGO.cloudflare, title: "Public site updated by an agent", sub: "An agent writes structured data, visible in seconds." },
    { icon: LOGO.openai, title: "One Codex run on the dashboard frontend", sub: "Issue → branch → preview, in the time of the demo." },
  ];
  return (
    <Scene duration={duration} pageNum={20}>
      <TitleHead duration={duration} title="Demo plan: Part 1 of the sync" subtitle="~5 minutes: here's what AI can do for you day-to-day." />
      <div style={{ position: "absolute", top: 380, left: 80, right: 80 }}>
        {demos.map((demo, i) => (
          <div key={demo.title} style={{
            display: "grid",
            gridTemplateColumns: "96px 1fr",
            gap: 28,
            alignItems: "center",
            minHeight: 112,
            borderTop: i > 0 ? `2px solid ${WF.rule}` : "2px solid transparent",
            opacity: 0,
            animation: `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${0.5 + i * 0.25}s both`,
          }}>
            <Image duration={duration} src={demo.icon} style={{
              width: 62,
              height: 62,
              objectFit: "contain",
              animation: `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${0.5 + i * 0.25}s both`,
            }} />
            <div>
              <Text duration={duration} style={{ fontFamily: HEAD, fontSize: 34, fontWeight: 800, color: WF.ink, ...textGrow(2.0 + i * 2.3) }}>
                {demo.title}
              </Text>
              <Text duration={duration} style={{ marginTop: 8, fontFamily: BODY, fontSize: 24, color: WF.gray }}>
                {demo.sub}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Scene>
  );
}

function ClosingScene() {
  const duration = DUR.closing;
  return (
    <Scene duration={duration} dark pageNum={21}>
      <Text duration={duration} style={{
        position: "absolute",
        right: 80,
        bottom: 80,
        fontFamily: HEAD,
        fontSize: 120,
        fontWeight: 800,
        color: "rgba(245,242,236,0.08)",
        animation: "1s cubic-bezier(0.22,1,0.36,1) wf-fade-in both",
      }}>
        AI OS
      </Text>
      <div style={{ position: "absolute", top: 340, left: 80, right: 700 }}>
        <Text split="word" duration={duration} staggerMs={80} style={{
          fontFamily: HEAD,
          fontSize: 96,
          fontWeight: 800,
          color: WF.cream,
          lineHeight: 1.04,
        }}>
          <template className="wf-stagger" />
          Now: the team version.
        </Text>
        <Text duration={duration} style={{
          marginTop: 24,
          fontFamily: BODY,
          fontSize: 32,
          color: WF.cream,
        }}>
          Same primitives, scoped + permissioned for a team.
        </Text>
      </div>
      <Text duration={duration} style={{
        position: "absolute",
        bottom: 90,
        left: 80,
        fontFamily: BODY,
        fontSize: 22,
        letterSpacing: 4,
        color: "#FFFFFF",
        animation: "0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-in 2s both",
      }}>
        Part 2  →  Team agents
      </Text>
    </Scene>
  );
}

export default function PersonalVideo() {
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#0f172a", overflow: "hidden" }}>
      <Timegroup workbench mode="sequence" overlapMs={0} style={{ width: SCENE.width, height: SCENE.height }}>
        <TitleScene />
        <AgendaScene />
        <SectionDividerScene number={1} label="Mental model" pageNum={3} duration={DUR.section} />
        <LayersScene />
        <SectionDividerScene number={2} label="Runner" pageNum={5} duration={DUR.runnerSection} />
        <RunnerScene />
        <SectionDividerScene number={3} label="Obsidian" pageNum={7} duration={DUR.section} />
        <ObsidianScene />
        <BuiltSurfaceScene />
        {DASHBOARD_SCREENS.map((shot, i) => (
          <DashboardMockScene key={shot.label} shot={shot} pageNum={10 + i} focusDelay={1.6 + i * 0.15} />
        ))}
        <CotypistScene />
        <CodexScene />
        <FitTogetherScene />
        <WorkflowScene />
        <OperatingRailsScene />
        <DemoPlanScene />
        <ClosingScene />
      </Timegroup>
    </main>
  );
}
