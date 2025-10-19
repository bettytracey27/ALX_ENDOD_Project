import React, { useState } from "react";
import certificate1 from "../assets/images/certificate 1.jpg";
import certificate3 from "../assets/images/certificate 3.jpg";
import certificate6 from "../assets/images/certificate 6.jpg";
import beforeImg from "../assets/images/before.png";
import afterImg from "../assets/images/after.jpg";
import watch1 from "../assets/images/watch us 1.jpg";
import watch2 from "../assets/images/watch us 2.jpg";
import watch3 from "../assets/images/watch us 3.mp4";
import watch4 from "../assets/images/watch us 4.mp4";
import watch5 from "../assets/images/watch us 5.mp4";
import watch6 from "../assets/images/watch us 6.mp4";

const WorkSection = () => {
  const [modalImg, setModalImg] = useState(null);

  const certifications = [certificate1, certificate3, certificate6];
  const watchImages = [watch1, watch2];
  const watchVideos = [watch3, watch4, watch5, watch6];

  return (
    <>
      <main className="container mx-auto my-10 px-4">
        {/* Intro Section */}
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-[#0f6c75] mb-3">
            Our Work
          </h2>
          <p className="text-gray-700 max-w-3xl">
            See how ENDOD delivers safe, hygienic, and certified cleaning
            services for homes and businesses. From our official certifications
            to real on-site cleaning results, our work speaks for itself.
          </p>
        </header>

        {/* Certifications Section */}
        <section className="bg-[#2977a1] text-white rounded-2xl p-8 mb-10">
          <h4 className="text-2xl font-semibold mb-6">Our Certifications</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((img, idx) => (
              <div
                key={idx}
                className="w-full h-56 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setModalImg(img)}
              >
                <img
                  src={img}
                  alt={`Certification ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Section */}
        <section className="bg-[#e6f9f8] rounded-2xl p-8 mb-10">
          <h4 className="text-2xl font-semibold mb-6">Before &amp; After Cleaning</h4>
          <div className="grid grid-cols-2 gap-4 text-center">
            <figure>
              <div className="w-full h-56 rounded-xl overflow-hidden shadow-md">
                <img
                  src={beforeImg}
                  alt="Before cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  onClick={() => setModalImg(beforeImg)}
                />
              </div>
              <figcaption className="font-semibold mt-2">Before</figcaption>
            </figure>
            <figure>
              <div className="w-full h-56 rounded-xl overflow-hidden shadow-md">
                <img
                  src={afterImg}
                  alt="After cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  onClick={() => setModalImg(afterImg)}
                />
              </div>
              <figcaption className="font-semibold mt-2">After</figcaption>
            </figure>
          </div>
        </section>

        {/* Watch Us in Action Section */}
        <section className="bg-[#2977a1] text-white rounded-2xl p-8">
          <h4 className="text-2xl font-semibold mb-6">Watch Us in Action</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {watchImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full h-56 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setModalImg(img)}
              >
                <img
                  src={img}
                  alt={`Work Image ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
            {watchVideos.map((video, idx) => (
              <div
                key={idx}
                className="w-full h-56 rounded-xl overflow-hidden shadow-lg bg-black"
              >
                <video
                  src={video}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Full view"
            className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default WorkSection;
