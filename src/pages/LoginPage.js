import React, { useState } from 'react';
import './LoginPage.css'
import {API_URL} from "../App";
import { useNavigate } from "react-router-dom"

function Form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();

        if (username === "" || password === ""){
            setErrorMessage("Please fill in the fields")
            return;
        }

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        const apiResponse = await fetch(API_URL + "/login", {
            method: "POST",
            body: formData
        });

        const json = await apiResponse.json();
        setResponse(json);

        if (apiResponse.status === 200){
            if (json.hasOwnProperty("access_token")){
                localStorage.setItem("token", json.access_token);
                return navigate("/");
            }
        }
        else {
            setErrorMessage("Incorrect username or password");
        }

        // Perform some validation to check if the username and password are correct
        /*if (username === 'admin' && password === 'password') {
            // If the username and password are correct, redirect the user to the home page
            window.location.href = '/';
        } else {
            // If the username and password are incorrect, show an error message
            setErrorMessage('Incorrect username or password. Please try again.');
        }*/
    };

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div className="user-box">
                    <input
                        required="required"
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="user-box">
                    <input
                        required="required"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <a onClick={handleSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    );
}

const LoginPage = () =>{
    return Form();
}

export default LoginPage;

