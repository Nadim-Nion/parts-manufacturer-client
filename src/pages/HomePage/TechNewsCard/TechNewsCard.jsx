import React from 'react';
import { Link } from 'react-router-dom';
import laptop from '../../../assets/parts/laptop.jpg';


const TechNewsCard = ({ item }) => {
    const { name, details, link } = item;

    return (
        <div className='flex justify-center items-center'>
            <div className="card glass w-96">
                <figure>
                    <img
                        src={laptop}
                        alt="laptop!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to={link}>
                            <button className="btn btn-outline btn-primary border-0 border-b-4">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechNewsCard;