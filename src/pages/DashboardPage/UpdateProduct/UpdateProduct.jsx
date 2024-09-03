import React from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const part = useLoaderData();
    // console.log('Part Item:', part);
    const { _id, name, short_description, minimum_order_quantity, available_quantity, price_per_unit } = part;

    const onSubmit = async (data) => {
        console.log(data);

        // Upload image to imgbb to get an URL
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            withCredentials: false
        });
        console.log('Image URL:', res.data);

        if (res.data.success) {
            // Now send the partItem to the database with image URL
            const partItem = {
                name: data.name,
                short_description: data.short_description,
                minimum_order_quantity: parseInt(data.minimum_order_quantity),
                available_quantity: parseInt(data.available_quantity),
                price_per_unit: parseInt(data.price_per_unit),
                image: res.data.data.display_url
            };
            const itemRes = await axiosSecure.put(`/parts/${_id}`, partItem);
            console.log(itemRes.data);

            if (itemRes.data.modifiedCount > 0) {
                reset();

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
    };

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Update an Item</h2>
            <div className='h-screen flex justify-center items-center'>
                <div className='bg-white p-10 rounded-lg shadow-lg sm:w-3/4 md:w-1/2'>
                    <form className='flex flex-col space-y-5 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                        {/* Name */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2'>Name</label>
                            <input defaultValue={name} className='px-3 py-2 flex-1' placeholder='Name' {...register("name", { required: true })} />
                        </div>
                        {errors.name?.type === 'required' && <p className='text-red-700'>Name is required</p>}

                        {/* Short Description */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Short Description</label>
                            <input defaultValue={short_description} className='px-3 py-2 flex-1' placeholder='Description' {...register("short_description", { required: true })} />
                        </div>
                        {errors.short_description?.type === 'required' && <p className='text-red-700'>Description is required</p>}

                        {/* Minimum Order Quantity */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Minimum Order Quantity</label>
                            <input defaultValue={minimum_order_quantity} className='px-3 py-2 flex-1' placeholder='Min. Order Quantity' {...register("minimum_order_quantity", { required: true })} />
                        </div>
                        {errors.minimum_order_quantity?.type === 'required' && <p className='text-red-700'>Minimum Order Quantity is required</p>}

                        {/* Available Quantity */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Available Quantity</label>
                            <input defaultValue={available_quantity} className='px-3 py-2 flex-1' placeholder='Available Quantity' {...register("available_quantity", { required: true })} />
                        </div>
                        {errors.available_quantity?.type === 'required' && <p className='text-red-700'>Available Quantity is required</p>}

                        {/* Price Per Unit */}
                        <div className='flex items-center space-x-4'>
                            <label className='w-1/2 md:w-auto md:whitespace-nowrap'>Price Per Unit</label>
                            <input defaultValue={price_per_unit} className='px-3 py-2 flex-1' placeholder='Price Per Unit' {...register("price_per_unit", { required: true })} />
                        </div>
                        {errors.price_per_unit?.type === 'required' && <p className='text-red-700'>Price per Unit is required</p>}

                        {/* Image */}
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full sm:max-w-[350px] md:max-w-[400px] min-w-[200px]" {...register("image", { required: true })}
                        />

                        <button type="submit" className="btn btn-primary">Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;