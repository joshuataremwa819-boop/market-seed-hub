import { Plus, X } from "lucide-react";

interface Props {
  items: string[];
  onChange: (items: string[]) => void;
  bulletColor?: "green" | "orange" | "red" | "blue";
  numbered?: boolean;
}

const dotColors = {
  green: "bg-poster-green",
  orange: "bg-poster-orange",
  red: "bg-poster-red",
  blue: "bg-poster-blue",
};

const numColors = {
  green: "bg-poster-green",
  orange: "bg-poster-orange",
  red: "bg-poster-red",
  blue: "bg-poster-blue",
};

const EditableBulletList = ({ items, onChange, bulletColor = "orange", numbered = false }: Props) => {
  const updateItem = (i: number, val: string) => {
    const next = [...items];
    next[i] = val;
    onChange(next);
  };
  const addItem = () => onChange([...items, "New item"]);
  const removeItem = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 group">
          {numbered ? (
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full ${numColors[bulletColor]} text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5`}
            >
              {i + 1}
            </span>
          ) : (
            <span className={`flex-shrink-0 w-3 h-3 rounded-full ${dotColors[bulletColor]} mt-1.5`} />
          )}
          <input
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm text-foreground hover:bg-poster-green-light/50 focus:bg-poster-green-light px-1 py-0.5 rounded transition-colors"
          />
          <button
            onClick={() => removeItem(i)}
            className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-poster-red transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={addItem}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-poster-green transition-colors"
        >
          <Plus className="w-3.5 h-3.5" /> Add item
        </button>
      </li>
    </ul>
  );
};

export default EditableBulletList;
