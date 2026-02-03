import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  TrendingUp,
  Clapperboard,
  Award,
  Zap,
  X
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Performance & Growth",
    subtitle: "The engine that scales your revenue.",
    description: "Data-driven growth strategies backed by ₹15 Cr+ in managed ad spend. We architect conversion funnels that turn clicks into customers, leveraging battle-tested frameworks that have generated millions in revenue for our clients.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    features: [
      "Precision Meta Ads (Leveraging ₹15 Cr+ Ad Spend Data)",
      "Scientific A/B Testing (Creative & Audience Iteration)",
      "Hyper-Detailed Targeting (Behavioral & Interest Layering)",
      "Google PPC & Search (High-Intent Capture)",
      "Conversion Funnel Architecture"
    ],
    benefits: [
      "3-5x ROAS improvement within 90 days",
      "Predictable, scalable customer acquisition",
      "Real-time performance dashboards",
      "Lower CAC through continuous optimization"
    ],
    process: [
      "Audit & Strategy - Deep dive into your current funnel",
      "Campaign Architecture - Build high-converting ad systems",
      "Launch & Test - Scientific iteration at scale",
      "Scale & Optimize - Turn winners into profit machines"
    ],
    metrics: {
      experience: "₹15 Cr+",
      label: "Ad Spend Managed"
    }
  },
  {
    id: "02",
    title: "Creative Studio",
    subtitle: "Visuals engineered to stop the scroll.",
    description: "Premium content creation that captures attention in milliseconds. From viral scripts to cinematic brand films, we craft visuals that convert. Our creative team combines storytelling mastery with performance marketing principles to create content that doesn't just look good—it sells.",
    icon: Clapperboard,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    features: [
      "Ad Film Production & Brand Shoots",
      "Viral Scripting & Storyboarding",
      "High-Conversion Video Editing (Reels/Shorts)",
      "Premium Graphic Design (Social & Ad Assets)",
      "Motion Graphics & Animation",
      "Brand Intros & Motion Identity (Logo Reveals & Animations)"
    ],
    benefits: [
      "Scroll-stopping content that drives engagement",
      "Professional brand aesthetics across all platforms",
      "Fast turnaround without compromising quality",
      "Content libraries optimized for paid & organic"
    ],
    process: [
      "Creative Brief - Understand your brand DNA",
      "Concept Development - Scripts, storyboards, style frames",
      "Production - Shoot, edit, animate with precision",
      "Delivery & Iteration - Refinement based on performance"
    ],
    metrics: {
      experience: "500+",
      label: "Videos Produced"
    }
  },
  {
    id: "03",
    title: "Brand Authority",
    subtitle: "Building trust that lowers your acquisition costs.",
    description: "Strategic brand positioning that transforms your social presence into a trust-building machine. Authority reduces friction, increases conversions, and creates a moat around your business. We help you become the obvious choice in your category through consistent, strategic brand building.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    features: [
      "360° Social Media Management (SMM)",
      "Content Strategy & Calendars",
      "Search Engine Optimization (SEO)",
      "Brand Identity & Positioning",
      "Community Management"
    ],
    benefits: [
      "Establish thought leadership in your industry",
      "Higher conversion rates from warm audiences",
      "Reduced reliance on cold paid traffic",
      "Long-term brand equity that compounds over time"
    ],
    process: [
      "Brand Audit - Assess current positioning & perception",
      "Strategy Framework - Define voice, values, visual identity",
      "Content Engine - Deploy consistent, valuable content",
      "Community Growth - Engage, nurture, convert"
    ],
    metrics: {
      experience: "50+",
      label: "Brands Managed"
    }
  },
  {
    id: "04",
    title: "Tech & Automation",
    subtitle: "Systems that nurture leads while you sleep.",
    description: "Intelligent automation that works 24/7. Connect every touchpoint, nurture every lead, and never miss an opportunity with our sales enablement systems. We build the infrastructure that turns your marketing into a predictable revenue machine, eliminating manual work and human error.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    features: [
      "WhatsApp API Automation",
      "CRM Integration & Lead Flow",
      "Automated Nurture Sequences",
      "Sales Enablement Setup"
    ],
    benefits: [
      "Instant lead response (under 60 seconds)",
      "Zero leads slip through the cracks",
      "Automated follow-ups that convert",
      "Complete visibility into your sales pipeline"
    ],
    process: [
      "System Mapping - Understand your current workflow",
      "Integration Setup - Connect all your tools seamlessly",
      "Automation Build - Create intelligent nurture sequences",
      "Training & Handoff - Your team becomes power users"
    ],
    metrics: {
      experience: "10,000+",
      label: "Messages Automated Daily"
    }
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const modalVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span 
                className="w-8 h-0.5 bg-v-red"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
              <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                Our Services
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Expert Digital Services to{" "}
              <span className="gradient-text">Grow your Brand</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              From strategy to execution, we offer a full range of digital marketing 
              and content creation services tailored to help your brand thrive online.
            </p>
            {/* <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-v-red text-v-red font-semibold rounded-full hover:bg-v-red hover:text-background transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              All Services
            </motion.a> */}
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedService(service)}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-v-red/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-v-cream flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-v-yellow group-hover:to-v-red transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <service.icon className="w-7 h-7 text-v-red group-hover:text-background transition-colors" />
                    </motion.div>
                    <span className="text-muted-foreground/50 font-bold text-lg">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-v-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-medium">
                    {service.subtitle}
                  </p>
                  <motion.div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-v-red text-v-red group-hover:bg-v-red group-hover:text-background transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedService(null)}
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-card border-2 border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-v-red hover:text-background hover:border-v-red transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Image Header */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <motion.img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    
                    {/* Floating Metrics Badge */}
                    <motion.div
                      className="absolute top-6 right-6 bg-background/90 backdrop-blur-md border-2 border-v-red rounded-2xl px-6 py-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-2xl font-bold text-v-red">{selectedService.metrics.experience}</div>
                      <div className="text-xs text-muted-foreground font-semibold">{selectedService.metrics.label}</div>
                    </motion.div>

                    {/* Service Icon Badge */}
                    <motion.div
                      className="absolute bottom-6 left-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center shadow-xl">
                        <selectedService.icon className="w-10 h-10 text-background" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    {/* Header Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-8"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-0.5 bg-v-red" />
                        <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                          Service {selectedService.id}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">
                        {selectedService.title}
                      </h3>
                      
                      <p className="text-xl text-v-red font-semibold mb-6">
                        {selectedService.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {selectedService.description}
                      </p>
                    </motion.div>

                    {/* Two Column Layout for Features & Benefits */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-v-cream/30 rounded-2xl p-6 border border-border"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center">
                            <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg">What's Included</h4>
                        </div>
                        <div className="space-y-3">
                          {selectedService.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-v-red mt-2 flex-shrink-0" />
                              <p className="text-sm text-foreground leading-relaxed">{feature}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Benefits */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-v-red/5 to-v-yellow/5 rounded-2xl p-6 border border-v-red/20"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-v-red flex items-center justify-center">
                            <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg">Key Benefits</h4>
                        </div>
                        <div className="space-y-3">
                          {selectedService.benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <svg className="w-5 h-5 text-v-red mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <p className="text-sm text-foreground font-medium leading-relaxed">{benefit}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Process Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-8"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center">
                          <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg">Our Process</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedService.process.map((step, index) => {
                          const [title, description] = step.split(' - ');
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="relative bg-card border border-border rounded-xl p-5 hover:border-v-red/30 transition-all duration-300"
                            >
                              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center text-background font-bold text-sm shadow-lg">
                                {index + 1}
                              </div>
                              <h5 className="font-bold text-base mb-2 text-v-red">{title}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-v-cream/50 to-v-yellow/20 rounded-2xl p-8 border border-v-red/20"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Ready to Get Started?</h4>
                          <p className="text-muted-foreground">Let's discuss how we can help grow your business.</p>
                        </div>
                        <motion.a
                          href="#contact"
                          onClick={() => setSelectedService(null)}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-v-yellow to-v-red text-background font-semibold rounded-full hover:shadow-lg hover:shadow-v-red/30 transition-all duration-300 whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Book a Call
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;