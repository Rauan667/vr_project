import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#343045] text-white py-10 px-10 flex items-center justify-between relative">
      {/* Левая часть с текстом */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-transparent bg-clip-text">
            Dive
          </span>{" "}
          Into The Depths <br />
          Of{" "}
          <span className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-transparent bg-clip-text">
            Virtual Reality
          </span>
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex items-center gap-4">
          <button className="font-bold mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:scale-105 transition text-black px-8 py-4 rounded-full">
            BUILD YOUR WORLD
          </button>
          <img src="./shape.svg" alt="shape" />
        </div>
      </div>

      {/* Правая часть с изображением */}
      <div className="relative left-54 w-[500px] h-[500px] mx-auto">
        <div
          className="px-9 py-10 left-3 top-3 absolute w-full h-full z-100"
          style={{ clipPath: "url(#customShape)" }}
        >
          <img
            src="/vr-headset.png"
            alt="VR Girl"
            className="rounded-tl-[20%] rounded-tr-[20%] rounded-br-[20%] rounded-bl-[50%] w-full h-full object-cover"
          />
        </div>
        {/* Подложка с тенью */}
        <div className="absolute top-4 left-4 w-full h-full bg-black/40 rounded-tl-[20%] rounded-tr-[20%] rounded-br-[20%] rounded-bl-[50%] z-10"></div>
        <div className="absolute -top-7 left-29 z-0 w-full h-full ">
          <img src="./vector1.svg" />
        </div>
        <div className="absolute bottom-47 z-0 w-full h-full">
          <img src="./vector2.svg" />
        </div>
        <div className="absolute pt-5  z-0 w-full h-full -bottom-58">
          <img src="./vector3.svg" />
        </div>
        {/* Фото с кастомной формой */}
      </div>
      {/* Информационные карточки */}
      <div className="bg-gradient-to-r from-[#3A3456] to-[#211E2E] absolute -bottom-41 left-1/2 transform -translate-x-1/2 w-full max-w-[1272px] h-[167px] grid grid-cols-3 gap-6 rounded-full shadow-lg px-10 py-8">
        <div className="flex items-center gap-2">
          <img className="bg-transparent" src="./map.svg" />
          <h3 className="bg-transparent text-lg font-semibold">
            Pay Us a Visit
          </h3>
          <p className="bg-transparent text-sm text-gray-300">
            Union St, Seattle, WA 98101
          </p>
        </div>
        <div className="flex pl-6 items-center gap-2">
          <img src="./vector5.svg" className="pr-6" />
          <img className="bg-transparent" src="./call.svg" />
          <h3 className="bg-transparent text-lg font-semibold">
            Give Us a Call
          </h3>
          <p className="bg-transparent text-sm text-gray-300">(110) 111-1010</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="./vector5.svg" className="pr-4" />
          <img className="bg-transparent" src="./mail.svg" />
          <h3 className="bg-transparent text-lg font-semibold">
            {" "}
            Send Us a Message
          </h3>
          <p className="bg-transparent text-sm text-gray-300">
            Contact@HydraVRTech.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
