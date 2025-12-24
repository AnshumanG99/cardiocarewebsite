import { useState, useEffect, useRef } from 'react';

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
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

  const problems = [
    {
      stat: '800,000+',
      description: 'heart attacks per year in the U.S.',
      icon: '💔',
    },
    {
      stat: '$5,000+',
      description: 'average cost of traditional rehab',
      icon: '💰',
    },
    {
      stat: '20-30%',
      description: 'of patients access cardiac rehab',
      icon: '📊',
    },
    {
      stat: '47%',
      description: 'higher chance of repeat events without rehab',
      icon: '⚠️',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
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
            Cardiac Rehab Saves Lives
            <br />
            <span className="text-red-600">But Only 20-30% Access It</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional cardiac rehabilitation is life-saving but plagued by
            barriers that prevent most patients from getting the care they need.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-4xl font-bold text-blue-600 mb-3">
                {problem.stat}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 delay-500 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              CardioCare Changes Everything
            </h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              We're breaking down every barrier to cardiac rehabilitation, making
              it accessible, affordable, and available to everyone who needs it.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('solution');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Discover Our Solution →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;