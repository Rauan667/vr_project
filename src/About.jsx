import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#343045] text-white py-16 px-8 pt-55">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10"></div>
      <div className="flex items-center gap-3">
        <h1 className=" text-[30px] leading-tight">
          <span className="font-bold">INTRODUCTION</span>{" "}
          <span className="block font-light">TO HYDRA VR</span>
        </h1>
        <img src="./strelka.svg" alt="arrow" />
        <p className="font-regular pl-40">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      {/* Левая часть (изображение) */}

      <div className="flex items-center space-y-6 z-10">
        <div className="relative w-[524px] h-[557px] flex-shrink-0 pr-20">
          {/* Само изображение */}
          <img
            src="./about.png"
            alt="About VR"
            className="z-10 w-full h-full object-cover rounded-tl-[45%] rounded-tr-[20%] rounded-br-[45%] rounded-bl-[20%] "
          />
        </div>
        <div className="pl-20 flex-1">
          <h1 className="text-4xl font-bold pb-10">
            <span className="font-bold">ABOUT</span>
            <span className="font-light block">HYDRA VR</span>
          </h1>

          <p className="font-regular">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black rounded-full font-semibold hover:scale-110
 transition"
          >
            LET'S GET IN TOUCH
          </button>
        </div>
        <div className="absolute -bottom-290 z-0 w-full h-full">
          <img src="./vector7.svg" />
        </div>
        <div className="absolute -bottom-350 z-0 w-full h-full">
          <img src="./vector8.svg" />
        </div>
      </div>
    </section>
  );
};

export default About;
