import { Link } from "react-router-dom";
import logo from "@/assets/v-logo.png";

const Footer = () => {
  return (
    <footer className="bg-v-navy text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="V Agency" className="h-16 w-auto brightness-110" />
            </Link>
            <p className="text-background/70 mb-6">
              V Agency is a full-scale Digital Marketing Agency helping brands 
              grow with powerful strategies and creative solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61576703971924"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-background/10 rounded-lg hover:bg-v-red transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vagency_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-background/10 rounded-lg hover:bg-v-red transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Industries", "Work", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "/" : link === "Work" ? "/work" : `#${link.toLowerCase()}`}
                    className="text-background/70 hover:text-v-yellow transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Social Media Marketing",
                "Content Creation",
                "Graphic Designing",
                "Video Editing",
                "Brand Shoots",
                "SEO Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-v-yellow transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-background/70">
              <p>
                <strong className="text-background">Phone:</strong>
                <br />
                <a href="tel:+919392978774" className="hover:text-v-yellow transition-colors">
                  +91 93929 78774
                </a>
              </p>
              <p>
                <strong className="text-background">Hyderabad:</strong>
                <br />
                Plot 158C, Addagutta Society, Kukatpally, 500085
              </p>
              <p>
                <strong className="text-background">Faridabad:</strong>
                <br />
                Green Field Colony, 121010
              </p>
              <p>
                <strong className="text-background">Visakhapatnam:</strong>
                <br />
                Bhagat Singh Nagar, Near Vizag International Airport, 530027
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center text-background/50">
          <p>© {new Date().getFullYear()} V Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
