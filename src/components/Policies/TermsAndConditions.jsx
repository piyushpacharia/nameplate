import React, { useEffect } from 'react';

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container md:px-20 p-4">
      <h1 className="text-3xl text-center poppins-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        This website is operated by Craftby Products Private Limited. Throughout the site, the terms “we”, “us” and “our” refer to Craftby Products Private Limited. Craftby Products Private Limited offers this website, including all information, tools, and services available from this site to you, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
      </p>

      <div className='bg-[#00000008] md:p-10 p-5  rounded-xl'>
      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">1. Acceptance of Terms</h2>
        <p>
          By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including browsers, vendors, customers, merchants, and/or contributors of content.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">2. Changes to Terms</h2>
        <p>
          We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">3. Online Store Terms</h2>
        <p>
          By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You agree not to use our products for any illegal or unauthorized purposes and to follow all applicable laws.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">4. General Conditions</h2>
        <p>
          We reserve the right to refuse service to anyone for any reason. You understand that your content (not including credit card information) may be transferred unencrypted.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">5. Accuracy, Completeness, and Timeliness of Information</h2>
        <p>
          We are not responsible if information on this site is not accurate or current. The material on this site is for general information only and should not be solely relied upon for making decisions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">6. Modifications to Service and Prices</h2>
        <p>
          Prices for our products are subject to change without notice. We reserve the right to modify or discontinue the Service at any time.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">7. Products or Services</h2>
        <p>
          Certain products may be exclusively available online and subject to return only according to our Refund Policy. We have made every effort to display product colors accurately.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">8. Accuracy of Billing and Account Information</h2>
        <p>
          We reserve the right to refuse orders placed by dealers or resellers and may limit quantities per person or per order. You agree to provide current and accurate purchase information.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">9. Optional Tools</h2>
        <p>
          We may provide access to third-party tools “as is” without warranties or representations. Use of these tools is at your own risk.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">10. Third-Party Links</h2>
        <p>
          Certain services may include materials from third parties. We are not responsible for third-party content, and any issues should be directed to the respective third party.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">11. User Comments, Feedback, and Other Submissions</h2>
        <p>
          If you send comments or creative ideas to us, we may use them in any medium without restriction. You are responsible for ensuring your comments do not violate any third-party rights.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl poppins-semibold py-2">12. Personal Information</h2>
        <p>
          Your submission of personal information through the store is governed by our Privacy Policy.
        </p>
      </section>
      </div>
    </div>
  );
}
