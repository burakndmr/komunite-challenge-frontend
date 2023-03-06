// Components

// Types
type Props = {
  value: string;
  name: string;
};

export default function SubmitInput({ value, name }: Props) {
  return (
    <input
      type="submit"
      name={name}
      value={value}
      className="w-full text-center basis-2/12 bg-sky-600 rounded-md text-white font-bold active:bg-sky-900"
    />
  );
}
