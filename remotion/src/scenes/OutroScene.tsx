import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Poppins";

const { fontFamily } = loadFont("normal", { weights: ["600", "400"], subsets: ["latin"] });

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(
    spring({ frame, fps, config: { damping: 15 } }),
    [0, 1], [0.8, 1]
  );
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  const tagOpacity = interpolate(frame, [25, 50], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a5c1a 0%, #2d8a2d 40%, #1a7a1a 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily,
      }}
    >
      <div style={{ textAlign: "center", transform: `scale(${scale})`, opacity }}>
        <h1 style={{ fontSize: 72, color: "white", fontWeight: 600, margin: 0 }}>
          Smart Market <span style={{ color: "#FFB347" }}>Connect</span>
        </h1>
        <div style={{
          width: 300, height: 4, backgroundColor: "#FFB347",
          margin: "30px auto", borderRadius: 2,
        }} />
        <p style={{
          fontSize: 28, color: "rgba(255,255,255,0.8)", fontWeight: 400,
          opacity: tagOpacity,
        }}>
          Thank You
        </p>
        <p style={{
          fontSize: 20, color: "rgba(255,255,255,0.5)", fontWeight: 400,
          opacity: tagOpacity, marginTop: 10,
        }}>
          smartmarketconnect.com
        </p>
      </div>
    </AbsoluteFill>
  );
};
