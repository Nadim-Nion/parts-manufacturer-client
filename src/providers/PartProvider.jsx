import React, { createContext, useState } from 'react';

export const PartContext = createContext(null);

const PartProvider = ({ children }) => {
    const [selectedPart, setSelectedPart] = useState({});

    const partInfo = {
        selectedPart,
        setSelectedPart
    };

    return (
        < PartContext.Provider value={partInfo} >
            {children}
        </PartContext.Provider >
    );
};

export default PartProvider;