
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Conditions = () => {
  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General <span className="text-[#F4ECD8]">Conditions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              General conditions governing the use of the Hadithly application and website.
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Hadithly is available exclusively on iOS devices through the Apple App Store. 
                  The application works offline once downloaded, ensuring consistent access to 
                  daily Islamic reminders regardless of internet connectivity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">Users are responsible for:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Using the application in accordance with Islamic principles</li>
                  <li>Respecting the spiritual nature of the content</li>
                  <li>Sharing content responsibly and with proper context</li>
                  <li>Maintaining the integrity of hadith teachings when sharing</li>
                  <li>Using the application for personal spiritual development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Content Standards</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  All hadith content in the Hadithly application meets the following standards:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sourced from authentic Islamic collections (Sahih Bukhari, Sahih Muslim, etc.)</li>
                  <li>Verified by qualified Islamic scholars</li>
                  <li>Translated accurately while preserving original meaning</li>
                  <li>Presented with proper Islamic context and respect</li>
                  <li>Updated regularly to maintain accuracy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Hadithly operates under strict privacy principles:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>No personal data collection or tracking</li>
                  <li>Complete offline functionality</li>
                  <li>No analytics or behavioral monitoring</li>
                  <li>Local storage of all user preferences</li>
                  <li>No third-party integrations that compromise privacy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Service Modifications</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  We reserve the right to modify, update, or discontinue features of the Hadithly 
                  application with reasonable notice to users. Such changes may include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Adding new hadith collections or translations</li>
                  <li>Improving user interface and experience</li>
                  <li>Enhancing notification features</li>
                  <li>Updating content for accuracy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Support and Assistance</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Technical support and assistance are available through:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Email support at support@hadithly.app</li>
                  <li>App Store reviews and feedback</li>
                  <li>Social media channels for general inquiries</li>
                  <li>Community feedback for content improvements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Termination</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Users may discontinue use of the Hadithly application at any time by simply 
                  deleting it from their device. We may terminate or suspend access to the 
                  application in cases of misuse or violation of these conditions.
                </p>
                <p className="text-sm text-gray-400 mt-4">
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

export default Conditions;
