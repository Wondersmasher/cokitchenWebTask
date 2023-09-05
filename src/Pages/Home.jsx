import React, { useState } from "react";
import Folder from "../components/Folder";
import File from "../components/File";
import Sort from "../components/Sort";

const Home = ({ data }) => {
  const [sort, setSort] = useState("");
  let folder = data?.filter((item) => item.type === "folder");
  let file = data?.filter((item) => item.type === "file");

  if (sort === "date") {
    folder = folder?.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    file = file?.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
  } else if (sort === "name") {
    folder = folder?.sort((a, b) => a.name.localeCompare(b.name));
    file = file?.sort((a, b) => a.name.localeCompare(b.created_at));
  }

  return (
    <div className="w-full min-h-screen px-8 md:px-16 lg:px-32 flex flex-col gap-8 pt-16 bg-[#F2F2F3]">
      <div className="flex justify-between">
        <Sort setSort={setSort} />
      </div>
      {folder && <Folder data={folder} />}
      {file && <File data={file} />}
    </div>
  );
};

export default Home;
