"use client";

import { Fragment, type CSSProperties, type ReactNode } from "react";
import { Image, Text, Timegroup } from "@editframe/react";
import { WF } from "../_shared/chrome";
import "../_shared/animations.css";

// ============================================================================
// Centaur white-label: public-safe version for X.
// Same presentation theme, no World logos or organization-specific internal examples.
// ============================================================================

const HEAD = "Inter Tight, Inter, sans-serif";
const BODY = "Inter, sans-serif";
const MONO = "JetBrains Mono, monospace";

const LOGO = {
  slack: "/assets/logos/si-slack.png",
  github: "/assets/logos/si-github.png",
  linear: "/assets/logos/si-linear.png",
  dune: "/assets/logos/si-dune.png",
  datadog: "/assets/logos/si-datadog.png",
  metabase: "/assets/logos/si-metabase.png",
  notion: "/assets/logos/si-notion.png",
  supabase: "/assets/logos/si-supabase.png",
  paradigm: "/assets/logos/si-paradigm_xyz.png",
  tempo: "/assets/logos/tempo-full-logo.png",
  etherscan: "/assets/logos/si-etherscan_io.png",
  allium: "/assets/logos/si-allium_so.png",
  cal: "/assets/logos/si-cal_com.png",
  chrome: "/assets/logos/si-googlechrome.png",
};

const SCENE = { width: 1920, height: 1080 };
const TOTAL = 20;
const SLIDE_DURATION = "20s";
const DEFAULT_SCENE_DURATION = "14s";
const DUR = {
  title: "14s",
  agenda: "14s",
  whyNowDivider: "11s",
  whyNow: "16s",
  architectureDivider: "13s",
  requirements: "14s",
  serviceMap: "15s",
  services: "14s",
  kernelUserspace: "14s",
  ironProxy: "15s",
  overlays: "14s",
  dataDivider: "12s",
  dataSources: "14s",
  codeCollab: "13s",
  permissioningDivider: "15s",
  perms: "13s",
  useCases: "13s",
  demo: "14s",
  openQuestions: "15s",
  nextSteps: "17s",
};

type SceneProps = {
  children: ReactNode;
  duration?: string;
  dark?: boolean;
  pageNum?: number;
  style?: CSSProperties;
};

function Scene({ children, duration = DEFAULT_SCENE_DURATION, dark = false, pageNum, style }: SceneProps) {
  return (
    <Timegroup
      mode="fixed"
      duration={duration}
      style={{ position: "absolute", inset: 0, background: dark ? WF.inkDark : WF.cream, ...style }}
    >
      <WhiteLabelChrome duration={duration} dark={dark} pageNum={pageNum} total={TOTAL} />
      {children}
    </Timegroup>
  );
}

function WhiteLabelChrome({ duration, dark = false, pageNum, total }: { duration: string; dark?: boolean; pageNum?: number; total?: number }) {
  const tone = dark ? WF.cream : WF.ink;
  return (
    <>
      <Text
        duration={duration}
        style={{
          position: "absolute",
          top: 62,
          left: 72,
          fontFamily: "Inter, sans-serif",
          fontSize: 22,
          letterSpacing: 5,
          color: tone,
        }}
      >
        CENTAUR
      </Text>
      <Text
        duration={duration}
        style={{
          position: "absolute",
          top: 76,
          right: 72,
          width: 560,
          fontFamily: "Inter, sans-serif",
          fontSize: 22,
          letterSpacing: 5,
          color: tone,
          lineHeight: 1,
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        PUBLIC DEMO  ·  2026
      </Text>
      {pageNum && total ? (
        <Text
          duration={duration}
          style={{
            position: "absolute",
            bottom: 56,
            right: 72,
            width: 140,
            fontFamily: "Inter, sans-serif",
            fontSize: 22,
            color: dark ? WF.accentSand : WF.gray,
            lineHeight: 1,
            textAlign: "right",
            whiteSpace: "nowrap",
          }}
        >
          {pageNum} / {total}
        </Text>
      ) : null}
    </>
  );
}

function TitleBlock({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ position: "absolute", top: 170, left: 80, right: 80 }}>
      <Text
        duration={SLIDE_DURATION}
        style={{
          fontFamily: HEAD,
          fontSize: title.length > 38 ? 60 : 76,
          fontWeight: 800,
          color: dark ? WF.cream : WF.ink,
          lineHeight: 1.02,
          animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both",
        }}
      >
        {title}
      </Text>
      {subtitle ? (
        <Text
          duration={SLIDE_DURATION}
          style={{
            marginTop: 16,
            fontFamily: BODY,
            fontSize: 28,
            color: dark ? WF.accentSand : WF.gray,
            lineHeight: 1.3,
            animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up 0.15s both",
          }}
        >
          {subtitle}
        </Text>
      ) : null}
    </div>
  );
}

function DotText({ children, color = WF.inkSoft, delay = 0 }: { children: ReactNode; color?: string; delay?: number }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        opacity: 0,
        animation: `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${delay}s both`,
      }}
    >
      <div style={{ width: 11, height: 11, borderRadius: 999, background: color, marginTop: 12, flex: "0 0 auto" }} />
      <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 23, lineHeight: 1.28, color: WF.inkSoft }}>
        {children}
      </Text>
    </div>
  );
}

function SmallCap({ children, color = WF.gray }: { children: ReactNode; color?: string }) {
  return (
    <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 18, color, letterSpacing: 4, textTransform: "uppercase" }}>
      {children}
    </Text>
  );
}

