import React, { useState } from "react";
import useUserStore from "@/store/userStore";

const Users = () => {
  const { users, addUser, updateUser, deleteUser } = useUserStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateUser(editingId, { name, email });
      setEditingId(null);
    } else {
      addUser({ name, email });
    }
    setName("");
    setEmail("");
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-[400px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          User Management
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg transition font-semibold text-white ${
              editingId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editingId ? "Update User" : "Add User"}
          </button>
        </form>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow"
            >
              <div>
                <strong className="text-lg text-gray-700">{user.name}</strong>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
