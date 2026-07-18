import DashboardCard from "../components/DashboardCard";

const Home = () => {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Patients"
          value="250"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Doctors"
          value="35"
          color="bg-green-600"
        />

        <DashboardCard
          title="Appointments"
          value="120"
          color="bg-orange-500"
        />

        <DashboardCard
          title="Revenue"
          value="$15K"
          color="bg-purple-600"
        />

      </div>

    </div>
  );
};

export default Home;