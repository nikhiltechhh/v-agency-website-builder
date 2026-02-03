import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Onboard = () => {
  const handleRegisterClick = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfDv7dgUC9ZcqSLtsCwEHXlGX-WCFaYwJtaWbr2aIOkeow4NA/viewform?usp=header";
    window.location.href = googleFormUrl;
  };

  const handleBackToHome = () => {
    // Update this with your actual home route
    window.location.href = "/";
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Back to Home Button */}
      <motion.button
        onClick={handleBackToHome}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-orange-500 group-hover:-translate-x-1 transition-transform" />
        <span className="text-gray-700 font-medium hidden sm:inline">
          Back to Home
        </span>
      </motion.button>
        
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Logo Section */}
        <div className="pt-8 pb-4 px-6 flex justify-center">
          <img
            src="https://i.ibb.co/8nVFNhw8/vl.png"
            alt="V Agency Logo"
            className="w-28 h-28 object-contain"
          />
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
            Complete our quick onboarding form to help us understand your needs
            and deliver the best results for your business.
          </p>

          {/* Benefits List */}
          <div className="mb-8 space-y-3 text-left">
            {[
              "Quick & easy form – takes 3 minutes",
              "Personalized onboarding experience",
              "Our team will contact you within 24 hours",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {text}
                </span>
              </div>
            ))}
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
            Your information is secure with us. We'll only use it to provide you
            with the best service experience.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-3xl -z-10" />
      </motion.div>
    </section>
  );
};

export default Onboard;