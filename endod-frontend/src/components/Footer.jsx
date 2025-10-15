export default function Footer() {
  return (
    <footer className="bg-[#e6f9f8] text-[#0f6c75] py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6 text-center md:text-left">
        {/* Left */}
        <div>
          <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
            <img src="/images/logo.png" alt="ENDOD" className="h-12" />
            <strong>ENDOD Water Tank Cleaning</strong>
          </div>
          <p className="text-sm">CEO & Public Health Specialist:<br/><strong>Yosef Derbie</strong></p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <i className="fab fa-telegram"></i>
            <i className="fa fa-envelope"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>

        {/* Center */}
        <div>
          <h6 className="font-bold mb-2">Explore</h6>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Our Work</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h6 className="font-bold mb-2">Quick Contact</h6>
          <ul className="text-sm space-y-1">
            <li><i className="fa fa-phone mr-2"></i> +251 911754080</li>
            <li><i className="fa fa-envelope mr-2"></i> Yosefabity1984@Gmail.com</li>
            <li><i className="fa fa-map-marker-alt mr-2"></i> Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-xs">
        © {new Date().getFullYear()} ENDOD Water Tank Cleaning. All Rights Reserved.
      </div>
    </footer>
  );
}