function MiniCard({
  children,
  delay = 0,
  dark = false,
  accent = WF.rule,
  focusDelay,
  focusColor = WF.accentTeal,
  style,
}: {
  children: ReactNode;
  delay?: number;
  dark?: boolean;
  accent?: string;
  focusDelay?: number;
  focusColor?: string;
  style?: CSSProperties;
}) {
  const baseShadow = "none";
  const baseAnimation = `0.55s cubic-bezier(0.34,1.56,0.64,1) wf-pop-in ${delay}s both`;
  return (
    <div
      style={{
        padding: 24,
        background: dark ? WF.ink : WF.accentSand,
        border: `2px solid ${accent}`,
        "--wf-base-border": accent,
        "--wf-base-shadow": baseShadow,
        "--wf-focus-color": focusColor,
        opacity: 0,
        animation:
          focusDelay === undefined
            ? baseAnimation
            : `${baseAnimation}, 3.2s cubic-bezier(0.22,1,0.36,1) wf-existing-focus ${focusDelay}s both`,
        ...style,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

function ServiceBox({
  title,
  sub,
  icon,
  x,
  y,
  w = 330,
  h = 112,
  delay = 0,
  accent = WF.rule,
  focusDelay,
  focusColor = WF.accentTeal,
}: {
  title: string;
  sub: string;
  icon: ReactNode;
  x: number;
  y: number;
  w?: number;
  h?: number;
  delay?: number;
  accent?: string;
  focusDelay?: number;
  focusColor?: string;
}) {
  const baseShadow = "0 10px 26px rgba(26,26,26,0.06)";
  const baseAnimation = `0.55s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${delay}s both`;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        border: `2px solid ${accent}`,
        background: "#F7F5EF",
        display: "grid",
        gridTemplateColumns: "52px 1fr",
        alignItems: "center",
        gap: 18,
        padding: "0 22px",
        "--wf-base-border": accent,
        "--wf-base-shadow": baseShadow,
        "--wf-focus-color": focusColor,
        boxShadow: baseShadow,
        opacity: 0,
        animation:
          focusDelay === undefined
            ? baseAnimation
            : `${baseAnimation}, 3.2s cubic-bezier(0.22,1,0.36,1) wf-existing-focus ${focusDelay}s both`,
      } as CSSProperties}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 8,
          background: "#DDF9DF",
          display: "grid",
          placeItems: "center",
          color: "#25E642",
          fontFamily: HEAD,
          fontWeight: 800,
          fontSize: 20,
        }}
      >
        {icon}
      </div>
      <div>
        <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 28, fontWeight: 800, color: WF.ink, lineHeight: 1 }}>
          {title}
        </Text>
        <Text duration={SLIDE_DURATION} style={{ marginTop: 8, fontFamily: MONO, fontSize: 17, color: WF.gray, lineHeight: 1.12 }}>
          {sub}
        </Text>
      </div>
    </div>
  );
}

function FlowTag({
  children,
  x,
  y,
  delay = 0,
  focusDelay,
  focusColor = WF.accentTeal,
}: {
  children: ReactNode;
  x: number;
  y: number;
  delay?: number;
  focusDelay?: number;
  focusColor?: string;
}) {
  const baseAnimation = `0.45s wf-fade-in ${delay}s both`;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        padding: "9px 18px",
        border: `2px solid ${WF.rule}`,
        borderRadius: 999,
        background: "#F0EEE8",
        color: WF.gray,
        fontFamily: MONO,
        fontSize: 18,
        "--wf-base-border": WF.rule,
        "--wf-base-shadow": "none",
        "--wf-focus-color": focusColor,
        opacity: 0,
        animation:
          focusDelay === undefined
            ? baseAnimation
            : `${baseAnimation}, 2.8s cubic-bezier(0.22,1,0.36,1) wf-existing-focus ${focusDelay}s both`,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Arrow({
  children,
  x,
  y,
  delay = 0,
  focusDelay,
  focusColor = WF.accentTeal,
}: {
  children: ReactNode;
  x: number;
  y: number;
  delay?: number;
  focusDelay?: number;
  focusColor?: string;
}) {
  const baseAnimation = `0.45s wf-fade-in ${delay}s both`;
  return (
    <Text
      duration={SLIDE_DURATION}
      style={{
        position: "absolute",
        left: x,
        top: y,
        fontFamily: HEAD,
        fontSize: 42,
        color: WF.gray,
        "--wf-base-color": WF.gray,
        "--wf-focus-color": focusColor,
        opacity: 0,
        animation:
          focusDelay === undefined
            ? baseAnimation
            : `${baseAnimation}, 2.6s cubic-bezier(0.22,1,0.36,1) wf-arrow-focus ${focusDelay}s both`,
      } as CSSProperties}
    >
      {children}
    </Text>
  );
}

function TitleScene() {
  return (
    <Scene duration={DUR.title}>
      <div style={{ position: "absolute", top: 235, left: 80, right: 80 }}>
        <Text
          split="char"
          duration={SLIDE_DURATION}
          staggerMs={55}
          style={{ fontFamily: HEAD, fontSize: 230, fontWeight: 800, color: WF.ink, lineHeight: 0.95 }}
        >
          <template className="wf-stagger" />
          Centaur
        </Text>
        <Text
          duration={SLIDE_DURATION}
          style={{
            marginTop: 34,
            fontFamily: BODY,
            fontSize: 43,
            color: WF.inkSoft,
            animation: "0.8s cubic-bezier(0.22,1,0.36,1) wf-fade-up 0.8s both",
          }}
        >
          Multiplayer agents for modern teams
        </Text>
        <Text
          duration={SLIDE_DURATION}
          style={{
            marginTop: 24,
            fontFamily: BODY,
            fontSize: 30,
            color: WF.gray,
            letterSpacing: 5,
            animation: "0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-in 1.35s both",
          }}
        >
          Self-hosted  ·  Slack-native  ·  Channel-scoped permissions
        </Text>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 62,
          left: 80,
          display: "flex",
          alignItems: "center",
          gap: 22,
          opacity: 0,
          animation: "0.6s wf-fade-in 1.8s both",
        }}
      >
        <Image duration={SLIDE_DURATION} src={LOGO.paradigm} style={{ width: 36, height: 36, objectFit: "contain" }} />
        <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 26, color: WF.ink }}>
          Built by Paradigm + Tempo
        </Text>
      </div>
      <Text duration={SLIDE_DURATION} style={{ position: "absolute", bottom: 60, right: 80, fontFamily: BODY, fontSize: 32, color: WF.ink }}>
        dcbuilder.eth · World Foundation
      </Text>
    </Scene>
  );
}

