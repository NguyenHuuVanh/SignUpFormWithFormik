import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: false,
  });
  return (
    <div className="form_checkbox">
      <input
        className="checkbox"
        type="checkbox"
        checked={field.value}
        {...field}
        {...props}
      />
      <p className="checkbox_text">I accept the terms and conditions</p>
    </div>
  );
};

export default CheckboxHook;
