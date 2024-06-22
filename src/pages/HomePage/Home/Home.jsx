import React from 'react';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import BusinessSummary from '../BusinessSummary/BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;