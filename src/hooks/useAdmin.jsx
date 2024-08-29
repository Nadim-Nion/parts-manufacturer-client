import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('Checking a user is admin or not', user);
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    });

    return [isAdmin];
};

export default useAdmin;