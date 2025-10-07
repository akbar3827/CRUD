import { useForm } from "react-hook-form";
import { superRefine, z } from "zod";
import { ServerDataUser } from "../serverAPI";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";


export const useRegist = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [errName, setErrName] = useState("")

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

  type TypeForm = z.infer<typeof RegistForm>;

  // const [dataForm, setDataForm] = useState(<></>)
  const [show, setShow] = useState(false);

  const form = useForm<TypeForm>({
    resolver: zodResolver(RegistForm)
  });

  const HandleRegist = async (data: TypeForm) => {
    try {
      await ServerDataUser.post("/dataUser", {
        nama: data.nama,
        email: data.email,
        password: data.password,
      });
      setIsLoggedIn(true);
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

  return {show, setShow, HandleRegist, setIsLoggedIn, isLoggedIn, errName, form}
}