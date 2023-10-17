import Brand from "../Components/Brand/Brand";
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
    </section>
  );
};

export default Home;
