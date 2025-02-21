import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[#030303] text-[#D4D4D4] py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="text-[#E900B9] text-2xl font-bold"><span className="text-white">Hussain</span>GFX</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
