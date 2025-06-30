
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
              <span className="text-[#F4ECD8]">Hadithly</span> Terms of Use
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Terms of use governing your use of the Hadithly application.
            </p>
          </div>

          <Card className="bg-[#1A2332] border-[#F4ECD8]/20 mb-8">
            <CardContent className="text-gray-300 space-y-4 pt-6">
              <p className="leading-relaxed">
                These Terms of Use ("<strong>Terms</strong>") govern your use of Hadithly - Daily Islamic reminders ("<strong>App</strong>"), developed by Hadithly ("<strong>Developer</strong>"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
              </p>
              <p className="text-sm text-gray-400">
                Last Updated: December 2024
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  📚 Definitions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <div className="space-y-2">
                  <p><strong>1.</strong> "<strong>User</strong>" refers to any person who downloads, installs, or uses the App.</p>
                  <p><strong>2.</strong> "<strong>Content</strong>" refers to any text, images, video, audio, or other media available through the App.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🎁 License
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  Subject to your compliance with these Terms, the Developer grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🔐 User Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm mb-3">You agree not to:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Use the App for any unlawful or fraudulent purposes.</li>
                  <li>Copy, modify, adapt, or create derivative works of the App or its Content.</li>
                  <li>Interfere with, disrupt, or overload the App or its underlying infrastructure.</li>
                  <li>Attempt to gain unauthorized access to the App or any associated systems or networks.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  💾 Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  All rights, title, and interest in and to the App, including its Content and any associated intellectual property rights, are the exclusive property of the Developer and its licensors. You may not reproduce, distribute, or create derivative works of the App or its Content without the express written permission of the Developer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🛡️ Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE DEVELOPER DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  ⚖️ Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🌐 Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Belgium, without regard to its conflict of laws principles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🔄 Modifications
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  The Developer reserves the right to modify these Terms at any time, in its sole discretion. Your continued use of the App following any modification constitutes your acceptance of the modified Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  📩 Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed mb-3">
                  If you have any questions or concerns about these Terms or the App, please contact the Developer at:
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> support@hadithly.app
                </p>
                <p className="text-xs text-gray-400 mt-4">
                  This Mobile App Terms of Use template has been customized for Hadithly. 
                  Remember to consult with legal counsel if necessary.
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
