import { useState } from 'react';
import SkillsSelector from '../components/SkillsSelector';
import { toast } from 'react-hot-toast'; // Make sure to install react-hot-toast

const Dashboard = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [jobFilter, setJobFilter] = useState('');

  const handleSave = () => {
    toast.success('Skills saved successfully!');
  };

  const jobs = [
    { title: 'React Developer', company: 'ABC Corp', skills: ['React', 'JS'], location: 'Remote' },
    { title: 'Java Backend', company: 'XYZ Inc', skills: ['Java', 'Spring'], location: 'Delhi' },
    { title: 'Fullstack Engineer', company: 'TechWave', skills: ['Node', 'Mongo'], location: 'Bangalore' },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(jobFilter.toLowerCase()) ||
    job.location.toLowerCase().includes(jobFilter.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Dashboard</h1>

      {/* User Summary */}
      <div className="bg-white p-4 rounded shadow mb-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Rahul Pratap Singh</h2>
            <p className="text-sm text-gray-500">rahul@example.com</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-gray-600">📍 Location: India</p>
          <p className="text-sm text-gray-600">📅 Joined: Jan 2024</p>
        </div>
      </div>

      {/* Skill Preferences */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Update Your Skills</h2>
        <SkillsSelector selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSave}
        >
          Save Preferences
        </button>
      </div>

      {/* Job Filter */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search jobs by title or location"
          value={jobFilter}
          onChange={(e) => setJobFilter(e.target.value)}
          className="w-full p-2 rounded border"
        />
      </div>

      {/* Job Listings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Jobs for You</h2>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">Company: {job.company}</p>
              <p className="text-sm text-gray-500">Skills: {job.skills.join(', ')}</p>
              <p className="text-sm text-gray-500">Location: {job.location}</p>
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
