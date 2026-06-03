import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{background: "linear-gradient(160deg, #F5F5FC 0%, #EEEEF8 100%)"}}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">1. Introduction</h2>
              <p>Welcome to VaradBuilds! These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms and conditions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">2. Use of Our Services</h2>
              <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms of Service. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">3. Intellectual Property</h2>
              <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">4. User Accounts</h2>
              <p>If you create an account on our website, you are responsible for maintaining the security of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">5. Limitation of Liability</h2>
              <p>We will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website: to the extent that the website is provided free-of-charge, for any indirect loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">6. Indemnification</h2>
              <p>You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms of service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">7. Variation</h2>
              <p>We may revise these terms of service from time-to-time. Revised terms will apply to the use of our website from the date of the publication of the revised terms on our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-600 mb-3">8. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
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

export default TermsOfService;
