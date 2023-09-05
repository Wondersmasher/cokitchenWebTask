import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, item, newDate }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 border-2 border-blue-500 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className=" fixed inset-0 bg-black opacity-10"></div>
      <div className=" bg-white lg:w-[60%]  w-[80%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className=" py-4 px-6 flex float-right">
          <button
            onClick={onClose}
            className="modal-close-button bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
          >
            <AiOutlineClose />
            Close
          </button>
        </div>
        <div className=" py-4 text-left px-6  bg-rd-500">
          <img
            src={item?.src}
            alt={item?.name}
            className="w-full lg:h-auto lg:max-h-[30rem] h-[20rem] object-cover object-center relative"
          />
          <p className="font-semibold text-xl">{item?.name}</p>
          <p className="text-[12px] font-thin text-[#7A8085]">
            Added on {newDate}
          </p>
        </div>
      </div>
    </div>
  );
};
//

export default Modal;
