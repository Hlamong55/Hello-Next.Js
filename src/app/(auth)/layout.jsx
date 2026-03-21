import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className='flex gap-5 '>
            <div className='flex-2'>
                {children}
            </div>

            <div className='flex-1 min-h-screen bg-blue-700 p-5'>
                <h2 className='text-5xl font-bold  text-white'>Welcome for Authentication</h2>
            </div>
        </div>
    );
};

export default AuthLayout;