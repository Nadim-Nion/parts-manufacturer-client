import React from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg sm:w-3/4 md:w-1/2">
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Register Now</h2>
                <form className='flex flex-col space-y-5 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input className='px-3 py-2' {...register("name", { required: true })} />
                    {errors.name?.type === 'required' && <p className='text-red-700'>Name is required</p>}
                    <label>Email</label>
                    <input className='px-3 py-2' {...register("email", { required: true })} />
                    {errors.email?.type === 'required' && <p className='text-red-700'>Email is required</p>}
                    <label>Password</label>
                    <input className='px-3 py-2' type='password' {...register("password", { required: true })} />
                    {errors.password?.type === 'required' && <p className='text-red-700'>Password is required</p>}
                    <p>
                        Already have an account? Please
                        <span className="link ml-3">
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Login;