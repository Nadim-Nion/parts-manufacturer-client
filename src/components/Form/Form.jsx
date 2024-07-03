import React from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';


const Form = () => {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    };


    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-7 rounded-lg shadow-lg sm:w-3/4 md:w-1/2">
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Parts Information</h2>
                <form className='flex flex-col space-y-5 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    {/* Parts Name */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Part:</label>
                        <input className='px-3 py-2 flex-1' {...register("partsName", { required: true })} />
                    </div>
                    {errors.partsName?.type === 'required' && <p className='text-red-700'>Parts Name is required</p>}

                    {/* User Name */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Name:</label>
                        <input defaultValue={user?.displayName} className='px-3 py-2 flex-1' {...register("userName", { required: true })} />
                    </div>
                    {errors.userName?.type === 'required' && <p className='text-red-700'>User Name is required</p>}

                    {/* User Email */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Email:</label>
                        <input defaultValue={user?.email} className='px-3 py-2 flex-1' {...register("userEmail", { required: true })} />
                    </div>
                    {errors.userEmail?.type === 'required' && <p className='text-red-700'>User Email is required</p>}

                    {/* User Address */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Address:</label>
                        <input className='px-3 py-2 flex-1' {...register("userAddress", { required: true })} />
                    </div>
                    {errors.userAddress?.type === 'required' && <p className='text-red-700'>User Address is required</p>}

                    {/* Phone Number */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Phone:</label>
                        <input className='px-3 py-2 flex-1' {...register("phone", { required: true })} />
                    </div>
                    {errors.phone?.type === 'required' && <p className='text-red-700'>Phone Number is required</p>}

                    {/* Quantity */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Quantity:</label>
                        <input className='px-3 py-2 flex-1' {...register("quantity", { required: true })} />
                    </div>
                    {errors.quantity?.type === 'required' && <p className='text-red-700'>Quantity is required</p>}

                    <button type="submit" className="btn btn-primary">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default Form;