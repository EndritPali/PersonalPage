import Swiper from "./Swiper";
import SwiperTwo from "./SwiperTwo";
import Nav from "./Nav";
import { useState } from "react";
import Lds from '../assets/sIIwU.gif'
import SwiperThree from "./SwiperThree";

export default function Projects() {
  const [activeSwiper, setActiveSwiper] = useState(1); // Tracks the active Swiper
  const [loading, setLoading] = useState(false); // Tracks the loading state

  const handleSwitch = (index) => {
    setLoading(true); // Show the loading GIF
    setTimeout(() => {
      setActiveSwiper(index); // Switch to the desired Swiper
      setLoading(false); // Hide the loading GIF
    }, 300); // Adjust delay for GIF timing
  };

  return (
    <>
      <div className="tvBackg bg-[#281703] w-[80%] h-[80%] p-5 rounded-[20px] ">
        <div className="w-[100%] tvSetup relative z-30 h-[80%] rounded-[60px] flex items-center justify-center">
          {loading ? (
            <div className="loading-screen w-full h-full object-cover ">
              <img  src={Lds} alt="Loading..." className="loading-gif w-full h-full rounded-[60px] " />
            </div>
          ) : (
            <>
              {activeSwiper === 1 && <Swiper />}
              {activeSwiper === 2 && <SwiperTwo />}
              {activeSwiper === 3 && <SwiperThree />}
            </>
          )}
        </div>
        <Nav handleSwitch={handleSwitch} />
      </div>
      <div className="stand w-[70%] bg-[#150c02] h-[5%]"></div>
    </>
  );
}
