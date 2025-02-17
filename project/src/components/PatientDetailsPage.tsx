import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Patient } from './PatientRecordsPage'; // Adjust the import path as needed
import { ArrowLeft, User, Calendar, Pill, AlertTriangle } from 'lucide-react';

const PatientDetailsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patient: Patient = location.state?.patient;

  if (!patient) {
    return <div className="p-6 text-gray-700">No patient selected</div>;
  }

  // Mock data for additional patient details
  const patientDetails = {
    diagnosis: "Hypertension, Type 2 Diabetes",
    medication: [
      { name: "Lisinopril", dosage: "10mg daily" },
      { name: "Metformin", dosage: "500mg twice daily" }
    ],
    allergies: ["Penicillin", "Shellfish"],
    notes: "Patient reports occasional dizziness. Monitor blood pressure regularly.",
    upcomingAppointments: [
      { date: "2024-04-01", type: "Follow-up" },
      { date: "2024-04-15", type: "Lab Test" }
    ]
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2 text-gray-500" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Patient Report</h1>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>

        {/* Patient Information Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <User className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
              <p className="text-sm text-gray-500">Age: {patient.age}</p>
            </div>
          </div>
        </div>

        {/* Report Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diagnosis Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosis</h3>
            <p className="text-sm text-gray-600">{patientDetails.diagnosis}</p>
          </div>

          {/* Medication Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Medication</h3>
            <ul className="space-y-3">
              {patientDetails.medication.map((med, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <Pill className="h-5 w-5 mr-3 text-indigo-500" />
                  <div>
                    <p className="font-medium">{med.name}</p>
                    <p className="text-xs text-gray-500">{med.dosage}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Allergies Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Allergies</h3>
            <ul className="space-y-3">
              {patientDetails.allergies.map((allergy, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <AlertTriangle className="h-5 w-5 mr-3 text-yellow-500" />
                  {allergy}
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Appointments Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
            <ul className="space-y-3">
              {patientDetails.upcomingAppointments.map((appointment, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-indigo-500" />
                  <div>
                    <p className="font-medium">{appointment.date}</p>
                    <p className="text-xs text-gray-500">{appointment.type}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Notes</h3>
          <p className="text-sm text-gray-600">{patientDetails.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPage;