import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  // States for the useFetch custom hook
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios(url);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    setIsLoading(false);

    return controller?.abort();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
