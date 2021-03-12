import { useEffect, useState } from "react";
import axios from "axios";
import { goToFeed } from "../routes/coordinator";

export const useRequest = (inicialData, url) => {
  const [data, setData] = useState(inicialData);

  useEffect(() => {
    axios.get(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })  

      .then((response) => {
        response.data.token &&
        response.data.token && setData(response.data);
      })

      .catch((error) => {
        console.log(error)
        error.response && alert(error.response.data.error);
      });
      
  }, [url]);

  return (data);
}