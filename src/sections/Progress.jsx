import { useState, useEffect, useRef } from 'react';
import CardioCareDemonstration from '../assets/CardioCareDemonstration.mp4';
import prototype1 from '../assets/cardiocareprototype1.jpg';
import prototype2 from '../assets/cardiocareprototype2.jpg';
import prototype3 from '../assets/cardiocareprototype3.jpg';

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
      dates: 'May 2024 - Oct 2024',
    },
    {
      phase: 'Phase 2: Prototype Development',
      status: 'completed',
      description:
        'Built Arduino-based EKG monitoring device with Bluetooth connectivity.',
      icon: '🛠️',
      dates: 'Nov 2024 - May 2025',
    },
    {
      phase: 'Phase 3: Testing & Validation',
      status: 'completed',
      description:
        'Conducting pilot studies with local cardiac rehabilitation centers and testing with real patients.',
      icon: '📊',
      dates: 'June 2025 - Sept 2025',
    },
    {
      phase: 'Phase 4: Clinical Trials',
      status: 'current',
      description:
        'Apply for certifications including HIPAA, CE, and FDA approval. Conduct FDA-compliant clinical trials to validate safety and efficacy.',
      icon: '🏥',
      dates: 'Oct 2025 - Present',
    },
    {
      phase: 'Phase 5: Market Launch',
      status: 'upcoming',
      description:
        'Commercial release for healthcare providers and direct-to-consumer market.',
      icon: '🚀',
      dates: 'Expected: May 2026',
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
          {activeTab === 'action' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
                  See CardioCare in Action
                </h3>
                <p className="text-lg text-center text-gray-600 mb-8">
                  See how CardioCare brings hospital-grade cardiac recovery
                  home—right from setup to personalized rehab in action.
                </p>

                {/* Unified Gradient Section */}
                <div 
                  className={`bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 shadow-xl transform transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: '400ms',
                  }}
                >
                  {/* LEFT: CardioCare Demo Video + Description */}      
                  <div className="flex flex-col items-center md:items-center text-center md:text-center w-full md:w-[67%] md:pl-0">
                    <video
                      src={CardioCareDemonstration}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-2xl shadow-xl max-h-[80vh] w-auto object-contain object-cover scale-[.95]"
                      style={{ aspectRatio: '9 / 17.5' }}
                    />
                    <p className="text-gray-600 max-w-md mt-4">
                      Experience how CardioCare redefines remote cardiac rehabilitation — personalized, data-driven, and accessible anywhere. Early prototype demo showcasing AI-driven rehab programming with real-time ECG monitoring via our custom wearable device.
                    </p>
                  </div>
                  <div className="hidden md:block w-[3px] bg-gray-300/50 self-stretch rounded-full" />

                  {/* RIGHT: Prototype Wearables Section */}
                  <div className="flex flex-col items-center md:items-center w-full md:w-[55%] md:pl-0">
                    <div className="flex flex-col justify-center gap-12 w-full">

                      {/* Prototype 1 */}
                      <div className="flex flex-col items-center w-full gap-4">
                        {/* Header (centered between image + caption) */}
                        <p className="text-gray-700 font-semibold text-lg text-center">
                          V0 • May 2024 – Oct 2024
                        </p>

                        {/* Image + Caption Row */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                          <img
                            src={prototype1}
                            alt="Prototype v1"
                            className="rounded-xl shadow-lg object-contain w-full sm:w-[55%] h-auto"
                          />
                          <p className="text-gray-600 font-light text-lg text-center sm:text-left sm:w-[45%]">
                            Basic proof-of-concept: ECG paired with RandomForest for active cardiac stress screening.
                          </p>
                        </div>
                      </div>

                      {/* Prototype 2 */}
                      <div className="flex flex-col items-center w-full gap-4">
                        <p className="text-gray-700 font-semibold text-lg text-center">
                          V1 • November 2024 – March 2025
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                          <img
                            src={prototype2}
                            alt="Prototype v2"
                            className="rounded-xl shadow-lg object-contain w-full sm:w-[55%] h-auto"
                          />
                          <p className="text-gray-600 font-light text-lg text-center sm:text-left sm:w-[45%]">
                            Hand-held casing, battery, and mobile app with 20+ hours of monitoring with TensorFlow Lite deep learning.
                          </p>
                        </div>
                      </div>

                      {/* Prototype 3 */}
                      <div className="flex flex-col items-center w-full gap-4">
                        <p className="text-gray-700 font-semibold text-lg text-center">
                          V2 • May 2025 – Present
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                          <img
                            src={prototype3}
                            alt="Prototype v3"
                            className="rounded-xl shadow-lg object-contain w-full sm:w-[55%] h-auto"
                          />
                          <p className="text-gray-600 font-light text-lg text-center sm:text-left sm:w-[45%]">
                            ECG/EMG multimodal screening capabilities. 99% accuracy in rehab programming.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div 
                  className={`mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-center shadow-lg transform transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: '600ms',
                  }}
                >
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
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
                  CardioCare Roadmap
                </h3>
                <p className="text-lg text-center text-gray-600 mb-10">
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
                        <p className="text-gray-600 font-thin">{milestone.dates}</p>
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