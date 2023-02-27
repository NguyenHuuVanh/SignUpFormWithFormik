import { useField } from "formik";
import React from "react";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="form_group">
        {label}
      </label>
      <input className="form_input" {...field} {...props} />
      {meta.error && meta.touched ? (
        <p className="form_error">{meta.error}</p>
      ) : null}
    </>
  );
};

export default InputFormik;
