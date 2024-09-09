import React from "react";
import glass1 from "../assests/Glass1.png";
import glass2 from "../assests/Glass2.png";
import glass3 from "../assests/Glass3.png";

const GlassModal = ({ isOpen, onClose }) => {
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box bg-[#4A2F1E] w-full max-w-[1312px] min-h-[608px] mx-auto p-4">
        <form method="dialog">
          <button
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#4A2F1E] hover:bg-gray-200"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-[28px] text-[#F5F5F4]">Double Doors</h3>
        <div className="border-y-0 border-[#DFCEB1] md:border-y w-full mt-2"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 pt-4">
          <img
            src={glass1}
            alt=" 1"
            className="w-full md:w-1/2 h-auto object-cover"
          />
          <img
            src={glass2}
            alt=" 2"
            className="w-full md:w-1/2 h-auto object-cover"
          />
          <img
            src={glass3}
            alt=" 2"
            className="w-full md:w-1/2 h-auto object-cover"
          />
        </div>
      </div>
    </dialog>
  );
};

export default GlassModal;
