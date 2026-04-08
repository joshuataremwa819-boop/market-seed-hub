import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Poppins";

const { fontFamily } = loadFont("normal", { weights: ["600", "400"], subsets: ["latin"] });

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleY = interpolate(
    spring({ frame, fps, config: { damping: 20, stiffness: 100 } }),
    [0, 1], [60, 0]
  );
  const titleOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = interpolate(
    spring({ frame: frame - 30, fps, config: { damping: 20 } }),
    [0, 1], [40, 0]
  );

  const lineWidth = interpolate(frame, [50, 90], [0, 400], { extrapolateRight: "clamp" });

  const tagOpacity = interpolate(frame, [70, 95], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a5c1a 0%, #2d8a2d 40%, #1a7a1a 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily,
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
      }} />
      <div style={{
        position: "absolute", bottom: -150, left: -150,
        width: 600, height: 600, borderRadius: "50%",
        background: "rgba(255,255,255,0.03)",
      }} />

      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div style={{
          fontSize: 28, color: "rgba(255,255,255,0.7)", letterSpacing: 6,
          marginBottom: 20, opacity: tagOpacity, fontWeight: 400,
        }}>
          UNIVERSITY PROJECT 2026
        </div>

        <h1 style={{
          fontSize: 90, color: "white", fontWeight: 600,
          transform: `translateY(${titleY}px)`, opacity: titleOpacity,
          lineHeight: 1.1, margin: 0,
        }}>
          Smart Market
          <br />
          <span style={{ color: "#FFB347" }}>Connect</span>
        </h1>

        <div style={{
          width: lineWidth, height: 4, backgroundColor: "#FFB347",
          margin: "30px auto", borderRadius: 2,
        }} />

        <p style={{
          fontSize: 32, color: "rgba(255,255,255,0.85)",
          opacity: subtitleOpacity, transform: `translateY(${subtitleY}px)`,
          fontWeight: 400, margin: 0,
        }}>
          Connecting Farmers to Buyers Digitally
        </p>
      </div>
    </AbsoluteFill>
  );
};
