const AddPatientForm = () => {
  return (
    <div className="bg-white rounded-xl shadow mt-6 sm:mt-8 p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">
        Add New Patient
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <input
          type="text"
          placeholder="Patient Name"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Age"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="text"
          placeholder="Disease"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 md:col-span-2 w-full transition"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;