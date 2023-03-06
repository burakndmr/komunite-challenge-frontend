// Components

// Types
type Props = {
  value: string;
};

export default function Title({ value }: Props) {
  return <div className="text-4xl font-bold">{value}</div>;
}
