import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import Clients from "@/components/Clients";
import Reviews from "@/components/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Clients />
      <Reviews />
          <Contact />
          <Footer />
      <PopupForm />
    </div>
  );
};

export default Index;
