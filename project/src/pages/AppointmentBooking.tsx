import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Building2, Stethoscope, MessageSquare, X } from 'lucide-react';
import { clsx } from 'clsx';
import axios from 'axios';

interface AppointmentForm {
  date: string;
  time: string;
  location: string;
  department: string;
  description: string;
}

const AppointmentBooking: React.FC = () => {
  const [form, setForm] = useState<AppointmentForm>({
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '',
    location: '',
    department: '',
    description: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', form);
      console.log('Appointment saved:', response.data);
      setShowConfirmation(false);
      // Add success notification
    } catch (error) {
      console.error('Error saving appointment:', error);
      // Add error notification
    }
  };

  const FormField: React.FC<{
    icon: React.ElementType;
    label: string;
    children: React.ReactNode;
  }> = ({ icon: Icon, label, children }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-blue-600" />
          <span>{label}</span>
        </div>
      </label>
      {children}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Book Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField icon={Calendar} label="Date">
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={clsx(
              "w-full px-4 py-2 border border-gray-300 rounded-lg",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "appearance-none"
            )}
            required
          />
        </FormField>

        <FormField icon={Clock} label="Time Slot">
          <select
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className={clsx(
              "w-full px-4 py-2 border border-gray-300 rounded-lg",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "appearance-none bg-white"
            )}
            required
          >
            <option value="">Select a time slot</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
          </select>
        </FormField>

        <FormField icon={Building2} label="Hospital Location">
          <select
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className={clsx(
              "w-full px-4 py-2 border border-gray-300 rounded-lg",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "appearance-none bg-white"
            )}
            required
          >
            <option value="">Select a hospital</option>
            <option value="central">Central Hospital</option>
            <option value="north">North Medical Center</option>
            <option value="east">East Wing Healthcare</option>
          </select>
        </FormField>

        <FormField icon={Stethoscope} label="Department">
          <select
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            className={clsx(
              "w-full px-4 py-2 border border-gray-300 rounded-lg",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "appearance-none bg-white"
            )}
            required
          >
            <option value="">Select a department</option>
            <option value="cardiology">Cardiology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
        </FormField>

        <FormField icon={MessageSquare} label="Medical Concern">
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className={clsx(
              "w-full px-4 py-2 border border-gray-300 rounded-lg",
              "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              "min-h-[100px] resize-y"
            )}
            required
          />
        </FormField>

        <button
          type="submit"
          className={clsx(
            "w-full bg-blue-600 text-white py-3 px-6 rounded-lg",
            "hover:bg-blue-700 active:bg-blue-800",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          )}
        >
          Book Appointment
        </button>
      </form>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <h3 className="text-xl font-bold mb-4">Confirm Appointment</h3>
            <div className="space-y-3 mb-6">
              <p><strong>Date:</strong> {form.date}</p>
              <p><strong>Time:</strong> {form.time}</p>
              <p><strong>Location:</strong> {form.location}</p>
              <p><strong>Department:</strong> {form.department}</p>
            </div>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className={clsx(
                  "flex-1 px-4 py-2 border border-gray-300 rounded-lg",
                  "hover:bg-gray-50 active:bg-gray-100",
                  "transition-colors duration-200"
                )}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={clsx(
                  "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg",
                  "hover:bg-blue-700 active:bg-blue-800",
                  "transition-colors duration-200"
                )}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
