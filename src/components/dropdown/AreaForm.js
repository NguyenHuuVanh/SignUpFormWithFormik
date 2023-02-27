import { useField } from "formik";
import React from "react";

const AreaForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="form_group" htmlFor={props.id}>
        {label}
      </label>
      <div className="form_area">
        <textarea className="text_area" {...field} {...props}></textarea>
        {meta.error && meta.touched ? (
          <p className="form_error">{meta.error}</p>
        ) : null}
      </div>
    </>
  );
};

export default AreaForm;
