import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

// Reviews data with South Indian names
const reviews = [
  {
    id: 1,
    name: "Rajesh",
    position: "CEO, TechVentures",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review: "Exceptional creativity and professionalism! The team delivered beyond our expectations and transformed our brand identity completely.",
  },
  {
    id: 2,
    name: "Priya",
    position: "Marketing Director, InnovateCorp",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    review: "Outstanding work! Their attention to detail and commitment to excellence made our project a huge success. Highly recommended!",
  },
  {
    id: 3,
    name: "Venkatesh Reddy",
    position: "Founder, StartupHub",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    review: "Working with this team was a game-changer for our business. They understood our vision perfectly and delivered stunning results.",
  },
  {
    id: 4,
    name: "Lakshmi",
    position: "Brand Manager, RetailPro",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    review: "Incredible talent and dedication! They brought fresh ideas to the table and executed flawlessly. Our brand has never looked better.",
  },
  {
    id: 5,
    name: "Arun Kumar",
    position: "VP Marketing, FinTech Solutions",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 4,
    review: "Professional, creative, and reliable. The team exceeded all our expectations and delivered a campaign that drove real results.",
  },
  {
    id: 6,
    name: "Divya Ramesh",
    position: "Creative Head, MediaWorks",
    image: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    review: "A pleasure to work with! Their innovative approach and seamless execution made our collaboration highly successful.",
  },
  {
    id: 7,
    name: "Suresh",
    position: "Director, E-Commerce Plus",
    image: "https://i.pravatar.cc/150?img=51",
    rating: 4,
    review: "Top-notch service from start to finish. The team's expertise and creativity helped us achieve remarkable growth in our market.",
  },
  {
    id: 8,
    name: "Anjali",
    position: "Head of Communications, GlobalTech",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    review: "Simply amazing! They transformed our vision into reality with stunning designs and strategic thinking. Can't recommend them enough!",
  },
  {
    id: 9,
    name: "Karthik",
    position: "Co-Founder, Digital Dynamics",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review: "Exceptional quality and professionalism. The team's creative solutions helped us stand out in a competitive marketplace.",
  },
  {
    id: 10,
    name: "Meera",
    position: "Operations Manager, LogiCore",
    image: "https://i.pravatar.cc/150?img=26",
    rating: 4,
    review: "Fantastic experience! Their strategic approach and creative excellence delivered results that far exceeded our initial goals.",
  },
  {
    id: 11,
    name: "Prakash",
    position: "Managing Director, BuildRight",
    image: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    review: "The best creative partner we've worked with. Their innovative ideas and flawless execution made all the difference.",
  },
  {
    id: 12,
    name: "Deepa Raghavan",
    position: "Chief Brand Officer, FashionForward",
    image: "https://i.pravatar.cc/150?img=38",
    rating: 5,
    review: "Outstanding creativity and professionalism! They understood our brand perfectly and delivered campaigns that resonated with our audience.",
  },
];

const Reviews = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  // Responsive card sizing
  const getCardWidth = () => {
    if (typeof window === 'undefined') return 380;
    if (window.innerWidth < 640) return 300; // mobile
    if (window.innerWidth < 768) return 340; // tablet
    if (window.innerWidth < 1024) return 360; // small desktop
    return 380; // large desktop
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const gap = 24; // gap between cards

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
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
    const singleSetWidth = reviews.length * (cardWidth + gap);
    
    const controls = animate(x, [-singleSetWidth, 0], {
      duration: 60,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });

    return controls.stop;
  }, [cardWidth, x]);

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
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
              Testimonials
            </span>
            <span className="w-8 h-0.5 bg-v-red" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the clients who've experienced
            the difference we make
          </p>
        </motion.div>

        {/* Draggable Infinite Reviews Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -reviews.length * (cardWidth + gap), right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              className="flex gap-6"
              whileTap={{ cursor: "grabbing" }}
            >
              {duplicatedReviews.map((review, index) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: cardWidth,
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-background rounded-2xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-16 h-16 text-v-red" />
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 relative z-10">
                      "{review.review}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-v-red/20 to-transparent rounded-full blur-md" />
                        {/* <img
                          src={review.image}
                          alt={review.name}
                          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-v-red/20"
                          draggable="false"
                        /> */}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm md:text-base">
                          {review.name}
                        </h4>
                        {/* <p className="text-xs md:text-sm text-muted-foreground">
                          {review.position}
                        </p> */}
                      </div>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-v-red/50 via-v-red to-v-red/50 rounded-b-2xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Instruction Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mt-8 text-sm text-muted-foreground"
          >
            Drag to explore • Auto-scrolling
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Reviews;