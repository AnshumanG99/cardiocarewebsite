const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Cardio<span className="text-teal-400">Care</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing cardiac rehabilitation through AI-powered
              technology. Making heart health accessible, affordable, and
              effective for everyone.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons - Placeholder */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="mailto:info@cardiocare.fit"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Solution
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('progress')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Progress
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:info@cardiocare.fit"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@cardiocare.fit
                </a>
              </li>
              <li>Austin, Texas</li>
              <li className="pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CardioCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              HIPAA Compliance
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            CardioCare is currently in development and not yet FDA-approved for
            clinical use. Information provided on this website is for educational
            purposes only and should not be considered medical advice. Always
            consult with a healthcare professional for medical guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;