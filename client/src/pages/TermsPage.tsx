import { Helmet } from 'react-helmet';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Sparq Games</title>
        <meta name="description" content="Terms of Use for Sparq Games and the Magieva integration service." />
        <meta property="og:title" content="Terms of Use - Sparq Games" />
        <meta property="og:description" content="Terms of Use for Sparq Games and the Magieva integration service." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Terms of Use</h1>
          <p className="text-gray-400 text-center text-lg">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing or using the Magieva integration service provided by Sparq Games ("we," "our," or "us"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p>
                The Magieva integration service connects with your Notion workspace to provide documentation review and management capabilities. The service is provided "as-is" and "as-available" without warranties of any kind, whether express or implied.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notion Compliance</h2>
              <p>
                By using our service, you agree to comply with Notion's{' '}
                <a href="https://www.notion.so/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="https://www.notion.so/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </a>. You are responsible for ensuring your use of the Magieva integration does not violate Notion's terms or any applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>You are responsible for maintaining the security of your Notion account and workspace.</li>
                <li>You must not use the service for any unlawful or unauthorized purpose.</li>
                <li>You must not attempt to interfere with or disrupt the service or its infrastructure.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modification and Discontinuation</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, Sparq Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, or goodwill arising out of or in connection with your use of the service.
              </p>
              <p className="mt-3">
                In no event shall our aggregate liability exceed the amount you paid us, if any, for the use of the service during the twelve (12) months prior to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Sparq Games and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the service or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We may update these Terms of Use from time to time. Continued use of the service after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at{' '}
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

export default TermsPage;
