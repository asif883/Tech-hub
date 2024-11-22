import { useForm } from 'react-hook-form';
import img from '../assets/Sign up-rafiki.svg'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


const Register = () => {
    const { CreateUser } =useAuth()

    const navigate = useNavigate()

    const {
        register, 
        handleSubmit,
        watch, 
        formState:{ errors }

    } = useForm()

    const handleRegister =(data)=>{

        const email = data.email
        const password = data.password
        const role =data.role
        const name = data.name
        const status = role === 'buyer' ? "approved" : 'Pending'
        const wishList =[]
        const userInfo={
            name, email, role, status, wishList
        }
        // console.log(userInfo);

        CreateUser( email, password )
        .then( ()=>{
            axios.post('https://tech-hub-server-five.vercel.app/user', userInfo)
            .then((res)=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Registration Successful',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      }); 
                }
                navigate('/')
            })
            
        }).catch (error =>{
            console.error( error)
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })

    }
    return (
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
            
        <div className="flex-1">
            <img src={img} alt="" />
        </div>
        
        <div className="text-center max-w-lg mt-16 shadow-xl rounded-lg pb-8 flex-1">
            <h1 className="text-4xl text-[#FFA43A] font-bold">Register Now</h1>


            <form onSubmit={handleSubmit(handleRegister)}  className="card-body">
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                            
                        <input type="text" name="Name"  placeholder="Enter Your Name"className="input input-bordered border border-orange-300" {...register('name' ,{required: true})} />
                        {
                            errors.name && ( 
                                <p className='text-red-500 text-sm font-light'>Name is required</p>
                            )
                        }
                       
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered border border-orange-300"{...register("email", {required: true})} />
                        {
                          errors.email && ( 
                              <p className='text-red-500 text-sm font-light'>Email is required</p>
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
                        className= "input input-bordered border border-orange-300"
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Confirm Password</span>
                        </label>
                        <input type='password' 
                        name='confirm-password' 
                        placeholder="confirm-password" 
                        className= "input input-bordered border border-orange-300" 
                        {...register("confirmPassword", {
                            required: true ,
                            validate:(value)=>{
                                if(watch("password") != value){
                                    return "Your password don't match"
                                }
                            }
                        } )}
                        /> 
                          {
                            errors.confirmPassword &&(
                                <p className='text-red-500 text-sm font-light'>Both password must match</p>
                            )
                        }           
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Role</span>
                        </label>
                        <select className="select w-full input input-bordered border border-orange-300" 
                        {...register('role', {required: true})} 
                        >
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                          </select>
                            {
                                errors.role &&(
                                    <p className='text-red-500 text-sm font-light'>You have to select a role</p>
                                )
                            }
                    </div>
                    
                    <div className="form-control mt-6">
                    <button type='submit' className=" w-full border-2 mr-4  px-4  rounded-lg py-3 bg-[#FFA43A] text-white  font-semibold">Register</button>
                    </div>
                    <label className="label mt-4">
                        <a className="label-text-alt text-lg">Already have an account? Please <Link to='/login' className="underline text-orange-600">Login</Link></a>
                    </label>
             </form>
        
        </div>
        
    </div>
    );
};

export default Register;