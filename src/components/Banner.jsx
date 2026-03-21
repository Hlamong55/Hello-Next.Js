"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();

    const handleBtn = () => {
        const password = prompt();
        if(password == "1234"){
            // console.log(router);
            router.push("/dashboard")
        }
    }


    return (
        <div className='text-center space-y-6 bg-linear-60 from-sky-600 via-sky-200 to-sky-600 py-10 rounded'>
            <h1 className="text-5xl font-extrabold ">Welcome to Dev Story 🐞</h1>

            <button
            onClick={handleBtn}
            className='px-5 py-3 bg-blue-800 text-white rounded-xl cursor-pointer hover:bg-blue-500 hover:text-black'>Share Stories</button>
        </div>
    );
};

export default Banner;