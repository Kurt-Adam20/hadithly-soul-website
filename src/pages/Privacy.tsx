
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
            <CardContent className="text-gray-300 space-y-4 pt-6">
              <p className="leading-relaxed">
                Hadithly ("<strong>Developer</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Hadithly – Daily Islamic Reminders ("<strong>App</strong>"). By using the App, you agree to the practices described in this policy. If you do not agree with this Privacy Policy, please do not use the App.
              </p>
              <p className="text-sm text-gray-400">
                Effective Date: 4th January, 2024
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  📄 1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#F4ECD8] font-semibold mb-2">a. Personal Information</h4>
                    <p className="text-sm leading-relaxed">
                      We do not require you to provide personal information such as your name, email address, or contact details to use the App. However, if you contact us (e.g., via email), we may collect the personal information you provide.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#F4ECD8] font-semibold mb-2">b. Non-Personal Information</h4>
                    <p className="text-sm leading-relaxed mb-2">
                      We may collect non-personal data automatically, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Device type, model, and operating system</li>
                      <li>Usage statistics (e.g., time spent on the App)</li>
                      <li>App performance data, including crash reports and errors</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#F4ECD8] font-semibold mb-2">c. Cookies and Tracking Technologies</h4>
                    <p className="text-sm leading-relaxed">
                      The App does not currently use cookies or similar tracking technologies. However, third-party services integrated into the App (if any) may collect such data according to their own privacy policies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  📚 2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="text-sm leading-relaxed mb-3">
                  We use the information we collect for purposes such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Ensuring the App functions properly</li>
                  <li>Improving the App's design, features, and performance</li>
                  <li>Responding to your inquiries or feedback</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🔄 3. Sharing Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p className="text-sm leading-relaxed">
                  We do not sell, trade, or rent your personal information. We may share non-personal information with third parties, such as analytics providers, to improve the App.
                </p>
                
                <div>
                  <h4 className="text-[#F4ECD8] font-semibold mb-2">Third-Party Services</h4>
                  <p className="text-sm leading-relaxed">
                    The App may use third-party tools or services for analytics or performance monitoring. These third parties may collect information as governed by their own privacy policies. If you would like to know which third-party services are used, please contact us.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🛡️ 4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  📅 5. Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  We retain non-personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Any personal information collected (e.g., through user inquiries) is retained only as long as needed to provide support or comply with legal obligations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🌐 6. International Users
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  If you access the App outside Belgium, your information may be transferred to and processed in Belgium, where privacy laws may differ from those in your country.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  ⚖️ 7. Legal Basis for Processing (for EEA Users)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed mb-3">
                  If you are in the European Economic Area (EEA), we process your data based on the following legal bases:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Consent:</strong> When you agree to provide information (e.g., by contacting us)</li>
                  <li><strong>Legitimate Interests:</strong> To ensure the functionality and improvement of the App</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  👤 8. Your Rights (for EEA and UK Users)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data ("right to be forgotten")</li>
                  <li>Object to or restrict the processing of your data</li>
                  <li>Request data portability (to receive your data in a commonly used format)</li>
                  <li>Withdraw your consent at any time (where processing is based on consent)</li>
                  <li>Lodge a complaint with your local data protection authority</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  To exercise any of these rights, please contact us at support@hadithly.app.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  🔄 9. Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted within the App, and the "Effective Date" will be updated. Continued use of the App after such changes indicates your acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2332] border-[#F4ECD8]/20">
              <CardHeader>
                <CardTitle className="text-[#F4ECD8] flex items-center gap-2">
                  📩 10. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-sm leading-relaxed mb-3">
                  If you have questions or concerns about this Privacy Policy or how your information is handled, please contact us at:
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> support@hadithly.app
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
