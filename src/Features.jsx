import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import featuresData from "./featuresData"; // Данные карточек

const Features = () => {
  return (
    <section id="services" className="bg-[#343045] text-white pl-10">
      <div className="w-full max-w-10xl">
        <div className="text-center">
          <div className="flex pr-15">
            <h1 className=" text-[30px] leading-tight">
              <span className="font-bold">WHY BULD|</span>
              <span className="font-light">WITH HYDRA?</span>
            </h1>
            <img className="pl-15" src="./strelka.svg" alt="arrow" />
            <p className="mt-1 pl-70 font-regular">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
        </div>

        {/* Swiper */}
        <div className="mt-14 p-50 pt-0 pb-0">
          <Swiper
            spaceBetween={40}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150, // Увеличиваем глубину эффекта
              modifier: 1.2,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {featuresData.map((card, index) => (
              <SwiperSlide
                key={index}
                className="h-full w-full flex justify-center align-center items-center transition-transform duration-300 rounded-2xl"
              >
                <div className="relative bg-gradient-to-b from-[#433D60] to-[#211E2E] p-6 rounded-2xl text-center shadow-lg transition-transform duration-300">
                  <div className="mx-auto rounded-full overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="pb-3 text-lg font-bold mt-4">{card.title}</h3>
                  <img className="pl-25" src="./vector11.svg" />
                  <p className="font-regular pt-8 text-sm mt-2 pb-1">
                    Vitae sapien pellentesque habitant morbi nunc. Viverra
                    aliquet porttitor rhoncus libero justo laoreet sit amet
                    vitae.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-[#8176AF] rounded-full text-black">
                    TRY IT NOW
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;
