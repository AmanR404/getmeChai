"use client"
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    const [form, setform] = useState({name : "", email: "", username : "", picture: "", razorpayid: ""})

    const handleSubmit = async() => {
      await fetch("http://localhost:3000/dashboard", {method:"POST", headers : {"Content-Type":"application/json"}, body:JSON.stringify({form})})
      toast.success('Data Submitted!', {
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

    const handleChange = (e) => {
        setform({...form, [e.target.name]:e.target.value})  
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
            <h1 className='font-bold text-white text-xl text-center my-2'>Welcome to your Dashboard</h1>
           
                <div className='w-3/4 sm:w-1/3 mx-auto'>
                    <div className='flex flex-col gap-1'>
                        <span className=' text-white'>Name</span>
                        <input className='rounded-md bg-slate-800 text-gray-300' onChange={handleChange}  type="text" name='name' id='name' value={form.name} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=' text-white'>Email</span>
                        <input className='rounded-md bg-slate-800 text-gray-300' onChange={handleChange}  type="text" name='email' id='email' value={form.email} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=' text-white'>Username</span>
                        <input className='rounded-md bg-slate-800 text-gray-300' onChange={handleChange}  type="text" name='username' id='username' value={form.username} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=' text-white'>Profile picture</span>
                        <input className='rounded-md bg-slate-800 text-gray-300' onChange={handleChange}  type="text" name='picture' id='picture' value={form.picture} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=' text-white'>Razorpay credentials</span>
                        <input className='rounded-md bg-slate-800 text-gray-300' onChange={handleChange}  type="text" name='razorpayid' id='razorpayid' value={form.razorpayid} />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="text-white w-full mt-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1">Save</button>
                </div>
           
        </div>
    )
}

export default page
