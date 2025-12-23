import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AnimatePresence } from 'framer-motion';
import { AppointmentFormData, AppointmentStep } from '../types';

import Stepper from '../components/appointments/Stepper';
import DepartmentStep from '../components/appointments/DepartmentStep';
import DoctorStep from '../components/appointments/DoctorStep';
import DateTimeStep from '../components/appointments/DateTimeStep';
import PatientStep from '../components/appointments/PatientStep';
import ConfirmationStep from '../components/appointments/ConfirmationStep';

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
    <div className="py-12 bg-[#f9f9f9] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-[#273f23] mb-4">Book an Appointment</h1>
          <p className="text-lg text-gray-600">Schedule your visit with our specialists</p>
        </div>

        <Stepper currentStep={currentStep} steps={steps} />

        <Card className="p-8 mb-8">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </Card>

        {currentStep !== 'confirmation' && (
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleBack} disabled={currentStep === 'department'}>
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
