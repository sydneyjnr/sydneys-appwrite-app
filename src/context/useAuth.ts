import { useContext } from "react";
import AuthContext from "./authontext";

const useAuth = () => {
    const data = useContext(AuthContext);
    return data;
}

export default useAuth;