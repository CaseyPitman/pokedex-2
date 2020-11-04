import { useState, useEffect } from "react";
import axios from "axios";

const useCall = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(url);


      setData(response.data);
    };
    getResponse();
  }, [url]);

  return [data, setData];
};

export default useCall;