function AgendaScene() {
  const items = [
    "Why now",
    "Architecture",
    "Data sources",
    "Code-collab surface",
    "Permissioning",
    "Use cases",
    "Demo plan",
    "Open questions",
    "Next steps",
  ];
  return (
    <Scene duration={DUR.agenda} pageNum={2}>
      <TitleBlock title="Agenda" />
      <div style={{ position: "absolute", top: 350, left: 80, right: 80 }}>
        {items.map((item, i) => (
          <div
            key={item}
            style={{
              display: "grid",
              gridTemplateColumns: "72px 1fr",
              alignItems: "baseline",
              marginBottom: 16,
              opacity: 0,
              animation: `0.45s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${0.4 + i * 0.12}s both`,
            }}
          >
            <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 35, fontWeight: 800, color: WF.accentTeal }}>
              {i + 1}.
            </Text>
            <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 40, color: WF.ink, lineHeight: 1.15 }}>
              {item}
            </Text>
          </div>
        ))}
      </div>
    </Scene>
  );
}

function SectionDividerScene({ number, label, pageNum }: { number: number; label: string; pageNum: number }) {
  const durationByPage: Record<number, string> = {
    3: DUR.whyNowDivider,
    5: DUR.architectureDivider,
    12: DUR.dataDivider,
    15: DUR.permissioningDivider,
  };
  return (
    <Scene duration={durationByPage[pageNum] ?? DEFAULT_SCENE_DURATION} dark pageNum={pageNum}>
      <Text
        duration={SLIDE_DURATION}
        style={{
          position: "absolute",
          left: 80,
          top: 350,
          fontFamily: HEAD,
          fontSize: 168,
          fontWeight: 800,
          color: WF.accentTeal,
          lineHeight: 1,
          animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both",
        }}
      >
        {number}
      </Text>
      <Text
        split="word"
        duration={SLIDE_DURATION}
        staggerMs={70}
        style={{
          position: "absolute",
          left: 260,
          top: 375,
          fontFamily: HEAD,
          fontSize: 108,
          fontWeight: 800,
          color: WF.cream,
          lineHeight: 1,
        }}
      >
        <template className="wf-stagger" />
        {label}
      </Text>
    </Scene>
  );
}

function WhyNowScene() {
  return (
    <Scene duration={DUR.whyNow} pageNum={4}>
      <TitleBlock title="Why Centaur, why now" subtitle="Paradigm + Tempo open-sourced their internal agent platform under Apache 2.0." />

      <div
        style={{
          position: "absolute",
          top: 365,
          left: 80,
          right: 80,
          padding: "44px 52px",
          background: WF.accentSand,
          opacity: 0,
          animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up 0.35s both",
        }}
      >
        <Text split="word" duration={SLIDE_DURATION} staggerMs={45} style={{ fontFamily: HEAD, fontStyle: "italic", fontSize: 46, color: WF.ink, lineHeight: 1.25 }}>
          <template className="wf-stagger" />
          “Most agent stacks are still built for one user on one machine.”
        </Text>
        <Text duration={SLIDE_DURATION} style={{ marginTop: 22, fontFamily: BODY, fontSize: 24, fontStyle: "italic", color: WF.gray }}>
          Organizations should own their stack, move at their own speed, use AI collaboratively.
        </Text>
      </div>

      <div style={{ position: "absolute", top: 760, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1.45fr", gap: 70 }}>
        <div style={{ opacity: 0, animation: "0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-up 2.55s both" }}>
          <SmallCap>License</SmallCap>
          <Text duration={SLIDE_DURATION} style={{ marginTop: 10, fontFamily: HEAD, fontSize: 54, fontWeight: 800, color: WF.ink }}>
            Apache 2.0
          </Text>
        </div>
        <div style={{ opacity: 0, animation: "0.6s cubic-bezier(0.22,1,0.36,1) wf-fade-up 2.85s both" }}>
          <SmallCap>Built by</SmallCap>
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Image duration={SLIDE_DURATION} src={LOGO.paradigm} style={{ width: 48, height: 48, objectFit: "contain" }} />
              <div>
                <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 34, fontWeight: 800, color: WF.ink, lineHeight: 1 }}>
                  Paradigm
                </Text>
                <Text duration={SLIDE_DURATION} style={{ marginTop: 4, fontFamily: MONO, fontSize: 16, color: WF.gray }}>
                  paradigm.xyz
                </Text>
              </div>
            </div>
            <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 26, color: WF.gray }}>
              +
            </Text>
            <div>
              <Image duration={SLIDE_DURATION} src={LOGO.tempo} style={{ width: 172, height: 38, objectFit: "contain" }} />
              <Text duration={SLIDE_DURATION} style={{ marginTop: 6, fontFamily: MONO, fontSize: 16, color: WF.gray }}>
                tempo.xyz
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}

