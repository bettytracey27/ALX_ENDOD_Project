export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-teal-500 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Professional Water Tank Cleaning</h1>
          <p className="text-lg mb-6">
            Reliable, eco-friendly, and affordable services for your home and business.
          </p>
          <a
            href="#services"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ENDOD is a professional water tank cleaning company based in Addis Ababa, Ethiopia. 
            We specialize in maintaining clean and safe water tanks for households, businesses, and industries 
            using environmentally safe and advanced cleaning technologies.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <img src="/images/service1.jpg" alt="Residential Cleaning" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Residential Cleaning</h3>
              <p className="text-gray-600">Complete cleaning service for home water tanks using eco-safe methods.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <img src="/images/service2.jpg" alt="Commercial Cleaning" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Commercial Cleaning</h3>
              <p className="text-gray-600">Reliable cleaning for office, hotel, and business tanks of any size.</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <img src="/images/service3.jpg" alt="Inspection" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Tank Inspection</h3>
              <p className="text-gray-600">Professional inspection and maintenance reports for your water systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <p className="text-gray-700 mb-4">
                “ENDOD made our tanks spotless and the service was fast and professional.”
              </p>
              <h4 className="font-semibold text-blue-700">– Dawit A.</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <p className="text-gray-700 mb-4">
                “They were on time, friendly, and left no mess. Highly recommend ENDOD!”
              </p>
              <h4 className="font-semibold text-blue-700">– Sara M.</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <p className="text-gray-700 mb-4">
                “Excellent service! I now schedule regular cleanings with them.”
              </p>
              <h4 className="font-semibold text-blue-700">– Henok B.</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
