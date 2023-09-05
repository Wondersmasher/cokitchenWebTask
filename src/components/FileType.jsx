import React from "react";

const FileType = ({ link, children }) => {
  return (
    <a
      href={link}
      download
      target="_blank"
      className="flex justify-center  w-full bg-[#EFF0F0]"
    >
      {children}
    </a>
  );
};

export default FileType;
