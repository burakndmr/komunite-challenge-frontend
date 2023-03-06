// Components

// Types
type Props = {
  action: () => void;
  value: string;
  variant: "emerald" | "red";
};

export default function PrimaryButton({ variant, action, value }: Props) {
  const colors = {
    emerald: "bg-emerald-600 hover:bg-emerald-500",
    red: "bg-red-600 hover:bg-red-500",
  };

  return (
    <div
      onClick={action}
      className={`${colors[variant]} p-2 text-white font-bold rounded-md
     `}
    >
      {value}
    </div>
  );
}
