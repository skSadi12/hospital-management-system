const doctors = [
  {
    id: 1,
    name: "Dr. Mahmud",
    specialist: "Cardiologist",
    phone: "01711111111",
  },
  {
    id: 2,
    name: "Dr. Nusrat",
    specialist: "Dentist",
    phone: "01822222222",
  },
  {
    id: 3,
    name: "Dr. Fahim",
    specialist: "Neurologist",
    phone: "01933333333",
  },
];

const DoctorTable = () => {
  return (
    <div className="bg-white rounded-xl shadow mt-6 sm:mt-8 p-4 sm:p-5">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Doctor List
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[550px] border-collapse">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-2 sm:p-3">ID</th>
              <th className="p-2 sm:p-3">Name</th>
              <th className="p-2 sm:p-3">Specialist</th>
              <th className="p-2 sm:p-3">Phone</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-2 sm:p-3">{doctor.id}</td>
                <td className="p-2 sm:p-3">{doctor.name}</td>
                <td className="p-2 sm:p-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                    {doctor.specialist}
                  </span>
                </td>
                <td className="p-2 sm:p-3">{doctor.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorTable;