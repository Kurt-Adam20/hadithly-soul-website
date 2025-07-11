
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A2332] py-12 px-4 border-t border-[#F4ECD8]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#F4ECD8] mb-4">Hadithly</h3>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Daily Islamic reminders for the soul. Authentic hadiths delivered beautifully 
              to inspire and uplift your spiritual journey.
            </p>
            <a 
              href="https://www.instagram.com/hadithly.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Instagram className="w-5 h-5" />
              Follow us on Instagram
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                Home
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                Blog
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                Terms of Use
              </Link>
              <Link to="/legal" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                Legal Notice
              </Link>
              <Link to="/conditions" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                General Conditions
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2">
              <a href="mailto:support@hadithly.app" className="block text-gray-400 hover:text-[#F4ECD8] transition-colors">
                support@hadithly.app
              </a>
              <p className="text-gray-400 text-sm">
                We're here to help with any questions
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#F4ECD8]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Hadithly. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/hadithly.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F4ECD8] transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F4ECD8] transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F4ECD8] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
