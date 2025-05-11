import { FaHeart } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";


const blogData = [
  {
    id: 1,
    title: "Latest Tech Trends in 2025",
    name: "John Doe",
    likes: 125,
    category: "Tech News",
    description: "In 2025, we are seeing some groundbreaking innovations in AI, Quantum Computing, and the Internet of Things (IoT). This article explores the top trends shaping the future of technology...",
    image: "https://i.ytimg.com/vi/RxGYVvTBpxE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmdi5YGTKBb9jdTELKu6hPAJCQfQ"
  },
  {
    id: 2,
    title: "Top Gadgets You Should Own in 2025",
    name: "Jane Smith",
    likes: 200,
    category: "Gadgets",
    description: "From foldable phones to wearable devices, these are the top gadgets that will change your daily life in 2025. Find out which products made the list!",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*uuDPiBybipbwsG4NfnUpmg.jpeg"
  },
  {
    id: 3,
    title: "How 5G Will Transform the Tech Landscape",
    name: "Robert Johnson",
    likes: 150,
    category: "Telecommunications",
    description: "The rollout of 5G networks will revolutionize industries like healthcare, gaming, and transportation. But how will it impact your everyday life? Read on for insights...",
    image: "https://unblogdedanza.com/wp-content/uploads/2024/01/22The-Impact-of-5G-Technology-A-Game-Changer22.jpeg"
  }
];

const popularArticles = [
  {
    id: 1,
    title: "AI Innovations to Look Out for in 2025",
    date: "January 15, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0YhhdmSQd9dnqzgIgfqWAmkCJ0vM7NPJkQ&s"
  },
  {
    id: 2,
    title: "The Rise of Autonomous Vehicles in 2025",
    date: "February 10, 2025",
    image: "https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/blt47587bc9d9836441/65817ee83018f3040a796399/GettyImages-971246808.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale"
  },
  {
    id: 3,
    title: "How Blockchain Will Shape the Future of Tech",
    date: "March 3, 2025",
    image: "http://mudrex.com/learn/wp-content/uploads/2024/11/FUTURE-OF-BLOCKCHAIN-jpg.webp"
  }
];

const Blog = () => {
  return (
    <div className='px-5 mt-10 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
        {/* Blog Posts */}
        <div className='col-span-1 md:col-span-8'>
          {blogData.map((data) => (
            <div className='mb-12' key={data.id}>
              <div className="relative overflow-hidden group rounded-lg">
                <img 
                  className="w-full h-[250px] md:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
                  src={data.image} 
                  alt="blog" 
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              <h1 className='mt-3 mb-2 text-xl md:text-3xl font-semibold'>{data.title}</h1>
              
              <div className='flex flex-wrap gap-4 md:gap-6 font-medium text-gray-700 text-sm md:text-base'>
                <p className='flex items-center gap-2'>
                   {data.name}
                </p>
                <p className='flex items-center gap-2'>
                 <FaHeart size={20}/> {data.likes}
                </p>
                <p className='flex items-center gap-2'>
                   {data.category}
                </p>
              </div>

              <p className='text-gray-600 mt-3 border-b-2 border-dotted border-gray-900 pb-7'>
                {data.description.slice(0, 300)}...
                <a href="#" className='text-blue-500 ml-1'>read more</a>
              </p>

              <div className='mt-5 flex items-center'>
                <p className='text-gray-900 text-base font-medium mr-3'>Share</p>
                <div className='flex gap-3 text-gray-700'>
                  <a href="#"><FaFacebook size={20} /></a>
                  <a href="#"><FaInstagram size={20} /></a>
                  <a href="#"><FaYoutube size={20} /></a>
                  <a href="#"><FaTwitter size={20} /></a>
                  <a href="#"><FaLinkedin size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className='col-span-1 md:col-span-4'>
          <h2 className='text-xl md:text-2xl font-semibold uppercase'>Recent Articles</h2>
          <ul className="space-y-3 mt-5 text-gray-600">
            {blogData.map((data) => (
              <li className='border-b border-gray-200 pb-2' key={data.id}>
                <a href="#" className="hover:underline flex gap-2 items-center text-sm">
                  <IoIosArrowForward/> {data.title}
                </a>
              </li>
            ))}
          </ul>

          <h3 className='text-xl md:text-2xl font-semibold uppercase my-6'>Popular Articles</h3>
          <div>
            {popularArticles.map((blog) => (
              <div className='mb-4 flex gap-3 items-center border-b border-gray-200 pb-2' key={blog.id}>
                <img className='w-20 h-16 object-cover rounded-md' src={blog.image} alt="article" />
                <div>
                  <a href="#" className='text-gray-700 text-sm font-medium hover:text-blue-500'>{blog.title}</a>
                  <p className='text-xs text-gray-500'>{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
