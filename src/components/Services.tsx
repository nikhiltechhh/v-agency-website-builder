import { motion } from "framer-motion";
import { 
  Share2, 
  FileText, 
  Palette, 
  Video, 
  Camera, 
  Search 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Social Media Marketing",
    description: "Grow your brand with strategic content and engagement across all major social platforms.",
    icon: Share2,
  },
  {
    id: "02",
    title: "Content Scripting",
    description: "Compelling scripts that capture attention and drive your message home effectively.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Graphic Designing",
    description: "Eye-catching visuals that communicate your brand identity and values beautifully.",
    icon: Palette,
  },
  {
    id: "04",
    title: "Video Editing",
    description: "Professional video production that tells your story and engages your audience.",
    icon: Video,
  },
  {
    id: "05",
    title: "Brand Shoots",
    description: "High-quality photography sessions that capture your brand's essence perfectly.",
    icon: Camera,
  },
  {
    id: "06",
    title: "SEO Services",
    description: "Boost visibility and traffic with targeted, up-to-date SEO strategies.",
    icon: Search,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-v-red" />
              <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Expert Digital Services to{" "}
              <span className="gradient-text">Grow your Brand</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              From strategy to execution, we offer a full range of digital marketing 
              and content creation services tailored to help your brand thrive online.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-v-red text-v-red font-semibold rounded-full hover:bg-v-red hover:text-background transition-all duration-300"
            >
              All Services
            </a>
          </motion.div>

          {/* Services Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-v-red/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-v-cream flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-v-yellow group-hover:to-v-red transition-all duration-300">
                      <service.icon className="w-7 h-7 text-v-red group-hover:text-background transition-colors" />
                    </div>
                    <span className="text-muted-foreground/50 font-bold text-lg">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-v-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-v-red text-v-red hover:bg-v-red hover:text-background transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
