const patients = [
  {
    id: 1,
    name: "Rahim Ahmed",
    age: 24,
    gender: "Male",
    disease: "Fever",
  },
  {
    id: 2,
    name: "Karim Hasan",
    age: 35,
    gender: "Male",
    disease: "Diabetes",
  },
  {
    id: 3,
    name: "Jannat Akter",
    age: 29,
    gender: "Female",
    disease: "Asthma",
  },
];

const PatientTable = () => {
  return (
    <div className="bg-white rounded-xl shadow mt-6 sm:mt-8 p-4 sm:p-5">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Patient List
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2 sm:p-3">ID</th>
              <th className="p-2 sm:p-3">Name</th>
              <th className="p-2 sm:p-3">Age</th>
              <th className="p-2 sm:p-3">Gender</th>
              <th className="p-2 sm:p-3">Disease</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-2 sm:p-3">{patient.id}</td>
                <td className="p-2 sm:p-3">{patient.name}</td>
                <td className="p-2 sm:p-3">{patient.age}</td>
                <td className="p-2 sm:p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                      patient.gender === "Male"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {patient.gender}
                  </span>
                </td>
                <td className="p-2 sm:p-3">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                    {patient.disease}
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

export default PatientTable;