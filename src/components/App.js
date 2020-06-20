import React, { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div className="app">
      <div className="header">
        <div>Welcome</div>
      </div>
      <div className="body">
        <div className="login-text">Login</div>
        <form className="center" onSubmit={handleSubmit}>
          <input 
            className="input-box"
            type="email"
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            className="input-box" 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
          <input className="login-button" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default App;
