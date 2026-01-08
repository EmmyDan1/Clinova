import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/services';
import { AppointmentFormData } from '../../types';

interface Props {
  formData: AppointmentFormData;
  onChange: (field: keyof AppointmentFormData, value: string) => void;
}

const DepartmentStep: React.FC<Props> = ({ formData, onChange }) => {
  const currentIndex = services.findIndex(
    s => s.title === formData.department
  );

  const handleNext = () => {
    const next = (currentIndex + 1) % services.length;
    onChange('department', services[next].title);
  };

  const handlePrev = () => {
    const prev =
      currentIndex === -1
        ? 0
        : (currentIndex - 1 + services.length) % services.length;
    onChange('department', services[prev].title);
  };

  return (
    <div className="space-y-12 ">
      <h3 className="text-3xl md:text-2xl font-light text-yellow-400 mb-6">
        Choose a Department
      </h3>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-white/20 rounded-full mb-6">
        <div
          className="h-1 bg-[#9D6F4A] rounded-full transition-all duration-500"
          style={{
            width: `${
              currentIndex === -1
                ? 0
                : ((currentIndex + 1) / services.length) * 100
            }%`,
          }}
        />
      </div>

      {/* Animated Department Display */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {currentIndex !== -1 && (
            <motion.div
              key={services[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-[#273f23] rounded-2xl p-10 cursor-pointer"
              onClick={handleNext}
            >
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {services[currentIndex].title}
              </h4>
              <p className="text-white/70 md:text-lg leading-relaxed">
                {services[currentIndex].description}
              </p>

              <div className="mt-4 text-white/50 text-sm">
                Click to select & see next
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="text-white/70 hover:text-white transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="text-yellow-400 py-1 px-4 border hover:border-yellow-400 rounded-full font-semibold hover:brightness-110 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DepartmentStep;
