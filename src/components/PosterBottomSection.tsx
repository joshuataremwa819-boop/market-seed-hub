import { useRef } from "react";
import { Upload, X } from "lucide-react";

interface Metric {
  label: string;
}

interface Props {
  metrics: Metric[];
  onMetricsChange: (metrics: Metric[]) => void;
  qrImage: string | null;
  onQrImageChange: (url: string | null) => void;
}

const PosterBottomSection = ({ metrics, onMetricsChange, qrImage, onQrImageChange }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateMetric = (i: number, label: string) => {
    const next = [...metrics];
    next[i] = { label };
    onMetricsChange(next);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onQrImageChange(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-poster-green rounded-xl p-6 flex flex-col md:flex-row justify-between gap-6">
      <div>
        <h3 className="text-xl font-bold text-primary-foreground mb-4">KEY METRICS</h3>
        <div className="space-y-2">
          {metrics.map((m, i) => (
            <div key={i} className="bg-poster-green-dark rounded-md px-4 py-2">
              <input
                value={m.label}
                onChange={(e) => updateMetric(i, e.target.value)}
                className="bg-transparent border-none outline-none text-sm text-primary-foreground w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h4 className="text-sm font-bold text-primary-foreground mb-2">SCAN TO VISIT</h4>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {qrImage ? (
          <div className="relative group">
            <img src={qrImage} alt="QR Code" className="w-24 h-24 rounded-lg object-contain bg-primary-foreground p-1" />
            <button
              onClick={() => onQrImageChange(null)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-poster-red flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3 text-primary-foreground" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-24 h-24 bg-primary-foreground rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/30 hover:border-poster-orange transition-colors cursor-pointer"
          >
            <Upload className="w-5 h-5 text-muted-foreground mb-1" />
            <span className="text-muted-foreground text-[10px] text-center">Upload<br />QR Code</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PosterBottomSection;
