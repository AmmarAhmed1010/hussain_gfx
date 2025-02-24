import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] text-[#D4D4D4] py-4 text-center">
      <div className="flex justify-center items-center space-x-4 mb-2">
        <a
          href="https://www.instagram.com/hussaingfx_/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4D4D4] text-3xl hover:text-[#E900B9]"
          aria-label="Visit our Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/3146487997?text=Hello,%20I%20hope%20you%20are%20doing%20well.%20I%20would%20like%20to%20inquire%20about%20your%20services.%20Please%20provide%20me%20with%20more%20details.%20Thank%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4D4D4] text-3xl hover:text-[#00e94a]"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Hussain_GFX. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
