// MyModal.jsx
import React from "react";
import molded1 from "../assests/molded1.png";
import molded2 from "../assests/molded2.png";
import molded3 from "../assests/molded3.png";
import molded4 from "../assests/molded4.png";
import molded5 from "../assests/molded5.png";
import molded6 from "../assests/molded6.png";
import molded7 from "../assests/molded7.png";
import molded8 from "../assests/molded8.png";
import molded9 from "../assests/molded9.png";
import molded10 from "../assests/molded10.png";

const MyModal = ({ isOpen, onClose }) => {
  return (
    <dialog open={isOpen} className="modal ">
      <div className="modal-box  bg-[#4A2F1E]  w-11/12 max-w-[1312px]  min-h-[608px]">
        <form method="dialog">
          <button
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#4A2F1E] hover:bg-gray-200"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-[28px] text-[#F5F5F4]">
          Molded Panel Doors
        </h3>
        <div className="border-y-0 border-[#DFCEB1] md:border-y w-full"></div>

        <div className="overflow-x-auto">
          <div className=" pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <img
              src={molded1}
              alt="Molded Door 1"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded2}
              alt="Molded Door 2"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded3}
              alt="Molded Door 3"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded4}
              alt="Molded Door 4"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded5}
              alt="Molded Door 5"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded6}
              alt="Molded Door 6"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded7}
              alt="Molded Door 6"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded8}
              alt="Molded Door 8"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded9}
              alt="Molded Door 9"
              className="w-full h-auto object-cover"
            />
            <img
              src={molded10}
              alt="Molded Door 10"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MyModal;
