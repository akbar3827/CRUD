import { APiproduct1 } from "./hook/APIproduct";
import { Link } from "react-router-dom";

export const Page2 = () => {
  const { product } = APiproduct1();

  return (
    <>
      <section id="product" className="mt-20 px-4 w-dvw flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div>
            <p className="font-semibold text-2xl">Top Destination</p>
          </div>
          <div className="scroll-x mt-10 py-10 px-2 w-full flex gap-3 lg:gap-8">
            {product.map((data) => {
              return (
                <div
                data-aos="zoom-in-down"
                data-aos-duration="800"
                data-aos-anchor-placement="center-bottom" 
                  className="scale card w-45 lg:w-60 flex-shrink-0 rounded-xl bg-linear-65 from-gray-800 to-gray-300 flex flex-col items-center"
                  key={data.id}
                >
                  <img
                    className=" w-[100%] rounded-t-xl"
                    src={data.thumbnail}
                  />
                  <div className="transform w-[100%] shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.1)] bg-white rounded-t-lg p-2 rounded-b-xl">
                    <p className="title text-xl font-semibold text-gray-700">
                      {data.title}
                    </p>
                    <p className="text-xs text-gray-500 outline outline-gray-500 px-1 rounded-sm inline-block">
                      {data.brand}
                    </p>
                    <p className="describe mt-3 text-gray-700 pt-1 text-xs md:text-base">
                      {data.description}
                    </p>
                    <div className="pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-semibold text-gray-600">
                          PRICE
                        </p>
                        <p className="text-gray-600 font-bold">${data.price}</p>
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
        </div>
      </section>
    </>
  );
};
