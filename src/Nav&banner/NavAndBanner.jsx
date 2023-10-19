import Navbar from "../Components/Navbar/Navbar";

const NavAndBanner = () => {
  return (
    <section className="">
      
      <div className="relative h-screen w-full">
        <img
          src="https://i.ibb.co/vLp0GxD/photo-1677442135136-760c813028c0-auto-format-fit-max-q-80-blend-000000-blend-alpha-10-blend-mode-nor.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col ">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="pt-20"> 
          <h1 className="text-4xl text-white font-bold">Hello, World!</h1>
          <p className="text-xl text-white mt-4">This is a sample text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavAndBanner;
