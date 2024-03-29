import Navbar from "../Components/Navbar/Navbar";
import 'animate.css';
import { GrLinkNext } from 'react-icons/gr';

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
            <div className="flex justify-center items-center min-h-[80vh] ">
              <div className="text-center p-3">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl flex flex-col" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"> 
                  <span>Tech's advance: </span>
                  <span> Old circuits, new possibilities found.</span>
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-xs sm:text-base font-light leading-relaxed text-white" data-aos="fade-up"
     data-aos-duration="2000">
                  Electronics, a world of sparks and circuits, where innovation
                  lights up tomorrow, wiring the future today.
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0  ">
                    <button className="btn btn-md btn-accent text-lg font-semibold animate__hinge">
                    Get Start <span><GrLinkNext></GrLinkNext></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavAndBanner;
