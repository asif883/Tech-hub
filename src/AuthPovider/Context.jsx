import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/FirebaseConfig";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const Context = ({children}) => {

    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , currentUser=>{
            setUser(currentUser)
        
        if(currentUser){
            axios.post('http://localhost:4000/authentication',{email: currentUser?.email})
            .then(data=>{
                if(data.data){
                    localStorage.setItem('access-token', data?.data?.token)
                    setLoading(false)
                }
            })
        }
        else{
            localStorage.removeItem('access-token')
            setLoading(false)
        }

    })

        return ()=>{
            unsubscribe()
        }
    }, [])


    //  registration
    const CreateUser = (email , password) =>{
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // login 
    const login = ( email, password ) =>{

        return signInWithEmailAndPassword( auth, email, password)
    }

    // Logout
    const logout = () =>{
        return signOut(auth)
    }

    const authInfo ={
        user,
        loading,
        CreateUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;