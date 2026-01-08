import React from 'react';
import { AppointmentFormData } from '../../types';
import { Input } from '../ui/Input';

interface DateTimeStepProps {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const DateTimeStep: React.FC<DateTimeStepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Select Date & Time
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Appointment Date
          </label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => onChange('date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className='text-black'
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Time
          </label>
          <select
            className="w-full h-12 px-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.time}
            onChange={(e) => onChange('time', e.target.value)}
          >
            <option value="">Select a time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DateTimeStep;
