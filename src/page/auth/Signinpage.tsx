/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SigninValuestypes } from "../../types/auth";
import { LogInAPI } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UseToast from "../../hooks/UseToast";
import useAuthStore from "../../store/auth";

export const Signinpage = () => {
  const { setUser, setToken } = useAuthStore();
  const navigate = useNavigate();
  const mutation = useMutation(LogInAPI, {
    onSuccess: (data: any) => {
      console.log(data.data, "DTAAA");
      setUser(data?.data?.data);
      UseToast(data.data.message, "success");
      setToken(data?.data?.data?.token);
      navigate("/");
    },
    onError: (data: any) => {
      console.log(data.response.data.error, "ERRROR");
      UseToast(data?.response?.data?.error, "error");
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    // setFieldValue,
  } = useFormik<SigninValuestypes>({
    initialValues: {
      emailaddress: "",
      password: "",
      checked: false,
    },
    validationSchema: Yup.object({
      emailaddress: Yup.string()
        .email("Invalid email address")
        .required("Please enter your Email !!"),
      password: Yup.string()
        .required("Please enter your Password !!")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Include at least one Uppercase, Lowercase, Number and a special character"
        ),
    }),
    onSubmit: (values) => {
      // console.log(values);
      mutation.mutate(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-[#EDF2F7]">
      <div className="max-w-sm w-full mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold text-center mb-3">Sign In</h1>
          <p className="text-center"> Lorem ipsum dolor, sit amet?</p>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-600 px-1 text-sm font-bold mb-2"
                htmlFor="emailaddress"
              >
                Email Address
              </label>
              <input
                type="text"
                id="emailaddress"
                name="emailaddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailaddress}
                className={`${
                  touched.emailaddress && errors.emailaddress
                    ? "border-red-500"
                    : "border-gray-300"
                } appearance-none block rounded-lg text-md w-full py-2 px-3 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md text-gray-700 leading-tight  focus:shadow-outline focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none`}
                placeholder="Enter your email address"
              />
              {touched.emailaddress && errors.emailaddress && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.emailaddress}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={`${
                  touched.password && errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } appearance-none block rounded-lg text-md w-full py-2 px-3 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md text-gray-700 leading-tight  focus:shadow-outline focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none`}
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mb-6 flex items-center justify-between">
              <label className="text-gray-700 font-bold">
                <input
                  type="checkbox"
                  className="mr-2 leading-tight"
                  id="checked"
                  name="checked"
                  onChange={handleChange}
                  checked={values.checked}
                />
                <span className="text-sm">Remember me</span>
              </label>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-black text-white font-semibold py-3 w-full mt-3 text-lg px-6 block shadow-xl rounded-lg focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
