import React from 'react';
import { CTAButton } from './Header';

export default function Step2() {
  return (
    <main className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-100 p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900">{/* Booking confirmation headline from Step-2 */}</h1>
          <p className="mt-3 text-neutral-700">{/* Keep all Step-2 subtext exactly as on the page */}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                placeholder=""
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label className="text-sm font-medium text-neutral-700">Details</label>
            <textarea className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] min-h-[120px]" />
          </div>

          <div className="mt-8">
            <CTAButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}
