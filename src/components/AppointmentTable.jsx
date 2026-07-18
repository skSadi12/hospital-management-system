const appointments = [
  {
    id: 1,
    patient: "Rahim",
    doctor: "Dr. Mahmud",
    date: "10 July",
    status: "Completed",
  },
  {
    id: 2,
    patient: "Karim",
    doctor: "Dr. Nusrat",
    date: "12 July",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Jannat",
    doctor: "Dr. Fahim",
    date: "15 July",
    status: "Confirmed",
  },
];

const AppointmentTable = () => {
  return (
    <div className="bg-white rounded-xl shadow mt-6 sm:mt-8 p-4 sm:p-5">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Appointment List
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-2 sm:p-3">ID</th>
              <th className="p-2 sm:p-3">Patient</th>
              <th className="p-2 sm:p-3">Doctor</th>
              <th className="p-2 sm:p-3">Date</th>
              <th className="p-2 sm:p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-2 sm:p-3">{appointment.id}</td>
                <td className="p-2 sm:p-3">{appointment.patient}</td>
                <td className="p-2 sm:p-3">{appointment.doctor}</td>
                <td className="p-2 sm:p-3">{appointment.date}</td>
                <td className="p-2 sm:p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : appointment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;