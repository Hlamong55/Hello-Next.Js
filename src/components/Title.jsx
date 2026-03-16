import React from 'react';

const Title = ({ children }) => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>{children}</h2>
        </div>
    );
};
 
export default Title;