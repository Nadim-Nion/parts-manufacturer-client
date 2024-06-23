import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import TechNewsCard from '../TechNewsCard/TechNewsCard';

const TechNews = () => {
    const axiosPublic = useAxiosPublic();

    const { data: techNews = [] } = useQuery({
        queryKey: ['techNews'],
        queryFn: async () => {
            const res = await axiosPublic('/techNews');
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Top Trends in the Tech Industry</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    techNews.map(item => <TechNewsCard
                        key={item._id}
                        item={item}
                    ></TechNewsCard>)
                }
            </div>
        </div>
    );
};

export default TechNews;