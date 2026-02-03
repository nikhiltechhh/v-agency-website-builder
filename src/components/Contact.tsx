import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const branches = [
  {
    city: "Hyderabad",
    address: "Plot 158C, Addagutta Society, Kukatpally, Hyderabad 500085",
  },
  {
    city: "Faridabad",
    address: "Green Field Colony, Faridabad, 121010",
  },
  {
    city: "Visakhapatnam",
    address: "Bhagat Singh Nagar, Near Vizag International Airport, Visakhapatnam 530027",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `
*New Inquiry from V Agency Website*

*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Phone:* ${formData.phone.trim()}
*Service:* ${formData.service || "Not specified"}
*Message:* ${formData.message.trim() || "No message"}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919392978774?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp!");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 gradient-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 break-words"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Interested in working
              <br />
              with us?
            </motion.h2>
            <motion.p 
              className="text-muted-foreground uppercase tracking-wider mb-8 sm:mb-10 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's talk and get started
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <motion.div 
                className="bg-v-pink/50 rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 w-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02, x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-v-pink flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-v-red" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                    Shoot us a mail
                  </p>
                  <a href="mailto:contact@vagency.in" className="font-bold text-foreground hover:text-v-red transition-colors text-sm sm:text-base break-all">
                    contact@vagency.in
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="bg-v-pink/50 rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 w-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02, x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-v-pink flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-v-red" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                    Our Contact Number
                  </p>
                  <a href="tel:+919392978774" className="font-bold text-foreground hover:text-v-red transition-colors text-sm sm:text-base">
                    (+91) 93929 78774
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Branches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full"
            >
              <h3 className="font-bold mb-4 flex items-center gap-2 text-base sm:text-lg">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-v-red flex-shrink-0" />
                Our Branches
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {branches.map((branch, index) => (
                  <motion.div 
                    key={branch.city} 
                    className="text-xs sm:text-sm text-muted-foreground break-words"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <span className="font-semibold text-foreground">{branch.city}:</span>{" "}
                    {branch.address}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-card rounded-3xl p-6 sm:p-8 shadow-xl border border-border w-full"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }}
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <motion.input
                  type="text"
                  placeholder="Enter your name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border-b-2 border-border focus:border-v-red outline-none transition-colors text-sm sm:text-base"
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Enter your email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border-b-2 border-border focus:border-v-red outline-none transition-colors text-sm sm:text-base"
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <motion.input
                  type="tel"
                  placeholder="Enter phone no. *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border-b-2 border-border focus:border-v-red outline-none transition-colors text-sm sm:text-base"
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border-b-2 border-border focus:border-v-red outline-none transition-colors text-muted-foreground text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <option value="">Select a Service</option>
                  <option value="Performance & Growth">Performance & Growth</option>
                  <option value="Creative Studio">Creative Studio</option>
                  <option value="Brand Authority">Brand Authority</option>
                  <option value="Tech & Automation">Tech & Automation</option>

                </motion.select>
              </div>
              <motion.textarea
                placeholder="Requirement *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border-b-2 border-border focus:border-v-red outline-none transition-colors resize-none mb-6 sm:mb-8 text-sm sm:text-base"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileFocus={{ scale: 1.01 }}
              />

              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 gradient-primary text-primary-foreground font-bold rounded-full hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>

              <motion.p 
                className="text-xs sm:text-sm text-muted-foreground text-center mt-3 sm:mt-4 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="break-words">We hate spam, and we respect your privacy.</span>
              </motion.p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;