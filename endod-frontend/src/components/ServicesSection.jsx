import React, { useState } from "react";
import {
  Droplets,
  Wrench,
  Toolbox,
  SprayCan,
  Bug,
  Sofa,
  Water,
} from "lucide-react";

// Import your stage images
import stage1 from "../assets/images/stage1.png";
import stage2 from "../assets/images/stage2.jpg";
import stage3 from "../assets/images/stage3.png";
import stage4 from "../assets/images/stage4.png";
import stage5 from "../assets/images/stage5.png";
import stage6 from "../assets/images/stage6.jpg";
import stage7 from "../assets/images/stage7.png";

const ServicesSection = () => {
  const services = [
    {
      icon: <Droplets className="w-10 h-10 text-[#0f6c75]" />,
      title: "Water Tank Cleaning, Disinfection & Sterilization",
      desc: "We remove harmful bacteria, sediments, and algae from your tanks, ensuring every drop of water is safe for drinking and daily use.",
    },
    {
      icon: <Water className="w-10 h-10 text-[#0f6c75]" />,
      title: "Water Pipe Cleaning",
      desc: "Our advanced cleaning techniques eliminate scale, rust, and biofilm in pipes, giving you uninterrupted, pure water flow throughout your property.",
    },
    {
      icon: <Toolbox className="w-10 h-10 text-[#0f6c75]" />,
      title: "Water Tank Installation & Plumbing",
      desc: "From professional tank setup to precise plumbing, we ensure your water storage system is leak-free, durable, and ready for long-term use.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-[#0f6c75]" />,
      title: "Water Tank Maintenance",
      desc: "Regular inspections and maintenance prevent corrosion, leaks, and contamination, keeping your tanks in peak condition year-round.",
    },
    {
      icon: <Sofa className="w-10 h-10 text-[#0f6c75]" />,
      title: "Sofa and Carpet Cleaning",
      desc: "Using eco-friendly methods, we remove dust, stains, and allergens from your sofas and carpets, restoring comfort, hygiene, and freshness.",
    },
    {
      icon: <Bug className="w-10 h-10 text-[#0f6c75]" />,
      title: "Pest Control",
      desc: "Our safe pest management targets common household and office pests, protecting your family and property without harmful chemicals.",
    },
  ];

  const stages = [
    {
      id: 1,
      title: "Mechanized De-watering",
      img: stage1,
      details: [
        "Clean the manhole and surrounding area.",
        "Pump out remaining water below the foot-valve level using specialized de-watering equipment.",
      ],
    },
    {
      id: 2,
      title: "Sludge Removal",
      img: stage2,
      details: [
        "Extract settled sludge from the tank floor using advanced sludge pumping equipment.",
      ],
    },
    {
      id: 3,
      title: "High-Pressure Cleaning",
      img: stage3,
      details: [
        "Clean walls and ceilings with high-pressure jet cleaners to remove algae, calcination, and other contaminants.",
      ],
    },
    {
      id: 4,
      title: "Vacuum Cleaning",
      img: stage4,
      details: [
        "Use industrial vacuum cleaners to remove all loosened debris and ensure a spotless interior.",
      ],
    },
    {
      id: 5,
      title: "Anti-Microbial Spray",
      img: stage5,
      details: [
        "Disinfect tank surfaces using sodium hypochlorite (5%) for non-metal surfaces and 70% alcohol for metal surfaces.",
        "Destroys bacteria, viruses, fungi, and mycobacteria.",
      ],
    },
    {
      id: 6,
      title: "Rinsing",
      img: stage6,
      details: [
        "After 10 minutes of antimicrobial application, rinse the tank thoroughly with clean water to remove any chemical residues.",
      ],
    },
    {
      id: 7,
      title: "UV Radiation (250 nm)",
      img: stage7,
      details: [
        "Final sterilization using UV light to kill bacterial spores, prions, and floating microorganisms that chemical agents can't eliminate.",
        "Ensures complete disinfection where chemicals may not be effective.",
      ],
    },
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <>
      {/* Our Services */}
      <section className="bg-[#e6f9f8] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#0f6c75]">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h5 className="font-bold text-[#0f6c75] mt-3 mb-2 text-lg">
                    {service.title}
                  </h5>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Stage Cleaning Process */}
      <section className="bg-[#2977a1] py-16 rounded-2xl mt-10 mx-4 md:mx-10">
        <h3 className="text-2xl text-center font-bold text-white mb-10">
          <span className="text-[#42c2d1]">ENDOD’s</span> 7-Stage Cleaning
          Process
        </h3>

        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="relative h-[340px] perspective"
              onClick={() =>
                setFlipped(flipped === stage.id ? null : stage.id)
              }
            >
              <div
                className={`relative w-full h-full duration-700 transform-style preserve-3d ${
                  flipped === stage.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-[#2977a1] rounded-2xl overflow-hidden backface-hidden">
                  <img
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-[#2977a1] text-white p-4">
                    <h5 className="text-lg font-semibold">{stage.id}. {stage.title}</h5>
                    <button className="mt-3 bg-[#d4f6f2] text-black text-sm px-3 py-1 rounded">
                      Read More
                    </button>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#42c2d1] to-[#d4f6f2] text-black p-4 rounded-2xl rotate-y-180 backface-hidden">
                  <h5 className="text-lg font-semibold mb-2">
                    {stage.id}. {stage.title}
                  </h5>
                  <ul className="list-disc text-sm ml-4 space-y-1">
                    {stage.details.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <button className="mt-3 bg-[#d4f6f2] text-black text-sm px-3 py-1 rounded">
                    Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flip animation styles */}
      <style>
        {`
          .perspective { perspective: 1000px; }
          .transform-style { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}
      </style>
    </>
  );
};

export default ServicesSection;
