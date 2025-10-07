import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";

export const LoginForm = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="mt-5 mb-15 mx-3">
        <Link to="/">
          <i className="bx bx-arrow-left-stroke text-5xl"></i>
        </Link>
      </nav>
      <div className="mx-auto md:w-[70vw] w-[80%] my-auto flex flex-col items-center lg:w-[50vw]">
        <div className="text-center">
          <p className="text-3xl lg:text-4xl w-[100%] text-gray-900">
            <b>Welcome back</b>
          </p>
          <p className="mt-7 md:text-base text-xs text-gray-500">
            Welcome back! please enter your details.
          </p>
        </div>
        <div className="h-cover rounded-2xl w-[100%] py-10 pb-4 flex flex-col items-center justify-center">
          <form className="w-[80%]">
            <div className="md:pt-5 pb-0 text-bold">
              <label htmlFor="nama" className="">
                <input
                  // {...form.register("nama")}
                  type="text"
                  placeholder="Name"
                  className="py-4 w-[100%] px-5 rounded-lg outline outline-gray-300 focus:outline-gray-400"
                />
              </label>
            </div>
            <div className="pt-8 pb-0">
              <label htmlFor="nama">
                <input
                  // {...form.register("email")}
                  type="text"
                  placeholder="Email"
                  className="py-4 w-[100%] px-5 rounded-lg outline outline-gray-300 focus:outline-gray-400"
                />
              </label>
            </div>
            <div className="pt-8 pb-0 relative">
              <label htmlFor="nama">
                <input
                  // {...form.register("password")}
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  className="py-4 w-[100%] px-5 rounded-lg outline outline-gray-300 focus:outline-gray-400"
                />
                <IonIcon
                  icon={show ? eyeOff : eye}
                  onClick={() => setShow(!show)}
                  className="text-2xl absolute top-12 right-6 cursor-pointer"
                />
              </label>
            </div>
            <div className="w-[100%] flex pt-8 pb-0 mt-2">
              <button
                className="cursor-pointer py-3 font-semibold-6 w-[100%] justify-center rounded-xl text-white bg-gray-900"
                type="submit"
              >
                login
              </button>
            </div>
            <div className="w-[100%] flex pt-5 pb-0">
              <button
                className="cursor-pointer flex gap-3 py-3 font-semibold-6 w-[100%] justify-center rounded-xl text-gray-900 outline outline-gray-900"
                type="submit"
              >
                <img src="src/assets/google.png" className="w-6" /> Log in for
                Google
              </button>
            </div>
            <p className=" text-sm mt-6 text-center mb-6">
              Don't have an account?{" "}
              <Link to="/login/regist" className="font-semibold">
                Sign up for free
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
