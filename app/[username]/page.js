import React from 'react'

const Dashboard = ({ params }) => {
  return (
    <div className='relative'>
      <img className='w-full h-72 object-cover' src="https://cdn.dribbble.com/users/88429/screenshots/4588331/media/d0f6e1020a6f36b3e02b1e3b87d6f6c9.gif" alt="" />
      <div >
        <img className='rounded-full absolute left-[38%] sm:left-[45%] top-60' width={120} height={120} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="" />
      </div>
      <div className='flex flex-col justify-center items-center mt-20 text-white'>
        <span className='text-white font-bold'>@{params.username}</span>
        <p className='text-white opacity-55'>Creating Animated Art for VTTs</p>
        <div className='flex gap-4  opacity-55'>
          <span>9,719 members</span> <span>82 posts</span> <span>15,450$ release</span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 my-11 w-[80%] mx-auto text-white'>
        <div className='w-full rounded-md bg-slate-900'>
          <h2 className='font-bold p-5'>Supporters</h2>
          <div className='flex gap-2 p-3 text-sm'><img className= 'w-9' src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="" /> <span>Shubham donated <b>30$</b> with a message I support you bro. lots of ❤️</span></div>
          <div className='flex gap-2 p-3 text-sm'><img className= 'w-9' src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="" /> <span>Atul donated <b>10$</b> with a message "Brother take 10$ itne hi hain"</span></div>
          <div className='flex gap-2 p-3 text-sm'><img className= 'w-9' src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="" /> <span>Elon Musk donated <b>300$</b> with a message "Jee le apni Zindagi" ❤️</span></div>
          <div className='flex gap-2 p-3 text-sm'><img className= 'w-9' src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="" /> <span>Trump donated <b>100$</b> with a message "Election jeetne ki khushi mein"</span></div>
        </div>
        <div className='w-full rounded-md bg-slate-900'>
          <h2 className='font-bold p-5'>Make a Payment</h2>
          <div className='w-[85%] mx-auto'>
            <form action="">
                <input className='rounded-md bg-slate-800 w-full py-2 pl-2 mb-2 text-gray-300' type="text" name='name' id='name' placeholder='Enter Name' />
                <input className='rounded-md bg-slate-800 w-full py-2 pl-2  mb-2 text-gray-300' type="text" name='name' id='name' placeholder='Enter Message' />
                <input className='rounded-md bg-slate-800 w-full py-2 pl-2  mb-2 text-gray-300' type="text" name='name' id='name' placeholder='Enter Amount' />
              
              <button type="submit" className="text-white w-full mt-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1">Pay</button>
              <button className='bg-slate-800 px-3 py-2 rounded-md mt-3 mr-2'>Pay $10</button>
              <button className='bg-slate-800 px-3 py-2 rounded-md mt-3 mr-2'>Pay $20</button>
              <button className='bg-slate-800 px-3 py-2 rounded-md mt-3'>Pay $30</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
