import React from "react";

const Stats = () => {
  return (
    <section className="px-16 py-10 mb-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <h2 className="text-6xl font-extrabold">50K+</h2>
          <p className="text-gray-50 text-2xl font-medium">Active Users</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-6xl font-extrabold">500+</h2>
          <p className="text-gray-50 text-2xl font-medium">Tools Available</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-6xl font-extrabold">99%</h2>
          <p className="text-gray-50 text-2xl font-medium">Satisfaction</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-6xl font-extrabold">24/7</h2>
          <p className="text-gray-50 text-2xl font-medium">Support</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
