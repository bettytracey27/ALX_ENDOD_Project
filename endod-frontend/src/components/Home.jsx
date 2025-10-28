import React, { useEffect } from "react";

const Home = () => {
  // 🧮 Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const animateCounters = () => {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = target / 80; // speed control

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    };

    // start animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <>
      {/* 🌊 Hero Section */}
      <section className="bg-gradient-to-r from-[#2977a1] to-[#0e4a74] text-white py-16 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            {/* Left Text */}
            <div className="text-center md:text-left">
              <h2 className="font-bold text-3xl md:text-4xl mb-4">
                ENDOD WATER TANKER AND WATER HOLE CLEANING SERVICE PLC
              </h2>
              <p className="mb-4 text-lg">
                Here you find Safe, Hygienic, and Certified services for homes & businesses.
              </p>
              <a
                href="/services"
                className="inline-block font-bold bg-[#d4f6f2] text-black px-6 py-2 rounded"
              >
                Explore Our Services
              </a>
            </div>

            {/* Right Image */}
            <div className="text-center">
              <img
                src="/images/hero-image.jpg"
                alt="Cleaning Service"
                className="mx-auto rounded-xl shadow-lg max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🧾 Stats Section */}
      <section className="bg-[#2977a1] text-white py-10">
        <div className="container mx-auto text-center px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h2 className="font-bold text-4xl counter" data-target="8">
                0
              </h2>
              <p className="uppercase">Years of Experience</p>
            </div>
            <div className="md:border-x border-white">
              <h2 className="font-bold text-4xl counter" data-target="2000">
                0
              </h2>
              <p className="uppercase">Customers Served</p>
            </div>
            <div>
              <h2 className="font-bold text-4xl counter" data-target="2000">
                0
              </h2>
              <p className="uppercase">Dealers in Our Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* 👋 About Section */}
      <section className="bg-[#0e4a74] py-16 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
          {/* Left Text */}
          <div>
            <h2 className="font-bold text-3xl mb-3">Who We Are</h2>
            <h5 className="text-[#42c2d1] font-semibold mb-4">
              Clean Water • Safe Homes • Healthier Communities
            </h5>
            <p className="text-[1.05rem] leading-relaxed mb-6">
              <strong>ENDOD</strong> is more than a cleaning service — we are a
              mission-driven company in Addis Ababa, protecting families and
              businesses from the hidden dangers of contaminated water tanks.
            </p>

            <div className="flex flex-wrap gap-8 text-center mb-6">
              <div>
                <i className="fa-solid fa-shield-halved fa-2x"></i>
                <p className="font-bold">Certified Hygiene</p>
              </div>
              <div>
                <i className="fa-solid fa-star fa-2x"></i>
                <p className="font-bold">Trusted by 2000+ Clients</p>
              </div>
              <div>
                <i className="fa-solid fa-droplet fa-2x"></i>
                <p className="font-bold">Pure Water Promise</p>
              </div>
            </div>

            <a
              href="/about"
              className="inline-block font-bold px-6 py-2 bg-[#d4f6f2] text-black rounded-full"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Image */}
          <div className="text-center">
            <img
              src="/images/photo_2025-08-09_21-41-36.jpg"
              alt="About Us"
              className="rounded-xl shadow-lg mx-auto max-w-[430px] transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />
          </div>
        </div>
      </section>

      {/* 🧰 Services Section */}
      <section className="bg-[#2977a1] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            <div className="bg-white text-gray-700 p-6 rounded shadow-sm hover:shadow-md transition">
              <i className="fa-solid fa-droplet fa-2x mb-3 text-[#0f6c75]"></i>
              <h5 className="font-bold mb-2">Water Tank Cleaning</h5>
              <p>
                We remove harmful bacteria, sediments, and algae from your tanks.
              </p>
            </div>
            <div className="bg-white text-gray-700 p-6 rounded shadow-sm hover:shadow-md transition">
              <i className="fa-solid fa-water fa-2x mb-3 text-[#0f6c75]"></i>
              <h5 className="font-bold mb-2">Water Pipe Cleaning</h5>
              <p>
                Advanced cleaning techniques to ensure pure water flow throughout
                your property.
              </p>
            </div>
            <div className="bg-white text-gray-700 p-6 rounded shadow-sm hover:shadow-md transition">
              <i className="fa-solid fa-toolbox fa-2x mb-3 text-[#0f6c75]"></i>
              <h5 className="font-bold mb-2">Tank Installation</h5>
              <p>
                Professional tank setup & plumbing to ensure a durable system.
              </p>
            </div>
          </div>

          <a
            href="/services"
            className="inline-block mt-8 bg-[#d4f6f2] text-black font-bold px-6 py-2 rounded"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="bg-[#0e4a74] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            <div className="bg-white text-gray-700 p-6 rounded shadow-sm">
              <p>"ENDOD gave us the cleanest tank we’ve ever had. Highly professional!"</p>
              <strong>- A Happy Customer</strong>
            </div>
            <div className="bg-white text-gray-700 p-6 rounded shadow-sm">
              <p>"Their team was punctual, polite, and did an amazing job. 10/10!"</p>
              <strong>- Business Client</strong>
            </div>
            <div className="bg-white text-gray-700 p-6 rounded shadow-sm">
              <p>"Safe, hygienic, and reliable. I recommend ENDOD to everyone."</p>
              <strong>- Homeowner</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
