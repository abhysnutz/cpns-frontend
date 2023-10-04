import axios from 'axios';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

export default function ProtectedRoute ({ element }) {
    const token = localStorage.getItem('token');
    const location = useLocation()

    if (!token) return <Navigate to="/signin" />;

    const decoded = jwt_decode(token);
    const verify = decoded.verify

    if(verify) {
        if(location.pathname == '/app/verify-email' || location.pathname == '/signin' || location.pathname == '/signup') return <Navigate to="/app" />;
        return element;
    }else{
        if(location.pathname != '/app/verify-email') return <Navigate to="/app/verify-email" />;
        return element;
    }
};