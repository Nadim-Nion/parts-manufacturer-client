import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { email, password, name } = data;

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);

                updateUserProfile(name)
                    .then(() => {
                        console.log('User information updated successfully');

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User has been created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                navigate('/');
            })
            .catch(error => {
                console.log(error);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`
                });
            })



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
                    <button type="submit" className="btn btn-primary">Register</button>
                    <p>
                        Already have an account? Please
                        <span className="link ml-3">
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;