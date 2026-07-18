import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 transform bg-blue-700 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </div>

      {/* Main */}
      <div className="lg:ml-64">
        {/* Navbar */}
        <div className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-white shadow flex items-center px-4 z-30">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden mr-4 text-2xl"
          >
            <FaBars />
          </button>

          <div className="flex-1">
            <Navbar />
          </div>
        </div>

        {/* Content */}
        <main className="pt-20 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;