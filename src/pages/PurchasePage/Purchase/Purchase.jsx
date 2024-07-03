import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedComponent/Cover/Cover';
import cart from '../../../assets/cover/cart2.jpg';
import Form from '../../../components/Form/Form';

const Purchase = () => {
    return (
        <div>
            <Helmet>
                <title>Purchase - CompParts Hub</title>
            </Helmet>
            <Cover img={cart} title="Purchase Parts" description="Discover our top-quality components designed for peak performance and reliability. Build your ultimate PC with our cutting-edge parts today!"></Cover>
            <Form></Form>
        </div>
    );
};

export default Purchase;