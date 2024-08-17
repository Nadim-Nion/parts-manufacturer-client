import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
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
            const userEmail = currentUser?.email || user?.email;
            const loggedInUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);

            // If user exists, then issue a token
            if (currentUser) {
                axiosPublic.post('/jwt', loggedInUser)
                    .then(res => {
                        console.log('Token response:', res.data);
                    })
            }
            else {
                // If user doesn't exist, then clear the cookie from the browser
                axiosPublic.post('/logout', loggedInUser)
                    .then(res => {
                        console.log('Token response:', res.data);
                    })
            }

        });

        return () => {
            return unsubscribe();
        };

    }, [axiosPublic, user?.email]);

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        googleSignIn,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;