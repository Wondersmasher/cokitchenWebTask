import React from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import useFetchFolderItem from "../hooks/useFetchFolderItem";

const SingleFile = () => {
  const { itemId } = useParams();
  const { data, isLoading } = useFetchFolderItem(
    "http://3wdz.c.time4vps.cloud:3000/file/",itemId
  );
  return <Home data={data} isLoading={isLoading} />;
};

export default SingleFile;
