import { useField } from "formik";
import React from "react";

const CheckboxFormik = (props) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="form_checkbox">
        <input className="checkbox" {...field} {...props}></input>
        <p className="checkbox_text">I accept the terms and conditions</p>
      </div>
      <div>
        {meta.error && meta.touched ? (
          <p className="form_error">{meta.error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default CheckboxFormik;
