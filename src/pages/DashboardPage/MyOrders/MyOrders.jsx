import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import usePurchasedPartsDetails from '../../../hooks/usePurchasedPartsDetails';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const [purchasedPartsDetails, isLoading, refetch] = usePurchasedPartsDetails();
    const [payments, setPayments] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Fetch the Payment API to get the Transaction ID
    useEffect(() => {
        axiosSecure.get(`/payments?email=${user?.email}`)
            .then(res => {
                console.log(res.data);
                setPayments(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosSecure, user?.email]);

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    const handleDelete = (item) => {
        // console.log(item);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/purchasedParts/${item._id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.partsName} has been deleted.`,
                                icon: "success"
                            });
                        }

                        // Clear the deleted item from the UI
                        refetch();

                    })
                    .catch(error => {
                        console.log(error);

                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    })


            }
        });
    }

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Welcome To Your Dashboard</h2>
            <p className='text-3xl font-semibold text-center text-purple-700 mb-3'>Total Orders: {purchasedPartsDetails.length}</p>
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
                            purchasedPartsDetails.map((item, index) => {
                                const payment = payments.find(payment => payment.productId === item._id);
                                return (
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.partsName}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.userAddress}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            {
                                                payment ? <p>{payment?.transactionId}</p>
                                                    :
                                                    <Link to={`/dashboard/payment/${item._id}`} state={{ selectedItem: item }}>
                                                        <button className="btn btn-outline btn-primary">Pay</button>
                                                    </Link>
                                            }
                                        </td>
                                        <td>
                                            <button disabled={payment?.transactionId} onClick={() => handleDelete(item)} className="btn btn-square btn-outline">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;