import { Play } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <section className="px-16 py-16 bg-[#F9F9FF] shadow-[0_-10px_30px_rgba(79,57,246,0.08)]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1E7FF] shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse"></span>
            <span className="text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight">
            Supercharge Your
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              {" "}
              Digital Workflow
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
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
