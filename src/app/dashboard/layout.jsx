import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>

            <div className='col-span-3 '>
                <h2 className='text-xl font-bold text-center mt-5'>Navigation</h2>

                <div className='flex flex-col gap-3 mt-8'>
                    <Link 
                    className='py-3 text-center rounded-lg bg-blue-400 cursor-pointer hover:text-white hover:bg-blue-600 font-semibold'
                    href={"/dashboard/add-story"}>Add Story</Link>

                    <Link
                    className='py-3 text-center rounded-lg bg-blue-400 cursor-pointer hover:text-white hover:bg-blue-600 font-semibold'
                    href={"/dashboard/my-profile"}>My Profile</Link>

                    <Link
                    className='py-3 text-center rounded-lg bg-blue-400 cursor-pointer hover:text-white hover:bg-blue-600 font-semibold'
                    href={"/dashboard/settings"}>Settings</Link>
                </div>
            </div>

            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;