function RequirementsScene() {
  const gates = [
    ["Boundary", "Can we trust the credential and network boundary?"],
    ["Slack", "Can it feel native where the company already works?"],
    ["State", "Can every turn survive restarts, retries and audits?"],
    ["Tools", "Can we add team-specific tools without forking upstream?"],
    ["Policy", "Can access vary by channel, user and action type?"],
    ["Metrics", "Can it measure outcomes and suggest improvements?"],
  ];
  return (
    <Scene duration={DUR.requirements} pageNum={6}>
      <TitleBlock title="What the architecture has to prove" subtitle="Before Centaur is useful inside an organization, it has to answer six rollout questions." />
      <div style={{ position: "absolute", top: 360, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {gates.map(([label, body], i) => (
          <MiniCard
            key={label}
            delay={0.35 + i * 0.12}
            focusDelay={2.8 + i}
            focusColor={i % 2 ? WF.accentCoral : WF.accentTeal}
            accent={i % 2 ? WF.rule : WF.accentTeal}
            style={{ minHeight: 160 }}
          >
            <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 30, fontWeight: 800, color: WF.ink }}>
              {label}
            </Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 14, fontFamily: BODY, fontSize: 22, lineHeight: 1.25, color: WF.inkSoft }}>
              {body}
            </Text>
          </MiniCard>
        ))}
      </div>
      <Text
        duration={SLIDE_DURATION}
        style={{
          position: "absolute",
          left: 80,
          bottom: 86,
          right: 80,
          fontFamily: BODY,
          fontSize: 24,
          color: WF.gray,
          fontStyle: "italic",
          opacity: 0,
          animation: "0.6s wf-fade-in 1.8s both",
        }}
      >
        The next scenes answer these mechanically: service flow, responsibilities, permissions and rollout surface.
      </Text>
    </Scene>
  );
}

function ServiceMapScene() {
  return (
    <Scene duration={DUR.serviceMap} pageNum={7}>
      <Text duration={SLIDE_DURATION} style={{ position: "absolute", top: 120, left: 80, fontFamily: HEAD, fontSize: 72, fontWeight: 800, color: WF.ink }}>
        How it works
      </Text>
      <div style={{ position: "absolute", top: 128, right: 86, display: "flex", alignItems: "center", gap: 14 }}>
        <Image duration={SLIDE_DURATION} src={LOGO.paradigm} style={{ width: 40, height: 40, objectFit: "contain" }} />
        <Text duration={SLIDE_DURATION} style={{ fontFamily: MONO, fontSize: 28, color: WF.gray }}>
          paradigmxyz/centaur
        </Text>
      </div>

      <div
        style={{
          position: "absolute",
          left: 80,
          top: 275,
          width: 330,
          height: 260,
          border: `2px solid ${WF.rule}`,
          background: "#F7F5EF",
          opacity: 0,
          animation: "0.5s wf-fade-in 0.35s both",
        }}
      >
        <div style={{ height: 128, borderBottom: `2px solid ${WF.rule}`, display: "grid", gridTemplateColumns: "72px 1fr", alignItems: "center", padding: "0 28px", gap: 16 }}>
          <Image duration={SLIDE_DURATION} src={LOGO.slack} style={{ width: 48, height: 48, objectFit: "contain" }} />
          <div>
            <Text duration={SLIDE_DURATION} style={{ fontFamily: MONO, fontSize: 20, color: WF.gray }}>Set up within</Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 8, fontFamily: HEAD, fontSize: 30, color: WF.ink, fontWeight: 800 }}>Workspace</Text>
          </div>
        </div>
        <div style={{ height: 128, display: "grid", gridTemplateColumns: "72px 1fr", alignItems: "center", padding: "0 28px", gap: 16 }}>
          <Image duration={SLIDE_DURATION} src={LOGO.slack} style={{ width: 48, height: 48, objectFit: "contain" }} />
          <div>
            <Text duration={SLIDE_DURATION} style={{ fontFamily: MONO, fontSize: 20, color: WF.gray }}>Trigger using</Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 8, fontFamily: HEAD, fontSize: 30, color: WF.ink, fontWeight: 800 }}>Slackbot</Text>
          </div>
        </div>
      </div>

      <ServiceBox title="API" sub="control engine & durable workflows" icon="▻" x={735} y={320} delay={0.7} focusDelay={3.1} accent={WF.rule} />
      <ServiceBox title="Postgres" sub="durable state" icon="∞" x={1480} y={320} delay={1.0} focusDelay={4.7} />
      <ServiceBox title="Sandbox" sub="harness, skills & custom tooling" icon="□" x={735} y={650} delay={1.2} focusDelay={6.4} accent={WF.accentTeal} />
      <ServiceBox title="Proxy" sub="built on iron.sh" icon="⌁" x={735} y={885} h={100} delay={1.45} focusDelay={9.1} focusColor={WF.accentCoral} accent={WF.accentCoral} />
      <ServiceBox title="1Password" sub="org secrets" icon="⌘" x={1480} y={880} h={100} delay={1.65} />

      <FlowTag x={430} y={350} delay={0.65} focusDelay={1.8}>registers thread</FlowTag>
      <Arrow x={670} y={345} delay={0.7} focusDelay={2.1}>→</Arrow>
      <FlowTag x={1215} y={350} delay={0.95} focusDelay={4.25}>persists to</FlowTag>
      <Arrow x={1410} y={345} delay={1.0} focusDelay={4.45}>→</Arrow>
      <FlowTag x={805} y={545} delay={1.15} focusDelay={5.8}>sends inputs to</FlowTag>
      <Arrow x={908} y={590} delay={1.2} focusDelay={6.15}>↓</Arrow>
      <FlowTag x={530} y={665} delay={1.25} focusDelay={6.9}>create via Kubernetes</FlowTag>
      <Arrow x={670} y={690} delay={1.3} focusDelay={7.1}>→</Arrow>
      <FlowTag x={520} y={825} delay={1.4} focusDelay={8.6} focusColor={WF.accentCoral}>internet egress via</FlowTag>
      <Arrow x={672} y={858} delay={1.45} focusDelay={8.85} focusColor={WF.accentCoral}>→</Arrow>
      <FlowTag x={1105} y={545} delay={1.35} focusDelay={7.7}>returns outputs to API</FlowTag>
      <Arrow x={1058} y={535} delay={1.4} focusDelay={7.95}>↑</Arrow>
      <FlowTag x={1210} y={910} delay={1.6} focusDelay={10.2} focusColor={WF.accentCoral}>auth using</FlowTag>
      <Arrow x={1410} y={905} delay={1.65} focusDelay={10.45} focusColor={WF.accentCoral}>→</Arrow>
    </Scene>
  );
}

