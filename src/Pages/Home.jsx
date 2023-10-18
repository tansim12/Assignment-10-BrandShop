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

      {/* faqs */}

      <div className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 py-5"> 
        <FAQs></FAQs>
      </div>
    </section>
  );
};

export default Home;
