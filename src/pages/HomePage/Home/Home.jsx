import React from 'react';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import TechNews from '../TechNews/TechNews';
import BuildGuide from '../BuildGuide/BuildGuide';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - CompParts Hub</title>
            </Helmet>
            <Banner></Banner>
            <BuildGuide></BuildGuide>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <TechNews></TechNews>
        </div>
    );
};

export default Home;