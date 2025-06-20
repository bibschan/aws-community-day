import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About AWS Community Day</h3>
            <p className="text-gray-300">
              Celebrating 12 years of the Vancouver AWS User Group and the
              growing cloud community across Canada.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon
                href="https://www.youtube.com/channel/UCMfuz22CouuimIXngTMMZIQ"
                label="YouTube"
                iconPath="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
              <SocialIcon
                href="http://www.linkedin.com/company/canadiancloud"
                label="LinkedIn"
                iconPath="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
              <SocialIcon
                href="https://discord.gg/wg372JtEK8"
                label="Discord"
                iconPath="M20.316 4.37a19.791 19.791 0 0 0-4.885-1.516.074.074 0 0 0-.079.037c-.21.375-.454.886-.622 1.283a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.622-1.283.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.051 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.3 1.226-2.006a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128.075.075 0 0 1 .008-.006c.01-.007.02-.014.03-.02a14.7 14.7 0 0 0 12.07 0l.031.02a.077.077 0 0 1-.001.135c-.598.355-1.225.654-1.873.893a.077.077 0 0 0-.04.106c.36.712.78 1.388 1.25 2.02a.077.077 0 0 0 .083.028 19.838 19.838 0 0 0 6.002-3.03.077.077 0 0 0 .032-.05c.5-5.177-.838-9.675-3.55-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.09-2.157-2.42 0-1.33.956-2.42 2.158-2.42 1.21 0 2.175 1.1 2.157 2.42 0 1.33-.956 2.42-2.158 2.42zm7.975 0c-1.183 0-2.157-1.09-2.157-2.42 0-1.33.955-2.42 2.157-2.42 1.21 0 2.175 1.1 2.157 2.42 0 1.33-.955 2.42-2.157 2.42z"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "Speakers", href: "#" },
                { name: "Schedule", href: "#" },
                { name: "Sponsors", href: "#" },
                { name: "Location", href: "#" },
              ].map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                {
                  name: "AWS User Groups",
                  href: "https://awsusergroups.com",
                  external: true,
                },
                {
                  name: "Become a Volunteer",
                  href: "https://tally.so/r/waPdMy",
                  external: true,
                },
                {
                  name: "Become a Sponsor",
                  href: "https://tally.so/r/mR6zPQ",
                  external: true,
                },
                {
                  name: "Code of Conduct",
                  href: "#",
                  external: false,
                },
                { name: "FAQ", href: "#", external: false },
              ].map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:info@awsday.ca"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mr-2"></span>
                  info@awsday.ca
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="https://www.canadiancloud.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-start"
                >
                  <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Canadian Public Cloud Association</span>
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4">Previous Years</h4>
            <a
              href="/past-events/2024/"
              className="text-[#FF9900] hover:underline inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              2024 Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} AWS Community Day Canada. All rights
              reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Code of Conduct
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            AWS Community Day is a community-led event organized by the Canadian
            Public Cloud Association.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Reusable Components
const SocialIcon = ({ href, label, iconPath }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors"
    aria-label={label}
  >
    <span className="sr-only">{label}</span>
    <svg
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={iconPath} />
    </svg>
  </a>
);

const NavItem = ({ name, href, external = false }) => (
  <li>
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mr-2"></span>
      {name}
      {external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      )}
    </a>
  </li>
);

export default Footer;
