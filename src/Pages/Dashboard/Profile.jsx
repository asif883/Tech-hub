import React from 'react';
import useUserData from '../../Hooks/useUserData';
import Swal from 'sweetalert2';


const Profile = () => {
  const { name, email, role, photoURL } = useUserData();

  const handleBecomeSeller = () => {
    Swal.fire({
      title: 'Request Submitted!',
      text: 'Your request to become a seller has been sent.',
      icon: 'success',
      confirmButtonColor: '#fb923c',
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">My Profile</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 border border-orange-200 flex flex-col md:flex-row items-center gap-6">
        
        <div>
          <img
            src={photoURL || "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"}
            alt="User Avatar"
            className="w-32 h-32 object-cover rounded-full border-2 border-orange-300"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className='flex gap-3 items-center'>
            <h2 className="text-xl font-semibold">Name:</h2>
            <p className="text-gray-700 font-semibold text-xl">{name || "Not Provided"}</p>
          </div>

          <div className='flex gap-3 items-center'>
            <h2 className="text-xl font-semibold">Email:</h2>
            <p className="text-gray-700">{email || "Not Provided"}</p>
          </div>

          <div className='flex gap-3 items-center'>
            <h2 className="text-xl font-semibold">Role:</h2>
            <span className="text-white bg-orange-400 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {role || "user"}
            </span>
          </div>
        </div>
      </div>
       
      
      {role === 'buyer' &&
        <div className="mt-10 bg-orange-50 p-6 rounded-xl border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Become a Seller</h2>
          <p className="mb-4 text-gray-700">Join our growing seller community and enjoy exclusive benefits:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Reach thousands of tech-savvy customers daily</li>
            <li>Dedicated dashboard to manage your products</li>
            <li>Low commission & easy payouts</li>
            <li>Promotional tools to boost your visibility</li>
          </ul>

          <button
            onClick={handleBecomeSeller}
            className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300"
          >
            Become a Seller
          </button>
        </div>
      }
      {role === "seller" && (
        <div className="mt-10 bg-white border border-orange-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Welcome, {name}!</h2>
            <p className="text-gray-700 mb-4">You're all set to manage your shop and grow your business on Tech-Hub.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-100 p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg text-orange-600 mb-2">Quick Actions</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                <li>📦 <a href="/dashboard/dashboard/my-product" className="hover:underline">View My Products</a></li>
                <li>➕ <a href="/dashboard/dashboard/add-product" className="hover:underline">Add a New Product</a></li>
                </ul>
            </div>

            <div className="bg-orange-100 p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg text-orange-600 mb-2">Tips for Sellers</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Use high-quality images</li>
                <li>Write clear product descriptions</li>
                <li>Offer fast delivery</li>
                </ul>
            </div>
            </div>
        </div>
        )}

    </div>
  );
};

export default Profile;
