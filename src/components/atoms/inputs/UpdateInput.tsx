// Components

// Types
type Props = {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export default function UpdateInput({ action, value, name }: Props) {
  return (
    <input
      onChange={action}
      type="text"
      name={name}
      value={value}
      className=""
    />
  );
}
