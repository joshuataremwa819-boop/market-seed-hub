import { useState, useRef, useEffect } from "react";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "li";
  placeholder?: string;
}

const EditableText = ({
  value,
  onChange,
  className = "",
  tag: Tag = "span",
  placeholder = "Click to edit",
}: EditableTextProps) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => setText(value), [value]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  if (editing) {
    return (
      <textarea
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => {
          setEditing(false);
          onChange(text);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setEditing(false);
            onChange(text);
          }
          if (e.key === "Escape") {
            setEditing(false);
            setText(value);
          }
        }}
        className={`${className} bg-transparent border border-dashed border-poster-orange/50 outline-none resize-none w-full`}
        rows={1}
        style={{ minHeight: "1.5em" }}
      />
    );
  }

  return (
    <Tag
      onClick={() => setEditing(true)}
      className={`${className} cursor-pointer hover:outline hover:outline-1 hover:outline-dashed hover:outline-poster-orange/40 transition-all rounded-sm`}
      title="Click to edit"
    >
      {value || placeholder}
    </Tag>
  );
};

export default EditableText;
