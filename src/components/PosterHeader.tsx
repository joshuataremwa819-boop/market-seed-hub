import EditableText from "./EditableText";

interface Props {
  title: string;
  subtitle: string;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

const PosterHeader = ({ title, subtitle, onTitleChange, onSubtitleChange }: Props) => (
  <div className="relative bg-poster-green rounded-xl overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-[-20px] left-[40px] w-[120px] h-[120px] rounded-full bg-poster-green-dark/40" />
    <div className="absolute bottom-[10px] right-[30px] w-[80px] h-[80px] rounded-full bg-poster-green-dark/30" />

    {/* Orange accent bar */}
    <div className="h-2 bg-poster-orange" />

    <div className="relative z-10 py-10 px-8 text-center">
      <EditableText
        value={title}
        onChange={onTitleChange}
        tag="h1"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-wide"
      />
      <EditableText
        value={subtitle}
        onChange={onSubtitleChange}
        tag="p"
        className="mt-3 text-lg md:text-xl text-yellow-100"
      />

      <div className="flex justify-center gap-12 mt-8">
        {["🌾 FARM", "📱 TECH", "🛒 SHOP"].map((label) => (
          <div
            key={label}
            className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-sm font-bold"
          >
            {label.split(" ")[0]}
            <br />
            <span className="text-[10px]">{label.split(" ")[1]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PosterHeader;
