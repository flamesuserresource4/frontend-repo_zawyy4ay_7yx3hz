import React from 'react';

export default function Step4() {
  return (
    <main className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">{/* Thank-you headline from Step-4 */}</h1>
          <p className="mt-3 text-neutral-700">{/* Any existing instructions / follow-ups from Step-4 */}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
          {/* Embed the exact same video as on Step-4 */}
          <div className="aspect-video w-full bg-neutral-100">
            {/* Place the iframe embed here when available */}
          </div>
        </div>
      </div>
    </main>
  );
}
