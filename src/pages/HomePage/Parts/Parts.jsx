import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => {
                setParts(data);
            })
    }, []);

    return (
        <div className='my-4'>
            <h2 className='text-4xl text-center font-bold text-black my-5'>Explore Our Products</h2>
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