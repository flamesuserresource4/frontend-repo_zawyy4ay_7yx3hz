import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Settings, Video } from 'lucide-react';
import { CTAButton } from './Header';

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero with Spline background */}
      <div className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Overlay gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              {/* Keep text minimal to allow exact copy insertion later */}
              <h1 className="text-4xl sm:text-5xl/tight font-semibold text-neutral-900 tracking-tight">
                {/* Insert the exact homepage headline here */}
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-neutral-700">
                {/* Insert the exact homepage subheadline here */}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <CTAButton className="text-base px-6 py-3" />
                <a href="#results" className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4">
                  See results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results / Testimonials */}
      <Section id="results">
        <div className="mb-10 flex items-center gap-2">
          <Star className="text-[#434545]" size={20} />
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Client Results & Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial cards: add the exact testimonials and visuals from the live site */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-neutral-100 p-6 min-h-[160px] flex flex-col">
              <div className="flex-1 text-neutral-700">
                {/* Exact testimonial text goes here */}
              </div>
              <div className="mt-4 text-sm text-neutral-500">
                {/* Name / handle / result metrics */}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="bg-neutral-50/60">
        <div className="mb-10 flex items-center gap-2">
          <Settings className="text-[#434545]" size={20} />
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Rocket, title: 'Strategy' },
            { icon: Settings, title: 'Scripting' },
            { icon: Video, title: 'Filming' },
            { icon: Star, title: 'Posting & Growth' },
          ].map(({ icon: Icon, title }, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-neutral-100 p-6">
              <div className="h-10 w-10 rounded-md bg-[#434545] text-[#CCFF00] flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                {/* Insert the exact step copy corresponding to this step */}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <div className="mb-10 flex items-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Pricing & Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-lg border p-6 shadow-sm bg-white ${
                i === 1 ? 'border-[#CCFF00] ring-1 ring-[#CCFF00]/40' : 'border-neutral-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">Plan Name</h3>
                {i === 1 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-[#E6FF66] text-[#434545] font-medium">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-neutral-600 min-h-[48px]">
                {/* Exact plan description from the site */}
              </p>
              <div className="mt-6">
                <CTAButton className="w-full" />
              </div>
              <ul className="mt-4 text-sm text-neutral-700 space-y-2 list-disc pl-5 min-h-[100px]">
                {/* Exact bullet points / inclusions */}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="book" className="pt-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
            {/* Final value reminder copy from the homepage */}
          </h2>
          <p className="mt-4 text-neutral-700">
            {/* Supporting sentence from the homepage */}
          </p>
          <div className="mt-8">
            <CTAButton className="text-base px-8 py-3.5" />
          </div>
        </div>
      </Section>
    </main>
  );
}
