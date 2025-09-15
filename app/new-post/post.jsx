"use client";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


const NewPostForm = () => {
    const iv = {
        title: "",
        poem: ""
    }

    const formValidation = Yup.object({
        title: Yup.string().required("This is a required field"),
        poem: Yup.string().required("This is a required field").min(15, "Minimum of 15 characters required")
    })

    const handleSubmit = async (values) => {
        console.log(values);
    }

    return (
        <main className='min-h-dvh flex items-center justify-center'>
            <div className='lg:w-3xl shadow-md rounded-md p-3'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800 text-center'>Share your native stories and poems with a larger community</h1>

                <div>
                    <Formik initialValues={iv} validationSchema={formValidation} onSubmit={handleSubmit}>
                        <Form className='space-y-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-sm text-gray-800'>Poem Title</label>
                                <Field name="title" className="outline-none border rounded-md border-gray-200 p-2" />
                                <ErrorMessage name='title' component={"p"} className='text-xs text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='text-sm text-gray-800'>Share your Poem</label>
                                <Field as="textarea" name="poem" className="outline-none border rounded-md border-gray-200 p-2" />
                                <ErrorMessage name='poem' component={"p"} className='text-xs text-red-600' />
                            </div>

                            <button type='submit' className='bg-purple-600 text-white w-full rounded-md p-2 hover:bg-purple-700 transition-all duration-200'>Post Your Poem</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </main>
    )
}

export default NewPostForm
