import { APiproduct1 } from "./hook/APIproduct";
import { Navbar } from "./navbar";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const DetailPROduk = () => {
  const { card } = APiproduct1();
  const { id, category } = useParams();
  const [duration, setDuration] = useState(false);

  const prodak = useMemo(
    () =>
      card.find((item) => String(item.id) === id && item.category === category),
    [id, category, card]
  );

  const CheckOut = () => {
    setTimeout(() => {
      setDuration(true);
    }, 3000);

    return setDuration(false);
  };

  // menemukan rating dari card
  // bulatkan numbernya jika ada yang koma
  // membuat state untuk bintangnya
  // buat looping for untuk menyesuaikan bintang dari ratingnya
  // tambahkan state jika looping true
  // panggil di element htmml

  // const rating = card.find((item) => Math.floor(Number(item.rating)));

  // const [star, setStar] = useState(<FontAwesomeIcon icon={faStar} />);

  // for (let i = 0; i > rating; i++) {
  //   setStar(<FontAwesomeIcon icon={faStar} />);
  // }

  return (
    <>
      <Navbar />
      <div className="w-full pt-20 md:px-10 xl:px-20 lg:px-20 shadow-xl">
        {prodak ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-flow-row gap-4">
              {duration ? (
                <div className="h-28 bg-white w-80 absolute bottom-44">
                  <p>anda telah memesan produk ini</p>
                </div>
              ) : null}
              <div className="justify-center items-center flex">
                {/* <Link to="/">
                    <i className="bxr  bx-arrow-left-stroke text-5xl text-gray-500 absolute top-20 left-1"></i>
                  </Link> */}
                <img
                  className="bg-gray-100 w-[100%] lg:w-[33rem] rounded-sm"
                  src={prodak.thumbnail}
                  alt={prodak.title}
                />
              </div>
              <div className="mx-5 text-xs lg:py-8 ">
                <p className="text-gray-700 mb-2">{prodak.category}</p>
                <p className="lg:text-4xl text-3xl text-gray-900 font-semibold">
                  {prodak.title}
                </p>
                <div className="mt-2 flex text-center items-center">
                  <p className="px-1 font-semibold text-base">
                    {prodak.rating}
                  </p>
                </div>
                <p className="text-gray-900 text-3xl font-semibold lg:text-5xl pt-8">${prodak.price}</p>
              <div className="py-10 px-5 flex gap-3">
                <img
                  src={prodak.thumbnail}
                  className="w-8 rounded-full bg-gray-950"
                />
                <p className="font-semibold flex items-center">
                  {prodak.brand}
                </p>
              </div>
              <div>{prodak.description}</div>
              </div>
              <Link
                to="/"
                onClick={() => CheckOut()}
                className="fixed bottom-0 z-50 h-18 w-full bg-white flex items-center"
              >
                <i className="bxr  bx-message-circle-dots mx-auto w-[25%] text-4xl text-center pt-2 h-[80%]"></i>
                <i className="bxr  bx-shopping-bag mx-auto border-l-2 border-gray-400 pt-2 h-[80%] w-[25%] text-4xl text-center"></i>
                <div className="w-[50dvw] h-full text-center bg-gray-300 flex flex-col justify-center">
                  <p className="">Beli sekarang</p>
                  <p className=" text-2xl flex justify-center">
                    {" "}
                    ${prodak.price}
                  </p>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p>Not Found</p>
          </>
        )}
      </div>
    </>
  );
};
