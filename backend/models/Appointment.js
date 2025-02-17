const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  department: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rescheduled'],
    default: 'pending'
  },
  type: {
    type: String,
    enum: ['in-person', 'online'],
    required: true,
    default: 'in-person'
  }
});

// Check if model already exists to prevent OverwriteModelError
module.exports = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
