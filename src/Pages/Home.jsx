import Marquee from "react-fast-marquee";
import Brand from "../Components/Brand/Brand";
import FAQs from "../Components/FAQs/FAQs";
import NavAndBanner from "../Nav&banner/NavAndBanner";

const Home = () => {
  return (
    <section>
      {/* banner section  */}
      <NavAndBanner></NavAndBanner>

      {/* brand section  */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5">
        <Brand></Brand>
      </div>

      {/* marquee  */}
      <div className="my-10 hover:cursor-pointer">
        <Marquee className="shadow-2xl" pauseOnHover delay={2} direction="right" gradient gradientColor="#FF444A">
          <img
            className="w-28 mx-12"
            src="https://i.ibb.co/dDwWfDY/intel-i-letter-2006-20203034-logowik-com.webp"
            alt=""
          />
          <img
            className="w-28 mx-12"
            src="https://i.ibb.co/DQ2dw99/Apple-Logo.png"
            alt=""
          />
          <img
            className="w-28 mx-12"
            src="https://i.ibb.co/7gHpCSZ/Sony-logo.png"
            alt=""
          />
          <img
            className="w-28 mx-12"
            src="https://i.ibb.co/HDwvCjH/kiev-ukraine-march-31-2015-260nw-270200051.jpg"
            alt=""
          />
          <img
            className="w-28 mx-12"
            src="https://i.ibb.co/m8Zvk81/2560px-AMD-Ryzen-logo-svg.png"
            alt=""
          />
          <img
            className="w-28 mx-12"
            src="https://i.ibb.co/k55cW6X/microsoft-logo-icon-png-isolated-260nw-2306949595.jpg"
            alt=""
          />
        </Marquee>
      </div>
      {/* faqs */}
      <div className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 mt-10">
        <FAQs></FAQs>
      </div>
    </section>
  );
};

export default Home;
