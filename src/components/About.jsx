import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-10 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">YOURNAME: Crafting Beautiful Nameplates</h2>
        <p className="text-lg text-gray-600">
          YOURNAME is a manufacturer of name-plates and door signs based in Mumbai, India. We offer you a curated collection of name-plate designs online - with materials ranging from acrylic, brass, ceramic, glass, marble, steel, stone, and wood.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10 Years, 100,000 Nameplates</h2>
        <p className="text-lg text-gray-600">
          The YOURNAME brand is brought to you by the same team that operated Engrave - the e-commerce store for all things handmade. In our Engrave avatar, we have fulfilled over 100,000+ name-plate orders since 2011.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The YOURNAME Difference</h2>
        <p className="text-lg text-gray-600">
          A nameplate is the first impression for any home and YOURNAME is committed to making it warm, welcoming, and memorable. Here's how we do it:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li className="text-lg text-gray-600">
            Based on our experience of serving 100,000+ homes over 10 years, we have had the opportunity to master the art and craft of making nameplates. Each name-plate featured in our catalogue bears testimony to this experience.
          </li>
          <li className="text-lg text-gray-600">
            We are collaborating with renowned designers to launch name-plate collections that not only look great but can also start conversations.
          </li>
          <li className="text-lg text-gray-600">
            We are leveraging new technologies to give you an immersive personalization experience.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">100% Love-it Guarantee</h2>
        <p className="text-lg text-gray-600">
          At YOURNAME, satisfaction just isn't good enough. Either you love it or we'll make it right — guaranteed. That's how we look at quality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-600">
          We are a 6-member team at YOURNAME. A 3-member team (comprising of Hemchand, Sunil & Sushant) work behind the scenes to create your order and process it, while 3 of us represent YOURNAME in front of customers - Nimish, Edina & Blaisy.
        </p>
      </section>

      <section>
        <p className="text-lg text-gray-600">
          Without any further ado, we invite you to browse through our catalog now.
        </p>
      </section>
    </div>
  )
}
