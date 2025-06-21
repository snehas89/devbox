import React, { useState } from 'react';
import './LoginForm.css';

type LoginFormProps = {
  onLogin: (name: string, email: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
  if (name && email && password) {
    onLogin(name, email);
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-title">
          <h1>Devbox Portal</h1>
        </div>
        <input
          type="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="login-input"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          placeholder="Enter Your Password"
        />
        <button className="login-button" onClick={handleSubmit}>
          Log In
        </button>
        {/* <p className="login-hint">Demo credentials: ny email/password combination</p> */}
      </div>
    </div>
  );
};

export default LoginForm;
