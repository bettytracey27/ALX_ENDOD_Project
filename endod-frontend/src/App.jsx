import React, { useEffect, useRef } from "react";
import logo from "/assets/images/logo.png";
import hero from "/assets/images/hero.jpg";

export default function App() {
  const yearsRef = useRef(null);
  const customersRef = useRef(null);
  const dealersRef = useRef(null);

  const animateCount = (ref, target, duration = 1500) => {
    if (!ref.current) return;
    const start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (target - start) + start);
      ref.current.innerText = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        ref.current.innerText = target.toLocaleString();
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    animateCount(yearsRef, 8, 1400);
    animateCount(customersRef, 2000, 1600);
    animateCount(dealersRef, 2000, 1600);
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* Navbar */}
      <nav className="bg-[#d4f6f2] py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="ENDOD" className="w-14 h-auto rounded-sm" />
            <span className="text-[#0f6c75] font-bold text-xl">ENDOD</span>
          </a>

          <ul className="hidden md:flex gap-6 text-gray-800 font-medium items-center">
            <li><a href="#home" className="hover:font-semibold">Home</a></li>
            <li><a href="#about" className="hover:font-semibold">About Us</a></li>
            <li><a href="#services" className="hover:font-semibold">Services</a></li>
            <li><a href="#work" className="hover:font-semibold">Our Work</a></li>
            <li><a href="#contact" className="px-4 py-2 rounded-full bg-[#42c2d1] text-white font-bold">Contact Us</a></li>
          </ul>

          <div className="md:hidden">
            <a href="#contact" className="px-3 py-2 rounded bg-[#42c2d1] text-white font-semibold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-[#b3e5fc] via-[#4fc3f7] to-[#0288d1] py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left text-[#0e4a74] drop-shadow-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              ENDOD WATER TANKER AND WATER HOLE CLEANING SERVICE PLC
            </h1>
            <p className="text-md md:text-lg mb-6 max-w-xl text-[#063f5c]">
              Safe, Hygienic, and Certified cleaning for homes & businesses. We follow professional standards to ensure your water is clean, safe, and pure.
            </p>

            <div className="mt-4">
              <a
                href="#services"
                className="bg-[#0e4a74] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#2977a1] hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
              <div className="text-sm">
                <strong>Certified Teams</strong>
                <div className="text-sm opacity-90">Trained & insured</div>
              </div>
              <div className="text-sm">
                <strong>Eco Methods</strong>
                <div className="text-sm opacity-90">Safe cleaning</div>
              </div>
              <div className="text-sm">
                <strong>Fast Service</strong>
                <div className="text-sm opacity-90">Same-day booking</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(41,119,161,0.7)] border-4 border-[#0e4a74]/30 hover:scale-105 transition-transform duration-500">
              <img
                src={hero}
                alt="Cleaning Service"
                className="object-cover w-[560px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2977a1] text-white py-12">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h2 ref={yearsRef} className="text-4xl font-bold">0</h2>
              <p className="uppercase mt-2">Years of Experience</p>
            </div>
            <div className="border-x border-white px-6">
              <h2 ref={customersRef} className="text-4xl font-bold">0</h2>
              <p className="uppercase mt-2">Customers Served</p>
            </div>
            <div>
              <h2 ref={dealersRef} className="text-4xl font-bold">0</h2>
              <p className="uppercase mt-2">Dealers in Our Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Updated & More Readable) */}
      <section id="about" className="relative bg-[#0e4a74] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e4a74] via-[#1b6e8d] to-[#0f6c75] opacity-95"></div>

        <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left: Text */}
          <div className="md:w-2/3 text-white drop-shadow-lg">
            <h2 className="text-4xl font-extrabold mb-3 text-[#d4f6f2]">Who We Are</h2>
            <h5 className="text-[#6ee7e7] font-semibold mb-6 text-lg">
              Clean Water • Safe Homes • Healthier Communities
            </h5>
            <p className="leading-relaxed mb-6 max-w-2xl text-[#eaf9ff] text-base">
              <strong className="text-white">ENDOD</strong> is dedicated to protecting families and businesses from contaminated water tanks using advanced cleaning technologies and certified professionals. Every service we provide ensures clean, safe, and reliable water for your home and community.
            </p>

            <div className="flex flex-wrap gap-6 mb-8 justify-start">
              <div className="text-center bg-[#42c2d1]/20 px-6 py-5 rounded-xl shadow-md hover:bg-[#42c2d1]/40 transition-all">
                <i className="fa-solid fa-shield-halved fa-2x text-[#6ee7e7] mb-3"></i>
                <p className="font-bold text-[#f7f9fb]">Certified Hygiene</p>
              </div>
              <div className="text-center bg-[#42c2d1]/20 px-6 py-5 rounded-xl shadow-md hover:bg-[#42c2d1]/40 transition-all">
                <i className="fa-solid fa-star fa-2x text-[#6ee7e7] mb-3"></i>
                <p className="font-bold text-[#f7f9fb]">Trusted by 2000+ Clients</p>
              </div>
              <div className="text-center bg-[#42c2d1]/20 px-6 py-5 rounded-xl shadow-md hover:bg-[#42c2d1]/40 transition-all">
                <i className="fa-solid fa-droplet fa-2x text-[#6ee7e7] mb-3"></i>
                <p className="font-bold text-[#f7f9fb]">Pure Water Promise</p>
              </div>
            </div>

            <a
              href="#about"
              className="inline-block bg-[#d4f6f2] text-[#0e4a74] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white transition-all"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/3 text-center">
            <img
              src="/assets/images/photo_2025-08-09_21-41-36.jpg"
              alt="About Us"
              className="rounded-2xl shadow-[0_0_30px_rgba(66,194,209,0.7)] hover:scale-105 transition-transform w-full object-cover h-[380px] border-4 border-[#42c2d1]/50"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#2977a1] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white text-[#0f6c75] p-6 rounded-xl shadow-lg">
              <i className="fa-solid fa-droplet fa-2x mb-3"></i>
              <h3 className="font-bold mb-2">Water Tank Cleaning</h3>
              <p className="text-sm">We remove harmful bacteria, sediments, and algae from your tanks.</p>
            </div>

            <div className="bg-white text-[#0f6c75] p-6 rounded-xl shadow-lg">
              <i className="fa-solid fa-water fa-2x mb-3"></i>
              <h3 className="font-bold mb-2">Water Pipe Cleaning</h3>
              <p className="text-sm">Advanced cleaning techniques to ensure pure water flow.</p>
            </div>

            <div className="bg-white text-[#0f6c75] p-6 rounded-xl shadow-lg">
              <i className="fa-solid fa-toolbox fa-2x mb-3"></i>
              <h3 className="font-bold mb-2">Tank Installation</h3>
              <p className="text-sm">Professional tank setup & plumbing for a durable system.</p>
            </div>
          </div>

          <div className="mt-8">
            <a href="#services" className="inline-block bg-[#d4f6f2] text-black px-6 py-2 rounded font-bold shadow">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e6f9f8] text-[#0f6c75] py-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6 text-center md:text-left">
          <div>
            <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
              <img src={logo} alt="ENDOD" className="w-14 h-auto" />
              <strong>ENDOD Water Tank Cleaning</strong>
            </div>
            <p className="text-sm">
              CEO & Public Health Specialist: <br />
              <strong>Yosef Derbie</strong>
            </p>
            <div className="flex gap-3 justify-center md:justify-start mt-3 flex-wrap">
              <a href="https://t.me/Endod_cleaning" target="_blank" rel="noreferrer"><i className="fab fa-telegram fa-lg"></i></a>
              <a href="mailto:Yosefabity1984@Gmail.com"><i className="fa fa-envelope fa-lg"></i></a>
              <a href="https://www.instagram.com/endodwatertankcleaning" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100054399361682" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="https://www.tiktok.com/@endodwatertankercleaning" target="_blank" rel="noreferrer"><i className="fab fa-tiktok fa-lg"></i></a>
              <a href="https://chat.whatsapp.com/JZUMvhE43cM2apdE7ovP0j" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp fa-lg"></i></a>
            </div>
          </div>

          <div>
            <h6 className="font-bold mb-3">Explore</h6>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Our Work", "Contact Us"].map((item, i) => (
                <li key={i} className="hover:font-semibold cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-3">Quick Contact</h6>
            <ul className="space-y-2 text-sm">
              <li><i className="fa fa-phone mr-2"></i> +251 911754080</li>
              <li><i className="fa fa-envelope mr-2"></i> Yosefabity1984@Gmail.com</li>
              <li><i className="fa fa-map-marker-alt mr-2"></i> Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-6">
          © {new Date().getFullYear()} ENDOD Water Tank Cleaning. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}












