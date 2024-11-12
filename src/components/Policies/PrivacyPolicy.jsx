import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="p-8 px-10 bg-gray-50 text-gray-700">
            <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

            <p className="mb-4">
                This Privacy Policy describes how YOURNAME.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Collecting Personal Information</h2>
            <p className="mb-4">
                When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”.
            </p>

            <h3 className="text-xl font-semibold mt-4">Device Information</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
                <li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
                <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
                <li>Disclosure for a business purpose: shared with our processor Shopify.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Order Information</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Examples of Personal Information collected: name, billing address, shipping address, payment information (including credit/debit card numbers), email address, and phone number.</li>
                <li>Purpose of collection: to provide products or services to you, to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen orders for potential risk or fraud, and provide relevant advertising.</li>
                <li>Source of collection: collected from you.</li>
                <li>Disclosure for a business purpose: shared with our processor Shopify, payment gateway, and shipping partners.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Customer Support Information</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Examples of Personal Information collected: name, email address, and phone number.</li>
                <li>Purpose of collection: to provide customer support.</li>
                <li>Source of collection: collected from you.</li>
                <li>Disclosure for a business purpose: shared with members of our customer support team.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Sharing Personal Information</h2>
            <p className="mb-4">
                We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" className="text-blue-600 underline">https://www.shopify.com/legal/privacy</a>.</li>
                <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to lawful requests, or to protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Behavioural Advertising</h2>
            <p className="mb-4">
                We use your Personal Information to provide targeted advertisements or marketing communications. For example:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>We use Google Analytics. You can opt out here: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 underline">https://tools.google.com/dlpage/gaoptout</a>.</li>
                <li>Opt out of targeted ads: <a href="https://www.facebook.com/settings/?tab=ads" className="text-blue-600 underline">Facebook</a>, <a href="https://www.google.com/settings/ads/anonymous" className="text-blue-600 underline">Google</a>, <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-blue-600 underline">Bing</a>.</li>
            </ul>

            {/* Add additional sections similarly */}

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="mb-4">
                For more information about our privacy practices, questions, or complaints, please contact us by email at <a href="mailto:privacy@YOURNAME.com" className="text-blue-600 underline">privacy@YOURNAME.com</a> or by mail at:
            </p>
            <address className="mb-4">
                Craftby Products Private Limited<br />
                20/30 Princess Street, 8 & 15, Mulchand Mansion<br />
                400002 Mumbai MH, India
            </address>

            <p className="text-sm mt-4">Last updated: September 6, 2021</p>
        </div>
    );
};


