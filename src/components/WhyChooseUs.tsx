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

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
            </div>
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

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-v-cream flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-v-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-v-cream rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-v-red/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-v-red/20 rounded-full" />
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Start a{" "}
                <span className="gradient-text">New Project</span>
                {" "}Together
              </h3>
              <p className="text-muted-foreground mb-8">
                Take the first step towards revolutionizing your business with us.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-v-navy text-v-navy font-semibold rounded-full hover:bg-v-navy hover:text-background transition-all duration-300"
              >
                Get Your Marketing Plan
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
