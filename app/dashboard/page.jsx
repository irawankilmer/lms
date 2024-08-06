"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login"); // Arahkan ke halaman login setelah logout
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <nav className="bg-gray-100 p-4 fixed bottom-0 w-full flex justify-around md:flex-col md:justify-start md:w-auto md:static">
        <Link href="/dashboard" className="p-2 md:p-4">
          Home
        </Link>
        <Link href="/profile" className="p-2 md:p-4">
          Profile
        </Link>
        <Link href="/settings" className="p-2 md:p-4">
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="p-2 md:p-4 text-red-600"
        >
          Logout
        </button>
      </nav>
      <div className="flex-1">
        <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>
        <main className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">Content 1</div>
            <div className="bg-white p-4 rounded shadow">Content 2</div>
            <div className="bg-white p-4 rounded shadow">Content 3</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
