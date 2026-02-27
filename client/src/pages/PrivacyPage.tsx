import { Helmet } from 'react-helmet';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Sparq Games</title>
        <meta name="description" content="Privacy Policy for Sparq Games and the Magieva integration service." />
        <meta property="og:title" content="Privacy Policy - Sparq Games" />
        <meta property="og:description" content="Privacy Policy for Sparq Games and the Magieva integration service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sparqgames.com/privacy" />
        <meta property="og:image" content="https://www.sparqgames.com/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sparqgames" />
        <meta name="twitter:image" content="https://www.sparqgames.com/images/og-image.png" />
        <link rel="canonical" href="https://www.sparqgames.com/privacy" />
      </Helmet>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-center text-lg">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p>
                Sparq Games ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Magieva integration service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>When you use our Magieva integration service, we may collect the following information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Notion Workspace Data:</strong> We access data from your Notion workspace as authorized by you through the Notion OAuth integration. This includes pages, databases, and content you choose to share with the integration.</li>
                <li><strong>User Email Address:</strong> We collect the email address associated with your Notion account for authentication and communication purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect solely to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide and operate the Magieva integration service</li>
                <li>Authenticate your identity and manage your account</li>
                <li>Communicate with you about the service</li>
                <li>Improve and maintain the quality of the service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
              <p>
                <strong>We do not sell, trade, or rent your personal information to third parties.</strong> Your data is used exclusively for providing the Magieva integration service. We may share data only if required by law or to protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p>
                You may revoke the Magieva integration's access to your Notion workspace at any time through your Notion account settings. Upon revocation, we will cease accessing your Notion data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:tony@sparqgames.com" className="text-blue-600 hover:text-blue-800 underline">
                  tony@sparqgames.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
