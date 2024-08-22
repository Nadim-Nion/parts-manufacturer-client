import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn, user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedUser = result.user;
                console.log(googleLoggedUser);

                const userInfo = {
                    name: googleLoggedUser?.displayName,
                    email: googleLoggedUser?.email
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user?.displayName} logged-in successfully`,
                                showConfirmButton: false,
                                timer: 1500
                            });

                            navigate('/');
                        }
                    })
            })
            .catch(error => {
                console.log(error);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`
                });
            })
    }

    return (
        <div>
            <div className="divider divider-primary">Or</div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-primary text-white">
                    <FaGoogle />
                    Google Login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;