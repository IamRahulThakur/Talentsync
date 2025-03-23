// client/src/pages/Dashboard.jsx
const Dashboard = () => {
    return (
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Your Job Dashboard</h1>
        <p className="text-gray-600 mb-6">Here are the latest jobs matching your skills:</p>
  
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Dummy Job Cards */}
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-lg font-semibold">Frontend Developer</h2>
            <p className="text-gray-600">Company: TechCorp</p>
            <p className="text-sm text-gray-500">Skills: React, Tailwind</p>
          </div>
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-lg font-semibold">Backend Developer</h2>
            <p className="text-gray-600">Company: DevX</p>
            <p className="text-sm text-gray-500">Skills: Node.js, MongoDB</p>
          </div>
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-lg font-semibold">Java Fullstack</h2>
            <p className="text-gray-600">Company: Codeverse</p>
            <p className="text-sm text-gray-500">Skills: Java, Spring Boot</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  