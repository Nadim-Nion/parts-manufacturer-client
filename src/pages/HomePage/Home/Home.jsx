import React from 'react';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import TechNews from '../TechNews/TechNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TechNews></TechNews>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;