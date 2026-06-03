import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{background: "linear-gradient(160deg, #F5F5FC 0%, #EEEEF8 100%)"}}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">1. What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">2. How We Use Cookies</h2>
              <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">3. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</li>
                <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
                <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">4. Disabling Cookies</h2>
              <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">5. Third-Party Cookies</h2>
              <p>In some special cases, we also use cookies provided by trusted third parties. These may include Google Analytics, which helps us understand how you use the site, and social media platforms for sharing functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">6. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at:</p>
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

export default CookiePolicy;
