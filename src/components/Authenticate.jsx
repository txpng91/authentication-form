import React, { useState } from 'react';

function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);

  const verify = async () => {
    try {
      const res = await fetch(
        `https://fsa-jwt-practice.herokuapp.com/authenticate`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await res.json();
      console.log(result);
      setSuccessMessage(result.message);
      setUsername(result.data.username);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='authentication-section'>
      <h2>Authentication</h2>
      {successMessage && (
        <p>
          {successMessage} Welcome back, {username}!
        </p>
      )}
      {error && <p>{error}</p>}
      <button className='verify-btn' onClick={verify}>
        Verify
      </button>
    </div>
  );
}

export default Authenticate;
