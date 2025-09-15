"use client";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const NewPostForm = () => {
    return (
        <main className='min-h-dvh'>
            <div>
                <h1>Share your native stories and poems with a larger community</h1>

                <div>
                    <Formik>
                        <Form>
                            <div>
                                <label htmlFor="">Poem Title</label>
                                <Field />
                            </div>
                            <div>
                                <label htmlFor="">Share your Poem</label>
                                <Field />
                            </div>

                            <button type='submit'>Post</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </main>
    )
}

export default NewPostForm
