import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn, user } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedUser = result.user;
                console.log(googleLoggedUser);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} logged-in successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
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