import React, { useState } from 'react'
import { Button, Input } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import LockIcon from './LockIcon'
import MailIcon from './MailIcon'
import { useDispatch } from 'react-redux';
import { login } from '../state/ListSlice';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const handleClick = (e) => {
        e.preventDefault();
        if (email === "test@gmail.com" && password === "12345") {
            dispatch(login(true))
            navigate("list")
        }
        else {
            alert("Correct Email and Password ")
        }
    }
    return (
        <div>
            <section >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-slate-950 rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-white">
                            <h1 className="text-xl text-center py-10 font-bold leading-tight tracking-tight  md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" method='post'>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                    <Input
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        color="primary"
                                        type="email"
                                        variant={'underlined'}
                                        onChange={(e) => SetEmail(e.target.value)}
                                        label="Email" />

                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                    <Input
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        color="primary"
                                        type="password"
                                        variant={'underlined'}
                                        onChange={(e) => SetPassword(e.target.value)}
                                        label="Password" />
                                </div>
                                <div className='text-center'>
                                    <Button onClick={handleClick} color="primary" >
                                        Sign in
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
