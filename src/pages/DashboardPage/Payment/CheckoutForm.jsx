import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import moment from 'moment';

const CheckoutForm = ({ selectedItem }) => {
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
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

        // Create a Payment Method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('PaymentMethod Error', error);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        else {
            console.log('Payment Method', paymentMethod);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment has been completed successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }

        // Confirm Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('Confirm Error', confirmError);

            /*  Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: `${confirmError.message}`,
                 footer: '<a href="#">Why do I have this issue?</a>'
             }); */
        }
        else {
            console.log('Payment Intent', paymentIntent);

            if (paymentIntent.status === "succeeded") {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your Transaction ID: ${paymentIntent.id}`,
                    showConfirmButton: false,
                    timer: 1500
                });

                // Save the Payment Info to the database
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    // date: new Date(),
                    date: moment().format("dddd, MMMM D, YYYY, h:mm:ss a"),
                    productName: selectedItem.partsName,
                    productId: selectedItem._id,
                    status: 'pending'
                };

                const res = await axiosSecure.post('/payments', payment);
                console.log(res.data);
            }
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