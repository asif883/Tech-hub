import { useContext } from "react";
import { AuthContext } from "../AuthPovider/Context";


const useAuth = () => {

    const auth = useContext(AuthContext)

    return auth;
};

export default useAuth;