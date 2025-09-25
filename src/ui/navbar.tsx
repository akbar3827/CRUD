import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <nav className="bg-white fixed z-50 w-full shadow-md">
        <div className="flex justify-between mx-auto py-6 pb-4 px-4 lg:px-10 md:px-10">
          <div className="lg:hidden flex items-center">
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className={`${
                openMenu ? `bx bx-list` : `bx bx-x`
              } h-full text-4xl cursor-pointer block`}
            />
          </div>
          <div className="text-2xl lg:flex font-bold hidden items-center">
            <a href="#">Exclusive</a>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-[1vw] items-center cursor-pointer">
              <Link to="/" 
                
                className="hover:text-red-500 transition-all ease-in-out duration-300"
              >
                Home
              </Link >
              <Link to="/"  className="hover:text-red-500 transition-all ease-in-out duration-300">
                Ürünler
              </Link >
              <Link to="/"  className="hover:text-red-500 transition-all ease-in-out duration-300">
                Teknolojiler
              </Link>
              <Link to="/"  className="hover:text-red-500 transition-all ease-in-out duration-300">
                İnsan Kaynakları
              </Link>
              <Link to="/"  className="hover:text-red-500 transition-all ease-in-out duration-300">
                Kurumsal
              </Link>
            </ul>
          </div>
          <div className="flex">
            <div className="flex  items-center ">
              <i className="bxr  bx-search-big mx-1"></i>
              <input
                type="text"
                placeholder="search"
                className="lg:flex md:flex focus:outline px-3 rounded-2xl caret-transparent w-20"
              />
            </div>
            <Link
              to="/login"
              className="bg-gray-800 text-white items-center flex px-5 mx-2 rounded-2xl"
            >
              Sig in
            </Link>
          </div>
        </div>
        <div
          className={`isMenuOpen flex justify-top pt-5 flex-col absolute xl:hidden items-center left-0 gap-6 pl-4 list-none w-[48vw] bg-white h-[100dvh] ${
            openMenu ? "left-[-100%]" : "left-0"
          }`}
        >
          <p className="font-semibold w-[100%] text-center pb-4">Exclusive</p>
          <Link to="/" 
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Home
          </Link>
          <Link to="/" 
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Ürünler
          </Link>
          <Link to="/" 
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Teknolojiler
          </Link>
          <Link to="/" 
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            İnsan Kaynakları
          </Link>
          <Link to="/" 
            className={`w-full text-left hover:text-red-500 focus:text-red-500 active:text-red-500 transition-all ease-in-out duration-300 listMenu`}
          >
            Kurumsal
          </Link>
        </div>
      </nav>
    </>
  );
};
