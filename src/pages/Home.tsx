
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Doctors from '../components/sections/Doctors';
import Testimonials from '../components/sections/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Doctors />
     
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our emergency department is open 24/7 with specialized trauma care teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="inline-flex items-center justify-center h-14 px-8 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Emergency: (555) 123-4567
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-14 px-8 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
