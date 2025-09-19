"use client";
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import Link from 'next/link';


const Explore = () => {
    const [poems, setPoems] = useState([]);

    const fetchPoems = async () => {
        const poemArray = []
        const querySnapshot = await getDocs(collection(db, "verses"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const poemsObject = {
                id: doc.id,
                ...doc.data()
            }
            poemArray.push(poemsObject)
        });

        setPoems(poemArray)
        // console.log(poems);

    }

    useEffect(() => { fetchPoems() }, [poems])

    return (
        <main className='min-h-dvh p-3'>
            <h1 className='text-center m-5 font-bold text-2xl text-gray-800 w-3/4 mx-auto'>
                Explore our catalogue of wonderfully crafted Poems and interact with our Renowned authors.
            </h1>

            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    poems.map((poem, i) => (
                        <div key={i} className='shadow-md p-3 rounded-md flex flex-col justify-between'>
                            <div className='flex items-center justify-between'>
                                <img src={poem.img} alt={poem.author} className='rounded-full h-8 w-8' />
                                <p>{poem.author}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>
                                    Title: <span>{poem.title}</span>
                                </p>

                                <p className='line-clamp-2 text-sm mt-2'>
                                    {poem.poem}
                                </p>
                            </div>

                            <div className='flex items-center justify-between mt-4'>

                                <p className='text-xs'>
                                    Posted on <span>{poem.timestamp}</span>
                                </p>


                                <Link href={"#"} className='text-xs underline'>Read More</Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}

export default Explore
