
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-[#F4ECD8]">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your privacy and spiritual journey are sacred to us. Learn how we protect your information.
            </p>
          </div>

          <Card className="bg-[#1A2332] border-[#F4ECD8]/20 mb-8">
            <CardHeader>
              <CardTitle className="text-[#F4ECD8] text-2xl">Our Privacy Commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="text-lg font-semibold text-[#F4ECD8]">
                We do not collect or share any personal data. All content is available offline.
              </p>
              <p className="leading-relaxed">
                At Hadithly, we believe your spiritual journey should remain private and personal. 
                Our app is designed with privacy-first principles, ensuring that your Islamic learning 
                experience is completely secure and confidential.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Information We Don't Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Location data or GPS coordinates</li>
                  <li>Device identifiers or advertising IDs</li>
                  <li>Usage analytics or behavioral data</li>
                  <li>Social media profiles or contacts</li>
                  <li>Search history or reading preferences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Offline First Design</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Hadithly is designed to work completely offline. All hadiths, translations, and app features 
                  are stored locally on your device. This means:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>No internet connection required for daily hadiths</li>
                  <li>Your reading history stays on your device</li>
                  <li>No data transmission to external servers</li>
                  <li>Complete privacy and security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  We do not integrate with any third-party analytics, advertising, or social media services 
                  that could compromise your privacy. The app functions independently without external dependencies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Since we don't collect personal data, there's no risk of data breaches or unauthorized access 
                  to your information. All app data remains securely stored on your personal device with standard 
                  iOS/Android security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Sharing Feature</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  When you choose to share a hadith, the sharing is handled directly by your device's built-in 
                  sharing capabilities. We don't track or monitor what you share or with whom you share it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Any updates to this privacy policy will be posted on this page and within the app. 
                  We will always maintain our commitment to user privacy and will never compromise on 
                  the principles outlined here.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <p className="text-[#F4ECD8] font-semibold">support@hadithly.app</p>
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

export default Privacy;
