import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Home />
      <About />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
