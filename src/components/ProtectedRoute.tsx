import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import React from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    let { user } = useUserAuth();

    if (!user) {
        return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoute;