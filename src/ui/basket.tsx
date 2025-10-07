import { Link } from "react-router-dom";

export const Basket = () => {
  return (
    <>
    <Link to="/" className="fixed flex pt-6 items-center pl-4">
        <img src="src/assets/arrow.png" className="w-8" />
        <p className="text-gray-300 pl-2">keranjang saya</p>
    </Link>
      <div className="h-[80rem] flex flex-col">
        <div className="footer-keranjang fixed bottom-0 h-auto pt-4 pb-3 px-3 bg-white w-full justify-center rounded-t-lg">
          <div className="flex justify-between lg:justify-around mb-2 items-center">
            <p>Voucher</p>
            <p className="text-gray-300">using voucher{" >"}</p>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between items-center mt-2 lg:justify-around">
            <div className="flex">
              <input className="mr-1" type="radio" />
              <p>Semua</p>
            </div>
            <div className="flex gap-1">
              <p className="text-xs align-text-top text-red-500">Rp0</p>
              <Link
                to="/"
                className="w-40 bg-red-500 text-center py-2 rounded-md text-white"
              >
                Checkout {"(0)"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
