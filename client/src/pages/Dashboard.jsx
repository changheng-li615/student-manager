import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>

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
      </main>
    </div>
  );
}

export default Dashboard;