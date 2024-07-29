import React from 'react';
import usePurchasedParts from '../../../hooks/usePurchasedParts';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [purchasedParts, isLoading, refetch] = usePurchasedParts();
    // console.log(purchasedParts);
    const axiosSecure = useAxiosSecure();

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
            <p className='text-3xl font-semibold text-center text-purple-700 mb-3'>Total Orders: {purchasedParts.length}</p>
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
                                <td>
                                    <Link to="/dashboard/payment">
                                        <button className="btn btn-outline btn-primary">Pay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-square btn-outline">
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;