import { useState } from "react";
import PosterHeader from "@/components/PosterHeader";
import PosterSection from "@/components/PosterSection";
import EditableBulletList from "@/components/EditableBulletList";
import FeatureCards from "@/components/FeatureCards";
import UserBadges from "@/components/UserBadges";
import PosterBottomSection from "@/components/PosterBottomSection";

const Index = () => {
  const [title, setTitle] = useState("SMART MARKET CONNECT");
  const [subtitle, setSubtitle] = useState("Connecting Farmers to Buyers Digitally");
  const [qrImage, setQrImage] = useState<string | null>(null);

  const [problems, setProblems] = useState([
    "Farmers lack direct market access",
    "Middlemen reduce profits",
    "Buyers lack reliable suppliers",
  ]);
  const [solutions, setSolutions] = useState([
    "Digital marketplace",
    "Direct farmer-to-buyer connection",
    "Transparent pricing",
  ]);
  const [steps, setSteps] = useState([
    "Farmer uploads products",
    "Buyer browses products",
    "Buyer places order",
    "Delivery arranged",
  ]);
  const [features, setFeatures] = useState([
    "Product listings",
    "Order system",
    "Mobile-friendly design",
    "Price comparison",
  ]);
  const [users, setUsers] = useState([
    { label: "Farmers", color: "green" as const },
    { label: "Hotels", color: "orange" as const },
    { label: "Households", color: "blue" as const },
  ]);
  const [businessModel, setBusinessModel] = useState([
    "5% commission per transaction",
    "Delivery service fees",
  ]);
  const [marketing, setMarketing] = useState([
    "WhatsApp marketing",
    "Facebook ads",
    "Local radio",
  ]);
  const [metrics, setMetrics] = useState([
    { label: "Number of Users" },
    { label: "Orders per Week" },
    { label: "Farmer Income Increase" },
  ]);

  const [sectionTitles, setSectionTitles] = useState({
    problem: "PROBLEM",
    solution: "SOLUTION",
    howItWorks: "HOW IT WORKS",
    keyFeatures: "KEY FEATURES",
    targetUsers: "TARGET USERS",
    businessModel: "BUSINESS MODEL",
    marketingStrategy: "MARKETING STRATEGY",
  });

  const updateSectionTitle = (key: keyof typeof sectionTitles, val: string) =>
    setSectionTitles((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Poster container */}
        <div className="bg-background border border-border rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <PosterHeader
            title={title}
            subtitle={subtitle}
            onTitleChange={setTitle}
            onSubtitleChange={setSubtitle}
          />

          {/* 3-Column Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            {/* LEFT */}
            <div className="bg-poster-gray rounded-lg p-5 space-y-2">
              <PosterSection
                title={sectionTitles.problem}
                onTitleChange={(v) => updateSectionTitle("problem", v)}
                color="red"
              >
                <EditableBulletList items={problems} onChange={setProblems} bulletColor="red" />
              </PosterSection>

              <PosterSection
                title={sectionTitles.solution}
                onTitleChange={(v) => updateSectionTitle("solution", v)}
                color="green"
              >
                <EditableBulletList items={solutions} onChange={setSolutions} bulletColor="green" />
              </PosterSection>
            </div>

            {/* CENTER */}
            <div className="bg-poster-gray rounded-lg p-5 space-y-2">
              <PosterSection
                title={sectionTitles.howItWorks}
                onTitleChange={(v) => updateSectionTitle("howItWorks", v)}
                color="green"
              >
                <EditableBulletList items={steps} onChange={setSteps} bulletColor="orange" numbered />
              </PosterSection>

              <PosterSection
                title={sectionTitles.keyFeatures}
                onTitleChange={(v) => updateSectionTitle("keyFeatures", v)}
                color="green"
              >
                <FeatureCards items={features} onChange={setFeatures} />
              </PosterSection>
            </div>

            {/* RIGHT */}
            <div className="bg-poster-gray rounded-lg p-5 space-y-2">
              <PosterSection
                title={sectionTitles.targetUsers}
                onTitleChange={(v) => updateSectionTitle("targetUsers", v)}
                color="orange"
              >
                <UserBadges users={users} onChange={setUsers} />
              </PosterSection>

              <PosterSection
                title={sectionTitles.businessModel}
                onTitleChange={(v) => updateSectionTitle("businessModel", v)}
                color="orange"
              >
                <EditableBulletList items={businessModel} onChange={setBusinessModel} bulletColor="orange" />
              </PosterSection>

              <PosterSection
                title={sectionTitles.marketingStrategy}
                onTitleChange={(v) => updateSectionTitle("marketingStrategy", v)}
                color="orange"
              >
                <EditableBulletList items={marketing} onChange={setMarketing} bulletColor="orange" />
              </PosterSection>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-6 pb-6">
            <PosterBottomSection metrics={metrics} onMetricsChange={setMetrics} qrImage={qrImage} onQrImageChange={setQrImage} />
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground pb-4">
            Smart Market Connect — University Project 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
