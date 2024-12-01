// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import backImage from "../assets/intro.png";
import backImage2 from "../assets/tortuga.png";
import backImage3 from "../assets/flix.png";
import backImage4 from "../assets/ecom.png";
import "swiper/css/pagination";
import SwiperInfo from "./SwiperInfo";
import { INFODATA } from "../Data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      direction="vertical"
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      <SwiperSlide
        style={{ backgroundImage: `url(${backImage2})` }}
        className="bg-cover rounded-[60px]"
      >
        <SwiperInfo title={INFODATA[0].title} link={INFODATA[0].link} />
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${backImage3})` }}
        className="opacity-100 bg-cover rounded-[60px]"
      >
        <SwiperInfo title={INFODATA[1].title} link={INFODATA[1].link} />
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${backImage})` }}
        className="opacity-100 bg-cover rounded-[60px]"
      >
        <SwiperInfo title={INFODATA[2].title} link={INFODATA[2].link} />
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(${backImage4})` }}
        className="opacity-100 bg-cover rounded-[60px]"
      >
        <SwiperInfo title={INFODATA[3].title} link={INFODATA[3].link} />
      </SwiperSlide>
    </Swiper>
  );
};
