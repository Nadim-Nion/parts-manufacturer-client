import React, { useContext } from 'react';
import { PartContext } from '../providers/PartProvider';

const usePart = () => {
    const part = useContext(PartContext);
    return part;
};

export default usePart;