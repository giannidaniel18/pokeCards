import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch() {
  const [requestStatus, setRequestStatus] = useState<any>({});

  const startRequest = (method: string, url: string, payload?: any) => {
    setRequestStatus({});
    return axios({
      method: method,
      url: url,
      headers: { "Content-Type": "application/json", "X-Api-Key": "4de5e85c-9084-435b-9fff-0a7202c6703b" },
      data: payload,
    })
      .then((response: any) => {
        const { data } = response;
        return { data: data, ok: true };
      })
      .catch((error: any) => {
        console.log(error.response);

        return { data: error.response, ok: false };
      });
  };

  //  useEffect(() => {

  //  }, [])

  return { startRequest, requestStatus };
}
