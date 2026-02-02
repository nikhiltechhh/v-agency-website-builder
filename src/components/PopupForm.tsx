import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("popupShown");
    if (popupShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `
*New Lead from V Agency Website Popup*

*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Contact:* ${formData.phone.trim()}
*Service:* ${formData.service || "Not specified"}
*Description:* ${formData.description.trim() || "No description"}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919392978774?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp!");
    setIsOpen(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Gradient Header */}
            <div className="gradient-primary p-6 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground">
                Get a Free Consultation
              </h2>
              <p className="text-primary-foreground/80 mt-1">
                Let's grow your brand together!
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-v-red outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-v-red outline-none transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Your Contact Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-v-red outline-none transition-colors"
                required
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-v-red outline-none transition-colors text-muted-foreground"
              >
                <option value="">Select a Service</option>
                <option value="SMM">Social Media Marketing</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Graphic Design">Graphic Designing</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Brand Shoots">Brand Shoots</option>
                <option value="SEO">SEO Services</option>
              </select>
              <textarea
                placeholder="Brief Description of Your Project"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-v-red outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 gradient-primary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Submit to WhatsApp
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. We'll never spam you.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
