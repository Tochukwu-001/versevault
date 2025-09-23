"use server";
import { auth } from '@/auth';
import UpdateProfile from '@/components/UpdateProfile';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <main className='min-h-dvh'>
      <div className='flex items-center justify-center flex-col gap-5 my-5'>
       
        <img src={session?.user?.image} alt={session?.user?.name.slice(0, 1).toUpperCase()} />
        <h1>{session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
      </div>

      <UpdateProfile session={session}/>
    </main>
  )
}

export default page
