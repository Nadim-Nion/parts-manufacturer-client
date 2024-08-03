import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePurchasedPartsDetails = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: purchasedPartsDetails = [], isLoading, refetch } = useQuery({
        queryKey: ['purchasedPartsDetails', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/purchasedParts/details?email=${user?.email}`);
            return res.data;
        }
    });

    return [purchasedPartsDetails, isLoading, refetch];
};

export default usePurchasedPartsDetails;