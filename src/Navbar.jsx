import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-8xl font-bold h-15px bg-[#343045] text-white py-6 px-10 flex justify-between items-center">
      {/* Логотип увеличен */}
      <motion.div className="flex items-center space-x-4">
        <img
          src="/hydra.png"
          alt="Logo"
          className="w-102px h-103px rounded-full object-cover"
        />
        <img src="./Frame.svg" className="w-76px h-46px" />
      </motion.div>

      <div>
        <ul className="h-15px flex space-x-10 ml-12 text-lg">
          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition font-regular"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400 transition">
              SERVISES
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="hover:text-yellow-400 transition"
            >
              TECHNOLOGIES
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              HOW TO
            </a>
          </li>
        </ul>
      </div>

      {/* Кнопки рядом */}
      <div className="flex space-x-4 h-15px">
        <button className="hover:scale-110 w-154px h-410px border-2 border-white text-white px-6 py-3 rounded-full shadow-md transition">
          CONTACT US
        </button>
        <button className="hover:scale-110 my-gradient text-black shadow-md w-154px h-48px rounded-full bg-purple-600 hover:bg-purple-500 px-6 py-3 transition">
          JOIN HYDRA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
