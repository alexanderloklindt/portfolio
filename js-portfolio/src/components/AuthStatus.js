import React from "react";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

function AuthStatus () {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    if (!user) {
        return <p>Some routes are not available for you.</p>;
    }

    return (
        <div>
            <p>You are approved to see everything on the website</p>
            <p>User Email: {user && user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
  );
}

export default AuthStatus;