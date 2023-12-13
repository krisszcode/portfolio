import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";

export const VerifyTokenHandler: React.FC = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const verifyTokenHandler = async () => {
      await authContext?.verifyToken();
    };
    if (authContext?.isAuthenticated === false) {
      verifyTokenHandler();
    }
  }, [authContext?.isAuthenticated]);
  return null;
};
