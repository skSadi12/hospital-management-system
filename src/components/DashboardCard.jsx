const DashboardCard = ({ title, value, color }) => {
  return (
    <div className={`${color} text-white rounded-xl p-6 shadow-lg`}>

      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>

    </div>
  );
};

export default DashboardCard;