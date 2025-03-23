// client/src/pages/Login.jsx
const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
            <button type="submit" className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  