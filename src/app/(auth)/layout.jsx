import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className='flex gap-5 min-h-screen'>
            <div className='flex-2'>
                {children}
            </div>

            <div className='flex-1 flex justify-center items-center bg-blue-700 p-5'>
                <h2 className='text-5xl text-center font-bold  text-white'>Welcome for Authentication</h2>
            </div>
        </div>
    );
};

export default AuthLayout;