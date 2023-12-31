import React, { useState } from 'react';

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const result = await res.json();
      setToken(result.token);
      alert('Thank you for signing up!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='signup-form'>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <br />
        <input
          required
          type='text'
          value={username}
          minLength={8}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor='password'>Password:</label> <br />
        <input
          required
          type='password'
          value={password}
          minLength={8}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className='signup-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
