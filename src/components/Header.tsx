
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D3A4A]/90 backdrop-blur-lg border-b border-[#F4ECD8]/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-white tracking-tight hover:text-[#F4ECD8] transition-colors">
          Hadithly
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">
            Home
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors font-medium">
            Privacy
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 rounded-2xl px-8 py-6 font-semibold transition-all hover:scale-105">
          Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;
