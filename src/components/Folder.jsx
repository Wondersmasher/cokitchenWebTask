import React from "react";
import { BsFillFolderFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Folder = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      {data[0]?.type && (
        <p className="text-[20px] font-bold ">
          Folder{data.length > 1 && "s"}: {data.length}
        </p>
      )}
      <div className="flex gap-2 flex-wrap py-2 justify-stretch">
        {data?.map((item) => {
          const event = new Date(item.created_at);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          const newDate = event.toLocaleDateString("eg-GB", options);
          return (
            <div
              key={item.id}
              className="bg-blue p-2 flex gap-[10px] items-center shadow-md cursor-pointer rounded-sm lg:w-[23%] md:w-[47%] w-[100%] bg-white flex-gro "
              onDoubleClick={() => navigate(`/file/${item.id}`)}
            >
              <BsFillFolderFill className="bg-[#EFF0F0] text-[#7A8085] rounded-full w-8 h-8 p-2" />
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold">{item.name}</p>
                <p className="text-[12px]  text-[#7A8085]">
                  Added on {newDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
