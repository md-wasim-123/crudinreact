import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
    return (
        <div>
            <div class="min-h-screen flex flex-grow items-center justify-center ">
                <div class="rounded-lg bg-slate-950 text-white p-8 text-center shadow-xl">
                    <h1 class="mb-4 text-4xl font-bold">404</h1>
                    <p >Oops! The page you are looking for could not be found.</p>
                    <Link to={'/'} class="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </Link>
                </div>
            </div>
        </div>
    )
}

export default NoPage
