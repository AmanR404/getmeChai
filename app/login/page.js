"use client"
import React from 'react'
import { useSession,signIn, signOut } from "next-auth/react" 
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const login = () => {
  const { data: session } = useSession()
  useEffect(() => {
    toast.success('Only Github Provider is Added!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
  }, [])
  
  if(session){
    toast.success('Logged In!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
    return <Link href={'/dashboard'}>
       <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
               />
     <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg absolute top-[50%] left-[44%] text-sm px-5 py-2 text-center me-2 mb-1">Go to Dashboard</button>
     </Link>
  }
  return (
    <div>
    <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
               />
        <h1 className="font-bold text-white text-3xl text-center mb-10">Login to Get your fans to support you</h1>
        <div className='text-gray-900 flex flex-col gap-2 justify-center items-center'>
            <button className='bg-white w-60 flex justify-center gap-2 items-center rounded-md py-1 hover:bg-gray-300'><img width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Nhdac4WogJcyclKl4W0SNeUBj7q-hBCAWg&s" alt="" /><span>Continue with Google</span></button>
            <button className='bg-white w-60 flex justify-center gap-1 items-center rounded-md py-1 hover:bg-gray-300'><img width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXu0p5xl_tB4Id8caYETptjtbTevOIU1vXOA&s" alt="" /><span>Continue with LinkedIn</span></button>
            <button className='bg-white w-60 flex justify-center gap-[11px] items-center rounded-md py-1 hover:bg-gray-300'><img width={25} src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" alt="" /><span>Continue with Twitter</span></button>
            <button className='bg-white w-60 flex justify-center gap-1 items-center rounded-md py-1 hover:bg-gray-300'><img width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfbcYeYgf0wQJ-LSPm3CPbyB7T1p0f5bnaA&s" alt="" /><span>Continue with Facebook</span></button>
            <button onClick={()=>{signIn("github")}} className='bg-white w-60 flex justify-center gap-3 items-center rounded-md py-1 hover:bg-gray-300'><img width={25} src="https://thumbs.dreamstime.com/b/astana-kazakhstan-july-github-icon-logo-vector-symbol-198642058.jpg" alt="" /><span>Continue with Github</span></button>
            <button className='bg-white w-60 flex justify-center items-center gap-3.5 rounded-md py-1 hover:bg-gray-300'><img width={25} src="https://img.icons8.com/m_rounded/512/mac-os.png" alt="" /><span>Continue with Apple</span></button>
        </div>
    </div>
  )
}

export default login
