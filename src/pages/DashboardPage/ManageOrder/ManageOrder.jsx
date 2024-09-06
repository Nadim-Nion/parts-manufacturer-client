import React from 'react';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';

const ManageOrder = () => {
    const axiosSecure = useAxiosSecure();

    const { data: orders = [] } = useQuery({
        queryKey: ['ordersWithPayments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/purchasedParts/payments');
            return res.data;
        }
    });

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Total Orders: {orders.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-lg font-bold text-black bg-purple-700'>
                                <th>
                                    #
                                </th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Part Name</th>
                                <th>Transaction ID</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg text-black'>
                            {/* row 1 */}
                            {
                                orders.map((order, index) => <tr key={order._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {order.userName}
                                    </td>
                                    <td>
                                        {order.userEmail}
                                    </td>
                                    <td>{order.partsName}</td>
                                    <td>
                                        {
                                            order.transactionId ?
                                                order.transactionId
                                                :
                                                'Null'
                                        }
                                    </td>
                                    <td>
                                        {
                                            order.status === 'pending' ?
                                                <button className="btn btn-outline btn-primary btn-lg">
                                                    {order.status}
                                                </button>
                                                :
                                                <div className="badge badge-primary ml-5 py-5">Unpaid</div>
                                        }
                                    </td>
                                    <td>
                                        <button disabled={order.transactionId} className="btn btn-ghost btn-lg bg-red-700">
                                            <MdDeleteForever className='text-white text-2xl' />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;