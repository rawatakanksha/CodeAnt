import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignInRepo() {
  const navigate= useNavigate();
 function handleSubmit(e){
    e.preventDefault();
     navigate("/repo")
  }
  return (
   <>
   <p>form not completed directly click login to move to main screen</p>
   <div className='flex justify-center text-center items-center border h-screen '>
   <div className='border h-[350px] w-[400px] rounded-lg z-10 shadow-lg'>
    <h1 className=' m-2 text-xl font-semibold mt-4'>Sign In</h1>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-start  items-start ml-11 '>
        <label htmlFor='email ' className='text-lg m-2'>Email:</label>
        <input type='email' className='w-80 border rounded-lg z-20 shadow-md h-7'></input>
      </div>
      <div className='flex flex-col justify-start  items-start ml-11 '>
        <label htmlFor="password" className='text-lg m-2 '>
          Password
        </label>
        <input type='password'
        className='w-80 border rounded-lg mb-2 z-20 shadow-md h-7'
        placeholder=''></input>
      </div>
      <a href='#'className=''>
        Forgot Password?
      </a>
      <div className=' m-4'>
        <button className='border w-20 rounded-md h-8 z-20 shadow-md
        hover:-translate-x-2 hover:-translate-y-2 hover:bg-slate-400'
        
        >
          Login
        </button>
      </div>
      
    </form>
   </div>
   
   </div>
  
   </>
  )
}

export default SignInRepo