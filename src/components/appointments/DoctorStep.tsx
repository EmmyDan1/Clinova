import React from 'react';
import { doctors } from '../../data/doctors';
import { AppointmentFormData } from '../../types';

interface DoctorStepProps {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const DoctorStep: React.FC<DoctorStepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Select a Doctor
      </h3>
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <button
            key={doctor.id}
            className={`w-full p-4 rounded-lg border-2 flex items-center text-left transition-all ${
              formData.doctorId === doctor.id
                ? 'border-yellow-400 bg-yellow-50'
                : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
            }`}
            onClick={() => onChange('doctorId', doctor.id)}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900">{doctor.name}</h4>
              <p className="text-yellow-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-600">{doctor.bio.slice(0, 80)}...</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorStep;
