import { useEffect, useState } from "react";
import { APImovie } from "./hook/APImovie";

export const Page3 = () => {
  const { card } = APImovie();
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const [img, setImg] = useState("");
  const [bolean, setBolean] = useState(false);

  return (
    <div className="py-20 w-dvw bg-gray-100">
      <div
        data-aos="fade-down"
        className="text-3xl lg:text-4xl font-semibold pb-10 lg:py-15 text-center"
      >
        News
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto justify-center flex flex-col lg:flex-row h-auto gap-10 lg:gap-10 items-center">
        <div className="lg:w-[80%] justify-center items-center flex flex-col gap-2 lg:gap-6">
          <img
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full aspect-video object-cover rounded-xl"
            src={bolean ? img : `src/assets/default.png`}
          />
          <div className="">
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="title text-2xl mb-4 font-semibold"
            >
              {bolean ? title : ""}
            </p>
            <p data-aos="fade-up" data-aos-duration="800" className="describe">
              {bolean ? describe : ""}
            </p>
          </div>
        </div>
        <div className="lg:w-[30%]  scroll-y gap-3 lg:gap-2 flex flex-col  flex-shrink-0 h-[35rem]">
          {card.map((data) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="300"
                data-aos-anchor-placement="bottom-bottom"
                onClick={() => {
                  setImg(data.urlToImage);
                  setTitle(data.title);
                  setDescribe(data.description);
                  setBolean(true);
                }}
                className="flex items-center w-full gap-5 lg:gap-5"
              >
                <div className="h-full w-full">
                  <img
                    className="rounded-md aspect-square object-cover lg:w-50"
                    src={data.urlToImage}
                  />
                </div>
                <div className="w-full">
                  <p
                    onClick={() => setTitle(data.title)}
                    className="title font-semibold mb-1"
                  >
                    {data.title}
                  </p>
                  <p
                    onClick={() => setDescribe(data.description)}
                    className="describe text-xs"
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
