import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import PatientTable from "../components/PatientTable"
import DoctorTable from "../components/DoctorTable"
import AppointmentTable from "../components/AppointmentTable"
import AddPatientForm from "../components/AddPatientForm"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/patients",
        element: <PatientTable/>,
      },
      {
        path: "/doctors",
        element: <DoctorTable/>,
      },
      {
        path: "/Appointments",
        element: <AppointmentTable/>,
      },
      {
        path: "/add-patient",
        element: <AddPatientForm/>,
      },
    //   {
    //     path: "/about",
    //     element: <about />,
    //   },
    ],
  },
]);
