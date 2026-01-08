import React from 'react';
import { Input } from '../ui/Input';
import { AppointmentFormData } from '../../types';
import { motion } from 'framer-motion';

interface PatientStepProps {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const PatientStep: React.FC<PatientStepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-extralight tracking-tight text-yellow-400/90">
        Your Information
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 "
      >
        <Input
          label="Full Name"
          placeholder="What's your name?"
          value={formData.patientName}
          onChange={(e) => onChange('patientName', e.target.value)}
          className="bg-[#273f23] border-yellow-400/30 focus:ring-yellow-400 text-white placeholder-white/70"
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData.patientEmail}
          onChange={(e) => onChange('patientEmail', e.target.value)}
          className="bg-[#273f23] border-yellow-400/30 focus:ring-yellow-400 text-white placeholder-white/70"
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="What's your phone number?"
          value={formData.patientPhone}
          onChange={(e) => onChange('patientPhone', e.target.value)}
          className="bg-[#273f23] border-yellow-400/30 focus:ring-yellow-400 text-white placeholder-white/70"
        />

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-white/80 mb-2">
            Reason for Visit
          </label>
          <motion.textarea
            className="w-full h-32 px-4 py-3 rounded-xl bg-[#273f23]/80 border border-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-white/60 transition-all"
            placeholder="Please describe your symptoms or reason for appointment..."
            value={formData.reason}
            onChange={(e) => onChange('reason', e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PatientStep;
