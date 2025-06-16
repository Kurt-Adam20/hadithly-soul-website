import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Smartphone, Bell, Palette, Globe, Share2, Shield, Apple, CheckCircle, Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-8 bg-[#F4ECD8]/10 text-[#F4ECD8] border-[#F4ECD8]/20 text-sm px-4 py-2">
            ✨ Available on iOS
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F4ECD8] to-white bg-clip-text text-transparent">
              Hadithly
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 text-[#F4ECD8]/90 font-light tracking-wide">
            Daily Islamic Reminders for the Soul
          </p>
          
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your daily routine with authentic Hadiths from Prophet Muhammad (PBUH). 
            Receive beautiful, inspirational wisdom every day to keep your heart connected to Islamic teachings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-10 py-7 rounded-2xl font-semibold flex items-center gap-3 transition-all hover:scale-105">
              <Apple className="w-6 h-6" />
              Download for iOS
            </Button>
            <p className="text-gray-400 text-sm self-center px-4">
              Available exclusively on the App Store
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4ECD8] mb-2">1000+</div>
              <div className="text-gray-400 text-sm">Authentic Hadiths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4ECD8] mb-2">5+</div>
              <div className="text-gray-400 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4ECD8] mb-2">100%</div>
              <div className="text-gray-400 text-sm">Privacy First</div>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="max-w-sm mx-auto">
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Designed for <span className="text-[#F4ECD8]">Daily Inspiration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Every feature thoughtfully crafted to make Islamic learning a beautiful part of your daily life on iOS
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-500 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
              <CardContent className="p-10 text-center">
                <div className="bg-[#F4ECD8]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Bell className="w-10 h-10 text-[#F4ECD8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Daily Notifications</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Start each day with authentic wisdom delivered at the perfect moment to inspire your spiritual journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-500 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
              <CardContent className="p-10 text-center">
                <div className="bg-[#F4ECD8]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Palette className="w-10 h-10 text-[#F4ECD8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Beautiful Design</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Elegant typography and thoughtful design make reading hadiths a peaceful, inspiring experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-500 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
              <CardContent className="p-10 text-center">
                <div className="bg-[#F4ECD8]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Globe className="w-10 h-10 text-[#F4ECD8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Multi-Language</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Access authentic hadiths in multiple languages to connect with teachings in your preferred language.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-500 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
              <CardContent className="p-10 text-center">
                <div className="bg-[#F4ECD8]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Share2 className="w-10 h-10 text-[#F4ECD8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Easy Sharing</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Share meaningful hadiths with family and friends instantly to spread Islamic wisdom and inspiration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-500 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
              <CardContent className="p-10 text-center">
                <div className="bg-[#F4ECD8]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-10 h-10 text-[#F4ECD8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Privacy First</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Your spiritual journey remains private. No data collection, no tracking. Everything works offline.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-500 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
              <CardContent className="p-10 text-center">
                <div className="bg-[#F4ECD8]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Smartphone className="w-10 h-10 text-[#F4ECD8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Works Offline</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  All content available without internet connection. Perfect for prayer times, travel, or quiet moments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="py-24 px-4 bg-[#1A2332]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              What Our <span className="text-[#F4ECD8]">Users Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Join thousands of believers who have transformed their daily routine with authentic Islamic wisdom
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F4ECD8] fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#F4ECD8] mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "This app has truly changed my daily routine. Starting each day with authentic hadiths brings so much peace and guidance to my life."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F4ECD8]/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#F4ECD8] font-semibold">A</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Amina K.</p>
                    <p className="text-gray-400 text-sm">Toronto, Canada</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F4ECD8] fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#F4ECD8] mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Beautiful design and authentic content. I love how it works offline and respects my privacy. Truly a blessing."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F4ECD8]/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#F4ECD8] font-semibold">M</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Mohammed R.</p>
                    <p className="text-gray-400 text-sm">London, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332]/50 border-[#F4ECD8]/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F4ECD8] fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#F4ECD8] mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "The daily notifications are perfectly timed. It's like having a gentle reminder to stay connected to my faith throughout the day."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F4ECD8]/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#F4ECD8] font-semibold">F</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Fatima S.</p>
                    <p className="text-gray-400 text-sm">Dubai, UAE</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 bg-[#1A2332]/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Trusted by iOS Users <span className="text-[#F4ECD8]">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Join a growing community of believers who start each day with authentic Islamic wisdom on their iPhone
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle className="w-6 h-6 text-[#F4ECD8]" />
              <span className="text-gray-300">Authentic Sources</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle className="w-6 h-6 text-[#F4ECD8]" />
              <span className="text-gray-300">Scholar Verified</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle className="w-6 h-6 text-[#F4ECD8]" />
              <span className="text-gray-300">Daily Updates</span>
            </div>
          </div>
          
          <Link to="/privacy">
            <Button className="bg-transparent border-2 border-[#F4ECD8]/30 text-[#F4ECD8] hover:bg-[#F4ECD8]/10 text-lg px-8 py-6 rounded-2xl font-medium transition-all">
              Read Our Privacy Commitment
            </Button>
          </Link>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Begin Your <span className="text-[#F4ECD8]">Journey</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Start receiving daily Islamic wisdom that will inspire and uplift your soul on your iPhone
          </p>
          
          <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg px-12 py-8 rounded-2xl font-semibold flex items-center gap-3 transition-all hover:scale-105 mx-auto">
            <Apple className="w-7 h-7" />
            Download for iOS
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
