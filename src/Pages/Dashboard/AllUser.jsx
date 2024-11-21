import { useEffect, useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";
import { RiAdminLine } from "react-icons/ri";

const AllUser = () => {
    const [users , setUsers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
                
                <tr key={idx}>
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
                    <button className="btn btn-ghost btn-xs">
                        <RiAdminLine size={24}/>
                    </button>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">
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