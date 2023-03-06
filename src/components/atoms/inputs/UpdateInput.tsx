// Components

// Types
type Props = {
  value: string;
  name: string;
};

export default function UpdateInput({ value, name }: Props) {
  return <input type="text" name={name} value={value} className="" />;
}
