import React, { useState } from "react";

const JoinHydra = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="join"
      className="bg-[#343045] py-16 px-4 text-white flex justify-center items-center"
    >
      <div className="w-[1275px] h-[1100px]">
        <div className="bg-gradient-to-b from-[#433D60] to-[#211E2E] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            JOIN HYDRA
          </h2>
          <img src="./vector16.svg" className="pl-90 pt-6 pb-6" />
          <p className="text-center text-2xl font-light mb-8 pb-3">
            Let's Build Your VR Experience
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-[#2E2B3D] rounded-full px-4 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-[#8176AF]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-[#2E2B3D] rounded-full px-4 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-[#8176AF]"
              />
            </div>

            {/* Вторая строка: Email / Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-[#2E2B3D] rounded-full px-4 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-[#8176AF]"
              />
              <input
                type="tel"
                name="phoneNumber"
                pattern="[0-9]*"
                value={formData.phoneNumber}
                title="Please enter only digits."
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-[#2E2B3D] rounded-full px-4 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-[#8176AF]"
              />
            </div>

            {/* Третья строка: Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-[#2E2B3D] w-full rounded-full px-4 py-2  border border-white focus:outline-none focus:ring-2 focus:ring-[#8176AF]"
              />
            </div>

            {/* Четвертая строка: Сообщение */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us something..."
                rows="4"
                className="bg-[#2E2B3D] w-full rounded-2xl px-4 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-[#8176AF] resize-none"
              />
            </div>

            {/* Кнопка отправки (просто очищает форму) */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#8176AF] text-black rounded-full px-6 py-2 font-light hover:scale-105 transition-transform"
              >
                SEND TO HYDRA
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinHydra;
