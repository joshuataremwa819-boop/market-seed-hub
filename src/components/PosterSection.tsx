import EditableText from "./EditableText";

interface PosterSectionProps {
  title: string;
  onTitleChange: (v: string) => void;
  color: "green" | "orange" | "red";
  children: React.ReactNode;
}

const colorMap = {
  green: "bg-poster-green",
  orange: "bg-poster-orange",
  red: "bg-poster-red",
};

const textColorMap = {
  green: "text-poster-green",
  orange: "text-poster-orange",
  red: "text-poster-red",
};

const PosterSection = ({ title, onTitleChange, color, children }: PosterSectionProps) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-1.5 h-8 rounded-sm ${colorMap[color]}`} />
      <EditableText
        value={title}
        onChange={onTitleChange}
        tag="h3"
        className={`text-lg font-bold uppercase tracking-wide ${textColorMap[color]}`}
      />
    </div>
    {children}
  </div>
);

export default PosterSection;
