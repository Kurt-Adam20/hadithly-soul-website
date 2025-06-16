
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Legal <span className="text-[#F4ECD8]">Notice</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Important legal information about the Hadithly application and services.
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Application Publisher</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  <strong>Application Name:</strong> Hadithly<br/>
                  <strong>Publisher:</strong> Hadithly Team<br/>
                  <strong>Contact Email:</strong> support@hadithly.app<br/>
                  <strong>Platform:</strong> iOS App Store
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Purpose and Scope</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  Hadithly is an iOS mobile application designed to provide users with daily Islamic reminders 
                  through authentic hadiths from Prophet Muhammad (PBUH). The application serves educational 
                  and spiritual purposes within the Islamic community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Content Sources</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  All hadith content is sourced from authentic Islamic collections including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sahih al-Bukhari</li>
                  <li>Sahih Muslim</li>
                  <li>Sunan Abu Dawood</li>
                  <li>Jami` at-Tirmidhi</li>
                  <li>Sunan an-Nasa'i</li>
                  <li>Sunan Ibn Majah</li>
                </ul>
                <p className="leading-relaxed">
                  Content has been reviewed and verified by qualified Islamic scholars to ensure authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Liability Limitations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  While we strive for accuracy in all content, users should:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Verify religious guidance with qualified Islamic scholars</li>
                  <li>Use the application as a supplement to, not replacement for, traditional Islamic education</li>
                  <li>Understand that the application is for personal spiritual development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  The Hadithly application design, user interface, and compilation are protected by copyright. 
                  The hadith texts themselves are part of Islamic heritage and public domain. Users may share 
                  hadith content for educational and dawah purposes with proper attribution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  This legal notice and the use of the Hadithly application are governed by applicable 
                  laws regarding mobile applications and digital content distribution. Any disputes 
                  will be resolved through appropriate legal channels.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="leading-relaxed">
                  For legal inquiries, content concerns, or other legal matters regarding the Hadithly application:
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

export default Legal;
