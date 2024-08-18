import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(res => {
        return res;
    }, error => {
        console.log('Error tacked in the interceptor:', error.response);
        const status = error.response.status;
        if (status === 401 || status === 403) {
            console.log('Logging out the user');

            logOut()
                .then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.displayName} logged out successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate('/login', { replace: true });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    });

    return axiosSecure;
};

export default useAxiosSecure;