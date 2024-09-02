import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useParts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: parts = [], refetch } = useQuery({
        queryKey: ['parts'],
        queryFn: async () => {
            const res = await axiosPublic('/parts');
            return res.data;
        }
    });

    return [parts, refetch];
};

export default useParts;