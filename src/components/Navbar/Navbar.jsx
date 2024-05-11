
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo2.jpg";

import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
   
    const {user, logOut} = useContext(AuthContext)
  
    const [theme, setTheme] = useState('light')
    const handleToggle = (e) =>{
        if(e.target.checked){
          setTheme('dark')
        }
        else{
          setTheme('light')
        }
      }
    
      useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    
      },[theme])
   
   
   
    return (
      <div className='navbar bg-red-100 shadow-lg mt-2 container '>
        <div className='flex-1'>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src={logo} alt='' />
            <span className='font-bold font-poppins'>Assignment</span>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1 font-poppins'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/assignment'>Assignment</Link>
            </li>
            <li>
              <Link to='/crassignment'>Create-Assignment</Link>
            </li>
            <li>
              <Link to='/pending'>Pending Assignment</Link>
            </li>
  
            {!user && (
                <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
  
          { user && (
            <div className='dropdown dropdown-end z-50 mr-3'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <div>Attempted Assignments</div>
              </li>
              
              <li className='mt-2'>
                <button 
                onClick={logOut}
                className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
          ) }
        </div>
        
        <div>
         <label className="inline-flex items-center space-x-4 cursor-pointer ">
        <span className="relative">
		<input onChange={handleToggle} id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
        </span>
         </label>
          </div>
      </div>
    )
  }
  
  export default Navbar