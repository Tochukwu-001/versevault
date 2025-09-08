import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaApple } from "react-icons/fa";




const page = () => {
    return (
        <main className='h-dvh flex items-center justify-center'>
            <div className='shadow-md p-3 rounded-md space-y-5 md:w-xl w-full'>
                <h1 className='text-center text-gray-800 font-bold text-2xl mb-6'>Sign in to your Account</h1>

                <button className='border w-full flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full'>
                    <FcGoogle className='text-2xl' />
                    <p> Continue with Google</p>
                </button>
                <button className='border w-full flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full'>
                    <FaGithub
                        className='text-2xl' />
                    <p> Continue with GitHub</p>
                </button>
                <button className='border w-full flex items-center justify-center gap-3 border-gray-300 py-3 rounded-full'>
                    <FaApple
                        className='text-2xl' />
                    <p> Continue with Apple</p>
                </button>
                <p className='text-xs text-gray-500 text-center'>By signing in, you agree to our terms and privacy policy</p>
            </div>
        </main>
    )
}

export default page
