import React, { useState } from "react";

interface requestConfig {
  url: string;
  method?: string;
  headers?: {};
  body?: {};
}

const useHttp = <T>(
  requestConfig: requestConfig,
  applyData: React.Dispatch<React.SetStateAction<T>> // (input: any) => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);

    fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP request failed");
        }
      })
      .then((data) => {
        console.log("Response body", data);
        applyData(data);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong in HTTP request");
        console.log(error.message || "Something went wrong in HTTP request");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
