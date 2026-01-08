import React from 'react';

interface StepperProps {
  currentStep: string;
  steps: Array<{ id: string; title: string }>;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  const currentIndex = steps.findIndex(s => s.id === currentStep);

  return (
    <div className="flex justify-center mb-12 space-x-8 relative">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div key={step.id} className="flex flex-col text-black items-center relative">
            {/* Connector line */}
            {index !== 0 && (
              <div
                className={`absolute top-1/2 -left-4 w-8 h-1 rounded-full ${
                  isCompleted ? 'bg-[#9D6F4A]' : 'bg-white/30'
                }`}
              ></div>
            )}

            {/* Step circle */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                isCurrent
                  ? 'bg-[#9D6F4A] text-black shadow-lg'
                  : isCompleted
                  ? 'bg-[#9D6F4A]/60 text-white'
                  : 'bg-white border-2 border-white/30 text-white/60'
              }`}
            >
              {isCompleted ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                index + 1
              )}
            </div>

            <span
              className={`text-sm font-medium ${
                isCurrent || isCompleted ? 'text-white' : 'text-white/60'
              }`}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
