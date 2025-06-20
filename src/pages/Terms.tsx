
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy & <span className="text-[#F4ECD8]">Terms of Use</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your privacy and our terms of service for the Hadithly application.
            </p>
          </div>

          <Card className="bg-[#1A2332] border-[#F4ECD8]/20 mb-8">
            <CardHeader>
              <CardTitle className="text-[#F4ECD8] text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Welcome to Hadithly. This document serves as our combined Privacy Policy and Terms of Use. 
                We are committed to protecting your privacy and providing a transparent understanding of how you can use our services. 
                By using our app, you agree to the collection and use of information in accordance with this policy and agree to be bound by our terms.
              </p>
              <p className="text-sm text-gray-400">
                Last Updated: December 2024
              </p>
            </CardContent>
          </Card>

          {/* Privacy Policy Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#F4ECD8] mb-8">Privacy Policy</h2>
            
            <div className="grid gap-6">
              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Information You Provide Directly:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Account Information (Optional):</strong> Name, age, and gender for personalization</li>
                      <li><strong>Contextual Information:</strong> Selected moods, goals, and faith-related questions</li>
                      <li><strong>User Content:</strong> Saved quotes, themes, and reminder settings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Information Collected Automatically:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Subscription Status:</strong> Tracked through Apple's In-App Purchase service</li>
                      <li><strong>Usage and Technical Data (Anonymous):</strong> Device type, OS version, crash reports, and feature usage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>To operate and maintain the Hadithly app</li>
                    <li>To personalize your content and experience</li>
                    <li>To provide core app functionalities like reminders and saved quotes</li>
                    <li>To process your subscription and provide premium features</li>
                    <li>To monitor and analyze usage to improve the app</li>
                    <li>To communicate with you, if necessary</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">How We Share Your Information</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="font-semibold">Your privacy is paramount.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>No Sale of Data:</strong> We do not sell, trade, or rent your personal identification information to others</li>
                    <li><strong>Service Providers:</strong> We may use trusted third-party services for crash analytics or subscription management</li>
                    <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Data Security & Retention</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="text-sm leading-relaxed">
                    We implement reasonable security measures to protect your data from unauthorized access. 
                    We retain your personal data for as long as you maintain an account and will delete your information 
                    within a reasonable timeframe after you delete your account.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm leading-relaxed">
                    You have the right to access, update, or request deletion of your personal information 
                    through the settings in our app or by contacting us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Terms of Use Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#F4ECD8] mb-8">Terms of Use</h2>
            
            <div className="grid gap-6">
              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm leading-relaxed">
                    By accessing or using our app, you agree to be bound by these Terms. 
                    If you disagree with any part of the terms, then you do not have permission to access the service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Use of the App</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm leading-relaxed">
                    The app is intended for your personal, non-commercial use for spiritual reflection. 
                    The content provided is for informational purposes and should not be considered a substitute 
                    for professional theological, medical, or psychological advice.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Premium Subscriptions</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="text-sm">Certain features of the app are only available through a paid subscription.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Billing:</strong> All payments are processed through Apple's In-App Purchase platform</li>
                    <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless canceled 24 hours before the current period ends</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">User Conduct & Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="text-sm leading-relaxed">
                    You agree not to use the app in any way that is unlawful, or harms us or any other person or entity. 
                    The app and its original content, features, and functionality are and will remain our exclusive property.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
                <CardHeader>
                  <CardTitle className="text-[#F4ECD8]">Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-sm leading-relaxed">
                    The app is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the app's 
                    functioning will be uninterrupted or error-free. In no event shall Hadithly be liable for any 
                    direct, indirect, incidental, or consequential damages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-[#1A2332] border-[#F4ECD8]/20 mt-8">
            <CardHeader>
              <CardTitle className="text-[#F4ECD8]">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="text-sm leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or Terms of Use, please contact us at:
              </p>
              <p className="text-sm">
                <strong>Email:</strong> support@hadithly.app
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
