// Components

// Types
type Props = {
  value: string;
  name: string;
};

export default function SubmitInput({ value, name }: Props) {
  return <input type="submit" name={name} value={value} className="" />;
}
