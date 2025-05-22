const Infrastruktur = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <p className="text-gray-600">Manage user accounts and permissions.</p>
      <div className="flex flex-col gap-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add User</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">Delete User</button>
      </div>
    </div>
  );
}

export default Infrastruktur;