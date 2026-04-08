import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, staticFile, Img } from "remotion";
import { loadFont } from "@remotion/google-fonts/Poppins";

const { fontFamily } = loadFont("normal", { weights: ["600", "400"], subsets: ["latin"] });

interface Props {
  image: string;
  title: string;
  description: string;
}

export const PageScene: React.FC<Props> = ({ image, title, description }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const imgScale = interpolate(
    spring({ frame, fps, config: { damping: 20, stiffness: 80 } }),
    [0, 1], [0.9, 1]
  );
  const imgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const labelOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });
  const labelY = interpolate(
    spring({ frame: frame - 15, fps, config: { damping: 15 } }),
    [0, 1], [30, 0]
  );

  const descOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

  // Subtle floating motion for the screenshot
  const floatY = Math.sin(frame * 0.04) * 3;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #0f2b0f 0%, #1a3d1a 50%, #0d260d 100%)",
        fontFamily,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "60px 80px",
      }}
    >
      {/* Left: label */}
      <div style={{
        width: 400, display: "flex", flexDirection: "column",
        justifyContent: "center", marginRight: 60,
      }}>
        <div style={{
          width: 50, height: 4, backgroundColor: "#FFB347",
          marginBottom: 20, opacity: labelOpacity,
        }} />
        <h2 style={{
          fontSize: 52, color: "white", fontWeight: 600, margin: 0,
          opacity: labelOpacity, transform: `translateY(${labelY}px)`,
          lineHeight: 1.2,
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: 22, color: "rgba(255,255,255,0.7)", marginTop: 16,
          opacity: descOpacity, lineHeight: 1.5, fontWeight: 400,
        }}>
          {description}
        </p>
      </div>

      {/* Right: screenshot */}
      <div style={{
        flex: 1, display: "flex", justifyContent: "center", alignItems: "center",
      }}>
        <div style={{
          transform: `scale(${imgScale}) translateY(${floatY}px)`,
          opacity: imgOpacity,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}>
          <Img
            src={staticFile(image)}
            style={{ width: 1300, height: "auto", display: "block" }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
