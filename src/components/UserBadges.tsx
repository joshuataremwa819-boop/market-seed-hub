import { Plus, X } from "lucide-react";

interface UserBadge {
  label: string;
  color: "green" | "orange" | "blue";
}

interface Props {
  users: UserBadge[];
  onChange: (users: UserBadge[]) => void;
}

const bgMap = {
  green: "bg-poster-green",
  orange: "bg-poster-orange",
  blue: "bg-poster-blue",
};

const colors: Array<"green" | "orange" | "blue"> = ["green", "orange", "blue"];

const UserBadges = ({ users, onChange }: Props) => {
  const update = (i: number, label: string) => {
    const next = [...users];
    next[i] = { ...next[i], label };
    onChange(next);
  };
  const add = () => onChange([...users, { label: "New User", color: colors[users.length % 3] }]);
  const remove = (i: number) => onChange(users.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-2">
      {users.map((u, i) => (
        <div key={i} className={`${bgMap[u.color]} rounded-md px-4 py-2 flex items-center group`}>
          <input
            value={u.label}
            onChange={(e) => update(i, e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-primary-foreground text-center"
          />
          <button
            onClick={() => remove(i)}
            className="opacity-0 group-hover:opacity-100 text-primary-foreground/60 hover:text-primary-foreground transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        onClick={add}
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-poster-green transition-colors"
      >
        <Plus className="w-3.5 h-3.5" /> Add user type
      </button>
    </div>
  );
};

export default UserBadges;
