import React from 'react';
import Part from '../Part/Part';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Parts = () => {
    /* const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => {
                setParts(data);
            })
    }, []); */

    const axiosPublic = useAxiosPublic();

    const { data: parts = [] } = useQuery({
        queryKey: ['parts'],
        queryFn: async () => {
            const res = await axiosPublic('/parts');
            return res.data;
        }
    })

    return (
        <div className='my-4'>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Explore Our Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;