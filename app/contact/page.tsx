'use client';

import React, { useState } from 'react';

function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.subscription = formData.get('subscription') === 'on';

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      alert('Message sent successfully.');
      e.currentTarget.reset();
    } else {
      alert(result.error || 'Unable to send your request. Try again later.');
    }
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-24 bg-black text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <p className="mb-8 ">Use the form below to get in touch with us about your project or inquiry. Whether you have questions, need a quote, or want to discuss your ideas, we're here to help. The information you provide will help us understand your needs and serve as a starting point for our conversation. Please note that any details shared here are for initial contact purposes only and do not represent a binding agreement or formal proposal.</p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Name */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Your Name *</label>
          <input
            id="name"
            name="name"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Your Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="country" className="text-sm font-medium">Country *</label>
          <input
            id="country"
            name="country"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-2 md:col-span-2">
          <label htmlFor="company" className="text-sm font-medium">Company</label>
          <input
            id="company"
            name="company"
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Checkbox */}
        <div className="md:col-span-2 flex items-center space-x-3">
          <input
            id="subscription"
            name="subscription"
            type="checkbox"
            className="h-5 w-5"
          />
          <label htmlFor="subscription" className="text-sm">
            I have an active subscription with Synt-X.
          </label>
        </div>

        {/* Subject */}
        <div className="flex flex-col space-y-2 md:col-span-2">
          <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
          <input
            id="subject"
            name="subject"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-3 resize-none focus:outline-none focus:border-yellow-300"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </main>
  );
}

export default ContactPage;
