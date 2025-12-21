
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Harmony Health</h2>
                <p className="text-gray-400 text-sm">Medical Center</p>
              </div>
            </div>
            <p className="text-gray-400">
              Delivering compassionate healthcare with cutting-edge technology and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/appointment" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Patient Portal</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Cardiology</li>
              <li className="text-gray-400">Orthopedics</li>
              <li className="text-gray-400">Pediatrics</li>
              <li className="text-gray-400">Neurology</li>
              <li className="text-gray-400">Emergency Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">123 Medical Center Dr, Health City</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@harmonyhealth.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Harmony Health Medical Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
