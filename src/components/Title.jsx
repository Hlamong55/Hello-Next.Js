import React from 'react';

const Title = ({ children }) => {
    return (
        <div className='bg-linear-60 from-sky-100 to-sky-400 p-4 rounded'>
            <h2 className='text-5xl font-bold'>{children}</h2>
        </div>
    );
};
 
export default Title;