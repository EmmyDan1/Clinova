import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppointmentFormData, AppointmentStep } from '../types';
import Stepper from '../components/appointments/Stepper';
import DepartmentStep from '../components/appointments/DepartmentStep';
import DoctorStep from '../components/appointments/DoctorStep';
import DateTimeStep from '../components/appointments/DateTimeStep';
import PatientStep from '../components/appointments/PatientStep';
import ConfirmationStep from '../components/appointments/ConfirmationStep';
import { Button } from '../components/ui/Button';

const steps: Array<{ id: AppointmentStep; title: string }> = [
  { id: 'department', title: 'Department' },
  { id: 'doctor', title: 'Doctor' },
  { id: 'datetime', title: 'Date & Time' },
  { id: 'patient', title: 'Your Info' },
  { id: 'confirmation', title: 'Confirmation' },
];

const Appointment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppointmentStep>('department');
  const [formData, setFormData] = useState<AppointmentFormData>({
    department: '',
    doctorId: '',
    date: '',
    time: '',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    reason: '',
  });

  const handleInputChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    if (stepIndex < steps.length - 1) setCurrentStep(steps[stepIndex + 1].id);
  };

  const handleBack = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    if (stepIndex > 0) setCurrentStep(steps[stepIndex - 1].id);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'department':
        return <DepartmentStep formData={formData} onChange={handleInputChange} />;
      case 'doctor':
        return <DoctorStep formData={formData} onChange={handleInputChange} />;
      case 'datetime':
        return <DateTimeStep formData={formData} onChange={handleInputChange} />;
      case 'patient':
        return <PatientStep formData={formData} onChange={handleInputChange} />;
      case 'confirmation':
        return <ConfirmationStep formData={formData} />;
    }
  };

  return (
    <div className="min-h-screen text-center py-12 bg-[#273f23] flex flex-col  ">
 
      <div className="  mt-24 ">
        <h1 className="text-3xl  font-light text-yellow-400 ">
          Book an Appointment
        </h1>
        <p className="text-lg text-white/70">
          Schedule your visit with our specialists
        </p>
      </div>


      <Stepper currentStep={currentStep} steps={steps} />

      <div className="w-full max-w-3xl mt-6 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="px-8 py-12 rounded-3xl bg-gradient-to-br from-[#3a5a3a] via-[#4e7150] to-[#9D6F4A] shadow-2xl text-white"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {currentStep !== 'confirmation' && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 'department'}
              className="text-yellow-400 border-yellow-400 rounded-full transition"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 'department' && !formData.department) ||
                (currentStep === 'doctor' && !formData.doctorId) ||
                (currentStep === 'datetime' && (!formData.date || !formData.time)) ||
                (currentStep === 'patient' &&
                  (!formData.patientName || !formData.patientEmail || !formData.patientPhone))
              }
              className="text-yellow-400 border-yellow-400 rounded-full border  font-semibold"
            >
              {currentStep === 'patient' ? 'Schedule Appointment' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
