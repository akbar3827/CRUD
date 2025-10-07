export const Footer = () => {
  return (
    <>
      <div className={`h-cover w-full`}>
        <div className="h-60% text-center md:text-left gap-10 h-full py-15 w-full grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 flex-col">
          <div data-aos="fade-down" className="text-2xl mx-auto flex flex-col gap-9">
            <p className="font-bold text-2xl mt-5">My Account</p>
            <div>
              <a
                href="https://wa.me/qr/ZKCW6V4DMBXVO1"
                className="bxl text-white bg-gray-950 cursor-pointer p-1 rounded-md bx-whatsapp"
              ></a>{" "}
              <a
                href="https://www.threads.com/@gaoaoaa_koo"
                className="bxl text-white bg-gray-950 cursor-pointer p-1 rounded-md bx-threads"
              ></a>{" "}
              <a
                href="https://github.com/akbar3827"
                className="bxl text-white bg-gray-950 cursor-pointer p-1 rounded-md bx-github"
              ></a>{" "}
              <a
                href="https://www.instagram.com/gaoaoaa_koo?igsh=ZWhycDF3c3gzZXV3"
                className="bxl text-white bg-gray-950 cursor-pointer p-1 rounded-md bx-instagram-alt"
              ></a>{" "}
              <a
                href="https://www.facebook.com/share/1RYffEGmjB/"
                className="bxl text-white bg-gray-950 cursor-pointer p-1 rounded-md bx-facebook-square"
              ></a>{" "}
            </div>
          </div>
          <div data-aos="fade-up" className="flex-col flex font-semibold text-xs gap-3">
            <p>Lorem ipsum dolor</p>
            <p>sit amet consectetur</p>
            <p>adipisicing elit. At</p>
            <p>ipsum dolor sit amet.</p>
            <p>ipsum dolor sit amet consectetur.</p>
            <p>Lorem, ipsum.</p>
          </div>
          <div data-aos="fade-up" className="flex-col flex font-semibold text-xs gap-3">
            <p>Lorem ipsum dolor</p>
            <p>sit amet consectetur</p>
            <p>ipsum dolor sit amet consectetur.</p>
            <p>Lorem, ipsum.</p>
            <p>adipisicing elit. At</p>
            <p>ipsum dolor sit amet.</p>
          </div>
          <div data-aos="fade-up" className="flex-col flex font-semibold text-xs gap-3">
            <p>Lorem ipsum dolor</p>
            <p>sit amet consectetur</p>
            <p>ipsum dolor sit amet consectetur.</p>
            <p>adipisicing elit. At</p>
            <p>ipsum dolor sit amet.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-in-up"
           data-aos-duration="1000"
      className="bg-gray-950 w-full h-8">
        {" "}
        <p className="text-white text-center pt-2.5 text-xs">
          maked for one Week.
        </p>
      </div>
    </>
  );
};
