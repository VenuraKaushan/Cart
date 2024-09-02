import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://skill-test.similater.website/api/v1/user/login', {
        email,
        password,
      });

      // Store the access token in local storage
      const { accessToken } = response.data.data; // Access the token from response
      localStorage.setItem('accessToken', accessToken);

      navigate('/properties');

      console.log('Login successful:', response.data);
    } catch (error) {
      setError('Invalid username or password');
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
