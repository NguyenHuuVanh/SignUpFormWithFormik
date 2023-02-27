import { useField } from "formik";
import React from "react";

const RadioFormik = (props) => {
  const [field] = useField(props);
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

export default RadioFormik;
