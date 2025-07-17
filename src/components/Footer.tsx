
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-health-600 to-medGreen-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">HS</span>
              </div>
              <span className="text-xl font-bold text-gray-800">HealthSurvey</span>
            </Link>
            <p className="text-gray-600 mb-4">
              HealthSurvey.org provides reliable, comprehensive health information, surveys, and resources to help you make informed decisions about your well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-health-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-health-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-health-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-health-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Diseases & Conditions */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Diseases & Conditions</h3>
            <ul className="space-y-2">
              <li><Link to="/diseases/common" className="text-gray-600 hover:text-health-600 transition-colors">Common Conditions</Link></li>
              <li><Link to="/diseases/symptoms" className="text-gray-600 hover:text-health-600 transition-colors">Symptoms</Link></li>
              <li><Link to="/diseases/chronic" className="text-gray-600 hover:text-health-600 transition-colors">Chronic Diseases</Link></li>
              <li><Link to="/diseases/all" className="text-gray-600 hover:text-health-600 transition-colors">All Diseases A-Z</Link></li>
            </ul>
          </div>

          {/* Medications & Drugs */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Medications & Drugs</h3>
            <ul className="space-y-2">
              <li><Link to="/medications/index" className="text-gray-600 hover:text-health-600 transition-colors">Drug Index A-Z</Link></li>
              <li><Link to="/medications/prescription" className="text-gray-600 hover:text-health-600 transition-colors">Prescription Drugs</Link></li>
              <li><Link to="/medications/otc" className="text-gray-600 hover:text-health-600 transition-colors">OTC Medicines</Link></li>
              <li><Link to="/medications/interactions" className="text-gray-600 hover:text-health-600 transition-colors">Drug Interactions</Link></li>
            </ul>
          </div>

          {/* Health Articles */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Health Articles</h3>
            <ul className="space-y-2">
              <li><Link to="/articles/latest" className="text-gray-600 hover:text-health-600 transition-colors">Latest Articles</Link></li>
              <li><Link to="/articles/featured" className="text-gray-600 hover:text-health-600 transition-colors">Featured Articles</Link></li>
              <li><Link to="/articles/news" className="text-gray-600 hover:text-health-600 transition-colors">Health News</Link></li>
              <li><Link to="/articles/topics" className="text-gray-600 hover:text-health-600 transition-colors">Topics A-Z</Link></li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Tools & Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/surveys/assessments" className="text-gray-600 hover:text-health-600 transition-colors">Health Assessments</Link></li>
              <li><Link to="/tools/bmi-calculator" className="text-gray-600 hover:text-health-600 transition-colors">BMI Calculator</Link></li>
              <li><Link to="/tools/symptom-checker" className="text-gray-600 hover:text-health-600 transition-colors">Symptom Checker</Link></li>
              <li><Link to="/tools/drug-interactions" className="text-gray-600 hover:text-health-600 transition-colors">Drug Interaction Tool</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} HealthSurvey.org. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
