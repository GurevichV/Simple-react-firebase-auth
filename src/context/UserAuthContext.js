import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from "../config";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState('');
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut() {
        return signOut(auth)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return <UserAuthContext.Provider value={{ user, signUp, signIn, logOut, googleSignIn }}>{children}</UserAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(UserAuthContext)
}