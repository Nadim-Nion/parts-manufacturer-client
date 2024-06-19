import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/compParts-headers/image1.jpg';
import image2 from '../../../assets/compParts-headers/image2.jpg';
import image3 from '../../../assets/compParts-headers/image3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel showArrows={true}>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;