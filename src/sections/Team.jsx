import { useState, useEffect, useRef } from 'react';

const Team = () => {
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

  const founders = [
    {
      name: 'Anshuman Garg',
      role: 'Co-founder',
      bio: 'Anshuman Garg is a senior at Westwood High School and enjoys coding, robotics and playing saxophone.',
      interests: ['Coding', 'Robotics', 'Saxophone'],
      image: null, // Placeholder for actual image
    },
    {
      name: 'Ayan Malpani',
      role: 'Co-founder',
      bio: 'Ayan Malpani is a Round Rock High School senior who enjoys playing soccer, creative writing, and traveling worldwide.',
      interests: ['Soccer', 'Creative Writing', 'Travel'],
      image: null, // Placeholder for actual image
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
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
            Meet Our Co-founders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            High school innovators on a mission to revolutionize cardiac
            rehabilitation through AI and technology.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              } hover:-translate-y-2`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                {founder.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-semibold text-lg">
                  {founder.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                {founder.bio}
              </p>

              {/* Interests Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {founder.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Georgia Tech Collaboration Badge */}
        <div
          className={`mt-16 max-w-4xl mx-auto bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 shadow-xl text-center transform transition-all duration-700 delay-500 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              🎓 Georgia Tech Research Collaboration
            </h3>
            <p className="text-lg sm:text-xl opacity-90">
              Our team works closely with Georgia Tech researchers in
              computational biology and signal processing to ensure CardioCare
              is grounded in cutting-edge science and validated methodologies.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div
          className={`mt-12 max-w-4xl mx-auto text-center transform transition-all duration-700 delay-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <blockquote className="text-xl sm:text-2xl text-gray-700 italic font-light leading-relaxed">
            "We believe every heart deserves access to life-saving
            rehabilitation, regardless of geography, income, or insurance
            status. CardioCare is our commitment to making that vision a
            reality."
          </blockquote>
          <p className="mt-4 text-gray-500 font-medium">
            — Anshuman Garg & Ayan Malpani
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transform transition-all duration-700 delay-900 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Want to learn more about our journey or collaborate?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;