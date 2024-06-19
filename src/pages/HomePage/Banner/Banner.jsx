import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/compParts-headers/image1.jpg';
import image2 from '../../../assets/compParts-headers/image2.jpg';
import image3 from '../../../assets/compParts-headers/image3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel showArrows={true} className='relative'>
                <div className='relative'>
                    <img src={image1} />
                    <div className='absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 p-4 pl-12 text-left text-white space-y-7'>
                        <h2 className='md:text-6xl text-2xl font-bold md:w-1/2 w-full'>Discover the Latest in Computer Hardware</h2>
                        <p>Explore our wide selection of cutting-edge computer components, designed to enhance your systems performance.</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
                <div>
                    <img src={image2} />
                    <div className='absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 p-4 pl-12 text-left text-white space-y-7'>
                        <h2 className='md:text-6xl text-2xl font-bold md:w-1/2 w-full'>Unmatched Quality and Performance</h2>
                        <p>At CompParts Hub, we pride ourselves on offering only the highest quality parts.</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
                <div>
                    <img src={image3} />
                    <div className='absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 p-4 pl-12 text-left text-white space-y-7'>
                        <h2 className='md:text-6xl text-2xl font-bold md:w-1/2 w-full'>Your Trusted Source for Computer Parts</h2>
                        <p>With years of experience in the industry, CompParts Hub is your reliable partner for all your computer hardware needs.</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;