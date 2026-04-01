import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1A2E] text-white px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Left Branding */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold">DigiTools</h2>
            <p className="mt-6 text-gray-400 leading-7 max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#9514FA] transition group">
                <FaInstagram
                  className="text-[#0B1A2E] group-hover:text-white"
                  size={18}
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#9514FA] transition group">
                <FaFacebookF
                  className="text-[#0B1A2E] group-hover:text-white"
                  size={18}
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#9514FA] transition group">
                <FaTwitter
                  className="text-[#0B1A2E] group-hover:text-white"
                  size={18}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
