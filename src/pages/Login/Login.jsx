import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User has been logged-in successfully",
                    showConfirmButton: false,
                    timer: 1500
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
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Please Login</h2>
                <form className='flex flex-col space-y-5 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <label>Email</label>
                    <input className='px-3 py-2' {...register("email", { required: true })} />
                    {errors.email?.type === 'required' && <p className='text-red-700'>Email is required</p>}
                    <label>Password</label>
                    <input className='px-3 py-2' type='password' {...register("password", { required: true })} />
                    {errors.password?.type === 'required' && <p className='text-red-700'>Password is required</p>}
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p>
                        Do not have any account? Please
                        <span className="link ml-3">
                            <Link to="/register">Register</Link>
                        </span>
                    </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;