function SixServicesScene() {
  const services = [
    ["1", "Slackbot", "Thin listener. Mentions become durable API turns."],
    ["2", "API", "Control plane: spawn, message, execute and stream events."],
    ["3", "Postgres", "Single source of truth for threads, checkpoints, keys and audit logs."],
    ["4", "Sandbox", "Per-conversation container with read-only mounts and tool access via REST."],
    ["5", "Proxy", "Egress firewall. Injects credentials in-flight after policy checks."],
    ["6", "Observability", "Structured logs, metrics and traces Centaur can inspect itself."],
  ];
  return (
    <Scene duration={DUR.services} pageNum={8}>
      <TitleBlock title="Six services that make Centaur work" subtitle="The runtime is simple: ingress, control, state, execution, egress and observability." />
      <div style={{ position: "absolute", top: 345, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {services.map(([n, name, body], i) => (
          <MiniCard
            key={name}
            delay={0.35 + i * 0.13}
            focusDelay={1.7 + i * 1.55}
            focusColor={i === 1 || i === 4 ? WF.accentTeal : WF.accentCoral}
            accent={i === 1 || i === 4 ? WF.accentTeal : WF.rule}
            style={{ minHeight: 185 }}
          >
            <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 22, color: WF.accentTeal, fontWeight: 800 }}>
              {n}
            </Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 8, fontFamily: HEAD, fontSize: 30, fontWeight: 800, color: WF.ink }}>
              {name}
            </Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 12, fontFamily: BODY, fontSize: 21, color: WF.inkSoft, lineHeight: 1.25 }}>
              {body}
            </Text>
          </MiniCard>
        ))}
      </div>
      <Text duration={SLIDE_DURATION} style={{ position: "absolute", left: 80, bottom: 82, right: 80, fontFamily: BODY, fontSize: 22, color: WF.gray, fontStyle: "italic" }}>
        Mental model: Slack starts the turn, API coordinates it, Postgres remembers it, Sandbox runs it, Proxy gates it, observability explains it.
      </Text>
    </Scene>
  );
}

function KernelUserspaceScene() {
  const kernel = ["API lifecycle", "iron-proxy egress + secrets", "Sandbox firewall + K8s policy", "Audit log"];
  const userspace = ["Tools", "Skills", "Workflows", "Nightly self-improvement"];
  return (
    <Scene duration={DUR.kernelUserspace} pageNum={9}>
      <TitleBlock title="Kernel / userspace split" subtitle="The rollout stays safe because the blast radius is structurally bounded." />
      <div style={{ position: "absolute", top: 350, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52 }}>
        <MiniCard delay={0.35} focusDelay={2.45} focusColor={WF.ink} accent={WF.rule} style={{ minHeight: 430 }}>
          <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 48, fontWeight: 800, color: WF.ink }}>
            Kernel
          </Text>
          <Text duration={SLIDE_DURATION} style={{ marginTop: 8, fontFamily: BODY, fontSize: 21, color: WF.gray, fontStyle: "italic" }}>
            small · auditable · slow to change
          </Text>
          <div style={{ marginTop: 34, display: "grid", gap: 19 }}>
            {kernel.map((item, i) => (
              <DotText key={item} delay={0.6 + i * 0.12}>{item}</DotText>
            ))}
          </div>
        </MiniCard>
        <MiniCard delay={0.55} focusDelay={7.0} focusColor={WF.accentTeal} accent={WF.accentTeal} style={{ minHeight: 430 }}>
          <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 48, fontWeight: 800, color: WF.ink }}>
            Userspace
          </Text>
          <Text duration={SLIDE_DURATION} style={{ marginTop: 8, fontFamily: BODY, fontSize: 21, color: WF.accentTeal, fontStyle: "italic" }}>
            wide-open · agent-editable · fast
          </Text>
          <div style={{ marginTop: 34, display: "grid", gap: 19 }}>
            {userspace.map((item, i) => (
              <DotText key={item} color={WF.accentTeal} delay={0.8 + i * 0.12}>{item}</DotText>
            ))}
          </div>
        </MiniCard>
      </div>
    </Scene>
  );
}

function IronProxyScene() {
  const perks = [
    "Default-deny allowlist with domain globs + CIDRs.",
    "Upstream IP deny list closes SSRF and DNS-rebind gaps.",
    "Per-sandbox proxy pod: leaked tokens are useless outside.",
    "LLM response bodies scanned + redacted in real time.",
    "MCP JSON-RPC parsed and tools/list responses filtered.",
    "Optional Postgres MITM: SET ROLE + SQL AST guards.",
  ];
  return (
    <Scene duration={DUR.ironProxy} pageNum={10}>
      <TitleBlock title="iron-proxy: the credential boundary" subtitle="Real secrets never enter the sandbox. Substitution happens at egress." />

      <div style={{ position: "absolute", top: 380, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 64px 1fr 64px 1fr", gap: 18, alignItems: "center" }}>
        {[
          ["Sandbox", 'OPENAI_API_KEY = "OPENAI_API_KEY"', "placeholder", false],
          ["iron-proxy", "swap placeholder → real cred", "LLM-judge may reject", true],
          ["Upstream", "API · DB · MCP", "authenticated", false],
        ].map(([label, code, cap, emph], i) => (
          <Fragment key={String(label)}>
            {i > 0 ? (
              <Text
                duration={SLIDE_DURATION}
                style={{
                  fontFamily: HEAD,
                  fontSize: 58,
                  color: WF.gray,
                  textAlign: "center",
                  opacity: 0,
                  "--wf-base-color": WF.gray,
                  "--wf-focus-color": WF.accentCoral,
                  animation: `0.45s wf-fade-in ${0.7 + i * 0.25}s both, 2.6s cubic-bezier(0.22,1,0.36,1) wf-arrow-focus ${i === 1 ? 4.0 : 7.25}s both`,
                } as CSSProperties}
              >
                →
              </Text>
            ) : null}
            <MiniCard
              dark={Boolean(emph)}
              delay={0.35 + i * 0.28}
              focusDelay={[2.05, 4.9, 7.9][i]}
              focusColor={emph ? WF.accentCoral : WF.accentTeal}
              accent={emph ? WF.ink : WF.rule}
              style={{ minHeight: 230, display: "grid", placeItems: "center", textAlign: "center" }}
            >
              <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontWeight: 800, fontSize: 40, color: emph ? WF.cream : WF.ink }}>
                {label}
              </Text>
              <Text duration={SLIDE_DURATION} style={{ marginTop: 24, fontFamily: MONO, fontSize: 21, color: emph ? WF.accentTeal : WF.inkSoft }}>
                {code}
              </Text>
              <Text duration={SLIDE_DURATION} style={{ marginTop: 18, fontFamily: BODY, fontSize: 20, fontStyle: "italic", color: emph ? WF.accentSand : WF.gray }}>
                {cap}
              </Text>
            </MiniCard>
          </Fragment>
        ))}
      </div>

      <div style={{ position: "absolute", top: 690, left: 80, right: 80 }}>
        <SmallCap>What we get for free</SmallCap>
        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 34px" }}>
          {perks.map((p, i) => (
            <DotText key={p} delay={1.3 + i * 0.08}>{p}</DotText>
          ))}
        </div>
      </div>
    </Scene>
  );
}

