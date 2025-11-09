import { useState, useEffect, useRef } from 'react';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('action');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const roadmapMilestones = [
    {
      phase: 'Phase 1: Research & Development',
      status: 'completed',
      description:
        'Developed AI algorithms for cardiac signal processing and personalized rehab protocols.',
      icon: '🔬',
    },
    {
      phase: 'Phase 2: Prototype Development',
      status: 'completed',
      description:
        'Built Arduino-based EKG monitoring device with Bluetooth connectivity.',
      icon: '🛠️',
    },
    {
      phase: 'Phase 3: Testing & Validation',
      status: 'completed',
      description:
        'Conducting pilot studies with local cardiac rehabilitation centers and testing with real patients.',
      icon: '📊',
    },
    {
      phase: 'Phase 4: Clinical Trials',
      status: 'current',
      description:
        'Apply for certifications including HIPAA, CE, and FDA approval. Conduct FDA-compliant clinical trials to validate safety and efficacy.',
      icon: '🏥',
    },
    {
      phase: 'Phase 5: Market Launch',
      status: 'upcoming',
      description:
        'Commercial release for healthcare providers and direct-to-consumer market.',
      icon: '🚀',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="progress"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CardioCare Progress
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to reality—see how we're revolutionizing cardiac
            rehabilitation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          className={`flex justify-center mb-12 transform transition-all duration-700 delay-200 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('action')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'action'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              CardioCare in Action
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Roadmap
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* CardioCare in Action Tab */}
          {activeTab === 'action' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  See CardioCare in Action
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  See how CardioCare brings hospital-grade cardiac recovery
                  home—right from setup to personalized rehab in action.
                </p>

                {/* Placeholder for demo video/images */}
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-12 flex flex-col items-center justify-center min-h-[400px]">
                  <svg
                    className="w-24 h-24 text-blue-600 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    Demo Video Coming Soon
                  </p>
                  <p className="text-gray-600">
                    Watch how CardioCare transforms cardiac rehabilitation
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-center">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    🏆 Diamond Challenge Finalist
                  </h4>
                  <p className="text-white text-lg">
                    Proud to be recognized as a global finalist in the Diamond
                    Challenge Limitless World Summit for our mission to make
                    cardiac rehab accessible for all.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Roadmap Tab */}
          {activeTab === 'roadmap' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  CardioCare Roadmap
                </h3>
                <p className="text-lg text-gray-600 mb-10">
                  From prototype to pilot, our journey reflects a relentless
                  commitment to safe, scalable, and inclusive cardiac care.
                </p>

                {/* Timeline */}
                <div className="space-y-8">
                  {roadmapMilestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex gap-6 ${
                        milestone.status === 'completed'
                          ? 'opacity-100'
                          : milestone.status === 'current'
                          ? 'opacity-100'
                          : 'opacity-60'
                      }`}
                    >
                      {/* Timeline dot and line */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                            milestone.status === 'completed'
                              ? 'bg-green-500'
                              : milestone.status === 'current'
                              ? 'bg-blue-600 animate-pulse'
                              : 'bg-gray-300'
                          }`}
                        >
                          {milestone.icon}
                        </div>
                        {index < roadmapMilestones.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-300 my-2"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-gray-900">
                            {milestone.phase}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              milestone.status === 'completed'
                                ? 'bg-green-100 text-green-700'
                                : milestone.status === 'current'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {milestone.status === 'completed'
                              ? '✓ Completed'
                              : milestone.status === 'current'
                              ? '◉ In Progress'
                              : '○ Upcoming'}
                          </span>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Progress;