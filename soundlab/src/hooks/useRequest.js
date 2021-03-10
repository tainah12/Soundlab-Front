import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { goToFeed } from "../routes/coordinator";

export const useRequest = () => {
  const history = useHistory();
  const [resultRequest, setResultRequest] = useState();

  const requestPost = (URL, body, token) => {
    axios
      .post(URL, body, {
        headers: { authorization: token },
      })
      .then((response) => {
        response.data.token &&
        localStorage.setItem("token", response.data.token.accessToken);
        response.data.token && setResultRequest(response.data);
        response.data.token && goToFeed(history);
      })
      .catch((error) => {
        error.response && alert(error.response.data.error);
      });
  };

  return [resultRequest, requestPost];
};