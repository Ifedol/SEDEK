import React, { useState, useRef } from "react";
import Logo from "../assests/Logo (5).png";
import Background from "../assests/Background.png";
import Calling from "../assests/Calling (2).png";
import Email from "../assests/Emails.png";
import Location from "../assests/Location.png";
import arrow from "../assests/Arrow.png";
import Imahe1 from "../assests/image-1.png";
import Image2 from "../assests/image-2.png";
import Image3 from "../assests/image-3.png";
import Image4 from "../assests/image-4.png";
import Image5 from "../assests/image-5.png";
import door1 from "../assests/door1.png";
import door2 from "../assests/door2.png";
import door3 from "../assests/door3.png";
import door4 from "../assests/door4.png";
import door5 from "../assests/door5.png";
import door6 from "../assests/door6.png";
import door7 from "../assests/door7.png";
import door8 from "../assests/door8.png";
import door9 from "../assests/door9.png";
import dropdown from "../assests/dropdown.png";
import MyModal from "./mymodal";
import DoubleModal from "./DoubleModal";
import GlassModal from "./GlassModal";
import FlushModal from "./FlushModal";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const openModalHandler = (modalNumber) => {
    setOpenModal(modalNumber);
  };

  const closeModalHandler = () => {
    setOpenModal(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full overflow-x-hidden ">
      <div
        className="relative w-full h-[697px] md:h-[953px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <div className=" top-0 left-0 w-full bg-[#EEEAE8B2] z-[100] backdrop-blur-md">
          <div className="flex justify-between  px-4 md:px-[50px] py-4">
            <img src={Logo} alt="Logo" className=" w-32 md:w-48 lg:w-64" />
            <div className="pt-0 md:pt-10 pr-[20px] md:pr-[80px]">
              <button className="bg-[#A2552E] text-white py-2 px-4 md:px-6 rounded-lg hover:bg-[#bea598]">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="pl-8  md:pl-[80px] pt-[100px] md:pt-[150px] px-4 md:px-[80px]">
          <h1 className=" text-[#3C1C0B] text-[48px] md:text-[72px] leading-[75px] md:leading-[90px] font-bold md:font-extrabold">
            Distinguish <br className="hidden md:block" /> Your Home
          </h1>
          <p className="  text-[14px] md:text-[24px] text-[#0B0505B2] font-semibold  mt-2 md:mt-4">
            Quality Doors for Every Style and Budget
          </p>
          <div className="pt-4 md:pt-[32px]">
            <button className="bg-[#A2552E] text-white py-2  px-4 md:px-6 rounded-lg hover:bg-[#bea598]">
              Get in Touch
            </button>
          </div>
        </div>
        <div className=" pt-[60px] md:pt-[120px] px-4 md:px-[80px] space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Calling} alt="" className="size-6" />
            <a
              href="tel:+2348184935721"
              className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px] underline hover:no-underline"
            >
              +234 818 4935 721
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Email} alt="" className="size-6" />
            <a
              href="mailto:sedekdoors@gmail.com"
              className="pl-2.5 text-[#3C1C0B] text-[16px] md:text-[20px] underline hover:no-underline"
            >
              sedekdoors@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Location} alt="" className="size-7" />
            <p className="pl-2.5  text-[#3C1C0B] text-[16px] md:text-[20px]">
              Business Location:{" "}
              <a
                href="https://www.google.com/maps?q=State+Housing+Estate,+Fourth+Street,+Atekong,+Calabar+540281,+Cross+River"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3C1C0B] underline hover:text-[#685d57]"
              >
                View on Map
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative  w-full px-4 md:px-0 lg:px-[40px]  ">
        <div className=" border-x-0 border-[#DFCEB1] md:border-x-0  lg:border-x  mx-auto  ">
          <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-8 lg:px[10px]  py-[40px] md:py-[70px] lg:py-[120px]">
            <div className="mb-6 md:mb-0">
              <h1 className="text-[#3C1C0B] text-[30px] leading-10 md:leading-[55px] md:text-[44px] font-bold">
                Molded Panel Doors
              </h1>
              <p className="text-[#0B0505B2] text-[16px] md:text-[18px] lg:text-[20px] leading-6 md:leading-7 lg:leading-8 font-normal mt-2 md:mt-3 lg:mt-4 md:max-w-[80%] lg:max-w-[100%]">
                Molded panel doors, made from durable materials like MDF{" "}
                <br className="hidden lg:block" />
                or hardboard, offer a versatile and cost-effective solution{" "}
                <br className="hidden lg:block" />
                for residential and commercial spaces. Available in{" "}
                <br className="hidden lg:block" />
                traditional and modern designs, these doors provide sound{" "}
                <br className="hidden lg:block" />
                insulation, privacy, and security with solid cores. Affordable{" "}
                <br className="hidden lg:block" />
                and customizable with various styles and finishes, they are a{" "}
                <br className="hidden lg:block" />
                practical and aesthetically pleasing choice for any interior.
              </p>

              <div className=" mt-4 md:mt-6">
                <button
                  onClick={() => openModalHandler(1)}
                  className="bg-white flex items-center border-2 border-[#A2552E] text-[#3C1C0B] py-2 px-4 md:px-6 rounded-lg hover:bg-[#e99466]"
                >
                  Explore Options <img src={arrow} alt="" className="pl-2" />
                </button>
              </div>
            </div>
            <div className="relative mr-0 md:mr-[200px]">
              <img src={Imahe1} alt="" className="w-full lg:max-w-[70%]" />
              <img
                src={Image2}
                alt=""
                className="absolute top-1/5 right-[-140px] transform -translate-y-1/2 md:translate-x-[20%]"
              />
            </div>
          </div>
          <div className="border-y-0 border-[#DFCEB1]  md:border-y-0  lg:border-y w-[1440px]"></div>

          <div className=" flex flex-col md:flex-row justify-between items-center px-0 md:px-[40px] lg:px-[60px] py-[100px] md:py-[80px] lg:py-[110px] ">
            <div className="mb-6 md:mb-0">
              <h1 className="text-[#3C1C0B] text-[30px] md:text-[44px] leading-10 md:leading-[55px] font-bold">
                Double Doors
              </h1>
              <p className="text-[#0B0505B2] text-[16px] md:text-[18px] lg:text-[20px] leading-6 md:leading-7 lg:leading-8 font-normal mt-2 md:mt-3 lg:mt-4 md:max-w-[80%] lg:max-w-[100%]">
                Double doors, often used in grand entrances, combine{" "}
                <br className="hidden lg:block" />
                functionality and aesthetics with a wider passage for moving{" "}
                <br className="hidden lg:block" />
                large items. Popular in residential, commercial, and historic{" "}
                <br className="hidden lg:block" />
                buildings, they enhance visual appeal, accessibility, and{" "}
                <br className="hidden lg:block" />
                airflow. Available in various designs and materials, double{" "}
                <br className="hidden lg:block" />
                doors can be customized to match any architectural style,{" "}
                <br className="hidden lg:block" /> adding elegance and
                practicality to any entrance.
              </p>
              <div className=" mt-4 md:mt-6">
                <button
                  onClick={() => openModalHandler(2)}
                  className="bg-white flex items-center border-2 border-[#A2552E] text-[#3C1C0B] py-2 px-4 md:px-6 rounded-lg hover:bg-[#e99466]"
                >
                  Explore Options <img src={arrow} alt="" className="pl-2" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={Image3}
                alt=""
                className="w-full md:w-[1070px] lg:h-273px lg:w-full "
              />
            </div>
          </div>
          <div className="border-y-0 border-[#DFCEB1] md:border-y-0  lg:border-y w-[1440px]"></div>

          <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-8 lg:px[110px] py-[20px] md:py-[80px] lg:py-[110px]">
            <div className="mb-6 md:mb-0">
              <h1 className="text-[#3C1C0B] text-[30px] md:text-[44px] leading-10 md:leading-[55px] font-bold">
                Glass Insert Doors
              </h1>
              <p className="text-[#0B0505B2] text-[16px] md:text-[18px] lg:text-[20px] leading-6 md:leading-7 lg:leading-8 font-normal mt-2 md:mt-3 lg:mt-4 md:max-w-[80%] lg:max-w-[100%]">
                Glass insert doors add sophistication, style, and elegance to{" "}
                <br className="hidden lg:block" />
                any space. They brighten interiors by allowing natural light{" "}
                <br className="hidden lg:block" /> in, creating a spacious and
                open feel. With various glass <br className="hidden lg:block" />{" "}
                types and designs available, you can balance privacy and{" "}
                <br className="hidden lg:block" /> aesthetics to suit your
                needs, whether you choose frosted{" "}
                <br className="hidden lg:block" /> glass for privacy or clear
                glass for a scenic view.
              </p>
              <div className="mt-4 md:mt-6 ">
                <button
                  onClick={() => openModalHandler(3)}
                  className="bg-white flex items-center border-2 border-[#A2552E] text-[#3C1C0B] py-2 px-4 md:px-6 rounded-lg hover:bg-[#e99466]"
                >
                  Explore Options <img src={arrow} alt="" className="pl-2" />
                </button>
              </div>
            </div>
            <div className="relative ">
              <img
                src={Image4}
                alt=""
                className=" w-[478px] h-[409px] md:h-[509px]"
              />
            </div>
          </div>
          <div className="border-y-0 border-[#DFCEB1] md:border-y-0  lg:border-y w-[1440px]"></div>

          <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-8 lg:px[110px] py-[20px] md:py-[80px] lg:py-[110px]">
            <div className="mb-6 md:mb-0">
              <h1 className="text-[#3C1C0B] text-[30px] md:text-[44px] leading-10 md:leading-[55px] font-bold">
                Planate Flush Doors
              </h1>
              <p className="text-[#0B0505B2] text-[16px] md:text-[18px] lg:text-[20px] leading-6 md:leading-7 lg:leading-8 font-normal mt-2 md:mt-3 lg:mt-4 md:max-w-[80%] lg:max-w-[100%]">
                Flush doors, favored in modern architecture for their sleek{" "}
                <br className="hidden lg:block" />
                look, are made from materials like plywood or MDF. They{" "}
                <br className="hidden lg:block" /> offer durability, sound
                insulation, and customization options.{" "}
                <br className="hidden lg:block" /> These doors can be fire-rated
                and equipped with smart <br className="hidden lg:block" />{" "}
                features, blending functionality with modern elegance.{" "}
                <br className="hidden lg:block" /> Suitable for residential and
                commercial use, flush doors <br className="hidden lg:block" />
                provide a stylish, practical solution for contemporary{" "}
                <br className="hidden lg:block" />
                interiors.
              </p>
              <div className=" mt-4 md:mt-6">
                <button
                  onClick={() => openModalHandler(4)}
                  className="bg-white flex items-center border-2 border-[#A2552E] text-[#3C1C0B] py-2 px-4 md:px-6 rounded-lg hover:bg-[#e99466]"
                >
                  Explore Options <img src={arrow} alt="" className="pl-2" />
                </button>
              </div>
            </div>
            <div className="relative ">
              <img
                src={Image5}
                alt=""
                className=" w-[478px] h-[409px] md:h-[509px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#4A2F1E] py-10 md:py-16">
        <div className="px-4 md:px-[120px]">
          <h1 className="text-white text-[32px] md:text-[44px] font-bold text-center">
            Door Inspirations
          </h1>

          {/* Images Grid */}
          <div
            className={`pt-8 md:pt-[64px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
              showMore ? "h-auto" : "h-[600px] overflow-hidden"
            }`}
          >
            <img
              src={door1}
              alt="Door 1"
              className="w-full h-auto object-cover"
            />
            <img
              src={door2}
              alt="Door 2"
              className="w-full h-auto object-cover"
            />
            <img
              src={door3}
              alt="Door 3"
              className="w-full h-auto object-cover"
            />
            <img
              src={door4}
              alt="Door 4"
              className="w-full h-auto object-cover"
            />
            <img
              src={door5}
              alt="Door 5"
              className="w-full h-auto object-cover col-span-1 sm:col-span-2 lg:col-span-1"
            />

            {/* Additional Images */}
            {showMore && (
              <>
                <img
                  src={door6}
                  alt="Door 6"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={door7}
                  alt="Door 7"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={door8}
                  alt="Door 8"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={door9}
                  alt="Door 9"
                  className="w-full h-auto object-cover"
                />
              </>
            )}
          </div>
        </div>
        <button
          onClick={toggleShowMore}
          className="flex items-center justify-center text-white text-center mx-auto mt-4"
        >
          <span className="mr-2">{showMore ? "See Less" : "See More"}</span>
          <img
            src={dropdown}
            alt=""
            className={`w-4 h-4 transform ${showMore ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {openModal === 1 && <MyModal isOpen={true} onClose={closeModalHandler} />}
      {openModal === 2 && (
        <DoubleModal isOpen={true} onClose={closeModalHandler} />
      )}
      {openModal === 3 && (
        <GlassModal isOpen={true} onClose={closeModalHandler} />
      )}
      {openModal === 4 && (
        <FlushModal isOpen={true} onClose={closeModalHandler} />
      )}
    </div>
  );
};

export default LandingPage;
