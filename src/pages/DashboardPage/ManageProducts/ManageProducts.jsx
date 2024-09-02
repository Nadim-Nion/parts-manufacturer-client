import React from 'react';
import useParts from '../../../hooks/useParts';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageProducts = () => {
    const [parts, refetch] = useParts();
    const axiosSecure = useAxiosSecure();

    const handleDelete = part => {
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
                axiosSecure.delete(`/parts/${part._id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: `${part.name} has been deleted`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Manage All Products</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-lg font-bold text-black bg-purple-700'>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Available Quantity</th>
                                <th>Price Per Unit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg text-black'>
                            {/* row 1 */}
                            {
                                parts.map((part, index) => <tr key={part._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={part.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {part.name}
                                    </td>
                                    <td>{part.available_quantity}</td>
                                    <td>${part.price_per_unit}</td>
                                    <th>
                                        <button onClick={() => handleDelete(part)} className="btn btn-ghost btn-lg bg-red-700">
                                            <MdDeleteForever className='text-white text-2xl' />
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;