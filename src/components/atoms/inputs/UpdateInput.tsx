// Components

import { forwardRef } from "react";

// Types
type Props = {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

const UpdateInput = forwardRef<HTMLInputElement, Props>(
  ({ action, value, name }: Props, ref) => (
    <input
      ref={ref}
      onChange={action}
      type="text"
      name={name}
      value={value}
      className="w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-sky-600"
    />
  )
);

export default UpdateInput;
