import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  console.log("🚀 ~ file: RadioHook.js:10 ~ RadioHook ~ field:", field);
  return (
    <input
      type="radio"
      className="radio"
      {...field}
      {...props}
      value={props.value}
      checked={props.checked}
    />
  );
};

export default RadioHook;
