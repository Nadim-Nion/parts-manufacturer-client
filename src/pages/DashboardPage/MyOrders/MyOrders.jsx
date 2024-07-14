import React from 'react';
import usePurchasedParts from '../../../hooks/usePurchasedParts';
import { MdDelete } from 'react-icons/md';

const MyOrders = () => {
    const [purchasedParts, isLoading] = usePurchasedParts();
    // console.log(purchasedParts);

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Welcome To Your Dashboard</h2>
            <p className='text-3xl font-semibold text-center text-purple-700 mb-3'>Total Orders: </p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-bold text-black'>
                            <th>#</th>
                            <th>Parts Name</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Pay</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        {/* row 1 */}
                        {
                            purchasedParts.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.partsName}</td>
                                <td>{item.userName}</td>
                                <td>{item.userAddress}</td>
                                <td>{item.phone}</td>
                                <td>{item.quantity}</td>
                                <td>Pay</td>
                                <td><MdDelete /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;