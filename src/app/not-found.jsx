import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>

            <h1 className='text-6xl font-extrabold text-sky-600'>404</h1>
            <h2 className='text-5xl font-extrabold'>Not Found !!</h2>

            <Link 
            className='mt-8 bg-sky-600 px-4 py-2.5 rounded-lg text-white font-semibold'
            href={"/"}>Go Home</Link>
        </div>
    );
};

export default NotFound404;