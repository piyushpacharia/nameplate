import React, { useEffect } from 'react';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container md:px-20 px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">The 7-Day Replace or Refund Policy</h2>
        <p className="mb-4">
          We have a 7-day "replace or refund" policy, which means you have 7 days after receiving your item to request a replacement or refund. A replacement or refund is only offered in the following scenarios:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The item received is damaged on reaching your location.</li>
          <li>The item has a prior defect.</li>
          <li>The wrong item has been shipped to you.</li>
        </ul>
        <p className="mb-4">
          Please inspect your order upon receipt and contact us within 7 days if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.
        </p>
        <p className="mb-4">
          You can contact us at <a href="mailto:help@housenama.com" className="text-blue-600 underline">help@housenama.com</a> with pictures of the product. Also, let us know if you'd like a replacement or refund. Once approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
        </p>
        <p>
          Please note that we do not offer replacements or refunds in cases where you have made a spelling mistake in the content of the nameplate. In cases where a replacement is requested with minor changes in the text, you can request the team to send a replacement at a discounted rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">The 1-Hour Cancellation Window</h2>
        <p>
          We have a 1-hour cancellation window, which means that any requests for cancellation must be made within 1 hour of placing the order.
        </p>
        <p>
          Once the 1-hour mark lapses, we process your order and add it to the design and production queue. Hence, any request for cancellation made after it is processed cannot be entertained.
        </p>
      </section>
    </div>
  );
}
