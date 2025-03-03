import React from "react";

const StepsSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#343045] text-white py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold">
            HOW WE BUILD
            <span className="block font-light">WITH HYDRA VR?</span>
          </h2>
        </div>
        <img src="./strelka.svg" alt="Arrow" />

        {/* Правая часть (текст) */}
        <div className="md:w-1/2">
          <p className="mt-4 md:mt-0 text-gray-300">
            Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est
            placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est
            placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-10">
        <img
          src="./vector15.svg"
          alt="Background Vector"
          className="absolute z-0"
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex flex-col items-center text-center">
            <div className="absolute w-70 h-70 bg-[#8176AF]/20 rounded-full -z-10" />
            <img src="./circle.png" alt="Step 1" className="object-cover" />
            <img src="./01.svg" className="absolute pt-14" />
            <h1 className="mt-2 font-bold flex items-center gap-2">
              <img src="./shape.svg" alt="Arrow" className="hidden sm:block" />
              3D Conception & Design
            </h1>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="absolute w-36 h-36 bg-[#8176AF]/20 rounded-full -z-10" />
            <img src="./circle.png" alt="Step 2" />
            <img src="./02.svg" className="absolute pt-14" />
            <h1 className="mt-2 font-bold flex items-center gap-2">
              <img src="./shape.svg" alt="Arrow" className="hidden sm:block" />
              Interaction Design
            </h1>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="absolute w-36 h-36 bg-[#8176AF]/20 rounded-full -z-10" />
            <img src="./circle.png" alt="Step 3" />
            <img src="./03.svg" className="absolute pt-14" />
            <h1 className="mt-2 font-bold flex items-center gap-2">
              <img src="./shape.svg" alt="Arrow" className="hidden sm:block" />
              VR World User Testing
            </h1>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="absolute w-36 h-36 bg-[#8176AF]/20 rounded-full -z-10" />
            <img src="./circle.png" alt="Step 4" />
            <img src="./04.svg" className="absolute pt-14" />
            <h1 className="mt-2 font-bold flex items-center gap-2">
              <img src="./shape.svg" alt="Arrow" className="hidden sm:block" />
              Hydra VR Deployer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
