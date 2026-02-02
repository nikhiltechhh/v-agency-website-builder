import { motion } from "framer-motion";
import { 
  Users, 
  Building, 
  ShoppingCart, 
  Film, 
  Landmark, 
  Building2, 
  GraduationCap, 
  Globe, 
  Heart, 
  Ticket, 
  UtensilsCrossed, 
  Briefcase 
} from "lucide-react";

const industries = [
  { name: "Social Networking", icon: Users, color: "bg-industry-cyan" },
  { name: "Real Estate", icon: Building, color: "bg-industry-yellow" },
  { name: "Ecommerce", icon: ShoppingCart, color: "bg-industry-mint" },
  { name: "Video", icon: Film, color: "bg-industry-peach" },
  { name: "Banking", icon: Landmark, color: "bg-industry-lime" },
  { name: "Enterprise", icon: Building2, color: "bg-industry-pink" },
  { name: "Education", icon: GraduationCap, color: "bg-industry-lavender" },
  { name: "Tour and Travels", icon: Globe, color: "bg-industry-green" },
  { name: "Healthcare", icon: Heart, color: "bg-industry-cyan" },
  { name: "Event & Ticket", icon: Ticket, color: "bg-industry-blue" },
  { name: "Restaurant", icon: UtensilsCrossed, color: "bg-industry-cream" },
  { name: "Business Consultant", icon: Briefcase, color: "bg-industry-mint" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 gradient-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                Industries We Work For
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Some of our favorite{" "}
              <span className="gradient-text">Industries & Niches</span>
            </h2>
          </motion.div>

          {/* Industries Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${industry.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <industry.icon className="w-10 h-10 text-v-navy" />
                  <span className="font-semibold text-v-navy text-sm">
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
