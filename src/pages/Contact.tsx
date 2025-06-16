
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-[#F4ECD8]">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about Hadithly? Need technical support? We're here to help you on your spiritual journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] text-2xl flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#2D3A4A] border-[#F4ECD8]/30 text-white mt-2"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#2D3A4A] border-[#F4ECD8]/30 text-white mt-2"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-[#2D3A4A] border-[#F4ECD8]/30 text-white mt-2 min-h-[120px]"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 text-lg py-6 rounded-xl font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8] text-xl flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    Direct Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-3">For immediate assistance, reach out directly:</p>
                  <a 
                    href="mailto:support@hadithly.app" 
                    className="text-[#F4ECD8] font-semibold text-lg hover:underline"
                  >
                    support@hadithly.app
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8] text-xl flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="leading-relaxed">
                    We typically respond to all inquiries within 24 hours. 
                    For urgent technical issues, we aim to respond within 12 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8] text-xl">What can we help with?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Technical support and bug reports</li>
                    <li>Feature requests and suggestions</li>
                    <li>Questions about Islamic content accuracy</li>
                    <li>App store and installation issues</li>
                    <li>Feedback and general inquiries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
