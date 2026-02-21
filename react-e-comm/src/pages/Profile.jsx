import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user, logout } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(form));

    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      session.user = form;
      localStorage.setItem("session", JSON.stringify(session));
    }

    alert("Profile Updated ✅");
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Account Settings
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl">
        <div className="grid md:grid-cols-2 gap-6">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-3 rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-3 rounded-lg md:col-span-2"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Save Changes
          </button>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}