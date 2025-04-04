// client/src/pages/Register.jsx
import { useState } from 'react';
import { showSuccess, showError } from '../utils/toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      showError('Please fill in all fields');
      return;
    }

    // Simulate success
    showSuccess('Registered successfully!');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;