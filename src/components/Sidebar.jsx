import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen">

      <div className="text-center py-6 border-b border-blue-500">

        <h1 className="text-2xl font-bold">
          HMS
        </h1>

      </div>

      <nav className="mt-6">

        <NavLink
          to="/"
          className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/patients"
          className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
        >
          <FaUserInjured />
          Patients
        </NavLink>

        <NavLink
          to="/doctors"
          className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
        >
          <FaUserMd />
          Doctors
        </NavLink>

        <NavLink
          to="/appointments"
          className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
        >
          <FaCalendarCheck />
          Appointments
        </NavLink>

      </nav>

    </div>
  );
};

export default Sidebar;