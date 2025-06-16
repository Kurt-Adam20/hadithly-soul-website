
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Smartphone, Bell, Palette, Globe, Share2, Shield, Download, Apple } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-[#F4ECD8]/20 text-[#F4ECD8] border-[#F4ECD8]/30">
            Daily Islamic Reminders
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#F4ECD8] bg-clip-text text-transparent">
            Hadithly
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light">
            Daily Islamic Reminders for the Soul
          </p>
          
          <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Receive authentic Hadiths every day to stay inspired and spiritually uplifted. 
            Transform your daily routine with timeless wisdom from Prophet Muhammad (PBUH).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-8 py-6 rounded-2xl font-semibold flex items-center gap-3">
              <Apple className="w-6 h-6" />
              Download for iOS
            </Button>
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-8 py-6 rounded-2xl font-semibold flex items-center gap-3">
              <Download className="w-6 h-6" />
              Get on Google Play
            </Button>
          </div>
          
          {/* App Mockup */}
          <div className="max-w-xs mx-auto">
            <div className="bg-gradient-to-b from-[#F4ECD8]/20 to-transparent p-8 rounded-3xl">
              <div className="bg-[#1A2332] rounded-2xl p-6 shadow-2xl">
                <Smartphone className="w-full h-48 text-[#F4ECD8]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#1A2332]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Features that <span className="text-[#F4ECD8]">Inspire</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed with care to make Islamic learning a beautiful part of your daily life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20 hover:bg-[#1A2332]/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F4ECD8]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-[#F4ECD8]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Daily Notifications</h3>
                <p className="text-gray-400 leading-relaxed">
                  Receive beautiful hadiths at the perfect time each day to keep your heart connected to Islamic wisdom.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20 hover:bg-[#1A2332]/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F4ECD8]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-[#F4ECD8]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Light & Dark Mode</h3>
                <p className="text-gray-400 leading-relaxed">
                  Switch between elegant themes that adapt to your preferences and time of day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20 hover:bg-[#1A2332]/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F4ECD8]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#F4ECD8]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Multi-Language</h3>
                <p className="text-gray-400 leading-relaxed">
                  Access authentic hadiths in multiple languages to connect with the teachings in your preferred language.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20 hover:bg-[#1A2332]/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F4ECD8]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-8 h-8 text-[#F4ECD8]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Easy Sharing</h3>
                <p className="text-gray-400 leading-relaxed">
                  Share meaningful hadiths with family and friends with a single tap to spread Islamic wisdom.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20 hover:bg-[#1A2332]/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F4ECD8]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#F4ECD8]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Privacy First</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your privacy is sacred. We don't collect or share any personal data. All content works offline.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20 hover:bg-[#1A2332]/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#F4ECD8]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-[#F4ECD8]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Elegant Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  Beautiful typography and thoughtful design make reading hadiths a peaceful, inspiring experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Preview Section */}
      <section className="py-16 px-4 bg-[#1A2332]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your <span className="text-[#F4ECD8]">Privacy</span> Matters
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            We believe your spiritual journey should remain private. Hadithly works completely offline 
            and never collects or shares your personal information.
          </p>
          <Link to="/privacy">
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-8 py-6 rounded-2xl font-semibold">
              Read Full Privacy Policy
            </Button>
          </Link>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-[#F4ECD8]">Journey</span> Today
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of Muslims who start each day with authentic Islamic wisdom
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-8 py-6 rounded-2xl font-semibold flex items-center gap-3">
              <Apple className="w-6 h-6" />
              Download for iOS
            </Button>
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-8 py-6 rounded-2xl font-semibold flex items-center gap-3">
              <Download className="w-6 h-6" />
              Get on Google Play
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
