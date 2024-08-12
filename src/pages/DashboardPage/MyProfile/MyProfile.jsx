import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const MyProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { user } = useAuth();

    const onSubmit = (userInfo) => {
        console.log(userInfo);

        reset();
    };

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='bg-white p-10 rounded-lg shadow-lg sm:w-3/4 md:1/2'>
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>My Profile</h2>
                <form className='flex flex-col space-y-5' onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className='flex items-center space-x-3'>
                        <label className='w-1/4'>Name:</label>
                        <input className='flex-1 px-3 py-2' defaultValue={user?.displayName} {...register("name")} />
                    </div>

                    {/* Email Address */}
                    <div className='flex items-center space-x-3'>
                        <label className='w-1/4'>Email:</label>
                        <input className='flex-1 px-3 py-2' defaultValue={user?.email} {...register("email")} />
                    </div>

                    {/* Education */}
                    <div className='flex items-center space-x-3'>
                        <label className='w-1/4'>Education:</label>
                        <input className='flex-1 px-3 py-2' placeholder='Write your university name' {...register("education", { required: true })} />
                        {errors.education && <p className='text-red-700'>Education is required</p>}
                    </div>

                    {/* Location */}
                    <div className='flex items-center space-x-3'>
                        <label className='w-1/4'>Location:</label>
                        <input className='flex-1 px-3 py-2' placeholder='Your Location' {...register("location", { required: true })} />
                        {errors.location && <p className='text-red-700'>Location is required</p>}
                    </div>

                    {/* Phone Number */}
                    <div className='flex items-center space-x-3'>
                        <label className='w-1/4'>Phone Number:</label>
                        <input className='flex-1 px-3 py-2' placeholder='Your Phone Number' {...register("phone", { required: true })} />
                        {errors.phone && <p className='text-red-700'>Phone is required</p>}
                    </div>

                    {/* LinkedIn */}
                    <div className='flex items-center space-x-3'>
                        <label className='w-1/4'>LinkedIn Profile Link:</label>
                        <input className='flex-1 px-3 py-2' placeholder='Your LinkedIn Profile Link' {...register("linkedIn", { required: true })} />
                        {errors.linkedIn && <p className='text-red-700'>LinkedIn Link is required</p>}
                    </div>

                    <button type="submit" className="btn btn-primary my-7">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;