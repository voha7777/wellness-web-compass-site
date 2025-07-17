
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-health-600 to-medGreen-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">HS</span>
              </div>
              <span className="text-xl font-bold text-gray-800">HealthSurvey</span>
            </Link>
            <p className="text-gray-600 mb-4">
              HealthSurvey.org provides reliable, comprehensive health surveys to help you make informed decisions about your well-being.
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

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Health Surveys</h3>
            <ul className="space-y-2">
              <li><Link to="/surveys/mental-health" className="text-gray-600 hover:text-health-600 transition-colors">Mental Health</Link></li>
              <li><Link to="/surveys/fitness" className="text-gray-600 hover:text-health-600 transition-colors">Fitness</Link></li>
              <li><Link to="/surveys/nutrition" className="text-gray-600 hover:text-health-600 transition-colors">Nutrition</Link></li>
              <li><Link to="/surveys/sleep" className="text-gray-600 hover:text-health-600 transition-colors">Sleep</Link></li>
              <li><Link to="/surveys/chronic-conditions" className="text-gray-600 hover:text-health-600 transition-colors">Chronic Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/articles" className="text-gray-600 hover:text-health-600 transition-colors">Articles</Link></li>
              <li><Link to="/resources/research" className="text-gray-600 hover:text-health-600 transition-colors">Research</Link></li>
              <li><Link to="/resources/news" className="text-gray-600 hover:text-health-600 transition-colors">Health News</Link></li>
              <li><Link to="/resources/experts" className="text-gray-600 hover:text-health-600 transition-colors">Expert Opinions</Link></li>
              <li><Link to="/resources/faq" className="text-gray-600 hover:text-health-600 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-health-600 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-health-600 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-health-600 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-health-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} HealthSurvey.org. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-500 hover:text-health-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
