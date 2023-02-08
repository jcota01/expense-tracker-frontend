import React, { useState } from 'react';
import './LoginPage.css'

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Perform some validation to check if the username and password are correct
    if (username === 'admin' && password === 'password') {
      // If the username and password are correct, redirect the user to the home page
      window.location.href = '/';
    } else {
      // If the username and password are incorrect, show an error message
      setErrorMessage('Incorrect username or password. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

