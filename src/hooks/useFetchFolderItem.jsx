import { useEffect, useState } from "react";
import axios from "axios";

const useFetchFolderItem = (url, item) => {
  // States for the useFetchFolderItem custom hook
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios(`${url}${item}`);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    setIsLoading(false);

    return controller?.abort();
  }, [item]);

  return { data, isLoading };
};

export default useFetchFolderItem;
