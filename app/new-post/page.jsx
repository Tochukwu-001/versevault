"use server"
import { auth } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import NewpostForm from './post'

const page = async() => {
  const session = await auth()
  if (!session){
    redirect("/auth/signin")
  }
  return (
    <main>
      <NewpostForm session={session} />
    </main>
  )
}

export default page
