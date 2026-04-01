import React from "react";

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-16 bg-linear-to-r from-[#4F39F6] via-[#7C3AED] to-[#9514FA] shadow-[0_0_80px_rgba(124,58,237,0.5)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-lg md:text-xl text-white/80 leading-8">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <button className="px-8 py-4 rounded-full font-semibold bg-white text-[#4F39F6] hover:scale-105 transition">
            Explore Products
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-4 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-[#4F39F6] transition">
            View Pricing
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-white/90 text-sm md:text-base">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
