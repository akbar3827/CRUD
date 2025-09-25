import { useEffect, useState } from "react";
import { APImovie } from "./hook/APImovie";

export const Page3 = () => {
  const { card2 } = APImovie();
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const [img, setImg] = useState("");

  // useEffect(() => card2.find(items => items.urlToImage === img), [card2])

  return (
    <div className="py-10 lg:py-15">
      <div className="text-3xl lg:text-4xl font-semibold pb-10 lg:py-20 text-center">News</div>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[80%] justify-center max-w-full flex flex-col lg:flex-row h-auto gap-10 lg:gap-10 items-center">
          <div className="lg:w-[80%] justify-center items-center flex flex-col gap-2 lg:gap-6">
            <img
              className="w-full rounded-xl overflow-hidden"
              src={img}
            />
            <div className="">
              <p className="title text-2xl mb-4 font-semibold">{title}</p>
              <p className="describe">{describe}</p>
            </div>
          </div>
          <div className="lg:w-[30%] scroll-y gap-3 lg:gap-2 flex flex-col  flex-shrink-0 h-[35rem]">
            {card2.map((data) => {
              return (
                <div
                  onClick={() => {
                    setImg(data.urlToImage);
                    setTitle(data.title);
                    setDescribe(data.description);
                  }}
                  className="flex items-center w-full gap-5 lg:gap-5"
                >
                  <div className="h-full w-full">
                    <img
                      className="rounded-md overflow-hidden lg:w-50"
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
    </div>
  );
};
