/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SignUpValuestypes } from "../../types/auth";
import { useMutation } from "@tanstack/react-query";
import UseToast from "../../hooks/UseToast";
import { RegisterAPI } from "../api/auth";

export const SignUppage = () => {
  const navigate = useNavigate();

  const mutation = useMutation(RegisterAPI, {
    onSuccess: (data: any) => {
      console.log(data, "DTAAA");
      UseToast(data.data.message, "success");
      navigate("/signin");
    },
    onError: (error: any) => {
      console.log(error, "error");
      UseToast(error?.response?.data.error, "error");
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<SignUpValuestypes>({
      initialValues: {
        firstname: "",
        lastname: "",
        phnnumber: "",
        emailaddress: "",
        password: "",
      },
      validationSchema: Yup.object({
        firstname: Yup.string().required("please enter your Firstname !!"),
        lastname: Yup.string().required("please enter your Lastname !!"),
        phnnumber: Yup.string().required("please enter your phnnumber !!"),
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
    <>
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
            Sign Up
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
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                First Name
              </Typography>
              <Input
                size="lg"
                type="text"
                name="firstname"
                label="First Name"
                placeholder="jonny"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                error={touched.firstname && Boolean(errors.firstname)}
                className={`${
                  errors.firstname && touched.firstname
                    ? "border-red-500"
                    : "border-blue-gray-200 focus:border-gray-900"
                }`}
                // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "",
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              {touched.firstname && errors.firstname && (
                <Typography
                  color="red"
                  className="text-sm -mt-5"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {errors.firstname}
                </Typography>
              )}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Last Name
              </Typography>
              <Input
                size="lg"
                placeholder="blondy"
                type="text"
                name="lastname"
                label="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                error={touched.lastname && Boolean(errors.lastname)}
                className={`${
                  errors.lastname && touched.lastname
                    ? "border-red-500"
                    : "border-blue-gray-200 focus:border-gray-900"
                }`}
                // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "",
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />{" "}
              {touched.lastname && errors.lastname && (
                <Typography
                  color="red"
                  className="text-sm -mt-5"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {errors.lastname}
                </Typography>
              )}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Phone Number
              </Typography>
              <Input
                size="lg"
                placeholder="+854 852 145 22"
                type="tel"
                name="phnnumber"
                label="Phn Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phnnumber}
                error={touched.phnnumber && Boolean(errors.phnnumber)}
                className={`${
                  errors.phnnumber && touched.phnnumber
                    ? "border-red-500"
                    : "border-blue-gray-200 focus:border-gray-900"
                }`}
                // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "",
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              {touched.phnnumber && errors.phnnumber && (
                <Typography
                  color="red"
                  className="text-sm -mt-5"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {errors.phnnumber}
                </Typography>
              )}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Your Email
              </Typography>
              <Input
                size="lg"
                type="email"
                name="emailaddress"
                label="Your Email"
                placeholder="Jonny@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailaddress}
                error={touched.emailaddress && Boolean(errors.emailaddress)}
                className={`${
                  errors.firstname && touched.emailaddress
                    ? "border-red-500"
                    : "border-blue-gray-200 focus:border-gray-900"
                }`}
                // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Password
              </Typography>
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="********"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                className={`${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-blue-gray-200 focus:border-gray-900"
                }`}
                size="lg"
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

            <Button
              className="mt-6"
              type="submit"
              fullWidth
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              sign up
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
};
