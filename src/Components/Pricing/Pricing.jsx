import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="bg-[#F8F8FB] py-24 px-6 md:px-10 lg:px-16 shadow-[0_-10px_30px_rgba(79,57,246,0.08)]">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#111827]">Starter</h3>
            <p className="mt-2 text-[#6B7280]">Perfect for getting started</p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-lg text-[#6B7280]">/Month</span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="text-green-500" size={18} />
                  <span className="text-[#6B7280]">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 w-full py-4 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="relative rounded-3xl p-8 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            {/* badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFE7B3] text-[#B45309] px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-2 text-white/80">Best for professionals</p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-lg text-white/80">/Month</span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="text-white" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 w-full py-4 rounded-full bg-white text-[#4F39F6] font-semibold">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#111827]">Enterprise</h3>
            <p className="mt-2 text-[#6B7280]">For teams and businesses</p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-lg text-[#6B7280]">/Month</span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="text-green-500" size={18} />
                  <span className="text-[#6B7280]">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 w-full py-4 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
