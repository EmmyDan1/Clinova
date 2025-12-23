import React from 'react';
import { Input } from '../ui/Input';
import { AppointmentFormData } from '../../types';

interface PatientStepProps {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const PatientStep: React.FC<PatientStepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h3>
      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={formData.patientName}
          onChange={(e) => onChange('patientName', e.target.value)}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={formData.patientEmail}
          onChange={(e) => onChange('patientEmail', e.target.value)}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.patientPhone}
          onChange={(e) => onChange('patientPhone', e.target.value)}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason for Visit
          </label>
          <textarea
            className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Please describe your symptoms or reason for appointment..."
            value={formData.reason}
            onChange={(e) => onChange('reason', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientStep;
