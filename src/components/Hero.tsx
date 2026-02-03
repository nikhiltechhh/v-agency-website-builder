import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background geometric shapes */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-1/2 h-full bg-gradient-to-bl from-v-yellow via-v-orange to-v-red opacity-90 clip-diagonal" />
      </div> */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1"
          >
            {/* Decorative wave */}
            {/* <div className="flex gap-1 mb-6">
              <svg className="w-12 h-4" viewBox="0 0 48 16">
                <path
                  d="M0 8 Q6 0, 12 8 T24 8 T36 8 T48 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground"
                />
              </svg>
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transforming{" "}
              <span className="gradient-text">Strategy</span>
              <br />
              Into Results.
            </h1>

            {/* Decorative wave */}
            {/* <div className="flex gap-1 mb-8 justify-end max-w-md">
              <svg className="w-16 h-4" viewBox="0 0 64 16">
                <path
                  d="M0 8 Q8 0, 16 8 T32 8 T48 8 T64 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground"
                />
              </svg>
            </div> */}

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Backed by ₹15 Cr+ in managed ad spend, we bridge the gap between creative vision and measurable ROI. V Agency engineers campaigns that don't just look expensive—they scale revenue.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Our Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Social links sidebar */}
           <div className="hidden lg:flex flex-col gap-3 fixed left-4 top-1/2 -translate-y-1/2 z-50">
  <a
    href="https://www.facebook.com/profile.php?id=61576703971924"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-v-navy text-background rounded-md hover:scale-110 transition-transform"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </a>
  <a
    href="https://www.instagram.com/vagency_"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-v-red text-background rounded-md hover:scale-110 transition-transform"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  </a>
  <a
    href="https://wa.me/919392978774"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-md hover:scale-110 transition-transform"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  </a>
</div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2 relative"
          >
            <div className="relative z-10">
              <img
                src="https://i.ibb.co/8nFgw3Nn/metaaa.png"
                alt="V Agency Team"
                className="w-full max-w-sm mx-auto lg:max-w-md mb-8"
              />

              {/* Statistics below image */}
              <div className="space-y-5 text-left">
                <div className="flex flex-col gap-2">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl lg:text-4xl drop-shadow-2xl leading-tight">₹15 Cr+ Ad Spend Managed</span>
                  <span className="text-muted-foreground text-base sm:text-lg pl-1">Strategies built on massive data.</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl lg:text-4xl drop-shadow-2xl leading-tight">10,000+ A/B Tests</span>
                  <span className="text-muted-foreground text-base sm:text-lg pl-1">Run Ruthless optimization for max ROI.</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl lg:text-4xl drop-shadow-2xl leading-tight">50+ Brands Scaled</span>
                  <span className="text-muted-foreground text-base sm:text-lg pl-1">From startups to market leaders.</span>
                </div>
              </div>

              {/* Floating badge */}
           
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom clip path style */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;