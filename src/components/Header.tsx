
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D3A4A]/95 backdrop-blur-sm border-b border-[#F4ECD8]/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#F4ECD8]">
          Hadithly
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-[#F4ECD8] transition-colors">
            Home
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-[#F4ECD8] transition-colors">
            Privacy
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-[#F4ECD8] transition-colors">
            Contact
          </Link>
        </nav>

        <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 rounded-xl px-6">
          Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;
