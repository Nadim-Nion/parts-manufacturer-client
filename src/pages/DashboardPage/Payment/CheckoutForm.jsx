import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckoutForm = ({ selectedItem }) => {
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    // console.log(selectedItem);
    const { totalPrice } = selectedItem;
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        else {
            console.log(paymentMethod);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment has been completed successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary my-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form >
    );
};

export default CheckoutForm;