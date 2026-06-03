import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{background: "linear-gradient(160deg, #F5F5FC 0%, #EEEEF8 100%)"}}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">1. Introduction</h2>
              <p>Welcome to VaradBuilds! We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">2. Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: includes email address and telephone numbers.</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                <li>Usage Data: includes information about how you use our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">3. How We Use Your Information</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>To register you as a customer.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, products/services, marketing or customer experience.</li>
                <li>To send you marketing communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">5. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. For more details, please refer to our Cookie Policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">6. Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. These rights include:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">7. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="mt-2 font-medium">Email: sontakkevarad210@gmail.com</p>
              <p className="font-medium">Phone: +91 9049671938</p>
            </section>

            <div className="pt-6 border-t border-gray-200 mt-8">
              <p className="text-sm text-gray-500">Last updated: June 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
