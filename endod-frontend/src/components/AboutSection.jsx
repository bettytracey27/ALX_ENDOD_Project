import React, { useState } from "react";
import aboutImage from "../assets/images/photo_2025-08-09_21-41-36.jpg";

// Import Lucide Icons
import {
  Target,
  Eye,
  SprayCan,
  Handshake,
  Lightbulb,
  HeartPulse,
  Wrench,
  Recycle,
  X,
} from "lucide-react";

const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* About Us Section */}
      <section className="bg-[#2977a1] py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
          {/* Left text */}
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
            <p className="text-white leading-relaxed text-base">
              <strong>ENDOD</strong> is a professional water tank cleaning
              service based in Addis Ababa, Ethiopia. Our goal is to lead the
              effort in promoting clean water by addressing the hidden health
              risks of contaminated storage tanks. We serve both residential and
              commercial clients with a focus on awareness, hygiene, and trust.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-[#d4f6f2] text-black font-bold px-6 py-2 rounded hover:bg-[#b6eae4] transition"
            >
              The Story Behind “ENDOD”
            </button>
          </div>

          {/* Right image */}
          <div className="md:w-1/3 text-center">
            <img
              src={aboutImage}
              alt="about us work"
              className="mx-auto rounded-xl shadow-lg max-w-md transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#e6f9f8] py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-[#d4f6f2] p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-[#2977a1] text-white flex justify-center items-center rounded-full mr-3">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-[#2977a1] font-bold text-lg mb-0">
                Our Mission
              </h4>
            </div>
            <p className="text-[#0f6c75] text-sm leading-relaxed">
              To protect public health by providing safe, reliable, and
              high-quality water tank cleaning services. We aim to eliminate the
              risks of contaminated water through strict sanitation procedures
              and community awareness.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#d4f6f2] p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-[#2977a1] text-white flex justify-center items-center rounded-full mr-3">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-[#2977a1] font-bold text-lg mb-0">
                Our Vision
              </h4>
            </div>
            <p className="text-[#0f6c75] text-sm leading-relaxed">
              To be recognized as Ethiopia’s most trusted and accessible water
              sanitation service, setting the highest standards for clean water
              and safe living environments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#2977a1] py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white font-bold text-2xl mb-10">Our Values</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <SprayCan className="w-8 h-8 text-[#d4f6f2]" />,
                title: "Sanitation",
                text: "Strict cleaning process using professional SOP.",
              },
              {
                icon: <Handshake className="w-8 h-8 text-[#d4f6f2]" />,
                title: "Trust",
                text: "Respect customer homes; technician health checks.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-[#d4f6f2]" />,
                title: "Awareness",
                text: "Educating the public about health risks from dirty tanks.",
              },
              {
                icon: <HeartPulse className="w-8 h-8 text-[#d4f6f2]" />,
                title: "Safety & Health",
                text: "Precautions for both staff and clients.",
              },
              {
                icon: <Wrench className="w-8 h-8 text-[#d4f6f2]" />,
                title: "Quality",
                text: "Advanced tools, verified methods, detailed cleaning.",
              },
              {
                icon: <Recycle className="w-8 h-8 text-[#d4f6f2]" />,
                title: "Sustainability",
                text: "Preventing waste, improving water systems.",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="mb-3 flex justify-center">{item.icon}</div>
                <h5 className="text-white font-bold text-lg">{item.title}</h5>
                <p className="text-white text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <h5 className="text-xl font-bold text-[#2977a1] mb-4">
              The Story Behind “ENDOD”
            </h5>
            <p>
              <strong>“Endod”</strong> (Amharic) or <strong>“Shibti”</strong>{" "}
              (Tigrigna) is a natural plant used for centuries in Ethiopia and
              Eritrea as a cleaning agent.
            </p>
            <p className="mt-2">
              In <strong>1964</strong>, Ethiopian scientist{" "}
              <strong>Dr. Aklilu Lemma</strong> discovered Endod fruit kills
              harmful organisms, including those that cause{" "}
              <em>bilharzia</em>.
            </p>
            <p className="mt-2">
              This tradition of cleanliness and protection inspired our company’s
              name — a symbol of our commitment to{" "}
              <strong>safe and hygienic water</strong> for every home and
              business.
            </p>
            <hr className="my-3" />
            <p className="italic text-[#0f6c75]">
              “Clean water is life. ENDOD ensures it reaches every home.”
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
