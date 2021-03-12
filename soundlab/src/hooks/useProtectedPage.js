import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import {goToLogin} from '../routes/coordinator';

export default function useProtectedPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    if (!token) {
      goToLogin(history);
    } 

  }, [history]);
}