import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import BuildGuideCard from '../BuildGuideCard/BuildGuideCard';

const BuildGuide = () => {
    const axiosPublic = useAxiosPublic();

    const { data: buildGuides = [] } = useQuery({
        queryKey: ['buildGuides'],
        queryFn: async () => {
            const res = await axiosPublic('/buildGuides');
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Featured Build Guides</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    buildGuides.map(item => <BuildGuideCard
                        key={item._id}
                        item={item}
                    ></BuildGuideCard>)
                }
            </div>

        </div>
    );
};

export default BuildGuide;