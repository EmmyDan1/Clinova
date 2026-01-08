import React, { useEffect } from 'react';
import { doctors } from '../../data/doctors';
import { AppointmentFormData } from '../../types';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

interface ConfirmationStepProps {
  formData: AppointmentFormData;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData }) => {
  const selectedDoctor = doctors.find(d => d.id === formData.doctorId);

  useEffect(() => {
    toast.success('Appointment successfully scheduled!', {
      style: {
        borderRadius: '12px',
        background: '#273f23',
        color: '#fef7e0',
      },
      iconTheme: {
        primary: '#fef7e0',
        secondary: '#273f23',
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >

      <div className="text-center">
        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg
            className="w-10 h-10 text-yellow-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold text-white/90 mb-2">
          Appointment Confirmed!
        </h3>
        <p className="text-white/70 mb-6">
          Thank you, {formData.patientName}. Your appointment is scheduled. You’ll receive a confirmation email shortly.
        </p>
      </div>

      {/* Appointment Details Card */}
      <div className="bg-[#1a2d1a] rounded-2xl shadow-lg p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-white/80 font-medium">
          <span>Department:</span>
          <span className="text-white">{formData.department}</span>

          {selectedDoctor && (
            <>
              <span>Doctor:</span>
              <span className="text-white">{selectedDoctor.name}</span>
            </>
          )}

          <span>Date:</span>
          <span className="text-white">{formData.date}</span>

          <span>Time:</span>
          <span className="text-white">{formData.time}</span>

          <span>Patient:</span>
          <span className="text-white">{formData.patientName}</span>
        </div>
      </div>

      {/* Notes */}
      <div className="text-center text-sm text-white/60 space-y-1">
        <p>Please arrive 15 minutes before your scheduled appointment.</p>
        <p>Bring your insurance card and a valid photo ID.</p>
      </div>
    </motion.div>
  );
};

export default ConfirmationStep;
