// client/src/pages/Register.jsx
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', skills: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create an Account</h2>
        <form className="space-y-4">
          <input name="name" type="text" placeholder="Name" onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="whatsapp" type="text" placeholder="WhatsApp Number" onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="skills" type="text" placeholder="Skills (e.g. React, Java)" onChange={handleChange} className="w-full border p-2 rounded" />
          <button type="submit" className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
