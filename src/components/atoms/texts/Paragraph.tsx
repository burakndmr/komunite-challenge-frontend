// Components

// Types
type Props = {
  value: string;
  status: "done" | "undone";
};

export default function Paragraph({ value, status }: Props) {
  const TextStatus = {
    done: "line-through",
    undone: "none",
  };

  return <p className={`${TextStatus[status]}`}>{value}</p>;
}
