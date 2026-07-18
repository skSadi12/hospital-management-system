import { Outlet } from "react-router-dom";

// import Navbar from "../components/navbar";
// import Footer from "../components/Footer";
// import Navbar from "../Components/Navbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <div className="font-sans antialiased  tetx-black  ">
      {/* <Navbar /> */}

     
      <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6 bg-gray-100 min-h-screen">

          <Outlet></Outlet>

        </div>

      </div>

    </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
