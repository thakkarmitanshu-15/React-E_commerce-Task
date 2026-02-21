import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="md:ml-64 flex flex-col min-h-screen">
        <Navbar setIsOpen={setIsOpen} />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}