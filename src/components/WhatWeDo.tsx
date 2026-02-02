import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - Big Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
              What
              <br />
              <span className="text-v-red">we</span>
              <br />
              do<span className="gradient-text">?</span>
            </h2>
          </motion.div>

          {/* Center - Digital */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h3 className="text-4xl font-bold mb-4">Digital.</h3>
            <div className="w-16 h-1 gradient-primary mb-6" />
            <p className="text-xl italic text-muted-foreground mb-6">
              We create super-rich experiences online!
            </p>
            <p className="text-muted-foreground mb-8">
              V Agency is a full-scale Digital Marketing Agency based out of India. 
              We mix our years of experience and knowledge to create solutions for 
              our clients which are not only performance driven, but also creative. 
              We are running kick-ass digital campaigns for our clients, even as you 
              read this!
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-foreground font-bold hover:text-v-red transition-colors group"
            >
              ABOUT US
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right - And More Digital */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h3 className="text-4xl font-bold mb-4">
              And More
              <br />
              Digital.
            </h3>
            <div className="w-16 h-1 bg-v-red mb-6" />
            <p className="text-xl italic text-muted-foreground mb-6">
              Marketing brands with care
            </p>
            <p className="text-muted-foreground mb-8">
              What is marketing if it is not performance driven? We create digital 
              experiences which stick with audiences and also reach the end objective. 
              Trust us with making your brand visible and desired, with highly focused 
              performance marketing.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-v-red font-bold hover:text-foreground transition-colors group"
            >
              OUR SERVICES
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
