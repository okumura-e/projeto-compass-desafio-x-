import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useKeepUser() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const recoverData = JSON.parse(sessionStorage.getItem("user") || "{}");
      if (Object.keys(recoverData).length) {
        setUser(recoverData);
      } else {
        navigate("/");
      }
    }
  }, [user]);

  return { user, setUser, navigate };
}
