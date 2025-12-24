import { useState, useEffect, useRef } from 'react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const impactMetrics = [
    {
      title: 'Empowers Underserved Communities',
      description:
        'At-home alternative where traditional rehab is unavailable. Rehab availability is 60% in high-income countries, 28% in middle-income countries, and only 8% in low-income countries.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      stats: [
        { label: 'High-income countries', value: '60%' },
        { label: 'Middle-income countries', value: '28%' },
        { label: 'Low-income countries', value: '8%' },
      ],
    },
    {
      title: 'Instant Access',
      description:
        'No delays, no insurance approvals required. Immediate rehab access reduces repeat heart events and long-term healthcare costs.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: 'from-teal-500 to-teal-600',
      highlight: 'Zero wait time',
    },
    {
      title: 'Affordable',
      description:
        'Designed to remove financial, geographic, and systemic barriers to care. 95% cheaper than traditional rehab.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      highlight: '95% cost reduction',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Social Impact of CardioCare
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Breaking down barriers to cardiac rehabilitation one heart at a
            time.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              } hover:-translate-y-2`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}
              >
                {metric.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {metric.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {metric.description}
              </p>

              {/* Highlight or Stats */}
              {metric.highlight && (
                <div className={`mt-4 bg-gradient-to-r ${metric.color} text-white px-4 py-3 rounded-lg font-bold text-center text-lg`}>
                  {metric.highlight}
                </div>
              )}

              {metric.stats && (
                <div className="mt-4 space-y-2">
                  {metric.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
                    >
                      <span className="text-sm text-gray-600">
                        {stat.label}
                      </span>
                      <span className="font-bold text-blue-600">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats Banner */}
        <div
          className={`mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 shadow-xl transform transition-all duration-700 delay-500 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Making Cardiac Rehabilitation Accessible to Everyone
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              CardioCare is on a mission to democratize cardiac care, removing
              financial, geographic, and systemic barriers that prevent millions
              from accessing life-saving rehabilitation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('team');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Meet the Team
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;