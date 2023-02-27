import React from "react";
import InputFormik from "./input/InputFormik";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioFormik from "./radio/RadioFormik";
import CheckboxFormik from "./checkbox/CheckboxFormik";
import DropdownFormik from "./dropdown/DropdownFormik";
import logo from "./images/monkey.png";
import AreaForm from "./dropdown/AreaForm";

const dropdownData = [
  { id: 1, value: "teacher", text: "Teacher" },
  { id: 2, value: "developer", text: "Developer" },
  { id: 3, value: "doctor", text: "Doctor" },
  { id: 4, value: "coder", text: "Coder" },
];

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup
          .string()
          .max(20, "Must be 20 characters or less")
          .min(8, "Must be at least 8 characters")
          .required("Please enter your username"),
        password: yup
          .string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
              message:
                "Your password must at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
            }
          )
          .min(8, "Your password at least 8 characters")
          .required("Please enter your password"),
        email: yup
          .string()
          .email("Please enter valid your email address")
          .required("Please enter your email address"),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        job: yup.string().required("Please input your job"),
        term: yup
          .boolean()
          .required("Please accept your terms and conditions")
          .oneOf([true], "The terms and conditions must be accepted."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        return (
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="form_header">
              <img className="form_img" src={logo} alt=""></img>
              <h1 className="form_title">Monkey Blogging</h1>
            </div>

            <InputFormik
              name="username"
              placeholder="Enter your username"
              id="username"
              type="text"
              label={"username"}
            ></InputFormik>

            <InputFormik
              name="password"
              placeholder="Enter your password"
              id="password"
              type="password"
              label={"Password"}
            ></InputFormik>

            <InputFormik
              name="email"
              placeholder="Enter your email address"
              id="email"
              type="email"
              label={"Email address"}
            ></InputFormik>

            <label className="form_group">Gender</label>
            <div className="form_radio">
              <div className="sex">
                <RadioFormik
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                ></RadioFormik>
                <span className="text">Male</span>
              </div>
              <div className="sex">
                <RadioFormik
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                ></RadioFormik>
                <span className="text">Female</span>
              </div>
            </div>

            <AreaForm
              label="Are you"
              id="job"
              name="job"
              placeholder="Please input your job"
            ></AreaForm>

            <CheckboxFormik
              type="checkbox"
              name="term"
              id="term"
            ></CheckboxFormik>

            <button
              type="submit"
              className={`form_submit ${
                formik.isSubmitting ? "setloading" : ""
              }`}
            >
              {formik.isSubmitting ? <div className="loading"></div> : "Submit"}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
