"use client";
import React from "react";
import { useFormik } from "formik";
import Layout from "@/components/layout/page";
import { Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { addUserDetails } from "@/redux/reducerSlice/userSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";


const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const loginUser = async (values) => {
    const res = await fetch("http://localhost:5000/login/", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.status == 200) {
      dispatch(addUserDetails(data));
      router.push("/home");
    }
    toast(data.msg);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });
  return (
    
    <Layout>
      <h2 className="text-center text-2xl font-bold mt-5 mb-3">
        Sign In
      </h2>
      <div className="relative flex flex-col w-1/2 mx-auto text-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="relative flex w-full flex-wrap mb-2 md:flex-nowrap gap-4">
            <Input
              type="email"
              label="Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="error-message absolute left-full text-red-500 text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-wrap mb-2 md:flex-nowrap gap-4">
            <Input
              type="password"
              label="Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="error-message absolute left-full text-red-500 text-sm">
                {formik.errors.password}
              </p>
            )}
          </div>
          <button className="bg-green-200 px-4 py-3 rounded-xl" type="submit">
            Log In
          </button>
          <div className="text-xl ">
              Don't have an account?{"  "}
              <Link href="/register" className="text-blue-900">
                Register Now
              </Link>
            </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignInForm;