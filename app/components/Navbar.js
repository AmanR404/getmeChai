"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { data: session } = useSession()
    const toaster = () => {
        toast.success('Logged Out!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
    }
    
    
    if (session) {    
        return <div className='text-white'>
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
            <nav className='flex justify-between bg-gray-900 pt-1 px-3'>
                <Link href={'/'} className='flex gap-2 justify-center items-center'>
                    <img width={44} height={44} src="/tea.gif" alt="" />
                    <h1 className='text-white font-bold'>Get me a Chai!</h1>
                </Link>
                <div className='flex justify-center items-center gap-3'>
                    <span> Welcome {session.user.email} </span><br />
                <button onClick={() => {signOut(); toaster()}} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1">Sign out</button>
                </div>
            </nav>
        </div>
    }
    return (
        <div>
            <nav className='flex justify-between bg-gray-900 pt-1 px-3'>
                <div className='flex gap-2 justify-center items-center'>
                    <img width={44} height={44} src="/tea.gif" alt="" />
                    <h1 className='text-white font-bold'>Get me a Chai!</h1>
                </div>
                <Link href={'/login'}> <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1">Login</button></Link>
            </nav>
        </div>
    )
}

export default Navbar
