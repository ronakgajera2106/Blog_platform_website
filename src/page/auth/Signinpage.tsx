/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
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
    setFieldValue,
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
    <div className="flex justify-center items-center h-screen">
      <Card
        color="transparent"
        shadow={false}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Sign In
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              type="email"
              name="emailaddress"
              label="Your Email"
              placeholder="name@mail.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emailaddress}
              error={touched.emailaddress && Boolean(errors.emailaddress)}
              // success={touched.emailaddress && !errors.emailaddress}
              className={`${
                errors.emailaddress && touched.emailaddress
                  ? "border-red-500"
                  : "border-blue-gray-200 focus:border-gray-900"
              }`}
              labelProps={{
                className: "",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            {touched.emailaddress && errors.emailaddress && (
              <Typography
                color="red"
                className="text-sm -mt-5"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {errors.emailaddress}
              </Typography>
            )}
            <Input
              size="lg"
              type="password"
              name="password"
              label="Password"
              placeholder="********"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              // success={touched.password && !errors.password}
              className={`${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-blue-gray-200 focus:border-gray-900"
              }`}
              labelProps={{
                className: "",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            {touched.password && errors.password && (
              <Typography
                color="red"
                className="text-sm -mt-5"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {errors.password}
              </Typography>
            )}
          </div>
          <Checkbox
            label={
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            checked={values.checked}
            onChange={() => setFieldValue("checked", !values.checked)}
            containerProps={{ className: "-ml-2.5" }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Button
            className="mt-6"
            type="submit"
            fullWidth
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Sign In
          </Button>
          <Typography
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
