'use client';
import TextField from '@/components/textfield/textfield';
import React from 'react';
import Link from 'next/link';


export default function LoginPage(){
  return (
    <div className="flex flex-col items-center justify-center m-6 p">
      <div style={{padding:"150px",backgroundColor: "var( --global-white-choco-color)" }}  className="flex flex-col items-center justify-center max-w-[1000px]">
        
        <h2 className="text-2xl font-bold">
          Welcome to Realinvte.
        </h2>
        
        <p className="text-center my-4">
          Please log in to access your personalized dashboard, exclusive investment opportunities, and the latest insights on the real estate market.
        </p>
    <form className="w-full max-w-md space-y-4">
                       <TextField name={'email'} type={'email'} placeholder='Your email'/>
                      <TextField type={'password'} placeholder='Password' name='password'/>

    <div className="w-full max-w-md flex flex-col justify-center mt-4 space-y-4">

            <button
              type="submit"
              className="border w-full text-center py-2 transition rounded bg-black text-white"
            >
              Sign In
            </button>


        <Link href="" className="text-center text-black-500 hover:underline">
          Forgot password?
        </Link>

            <div className='flex justify-center fs-18 gap-2'>
            Don’t have account? Please <Link href={'/signup'} className='underline'>
            Sign Up
            </Link>
            </div>
        </div>
    </form>

      </div>
    </div>
  )
}