function OverlaysScene() {
  const repos = [
    ["KERNEL", "paradigmxyz/centaur", "Upstream we track. Bump cleanly on release.", WF.accentNavy],
    ["OVERLAY", "company/centaur-overlay", "Team tools, skills and workflows. Mounted at /app/overlay/org.", WF.accentTeal],
    ["GITOPS", "company/centaur-infra", "Argo CD reference. Secrets, manifests, env config.", WF.accentCoral],
  ];
  return (
    <Scene duration={DUR.overlays} pageNum={11}>
      <TitleBlock title="Extension via overlays, not forks" subtitle="Same Centaur kernel, company-specific userspace." />
      <div style={{ position: "absolute", top: 365, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {repos.map(([tag, name, body, color], i) => (
          <MiniCard key={String(name)} delay={0.35 + i * 0.18} focusDelay={2.1 + i * 2.1} focusColor={String(color)} accent={String(color)} style={{ minHeight: 330 }}>
            <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 18, color: String(color), letterSpacing: 4, fontWeight: 800 }}>
              {tag}
            </Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 28, fontFamily: MONO, fontSize: 27, fontWeight: 800, color: WF.ink }}>
              {name}
            </Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 28, fontFamily: BODY, fontSize: 24, color: WF.inkSoft, lineHeight: 1.25 }}>
              {body}
            </Text>
          </MiniCard>
        ))}
      </div>
      <Text duration={SLIDE_DURATION} style={{ position: "absolute", bottom: 86, left: 80, fontFamily: MONO, fontSize: 20, color: WF.gray, fontStyle: "italic" }}>
        TOOL_DIRS · WORKFLOW_DIRS · CENTAUR_OVERLAY_DIR
      </Text>
    </Scene>
  );
}

function DataSourcesScene() {
  const cols = [
    {
      title: "Product + data",
      items: [
        [LOGO.metabase, "Metabase", true],
        [LOGO.dune, "Dune", true],
        [LOGO.allium, "Allium", true],
        [LOGO.supabase, "Application database", true],
        [LOGO.etherscan, "Public data APIs", false],
      ],
    },
    {
      title: "Eng + collab",
      items: [
        [LOGO.datadog, "Datadog", true],
        [LOGO.linear, "Linear", true],
        [LOGO.slack, "Slack history", true],
        [LOGO.github, "GitHub", true],
        [LOGO.notion, "Notion / docs", false],
      ],
    },
    {
      title: "Ops + external",
      items: [
        [LOGO.cal, "Cal.com / scheduling", false],
        [LOGO.chrome, "Browser research", false],
        [null, "WebSearch · WebFetch", false],
        [null, "X · Reddit · YouTube", false],
        [LOGO.notion, "Knowledge base", false],
      ],
    },
  ];
  return (
    <Scene duration={DUR.dataSources} pageNum={13}>
      <TitleBlock title="Data sources to hook up" subtitle="First wave is the bold set: product, engineering and collaboration signal." />
      <div style={{ position: "absolute", top: 350, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
        {cols.map((col, i) => (
          <MiniCard
            key={col.title}
            delay={0.35 + i * 0.16}
            focusDelay={[1.9, 6.0, undefined][i]}
            focusColor={i === 0 ? WF.accentTeal : WF.accentCoral}
            accent={i === 0 ? WF.accentTeal : WF.rule}
            style={{ minHeight: 480 }}
          >
            <SmallCap>{col.title}</SmallCap>
            <div style={{ marginTop: 26, display: "grid", gap: 22 }}>
              {col.items.map(([logo, label, bold], j) => (
                <div key={String(label)} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "center" }}>
                  {logo ? (
                    <Image duration={SLIDE_DURATION} src={String(logo)} style={{ width: 42, height: 42, objectFit: "contain" }} />
                  ) : (
                    <div style={{ width: 13, height: 13, borderRadius: 999, background: WF.ink, marginLeft: 14 }} />
                  )}
                  <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 24, fontWeight: bold ? 800 : 500, color: WF.ink, lineHeight: 1.1 }}>
                    {label}
                  </Text>
                </div>
              ))}
            </div>
          </MiniCard>
        ))}
      </div>
    </Scene>
  );
}

