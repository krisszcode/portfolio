import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";

export const VerifyTokenHandler: React.FC = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        const verifyTokenHandler = async () => {
            await authContext?.verifyToken();
        };
        if (authContext?.token === null) {
            verifyTokenHandler();
        }
    }, [authContext]);
    return null;
  };