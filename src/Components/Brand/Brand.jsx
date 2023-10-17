import { useEffect, useState } from "react";

const Brand = () => {
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await fetch("brand.json");
        const data = await res.json();
        setBrandData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDate();
  }, []);


//   handleCategoryPage
const handleCategoryPage =()=>{

}

  return (
    <div>
      <h1 className="text-4xl text-center font-bold ">TechWave Innovations</h1>
      <p className="text-center w-full md:w-1/2 mx-auto font-light my-4">
        TechWave Innovations is your gateway to cutting-edge technology and
        electronics, offering pioneering products that redefine innovation and
        convenience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brandData?.map((item) => (
          <div
          onClick={handleCategoryPage}
          style={{ backgroundColor: item?.bg_color }}
          
          className="hover:cursor-pointer p-5 rounded-lg " key={item?.id}>
            <div>
              <img className="rounded-lg" src={item?.image} alt="" />
            </div>
            <div
              style={{ backgroundColor: item?.category_color }}
              className={`mt-5 text-white font-semibold max-w-max px-2 py-1 rounded-md `}
            >
              <p>{item?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
