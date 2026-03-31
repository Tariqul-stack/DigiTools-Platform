import { Play } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <section className="px-16 py-16 bg-[#F9F9FF] shadow-[0_-10px_30px_rgba(79,57,246,0.08)]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Supercharge Your
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              {" "}
              Digital Workflow
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Explore Products
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#9514FA] font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              <Play size={18} className="stroke-[#4F39F6]" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/banner.png"
            alt="banner"
            className="w-125 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