function CodeCollabScene() {
  const internal = [
    "Triage Linear + GitHub issues: auto-label, owner.",
    "Solve simple Slack issues: Codex opens branch + PR.",
    "Draft PR review comments with action-card approval.",
    "Daily digest of stalled, blocked or conflict PRs.",
  ];
  const external = [
    "Framework releases that affect the product.",
    "Upstream dependencies: performance and security advisories.",
    "Research feeds relevant to roadmap bets.",
    "Competitor radar: launches, pricing and positioning.",
  ];
  return (
    <Scene duration={DUR.codeCollab} pageNum={14}>
      <TitleBlock title="Code-collab surface" subtitle="Watch the things we care about and do the boring follow-through." />
      <div style={{ position: "absolute", top: 360, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        {[
          [LOGO.github, "Internal", internal],
          [LOGO.chrome, "External watchers", external],
        ].map(([icon, title, items], i) => (
          <MiniCard
            key={String(title)}
            delay={0.35 + i * 0.22}
            focusDelay={i ? 6.2 : 2.0}
            focusColor={i ? WF.accentCoral : WF.accentTeal}
            accent={i ? WF.accentCoral : WF.accentTeal}
            style={{ minHeight: 400 }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <Image duration={SLIDE_DURATION} src={String(icon)} style={{ width: 48, height: 48, objectFit: "contain" }} />
              <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 38, fontWeight: 800, color: WF.ink }}>
                {title}
              </Text>
            </div>
            <div style={{ marginTop: 30, display: "grid", gap: 18 }}>
              {(items as string[]).map((item, j) => (
                <DotText key={item} delay={0.65 + j * 0.1}>{item}</DotText>
              ))}
            </div>
          </MiniCard>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 80,
          right: 80,
          padding: "24px 30px",
          background: WF.accentSand,
          border: `2px solid ${WF.rule}`,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 30,
          "--wf-base-border": WF.rule,
          "--wf-base-shadow": "none",
          "--wf-focus-color": WF.ink,
          animation: "3.2s cubic-bezier(0.22,1,0.36,1) wf-existing-focus 10.0s both",
        } as CSSProperties}
      >
        <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 28, fontWeight: 800, color: WF.ink, letterSpacing: 4 }}>
          MONITOR  →  REPORT  →  ACT
        </Text>
        <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 23, color: WF.inkSoft, fontStyle: "italic" }}>
          structured events → curated channel digest → draft Linear / PR comment / DM
        </Text>
      </div>
    </Scene>
  );
}

function PermsScene() {
  const rules = [
    ["Channel-scoped tools", "#customer-success → CRM + docs.\n#eng-oncall → logs, traces and deploy state."],
    ["Per-user role overlay", "Finance, security and legal workflows gated to specific people."],
    ["Audit trail", "Every cross-source query logged: {user, channel, tool, args, ts}."],
    ["Read vs write split", "Reads default-on. Writes need action-card approval."],
  ];
  return (
    <Scene duration={DUR.perms} pageNum={16}>
      <TitleBlock title="Permissioning model" subtitle="Channel-scoped tools + per-user role overlay + full audit." />
      <div style={{ position: "absolute", top: 365, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {rules.map(([title, body], i) => (
          <MiniCard
            key={title}
            delay={0.35 + i * 0.16}
            focusDelay={1.8 + i * 1.65}
            focusColor={i === 0 || i === 3 ? WF.accentTeal : WF.accentCoral}
            accent={i === 0 ? WF.accentTeal : WF.rule}
            style={{ minHeight: 185 }}
          >
            <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontWeight: 800, fontSize: 31, color: WF.ink }}>
              {title}
            </Text>
            <Text duration={SLIDE_DURATION} style={{ marginTop: 16, fontFamily: BODY, fontSize: 23, lineHeight: 1.25, color: WF.inkSoft, whiteSpace: "pre-line" }}>
              {body}
            </Text>
          </MiniCard>
        ))}
      </div>
      <Text duration={SLIDE_DURATION} style={{ position: "absolute", left: 80, bottom: 82, fontFamily: BODY, fontSize: 23, color: WF.gray, fontStyle: "italic" }}>
        Same upstream kernel, with policy and tools shaped by the organization.
      </Text>
    </Scene>
  );
}

