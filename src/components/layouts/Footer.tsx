import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* Rounded container */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-[#1f2a1c] px-8 py-20 text-sm text-gray-300 shadow-xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Brand */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight">
                <span className="text-[#273f23] bg-yellow-400 px-2 py-0.5 rounded-md mr-1">
                  C
                </span>
                <span className="text-white">linova</span>
              </h2>
              <p className="max-w-sm text-gray-400">
                Modern healthcare built on trust, precision, and compassion.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-gray-400">
              <Link to="/doctors" className="hover:text-yellow-400 transition">
                Doctors
              </Link>
              <Link to="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
              <Link to="/appointments" className="hover:text-yellow-400 transition">
                Appointments
              </Link>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Bottom */}
          <div className="flex flex-col gap-3 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Clinova Health. All rights reserved.</p>
            <p className="tracking-wide">
              Designed for modern care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
