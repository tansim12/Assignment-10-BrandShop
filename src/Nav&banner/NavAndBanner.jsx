import Navbar from "../Components/Navbar/Navbar";

const NavAndBanner = () => {
  return (
    <section className="">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Hello, World!</h1>
          <p className="text-xl text-white mt-4">This is a sample text</p>
        </div>
      </div>
    </section>
  );
};

export default NavAndBanner;
