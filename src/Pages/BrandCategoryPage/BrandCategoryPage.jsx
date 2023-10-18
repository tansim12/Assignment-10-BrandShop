import { useLoaderData } from "react-router-dom";

const BrandCategoryPage = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5">
      brand {data.length}
      {/* some detail section */}
      <div className="grid  grid-cols-1 md:grid-cols-3">
        {/* text  */}
        <div className="col-span-1 border border-black flex flex-col justify-center items-center p-2">
          <div className="">
            {/* 1  */}
            <div className=" md:flex items-center gap-2 ">
              <div className="flex items-center justify-center">
                <img
                  className="w-16 h-16 "
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
              <div className="flex items-center justify-center">
                <img
                  className="w-16 h-16 "
                  src="https://i.ibb.co/60wmQxv/6856343.png"
                  alt=""
                />
              </div>
              <p className="w-full text-center md:text-left md:w-2/3 font-normal text-sm mx-auto">
              Learn about the fifth-generation (5G) wireless technology and its role in enabling faster, more reliable communication and transforming industries.
              </p>
            </div>
            {/* 3  */}
            <div className=" md:flex items-center gap-2 ">
              <div className="flex items-center justify-center">
                <img
                  className="w-16 h-16 "
                  src="https://i.ibb.co/fDzNq44/6856314.png"
                  alt=""
                />
              </div>
              <p className="w-full text-center md:text-left md:w-2/3 font-normal text-sm mx-auto">
              Discover how IoT technology is creating smart homes by connecting everyday devices to the internet for enhanced convenience and automation.
              </p>
            </div>
            
          </div>
        </div>

        {/* img  */}
        <div className="col-span-2">
          <img
            className="shadow-2xl shadow-slate-400 rounded-2xl "
            src="https://i.ibb.co/v1JZDgK/semiconductor-electronic-components-isometric-composition-1284-23810.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BrandCategoryPage;
