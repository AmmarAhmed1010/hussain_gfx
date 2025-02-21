import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] text-[#D4D4D4] py-4 text-center">
      <div className="flex justify-center items-center space-x-4 mb-2">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4D4D4] text-5xl hover:text-[#E900B9]">
          <FaInstagram />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-[#D4D4D4] text-5xl hover:text-[#00e94a]">
          <FaWhatsapp />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Hussain_GFX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
