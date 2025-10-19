import React, { useState } from "react";
import {
  FaPhone,
  FaTelegram,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2977a1] to-[#0e4a74] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-[#ffffff1a] p-6 rounded-lg">
          {/* LEFT: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-2xl font-bold">Contact Us</h4>
            <p className="text-gray-100">
              Call us, message us, or visit us — we’re ready to serve you.
            </p>

            <p className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+251911754080" className="hover:underline">
                +251911754080
              </a>
              ,&nbsp;
              <a href="tel:+251943318674" className="hover:underline">
                +251943318674
              </a>
            </p>
            <p className="flex items-center">
              <FaTelegram className="mr-2" />
              <a
                href="https://t.me/Endod_cleaning"
                target="_blank"
                className="hover:underline"
              >
                Telegram
              </a>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:Yosefabity1984@Gmail.com"
                className="hover:underline"
              >
                Yosefabity1984@Gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <FaInstagram className="mr-2" />
              <a
                href="https://www.instagram.com/endodwatertankcleaning?utm_source=qr&igsh=MTh1cmJ1eGYxdTI5eQ=="
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
            </p>
            <p className="flex items-center">
              <FaFacebook className="mr-2" />
              <a
                href="https://www.facebook.com/profile.php?id=100054399361682&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                className="hover:underline"
              >
                Facebook
              </a>
            </p>
            <p className="flex items-center">
              <FaTiktok className="mr-2" />
              <a
                href="https://www.tiktok.com/@endodwatertankercleaning?_t=ZM-8ynSxI6NeEC&_r=1"
                target="_blank"
                className="hover:underline"
              >
                TikTok
              </a>
            </p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2" />
              <a
                href="https://chat.whatsapp.com/JZUMvhE43cM2apdE7ovP0j?mode=ac_t"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </p>
            <p>
              <b>Imo:</b>{" "}
              <a
                href="https://s.imoim.net/9b4BEr"
                target="_blank"
                className="hover:underline"
              >
                Imo
              </a>
            </p>
            <p className="flex items-center">
              <FaLinkedin className="mr-2" />
              <a
                href="https://www.linkedin.com/in/yosef-derbie-79282b1b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Kebena, Addis Ababa, Ethiopia
            </p>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white text-[#2977a1] rounded-xl p-6">
            <p className="mb-4">
              Tell us what you need, and our team will contact you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-[#0f6c75] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#42c2d1] outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-[#0f6c75] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#42c2d1] outline-none"
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No"
                required
                className="w-full border border-[#0f6c75] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#42c2d1] outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message"
                required
                className="w-full border border-[#0f6c75] rounded-md px-3 py-2 focus:ring-2 focus:ring-[#42c2d1] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#2977a1] text-white font-bold rounded-md py-2 hover:bg-[#3bb2c0] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mt-10 bg-gradient-to-br from-[#2977a1] to-[#0e4a74] text-center p-10 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-bold mb-4">Schedule Your Service Today!</h4>
          <p className="max-w-2xl mx-auto mb-4 leading-relaxed">
            Don’t wait until it’s too late! Protect your health and ensure the
            quality of your water supply with{" "}
            <b>Endod Water Tank and Water Hole Cleaning Services</b>. Contact us
            today to schedule an appointment or to learn more about our
            services.
          </p>
          <p className="italic">
            "ENDOD<br />Zero Virus<br />Zero Bacteria."
          </p>
        </div>
      </div>

      {/* Success Message */}
      {submitted && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSubmitted(false)}
        >
          <div className="bg-white text-[#2977a1] rounded-lg p-8 shadow-lg text-center max-w-sm">
            <h3 className="text-xl font-bold mb-2">
              Message Submitted Successfully!
            </h3>
            <p>We’ll get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-[#2977a1] text-white px-4 py-2 rounded-md hover:bg-[#3bb2c0]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
