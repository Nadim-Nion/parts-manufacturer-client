import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log("Location in Private Route", location);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;
};

export default PrivateRoute;