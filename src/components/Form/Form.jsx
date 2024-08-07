import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import usePart from '../../hooks/usePart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const Form = () => {
    const { user } = useAuth();
    const { selectedPart } = usePart();
    // console.log(selectedPart);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset
    } = useForm();

    useEffect(() => {
        if (selectedPart) {
            reset({
                partsName: selectedPart?.name || '',
                userName: user?.displayName || '',
                userEmail: user?.email || '',
                userAddress: '',
                phone: '',
                quantity: selectedPart?.minimum_order_quantity || ''
            });
            setLoading(false);
        }
    }, [selectedPart, reset, user]);

    // Watch quantity changes
    const quantity = watch("quantity");

    const onSubmit = (data) => {
        console.log(data);

        const partItem = {
            ...data,
            partId: selectedPart?._id
        }

        axiosSecure.post('/purchasedParts', partItem)
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.partsName} has been placed`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleIncrement = () => {
        const newQuantity = parseInt(quantity) + 1;
        if (newQuantity <= selectedPart.available_quantity) {
            setValue('quantity', newQuantity);
            setError('');
        }
        else {
            setError(`Quantity can not be more than ${selectedPart.available_quantity}`);
        }
    };


    const handleDecrement = () => {
        const newQuantity = parseInt(quantity) - 1;
        if (newQuantity >= selectedPart.minimum_order_quantity) {
            setValue('quantity', newQuantity);
            setError('');
        }
        else {
            setError(`Quantity can not be less than ${selectedPart.minimum_order_quantity}`);
        }
    };


    const handleQuantityChange = event => {
        const value = event.target.value;

        if (value >= selectedPart.minimum_order_quantity && value <= selectedPart.available_quantity) {
            setValue('quantity', value);
            setError('');
        }
        else {
            if (value < selectedPart.minimum_order_quantity) {
                setError(`Quantity can not be less than ${selectedPart.minimum_order_quantity}`);
            }
            else {
                setError(`Quantity can not be more than ${selectedPart.available_quantity}`);
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-7 rounded-lg shadow-lg sm:w-3/4 md:w-1/2">
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Parts Information</h2>
                <form className='flex flex-col space-y-5 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                    {/* Parts Name */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Part:</label>
                        <input defaultValue={selectedPart?.name} className='px-3 py-2 flex-1' {...register("partsName", { required: true })} />
                    </div>
                    {errors.partsName?.type === 'required' && <p className='text-red-700'>Parts Name is required</p>}

                    {/* User Name */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Name:</label>
                        <input defaultValue={user?.displayName} className='px-3 py-2 flex-1' {...register("userName", { required: true })} />
                    </div>
                    {errors.userName?.type === 'required' && <p className='text-red-700'>User Name is required</p>}

                    {/* User Email */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Email:</label>
                        <input defaultValue={user?.email} className='px-3 py-2 flex-1' {...register("userEmail", { required: true })} />
                    </div>
                    {errors.userEmail?.type === 'required' && <p className='text-red-700'>User Email is required</p>}

                    {/* User Address */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Address:</label>
                        <input className='px-3 py-2 flex-1' {...register("userAddress", { required: true })} />
                    </div>
                    {errors.userAddress?.type === 'required' && <p className='text-red-700'>User Address is required</p>}

                    {/* Phone Number */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Phone:</label>
                        <input className='px-3 py-2 flex-1' {...register("phone", { required: true })} />
                    </div>
                    {errors.phone?.type === 'required' && <p className='text-red-700'>Phone Number is required</p>}

                    {/* Quantity */}
                    <div className='flex items-center space-x-4'>
                        <label className='w-1/3'>Quantity:</label>
                        <input value={quantity} onChange={handleQuantityChange} className='px-3 py-2 flex-1' {...register("quantity", { required: true })} />
                        <div>
                            <div className="flex w-full justify-center">
                                <kbd onClick={handleIncrement} className="kbd">▲</kbd>
                            </div>
                            <div className="flex w-full justify-center">
                                <kbd onClick={handleDecrement} className="kbd">▼</kbd>
                            </div>
                        </div>
                    </div>
                    {errors.quantity?.type === 'required' && <p className='text-red-700'>Quantity is required</p>}
                    {error && <p className='text-red-700'>{error}</p>}

                    <button disabled={!!error} type="submit" className="btn btn-primary">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default Form;