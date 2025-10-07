import { Navbar } from "./navbar";
import { Link } from "react-router-dom";
import { Page2 } from "./page2";
import { Page3 } from "./page3";
import { Footer } from "./footer";
// import { DetailPROduk } from "../detail-produk";

export const HomePage = () => {
  // const duration = DetailPROduk();

  return (
    <>
      <Navbar />
      <section
        id="home"
        className={`header w-full pt-36 relative flex flex-col h-cover py-10 items-center px-2 md:px-17`}
      >
        <div className="w-[90%] md:w-full lg:w-[90%] flex flex-col gap-10 md:flex-row items-center">
          <div className="flex gap-5 md:pr-12 flex-col md:w-[50vw] w-[100%]">
            <p
              data-aos="fade-right"
              data-aos-duartion="300"
              className="md:text-5xl xl:text-6xl font-semibold text-gray-900 text-3xl"
            >
              Hanya website <span className="text-gray-400">Gabut</span>{" "}
              sahaja.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duartion="300"
              className="text-gray-700 md:text-xs lg:text-base lg:pr-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dicta nam quod molestiae. gusaka hemiyanai Numquam reprehenderit
              fugit, rerum dolore quaerat asperiores?
            </p>
            <div
              data-aos="zoom-in md:fade-right"
              data-aos-delay="500"
              className="plan-your-trip flex"
            >
              <Link
                className="bg-gray-800 w-auto text-white px-8 py-2 rounded-4xl"
                to="/"
              >
                plan your trip
              </Link>
            </div>
          </div>
          <div className="lg:w-[50vw] items-center w-[100%] md:pl-10 flex md:gap-7 gap-3">
            <button>
              <img
                data-aos="zoom-in"
                data-aos-delay="300"
                src="src/assets/download (1).jpg"
                alt="kucing 1"
                className="lg:w-80 aspect-2/4 object-cover w-[100%] rounded-2xl shadow-xl"
              />
            </button>
            <div className="flex flex-col gap-3 md:gap-7">
              <button>
                <img
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  src="src/assets/download (2).jpg"
                  alt="kucing 2"
                  className="lg:w-70 aspect-1/1 object-cover w-[100%] rounded-2xl shadow-xl"
                />
              </button>
              <button>
                <img
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  src="src/assets/download (3).jpg"
                  alt="kucing 3"
                  className="lg:w-70 aspect-1/1 object-cover w-[100%] rounded-2xl shadow-xl"
                />
              </button>
            </div>
          </div>
        </div>
        <Page2 />
        <Page3 />
      </section>
      <Footer />
    </>
  );
};
