// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import SwiperInfo from "./SwiperInfo";
import { INFODATA } from "../Data";
import TeletextInfo from "./TeletextInfo";

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
      modules={[
        Pagination,
        // Autoplay
      ]}
      //   autoplay={{
      //     delay: 5000,
      //     disableOnInteraction: false,
      //     pauseOnMouseEnter: true,
      //   }}
    >
      <SwiperSlide className="rounded-[60px] secondDesign">
        <TeletextInfo />
      </SwiperSlide>
    </Swiper>
  );
};
