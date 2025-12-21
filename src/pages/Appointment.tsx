import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { doctors } from '../data/doctors';
import { services } from '../data/services';
import { AppointmentFormData, AppointmentStep } from '../types';

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

  const steps: Array<{ id: AppointmentStep; title: string }> = [
    { id: 'department', title: 'Department' },
    { id: 'doctor', title: 'Doctor' },
    { id: 'datetime', title: 'Date & Time' },
    { id: 'patient', title: 'Your Information' },
    { id: 'confirmation', title: 'Confirmation' },
  ];

  const handleInputChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    if (stepIndex < steps.length - 1) {
      setCurrentStep(steps[stepIndex + 1].id);
    }
  };

  const handleBack = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    if (stepIndex > 0) {
      setCurrentStep(steps[stepIndex - 1].id);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'department':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Select Medical Department
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`p-6 rounded-lg border-2 text-left transition-all ${
                    formData.department === service.title
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                  }`}
                  onClick={() => handleInputChange('department', service.title)}
                >
                  <div className="text-2xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 'doctor':
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
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                  }`}
                  onClick={() => handleInputChange('doctorId', doctor.id)}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900">{doctor.name}</h4>
                    <p className="text-teal-600">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600">{doctor.bio.slice(0, 80)}...</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'datetime':
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
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
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

      case 'patient':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your Information
            </h3>
            <div className="space-y-4">
              <Input
                label="Full Name"
                placeholder="John Doe"
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData.patientEmail}
                onChange={(e) => handleInputChange('patientEmail', e.target.value)}
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.patientPhone}
                onChange={(e) => handleInputChange('patientPhone', e.target.value)}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Please describe your symptoms or reason for appointment..."
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 'confirmation':
        const selectedDoctor = doctors.find(d => d.id === formData.doctorId);
        
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Appointment Scheduled!
              </h3>
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
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book an Appointment
            </h1>
            <p className="text-xl text-gray-600">
              Schedule your visit with our medical specialists
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
              {steps.map((step, index) => {
                const stepIndex = steps.findIndex(s => s.id === currentStep);
                const isCompleted = index < stepIndex;
                const isCurrent = index === stepIndex;
                
                return (
                  <div key={step.id} className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        isCurrent
                          ? 'bg-teal-600 text-white'
                          : isCompleted
                          ? 'bg-teal-100 text-teal-600'
                          : 'bg-white border-2 border-gray-300 text-gray-400'
                      }`}
                    >
                      {isCompleted ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      isCurrent ? 'text-teal-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <Card className="mb-8">
            {renderStep()}
          </Card>

          {/* Navigation Buttons */}
          {currentStep !== 'confirmation' && (
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 'department'}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  (currentStep === 'department' && !formData.department) ||
                  (currentStep === 'doctor' && !formData.doctorId) ||
                  (currentStep === 'datetime' && (!formData.date || !formData.time)) ||
                  (currentStep === 'patient' && (!formData.patientName || !formData.patientEmail || !formData.patientPhone))
                }
              >
                {currentStep === 'patient' ? 'Schedule Appointment' : 'Continue'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
