import { Plus, X, Check } from "lucide-react";

interface Props {
  items: string[];
  onChange: (items: string[]) => void;
}

const FeatureCards = ({ items, onChange }: Props) => {
  const update = (i: number, v: string) => {
    const next = [...items];
    next[i] = v;
    onChange(next);
  };
  const add = () => onChange([...items, "New feature"]);
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-poster-green-light rounded-md px-3 py-2 group"
        >
          <Check className="w-4 h-4 text-poster-green flex-shrink-0" />
          <input
            value={item}
            onChange={(e) => update(i, e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm text-foreground"
          />
          <button
            onClick={() => remove(i)}
            className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-poster-red transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        onClick={add}
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-poster-green transition-colors"
      >
        <Plus className="w-3.5 h-3.5" /> Add feature
      </button>
    </div>
  );
};

export default FeatureCards;
