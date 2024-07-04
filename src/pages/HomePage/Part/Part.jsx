import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePart from '../../../hooks/usePart';


const Part = ({ part }) => {
    const { setSelectedPart } = usePart();
    const { name, image, short_description, minimum_order_quantity, available_quantity, price_per_unit } = part;
    const navigate = useNavigate();

    const handlePurchaseClick = () => {
        setSelectedPart(part);
        navigate('/purchase', { state: { part } })
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='font-semibold'>{short_description}</p>
                    <p className='font-semibold'>Minimum Order Quantity: {minimum_order_quantity}</p>
                    <p className='font-semibold'>Available Quantity: {available_quantity}</p>
                    <p className='font-semibold'>Price Per Unit: ${price_per_unit}</p>
                    <div className="card-actions justify-end">
                        {/* <Link to="/purchase">
                            <button onClick={handlePurchaseClick} className="btn btn-outline btn-primary border-0 border-b-4">Purchase</button>
                        </Link> */}
                        <button onClick={handlePurchaseClick} className="btn btn-outline btn-primary border-0 border-b-4">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;