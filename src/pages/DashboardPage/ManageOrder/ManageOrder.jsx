import React from 'react';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const ManageOrder = () => {
    const axiosSecure = useAxiosSecure();

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['ordersWithPayments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/purchasedParts/payments');
            return res.data;
        }
    });

    const handleStatusChanged = id => {
        console.log(id);

        axiosSecure.patch(`/purchasedParts/status/${id}`)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Order has been shipped",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

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
                                                <button
                                                    onClick={() => handleStatusChanged(order._id)}
                                                    className="btn btn-outline btn-primary btn-lg">
                                                    {order.status}
                                                </button>
                                                :
                                                order.status === 'shipped'
                                                    ?
                                                    <div className="badge badge-success ml-5 py-5">Shipped</div>
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