function UseCasesScene() {
  const cases = [
    "Weekly customer signal summary → #go-to-market.",
    "Product metric readout from Metabase: last 7 days.",
    "Metabase dashboard readout for feature X: last 7 days.",
    "Summarize #engineering standup from the last 24h.",
    "Draft a partner evaluation memo from this proposal.",
    "Datadog errors for service X: on-call triage.",
    "Triage new Linear issues: label + owner suggestions.",
    "Draft a PR review for company/repo#1234.",
  ];
  return (
    <Scene duration={DUR.useCases} pageNum={17}>
      <TitleBlock title="Use cases I want to unlock" subtitle="Day-one wins for eng, research and ops." />
      <div style={{ position: "absolute", top: 350, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 46px" }}>
        {cases.map((c, i) => (
          <DotText key={c} color={WF.accentCoral} delay={0.75 + i * 0.62}>{c}</DotText>
        ))}
      </div>
    </Scene>
  );
}

function DemoPlanScene() {
  const demos = [
    [LOGO.linear, "Slack-driven Linear triage", "Mention Centaur in Slack, ask it to label new issues, assign owners and draft the summary."],
    [LOGO.github, "Upstream-watch digest", "Watch important repos and advisories, then post a curated digest into the right channel."],
    [LOGO.metabase, "Scoped data readout", "Ask about a product metric or dashboard with channel-scoped access to the right data source."],
    [LOGO.slack, "Permissioning walkthrough", "Show reads, action cards and audit trails before anything writes to a production system."],
  ];
  return (
    <Scene duration={DUR.demo} pageNum={18}>
      <TitleBlock title="Demo plan" subtitle="~5 minutes: same primitives, scoped for a real team workflow." />
      <div style={{ position: "absolute", top: 360, left: 80, right: 80, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
        {demos.map(([icon, title, body], i) => (
          <MiniCard
            key={String(title)}
            delay={0.45 + i * 0.14}
            focusDelay={2.0 + i * 2.1}
            focusColor={i % 2 ? WF.accentCoral : WF.accentTeal}
            accent={i % 2 ? WF.rule : WF.accentTeal}
            style={{ minHeight: 205, display: "grid", gridTemplateColumns: "68px 1fr", gap: 20, alignItems: "start" }}
          >
            <Image duration={SLIDE_DURATION} src={String(icon)} style={{ width: 54, height: 54, objectFit: "contain" }} />
            <div>
              <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 30, fontWeight: 800, color: WF.ink }}>
                {title}
              </Text>
              <Text duration={SLIDE_DURATION} style={{ marginTop: 14, fontFamily: BODY, fontSize: 22, lineHeight: 1.28, color: WF.inkSoft }}>
                {body}
              </Text>
            </div>
          </MiniCard>
        ))}
      </div>
    </Scene>
  );
}

function OpenQuestionsScene() {
  const questions = [
    "Which 3-5 data sources first? My pick: Linear, GitHub, Slack history, Metabase and Datadog.",
    "Who owns privacy policy, data retention and audit review?",
    "Where should action-card approvals live: Slack only, Linear, or both?",
    "Which production Slack channels are safe for the first rollout?",
    "What KPIs make this worth expanding: hours saved, cycle time, fewer dropped follow-ups, better incident response?",
  ];
  return (
    <Scene duration={DUR.openQuestions} pageNum={19}>
      <TitleBlock title="Open questions for the sync" />
      <div style={{ position: "absolute", top: 340, left: 80, right: 80, display: "grid", gap: 24 }}>
        {questions.map((q, i) => (
          <MiniCard
            key={q}
            delay={0.35 + i * 0.12}
            focusDelay={2.0 + i * 2.1}
            focusColor={i % 2 ? WF.accentCoral : WF.accentTeal}
            accent={WF.rule}
            style={{ padding: 22, minHeight: 76 }}
          >
            <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 26, lineHeight: 1.25, color: WF.ink }}>
              {q}
            </Text>
          </MiniCard>
        ))}
      </div>
    </Scene>
  );
}

function NextStepsScene() {
  const steps = [
    "Start with the docs quickstart: centaur.run/llms-full.txt + the ACME overlay example.",
    "Stand up a sandbox Centaur instance for your team.",
    "Pick 2-3 workflow examples that would be useful inside your company.",
    "Align stakeholders on privacy, retention, access control and integration process.",
    "Integrate Centaur into Slack, connect your first tools, then teach the team how to use it.",
    "Define KPIs, measure outcomes and let Centaur suggest better skills and workflows.",
  ];
  return (
    <Scene duration={DUR.nextSteps} dark pageNum={20}>
      <Text
        duration={SLIDE_DURATION}
        style={{
          position: "absolute",
          right: 80,
          bottom: 70,
          fontFamily: HEAD,
          fontSize: 120,
          fontWeight: 800,
          color: "rgba(245,242,236,0.08)",
          letterSpacing: 2,
          animation: "1s wf-fade-in both",
        }}
      >
        Centaur
      </Text>
      <div style={{ position: "absolute", top: 155, left: 80, right: 80 }}>
        <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 88, fontWeight: 800, color: WF.cream, animation: "0.7s cubic-bezier(0.22,1,0.36,1) wf-fade-up both" }}>
          How to get started
        </Text>
        <ol style={{ marginTop: 36, paddingLeft: 0, listStyle: "none", maxWidth: 1450 }}>
          {steps.map((stp, i) => (
            <li
              key={stp}
              style={{
                display: "flex",
                gap: 26,
                alignItems: "flex-start",
                marginBottom: 17,
                border: "2px solid transparent",
                padding: "3px 12px 3px 0",
                "--wf-base-border": "transparent",
                "--wf-base-shadow": "none",
                "--wf-focus-color": WF.accentTeal,
                opacity: 0,
                animation: `0.5s cubic-bezier(0.22,1,0.36,1) wf-fade-up ${0.5 + i * 0.18}s both, 3.2s cubic-bezier(0.22,1,0.36,1) wf-existing-focus ${1.8 + i * 2.25}s both`,
              } as CSSProperties}
            >
              <Text duration={SLIDE_DURATION} style={{ fontFamily: HEAD, fontSize: 34, fontWeight: 800, color: WF.accentTeal, minWidth: 58, lineHeight: 1.2 }}>
                {i + 1}.
              </Text>
              <Text duration={SLIDE_DURATION} style={{ fontFamily: BODY, fontSize: 27, color: WF.cream, lineHeight: 1.22 }}>
                {stp}
              </Text>
            </li>
          ))}
        </ol>
      </div>
      <Text duration={SLIDE_DURATION} style={{ position: "absolute", bottom: 60, left: 80, fontFamily: MONO, fontSize: 18, color: WF.accentTeal, animation: "0.6s wf-fade-in 1.6s both" }}>
        centaur.run
      </Text>
    </Scene>
  );
}

export default function WorkVideo() {
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#0f172a", overflow: "hidden" }}>
      <Timegroup workbench mode="sequence" overlapMs={0} style={{ width: SCENE.width, height: SCENE.height }}>
        <TitleScene />
        <AgendaScene />
        <SectionDividerScene number={1} label="Why now" pageNum={3} />
        <WhyNowScene />
        <SectionDividerScene number={2} label="Architecture" pageNum={5} />
        <RequirementsScene />
        <ServiceMapScene />
        <SixServicesScene />
        <KernelUserspaceScene />
        <IronProxyScene />
        <OverlaysScene />
        <SectionDividerScene number={3} label="Data sources" pageNum={12} />
        <DataSourcesScene />
        <CodeCollabScene />
        <SectionDividerScene number={4} label="Permissioning" pageNum={15} />
        <PermsScene />
        <UseCasesScene />
        <DemoPlanScene />
        <OpenQuestionsScene />
        <NextStepsScene />
      </Timegroup>
    </main>
  );
}
