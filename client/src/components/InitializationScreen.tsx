import React, { useState, useEffect } from "react";

interface InitializationScreenProps {
  onComplete: () => void;
}

const InitializationScreen = ({ onComplete }: InitializationScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const brands = [
    { name: "zeromonk", delay: 1000 },
    { name: "zeroschool", delay: 1000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < brands.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Start fade out after showing both brands
        setTimeout(() => {
          setIsVisible(false);
          // Complete initialization after fade out
          setTimeout(onComplete, 500);
        }, 1000);
      }
    }, brands[currentStep].delay);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-zero-dark z-50 flex items-center justify-center animate-fade-out">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white opacity-0">
            {brands[currentStep].name}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-zero-dark z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
          {brands[currentStep].name}
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-zero-blue rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default InitializationScreen;