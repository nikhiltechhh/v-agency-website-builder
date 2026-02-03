import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Image imports
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";
import img17 from "../assets/17.jpeg";
import img18 from "../assets/18.jpeg";
import img19 from "../assets/19.jpeg";
import img20 from "../assets/20.jpeg";
import img21 from "../assets/21.jpeg";
import img22 from "../assets/22.jpeg";
import img23 from "../assets/23.jpeg";
import img24 from "../assets/24.jpeg";
import img25 from "../assets/25.jpeg";
import img26 from "../assets/26.jpeg";
import img27 from "../assets/27.jpeg";
import img28 from "../assets/28.jpeg";

// Client logos data
const clientLogos = [
  { id: 1, name: "Client 1", logo: img1 },
  { id: 2, name: "Client 2", logo: img2 },
  { id: 3, name: "Client 3", logo: img3 },
  { id: 4, name: "Client 4", logo: img4 },
  { id: 5, name: "Client 5", logo: img5 },
  { id: 6, name: "Client 6", logo: img6 },
  { id: 7, name: "Client 7", logo: img7 },
  { id: 8, name: "Client 8", logo: img8 },
  { id: 9, name: "Client 9", logo: img9 },
  { id: 10, name: "Client 10", logo: img10 },
  { id: 11, name: "Client 11", logo: img11 },
  { id: 12, name: "Client 12", logo: img12 },
  { id: 13, name: "Client 13", logo: img13 },
  { id: 14, name: "Client 14", logo: img14 },
  { id: 15, name: "Client 15", logo: img15 },
  { id: 16, name: "Client 16", logo: img16 },
  { id: 17, name: "Client 17", logo: img17 },
  { id: 18, name: "Client 18", logo: img18 },
  { id: 19, name: "Client 19", logo: img19 },
  { id: 20, name: "Client 20", logo: img20 },
  { id: 21, name: "Client 21", logo: img21 },
  { id: 22, name: "Client 22", logo: img22 },
  { id: 23, name: "Client 23", logo: img23 },
  { id: 24, name: "Client 24", logo: img24 },
  { id: 25, name: "Client 25", logo: img25 },
  { id: 26, name: "Client 26", logo: img26 },
  { id: 27, name: "Client 27", logo: img27 },
  { id: 28, name: "Client 28", logo: img28 }
];

const Clients = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // Responsive logo sizing
  const getLogoSize = () => {
    if (typeof window === 'undefined') return 140;
    if (window.innerWidth < 640) return 100; // mobile
    if (window.innerWidth < 768) return 120; // tablet
    if (window.innerWidth < 1024) return 130; // small desktop
    return 140; // large desktop
  };

  const [logoSize, setLogoSize] = useState(getLogoSize());
  const gap = 24; // gap between logos

  useEffect(() => {
    const handleResize = () => {
      setLogoSize(getLogoSize());
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const singleSetWidth = clientLogos.length * (logoSize + gap);
    
    const controls = animate(x, [-singleSetWidth, 0], {
      duration: 40,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });

    return controls.stop;
  }, [logoSize, x]);

  return (
    <section className="py-20 gradient-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-v-red" />
            <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
              Our Partners
            </span>
            <span className="w-8 h-0.5 bg-v-red" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Brands Who <span className="gradient-text">Trust Us</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional creative
            solutions and drive meaningful results
          </p>
        </motion.div>

        {/* Draggable Infinite Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10 pointer-events-none" /> */}

          <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -clientLogos.length * (logoSize + gap), right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              className="flex gap-6"
              whileTap={{ cursor: "grabbing" }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 group"
                  style={{
                    width: logoSize,
                    height: logoSize,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative bg-background rounded-xl p-4 md:p-5 h-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center shadow-sm hover:shadow-md">
                    
                    {/* Subtle hover highlight */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-v-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <img
                      src={client.logo}
                      alt={client.name}
                      className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 select-none pointer-events-none"
                      draggable="false"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Instruction Text */}
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mt-8 text-sm text-muted-foreground"
          >
            Drag to explore • Auto-scrolling
          </motion.p> */}
        </div>

      </div>
    </section>
  );
};

export default Clients;