import React, { useState } from 'react';
import { account } from '../lib/appwrite';
import '../styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function login(email, password) {
    try {
      await account.createEmailSession(email, password);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={() => login(email, password)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
