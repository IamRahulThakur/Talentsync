import { useEffect, useRef, useState } from 'react';

const allSkills = [
  'React', 'Node.js', 'Java', 'Python', 'MongoDB', 'SQL',
  'Express.js', 'C++', 'C#', 'Angular', 'Vue', 'Tailwind CSS',
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Spring Boot', 'Django',
];

const SkillsSelector = ({ selectedSkills, setSelectedSkills }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null); // to detect clicks outside

  const handleSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const filteredSkills = allSkills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSkills.includes(skill)
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedSkills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm flex items-center"
          >
            {skill}
            <button onClick={() => handleRemove(skill)} className="ml-2 text-red-500 font-bold">×</button>
          </span>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search and select skills"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        className="w-full border p-2 rounded"
      />

      {showDropdown && filteredSkills.length > 0 && (
        <ul className="absolute z-10 bg-white border w-full mt-1 max-h-40 overflow-y-auto rounded shadow">
          {filteredSkills.map((skill, index) => (
            <li
              key={index}
              className="p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                handleSelect(skill);
                setSearchTerm('');
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillsSelector;
