import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white h-16 shadow flex items-center justify-between px-6">

      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          Hospital Management System
        </h1>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative">
          <FaBell className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">

          <FaUserCircle className="text-3xl text-blue-600" />

          <div>
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