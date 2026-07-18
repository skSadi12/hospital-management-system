import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaUserPlus,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ closeSidebar }) => {
  const handleClose = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-4 transition-colors ${
      isActive
        ? "bg-blue-900 text-white"
        : "hover:bg-blue-800 text-white"
    }`;

  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen">
      {/* Mobile Close Button */}
      

      {/* Logo */}
      <div className="text-center py-4 border-b border-blue-500 flex justify-center items-center gap-16">
        <h1 className="text-2xl font-bold">HMS</h1>
        <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={closeSidebar}
          className="text-2xl hover:text-gray-300 transition"
        >
          <FaTimes />
        </button>
      </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        <NavLink
          to="/"
          onClick={handleClose}
          className={navClass}
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/patients"
          onClick={handleClose}
          className={navClass}
        >
          <FaUserInjured />
          <span>Patients</span>
        </NavLink>

        <NavLink
          to="/doctors"
          onClick={handleClose}
          className={navClass}
        >
          <FaUserMd />
          <span>Doctors</span>
        </NavLink>

        <NavLink
          to="/appointments"
          onClick={handleClose}
          className={navClass}
        >
          <FaCalendarCheck />
          <span>Appointments</span>
        </NavLink>

        <NavLink
          to="/add-patient"
          onClick={handleClose}
          className={navClass}
        >
          <FaUserPlus />
          <span>Add Patient</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;