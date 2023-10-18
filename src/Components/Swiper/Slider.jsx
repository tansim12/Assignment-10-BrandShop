import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
    const swiperData = [
        {
          img: "https://i.ibb.co/JBVfFHG/detailed-cyber-monday-banners-23-2147703514.jpg",
        },
        {
          img: "https://i.ibb.co/mtB8JjZ/abstract-colorful-sales-banner-template-23-2148236538.jpg",
        },
        { img: "https://i.ibb.co/0D3874H/technology-future-flyer-square-23-2148756650.jpg" },
        {
          img: "https://i.ibb.co/XtTkxG7/great-cyber-monday-banners-with-devices-circuits-23-2147578143.jpg",
        },
        {
          img: "https://i.ibb.co/GJWCXvW/laptop-gadget-sale-social-media-instagram-post-banner-template-188201-98.jpg",
        },
      ];
    return (
        <div>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {swiperData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img src={item?.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );
};

export default Slider;