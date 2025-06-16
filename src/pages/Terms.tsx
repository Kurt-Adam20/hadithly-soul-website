
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
              Terms of <span className="text-[#F4ECD8]">Use</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using the Hadithly application.
            </p>
          </div>

          <Card className="bg-[#1A2332] border-[#F4ECD8]/20 mb-8">
            <CardHeader>
              <CardTitle className="text-[#F4ECD8] text-2xl">Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                By downloading, installing, or using the Hadithly mobile application, you agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our application.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Use of the Application</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Hadithly is provided for personal, non-commercial use only. You may use the application to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Read and learn from authentic hadiths</li>
                  <li>Share hadith content with others for educational purposes</li>
                  <li>Receive daily notifications for spiritual reminders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Content Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  While we strive to provide authentic and accurate hadith content verified by Islamic scholars, 
                  users are encouraged to cross-reference with traditional Islamic sources and consult with 
                  qualified religious authorities for matters of religious practice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">You may not use the Hadithly application to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Distribute, modify, or create derivative works from our content</li>
                  <li>Use the content for commercial purposes without written permission</li>
                  <li>Misrepresent or distort the meaning of Islamic teachings</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  The Hadithly application, including its design, features, and compilation of content, 
                  is protected by copyright and other intellectual property laws. The hadith texts themselves 
                  are part of Islamic heritage and are not subject to copyright.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  The application is provided "as is" without warranties of any kind. We do not guarantee 
                  the accuracy, completeness, or reliability of any content. Users should always verify 
                  religious content with qualified Islamic scholars.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Updates to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  We may update these Terms of Use from time to time. Changes will be posted within the 
                  application and on our website. Continued use of the application after changes constitutes 
                  acceptance of the new terms.
                </p>
                <p className="text-sm text-gray-400">
                  Last updated: December 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
