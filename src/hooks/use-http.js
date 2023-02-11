import axios from "axios";
import { useState } from "react";

const useHttp = (requestConfig, applyFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    result: false,
    message: "Something went wrong...",
  });

  const sendRequest = async function () {
    setIsLoading(true);
    try {
      const response = await axios({
        method: requestConfig.method ? requestConfig.method : 'GET',
        url: requestConfig.url,
        data: requestConfig.data ? requestConfig.data : null,
      });
      applyFunction(response.data);
    } catch (error) {
      setIsLoading(false);
      setIsError({ result: true, message: error.message });
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    isError,
    sendRequest
  };
};

export default useHttp;
