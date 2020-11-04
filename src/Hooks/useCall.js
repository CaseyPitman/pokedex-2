import { useState, useEffect } from "react";
import axios from "axios";

const useCall = inputUrl => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setUrl(inputUrl);
  }, [inputUrl]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(url);

      setData(response.data);
    };

      getResponse();
  
  }, [url]);

  return data;
};

export default useCall;
