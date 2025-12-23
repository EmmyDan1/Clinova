import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { AppointmentFormData } from '../../types';

interface Props {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const DepartmentStep: React.FC<Props> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-[#273f23] mb-4">Select Department</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(service => (
          <motion.button
            key={service.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl border-2 text-left shadow-sm transition-all ${
              formData.department === service.title
                ? 'border-[#273f23] bg-[#fef7e0]'
                : 'border-gray-200 hover:border-[#273f23] hover:bg-gray-50'
            }`}
            onClick={() => onChange('department', service.title)}
          >
            <div className="text-2xl mb-2">{service.icon}</div>
            <h4 className="font-semibold text-[#273f23] mb-1">{service.title}</h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default DepartmentStep;
