import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const Context = ({children}) => {

    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , currentUser=>{
            setUser(currentUser)
        
        if(currentUser){
            axios.post('https://tech-hub-server-five.vercel.app/authentication',{email: currentUser?.email})
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
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // login 
    const login = ( email, password ) =>{
        setLoading(true)    
        return signInWithEmailAndPassword( auth, email, password)
    }

    // Logout
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // google login

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    const authInfo ={
        user,
        loading,
        CreateUser,
        login,
        logout,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;