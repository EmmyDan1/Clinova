import React from 'react';
import { Card } from '../ui/Card';
import { doctors } from '../../data/doctors';
import { AppointmentFormData } from '../../types';

interface ConfirmationStepProps {
  formData: AppointmentFormData;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData }) => {
  const selectedDoctor = doctors.find(d => d.id === formData.doctorId);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointment Scheduled!</h3>
        <p className="text-gray-600 mb-8">
          Your appointment has been successfully scheduled. We'll send you a confirmation email shortly.
        </p>
      </div>

      <Card>
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-4">
            <span className="text-gray-600">Department:</span>
            <span className="font-semibold">{formData.department}</span>
          </div>
          {selectedDoctor && (
            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-600">Doctor:</span>
              <span className="font-semibold">{selectedDoctor.name}</span>
            </div>
          )}
          <div className="flex justify-between border-b pb-4">
            <span className="text-gray-600">Date:</span>
            <span className="font-semibold">{formData.date}</span>
          </div>
          <div className="flex justify-between border-b pb-4">
            <span className="text-gray-600">Time:</span>
            <span className="font-semibold">{formData.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Patient:</span>
            <span className="font-semibold">{formData.patientName}</span>
          </div>
        </div>
      </Card>

      <div className="text-center text-sm text-gray-500">
        <p>Please arrive 15 minutes before your scheduled appointment.</p>
        <p>Bring your insurance card and photo ID.</p>
      </div>
    </div>
  );
};

export default ConfirmationStep;
