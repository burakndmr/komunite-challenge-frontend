// Components

// Types
type Props = {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export default function AddInput({ action, value, name }: Props) {
  return (
    <input
      type="text"
      onChange={action}
      name={name}
      value={value}
      className=""
    />
  );
}
