import { APiproduct1 } from "./hook/APIproduct";
import { Navbar } from "./navbar";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const DetailPROduk = () => {
  const { product, product2 } = APiproduct1();
  const { id } = useParams();
  const [duration, setDuration] = useState(false);

  const prodak = useMemo(
    () => product.find((item) => String(item.id) === id),
    [id, product]
  );

  const CheckOut = () => {
    setTimeout(() => {
      setDuration(true);
    }, 3000);

    return setDuration(false);
  };

  return (
    <>
      <Navbar />
      <div className="w-full pt-20 md:px-10 lg:px-20 shadow-xl">
        {prodak ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
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
                  className="bg-gray-100 w-[100%] rounded-sm"
                  src={prodak.thumbnail}
                  alt={prodak.title}
                />
              </div>
              <div className="mx-5 text-xs lg:py-8 ">
                <p className="text-gray-700 mb-2">{prodak.category}</p>
                <p className="text-3xl text-gray-900 font-semibold">
                  {prodak.title}
                </p>
                <div className="mt-2 flex text-center items-center">
                  <p className="px-1 font-semibold text-base">
                    {prodak.rating}
                  </p>
                </div>
                <p className="text-gray-900 text-4xl font-semibold pt-8">
                  ${prodak.price}
                </p>
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
            <div className="flex flex-wrap gap-4 justify-center items-center pt-10">
              {product2.map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    className="scale card flex-wrap w-45 lg:w-60 flex-shrink-0 rounded-xl bg-linear-65 from-gray-800 to-gray-300 flex flex-row items-center"
                    key={data.id}
                  >
                    <img
                      className=" w-[100%] rounded-t-xl"
                      src={data.category.image}
                    />
                    <div className="transform w-[100%] shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.1)] rounded-t-lg bg-white p-2 rounded-b-xl">
                      <p className="title text-xl font-semibold text-gray-700">
                        {data.title}
                      </p>
                      <p className="text-xs text-gray-500 outline outline-gray-500 px-1 rounded-sm inline-block">
                        {data.category.slug}
                      </p>
                      <p className="describe mt-3 text-gray-700 pt-1 text-xs md:text-base">
                        {data.description}
                      </p>
                      <div className="pt-4 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-gray-600">
                            PRICE
                          </p>
                          <p className="text-gray-600 font-bold">
                            ${data.price}
                          </p>
                        </div>
                        <Link
                          to={`/detailproduk/${data.id}`}
                          className="scale-b px-7 lg:px-10 items-center flex h-8 rounded-md bg-gray-400 font-bold text-xs text-gray-700"
                        >
                          Visit
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
