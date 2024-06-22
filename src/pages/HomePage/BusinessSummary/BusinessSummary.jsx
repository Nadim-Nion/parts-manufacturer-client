import React from 'react';
import { FaComputer, FaDollarSign, FaPen, FaPeopleGroup } from 'react-icons/fa6';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Millions of Business Trusts Us</h2>
            <div className='flex justify-center'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaPeopleGroup className='text-3xl' />
                        </div>
                        <div className="stat-title text-2xl font-bold">Total Customers</div>
                        <div className="stat-value text-primary">25.6K</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className='text-3xl' />
                        </div>
                        <div className="stat-title text-2xl font-bold">Annual Revenue</div>
                        <div className="stat-value text-secondary">120M+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaPen className='text-3xl' />
                        </div>
                        <div className="stat-title text-2xl font-bold">Total Reviews</div>
                        <div className="stat-value text-primary">33K+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaComputer className='text-3xl' />
                        </div>
                        <div className="stat-title text-2xl font-bold">Total Parts</div>
                        <div className="stat-value text-secondary">50+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;