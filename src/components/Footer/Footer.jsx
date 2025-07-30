import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto 2xl:max-w-8/12 md:w-9/12 px-4">
      {/* Call-to-Action Banner */}
      <div className="bg-[#8D448B] text-white 2xl:px-6 md:px-4  2xl:py-10 md:py-7 py-5 rounded-xl  flex flex-col md:flex-row items-center relative -mt-20 justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold leading-snug">
            Hire the world’s best developers
            <br /> and designers around!
          </h2>
        </div>
        <div className="text-center">
          <button className="bg-white text-[#8D448B] font-medium 2xl:py-3 py-2 2xl:px-6 px-4 rounded shadow hover:bg-gray-100 transition-all">
            HIRE DEVELOPERS
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src="/icons8-logo-50.png"
            alt="Logo"
            className="w-6 h-6"
          />
          <p className="text-sm text-gray-500">Copyright by 2019 Dev, Inc</p>
        </div>
        <ul className="flex space-x-6 text-sm text-gray-700 font-medium">
          <li><a href="#" className="hover:text-[#8D448B]">Home</a></li>
          <li><a href="#advertisement" className="hover:text-[#8D448B]">Advertise</a></li>
          <li><a href="#support" className="hover:text-[#8D448B]">Supports</a></li>
          <li><a href="#" className="hover:text-[#8D448B]">Marketing</a></li>
          <li><a href="#" className="hover:text-[#8D448B]">FAQ</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
