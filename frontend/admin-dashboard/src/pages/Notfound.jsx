import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-6">
      
      <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/30 text-center max-w-lg w-full">
        
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-700 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/login"
            className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl shadow-lg transition"
          >
            Go to Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;