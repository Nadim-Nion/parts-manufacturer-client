import React from 'react';
import error from '../../../assets/errorPage.jpg';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-5xl font-bold'>Oops!</h1>
                <p className='text-3xl mt-2'>Sorry, an unexpected error has occurred.</p>
            </div>
            <div className='flex justify-center items-center'>
                <img src={error} className='h-[500px]' alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;