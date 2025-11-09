import React from 'react';

// Image imports (replace with your actual image paths)
import clinic1 from '../assets/YogeshDemo.png';
import clinic2 from '../assets/validationmeeting.jpg';
import clinic3 from '../assets/validationteampic.jpg';

const ValidationSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Validation from Cardiac Rehabilitation Experts
      </h3>
      <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
        CardioCare was refined through direct collaboration with cardiac rehabilitation specialists across leading clinics. Their feedback helped us ensure clinical safety, usability, and impact in real-world recovery programs.
      </p>

      {/* Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Quote 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <img
            src={clinic1}
            alt="Dr. Yogesh Agarwal"
            className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
          />
          <p className="text-gray-700 italic mb-3">
            “CardioCare’s platform mirrors the metrics we track in-clinic. Home based cardiac rehab is a much needed step towards recover, and making is accessible to all is a worthy endeavor.”
          </p>
          <p className="font-semibold text-gray-900">Dr. Yogesh Agrawal</p>
          <p className="text-gray-500 text-sm">Interventional Cardiologist, OSF Healthcare, IL</p>
        </div>

        {/* Quote 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <img
            src={clinic2}
            alt="Dr. Vivek Goswami"
            className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
          />
          <p className="text-gray-700 italic mb-3">
            “CardioCare is an innovative, and feasible solution which can impact millions. We see this solution bridging the gap between the care in rehabilitation clinics and at-home.“
          </p>
          <p className="font-semibold text-gray-900">Dr. Vivek Goswami and Team</p>
          <p className="text-gray-500 text-sm">Cardiologists, Austin Heart, TX</p>
        </div>

        {/* Quote 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <img
            src={clinic3}
            alt="Dr. Elena Torres"
            className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
          />
          <p className="text-gray-700 italic mb-3">
            “We see this as an essential next step — remote monitoring platforms like CardioCare will redefine outpatient rehabilitation, giving patients confidence in recovery.”
          </p>
          <p className="font-semibold text-gray-900">Dr. Bharati Kolte</p>
          <p className="text-gray-500 text-sm">Medical Director and Educator, GAIN Health Clinic, TX</p>
        </div>

      </div>
    </section>
  );
};

export default ValidationSection;
