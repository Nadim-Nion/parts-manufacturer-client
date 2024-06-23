import React from 'react';

const BuildGuideCard = ({ item }) => {
    const { image, title, processor, videoCard, price, description, case: caseItem } = item;

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p><b>Processor:</b> {processor}</p>
                    <p><b>Video Card:</b> {videoCard}</p>
                    <p><b>Case:</b> {caseItem}</p>
                    <div className="card-actions">
                        <p><b>Price:</b> ${price}</p>
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildGuideCard;