import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useRegist } from "./hook/useRegist";

export const FormRegist = () => {
  const {
    show,
    setShow,
    HandleRegist,
    isLoggedIn,
    setIsLoggedIn,
    errName,
    form,
  } = useRegist();

  function Home() {
    return (
      <Link to="/"></Link>
    )
  }

  return (
    <>
      <nav className="mt-5 mb-15 mx-3">
        <Link to="/login">
          <i className="bx bx-arrow-left-stroke text-5xl"></i>
        </Link>
      </nav>
      <div className="mx-auto md:w-[70vw] w-[80%] my-auto flex flex-col items-center lg:w-[50vw]">
        <div className="text-center">
          <p className="text-3xl lg:text-4xl w-[100%] text-gray-900">
            <b>Sign up</b>
          </p>
          <p className="mt-7 md:text-base text-xs text-gray-500">
            Welcome back! Please fill in your details below to create a new
            account.
          </p>
        </div>
        <div className="h-cover rounded-2xl w-[100%] py-10 pb-4 flex flex-col items-center justify-center">
          <form onSubmit={form.handleSubmit(HandleRegist)} className="w-[80%]">
            <div className="md:pt-5 pb-0 text-bold">
              <label htmlFor="nama" className="">
                <input
                  {...form.register("nama")}
                  type="text"
                  placeholder="Name"
                  className="py-4 w-[100%] px-5 rounded-lg outline outline-gray-300 focus:outline-gray-400"
                />
                <p className="text-xs text-red-500"></p>
              </label>
            </div>
            <div className="pt-8 pb-0">
              <label htmlFor="nama">
                <input
                  {...form.register("email")}
                  type="text"
                  placeholder="Email"
                  className="py-4 w-[100%] px-5 rounded-lg outline outline-gray-300 focus:outline-gray-400"
                />
              </label>
            </div>
            <div className="pt-8 pb-0 relative">
              <label htmlFor="nama">
                <input
                  {...form.register("password")}
                  type={show ? "text" : "password"}
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
              <div
                className="text-center cursor-pointer py-3 font-semibold-6 w-[100%] justify-center rounded-xl text-white bg-gray-900"
                onClick={() => {
                  setIsLoggedIn(true);
                  Home();
                }}
              >
                login
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
