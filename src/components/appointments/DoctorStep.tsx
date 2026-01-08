import React from 'react';
import { doctors } from '../../data/doctors';
import { AppointmentFormData } from '../../types';
import { motion } from 'framer-motion';

interface DoctorStepProps {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const DoctorStep: React.FC<DoctorStepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-extralight tracking-tighter text-yellow-400/90 mb-6">
        Choose Your Doctor
      </h3>

      <div className="flex flex-col gap-4">
        {doctors.map((doctor) => {
          const isSelected = formData.doctorId === doctor.id;

          return (
            <motion.div
              key={doctor.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => onChange('doctorId', doctor.id)}
              className={`cursor-pointer flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-300 ${
                isSelected
                  ? 'bg-[#9D6F4A] text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-[#9D6F4A]/30'
              }`}
            >
              {/* Doctor avatar */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className={`w-16 h-16 rounded-full object-cover border-2 transition-colors ${
                  isSelected ? 'border-white' : 'border-white/30'
                }`}
              />

              {/* Doctor info */}
              <div className="flex flex-col">
                <h4 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-white/90'}`}>
                  {doctor.name}
                </h4>
                <p className={`text-sm font-medium ${isSelected ? 'text-white/90' : 'text-[#d4af7f]'}`}>
                  {doctor.specialty}
                </p>
                <p className="text-xs text-white/60 line-clamp-2">
                  {doctor.bio}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorStep;
