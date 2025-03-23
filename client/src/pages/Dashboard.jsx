import { useState } from 'react';
import SkillsSelector from '../components/SkillsSector';

const Dashboard = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSavePreferences = () => {
    console.log('Selected Skills:', selectedSkills);

    // TODO: Send to backend using fetch/axios
    // Example:
    // await fetch('/api/user/skills', { method: 'PUT', body: JSON.stringify({ skills: selectedSkills }) })
    alert('Skills saved successfully!');
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h1>

      {/* Skill Preferences */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Update Your Skills</h2>

        <SkillsSelector
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />

        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSavePreferences}
        >
          Save Preferences
        </button>
      </div>

      {/* Job Listings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Jobs for You</h2>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {["React Developer", "Java Backend", "Fullstack Engineer"].map((job, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold">{job}</h3>
              <p className="text-sm text-gray-600">Company: ABC Corp</p>
              <p className="text-sm text-gray-500">Skills: React, Node, MongoDB</p>
              <button className="mt-2 text-blue-600 hover:underline text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
