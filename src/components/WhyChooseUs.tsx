import { motion } from "framer-motion";
import { Monitor, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "5+ Years Of Experience",
    description: "V Agency has been in the market for more than 5 years, and our expert team leads have 10+ years of experience in the industry.",
  },
  {
    icon: Users,
    title: "90% Customer Satisfaction",
    description: "We work for the satisfaction of the client and support as much as possible from all the different aspects.",
  },
  {
    icon: Clock,
    title: "24/7 Hours Support",
    description: "We assign a dedicated point of contact who is available to answer all your queries 24×7.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What Makes{" "}
              <span className="gradient-text">V Agency</span>
              <br />
              Different from Others
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              We are a team of experienced marketing professionals who believe in 
              delivering results with an accurate Digital Marketing strategy that 
              will outrank your competitors.
            </p>

            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={featureVariants}
                  className="flex gap-5 group"
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-v-cream flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-v-yellow group-hover:to-v-red transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <feature.icon className="w-7 h-7 text-v-red group-hover:text-background transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-v-red transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <motion.div 
              className="bg-v-cream rounded-3xl p-12 text-center relative overflow-hidden"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Decorative circles */}
              <motion.div 
                className="absolute top-4 right-4 w-24 h-24 border-2 border-v-red/20 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-16 h-16 border-2 border-v-red/20 rounded-full"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Start a{" "}
                <span className="gradient-text">New Project</span>
                {" "}Together
              </h3>
              <p className="text-muted-foreground mb-8">
                Take the first step towards revolutionizing your business with us.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-v-navy text-v-navy font-semibold rounded-full hover:bg-v-navy hover:text-background transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Marketing Plan
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
