import React from "react";
import { useForm } from "react-hook-form";
import "../style/index.css";
import CheckboxHook from "./checkbox/CheckboxHook";
import DropdownHook from "./dropdown/DropdownHook";
import InputHook from "./input/InputHook";
import RadioHook from "./radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Please enter your username")
      .max(20, "Up to 20 characters")
      .min(8, "At least 8 characters"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        }
      )
      .min(8, "Your password at least 8 characters")
      .required(),
    email: yup
      .string()
      .email("Please enter valid your email address")
      .required("Please enter your email address"),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male or female"),
    checkbox: yup
      .boolean()
      .required("Please accept your terms and conditions")
      .oneOf([true], "The terms and conditions must be accepted."),
  })
  .required();

const RegisterHook = () => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: "male",
    },
  });

  const dropdownData = [
    { id: 1, value: "teacher", text: "Teacher" },
    { id: 2, value: "developer", text: "Developer" },
    { id: 3, value: "doctor", text: "Doctor" },
    { id: 4, value: "coder", text: "Coder" },
  ];
  const onSubmitHandler = (data) => {
    if (!isValid) return;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log(data);
        reset({
          username: "",
          password: "",
          email: "",
          gender: "male",
          job: "",
          checkbox: false,
        });
      }, 5000);
    });
  };
  const watchGender = watch("gender");
  console.log(
    "🚀 ~ file: RegisterHook.js:56 ~ RegisterHook ~ watchgender:",
    watchGender
  );
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="register">
        <div className="form">
          <h1 className="form_title">Register Form</h1>
          <label htmlFor="username" className="form_group">
            Username
          </label>
          <InputHook
            name="username"
            control={control}
            placeholder="Enter your username"
            id="username"
            type="text"
          ></InputHook>
          {errors.username && (
            <p className="form_error">{errors.username.message}</p>
          )}

          <label htmlFor="Password" className="form_group">
            Password
          </label>
          <InputHook
            name="password"
            control={control}
            placeholder="Enter your password"
            id="password"
            type="password"
          ></InputHook>
          {errors.password && (
            <p className="form_error">{errors.password.message}</p>
          )}

          <label htmlFor="email" className="form_group">
            Email address
          </label>
          <InputHook
            name="email"
            control={control}
            placeholder="Enter your email address"
            id="email"
            type="email"
          ></InputHook>
          {errors.email && <p className="form_error">{errors.email.message}</p>}

          <label className="form_group">Gender</label>
          <div className="form_radio">
            <div className="sex">
              <RadioHook
                control={control}
                name="gender"
                value="male"
                checked={watchGender === "male"}
              ></RadioHook>
              <span className="text">Male</span>
            </div>
            <div className="sex">
              <RadioHook
                control={control}
                name="gender"
                value="female"
                checked={watchGender === "female"}
              ></RadioHook>
              <span className="text">Female</span>
            </div>
          </div>
          {errors.gender && (
            <p className="form_error">{errors.gender.message}</p>
          )}

          <label className="form_group">Are you</label>
          <DropdownHook
            control={control}
            setValue={setValue}
            name="job"
            data={dropdownData}
            dropDownLabel="Please select a job"
          ></DropdownHook>

          <CheckboxHook control={control} name="checkbox"></CheckboxHook>
          {errors.checkbox && (
            <p className="form_error">{errors.checkbox.message}</p>
          )}

          <button
            className={`form_submit ${isSubmitting ? "setloading" : ""} `}
            disabled={isSubmitting}
          >
            {isSubmitting ? <div className="loading"></div> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterHook;
