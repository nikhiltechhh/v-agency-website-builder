import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem("hasSeenOnboardingPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark popup as seen
    localStorage.setItem("hasSeenOnboardingPopup", "true");
  };

  const handleRegisterClick = () => {
    // Replace this URL with your Google Form link
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfDv7dgUC9ZcqSLtsCwEHXlGX-WCFaYwJtaWbr2aIOkeow4NA/viewform?usp=header";
    window.open(googleFormUrl, "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              duration: 0.5 
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-gray-800 transition-all duration-300 hover:rotate-90"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo Section */}
            <div className="pt-8 pb-4 px-6 flex justify-center">
              <div className="flex items-center justify-center">
                {/* Replace this with your actual logo */}
                <img 
                  src="https://i.ibb.co/8nVFNhw8/vl.png" 
                  alt="V Agency Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-8 pb-8 pt-2 text-center">
              {/* Main Heading */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Get Started
                </span>{" "}
                Together!
              </h2>

              {/* Subheading */}
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Complete our quick onboarding form to help us understand your needs and deliver the best results for your business.
              </p>

              {/* Benefits List */}
              <div className="mb-8 space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Quick & easy form - takes 3 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Personalized onboarding experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Our team will contact you within 24 hours</span>
                </div>
              </div>

              {/* Register Button */}
              <motion.button
                onClick={handleRegisterClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Complete Onboarding Form</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Privacy Text */}
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                Your information is secure with us. We'll only use it to provide you with the best service experience.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;