import Navbar from "../Components/Navbar/Navbar";

const NavAndBanner = () => {
    return (
        <div>
            <div
      className=" min-h-screen w-full"
      style={{
        overflowX:"hidden",
        overflowY:"hidden",
        width: "100%",
        objectFit:"cover",
        backgroundRepeat:"no-repeat", 
        backgroundImage:
          "url(https://i.ibb.co/9Yt8vd5/premium-photo-1682824038225-834e4244f1e6-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jp.jpg)",
      }}
    >
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        {/* over laey  */}
        <div className="hero-overlay bg-opacity-80 bg-black"></div>
        <div className="bg-transparent"></div>
      </div>
    </div>
        </div>
    );
};

export default NavAndBanner;