import React from "react";

const stepsData = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    image: "/user.png",
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    image: "/package.png",
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    image: "/rocket.png",
  },
];

const Steps = () => {
  return (
    <section className="bg-[#F8F8FB] py-24 px-6 md:px-10 lg:px-16 shadow-[0_-10px_30px_rgba(79,57,246,0.08)]">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="relative bg-white border border-gray-200 rounded-3xl px-8 py-14 text-center"
            >
              {/* step number */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold flex items-center justify-center">
                {step.id}
              </div>

              {/* icon bg */}
              <div className="w-28 h-28 mx-auto rounded-full bg-[#F1E8FF] flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <h3 className="mt-8 text-3xl md:text-[22px] font-bold text-[#111827]">
                {step.title}
              </h3>

              <p className="mt-4 text-[#6B7280] text-lg leading-8">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
