import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegist } from "./hook/useRegist";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [search, setSearch] = useState(true);

  return (
    <>
      <nav data-aos="fade-down" className="bg-white fixed z-50 w-full shadow-md">
        <div className="flex justify-between mx-auto py-6 pb-4 px-4 md:px-10">
          <div className="lg:hidden flex items-center">
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className={`${openMenu ? `bx bx-list` : `bx bx-x`} ${
                search ? "h-full" : "absolute left-[-100%]"
              } text-4xl cursor-pointer`}
            />
            <Link to="/keranjang">
              <img
                src="src/assets/basket.png"
                className={`w-9 ml-2 lg:hidden ${search ? "flex" : "hidden"}`}
              />
            </Link>
          </div>
          <div className="text-2xl lg:flex font-bold hidden items-center">
            <a href="#">Exclusive</a>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-[1vw] items-center cursor-pointer">
              <Link
                to="/"
                className="hover:text-red-500 transition-all ease-in-out duration-300"
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:text-red-500 transition-all ease-in-out duration-300"
              >
                Ürünler
              </Link>
              <Link
                to="/"
                className="hover:text-red-500 transition-all ease-in-out duration-300"
              >
                Teknolojiler
              </Link>
              <Link
                to="/"
                className="hover:text-red-500 transition-all ease-in-out duration-300"
              >
                İnsan Kaynakları
              </Link>
              <Link
                to="/"
                className="hover:text-red-500 transition-all ease-in-out duration-300"
              >
                Kurumsal
              </Link>
            </ul>
          </div>
          <div className="flex">
            <div className="flex items-center ">
              <i
                onClick={() => setSearch(!search)}
                className={`bxr relative bx-search-big mx-1 ${search? '' : "left-7"}`}
              ></i>
              <input
                type="text"
                placeholder="search"
                className={`transition-all md:flex relative focus:outline outline-gray-200 px-3 rounded-2xl caret-transparent md:focus:w-60 ${
                  search ? "hidden" : "w-[100dvw] pl-8"
                }`}
              />
            </div>
            <Link to="/keranjang">
              <img
                src="src/assets/basket.png"
                className="w-8 h-7 mx-2 hidden lg:flex"
              />
            </Link>

            <Link
              to="/login"
              className={`bg-gray-800 text-white items-center flex px-5 mx-2 rounded-2xl ${
                search ? "flex" : "hidden"
              }`}
            >
              Sig in
            </Link>
          </div>
        </div>
        <div
          className={`isMenuOpen flex justify-top pt-5 flex-col absolute lg:hidden items-center left-0 gap-6 pl-4 list-none w-[60vw] bg-white h-[100dvh] ${
            openMenu ? "left-[-100%]" : "left-0"
          }`}
        >
          <p className="font-semibold w-[100%] text-center pb-4">Exclusive</p>
          <Link
            to="/"
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Home
          </Link>
          <Link
            to="/"
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Ürünler
          </Link>
          <Link
            to="/"
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Teknolojiler
          </Link>
          <Link
            to="/"
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            İnsan Kaynakları
          </Link>
          <Link
            to="/"
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Kurumsal
          </Link>
        </div>
      </nav>
      <div
        onClick={() => setSearch(true)}
        className={`${
          search ? "hidden" : "flex"
        } bg-black/0 w-full h-dvh fixed z-20`}
      ></div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        id="overlay"
        className={`${
          openMenu ? "hidden" : "flex lg:hidden"
        } lg:hidden bg-black/10 inset-0 w-full h-dvh fixed z-40`}
      ></div>
    </>
  );
};
