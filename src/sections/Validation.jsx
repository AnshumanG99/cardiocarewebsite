import { useState, useEffect, useRef } from 'react';
import clinic1 from '../assets/YogeshDemo.png';
import clinic2 from '../assets/validationmeeting.jpg';
import clinic3 from '../assets/validationteampic.jpg';

const ValidationSection = () => {
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

  const testimonials = [
    {
      name: 'Dr. Yogesh Agrawal',
      title: 'Interventional Cardiologist, OSF Healthcare, IL',
      quote: "CardioCare's platform mirrors the metrics we track in-clinic. Home based cardiac rehab is a much needed step towards recovery, and making it accessible to all is a worthy endeavor.",
      image: clinic1,
    },
    {
      name: 'Dr. Vivek Goswami and Team',
      title: 'Cardiologists, Austin Heart, TX',
      quote: "CardioCare is an innovative, and feasible solution which can impact millions. We see this solution bridging the gap between the care in rehabilitation clinics and at-home.",
      image: clinic2,
    },
    {
      name: 'Dr. Bharati Kolte',
      title: 'Medical Director and Educator, GAIN Health Clinic, TX',
      quote: "We see this as an essential next step — remote monitoring platforms like CardioCare will redefine outpatient rehabilitation, giving patients confidence in recovery.",
      image: clinic3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="validation"
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
            Validation from Cardiac Rehabilitation Experts
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            CardioCare was refined through direct collaboration with cardiac
            rehabilitation specialists across leading clinics. Their feedback
            helped us ensure clinical safety, usability, and impact in
            real-world recovery programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
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
              {/* Profile Image */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 mb-3 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed text-center">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Name and Title */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className={`mt-16 max-w-4xl mx-auto text-center transform transition-all duration-700 delay-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Trusted by Healthcare Professionals
            </h3>
            <p className="text-lg text-white opacity-90">
              Join the growing network of cardiologists and rehabilitation
              specialists who believe in CardioCare's mission.
            </p>
          </div>
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
            Want to see CardioCare in action?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;