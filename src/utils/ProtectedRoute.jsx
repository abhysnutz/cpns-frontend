import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute ({ element }) {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/auth/login" />;

  // You can add additional checks here, like verifying the token's validity

  return element;
};