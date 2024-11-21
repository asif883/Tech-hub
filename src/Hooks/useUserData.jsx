import { useEffect, useState } from "react";

import useAuth from "./useAuth";
import axios from "axios";

// import axios from "axios";

const useUserData = () => {
    const {user , loading} =useAuth()
    const [userData , setUserData] = useState({})
    
    useEffect(()=>{
        const fetchData =()=>{
            axios.get(`http://localhost:4000/user/${user?.email}`)
            .then(res =>{
               setUserData(res.data);
            })
        }
        fetchData()
},[]);
    return userData;
}
export default useUserData;