import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Purchased Your Ordered Products</h2>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Your Product Name:</h2>
                        <p>Total Quantity:</p>
                        <p>Price per Unit: $</p>
                        <p>Total Price: $</p>
                    </div>
                </div>
            </div>

            <div className='mt-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;