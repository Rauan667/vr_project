import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#343045] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center gap-8">
          <div className="md:mr-8">
            <img
              src="./Vector.svg"
              alt="Hydra Symbol"
              className="w-full h-full"
            />
          </div>
          <div className="hidden sm:block">
            <img src="./vector22.svg" alt="Divider" />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <a href="#about" className="hover:text-gray-300">
                ABOUT
              </a>
              <a href="#services" className="hover:text-gray-300">
                SERVICES
              </a>
              <a href="#technologies" className="hover:text-gray-300">
                TECHNOLOGIES
              </a>
              <a href="#contact" className="hover:text-gray-300">
                HOW TO
              </a>
              <a href="#join" className="hover:text-gray-300">
                JOIN HYDRA
              </a>
            </div>

            <div className="hidden sm:block">
              <img src="./vector22.svg" alt="Divider" />
            </div>

            <div className="flex flex-col items-center sm:items-start space-y-2">
              <a href="#faq" className="hover:text-gray-300">
                F.A.Q
              </a>
              <a href="#sitemap" className="hover:text-gray-300">
                SITEMAP
              </a>
              <a href="#conditions" className="hover:text-gray-300">
                CONDITIONS
              </a>
              <a href="#licenses" className="hover:text-gray-300">
                LICENSES
              </a>
            </div>

            <div className="hidden sm:block">
              <img src="./vector22.svg" alt="Divider" />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-semibold">SOCIALIZE WITH HYDRA</h3>
              <div className="flex space-x-4">
                <img
                  src="./facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 hover:scale-110 transition"
                />
                <img
                  src="./instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 hover:scale-110 transition"
                />
                <img
                  src="./twitter.svg"
                  alt="Twitter"
                  className="w-6 h-6 hover:scale-110 transition"
                />
                <img
                  src="./linkedin.svg"
                  alt="Twitter"
                  className="w-6 h-6 hover:scale-110 transition"
                />
                <img
                  src="./youtube.svg"
                  alt="Twitter"
                  className="w-6 h-6 hover:scale-110 transition"
                />
                <img
                  src="./pinterest.svg"
                  alt="Twitter"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </div>
              <button className="bg-[#8176AF] text-black rounded-full px-6 py-2 hover:scale-105 transition-transform">
                BUILD YOUR WORLD
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-300">
          2023 © HYDRA LANDING PAGE - BY ZINE, E. FALOUTI - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
