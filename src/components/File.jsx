import React, { useState } from "react";
import Modal from "./Modal";
import {
  BsFilePdfFill,
  BsFiletypeSvg,
  BsFiletypeXlsx,
  BsFiletypeTxt,
  BsFiletypeExe,
  BsFileEarmarkZipFill,
} from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { AiOutlineFileImage } from "react-icons/ai";
import FileType from "./FileType";

const File = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [singleItem, setSingleItem] = useState(null);
  const handleDoubleClick = (id) => {
    const newItem = data.filter((item) => item.id === id);
    setSingleItem(newItem);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      {data[0]?.type && (
        <p className="text-[20px] font-bold ">
          File{data.length > 1 && "s"}: {data.length}
        </p>
      )}
      <div className="flex gap-2 flex-wrap justify-stretch py-2">
        {data?.map((item) => {
          const pdf = item.name.includes("pdf");
          const svg = item.name.includes("svg");
          const xlsx = item.name.includes("xlsx");
          const txt = item.name.includes("txt");
          const exe = item.name.includes("exe");
          const zip = item.name.includes("zip");
          const getIcon = (style, style2 = "", style3 = "") => {
            if (pdf)
              return (
                <BsFilePdfFill
                  className={`text-red-500  ${style} ${style3} `}
                />
              );
            else if (svg)
              return (
                <BsFiletypeSvg
                  className={`text-green-500  ${style} ${style3} `}
                />
              );
            else if (xlsx)
              return (
                <BsFiletypeXlsx
                  className={`text-blue-500  ${style} ${style3} `}
                />
              );
            else if (txt)
              return (
                <BsFiletypeTxt
                  className={`text-yellow-500  ${style} ${style3} `}
                />
              );
            else if (exe)
              return (
                <BsFiletypeExe
                  className={`text-pink-500  ${style} ${style3} `}
                />
              );
            else if (zip)
              return (
                <BsFileEarmarkZipFill
                  className={`text-gray-500  ${style} ${style3} `}
                />
              );
            else
              return (
                <AiOutlineFileImage
                  className={`${style} ${style2} text-yellow-300 w-8 h-8`}
                />
              );
          };

          const event = new Date(item.created_at);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          const newDate = event.toLocaleDateString("en-GB", options);
          return (
            <article
              className="p-2 flex flex-col  shadow-md cursor-pointer relative lg:w-[24%] md:w-[47%] w-[100%] bg-white rounded-md "
              key={item.id}
              onDoubleClick={() => handleDoubleClick(item.id)}
            >
              <div>
                {!item.favourite ? (
                  <MdOutlineFavoriteBorder
                    className={`absolute right-4 top-4  text-white
                  w-7 h-7 p-1 rounded-full bg-[#7A8085] `}
                  />
                ) : (
                  <MdOutlineFavorite
                    className="text-red-500 absolute right-4 top-4
                  w-7 h-7 p-1 rounded-full bg-[#7A8085]"
                  />
                )}
              </div>
              {!pdf && !svg && !xlsx && !txt && !zip && !exe && (
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-40 object-cover object-center"
                />
              )}
              <FileType link={item.src}>
                {getIcon(`w-24 h-24`, "hidden", "my-8")}
              </FileType>
              <div className="flex gap-2 items-center">
                {getIcon("w-6 h-6")}
                <div>
                  <p className="text-[14px] font-semibold">{item.name}</p>
                  <p className="text-[12px] text-[#7A8085]">
                    Added on {newDate}
                  </p>
                </div>
              </div>
              {showModal && (
                <Modal
                  onClose={handleCloseModal}
                  isOpen={showModal}
                  item={singleItem[0]}
                  newDate={newDate}
                />
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default File;
