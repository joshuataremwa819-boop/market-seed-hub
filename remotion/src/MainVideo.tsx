import { AbsoluteFill, Sequence } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { IntroScene } from "./scenes/IntroScene";
import { PageScene } from "./scenes/PageScene";
import { OutroScene } from "./scenes/OutroScene";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1a0a" }}>
      <TransitionSeries>
        {/* Intro - 0:00 to 0:05 */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <IntroScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Home Page - 0:05 to 0:11 */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <PageScene
            image="images/home.png"
            title="Home Page"
            description="Landing page with hero section, stats, and core features overview"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Features Page - 0:11 to 0:17 */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <PageScene
            image="images/features.png"
            title="Features"
            description="Product listings, direct connections, mobile design, and price comparison"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* About Page - 0:17 to 0:22 */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <PageScene
            image="images/about.png"
            title="About Us"
            description="Mission, vision, and the problem we solve for farmers"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Contact Page - 0:22 to 0:26 */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <PageScene
            image="images/contact.png"
            title="Contact"
            description="Get in touch — email, phone, and contact form"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Poster Page - 0:26 to 0:30 */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <PageScene
            image="images/poster.png"
            title="Project Poster"
            description="Complete project overview — problem, solution, features, and metrics"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Outro */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
