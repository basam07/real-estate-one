import TextField from '@/components/textfield/textfield'
import React from 'react'
import Link from 'next/link'

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6 p">
        {/* style="color: var(--main-color);" */}
      <div style={{padding:"150px",backgroundColor: "var( --global-white-choco-color)" }}  className="flex flex-col items-center justify-center max-w-[1000px]">
        
        <h2 className="text-2xl font-bold">
          Welcome to Realinvte.
        </h2>
        
        <p className="text-center my-4">
          Please log in to access your personalized dashboard, exclusive investment opportunities, and the latest insights on the real estate market.
        </p>

        <div className="w-full max-w-md space-y-4">
        <TextField placeholder='Your Name'/>
          <TextField placeholder='Your email'/>
          <TextField placeholder='Password' type='password'/>
          <TextField placeholder='Password' type='password'/>
        </div>

        <div className="w-full max-w-md flex flex-col justify-center mt-4 space-y-4">
  <Link
    href="/"
    className="border w-full text-center py-2 transition rounded bg-black text-white"
  >
    Sign In
  </Link>
  <Link href="" className="text-center text-black-500 hover:underline">
    Forgot password?
  </Link>

  <div className='flex justify-center fs-18 gap-2'>
  Already have account? Please <Link href='/signup' className='underline'>
  Sign Up
  </Link>
  </div>

  
</div>

      </div>
    </div>
  )
}

export default signup
