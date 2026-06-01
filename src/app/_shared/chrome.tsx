// World-branded chrome for every scene: monogram top-left, CONFIDENTIAL top-right.
"use client";

import { Image, Text } from "@editframe/react";

// Brand tokens: mirror what the PPTX uses.
export const WF = {
  cream:       "#F5F2EC",
  ink:         "#1A1A1A",
  inkSoft:     "#2F2F2F",
  gray:        "#6E6E6E",
  rule:        "#D9D6CE",
  accentTeal:  "#3DA8A0",
  accentCoral: "#E97862",
  accentNavy:  "#1F2A4E",
  accentSand:  "#E8E2D3",
  inkDark:     "#121316",
};

type ChromeProps = {
  duration: string;
  dark?: boolean;
  pageNum?: number;
  total?: number;
};

export function Chrome({ duration, dark = false, pageNum, total }: ChromeProps) {
  const tone = dark ? WF.cream : WF.ink;
  const logo = dark ? "/assets/logos/world-logo-white-tight.png" : "/assets/logos/world-logo-tight.png";
  return (
    <>
      <Image
        duration={duration}
        src={logo}
        style={{ position: "absolute", top: 58, left: 72, width: 210, height: 50, objectFit: "contain" }}
      />
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
        CONFIDENTIAL  ·  2026
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
