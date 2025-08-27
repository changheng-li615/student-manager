import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="bg-gray-950 p-8 rounded-xl shadow-lg w-full max-w-2xl border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold tracking-wide">Welcome, Student Admin</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-medium"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <h2 className="text-xl font-bold mb-2">23</h2>
            <p className="text-sm text-gray-400">Total Students</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <h2 className="text-xl font-bold mb-2">8</h2>
            <p className="text-sm text-gray-400">Passed</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <h2 className="text-xl font-bold mb-2">3</h2>
            <p className="text-sm text-gray-400">Failed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;