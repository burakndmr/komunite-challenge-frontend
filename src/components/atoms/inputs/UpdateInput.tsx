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
    <>
      {console.log(ref)}
      <input
        ref={ref}
        onChange={action}
        type="text"
        name={name}
        value={value}
        className=""
      />
    </>
  )
);

export default UpdateInput;
