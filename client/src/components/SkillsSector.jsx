import { useState } from 'react';

const allSkills = [
  'React',
  'Node.js',
  'Java',
  'Python',
  'C++',
  'MongoDB',
  'Express.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'MySQL',
  'AWS',
  'DevOps',
  'Flutter',
  'Kotlin',
  'Django',
  'PostgreSQL',
  'Spring Boot',
];

const SkillsSelector = ({ selectedSkills, setSelectedSkills }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const filteredSkills = allSkills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Select Your Skills</h2>
      <input
        type="text"
        placeholder="Search skills..."
        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 max-h-60 overflow-y-auto">
        {filteredSkills.map((skill) => (
          <button
            type="button"
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              selectedSkills.includes(skill)
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillsSelector;
