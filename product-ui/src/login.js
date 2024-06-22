import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./userContext";  
import { useNavigate } from "react-router-dom";  
const LogIn = () =>{
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const onLogin = () => {
        setUser({name: 'John Doe', email: ''});
        localStorage.setItem('user', JSON.stringify({name: 'John Doe', email: ''}));
        navigate('/');
    }

    return(
        <div>
            <h1>Login</h1>
            <button 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }} 
                onClick={onLogin}
            >
                Log In
            </button>
        </div>
    )
}

export default LogIn;