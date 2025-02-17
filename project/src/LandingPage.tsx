import { Link } from 'react-router-dom';
import { UserCircle, Stethoscope } from 'lucide-react'; // Import SVG icons

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Welcome to HealthCare Hub
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Your trusted platform for healthcare services
        </p>
      </header>

      <main className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
        <Link
          to="/doctor-login"
          className="flex items-center justify-center px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 ease-in-out"
        >
          <Stethoscope className="h-6 w-6 mr-2" /> {/* SVG Icon */}
          Doctor Login
        </Link>
        <Link
          to="/user-login"
          className="flex items-center justify-center px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 ease-in-out"
        >
          <UserCircle className="h-6 w-6 mr-2" /> {/* SVG Icon */}
          User Login
        </Link>
      </main>
    </div>
  );
}

export default LandingPage;
