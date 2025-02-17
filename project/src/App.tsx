import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AppointmentBooking from './pages/AppointmentBooking';
import MedicineStore from './pages/MedicineStore';
import WellnessReviews from './pages/WellnessReviews';
import UserProfile from './pages/UserProfile';
import HospitalLocations from './pages/HospitalLocations';
import { DashboardLayout } from './components/DashboardLayout';
import Navigation from './components/Navigation';
import { useState } from 'react';
import AppointmentsPage  from './components/AppointmentsPage';
import { ConsultationPage} from './components/ConsultationPage';
import { PatientRecordsPage } from './components/PatientRecordsPage';
import { EmergencyPage } from './components/EmergencyPage';
import { NotificationsPage } from './components/NotificationsPage';
import LandingPage from './LandingPage';
import DoctorLogin from './pages/DoctorLogin';
import UserLogin from './pages/UserLogin';
import PatientDetailsPage from './components/PatientDetailsPage';
import ViewTestReportsPage from './components/ViewTestReportsPage'; // Adjust the import path as needed
import PatientChatPage from './components/PatientChatPage'; // Adjust the import path as needed
import MedicalNotesPage from './components/MedicalNotesPage'; // Adjust the import path as needed
import UpdateRecordsPage from './components/UpdateRecordsPage'; // Adjust the import path as needed

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <Navigation isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard/>} />
          <Route path="medicine" element={<MedicineStore />} />
          <Route path="wellnessreview" element={<WellnessReviews />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="hospital" element={<HospitalLocations />} />
          <Route path="appointment-booking" element={<AppointmentBooking />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        <Route path="/dashboardlayout" element={<DashboardLayout />}>
          <Route index element={<div>Dashboard Home</div>} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="consultations" element={<ConsultationPage />} />
          <Route path="patient-records" element={<PatientRecordsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="emergency" element={<EmergencyPage />} />
          <Route path="patient-details" element={<PatientDetailsPage />} />
          <Route path="view-test-reports" element={<ViewTestReportsPage />} />
          <Route path="patient-chat" element={<PatientChatPage />} />
          <Route path="medical-notes" element={<MedicalNotesPage />} />
          <Route path="update-records" element={<UpdateRecordsPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
