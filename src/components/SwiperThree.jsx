// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import TvGuideInfo from "./TvGuideInfo";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      direction="vertical"
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      <SwiperSlide className="rounded-[60px]">
        <TvGuideInfo />
      </SwiperSlide>
    </Swiper>
  );
};
