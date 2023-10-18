import { useLoaderData } from "react-router-dom";

import Slider from "../../Components/Swiper/Slider";
import BrandProducts from "./BrandProducts";

const BrandCategoryPage = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 py-5 gap-4">
      {/* some detail section and  advertisement  */}
      <div className="grid  grid-cols-1 md:grid-cols-3 mb-16">
        {/* text  */}
        <div className="col-span-1 shadow-stone-900 shadow-2xl flex flex-col justify-center items-center p-2">
          <div className="">
            {/* 1  */}
            <div className=" md:flex items-center gap-2 ">
              <div className="flex items-center justify-center bg-gradient-to-r from-violet-300 to-pink-500 rounded-md">
                <img
                  className="w-16 h-16 p-2 "
                  src="https://i.ibb.co/8XnY5PF/6856379.png"
                  alt=""
                />
              </div>
              <p className="w-full text-center md:text-left md:w-2/3 font-normal text-sm mx-auto">
                Explore how AI is revolutionizing healthcare by improving
                diagnostics, treatment recommendations.
              </p>
            </div>
            {/* 2  */}
            <div className=" md:flex items-center gap-2 my-10 ">
              <div className="flex items-center justify-center  bg-gradient-to-r from-violet-300 to-pink-500 rounded-md">
                <img
                  className="w-16 h-16 "
                  src="https://i.ibb.co/60wmQxv/6856343.png"
                  alt=""
                />
              </div>
              <p className="w-full text-center md:text-left md:w-2/3 font-normal text-sm mx-auto">
                Learn about the fifth-generation (5G) wireless technology and
                its role in enabling faster, more reliable communication and
                transforming industries.
              </p>
            </div>
            {/* 3  */}
            <div className=" md:flex items-center gap-2 ">
              <div className="flex items-center justify-center  bg-gradient-to-r from-violet-300 to-pink-500 rounded-md">
                <img
                  className="w-16 h-16 "
                  src="https://i.ibb.co/fDzNq44/6856314.png"
                  alt=""
                />
              </div>
              <p className="w-full text-center md:text-left md:w-2/3 font-normal text-sm mx-auto">
                Discover how IoT technology is creating smart homes by
                connecting everyday devices to the internet for enhanced
                convenience and automation.
              </p>
            </div>
          </div>
        </div>

        {/* img  */}
        <div className="col-span-2 md:my-0  mt-16">
          <Slider></Slider>
        </div>
      </div>

      {/* our products  */}
      {data.length > 0 ? (
        <div className="mt-20">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold sm:text-4xl my-3">
              Our Products
            </h1>
            <p className="lg:w-[70%] mx-auto font-light">
              Our electronic and technology-related products offer cutting-edge
              innovation and user-friendly designs. From advanced gadgets to
              efficient appliances, our range enhances convenience and
              productivity in your daily life. Experience seamless connectivity,
              improved efficiency, and a future-ready lifestyle with our
              products. Elevate your tech experience with us
            </p>
          </div>
          {/* map div  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
            {data?.map((item) => (
              <BrandProducts key={item?._id} item={item}></BrandProducts>
            ))}
          </div>
        </div>
      ) : (
        <span className=" text-3xl md:text-5xl  justify-center flex flex-col  text-center font-extrabold">
          There is no Products,
          <span className="text-neutral">please retry</span>
        </span>
      )}
    </div>
  );
};

export default BrandCategoryPage;
