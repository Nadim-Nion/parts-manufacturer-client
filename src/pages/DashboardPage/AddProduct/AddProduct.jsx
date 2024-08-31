import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Add a Product</h2>
            <div className='h-screen flex justify-center items-center'>
                <div className='bg-white p-10 rounded-lg shadow-lg sm:w-3/4 md:w-1/2'>
                    <form className='flex flex-col space-y-5 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2'>Name</label>
                            <input className='px-3 py-2 flex-1' placeholder='Name' {...register("name", { required: true })} />
                        </div>
                        {errors.name?.type === 'required' && <p className='text-red-700'>Name is required</p>}

                        {/* Short Description */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Short Description</label>
                            <input className='px-3 py-2 flex-1' placeholder='Description' {...register("short_description", { required: true })} />
                        </div>
                        {errors.short_description?.type === 'required' && <p className='text-red-700'>Description is required</p>}

                        {/* Minimum Order Quantity */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Minimum Order Quantity</label>
                            <input className='px-3 py-2 flex-1' placeholder='Min. Order Quantity' {...register("minimum_order_quantity", { required: true })} />
                        </div>
                        {errors.minimum_order_quantity?.type === 'required' && <p className='text-red-700'>Minimum Order Quantity is required</p>}

                        {/* Available Quantity */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Available Quantity</label>
                            <input className='px-3 py-2 flex-1' placeholder='Available Quantity' {...register("available_quantity", { required: true })} />
                        </div>
                        {errors.available_quantity?.type === 'required' && <p className='text-red-700'>Available Quantity is required</p>}

                        {/* Price Per Unit */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Price Per Unit</label>
                            <input className='px-3 py-2 flex-1' placeholder='Price Per Unit' {...register("price_per_unit", { required: true })} />
                        </div>
                        {errors.price_per_unit?.type === 'required' && <p className='text-red-700'>Price per Unit is required</p>}

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;