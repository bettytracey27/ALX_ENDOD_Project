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

    </main>
  );
}
