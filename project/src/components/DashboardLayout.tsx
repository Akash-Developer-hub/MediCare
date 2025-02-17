import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Users,
  FileText,
  Bell,
  AlertCircle,
  LogOut,
  Menu,
} from "lucide-react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboardlayout", icon: Calendar, description: "View your dashboard and recent activity" },
    { name: "Appointments", path: "/dashboardlayout/appointments", icon: Calendar, description: "Manage your upcoming and past appointments" },
    { name: "Consultations", path: "/dashboardlayout/consultations", icon: Users, description: "Access patient consultation tools and resources" },
    { name: "Patient Records", path: "/dashboardlayout/patient-records", icon: FileText, description: "View and update patient medical records" },
    { name: "Emergency", path: "/dashboardlayout/emergency", icon: AlertCircle, description: "Access emergency consultation services" },
    { name: "Notifications", path: "/dashboardlayout/notifications", icon: Bell, description: "View your recent notifications and alerts" }
   
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Get the current page title from the menu items
  const currentPage =
    menuItems.find((item) => item.path === location.pathname)?.name || "Dashboard";

  // Check if we're on the main dashboard page
  const isDashboardHome = location.pathname === "/dashboardlayout" || location.pathname === "/dashboardlayout/";

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:translate-x-0 sm:relative`}
      >
        <div className="flex flex-col h-full mt-5">
          {/* Sidebar Header */}
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">HealthCare Hub</h1>
            <button
              onClick={toggleSidebar}
              className="sm:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              ✖
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleSidebar} // Close sidebar on click
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md w-full ${
                    isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="px-4 py-4 border-t">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md w-full">
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 py-4 sm:px-6 flex items-center justify-between relative z-10">
  <button
    onClick={toggleSidebar}
    className="sm:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
  >
    <Menu className="h-6 w-6" />
  </button>
  <h2 className="text-xl font-semibold text-gray-800">{currentPage}</h2>
</header>


        {/* Page Content */}
        <main className="flex-1 px-4 py-6 sm:px-6">
          {isDashboardHome ? (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Welcome to HealthCare Hub Dashboard</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {menuItems.filter(item => item.name !== "Dashboard").map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <Icon className="h-8 w-8 text-indigo-600" />
                          <h3 className="ml-3 text-lg font-medium text-gray-900">{item.name}</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
