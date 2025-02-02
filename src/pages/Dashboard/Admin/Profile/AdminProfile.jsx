import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AdminProfile = () => {
  const axiosSecure = useAxiosSecure();
  const [statistics, setStatistics] = useState({});
  useEffect(() => {
    axiosSecure
      .get("/api/statistic")
      .then((res) => {
        setStatistics(res.data);
      })
      .catch((error) => console.log(error));
  }, [axiosSecure]);

  return (
    <div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">{statistics?.totalProduct}</h2>
          <p className="text-sm">Total Products</p>
        </div>
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">{statistics?.totalCategory}</h2>
          <p className="text-sm">Total Category</p>
        </div>
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">{statistics?.totalServices}</h2>
          <p className="text-sm">Total Service</p>
        </div>
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">{statistics?.totalFAQ}</h2>
          <p className="text-sm">Total FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
