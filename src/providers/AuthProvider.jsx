import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const updateUserProfile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current user inside the Auth State Observer', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        };

    }, []);

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;