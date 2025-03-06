import React, { useState } from "react";

const TechnologiesSection = () => {
  // Состояние для показа/скрытия текста
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="technologies" className="bg-[#343045] text-white py-16 px-8">
      <div className="relative w-full h-[300px] mx-auto overflow-hidden mb-8">
        <img
          src="./oval.png"
          alt="VR background"
          className="w-full h-full object-cover rounded-[9999px]"
        />

        {/* Текст и кнопка поверх изображения */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-10">
          <h2 className="pt-11 text-xl md:text-4xl font-bold mb-2">
            TECHNOLOGIES &amp; HARDWARE
          </h2>
          <p className="text-sm md:text-4xl">USED BY HYDRA VR</p>

          {/* Кнопка-стрелка для раскрытия/скрытия текста */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 bg-[#8176AF] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img
              src="./strelkavniz.svg"
              alt="Toggle info"
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Дополнительный текст, который раскрывается при нажатии на кнопку */}
      {isOpen && (
        <div className="max-w-xl mx-auto text-center px-4 mb-8">
          <p className="text-sm md:text-base text-gray-300">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      )}

      {/* Логотипы */}
      <div className=" mx-auto flex flex-wrap justify-center items-center gap-20">
        {/* Подставь свои логотипы */}
        <img src="./unrealengine.svg" alt="Unreal Engine" className="" />
        <img src="./unity.svg" alt="Unity" className="" />
        <img src="./oculus.svg" alt="Oculus" className="" />
        <img src="./vive.svg" alt="Vive" className="" />
      </div>
    </section>
  );
};

export default TechnologiesSection;
