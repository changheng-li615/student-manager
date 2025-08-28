import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-6 flex flex-col gap-6 shadow-lg border-r border-gray-800">
      <h2 className="text-2xl font-bold mb-8">Student Manager</h2>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-blue-400 transition ${
            isActive ? "text-blue-500" : "text-gray-300"
          }`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/students"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-blue-400 transition ${
            isActive ? "text-blue-500" : "text-gray-300"
          }`
        }
      >
        Students
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-blue-400 transition ${
            isActive ? "text-blue-500" : "text-gray-300"
          }`
        }
      >
        Settings
      </NavLink>
    </div>
  );
}

export default Sidebar;
