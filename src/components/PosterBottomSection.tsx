import EditableText from "./EditableText";

interface Metric {
  label: string;
}

interface Props {
  metrics: Metric[];
  onMetricsChange: (metrics: Metric[]) => void;
}

const PosterBottomSection = ({ metrics, onMetricsChange }: Props) => {
  const updateMetric = (i: number, label: string) => {
    const next = [...metrics];
    next[i] = { label };
    onMetricsChange(next);
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
        <div className="w-24 h-24 bg-primary-foreground rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
          <span className="text-muted-foreground text-xs text-center">QR CODE<br />HERE</span>
        </div>
      </div>
    </div>
  );
};

export default PosterBottomSection;
