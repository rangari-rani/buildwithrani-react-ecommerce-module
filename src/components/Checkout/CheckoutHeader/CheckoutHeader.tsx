import { useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { useCheckoutSteps } from "./hooks/useCheckoutSteps";

const CheckoutHeader = () => {
  const navigate = useNavigate();
  const { steps, currentStep, isSuccessPage } = useCheckoutSteps();

  if (isSuccessPage) return null;

  
  return (
    <header className="w-full bg-white shadow-sm py-4 flex items-center justify-between px-6">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-lg md:text-2xl font-bold text-green-600 cursor-pointer"
      >
        Wellness Cart 🌿
      </h1>

      {/* Stepper */}
      <div className="relative flex justify-between items-center w-[70%] max-w-100">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />

        <div
          className="absolute top-1/2 left-0 h-1 bg-green-600 -translate-y-1/2 transition-all"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map(step => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
                <div
              key={step.id}
              className="flex flex-col items-center z-10 cursor-pointer"
              onClick={() => {
                if (step.id < currentStep) navigate(step.path);
              }}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-semibold ${
                  isCompleted
                    ? "bg-green-600 border-green-600 text-white"
                    : isActive
                    ? "border-green-600 text-green-700 bg-white"
                    : "border-gray-300 text-gray-400 bg-white"
                } transition-all duration-300`}
              >
                {isCompleted ? "✓" : step.id}
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive || isCompleted
                    ? "text-green-700 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Secure */}
      <div className="flex items-center gap-2 text-green-700 font-medium">
        <FiLock size={18} />
        Secure Checkout
      </div>
    </header>
  );
};

export default CheckoutHeader;
