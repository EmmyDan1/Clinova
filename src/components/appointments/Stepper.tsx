import React from 'react';

interface StepperProps {
  currentStep: string;
  steps: Array<{ id: string; title: string }>;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="mb-12 flex justify-between relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
      {steps.map((step, index) => {
        const stepIndex = steps.findIndex(s => s.id === currentStep);
        const isCompleted = index < stepIndex;
        const isCurrent = index === stepIndex;

        return (
          <div key={step.id} className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                isCurrent
                  ? 'bg-[#273f23] text-yellow-400'
                  : isCompleted
                  ? 'bg-[#273f23]/20 text-[#273f23]'
                  : 'bg-white border-2 border-gray-300 text-gray-400'
              }`}
            >
              {isCompleted ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span className={`text-sm font-medium ${isCurrent ? 'text-[#273f23]' : 'text-gray-500'}`}>
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
