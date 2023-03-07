// Components

// Types
type Props = {
  value: string;
  name: string;
  disabled: "disable" | "notDisable";
};

export default function SubmitInput({ value, name, disabled }: Props) {
  const buttonStatus = {
    disable: "bg-gray-600",
    notDisable: "bg-sky-600 active:bg-sky-900",
  };
  console.log("VALIDATION", disabled);
  return (
    <input
      type="submit"
      name={name}
      value={value}
      disabled={disabled === "disable" ? true : false}
      className={`${buttonStatus[disabled]} w-full text-center basis-2/12 rounded-md text-white font-bold`}
    />
  );
}
