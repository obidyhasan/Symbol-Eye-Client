const AdminProfile = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">45+</h2>
          <p className="text-sm">Total Products</p>
        </div>
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">20+</h2>
          <p className="text-sm">Total Category</p>
        </div>
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">15+</h2>
          <p className="text-sm">Total Service</p>
        </div>
        <div className="border px-4 py-6 bg-white rounded border-gray-300 text-center">
          <h2 className="text-2xl font-bold">4+</h2>
          <p className="text-sm">Total FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
