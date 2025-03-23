import { useState } from 'react';
import SkillsSelector from '../components/SkillsSector';

const Register = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      skills: selectedSkills,
    };

    console.log('Submitting:', finalData);

    // 🔄 Replace with your backend API call:
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      const data = await res.json();
      console.log('Server Response:', data);
    } catch (err) {
      console.error('Registration Error:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto pt-20 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          required
        />

        <SkillsSelector
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
