import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const {googleLogin , login} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
     const {
        register, 
        handleSubmit,
        formState: {errors}
    } =useForm()

    const handleLogin = (data)=>{
        const email = data.email;
        const password = data.password

        login( email, password) 
        .then(res =>{
            console.log(res);
            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              navigate(location?.state ? location.state : '/');
        })
        

        .catch (error =>{
            console.error( error)

            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })
    }  

    const handleGoogleLogin = ()=>{
            googleLogin()
            .then(res=>{            
                const name = res?.user?.displayName
                const email = res?.user?.email
                const userInfo= {
                    name,
                    email,
                    role : "buyer"
                  }
                    axios.post('https://tech-hub-server-five.vercel.app/user',userInfo)
                    .then((res)=>{
                        
                        navigate(location?.state ? location.state : '/'); 
                    })
            })
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto">
          
      <div className="max-w-lg mx-auto  mt-10 bg-orange-50 rounded-lg md:px-3 py-8">
          <div className="text-center">
              <h1 className="text-2xl md:text-4xl text-gray-900 font-bold">Sing in to your account </h1>
          </div>


      <form onSubmit={handleSubmit(handleLogin)}  className="card-body">
              <div className="form-control">
              <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input bg-white" {...register("email" ,{required: true})} />
              {
                errors.email && (
                    <p className='text-red-500 text-sm font-light'> Email is required</p>
                )
              }
              </div>

              <div className="form-control relative">
                  <label className="label">
                      <span className=" label-text text-xl font-semibold">Password</span>
                  </label>
                
                  <input
                        type="password"
                        placeholder="Enter your password"
                        className= "input bg-white"
                        {...register("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long.",
                        },
                        pattern: {
                            value: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
                            message:
                            "Password must include uppercase, lowercase, a number, and a special character.",
                        },
                        })}
                        
                    />
                    {
                    errors.password && <p className='text-red-500'>{
                        errors.password.message
                    }</p>
                    }
                      
                 
                  </div>
             
              <div className="form-control mt-6">
              <button type='submit' className="w-full border-2 mr-4  px-4  rounded-lg py-3 bg-gray-800 text-gray-200  font-semibold">Sing In</button>
              </div>
              
              <label className="label">
                  <p className="label-text-alt text-sm md:text-lg ">New here? Please <Link to='/register' className="underline text-blue-500 font-medium">Sing up</Link></p>
              </label>
      </form>
      <div className="">
                    <h1 className="text-center font-semibold">Or, Login with</h1>
                  <div className="text-center mt-4">
                      <button onClick={handleGoogleLogin} className="mr-3 border border-gray-300 p-1 rounded-xl">
                          <FcGoogle className="w-10 h-10" />
                      </button>
                  </div>
                 </div>
            </div>
          </div>
        </div>
    );
};

export default Login;