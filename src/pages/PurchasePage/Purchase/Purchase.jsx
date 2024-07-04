import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedComponent/Cover/Cover';
import cart from '../../../assets/cover/cart2.jpg';
import Form from '../../../components/Form/Form';
import usePart from '../../../hooks/usePart';
import { useLocation, useNavigate } from 'react-router-dom';
// import { PartContext } from '../../../providers/PartProvider';

const Purchase = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const part = state?.part || null;
    const { setSelectedPart } = usePart();

    useEffect(() => {
        if (part) {
            setSelectedPart(part);
        }
        else {
            navigate('/purchase', { replace: true })
        }
    }, [setSelectedPart, part, navigate]);


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