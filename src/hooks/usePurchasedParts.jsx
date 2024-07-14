import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePurchasedParts = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: purchasedParts = [], isLoading } = useQuery({
        queryKey: ['purchasedParts', user?.userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get('/purchasedParts');
            return res.data;
        }
    });

    return [purchasedParts, isLoading];
};

export default usePurchasedParts;