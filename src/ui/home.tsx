import { Navbar } from "./navbar";
import { Link } from "react-router-dom";
import { Page2 } from "./page2";
import { Page3 } from "./page3";
// import { DetailPROduk } from "../detail-produk";

export const HomePage = () => {
  // const duration = DetailPROduk();
  

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="header w-full pt-36 relative flex flex-col gap-10 h-cover py-10 items-center px-10 lg:px-20 md:px-17 lg:flex-row md:flex-row"
      >
        <div className=" flex lg:pr-12 gap-5 md:pr-12 flex-col md:w-[50vw] w-[100%] lg:w-[50vw]">
          <p className="lg:text-7xl md:text-6xl font-semibold text-gray-900 text-3xl">
            Discover the World's <span className="text-gray-400">Hidden</span>{" "}
            Wonders
          </p>
          <p className="text-gray-700 lg:pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dicta nam quod molestiae. gusaka hemiyanai Numquam reprehenderit
            fugit, rerum dolore quaerat asperiores?
          </p>
          <div className="plan-your-trip flex md:flex xl:flex sm:right-6 lg:flex">
            <Link
              className="bg-gray-800  w-auto text-white px-8 py-2 rounded-4xl"
              to="/"
            >
              plan your trip
            </Link>
          </div>
        </div>
        <div className="lg:w-[50vw] w-[100%] xl:px-20 lg:pl-10 md:pl-10 flex md:gap-5 gap-3 lg:gap-8">
          <button>
            <img
              src="src/assets/download (1).jpg"
              alt="kucing 1"
              className="lg:w-80 w-[100%] rounded-2xl shadow-xl"
            />
          </button>
          <div className="flex flex-col gap-3 md:gap-7 lg:gap-7">
            <button>
              <img
                src="src/assets/download (2).jpg"
                alt="kucing 2"
                className="lg:w-70 w-[100%] rounded-2xl shadow-xl"
              />
            </button>
            <button>
              <img
                src="src/assets/download (3).jpg"
                alt="kucing 3"
                className="lg:w-70 w-[100%] rounded-2xl shadow-xl"
              />
            </button>
          </div>
        </div>
      </section>
      <Page2 />
      <Page3 />
    </>
  );
};
