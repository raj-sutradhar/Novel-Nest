import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative border-[2px] shadow-md p-5 rounded-md w-96">
        {/* Close button */}
        <Link
          to="/"
          className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full transition duration-300 hover:bg-gray-200"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg text-center">Sign Up</h3>

        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 flex flex-col space-y-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-3 border rounded-md outline-none py-1"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 border rounded-md outline-none py-1"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3 border rounded-md outline-none py-1"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button type="submit" className="btn btn-secondary">
              Sign up
            </button>
            <p className="text-sm">
              Have an account?{" "}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Log in
              </button>
            </p>
          </div>
        </form>

        {/* Login Modal */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
