import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { GrUserAdmin } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDelete = user => {

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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name} has been deleted`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    const handleMakeAdmin = user => {

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-bold text-black bg-purple-700'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-lg text-black'>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            <div className="badge badge-primary text-lg p-3">Admin</div>
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg bg-purple-700">
                                                <GrUserAdmin className='text-white' />
                                            </button>

                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg bg-red-700">
                                        <MdDeleteForever className='text-white text-2xl' />
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

export default MakeAdmin;