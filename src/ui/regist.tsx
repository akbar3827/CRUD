import { useForm } from "react-hook-form";
import { superRefine, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { ServerDataUser } from "./serverAPI";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";

const RegistForm = z.object({
  nama: z.string().min(5, { message: "Minimal 5 character" }).trim(),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email format invalid")
    .trim(),
  password: z
    .string()
    // .regex(/^[A-Z]+[a-z]*$/, "Min 1 character uppercase")
    .trim(),
});

export const FormRegist = () => {
  type TypeForm = z.infer<typeof RegistForm>;

  // const [dataForm, setDataForm] = useState(<></>)
  const [show, setShow] = useState(false);

  const form = useForm<TypeForm>({
    resolver: zodResolver(RegistForm),
  });

  const HandleRegist = async (data: TypeForm) => {
    try {
      await ServerDataUser.post("/dataUser", {
        nama: data.nama,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      alert(`Failed : ${error}`);
    } finally {
      form.reset({
        nama: "",
        email: "",
        password: ""
      })
    }
  };

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
          <p className="mt-7 lg:text-base md:text-base text-xs text-gray-500">
            Welcome back! Please fill in your details below to create a new
            account.
          </p>
        </div>
        <div className="h-cover rounded-2xl w-[100%] py-10 pb-4 flex flex-col items-center justify-center">
          <form onSubmit={form.handleSubmit(HandleRegist)} className="w-[80%]">
            <div className="lg:pt-5 md:pt-5 pb-0 text-bold">
              <label htmlFor="nama" className="">
                <input
                  {...form.register("nama")}
                  type="text"
                  placeholder="Name"
                  className="py-4 w-[100%] px-5 rounded-lg outline outline-gray-300 focus:outline-gray-400"
                />
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
              <button
                className="cursor-pointer py-3 font-semibold-6 w-[100%] justify-center rounded-xl text-white bg-gray-900"
                type="submit"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
