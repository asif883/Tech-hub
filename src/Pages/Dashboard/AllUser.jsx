import { useEffect, useState } from "react";
import { TiUserDeleteOutline } from "react-icons/ti";
import { RiAdminLine } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";

const AllUser = () => {
    const [users , setUsers] = useState([])

    const handleAdmin = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "A admin will get all access of your website!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin"
          })
          .then((result) => {         
            if(result.isConfirmed){
                axios.patch(`https://tech-hub-server-five.vercel.app/users/admin/${user?._id}`)
                .then(res =>{
                    if(res.data.modifiedCount > 0){
                        Swal.fire({
                            title: "Admin added Successfully!",
                            text: `${user.name} is Admin Now`,
                            icon: "success"
                          })
                    }
                window.location.reload()  
                })
            }
        })
        
        
    }


    const handleDelete = (user)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert the user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
         
            if(result.isConfirmed){
                axios.delete(`https://tech-hub-server-five.vercel.app/users/${user?._id}`)
                .then( res =>{
                    if(res.data.deletedCount > 0 ){
                        Swal.fire({
                            title: "Deleted!",
                            text: "The user has been deleted.",
                            icon: "success"
                          });
                     }
                window.location.reload()
                })
            }

        })    
            
         
  }
  
 
 

    useEffect(()=>{
        fetch('https://tech-hub-server-five.vercel.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-50 font-bold text-lg">
              <th>SL.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user, idx)=> 
                
                <tr key={idx} >
               <th>
                    <label>
                       {idx+1}
                    </label>
                </th>
               <th>
                    <label>
                       {user?.name}
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                    <div className="avatar">
                        <p>{user?.email}</p>
                    </div>
                    </div>
                </td>
                <td>
                    <p className="uppercase">{user?.role}</p>
                </td>
                <td>
                    <button onClick={()=>handleAdmin(user)} className="btn btn-ghost btn-xs">
                        <RiAdminLine size={24}/>
                    </button>
                </td>
                <th>
                    <button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-xs">
                        <TiUserDeleteOutline size={24}/>
                    </button>
                </th>
                </tr>
            
                )
            }
            
          </tbody>
          
        </table>
      </div>
    );
};

export default AllUser;