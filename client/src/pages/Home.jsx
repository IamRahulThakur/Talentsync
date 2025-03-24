// client/src/pages/Home.jsx
const Home = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">Welcome to TalentSync</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
          Your personal AI-powered job assistant. Get instant WhatsApp alerts for jobs that match your skills!!
        </p>
        <a
          href="/register"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
        >
          Get Started
        </a>
      </div>
    );
  };
  
  export default Home;
  