import React from "react";
import Logo from "../assests/Logo (5).png";
import Calling from "../assests/Calling (2).png";
import Email from "../assests/Emails.png";
import Location from "../assests/Location.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#DBCAAA]">
      <div className="px-4 md:px-10 lg:px-32 py-6 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-32 md:w-48 lg:w-64 h-auto" />
        </div>

        {/* Contact Sections */}
        <div className="flex flex-col md:flex-row md:space-x-10 lg:space-x-20 text-[#3C1C0B]">
          {/* Email Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <img src={Email} alt="Email Icon" className="w-6 h-6" />
              <span className="pl-3 hidden md:block">Business Email: </span>
            </div>
            <a
              href="mailto:sedekdoors@gmail.com"
              className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px] underline hover:no-underline"
            >
              sedekdoors@gmail.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="mb-6 md:mb-0 hidden md:block">
            <div className="flex items-center mb-2">
              <img src={Calling} alt="Phone Icon" className="w-6 h-6" />
              <span className="pl-3">Phone:</span>
            </div>
            <a
              href="tel:+2348184935721"
              className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px] underline hover:no-underline"
            >
              +234 818 4935 721
            </a>
          </div>

          {/* Location Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <img src={Location} alt="Location Icon" className="w-6 h-6" />
              <span className="pl-3">Business Location:</span>
            </div>
            <p className="text-[16px] md:text-[18px]">
              State Housing Estate, Fourth Street, <br /> Atekong, Calabar
              540281, Cross River <br />
              <a
                href="https://www.google.com/maps?q=State+Housing+Estate,+Fourth+Street,+Atekong,+Calabar+540281,+Cross+River"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#685d57]"
              >
                View on Map
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center py-4 text-sm text-[#0B0505B2]">
        &copy; 2024 Sedek Doors & Cabinets. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
