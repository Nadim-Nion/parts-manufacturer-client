import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddReview = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const onSubmit = (review) => {
        // console.log(review);

        axiosSecure.post('/reviews', review)
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })

        reset();

    };

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='bg-white p-10 rounded-lg shadow-lg sm:w-3/4 md:1/2'>
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Add a Review</h2>
                <form className='flex flex-col space-y-5' onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <label>Name:</label>
                    <input className='px-3 py-2' defaultValue={user?.displayName} {...register("name")} />

                    {/* Details */}
                    <label>Details:</label>
                    <input className='px-3 py-2' placeholder='Write your review' {...register("details", { required: true })} />
                    {errors.details && <p className='text-red-700'>Details are required</p>}

                    {/* Rating */}
                    <label>Rating:</label>
                    <input className='px-3 py-2' placeholder='Add a rating between 1 to 5' {...register("rating", { required: true })} />
                    {errors.rating && <p className='text-red-700'>Rating is required</p>}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;