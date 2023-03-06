// Components

// Types
type Props = {
  action: () => void;
  value: string;
};

export default function PrimaryButton({ action, value }: Props) {
  return (
    <div onClick={action} className="">
      {value}
    </div>
  );
}
