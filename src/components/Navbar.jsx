import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white h-16 shadow flex items-center justify-between px-4 sm:px-6">
      {/* Logo / Title */}
      <div>
        <h1 className="font-bold text-blue-600 text-xl sm:text-2xl">
          {/* Mobile */}
          <span className="block sm:hidden">HMS</span>

          {/* Tablet & Desktop */}
          <span className="hidden sm:block">
            Hospital Management System
          </span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification */}
        <button className="relative">
          <FaBell className="text-xl sm:text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle className="text-3xl text-blue-600" />

          {/* Hide user info on mobile */}
          <div className="hidden sm:block">
            <h2 className="font-semibold">Admin</h2>
            <p className="text-xs text-gray-500">
              Hospital Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;