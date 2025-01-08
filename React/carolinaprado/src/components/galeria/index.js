import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "./galeria.css";

function Galeria() {
  const banners = ["banner1.webp", "banner2.webp", "banner3.webp", "banner4.webp"];

  return (
    <div className="galeria">
    
        <Swiper
             effect={'coverflow'}
             grabCursor={true}
             loop={true}
             centeredSlides={true}
             slidesPerView={3}
             coverflowEffect={{
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
             }}
             pagination={true}
             modules={[EffectCoverflow, Pagination]}
             breakpoints={{
              320:{
                slidesPerView:1  
              },
              768:{
                slidesPerView:3
              }
             }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                src={require(`../../images/${banner}`)}
                alt={`Banner ${index + 1}`}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}

export default Galeria;
